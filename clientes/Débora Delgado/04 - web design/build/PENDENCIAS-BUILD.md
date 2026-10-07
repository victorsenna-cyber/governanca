# Build `index.html` — Seu Eixo · pendências e gate (v1)

> Gerado por Claude Code (Opus 4.8) em 08/07/2026, fila #2. Contrato: `../PROMPT-CLAUDE-CODE-SEU-EIXO.md` + `../PLANO-PAGINA-SEU-EIXO.md`. **Não publicado** (deploy = Victor, fila #5).

## O que foi entregue
`build/index.html` — arquivo único autocontido (CSS inline, Google Fonts, SVGs inline via `<symbol>`), D0–D10 + rodapé, copy de produção do PLANO dobra a dobra. Curva de voltagem e racional de cor aplicados; único bloco escuro = D8 (clímax). Sem React/build step, sem CDN além do Google Fonts.

## Gate de publicação (checklist resumido do PLANO — método de governança não acessível nesta sessão)
- [x] **Zero `{{placeholder}}` visível** — todos os `{{...}}` restantes vivem em comentários HTML/JS ou na base do Pixel comentada (verificado por grep).
- [x] **Nada de "Desenho Humano" / EFT / Ikigai** na comunicação (grep vazio; copy vem do PLANO já limpo). Confirma decisão Victor 08/07.
- [x] **Estrutura HTML válida** — DOCTYPE/html/head/body/main balanceados; 11 `<section>`, 6 `<details>` FAQ, todos os `<use>` resolvem a símbolos definidos.
- [x] **Sem erro no console** (Chrome).
- [x] **Sem overflow horizontal** — `scrollWidth === clientWidth`; halo/octaedro decorativos clipados por `overflow-x:hidden`.
- [x] **Primeira dobra 100% no primeiro paint** — hero sem `data-reveal` e sem animação no caminho do H1; reveal progressivo só abaixo da dobra, com fallback `no-js` (nada atrás de JS).
- [x] **Lógica de lote** (verificada no browser): Lote 1 vigente hoje; card aceso + borda dourada + "LOTE VIGENTE"; preço/data injetados no hero, FAQ e sticky; botão da oferta aponta ao checkout do lote vigente. Virada por constante de data (`LOTE1_FIM`/`LOTE2_FIM`) no topo do JS.
- [x] **AA de contraste** — paleta segue a tabela da DIRECAO-DESIGN-CODEX (petróleo `#2E3D45` s/ papel = 10.58:1; `#F1EDE4` s/ grafite = 11.15:1; etc.).
- [ ] **Teste dos 5 segundos com pessoa de fora** — humano (o hero passa a leitura o quê/p/ quem/o que ganho/próximo passo, mas o teste formal é externo).
- [ ] **Mobile em aparelho real (375px)** — nesta sessão a janela do Chrome tem largura mínima ~524px (testado a 524: layout mobile empilha, sem overflow). O teste a 375 em device real fica para o passo de deploy (#5, "mobile real").
- [x] **Eventos do Pixel** — **RESOLVIDO 09/07**: pixel configurado via Google Tag Manager, instalado no Wix e na PagTrust. `PageView`, `ViewContent`, `InitiateCheckout` e `Purchase` ativos. (Confirmar no Events Manager como passo de QA antes de subir verba, mas o bloqueio de configuração está fechado.)
- [ ] **Aprovação Débora (copy/página) + Victor (publicação)** — SLA 3 dias úteis. Débora já enviou 1ª rodada de feedback em áudio (09/07, ver pendência 5 abaixo) — aprovação final ainda não fechada.

## Pendências que bloqueiam a publicação (humano)
1. ~~`{{PIXEL_ID}}`~~ — **RESOLVIDO 09/07** (ver acima). Se a versão em `página pré-final/index.html` ainda usa placeholder, replicar a configuração do GTM ao promover para build final.
2. **Martelo TRES vs "Raiz em Ação"** (Débora) — o build usa **TRES** (plano manda); marcado com comentário `MARTELO` na D4. Se virar "Raiz em Ação", trocar 1 string.
3. **Foto real da Débora (D6)** — hoje é placeholder de arte (selo digital-labirinto). Entra o asset tratado da fila #1 (`build/assets/`, após aprovação Débora+Victor). **Decisão nova 09/07: a seção "quem conduz" (bio/foto completos) move para DEPOIS da oferta; antes da oferta fica só uma microcopy de autoridade curta.** Ajustar a ordem das dobras na próxima iteração de código.
4. **Prova/depoimentos (D6)** — v1 usa **autoridade de percurso** (engenheira + anos de empresa + mentoria ativa), sem depoimento inventado. Quando a Débora aprovar 1-2 relatos reais (+ linha de volume "n líderes"), substituem o bloco `.proof` na v1.1 (comentário no HTML marca o ponto).
5. **Feedback de Débora em áudio (09/07, `../página pré-final/feedback página.ogg` + `especificidade.ogg`)** — pontos sobre especificidade de comunicação com o ICP e remoção de algumas promessas. **Ainda não transcrito nem aplicado.** Próximo passo antes de fechar aprovação: transcrever e iterar oferta canônica/ICP/página/copy de criativos a partir daí.

## Já resolvido fora do build (contexto, não bloqueia código)
- **Produto e ofertas dos 3 lotes criados na PagTrust**, integrados à página com virada automática por data (mesma lógica de `LOTE1_FIM`/`LOTE2_FIM`).

## Decisões tomadas no build (dentro da alçada — sinalizadas p/ auditoria Codex #3 + Victor)
- **Checkout PagTrust por lote wired** com os links reais de `../LINKS CHECKOUTS - LOTES 1, 2 e 3.md` (removeu o placeholder `{{URL_PAGTRUST}}`). Default sem-JS = Lote 1.
- **InitiateCheckout só no clique que realmente vai ao checkout** (botão da oferta), não nos CTAs-âncora (hero/D4/D10 rolam para #oferta). Serve à otimização em InitiateCheckout (DECISOES 08/07) com sinal limpo. Se o Victor preferir IC em todo CTA, é 1 ajuste.
- **D6/D7 diferenciadas** do papel puro por um leve gradiente de transição (`bg-transition`), respeitando a senoide (sem 3 tratamentos idênticos seguidos).

## Nota p/ iterações futuras (não-bloqueante)
- Nos lotes 2/3, no mobile o card vigente não fica em 1º no empilhamento (DOM é 1-2-3). O vigente segue destacado por cor/borda; se quiser "vigente primeiro" no mobile, dá para reordenar por CSS `order`. Irrelevante para o Lote 1 (vigente agora, já em 1º).
