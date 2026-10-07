# Design System, Débora Delgado (Workshop "Carreira Alinhada")

Camada reutilizável de **tokens, componentes e símbolos de marca** que mantém a landing
(`04 - web design`) e os criativos (`03 - tráfego pago`) falando a mesma língua visual.
Gerado a partir do `BRAND-BRIEF.md` (a fonte da verdade). Nada de marca foi inventado
aqui: a paleta, a tipografia e os elementos vêm do brief, refinados para contraste e
acessibilidade.

> Regra de texto: zero travessões em qualquer rótulo ou copy. Use vírgula, ponto,
> dois pontos ou parênteses.

---

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `design-tokens.css` | Tokens como CSS custom properties: cor (escala e estados), tipografia, espaçamento, raio, sombra, movimento. Fonte única. |
| `tokens.json` | Espelho dos tokens em JSON, para ferramentas que consomem dados. |
| `src/styles.css` | Classes de componente, todas dirigidas por tokens. Servem ao React e ao vanilla. |
| `src/index.js` | Ponto de entrada dos componentes React. |
| `src/components/*.jsx` | Componentes React leves: Button, Badge, Card, Section, Container, OfferCard, FAQ, Testimonial, Nav, Icon, e os símbolos Enneagram, Fingerprint, SacredGeometry, OrganicTexture. |
| `styleguide.html` | Página autocontida que renderiza tokens, tipografia, componentes e os SVGs. Abre direto no navegador. |

---

## Paleta e proporção

| Papel | Cor | Hex |
|---|---|---|
| Fundo de página | Papel (quase branco quente) | `#FAF8F3` |
| Superfície e cards | Areia | `#F1EDE4` |
| Superfície | Musgo | `#7A9E89` |
| Superfície forte (texto de corpo) | Musgo escuro | `#3E5A4B` |
| Texto | Petróleo | `#2E3D45` |
| Acento | Dourado | `#B89B72` |
| Acento quente | Terracota | `#C08552` |

Proporção: areia domina, musgo estrutura, petróleo é o texto, dourado pontua. O dourado
nunca entra como grande área chapada. No CTA primário ele aparece como **borda fina**
sobre fundo petróleo, não como preenchimento.

### Contraste (WCAG)

| Par | Razão | Nível |
|---|---|---|
| Petróleo sobre papel (fundo) | 10.6:1 | AAA |
| Texto suave sobre papel | 5.2:1 | AA |
| Petróleo sobre areia (cards) | 9.6:1 | AAA |
| Areia sobre petróleo (CTA) | 9.6:1 | AAA |
| Areia sobre musgo escuro | 6.5:1 | AA |
| Petróleo sobre musgo | 3.8:1 | AA somente texto grande (use para títulos) |

O fundo papel (mais claro que o areia) aumenta o contraste do texto escuro. Dourado e
terracota são acento (linhas, bordas, selos), nunca texto de corpo.

---

## Tipografia

- **Títulos:** Fraunces (serifada editorial moderna, optical sizing variável), caixa
  mista, tracking quase nulo (levemente negativo nos tamanhos grandes).
- **Corpo:** Inter, caixa normal, entrelinha generosa (1.7).
- **Rótulos e eyebrows:** caixa-alta com tracking largo (continuam em Fraunces ou Inter).
- Alternativa de título a validar: **Newsreader** (import e `--fonte-titulo` comentados
  no topo de `design-tokens.css`).
- Ambas via Google Fonts (import no topo de `design-tokens.css`).

Escala modular (terça maior), tokens de `--txt-2xs` a `--txt-h1`. Os títulos grandes
usam `clamp()` para responsividade fluida.

---

## Camada premium (atmosfera "blueprint claro")

Profundidade e luz sutis, mantendo tudo claro e terroso. A régua é a sutileza: deve
parecer luz natural e papel fino, nunca efeito. Tudo token-driven:

- **Fundo:** `--cor-fundo` quase branco quente com `--grad-fundo` (gradiente radial de
  volume). Nunca inverter para dark.
- **Grid blueprint:** `--grid-blueprint` (linhas finíssimas a ~5%). Aplique com a classe
  de seção `dd-section--grid` ou direto como `background-image`.
- **Glow:** `--glow-musgo` e `--glow-dourado` (halos radiais). Classe `dd-glow` dentro de
  um `dd-ancora` para por atrás de hero ou eneagrama.
- **Orbes:** classe `dd-orbe` (variações `--musgo`, `--areia`, `--dourado`) dentro de uma
  seção `dd-section--orbe`. Em React, componentes `Orbe` e `Glow`.
- **Glass discreto:** `dd-card--glass` e `dd-oferta--glass`, ou prop `glass` nos
  componentes Card e OfferCard. Só em cards-âncora (oferta, depoimento), nunca em tudo.
- **CTA vidro:** o botão primário já vem com gradiente, brilho de topo, borda com luz
  dourada e sombra em camadas. O hover intensifica o brilho.
- **Ritmo:** alterne o fundo das seções com a prop `fundo` de Section
  (`limpa`, `grid`, `orbe`, `alt`, `musgo`, `escura`).

---

## Como usar

### Em React (Claude Design e qualquer app)

```jsx
import './design-tokens.css';
import './src/styles.css';
import { Button, OfferCard, Enneagram } from './src/index.js';

<Button variante="primario" href="#">Quero participar</Button>
<Enneagram size={200} className="dd-simbolo" />        {/* dourado */}
<Enneagram size={200} className="dd-simbolo dd-simbolo--petroleo" showNumbers />
```

Os componentes não têm dependências além do React. Estilo por classe (sem CSS in JS),
o que mantém a tradução para vanilla trivial.

### No Wix (HTML e CSS, sem build)

1. Cole o conteúdo de `design-tokens.css` em um bloco de código ou no CSS global do Wix.
2. Use a marcação das classes (`dd-btn`, `dd-card`, `dd-oferta`...) conforme aparece em
   `styleguide.html`. O styleguide já é a referência vanilla.
3. Para os símbolos, copie o SVG correspondente do `styleguide.html` (eles usam
   `currentColor`, então a cor segue a classe `dd-simbolo` ou `dd-simbolo--petroleo`).

---

## Símbolos de marca

- **Fingerprint (digital labirinto):** marca primária. Espiral contínua (um caminho ao
  centro) com arcos de cordilheira em volta. Traço fino dourado.
- **Enneagram:** símbolo do método, recriado das coordenadas validadas do brief
  (viewBox 240, centro 120,120, raio 100, 9 no topo, triângulo 3 6 9, hexade
  1 4 2 8 5 7). Monocromático, recolorível por token. Não usar as 9 cores dos tipos.
  Por ora, só na seção do método.
- **SacredGeometry e OrganicTexture:** apoio, linha fina, com parcimônia.

Todos recoloríveis por token (usam `currentColor`).

---

## Do e Don't

| Fazer | Evitar |
|---|---|
| Areia de fundo, muito respiro | Fundo chapado de dourado |
| Dourado fino como acento e borda | Dourado como grande área |
| Geometria em traço fino | Render 3D, glow, gradiente vibrante |
| Títulos serifados editoriais em caixa mista | Sans genérica de IA, arredondada, script, efeito |
| Composição calma e assimétrica | Layout de template de curso, hype |
| Petróleo como texto | Preto puro duro |

---

## Limites (ver `SCOPE.md`)

Aqui mora o sistema. A landing vive em `04 - web design` e consome estes tokens. Os
criativos vivem em `03 - tráfego pago`. A identidade e a oferta (preços, lotes) são
referência externa (`OFERTA-CANONICA.md`), não fixadas neste sistema.
