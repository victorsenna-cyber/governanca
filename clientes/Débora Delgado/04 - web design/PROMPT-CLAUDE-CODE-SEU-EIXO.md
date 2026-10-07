# PROMPT — Claude Code (Fable 5) · build da página Seu Eixo

> ⚠️ **FORA DE VIGOR (Victor 09/07).** Este prompt construía o `build/index.html`, que não recebe mais iteração. O arquivo em vigor é `página pré-final/index deployado/index.html`; edições via `página pré-final/TASKS-SONNET-PAGINA.md`. Mantido só como histórico.

Copiar e colar no Claude Code aberto na pasta `04 - web design`:

---

Construa a página de vendas do workshop "Seu Eixo" como **um único `index.html` autocontido** em `build/`.

**Contrato do build: `PLANO-PAGINA-SEU-EIXO.md`** — siga dobra a dobra (D0-D10): a copy é de produção (não reescreva), a curva de voltagem define o peso visual de cada dobra e o racional de cor está anotado por dobra. Paleta, tipografia (Fraunces/Inter) e proibições: `../05 - design/DIRECAO-DESIGN-CODEX.md`. Referência de UI já aprovada: `landing-v4/` (componentes e `styles/design-tokens.css`) — traduza a qualidade, não o stack.

Use a skill **ui-ux-pro-max** para o padrão de excelência visual, com estas restrições: sem React/build step, sem CDN além de Google Fonts, SVGs (eneagrama monocromático, octaedro, digital-labirinto) estáticos inline, primeira dobra inteira no primeiro paint, JS só para FAQ/sticky CTA/virada de lote por constantes de data (`LOTE1_FIM=2026-07-28`, `LOTE2_FIM=2026-08-07`), `prefers-reduced-motion` respeitado, < 3s em 4G, contraste AA.

Quero uma página **viva**: microinterações de 150-300ms, revelação progressiva discreta, profundidade por camadas (grain sutil, halos leves), hover refinado no CTA (grafite + borda dourada, especular fino) — e um único clímax visual: a oferta (D8) é o só bloco escuro da página. Nada de glassmorphism genérico, gradiente neon, ícone 3D, estética de template.

Pixel Meta: base comentada no `<head>` com `{{PIXEL_ID}}`; eventos `PageView`, `ViewContent` (scroll até #oferta) e `InitiateCheckout` (cliques de CTA). Links de checkout: `{{URL_PAGTRUST}}`.

Ao final: rode o gate da Parte 5 do `../../01 - Governança/METODO-PAGINA-DE-VENDAS.md` (se a pasta de governança não estiver acessível, use o checklist resumido no fim do plano), teste mobile 375px, e entregue `build/index.html` + lista de pendências. Não publique nada.

---

*Pendências conhecidas que o prompt não resolve: {{PIXEL_ID}} (criar no BM da Débora), {{URL_PAGTRUST}}, foto real da Débora (usar placeholder de arte até ela enviar), nome do método TRES vs "Raiz em Ação" (plano assume TRES).*
