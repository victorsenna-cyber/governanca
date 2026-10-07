# STACK DE RASTREAMENTO — GTM + CAPI (grátis) · página deboradelgado.space

> Decisão 11/07: GTM como **camada única** de tracking. **Fase 1 (agora):** pixel-browser via dataLayer com `event_id`. **Fase 2 (quando escalar):** CAPI Gateway grátis do Meta (server-side, 1 clique no Events Manager) — o `event_id` já embutido faz a dedup automática, sem mudar HTML nem tags. Pixel ID: `4060021607461178` · GTM: `GTM-W6VQGXQC` (workspace "API WEB - Débora").
>
> **ATUALIZAÇÃO (mesma data):** a rota "CAPI via GTM client-side" (Facebook CAPI Tag no container web) foi **descartada** — expõe o token no navegador e NÃO dribla adblock (o ganho real do CAPI é server-side). Fase 1 = só pixel-browser; CAPI real = Gateway grátis na fase 2. **Execução via import de JSON:** `gtm-container-import.json` + `GUIA-IMPORT-GTM.md` (mais seguro que montar por cliques).

---

## Por que mudar (o GTM atual conflita com a página nova)

O GTM `GTM-W6VQGXQC` foi montado para a **página antiga**, onde o checkout era um `<a href="pagtrust…">`. Por isso os dois gatilhos de `InitiateCheckout` são **"Click | URL contém pagtrust"**. Na `index-v2`:
- O botão da oferta **não navega** pra pagtrust — **abre o popup**. Logo, os gatilhos de clique **nunca disparam** (ficam órfãos).
- Se o GTM (tag Meta Pixel em All Pages) e o pixel-base-no-HTML rodarem juntos → **PageView em dobro**.
- Há **dois** InitiateCheckout no GTM (redundantes entre si).

**Solução:** o HTML deixa de disparar `fbq` direto e passa a **empurrar eventos no `dataLayer`** com `event_id`. O GTM escuta esses eventos e dispara **pixel (browser) + CAPI (servidor)** com o mesmo id → o Meta **deduplica**. Uma fonte, sem órfão, sem duplicação.

---

## Arquitetura (camadas)

```
[ index.html / deboradelgado.space ]
     |  window.dataLayer.push({ event, event_id, ...dados })
     v
[ GTM  GTM-W6VQGXQC ]  ← container no <head> + noscript no <body>
     |                         |
     |  Custom HTML tag        |  Facebook CAPI Tag (modelo já instalado)
     |  = Meta Pixel (browser) |  = Conversions API (server-side, mesmo event_id)
     v                         v
[ Meta Events Manager ] --- dedup por event_id (browser + server = 1 evento)
```

Eventos padronizados no dataLayer (nomes internos → evento Meta):
| dataLayer `event` | Evento Meta | Onde dispara |
|---|---|---|
| `pageview` (ou All Pages nativo) | `PageView` | carregamento |
| `view_offer` | `ViewContent` | seção `#oferta` entra na viewport |
| `lead` | `Lead` | submit do popup |
| `initiate_checkout` | `InitiateCheckout` | submit do popup, antes do redirect |
| (PagTrust) | `Purchase` | obrigado-page PagTrust (fora desta página) |

Cada push carrega `event_id` (o MESMO usado pelo pixel e pela CAPI) para dedup.

---

## Parte 1 — HTML (index-v2) · MINHA alçada, feito nesta sessão

Mudanças no `index-v2.html`:
1. **Remover o pixel-base direto do `<head>`** (o que eu havia colado) — o GTM assume o PageView. Evita PageView duplo.
2. **Colar o container GTM** no `<head>` (script) e o `<noscript>` logo após `<body>`.
3. **Trocar `track('X')` por `dataLayer.push`** com `event_id`:
```js
function uuid(){ return (crypto.randomUUID ? crypto.randomUUID()
  : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){
      var r=Math.random()*16|0,v=c==='x'?r:(r&0x3|0x8); return v.toString(16); })); }
window.dataLayer = window.dataLayer || [];
function trackEvent(name, extra){
  var id = uuid();
  var payload = Object.assign({ event: name, event_id: id }, extra||{});
  window.dataLayer.push(payload);
  return id;
}
// ViewContent: trackEvent('view_offer')
// Lead (no submit): trackEvent('lead', { email:email, phone:telefone, turma:turma, lote:lote })
// InitiateCheckout (antes do redirect): trackEvent('initiate_checkout', { turma:turma, lote:lote })
```
4. O `fetch` do lead (Apps Script) **permanece** — é independente do tracking.
5. Prefill `&name=&email=`, UTMs, matriz de turma: **inalterados**.

> Dado do usuário (email/phone) no dataLayer serve pro **Advanced Matching** da CAPI (melhora atribuição). O GTM/CAPI faz o hash (SHA-256) antes de enviar — não vai em claro pro Meta.

## Parte 2 — GTM · monto no navegador (Victor confirma acesso + publica)

**Variáveis a criar/usar:**
- `DLV - event_id` (Data Layer Variable → `event_id`)
- `DLV - email`, `DLV - phone`, `DLV - turma`, `DLV - lote`
- `Const - Pixel ID` = `4060021607461178`
- `Const - CAPI Token` = **{{token do Events Manager — Victor gera}}**

**Gatilhos (Custom Event, substituem os de click-pagtrust):**
- `CE - lead` (event = `lead`)
- `CE - initiate_checkout` (event = `initiate_checkout`)
- `CE - view_offer` (event = `view_offer`)
- All Pages (nativo) para PageView

**Tags:**
- `Meta Pixel - Base` (Custom HTML, All Pages) — init + PageView (a `Meta Pixel` atual serve, revisar)
- `Meta Pixel - Lead` (Custom HTML, gatilho `CE - lead`) — `fbq('track','Lead',{},{eventID: {{DLV - event_id}}})`
- `Meta Pixel - InitiateCheckout` (gatilho `CE - initiate_checkout`) — idem com eventID
- `Meta Pixel - ViewContent` (gatilho `CE - view_offer`)
- `Facebook CAPI Tag` (modelo já instalado) — mesmo evento, **mesmo `event_id`**, token, Advanced Matching (email/phone)

**Limpeza:** remover/desativar os 2 gatilhos `Click | Checkout (pagtrust)` e as 2 tags `InitiateCheckout | Click` (não disparam mais na página nova). A variável `Meta Ads` e modelos não usados podem ficar (inertes) ou ser removidos.

## Parte 3 — CAPI grátis (Victor, no Meta)
Opção adotada: **CAPI via GTM client-side** com a `Facebook CAPI Tag` (não exige servidor próprio; grátis). Requer **token de acesso CAPI** gerado em Events Manager → Configurações do pixel → Conversions API → **Gerar token de acesso**. Colar em `Const - CAPI Token`.
> Alternativa 1-clique: Events Manager tem setup de CAPI Gateway grátis (2026) — menos controle sobre eventos custom; a rota GTM é preferível aqui por causa do `Lead` custom.

---

## Dedup — a regra de ouro
Pixel (browser) e CAPI (server) enviam o **mesmo evento** com o **mesmo `event_id`**. O Meta reconhece e conta **uma vez**. Sem `event_id` compartilhado, tudo conta 2× (pior que só pixel). Por isso o `event_id` nasce no HTML (`trackEvent`) e é lido pela variável `DLV - event_id` nas duas tags.

## Gate de verificação
- [ ] GTM Preview (Tag Assistant): abrir a página, ver `pageview` → PageView (1×), rolar até oferta → ViewContent, submeter popup → Lead + InitiateCheckout, cada um com `event_id`.
- [ ] Events Manager → Testar eventos: cada evento chega **por Browser E por Server**, marcados como **desduplicados** (não em dobro).
- [ ] Sem PageView duplicado (só a tag base, não o fbq do HTML — que foi removido).
- [ ] Gatilhos de click-pagtrust não disparam mais.
- [ ] Advanced Matching: email/phone chegando hasheados na CAPI (EMQ sobe).

## Pendências humanas
1. **Victor:** gerar token CAPI no Events Manager e colar em `Const - CAPI Token`.
2. **Victor:** confirmar acesso ao GTM no Chrome (p/ eu montar) e **publicar ("Enviar")** — publicação é aprovação humana.
3. **Victor:** subir o index.html na Hostinger (deboradelgado.space) com o GTM já no head.
