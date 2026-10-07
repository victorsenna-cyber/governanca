# Spec — Engajamento por dobra (scroll · tempo · abandono) no dashboard próprio

> Objetivo: medir, por dobra da landing, **quantos chegaram**, **quanto tempo ficaram** e **onde abandonaram** — direto no nosso dashboard (via Apps Script), sem depender da GA4 Data API. Heatmap visual é outra ferramenta (ver §5).
>
> Arquitetura: página dispara evento por dobra → `fetch` pro Apps Script (aba `Engajamento`) → `?report=funnel` calcula o funil de leitura → dashboard mostra. Mesma filosofia dos leads.

---

## 1. Página (index-v2.html) — observer de dobra

As dobras já são `<section>` com `aria-labelledby="d2/d3/d4..."`. Adicionar um `IntersectionObserver` que dispara **uma vez por dobra vista** e mede tempo de permanência. Um `session_id` por visita agrupa o percurso.

Adicionar ao `<script>` do rodapé (depois do `trackEvent`), SEM tocar no resto:

```javascript
/* ---- Engajamento por dobra (scroll/tempo/abandono) ---- */
(function(){
  var END = LEADS_ENDPOINT; // mesmo endpoint do Apps Script
  if(!END) return;

  // id de sessão (agrupa o percurso de UMA visita)
  var sid = sessionStorage.getItem('eixo_sid');
  if(!sid){ sid = (Date.now().toString(36)+Math.random().toString(36).slice(2,8)); sessionStorage.setItem('eixo_sid', sid); }

  // mapa das dobras (ordem + rótulo legível) — ajustar rótulos se quiser
  var DOBRAS = [
    {sel:'.hero',              nome:'D1 Hero'},
    {sel:'[aria-labelledby=d2]', nome:'D2 Espelho'},
    {sel:'[aria-labelledby=d3]', nome:'D3 Custo'},
    {sel:'[aria-labelledby=d4]', nome:'D4 Virada'},
    {sel:'[aria-labelledby=d5]', nome:'D5 Pilha'},
    {sel:'#oferta',            nome:'D8 Oferta'},
    {sel:'[aria-labelledby=d9]', nome:'D9 FAQ'},
    {sel:'[aria-labelledby=d10]',nome:'D10 Fecho'}
  ];

  var vistos = {}, entrada = {};
  function envia(ev, dobra, extra){
    try{
      var p = Object.assign({ tipo:'engaj', ev:ev, dobra:dobra, sid:sid, ts:new Date().toISOString() }, extra||{});
      // sendBeacon sobrevive ao fechar a aba (importante p/ medir saída)
      var body = JSON.stringify(p);
      if(navigator.sendBeacon){ navigator.sendBeacon(END, body); }
      else { fetch(END,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:body}); }
    }catch(e){}
  }

  if('IntersectionObserver' in window){
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        var nome = e.target.getAttribute('data-dobra');
        if(e.isIntersecting){
          entrada[nome] = Date.now();
          if(!vistos[nome]){ vistos[nome]=true; envia('viu', nome); }  // 1ª vez que a dobra aparece
        } else if(entrada[nome]){
          var seg = Math.round((Date.now()-entrada[nome])/1000);
          if(seg>0) envia('tempo', nome, {seg:seg});                  // tempo ao sair da dobra
          entrada[nome]=0;
        }
      });
    }, { threshold: 0.5 });  // conta "viu" quando 50% da dobra está na tela

    DOBRAS.forEach(function(d){
      var el = document.querySelector(d.sel);
      if(el){ el.setAttribute('data-dobra', d.nome); obs.observe(el); }
    });
  }

  // dobra mais funda alcançada, no fim da visita (mede abandono)
  var maxIdx = -1;
  DOBRAS.forEach(function(d,i){ var el=document.querySelector(d.sel); if(el){ 
    new IntersectionObserver(function(en){ if(en[0].isIntersecting && i>maxIdx){ maxIdx=i; } },{threshold:0.5}).observe(el);
  }});
  window.addEventListener('pagehide', function(){
    if(maxIdx>=0) envia('saida', DOBRAS[maxIdx].nome, {idx:maxIdx});
  });
})();
```

> Usa `sendBeacon` (sobrevive ao fechar a aba — essencial pra medir onde a pessoa saiu). Não toca em popup/pixel/lote.

---

## 2. Apps Script — receber e gravar (aba `Engajamento`)

No `doPost`, ANTES do roteamento de lead/webhook, adicionar:

```javascript
// ---- Engajamento por dobra (da landing) ----
if(data.tipo === 'engaj'){
  sh_('Engajamento', ['timestamp','ev','dobra','sid','seg','idx'])
    .appendRow([data.ts||new Date().toISOString(), data.ev||'', data.dobra||'', data.sid||'', data.seg||'', data.idx||'']);
  return json_({ok:true,tipo:'engaj'});
}
```

E no `buildFunnel_()`, adicionar o cálculo do funil de leitura:

```javascript
var eng = rows_(ss,'Engajamento');
// sessões únicas que viram cada dobra
var viuPorDobra = {}, sessoes = {};
eng.forEach(function(r){
  if(r.ev==='viu'){ viuPorDobra[r.dobra] = viuPorDobra[r.dobra] || {}; viuPorDobra[r.dobra][r.sid]=1; }
  sessoes[r.sid]=1;
});
var totalSessoes = Object.keys(sessoes).length || 1;
// ordem das dobras (mesma da página)
var ordem = ['D1 Hero','D2 Espelho','D3 Custo','D4 Virada','D5 Pilha','D8 Oferta','D9 FAQ','D10 Fecho'];
var leitura = ordem.map(function(nome){
  var chegou = Object.keys(viuPorDobra[nome]||{}).length;
  return { dobra:nome, chegou:chegou, pct: chegou/totalSessoes };
});
// tempo médio por dobra
var tempo = {}, tempoN = {};
eng.forEach(function(r){ if(r.ev==='tempo' && r.seg){ tempo[r.dobra]=(tempo[r.dobra]||0)+Number(r.seg); tempoN[r.dobra]=(tempoN[r.dobra]||0)+1; }});
var tempoMedio = {}; Object.keys(tempo).forEach(function(k){ tempoMedio[k]=Math.round(tempo[k]/tempoN[k]); });
// abandono por dobra (onde a sessão parou)
var saiuEm = {};
eng.filter(function(r){return r.ev==='saida';}).forEach(function(r){ saiuEm[r.dobra]=(saiuEm[r.dobra]||0)+1; });
```

E incluir no objeto retornado:
```javascript
engajamento: { totalSessoes: totalSessoes, leitura: leitura, tempoMedio: tempoMedio, saiuEm: saiuEm },
```

---

## 3. Dashboard — nova seção "Leitura da página"

No `render(d)`, adicionar um card que consome `d.engajamento`:
- **Funil de leitura**: barra por dobra com `chegou` e `pct` (D1 = 100%, vai caindo). Mostra visualmente onde o público desiste.
- **Tempo médio por dobra**: quanto seguram a atenção em cada seção.
- **Abandono**: quantas sessões pararam em cada dobra (`saiuEm`).

Tratar `d.engajamento` como opcional (`var eng = d.engajamento || null; if(eng){...} else {placeholder}`) — mesma regra do bloco de ads.

---

## 4. Gate de verificação
- [ ] Abrir a landing, rolar até o fim, fechar → aba `Engajamento` grava linhas `viu`/`tempo`/`saida` com o mesmo `sid`.
- [ ] `?report=funnel` retorna `engajamento.leitura` com % decrescente por dobra.
- [ ] Dashboard mostra o funil de leitura sem quebrar quando ainda não há dados.
- [ ] Não afeta popup, pixel, lote, prefill.

---

## 5. Heatmap visual (o "mapa de calor" de verdade) — Microsoft Clarity, à parte
O GA4 e este engajamento dão **números** (X% chegou na dobra Y). O **mapa de calor visual** (onde o mouse passa/clica, gravação de sessão) é outra ferramenta:
- **Microsoft Clarity** — **grátis, ilimitado**, heatmap + session recordings. Instala com 1 script no `<head>` ou 1 tag no GTM (`GTM-W6VQGXQC`).
- Você vê os heatmaps **no painel do Clarity** (clarity.microsoft.com), não no nosso dashboard — heatmap é imagem, não número.
- **Recomendação:** adicionar o Clarity (10 min, grátis) pra ter o heatmap real, e usar o nosso dashboard pro funil de leitura numérico. Os dois se complementam.
- Alternativa paga: Hotjar (mesma ideia, pago).

> Este engajamento numérico + Clarity cobrem 100% do que foi pedido: "por scroll e tempo em cada dobra, taxa de abandono em cada dobra" (nosso dashboard) + "mapa de calor" (Clarity).
