# Prompt para o Codex (copiar/colar)

> Abrir o Codex na raiz do projeto:
> `C:\Users\zioni\Organizacional\01 - Continuum\00 - Local\01 - Governança\clientes\Débora Delgado`

---

Leia e execute a task em `04 - web design/página pré-final/dashboard/TASK-CODEX-DASHBOARD-REDESIGN.md`.

Antes de codar, leia também:
- `04 - web design/página pré-final/dashboard/DESIGN-SYSTEM-MODERNIZE.md` (tokens de cor/tipografia — tema claro)
- `04 - web design/página pré-final/painel/index.html` (dashboard atual — a lógica de dados a PRESERVAR)

Entregue `04 - web design/página pré-final/painel/index-light.html` como CÓPIA redesenhada em tema claro. NÃO edite o `index.html` original.

Regras inegociáveis:
- Preserve 100% da lógica de dados: `ENDPOINT`, `SENHA`, `load()`, `render(d)`, todos os nomes de campo lidos do JSON, os `id=` usados pelo JS, o gate de senha, o auto-refresh e o Chart.js. Só o VISUAL muda.
- Deixe o dashboard pronto para a camada de ad (Meta): KPIs Investimento/CAC/ROAS/CPL + seção "Aquisição paga" que mostram placeholder quando `d.ads` está ausente e valores quando presente. `render` trata `d.ads` como opcional e nunca quebra.
- Rode o gate de verificação no fim da task (original inalterado, ids preservados, sem erro de console, blocos de ad não quebram vazios).

Ao terminar, registre uma entrada em `DIARIO-DE-BORDO.md` (raiz) no formato do topo do arquivo.
