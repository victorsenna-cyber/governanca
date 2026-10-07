# TASKS — Popup de turma + checkout por turma (executor: Codex ou Claude Code)

> **Decisão-fonte:** DECISOES.md 10/07 (fluxo de compra por turma). **Alvo:** `04 - web design/página pré-final/index deployado/index-v2.html`.
> Se `index-v2.html` ainda não existir (task da copy V2 não rodou), criar como cópia de `index.html` da mesma pasta e aplicar SÓ esta task — engenharia e copy são independentes.
> Protocolo: abrir lendo `CLAUDE.md` (raiz) + 3 últimas entradas do `DIARIO-DE-BORDO.md`; fechar registrando entrada.

## CONTRATO (violar = abortar e registrar bloqueio)

1. NÃO alterar copy das dobras, estrutura de `<section>`, pixel base, SVGs, `data-reveal`.
2. CSS novo entra num bloco comentado `/* === POPUP TURMA === */` no FINAL do `<style>`; nenhuma regra existente muda. **Zero cor nova:** usar apenas os tokens/hex já presentes no arquivo (censo de 6 cores é gate).
3. JS novo entra em `<script>` próprio antes do `</body>`; o JS existente (virada de lote, reveal, sticky) não muda — o popup REUSA a variável do lote vigente já computada.
4. Constantes novas num único bloco comentado no topo (junto das constantes de lote).

## T1 · Matriz de checkouts (6 links reais)

```js
const CHECKOUTS = {
  1: { meio: "https://checkout.pagtrust.com.br/ck67c33a9b?funnel=fn66434cdd",
       fds:  "https://checkout.pagtrust.com.br/ckbf7f19c9?funnel=fn6b2c3302" },
  2: { meio: "https://checkout.pagtrust.com.br/ck972fee70?funnel=fnfd0e2be0",
       fds:  "https://checkout.pagtrust.com.br/ck2409b57d?funnel=fna2a36cd1" },
  3: { meio: "https://checkout.pagtrust.com.br/ck48f683ab?funnel=fn4b25da7e",
       fds:  "https://checkout.pagtrust.com.br/ck49f08a5d?funnel=fn7a486d82" }
};
const LEADS_ENDPOINT = ""; // URL do Apps Script (T5); vazio = pula o envio sem erro
```
Fonte: `04 - web design/LINKS CHECKOUTS - LOTES 1, 2 e 3.md`. Conferir 1:1.

## T2 · Comportamento dos CTAs

- Botões que HOJE apontam para checkout (botão da oferta D8 + sticky, se apontar p/ checkout): passam a **abrir o popup**. `href` do botão da oferta mantém o link do lote vigente turma meio de semana como **fallback no-JS** (comportamento atual preservado sem JS).
- CTAs-âncora (hero, D4, D10) continuam rolando para `#oferta` — não abrem popup.

## T3 · O popup

**Estrutura:** overlay escurecido (rgba do petróleo já usado) + card claro (papel, borda dourada 1px, sombra já existente na página, cantos como os cards atuais). Mobile ≤640px: card ancorado embaixo (bottom sheet), largura total.

**Conteúdo, nesta ordem:**
1. Título curto (Fraunces, como h3 dos cards): `Garanta sua vaga`
2. Subtítulo 1 linha (texto leitura): `Escolha sua turma e siga para o pagamento seguro.`
3. **Seleção de turma — 2 opções, radio custom com bolinha** (obrigatória, nenhuma pré-marcada):
   - `Fim de semana · 14 e 15/08`
   - `Meio de semana · 19 a 21/08, manhã`
   Implementação: `<label>` + `<input type="radio" name="turma">` visualmente oculto + bolinha custom (`border` petróleo, miolo dourado quando `:checked`). Card da opção marcada ganha borda dourada. Alvo de toque ≥44px. Navegável por teclado (focus visível).
4. Campos: `Nome` (text, required) · `Email` (email, required) · `Telefone/WhatsApp` (tel, required, placeholder `(11) 99999-9999`).
5. Botão CTA (mesmo estilo do botão dourado da oferta): `Ir para o pagamento` — **desabilitado** até turma marcada + 3 campos válidos.
6. Microcopy sob o botão (mesma da página): `Pagamento seguro via PagTrust. Se a sua turma não fechar: outra turma ou reembolso integral.`
7. Fechar: X no canto, tecla ESC e clique no overlay. Foco vai ao primeiro campo ao abrir e volta ao CTA de origem ao fechar. `prefers-reduced-motion` respeitado (sem animação de entrada nesse caso).

## T4 · Submit (ordem exata)

```
1. valida campos + turma
2. fbq('track','Lead')            // guard: if (typeof fbq==='function')
3. envia lead ao LEADS_ENDPOINT   // navigator.sendBeacon (fallback fetch keepalive, no-cors, form-urlencoded); NUNCA bloquear o redirect por falha/timeout do envio
4. monta URL: CHECKOUTS[loteVigente][turma] + "&name=" + encodeURIComponent(nome) + "&email=" + encodeURIComponent(email)
   + repassar UTMs: qualquer utm_* presente em location.search vai anexado à URL do checkout
   (prefill confirmado por teste: name e email; telefone NÃO preenche — vai só no lead)
5. fbq('track','InitiateCheckout')  // mantém o significado atual do evento: clique que vai ao checkout
6. window.location.href = url
```
Payload do lead: `nome, email, telefone, turma (fds|meio), lote (1|2|3), utm_source, utm_medium, utm_campaign, utm_content, utm_term, ts (ISO), page (location.pathname)`.

## T5 · Apps Script (Victor cola — não é tarefa do executor da página)

No Google Sheets: Extensões → Apps Script → colar → Implantar → App da Web → executar como "eu", acesso "qualquer pessoa" → copiar URL → preencher `LEADS_ENDPOINT` no HTML.

```js
function doPost(e) {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads")
       || SpreadsheetApp.getActiveSpreadsheet().insertSheet("Leads");
  if (s.getLastRow() === 0) s.appendRow(["ts","nome","email","telefone","turma","lote",
    "utm_source","utm_medium","utm_campaign","utm_content","utm_term","page"]);
  var p = e.parameter;
  s.appendRow([p.ts||new Date().toISOString(), p.nome||"", p.email||"", p.telefone||"",
    p.turma||"", p.lote||"", p.utm_source||"", p.utm_medium||"", p.utm_campaign||"",
    p.utm_content||"", p.utm_term||"", p.page||""]);
  return ContentService.createTextOutput("ok");
}
```

## GATE (rodar tudo antes de fechar)

- [ ] 6 URLs da matriz idênticas ao arquivo de links (diff manual).
- [ ] Popup abre nos CTAs de checkout; âncoras seguem âncoras; no-JS cai no fallback.
- [ ] Radio: bolinha marca/desmarca correta, teclado ok, nenhuma pré-marcada, botão só habilita completo.
- [ ] URL final montada certa nos 2×1 casos (2 turmas × lote vigente): conferir `&name=`/`&email=` codificados e UTMs repassadas (testar com `?utm_source=teste` na página).
- [ ] `Lead` e `InitiateCheckout` disparam na ordem (console: mock `window.fbq = (...a)=>console.log(a)`).
- [ ] Sem erro de console · sem overflow horizontal · censo de cores inalterado (nenhum hex novo) · `<section>` balanceado igual.
- [ ] Lote vigente respeitado: forçar data (editar constante localmente, desfazer) e ver a matriz trocar.
- [ ] Mobile ~375-514px: bottom sheet ok, campos utilizáveis, botão visível com teclado aberto.

## SAÍDA
Diff resumido no `DIARIO-DE-BORDO.md` + pendências p/ humano: (1) Victor cria a planilha + Apps Script (T5) e preenche `LEADS_ENDPOINT`; (2) publicação continua sendo do Victor após aprovação.
