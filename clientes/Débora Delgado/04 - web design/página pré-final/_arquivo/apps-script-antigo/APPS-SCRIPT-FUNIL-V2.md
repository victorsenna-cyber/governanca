# Apps Script v2 — cérebro do funil (leads + webhook PagTrust + endpoint do dashboard)

> Evolui o `APPS-SCRIPT-LEADS.md`. O MESMO Web App vira o hub do funil: recebe leads (do popup) e vendas/eventos (do webhook PagTrust), grava em abas separadas, e expõe um endpoint de leitura (`doGet`) que o dashboard consome. **Substitui o script anterior** (mesma URL /exec — é só atualizar o código e reimplantar nova versão).

---

## Abas da planilha
- **`Leads`** — do popup (já existe): timestamp, nome, telefone, email, turma, lote, utm_source…term.
- **`Vendas`** — do webhook PagTrust (nova): timestamp, evento, email, nome, telefone, valor, produto, turma?, lote?, transacao_id, status, raw.
- **`_webhook_debug`** — 1ª coluna = JSON cru do webhook (pra inspecionar o payload real da PagTrust no 1º teste e mapear os campos certos).

---

## Código (Extensões → Apps Script — substituir tudo)

```javascript
var SHEET_LEADS = 'Leads';
var SHEET_VENDAS = 'Vendas';
var SHEET_DEBUG = '_webhook_debug';

var HEADERS_LEADS = ['timestamp','nome','telefone','email','turma','lote',
  'utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
var HEADERS_VENDAS = ['timestamp','evento','email','nome','telefone','valor',
  'produto','turma','lote','transacao_id','status'];

function sheet_(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name) || ss.insertSheet(name);
  if (headers && sh.getLastRow() === 0) sh.appendRow(headers);
  return sh;
}

function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) data = JSON.parse(e.postData.contents);

    // ---- Roteamento: lead (do nosso popup) vs webhook (PagTrust) ----
    // Nosso popup manda { nome, email, turma, lote, ... } SEM "evento".
    // A PagTrust manda um payload com status/evento de pagamento.
    var isLead = data && data.nome !== undefined && data.evento === undefined && data.status === undefined && data.event === undefined;

    if (isLead) {
      var shL = sheet_(SHEET_LEADS, HEADERS_LEADS);
      shL.appendRow([
        data.ts || new Date().toISOString(),
        data.nome||'', data.telefone||'', data.email||'', data.turma||'', data.lote||'',
        data.utm_source||'', data.utm_medium||'', data.utm_campaign||'',
        data.utm_content||'', data.utm_term||''
      ]);
      return json_({ ok:true, tipo:'lead' });
    }

    // ---- Webhook PagTrust ----
    // Grava o payload cru p/ inspeção (mapear campos reais no 1º teste)
    sheet_(SHEET_DEBUG).appendRow([new Date().toISOString(), JSON.stringify(data)]);

    // Mapeamento tolerante (ajustar os nomes dos campos após ver o payload real).
    var ev   = pick_(data, ['evento','event','status','type']);
    var email= pick_(data, ['email','customer_email','cliente_email']) || deep_(data, ['customer','email']) || deep_(data, ['cliente','email']);
    var nome = pick_(data, ['nome','name','customer_name']) || deep_(data, ['customer','name']) || deep_(data, ['cliente','nome']);
    var fone = pick_(data, ['telefone','phone','cellphone']) || deep_(data, ['customer','phone']);
    var valor= pick_(data, ['valor','amount','value','total','price']) || deep_(data, ['order','amount']);
    var prod = pick_(data, ['produto','product','product_name']) || deep_(data, ['product','name']);
    var turma= pick_(data, ['turma']);
    var lote = pick_(data, ['lote']);
    var tid  = pick_(data, ['transacao_id','transaction_id','id','order_id','charge_id']);
    var stat = pick_(data, ['status','situacao']);

    sheet_(SHEET_VENDAS, HEADERS_VENDAS).appendRow([
      new Date().toISOString(), ev||'', email||'', nome||'', fone||'',
      valor||'', prod||'', turma||'', lote||'', tid||'', stat||''
    ]);
    return json_({ ok:true, tipo:'webhook', evento:ev });

  } catch (err) {
    return json_({ ok:false, error:String(err) });
  }
}

// ---- Endpoint de leitura p/ o dashboard ----
// GET .../exec?report=funnel  → JSON agregado
function doGet(e) {
  var report = (e && e.parameter && e.parameter.report) || '';
  if (report === 'funnel') return json_(buildFunnel_());
  return ContentService.createTextOutput('ok');
}

function buildFunnel_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var leads = rows_(ss, SHEET_LEADS);
  var vendas = rows_(ss, SHEET_VENDAS);

  // conjuntos por email (lower)
  var leadEmails = {}, byUtm = {}, byTurma = {lead:{}, venda:{}};
  leads.forEach(function(r){
    var em = (r.email||'').toLowerCase(); if(em) leadEmails[em] = r;
    var src = r.utm_source || '(direto)';
    byUtm[src] = byUtm[src] || { lead:0, venda:0, receita:0 };
    byUtm[src].lead++;
    var t = r.turma||'?'; byTurma.lead[t] = (byTurma.lead[t]||0)+1;
  });

  var aprovadas = vendas.filter(function(v){ return /aprovad|paid|approved|pago/i.test(v.evento||v.status||''); });
  var receita = 0, ticket = 0, vendaEmails = {};
  var byLote = {};
  aprovadas.forEach(function(v){
    var val = parseFloat(String(v.valor).replace(/[^0-9.,-]/g,'').replace('.','').replace(',','.')) || 0;
    receita += val;
    var em=(v.email||'').toLowerCase(); if(em) vendaEmails[em]=v;
    var t=v.turma||'?'; byTurma.venda[t]=(byTurma.venda[t]||0)+1;
    var l=v.lote||'?'; byLote[l]=(byLote[l]||0)+1;
    // atribuição: se o comprador foi lead, credita a UTM dele
    var lead = leadEmails[em];
    if (lead) { var s = lead.utm_source||'(direto)'; byUtm[s]=byUtm[s]||{lead:0,venda:0,receita:0}; byUtm[s].venda++; byUtm[s].receita+=val; }
  });
  ticket = aprovadas.length ? receita/aprovadas.length : 0;

  // abandono: virou lead mas não tem venda aprovada
  var abandono = [];
  Object.keys(leadEmails).forEach(function(em){
    if (!vendaEmails[em]) { var r=leadEmails[em]; abandono.push({ nome:r.nome, email:em, telefone:r.telefone, turma:r.turma, ts:r.timestamp }); }
  });

  return {
    updated: new Date().toISOString(),
    funil: { leads: leads.length, vendas: aprovadas.length,
             conv: leads.length ? (aprovadas.length/leads.length) : 0 },
    receita: receita, ticket: ticket,
    porTurma: byTurma, porLote: byLote, porUtm: byUtm,
    abandono: abandono.slice(0, 200)
  };
}

// ---- helpers ----
function json_(o){ return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function pick_(o, keys){ for (var i=0;i<keys.length;i++){ if(o[keys[i]]!==undefined && o[keys[i]]!=='') return o[keys[i]]; } return ''; }
function deep_(o, path){ var c=o; for(var i=0;i<path.length;i++){ if(c && c[path[i]]!==undefined) c=c[path[i]]; else return ''; } return c; }
function rows_(ss, name){
  var sh = ss.getSheetByName(name); if(!sh || sh.getLastRow()<2) return [];
  var data = sh.getDataRange().getValues(); var head = data.shift();
  return data.map(function(r){ var o={}; head.forEach(function(h,i){ o[h]=r[i]; }); return o; });
}
```

---

## Configurar o webhook na PagTrust
Na tela "Editar Webhook":
1. **Nome:** Workshop Eixo webhook.
2. **Nos produtos:** os 6 (3 lotes × 2 turmas) — ou "todos".
3. **Enviar para URL:** a MESMA URL /exec do Apps Script (`https://script.google.com/macros/s/AKfyc…/exec`).
4. **Eventos a marcar:** em **Compras** → **Aprovado** (essencial), **Pix gerado**, **Aguardando Pagamento**, **Reembolsado**, **ChargeBack**; em **Outros** → **Carrinho abandonado**.
5. **Salvar** → clicar **"Enviar eventos de Teste"**.
6. Abrir a aba `_webhook_debug` da planilha → ver o **JSON cru** do teste → me mandar 1 exemplo pra eu ajustar os nomes de campo em `pick_/deep_` (o mapeamento atual é tolerante mas pode precisar de ajuste fino: valor, turma/lote, email aninhado).

> **Reimplantar:** após colar o código, Implantar → Gerenciar implantações → editar → **Nova versão** (senão a URL serve o código velho). A URL /exec permanece a mesma.

## Dashboard
O artifact do Cowork faz `fetch('…/exec?report=funnel')` e renderiza. Como o doGet é aberto, o dashboard lê sem autenticação. Reload = dados frescos.

## Purchase no Meta (fase 2, opcional)
O webhook "Aprovado" é o gatilho ideal do `Purchase` com valor via CAPI server-side. Quando ligar o CAPI Gateway, este mesmo Apps Script pode repassar o Purchase (com event_id da venda) — fecha o loop de otimização por valor.
