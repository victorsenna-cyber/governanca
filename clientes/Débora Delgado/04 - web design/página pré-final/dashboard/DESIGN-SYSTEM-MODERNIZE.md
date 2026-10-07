# Design System — extraído do Modernize (referência p/ o dashboard claro)

> Tokens extraídos de `04 - web design/referências/Modernize-Nextjs-Free-main.zip` (`src/utils/theme/DefaultColors.tsx`, tema `baselightTheme`). Base para o redesign do `painel/index.html` em **tema claro** (preferência da Débora). Modernize é MIT (uso livre) — recriar em CSS puro, não copiar arquivos React.

## Paleta (tema claro)

| Token | Hex | Uso |
|---|---|---|
| primary.main | `#5D87FF` | ação principal, barras de destaque, links |
| primary.light | `#ECF2FF` | fundo de chip/badge primário |
| primary.dark | `#4570EA` | hover do primário |
| secondary.main | `#49BEFF` | acento secundário (gráfico série 2) |
| secondary.light | `#E8F7FF` | fundo secundário |
| success.main | `#13DEB9` | positivo (vendas, receita, conversão up) |
| success.light | `#E6FFFA` | fundo de KPI positivo |
| error.main | `#FA896B` | negativo (reembolso, chargeback, queda) |
| error.light | `#FDEDE8` | fundo de alerta |
| warning.main | `#FFAE1F` | atenção (pix pendente, abandono) |
| warning.light | `#FEF5E5` | fundo de aviso |
| info.main | `#539BFF` | informativo |
| grey.100 | `#F2F6FA` | **fundo da página** |
| grey.200 | `#EAEFF4` | bordas suaves, trilha de barra |
| grey.300 | `#DFE5EF` | divisores |
| grey.400 | `#7C8FAC` | texto terciário / labels |
| grey.500 | `#5A6A85` | texto secundário |
| grey.600 | `#2A3547` | texto forte / títulos |
| text.primary | `#2A3547` | corpo principal |
| text.secondary | `#5A6A85` | subtítulos |
| divider | `#e5eaef` | linhas de tabela / separadores |
| card bg | `#ffffff` | fundo dos cards |
| hover | `#f6f9fc` | hover de linha/card |

## Tipografia
- **Fonte:** `Plus Jakarta Sans` (Google Fonts; pesos 300/400/500/600/700). Fallback: Helvetica, Arial, sans-serif.
- Títulos: peso **600**. h4 `1.3125rem` · h5 `1.125rem` · h6 `1rem` (linha 1.2–1.6rem).
- Corpo (body1): `0.875rem`, peso 400, linha `1.334rem`. Labels pequenos (body2): `0.75rem`.
- Botões: `text-transform: capitalize`, peso 400.

## Padrões visuais do Modernize (para replicar)
- **Cards:** fundo branco, `border-radius` ~12px (`7px`–`12px`), sombra suave difusa (`box-shadow: rgba(145,158,171,.3) 0 0 2px, rgba(145,158,171,.1) 0 12px 24px -4px`), padding generoso (~24px).
- **KPI card:** ícone/knob em círculo com `*.light` de fundo e `*.main` no ícone; número grande peso 700; label pequeno em `grey.400` maiúsculo.
- **Gráficos:** paleta primary/secondary/success; grid discreto em `grey.200`; sem bordas pesadas. (No nosso caso, Chart.js — aplicar as cores acima.)
- **Tabela:** cabeçalho em `grey.400` maiúsculo pequeno; linhas separadas por `divider`; hover `#f6f9fc`.
- **Espaçamento:** respiro entre cards ~24px; layout em grid responsivo.

## Mapeamento semântico p/ o nosso funil
- Leads / neutro → `primary`. Vendas / receita / conversão → `success`. Pix gerado → `warning`. Reembolso/chargeback → `error`. Ciclo de vida (renovação) → `success`; cancelamento → `error`.
