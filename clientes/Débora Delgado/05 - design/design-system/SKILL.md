# SKILL.md — Ponteiro para `ui-ux-pro-max`

Esta pasta é construída com a skill **`ui-ux-pro-max`** (design intelligence:
tokens, estilos, paletas, tipografia, acessibilidade). Use-a como **apoio de
raciocínio**; os valores de marca vêm sempre do `BRAND-BRIEF.md` (ver `CLAUDE.md`).

## Onde a skill está (caminho real no repo)

```
07 - skills/ui-ux-pro-max-skill-main/ui-ux-pro-max-skill-main/
├── .claude/skills/ui-ux-pro-max/SKILL.md      <- skill principal (Claude Code)
├── .claude/skills/design-system/              <- subskill: design-system
├── .claude/skills/brand/                      <- subskill: brand (identidade)
└── src/ui-ux-pro-max/
    ├── data/*.csv                             <- bases (colors, typography, styles, ux...)
    └── scripts/
        ├── search.py                          <- entrada CLI de busca
        └── design_system.py                   <- geração de design system
```

Outras subskills presentes em `.claude/skills/`: `design`, `ui-styling`,
`banner-design`, `slides`.

## Como invocar

Geração de design system (ponto de partida de padrões + checklist de acessibilidade):

```bash
python3 ".../07 - skills/ui-ux-pro-max-skill-main/ui-ux-pro-max-skill-main/src/ui-ux-pro-max/scripts/search.py" \
  "premium wellness coaching landing, sage green sand gold, editorial, anti-AI-slop" \
  --design-system -p "Debora Delgado"
```

Busca por domínio específico (cor, tipografia, ux, estilo, landing):

```bash
python3 ".../scripts/search.py" "<query>" --domain color   # ou: typography | style | ux | landing
```

Stack: usar **`html-tailwind`** apenas como referência de busca; o **entregável é
HTML/CSS puro** (custom properties), sem Tailwind no output final (ver `CLAUDE.md` §3).

## Subskills relevantes para esta pasta

| Subskill | Uso |
|---|---|
| **design-system** | Gerar pattern, escala, tokens, anti-patterns, checklist WCAG. **Sobrescrever** cor/tipografia com o `BRAND-BRIEF.md`. |
| **brand** | Tratamento de identidade/elementos gráficos (fingerprint, geometria sagrada) de forma consistente. |
| design / ui-styling | Apoio pontual de estilo e detalhes de componente. |

> Lembrete: a skill propõe genérico; o `BRAND-BRIEF.md` manda. Refine, não substitua.
