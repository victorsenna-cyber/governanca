# TASK (Codex/Sonnet) — QA + finalização do popup de checkout por turma

> **Estado:** a engenharia do popup **já foi implementada** na `index-v2.html` pelo Fable 5 (11/07). Backup pré-mudança em `index-v2.backup-pre-popup.html`. Esta task é **QA em browser + fechar as arestas**, não construir do zero. Fonte de decisão: `DECISOES.md` 11/07. Spec: `SPEC-POPUP-CHECKOUT-TURMA.md`. Backend: `APPS-SCRIPT-LEADS.md`.

## Arquivos mínimos (não abrir mais que isto)
- `04 - web design/página pré-final/index deployado/index-v2.html` (alvo)
- `04 - web design/página pré-final/SPEC-POPUP-CHECKOUT-TURMA.md` (contrato)
- `04 - web design/LINKS CHECKOUTS - LOTES 1, 2 e 3.md` (conferência dos 6 links)

## Contrato (o que NÃO pode mudar)
- **Nenhuma alteração de copy** (a V2 aguarda aprovação da Débora). Só JS/markup/CSS do popup.
- Constantes de lote (`LOTE1_FIM`/`LOTE2_FIM`), `currentLote()`, `data-reveal`, SVGs, pixel base, sticky, estrutura das dobras: **intactos**.
- Prefill **só `name` + `email`**, com **`&`** (o link já tem `?funnel=`). Telefone **nunca** vai na URL.

## O que rodar (QA em browser — servidor local, matar por PID, não `taskkill /IM`)
1. **Abrir a página**, clicar no **CTA da oferta** e no **sticky** → o **popup abre** (os CTAs de topo/meio continuam rolando para `#oferta`, sem popup).
2. **Fechar** por X, backdrop e **Esc**; foco vai pro 1º campo ao abrir.
3. **Bolinha da turma** preenche ao marcar; card marcado ganha borda dourada; submit **bloqueia** sem turma.
4. **Submit** com nome/tel/email + turma:
   - a URL de destino é `LINKS[loteVigente][turma]` **com `&name=…&email=…`** (inspecionar no console/network antes do redirect);
   - **sem** `telefone`/`phone` na URL;
   - com UTMs na URL **se** a página foi aberta com `?utm_source=…` (testar com e sem).
5. **Trocar a turma** e repetir → cai no `ck…` **diferente** (conferir que fds↔semana batem os links do `.md`).
6. **Pixel:** `Lead` e `InitiateCheckout` disparam no submit (Meta Pixel Helper / console). `ViewContent` segue no scroll da oferta. **Não** há mais `InitiateCheckout` no clique do botão.
7. **Sem erro de console**; **sem overflow horizontal** (`scrollWidth == clientWidth`) desktop e mobile 375px; popup rola interno se a tela for baixa.

## Gate de grep (deve bater)
- `grep -o "checkout.pagtrust.com.br" | wc -l` → **7** (6 na matriz `LINKS` + 1 fallback do `[data-checkout]`).
- Os 6 `ck…` do `.md` presentes, cada um na turma certa.
- `?name=` / `?email=` → **0** (prefill só com `&`).
- `&phone` / `&telefone` / `&document` na montagem da URL → **0**.
- `track('Lead')` e `track('InitiateCheckout')` no submit; listener antigo `('.cta-checkout').forEach…InitiateCheckout` → removido.

## Divergência
Se algo do build divergir da spec, **corrigir para a spec**. Se a spec estiver ambígua ou faltar decisão de negócio (ex.: querer popup em TODO CTA, não só na oferta) → **parar e registrar em `DECISOES.md`**, não improvisar.

## Fora do teu escopo (humano)
- `LEADS_ENDPOINT` vazio é esperado — Victor publica o Apps Script (`APPS-SCRIPT-LEADS.md`) e cola a URL `/exec`.
- Confirmar existência das 6 ofertas/obrigado-page na PagTrust = Victor.
- Publicar no host = Victor. Aprovar copy = Débora.

## Ao fechar
Registrar entrada no `DIARIO-DE-BORDO.md` (feito, gate, decisões na alçada, bloqueios, próximo passo).
