# PROJECT.md — Design System Débora Delgado

## O que é

O **design system** da marca Débora Delgado (Workshop "Carreira Alinhada"): a camada
reutilizável de **tokens + componentes + styleguide** que garante coerência visual
entre a landing (`04 - web design`) e os criativos de tráfego (`03 - tráfego pago`).
É a **saída** que destila o `BRAND-BRIEF.md` (a entrada) em peças prontas para uso.

## Objetivo

Um conjunto de tokens CSS (custom properties) e componentes HTML/CSS, sóbrios e
premium, **embedáveis em Wix sem build**, que qualquer página ou criativo possa
reutilizar — preservando paleta, tipografia e tom da marca sem reinterpretar a cada peça.

---

## Paleta canônica (hex)

Base extraída da arte oficial. O design system deve gerar variações (tints/shades) e
**checar contraste WCAG AA**. Hex de partida:

| Token semântico | Cor | Hex | Papel |
|---|---|---|---|
| `--cor-fundo` | Areia / off-white | `#F1EDE4` | Fundo dominante, respiro (papel/calma) |
| `--cor-superficie` | Verde-sálvia / musgo | `#7A9E89` | Blocos, seções, superfícies estruturais |
| `--cor-texto` | Azul-petróleo escuro | `#2E3D45` | Texto e títulos (contraste quente, não preto puro) |
| `--cor-acento` | Dourado | `#B89B72` | Fingerprint, linha de geometria, CTA refinado |
| `--cor-acento-quente` | Terracota | `#C08552` | Acento alternativo / detalhe |

**Proporção:** areia domina -> musgo estrutura -> petróleo é o texto -> dourado/terracota
pontua. Dourado **nunca** como grande área chapada.

---

## Tipografia

- **Títulos:** sans-serif **caixa-alta, tracking largo**, sóbria/geométrica-humanista
  (editorial premium, não startup). Tokens de escala + peso + letter-spacing.
- **Corpo:** sans-serif legível, caixa normal, **entrelinha generosa** (leitura calma).
- **Evitar:** display arredondada/fofa, script, fontes de efeito.
- O design system deve definir a **escala** (h1...h6, body, small) e pesos como tokens.

---

## Elementos gráficos

- **Logo/símbolo:** **fingerprint dourada** (unicidade), podendo dialogar com labirinto.
- **Geometria sagrada:** **icosaedro / sólidos platônicos** em **linha fina dourada**
  sobre musgo ou areia. Fornecer como SVG reutilizável (token de stroke fino).
- **Orgânicos:** folha, onda, mandala — **com parcimônia**, textura/detalhe de canto.
- **Tratamento:** linha fina, muito respiro, composição assimétrica calma.

---

## Componentes-alvo

O styleguide deve renderizar, no mínimo:

| Componente | Notas |
|---|---|
| **Botões / CTA** | Primário (dourado fino refinado), secundário, estados hover/foco |
| **Card de oferta / lote** | Reflete os lotes da oferta (ver `OFERTA-CANONICA.md`): R$97 / R$197 / R$257 |
| **Bloco de depoimento** | Citação sóbria, sem aspas decorativas hype |
| **FAQ** | Acordeão calmo, tipografia legível |
| **Badge de escassez** | "Turma de até 20", "Lote 1 — 10 vagas" — sóbrio, sem urgência berrante |
| **Seção hero** | Areia de fundo, título caixa-alta, fingerprint/geometria como acento |

A oferta (lotes, vagas, mentoria) vem de `03 - tráfego pago/OFERTA-CANONICA.md`. O
design system fornece a **forma**; o conteúdo é referenciado, não fixado aqui.

---

## Como alimenta as outras frentes

- **Landing (`04 - web design`):** importa `design-tokens.css` e reusa os componentes
  como blocos. A página vive lá, não aqui.
- **Criativos (`03 - tráfego pago`):** usam a mesma paleta/tipografia/elementos como
  referência visual para manter coerência entre anúncio e página.

---

## Entregáveis esperados

| Arquivo | Conteúdo |
|---|---|
| `design-tokens.css` | Tokens CSS custom properties: cor (+variações), tipografia, espaçamento, raio, sombra. (Opcional espelho `.json`.) |
| `styleguide.html` | Página autocontida que renderiza paleta, escala tipográfica e todos os componentes-alvo consumindo os tokens. |
| `README.md` | Como usar: copiar tokens para o Wix, aplicar componentes, regras de proporção e do/don't. |

---

## Símbolo do Eneagrama (elemento gráfico do método)
Especificação completa de construção e estilo em `BRAND-BRIEF.md` → seção "Símbolo do
Eneagrama — recriar, NÃO copiar". Resumo: **recriar em SVG do zero** (não copiar artes
de referência em `../referencias-eneagrama/`), **monocromático** (dourado/petróleo,
**sem** as 9 cores dos tipos), por ora **só na seção do método**. Entregar como
componente SVG do design system (recolorível por token). Promoção a elemento de marca
forte depende de validação da Débora (ver `../../DECISOES.md`).
