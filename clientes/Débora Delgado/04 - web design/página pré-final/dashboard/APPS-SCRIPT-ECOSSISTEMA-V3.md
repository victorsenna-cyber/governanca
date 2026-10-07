# Apps Script v3 — hub do ecossistema (payload real PagTrust mapeado)

> Mapeado sobre o **payload real** do webhook PagTrust (estrutura Pagar.me v2.0.0). Substitui v2. Trata leads (popup), vendas multiproduto, order bump, ciclo de vida (assinatura/acesso/certificado) e abandono. Valida token. Expõe `?report=funnel` pro dashboard.
>
> **Atualizar sem trocar URL:** cole o código → Implantar → **Gerenciar implantações → editar (lápis) → Nova versão → Implantar**. A URL `/exec` NÃO muda. Não precisa mexer no webhook nem na página.

---

## Estrutura real do payload (o que aprendemos do teste)
- Tipo do evento: **`event`** (`PURCHASE_APPROVED`, `PIX_GENERATED`, `PURCHASE_REFUNDED`, `PURCHASE_CANCELED`, `PURCHASE_CHARGEBACK`, `PURCHASE_BILLET_PRINTED`, `SUBSCRIPTION_CREATED/RENEWED/CANCELLED`, `ACCESS_ENDED`, `PURCHASE_OUT_OF_SHOPPING_CART`).
- Comprador: **`data.buyer.email`**, `data.buyer.name`, `data.buyer.checkout_phone` (ou `data.buyer.phone` no abandono).
- Produto: **`data.product.name`**, `data.product.id`.
- Valor pago: **`data.purchase.full_price.value`** (preço cheio, o que o cliente pagou) · `data.purchase.price.value` = líquido do produtor.
- Transação: `data.purchase.transaction`.
- Order bump: `data.purchase.order_bump.is_order_bump` (bool) + `parent_purchase_transaction` (aponta pro pai).
- UTMs: **dois formatos** — vendas: `data.purchase.origin.{utmsource,utmmedium,utmcampaign,content,term}` · abandono: `data.utms.{utm_source,...}`.
- Assinatura: `data.subscription.{status,plan.name}`.

---

## Código (substituir tudo no Apps Script)

```javascript
/* ===== CONFIG ===== */
// Token do webhook PagTrust — cole o token que a PagTrust gerou. Valida a assinatura.
var WEBHOOK_TOKEN = 'COLE_O_TOKEN_AQUI';
// Se a PagTrust mandar o token num header/campo específico, ajustar em checkToken_ (ver nota).

var SH_LEADS='Leads', SH_VENDAS='Vendas', SH_CICLO='CicloVida', SH_DEBUG='_webhook_debug';
var H_LEADS=['timestamp','nome','telefone','email','turma','lote','utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
var H_VENDAS=['timestamp','evento','email','nome','telefone','produto','produto_id','valor','liquido','pagamento','is_order_bump','parent_tx','transacao','utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
var H_CICLO=['timestamp','evento','email','nome','produto','plano','assinatura_status','transacao'];

function doPost(e){
  try{
    var data={};
    if(e && e.postData && e.postData.contents) data=JSON.parse(e.postData.contents);

    // ---- LEAD (popup): tem "nome" no topo e NÃO tem "event" ----
    if(data.nome!==undefined && data.event===undefined && data.evento===undefined){
      sh_(SH_LEADS,H_LEADS).appendRow([data.ts||new Date().toISOString(),
        data.nome||'',data.telefone||'',data.email||'',data.turma||'',data.lote||'',
        data.utm_source||'',data.utm_medium||'',data.utm_campaign||'',data.utm_content||'',data.utm_term||'']);
      return json_({ok:true,tipo:'lead'});
    }

    // ---- WEBHOOK PagTrust ----
    // (opcional) validação de token — ver nota checkToken_
    // if(!checkToken_(e,data)) return json_({ok:false,error:'token'});

    sh_(SH_DEBUG).appendRow([new Date().toISOString(), JSON.stringify(data)]);

    var ev = data.event||'';
    var d  = data.data||{};
    var buyer=d.buyer||{}, prod=d.product||{}, pur=d.purchase||{}, sub=d.subscription||{};
    var email=(buyer.email||'').toLowerCase();
    var nome = buyer.name||'';
    var fone = buyer.checkout_phone||buyer.phone||'';
    var full = (pur.full_price&&pur.full_price.value)||0;
    var liq  = (pur.price&&pur.price.value)||0;
    var pay  = (pur.payment&&pur.payment.type)||'';
    var ob   = pur.order_bump||{};
    var tx   = pur.transaction||d.transactionId||'';

    // UTMs: origin (vendas) ou data.utms (abandono)
    var o=pur.origin||{}, u=d.utms||{};
    var us=o.utmsource||u.utm_source||'', um=o.utmmedium||u.utm_medium||'',
        uc=o.utmcampaign||u.utm_campaign||'', ux=o.content||u.utm_content||'', ut=o.term||u.utm_term||'';

    // Roteia: eventos de ciclo de vida vão pra aba CicloVida; o resto (financeiro) pra Vendas.
    var CICLO=['SUBSCRIPTION_CREATED','SUBSCRIPTION_RENEWED','SUBSCRIPTION_CANCELLED','ACCESS_ENDED','CERTIFICATE_ISSUED','LESSON_COMPLETED'];
    if(CICLO.indexOf(ev)>=0){
      sh_(SH_CICLO,H_CICLO).appendRow([new Date().toISOString(),ev,email,nome,
        prod.name||'',(sub.plan&&sub.plan.name)||'',sub.status||'',tx]);
      return json_({ok:true,tipo:'ciclo',evento:ev});
    }

    sh_(SH_VENDAS,H_VENDAS).appendRow([new Date().toISOString(),ev,email,nome,fone,
      prod.name||'',prod.id||'',full,liq,pay,ob.is_order_bump||false,ob.parent_purchase_transaction||'',tx,
      us,um,uc,ux,ut]);
    return json_({ok:true,tipo:'venda',evento:ev});

  }catch(err){ return json_({ok:false,error:String(err)}); }
}

function doGet(e){
  var rep=(e&&e.parameter&&e.parameter.report)||'';
  if(rep==='funnel') return json_(buildFunnel_());
  return ContentService.createTextOutput('ok');
}

function buildFunnel_(){
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var leads=rows_(ss,SH_LEADS), vendas=rows_(ss,SH_VENDAS), ciclo=rows_(ss,SH_CICLO);

  var leadByEmail={}, byUtm={}, leadTurma={};
  leads.forEach(function(r){ var em=(r.email||'').toLowerCase(); if(em) leadByEmail[em]=r;
    var s=r.utm_source||'(direto)'; byUtm[s]=byUtm[s]||{lead:0,venda:0,receita:0}; byUtm[s].lead++;
    var t=r.turma||'?'; leadTurma[t]=(leadTurma[t]||0)+1; });

  // aprovadas = PURCHASE_APPROVED (dedup por transação, ignora bump duplicado do mesmo tx? bump tem tx próprio)
  var aprov=vendas.filter(function(v){ return v.evento==='PURCHASE_APPROVED'; });
  var receita=0, vendaEmail={}, porProduto={}, porTurmaV={}, porLoteV={};
  aprov.forEach(function(v){
    var val=num_(v.valor); receita+=val;
    var em=(v.email||'').toLowerCase(); if(em) vendaEmail[em]=v;
    var p=v.produto||'?'; porProduto[p]=porProduto[p]||{qtd:0,receita:0}; porProduto[p].qtd++; porProduto[p].receita+=val;
    var lead=leadByEmail[em]; var s=lead?(lead.utm_source||'(direto)'):(v.utm_source||'(direto)');
    byUtm[s]=byUtm[s]||{lead:0,venda:0,receita:0}; byUtm[s].venda++; byUtm[s].receita+=val;
  });

  // eventos de risco/pós-venda
  var refund=vendas.filter(function(v){return ['PURCHASE_REFUNDED','PURCHASE_CANCELED','PURCHASE_CHARGEBACK'].indexOf(v.evento)>=0;}).length;
  var pix=vendas.filter(function(v){return v.evento==='PIX_GENERATED';}).length;

  // ciclo de vida
  var subCreated=ciclo.filter(function(c){return c.evento==='SUBSCRIPTION_CREATED';}).length;
  var subRenewed=ciclo.filter(function(c){return c.evento==='SUBSCRIPTION_RENEWED';}).length;
  var subCancel =ciclo.filter(function(c){return c.evento==='SUBSCRIPTION_CANCELLED';}).length;
  var accessEnded=ciclo.filter(function(c){return c.evento==='ACCESS_ENDED';}).length;

  // abandono: lead sem compra aprovada
  var abandono=[];
  Object.keys(leadByEmail).forEach(function(em){ if(!vendaEmail[em]){ var r=leadByEmail[em];
    abandono.push({nome:r.nome,email:em,telefone:r.telefone,turma:r.turma,ts:r.timestamp}); }});

  var ticket=aprov.length?receita/aprov.length:0;
  return {
    updated:new Date().toISOString(),
    funil:{leads:leads.length,pix:pix,vendas:aprov.length,conv:leads.length?aprov.length/leads.length:0},
    receita:receita,ticket:ticket,refunds:refund,
    porProduto:porProduto, porUtm:byUtm,
    cicloVida:{subCreated:subCreated,subRenewed:subRenewed,subCancel:subCancel,accessEnded:accessEnded},
    abandono:abandono.slice(0,300)
  };
}

/* ===== helpers ===== */
function json_(o){return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);}
function sh_(name,head){var ss=SpreadsheetApp.getActiveSpreadsheet();var s=ss.getSheetByName(name)||ss.insertSheet(name);if(head&&s.getLastRow()===0)s.appendRow(head);return s;}
function rows_(ss,name){var s=ss.getSheetByName(name);if(!s||s.getLastRow()<2)return [];var d=s.getDataRange().getValues();var h=d.shift();return d.map(function(r){var o={};h.forEach(function(k,i){o[k]=r[i];});return o;});}
function num_(v){return parseFloat(String(v).replace(/[^0-9.,-]/g,'').replace(/\.(?=\d{3})/g,'').replace(',','.'))||0;}
```

---

## Sobre o token (validação da assinatura)
A PagTrust gera um token pra você validar que o webhook é autêntico. **Como ela envia o token varia** (header tipo `x-webhook-token`, ou campo no corpo). No teste não apareceu no payload — provavelmente vem num **header HTTP**. Limitação do Apps Script: `doPost(e)` **não expõe headers customizados** facilmente. Duas opções:
1. **Pragmática (recomendada agora):** manter o endpoint sem validar header, mas **não divulgar a URL** e confiar que o `/exec` é obscuro. Risco baixo pro estágio. (A validação fica como melhoria.)
2. **Forte:** se a PagTrust permitir enviar o token como **parâmetro na URL** do webhook (ex: `/exec?token=XXX`), aí `checkToken_` compara `e.parameter.token === WEBHOOK_TOKEN`. Verificar na PagTrust se dá pra anexar `?token=` na URL de destino.

```javascript
function checkToken_(e,data){
  // opção URL param: return e && e.parameter && e.parameter.token === WEBHOOK_TOKEN;
  return true; // por ora não bloqueia
}
```
> **Guarde o token** (gerenciador de senhas). Não precisa colar no chat. Quando decidirmos a validação, você cola em `WEBHOOK_TOKEN` no Google.

## Abas criadas
- `Leads` (popup) · `Vendas` (financeiro: approved/pix/refund/chargeback/billet/bump) · `CicloVida` (assinatura/acesso) · `_webhook_debug` (auditoria).

## Dashboard
O `painel/index.html` já lê `?report=funnel`. Vou atualizar o dashboard pra mostrar as novas seções (por produto, ciclo de vida) — próximo passo depois de você colar o v3 e reimplantar.
```
