# Carrossel · Rompa o Teto Financeiro

Oito cards 1080 × 1350 produzidos localmente em 09/09/2026, a partir das cartas enviadas por Victor. Hook: “Você dá desconto antes de alguém pedir?”. CTA: EU TOPO no Direct. Não publicado.

- `exports/GA-TETO-01.png` a `GA-TETO-08.png`: cards na ordem de postagem.
- `exports/VISAO-GERAL.png`: prancha de visualização; não é um card para postar.
- `CARROSSEL-ROMPA-O-TETO.zip`: cards, legenda, copy e planejamento.
- `COPY-E-TEXTO-ALTERNATIVO.md`: texto exato de cada card e alternativas textuais.
- `LEGENDA.md`: legenda pronta.
- `PLANEJAMENTO.md`: objetivo, roteiro, fontes, direção, auditoria e confirmações para publicação.
- `QA.json`: verificação técnica dos exports.
- `source/`: fonte visual editável (copy.json, CSS, HTML, assets, build e render).

## Reprodução

Node e dependências Playwright/Sharp. Garamond instalada no sistema e Manrope fornecida localmente.

```powershell
$env:NODE_PATH = 'C:\Users\zioni\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules'
node .\source\build.mjs
node .\source\render.mjs
```

Render serve apenas os assets desta pasta em porta efêmera de 127.0.0.1 e encerra o servidor ao terminar. Não há integração com Instagram ou conta de anúncios. Antes de publicar, confirmar os dados do formato e o atendimento da seleção, descritos no planejamento.
