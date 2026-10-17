# SITE CONTINUUM: continuumsystems.com.br

> **Tipo:** índice de área · **Criado em:** 15/10/2026 · **Alçada:** Victor
> **O que é:** o site da própria Continuum. Hoje está na Hostinger, com um iframe que carrega `continuum-ai-systems.vercel.app`. A decisão é tirar da Vercel e servir os arquivos direto pela Hostinger.

| Caminho | O que é |
|---|---|
| `pagina-iteracao/index.html` | **a página v2, iterada em 17/10/2026.** Copy nova, design original mantido, teste das cinco perguntas, formulário na dobra da oferta e obrigado com WhatsApp. Usa `assets/styles-7pl-t798.css` (cabeçalho e primeira dobra) e a folha embutida na própria página |
| `pagina-iteracao/privacidade.html` | política de privacidade, 🟡 rascunho a revisar pela árvore JURÍDICO |
| `apps-script/Code.gs` | script da planilha de leads, com o passo a passo de implantação no topo |
| `PLANEJAMENTO-COPY-COMPOSICAO-2026-10-15.md` | o plano da página: diagnóstico, headline, esqueleto, fluxo de conversão, lacunas e registro da execução (§12) |

Os outros arquivos de `pagina-iteracao/` (`assets/index-*.js`, `~flock.js`, `__l5e/`, `index.pre-iteracao-continuum.bak.html`) vieram com a cópia, e a página não os usa. **Não subir para a Hostinger.**

**Original (não editar):** `01 - Continuum\24 - Codex\Página de Vendas CONTINUUM\Continuum AI Systems\continuumsystems.com.br\continuum-growth-engine.lovable.app\`

**Estado:** 🟡 página construída e testada localmente (computador e celular). **Não publicável enquanto houver campo `.pendente` visível ou `CONFIG` vazio no script** (plano §12.3).

## Para ver localmente

```
cd pagina-iteracao
py -m http.server 8765
```

Abrir `http://localhost:8765/`. Abrir o arquivo direto, sem servidor, quebra o cabeçalho e a primeira dobra, porque a folha de estilo é chamada por caminho absoluto (`/assets/...`).
