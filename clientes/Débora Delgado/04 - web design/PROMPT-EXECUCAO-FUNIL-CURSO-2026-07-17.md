# PROMPT DE EXECUÇÃO — Funil do Curso de Eneagrama (handoff para a outra conta · 17/07)

> STATUS: VIGENTE · fonte (instrução de execução)
> **Você (outra conta) atua em `Z:\01 - Governança\clientes\Débora Delgado`** (SMB local, mesma Governança operacional vista pela máquina que o gerou). Todos os caminhos abaixo são relativos a essa raiz. **Regra dura desta frente: NÃO alterar nenhum arquivo vigente — só criar arquivos novos, datados `-2026-07-17`.**

---

## 0. Protocolo de abertura (obrigatório, nesta ordem)
1. `CLAUDE.md` (raiz) e `GOVERNANCA-REPO.md` — regras, léxico morto, STATUS, "Propaga p/", gate de fechamento.
2. `DECISOES.md` — ler as 5 linhas de **17/07** (bump, nome "Eixo", grupos, funil do curso, checkouts). Precedência: DECISOES > OFERTA-CANONICA > resto.
3. `DIARIO-DE-BORDO.md` — as ~6 entradas de 17/07 (contexto desta frente). **Abrir registrando** sua entrada e fechar registrando o resultado.
4. Ler os 4 planos-fonte desta frente (em `04 - web design/`):
   - `ESCOPO-FUNIL-CURSO-2026-07-17.md` — mapa do funil, 4 obrigado, copy pronta da #3 e #4, cálculo.
   - `PLANO-PAGINA-CURSO-ENEAGRAMA.md` — 10 dobras + copy de produção da página de vendas.
   - `PLANO-TRACKING-PAGINA-CURSO.md` — pixel (mesmo, `content_name:'curso-eneagrama'`) + Apps Script v5 (add `page`).
   - `DIRECAO-VISUAL-V2.md` + `00 - governança continuum/METODO-PAGINA-DE-VENDAS.md` — tokens, 4 cores, curva de voltagem, gate Parte 5.
5. Voz: `07 - skills/debora-voice` (sem travessão, léxico morto = 0, eneagrama = "uma das lentes"). Rodar a varredura do §4 do GOVERNANCA em toda copy antes de fechar.

---

## 1. GEOMETRIA (troca pedida pelo Victor)
Na **página de vendas do curso**, usar a **geometria do Eneagrama** no lugar do **octaedro** que ancora o hero nas versões recentes do workshop.
- **Fonte do SVG do eneagrama (gerado do zero, monocromático, decisão 29/06):** `04 - web design/landing-v4/components/ds/Enneagram.tsx` — portar as coordenadas (círculo + 9 pontos + conexões) para um `<symbol id="enne">` inline no HTML da página do curso. Monocromático (dourado/petróleo), **sem as 9 cores dos tipos**.
- **O que ele substitui:** o `<symbol id="octa">` do hero (ver `página pré-final/index deployado/index-v3-single.html` ~l.826 como referência de como o octaedro é usado/estilizado — replicar esse tratamento com o eneagrama). O octaedro **não** entra na página do curso.
- Regra visual: geometria é tempero, não o prato (METODO §3.5). Fina, discreta, 1 uso âncora no hero.

---

## 2. ENTREGAS (4 blocos · ordem por dependência)

### Bloco A — 2 páginas de obrigado do curso (esforço P) — FAZER PRIMEIRO
Copy pronta no §3 e §4 do `ESCOPO-FUNIL-CURSO-2026-07-17.md`. Reaproveitar CSS/tokens das obrigado do workshop (`04 - web design/obrigado/obrigado-meio-semana.html`) como base — **copiar para arquivo novo, não editar o original**. Remover B2 (grupo) e B4 (resgate); trocar por bloco Instagram `@deboradelmac` (`https://instagram.com/deboradelmac`). Selo escuro no topo mantido. `noindex`, sem travessão, mobile.
- Criar: `obrigado/obrigado-curso-promo-2026-07-17.html` (curso R$57 — só agradece + Instagram).
- Criar: `obrigado/obrigado-curso-upsell-2026-07-17.html` (curso R$297 — agradece + mini-guia "como começar" 3 passos + Instagram).

### Bloco B — Apps Script v5 (esforço M · retrocompatível) — antes da página do curso
Copiar `04 - web design/página pré-final/dashboard/APPS-SCRIPT-ECOSSISTEMA-V4.gs` → **`APPS-SCRIPT-ECOSSISTEMA-V5-2026-07-17.gs`** (v4 permanece intacto). Mudanças (detalhe no `PLANO-TRACKING-PAGINA-CURSO.md`):
1. Add coluna `page` em `H_FUNIL` e `H_ENGAJ`; gravar `data.page` no `doPost` (default `''` = workshop, retrocompat via `ensureHeaders_`).
2. `ORDEM_DOBRAS_POR_PAGINA` = { workshop: (a atual), curso: as 10 dobras do `PLANO-PAGINA-CURSO-ENEAGRAMA.md` }.
3. `buildHeatDobra_`, `buildFunnel_`, `doGet` aceitam `page` (default workshop). Publicar como **nova versão do MESMO Web App** (URL `/exec` não muda). **Order bump já é contabilizado** (aba Vendas `is_order_bump`) — não mexer nisso.

### Bloco C — Página de vendas do Curso (esforço M) — depende de B no ar + geometria §1
Build do `PLANO-PAGINA-CURSO-ENEAGRAMA.md` (10 dobras, copy de produção, design system V2). Arquivo novo: **`curso-eneagrama/index-2026-07-17.html`** (HTML único autocontido).
- CTA → checkout **upsell R$297**: `https://checkout.pagtrust.com.br/cka1d66532?funnel=fne2960a13`.
- Pixel base `4060021607461178` + `ViewContent`/`InitiateCheckout` com `content_name:'curso-eneagrama'`. **Purchase NÃO** (fica na PagTrust — decisão 17/07).
- Instrumentar mini-SDK `funil`/`engaj` com `page:'curso'` → o `LEADS_ENDPOINT` já publicado (mesmo do workshop). IntersectionObserver por dobra.
- Geometria do eneagrama no hero (§1).
- Pendências humanas (não bloqueiam build; deixar placeholder marcado): foto real + credenciais da Débora (D6); confirmar tabela R$297.

### Bloco D — Dashboard v4 (esforço M/G) — depois que a página do curso gera dados
Copiar o dashboard v3 vigente para pasta/arquivo datado **`dashboard/v4-2026-07-17/`** (v3 permanece). Add: seletor **Workshop · Curso** (troca `&page=` nas chamadas `doGet`) → 2 mapas de calor por dobra; **bloco de order bumps** (take rate = bumps ÷ vendas workshop, receita; lê aba Vendas `is_order_bump`). Reaproveitar Meta Ads/ciclo de vida.

---

## 3. Gate de fechamento (rodar antes de encerrar a sessão)
- [ ] Cada arquivo novo tem header `STATUS:` e nome datado; **nenhum arquivo vigente alterado** (`git status` só mostra arquivos novos).
- [ ] Copy: varredura léxico morto (`GOVERNANCA §4`) = 0; **zero travessão** (inclusive comentários); "Eixo" (não "Seu Eixo"); eneagrama = "uma das lentes".
- [ ] Obrigado do curso: `noindex`, sem grupo, Instagram `@deboradelmac` presente, mobile ok.
- [ ] Página do curso: primeira dobra no primeiro paint, 1 CTA → R$297, geometria eneagrama (não octaedro), pixel `content_name` certo, sem Purchase.
- [ ] Apps Script v5: v4 intacto; `page` retrocompatível; URL /exec inalterada.
- [ ] Dashboard v4: v3 intacto; seletor + heat por página + bumps.
- [ ] DECISOES atualizado com "Propaga p/" no que fechar; DIÁRIO com entrada da sessão.

## 4. Pendências humanas (sinalizar, não resolver)
Victor: webhook dos 2 produtos do curso → MESMO endpoint · obrigado por checkout na PagTrust (R$57→promo, R$297→upsell) · tabela R$297. Débora: validar `@deboradelmac` · aprovar copys · foto/credenciais (D6).
