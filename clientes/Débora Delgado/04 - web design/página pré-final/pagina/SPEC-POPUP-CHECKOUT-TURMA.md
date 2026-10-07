# SPEC — Popup de captura + checkout por turma (index-v2.html)

> **Fonte de decisão:** `DECISOES.md` linha 11/07. **Alvo:** `04 - web design/página pré-final/index deployado/index-v2.html`.
> **Contrato:** só engenharia (JS + markup do popup). **NÃO tocar copy** (a V2 aguarda aprovação da Débora), nem constantes de lote, nem pixel base, nem `data-reveal`, nem SVGs, nem estrutura das dobras.
> **Regra que quebrou no teste do Victor:** parâmetros extras no link da PagTrust entram com **`&`**, nunca com `?` extra. O link já tem `?funnel=...`; tudo depois é `&`.

---

## 0. O que muda, em uma frase

O link único de checkout (`LOTES[lote].url`, só meio de semana) vira uma **matriz `LINKS[lote][turma]`** (6 links). Todo CTA que hoje vai ao checkout passa a **abrir um popup** que coleta nome/telefone/email + escolha de turma, grava o lead (Apps Script), dispara `Lead`, e **redireciona ao checkout da turma escolhida com `name` e `email` no prefill + UTMs**.

---

## 1. Matriz de links (DE → PARA)

**DE** (JS atual, ~linha 1176):
```js
var LOTES = {
  1: { price: 'R$ 97',  url: 'https://checkout.pagtrust.com.br/ck67c33a9b?funnel=fn66434cdd' },
  2: { price: 'R$ 197', url: 'https://checkout.pagtrust.com.br/ck972fee70?funnel=fnfd0e2be0' },
  3: { price: 'R$ 257', url: 'https://checkout.pagtrust.com.br/ck48f683ab?funnel=fn4b25da7e' }
};
```

**PARA:**
```js
var LOTES = {
  1: { price: 'R$ 97'  },
  2: { price: 'R$ 197' },
  3: { price: 'R$ 257' }
};
// turma: 'semana' = meio de semana (19–21/08 manhã) · 'fds' = fim de semana (14–15/08)
var LINKS = {
  1: {
    semana: 'https://checkout.pagtrust.com.br/ck67c33a9b?funnel=fn66434cdd',
    fds:    'https://checkout.pagtrust.com.br/ckbf7f19c9?funnel=fn6b2c3302'
  },
  2: {
    semana: 'https://checkout.pagtrust.com.br/ck972fee70?funnel=fnfd0e2be0',
    fds:    'https://checkout.pagtrust.com.br/ck2409b57d?funnel=fna2a36cd1'
  },
  3: {
    semana: 'https://checkout.pagtrust.com.br/ck48f683ab?funnel=fn4b25da7e',
    fds:    'https://checkout.pagtrust.com.br/ck49f08a5d?funnel=fn7a486d82'
  }
};
```
> Fonte dos 6 links: `04 - web design/LINKS CHECKOUTS - LOTES 1, 2 e 3.md`. **Conferir os 8 caracteres de cada `ck…` e `funnel=` ao colar** — troca de link = pessoa comprando a turma errada.

O `price` continua vindo de `LOTES[lote].price` (a UI de preço não muda). `currentLote()` fica **idêntico**.

---

## 2. Popup — markup (inserir antes do `</body>`, depois do sticky)

Fechado por padrão (`hidden`). Um só popup na página, reaproveitado por todos os CTAs.

```html
<div class="lead-modal" id="leadModal" hidden aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="leadModalTitle">
  <div class="lead-modal__backdrop" data-modal-close></div>
  <div class="lead-modal__card" role="document">
    <button type="button" class="lead-modal__x" data-modal-close aria-label="Fechar">&times;</button>
    <h2 class="lead-modal__title" id="leadModalTitle">Garanta sua vaga</h2>
    <p class="lead-modal__sub">Escolha sua turma e siga para o pagamento seguro.</p>

    <form id="leadForm" novalidate>
      <label class="lead-field">
        <span>Nome</span>
        <input type="text" name="nome" autocomplete="name" required />
      </label>
      <label class="lead-field">
        <span>WhatsApp</span>
        <input type="tel" name="telefone" autocomplete="tel" inputmode="tel" required />
      </label>
      <label class="lead-field">
        <span>E-mail</span>
        <input type="email" name="email" autocomplete="email" required />
      </label>

      <fieldset class="lead-turmas">
        <legend>Sua turma</legend>
        <label class="turma-card">
          <input type="radio" name="turma" value="fds" required />
          <span class="turma-dot" aria-hidden="true"></span>
          <span class="turma-text"><b>Fim de semana</b><small>14 e 15/08</small></span>
        </label>
        <label class="turma-card">
          <input type="radio" name="turma" value="semana" />
          <span class="turma-dot" aria-hidden="true"></span>
          <span class="turma-text"><b>Meio de semana</b><small>19 a 21/08, manhã</small></span>
        </label>
      </fieldset>

      <button type="submit" class="btn-glass btn-glass-ondark lead-submit">Ir para o pagamento</button>
      <p class="lead-erro" data-lead-erro hidden></p>
      <p class="lead-seguro">Pagamento seguro via PagTrust.</p>
    </form>
  </div>
</div>
```

**CSS:** reaproveitar tokens/paleta já no `<style>` (papel/petróleo/dourado). Requisitos mínimos:
- overlay `position:fixed; inset:0; z-index` acima do sticky; backdrop escuro translúcido.
- card centralizado, `max-width ~440px`, scroll interno se precisar, `border-radius` e sombra da linguagem existente.
- `.turma-card` = card clicável; `.turma-dot` = bolinha que **preenche** quando o `input:checked` do card (`input:checked ~ .turma-dot` ou via classe `is-selected` no JS). Card selecionado ganha borda dourada.
- foco visível, alvos ≥44px, contraste ≥4.5:1 (padrão ui-ux-pro-max). `.lead-modal[hidden]{display:none}`.

---

## 3. Comportamento (JS) — adicionar ao `<script>` existente

### 3a. Abrir o popup a partir dos CTAs
Hoje há 4 `cta-anchor` (rolam pra `#oferta`) e 1 `cta-checkout` (vai ao checkout). **Novo comportamento:**
- **Os CTAs de topo/meio continuam levando à oferta** (âncora `#oferta`) — não abrir popup longe da oferta.
- **O botão da OFERTA** (`.cta-checkout` / `[data-checkout]`, linha ~1034) **e o sticky** passam a **abrir o popup** em vez de ir direto ao checkout.
> Racional: o popup mora na decisão de compra; abrir popup no hero atrapalha. Se o Victor quiser popup em todo CTA, é trocar o seletor — deixar comentado.

```js
var modal = document.getElementById('leadModal');
function openModal(){ modal.hidden = false; modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; var f=modal.querySelector('input[name="nome"]'); if(f) f.focus(); }
function closeModal(){ modal.hidden = true; modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
modal.querySelectorAll('[data-modal-close]').forEach(function(el){ el.addEventListener('click', closeModal); });
document.addEventListener('keydown', function(e){ if(e.key==='Escape' && !modal.hidden) closeModal(); });

// CTA da oferta + sticky abrem o popup (não vão direto ao checkout)
document.querySelectorAll('[data-checkout], #stickyCta .cta-anchor').forEach(function(btn){
  btn.addEventListener('click', function(e){ e.preventDefault(); openModal(); });
});
```
> Remover o antigo `checkoutBtn.setAttribute('href', loteData.url)` e o antigo listener de `.cta-checkout` que disparava `InitiateCheckout` — o `InitiateCheckout` agora dispara no submit do popup (passo 3c). O `href` do botão da oferta pode virar `#` ou ficar como fallback no-JS (ver 3d).

### 3b. Bolinha de marcação da turma
```js
var turmaInputs = modal.querySelectorAll('input[name="turma"]');
turmaInputs.forEach(function(inp){
  inp.addEventListener('change', function(){
    modal.querySelectorAll('.turma-card').forEach(function(c){ c.classList.remove('is-selected'); });
    inp.closest('.turma-card').classList.add('is-selected');
  });
});
```
(Se o CSS já resolver com `input:checked ~ .turma-dot`, o JS de classe é só reforço visual do card.)

### 3c. Submit: grava lead → Lead → redireciona com prefill + UTMs
```js
var LEADS_ENDPOINT = ''; // {{PENDENTE}} URL do Apps Script Web App (Victor publica e cola aqui)

function getUTMs(){
  var p = new URLSearchParams(location.search);
  var keys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  var out = {};
  keys.forEach(function(k){ if(p.get(k)) out[k]=p.get(k); });
  return out;
}

document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  var form = e.target;
  if(!form.checkValidity()){ form.reportValidity(); return; }

  var nome = form.nome.value.trim();
  var email = form.email.value.trim();
  var telefone = form.telefone.value.trim();
  var turma = form.turma.value;            // 'fds' | 'semana'
  var lote = currentLote();                // 1 | 2 | 3 (mesma função do lote)
  var utms = getUTMs();

  // 1) grava o lead (não bloqueia o redirect se falhar)
  if (LEADS_ENDPOINT) {
    try {
      var payload = Object.assign({ nome:nome, telefone:telefone, email:email, turma:turma, lote:lote, ts:new Date().toISOString() }, utms);
      fetch(LEADS_ENDPOINT, { method:'POST', mode:'no-cors', headers:{'Content-Type':'text/plain;charset=utf-8'}, body: JSON.stringify(payload) });
    } catch(err){ /* nunca travar a venda por causa do log */ }
  }

  // 2) pixel Lead
  track('Lead');

  // 3) monta a URL do checkout da turma escolhida — PREFILL só name + email
  var base = LINKS[lote][turma];           // já contém ?funnel=...
  var url = base
    + '&name='  + encodeURIComponent(nome)
    + '&email=' + encodeURIComponent(email);
  // UTMs sobrevivem ao redirect (atribuição do tráfego pago no checkout)
  Object.keys(utms).forEach(function(k){ url += '&' + k + '=' + encodeURIComponent(utms[k]); });

  // 4) InitiateCheckout e vai
  track('InitiateCheckout');
  window.location.href = url;
});
```
> **`&`, não `?`** — `base` já tem o `?funnel=`; todo o resto é `&`. Foi exatamente o erro do banner vermelho no teste do Victor.
> **Telefone NÃO entra na URL** (não passa no prefill da PagTrust — confirmado no teste). Vai só pro lead/planilha.
> `track()` é a função de pixel que já existe no arquivo.

### 3d. Fallback sem JS
Se o JS não rodar, o botão da oferta deve continuar clicável. Manter no `href` do `[data-checkout]` o link do **lote 1 / fim de semana** como default seguro (`LINKS[1].fds`), sem prefill. Com JS, o `preventDefault` intercepta antes.

---

## 4. Eventos de pixel — estado final
| Evento | Dispara em | Já existia? |
|---|---|---|
| `PageView` | base (GTM) | sim |
| `ViewContent` | seção `#oferta` entra na viewport | sim (mantém) |
| `Lead` | **submit do popup** | **novo** |
| `InitiateCheckout` | **submit do popup, antes do redirect** | muda de gatilho (era clique no botão) |
| `Purchase` | PagTrust (obrigado-page) | sim |

---

## 5. Gate de verificação (o executor roda antes de fechar)
- [ ] `grep -c "checkout.pagtrust" index-v2.html` → **6** links, cada um batendo o `.md` por lote×turma.
- [ ] Nenhum `?name=` ou `?email=` no JS — só `&name=` / `&email=` (grep por `'?name'` deve dar 0).
- [ ] Prefill **não** inclui `telefone`/`phone`/`document`.
- [ ] `track('Lead')` e `track('InitiateCheckout')` disparam no submit; **não** há mais listener de `InitiateCheckout` no clique do botão.
- [ ] Popup abre pelo CTA da oferta e pelo sticky; fecha por X, backdrop e Esc; foco vai pro 1º campo.
- [ ] Bolinha da turma muda ao marcar; submit bloqueado sem turma escolhida.
- [ ] Constantes de lote, `currentLote()`, `data-reveal`, SVGs, sticky, pixel base: **inalterados** (diff só no que esta spec descreve).
- [ ] Sem erro de console; sem overflow horizontal (`scrollWidth == clientWidth`) desktop e mobile.
- [ ] `LEADS_ENDPOINT` vazio ⇒ o form ainda dispara `Lead` e redireciona (a gravação ativa quando o Victor colar a URL).

---

## 6. Pendências humanas (não bloqueiam o build, bloqueiam o "ao vivo")
1. **Victor:** confirmar que as 6 ofertas existem na PagTrust com obrigado-page por turma → grupo de WhatsApp certo.
2. **Victor:** publicar o Apps Script como Web App e colar a URL em `LEADS_ENDPOINT` (ver `APPS-SCRIPT-LEADS.md`).
3. **Débora:** aprovação da copy V2 segue independente — esta spec não altera texto.
4. **Publicação:** só o Victor sobe a versão no host (Wix/PagTrust). Nada vai ao ar sem isso.
