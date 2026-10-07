# Direção de Design — Criativos Estáticos (Débora Delgado · "Seu Eixo")

> Guia **enxuto** pra gerar criativos estáticos no Claude Design / ChatGPT Images. Não é o design system completo (esse vive em `05 - design/design-system/`). Aqui está só o essencial pra uma peça sair fiel à marca. Fonte canônica: `05 - design/design-system/design-tokens.css` + `BRAND-BRIEF.md`.

---

## 1. A sensação (em uma frase)
**Papel fino sob luz natural.** Sóbrio, editorial, terroso, respirado. Uma líder experiente olhando pra dentro — nada de startup neon, nada de "coach" berrante. Calma com autoridade.

---

## 2. Paleta (copiar os HEX)

| Cor | HEX | Papel na peça |
|---|---|---|
| Papel | `#FAF8F3` | fundo principal (quase branco quente) |
| Areia | `#F1EDE4` | fundo alternativo, cards |
| Musgo (assinatura) | `#7A9E89` | blocos/superfícies de destaque, a cor da marca |
| Musgo escuro | `#3E5A4B` | fundo de peça com texto claro |
| Petróleo | `#2E3D45` | **todo texto e títulos** |
| Dourado | `#B89B72` | **só acento**: linha fina, selo, borda, detalhe — NUNCA área chapada grande |
| Terracota | `#C08552` | acento quente, com parcimônia |

**Proporção (regra de ouro):** areia/papel domina o fundo · musgo estrutura · petróleo no texto · dourado pontua fino. **Nunca** texto longo sobre dourado chapado. Fundo sempre claro/terroso — **nunca dark mode**.

Contraste seguro: petróleo sobre areia = AAA. Areia sobre petróleo/musgo escuro = AAA (peças de fundo escuro usam texto areia).

---

## 3. Tipografia
- **Títulos:** **Fraunces** (serifada editorial) — peso 300–600, caixa mista, tracking levemente negativo. É o rosto da marca.
- **Corpo / legendas:** **Inter** (sans) — peso 400–600.
- **Eyebrow / selo / rótulo:** Inter caixa-ALTA, tracking largo (`0.18em`), pequeno.
- Hierarquia numa peça: 1 título grande Fraunces + 1 linha de apoio Inter + (opcional) 1 eyebrow. Não encher de texto.

---

## 4. Elementos de marca (usar com parcimônia)
- **Símbolo digital-labirinto / fingerprint** (a marca primária) — em dourado fino ou petróleo, canto ou selo.
- **Eneagrama monocromático** (dourado/petróleo, SEM as 9 cores dos tipos) — geometria do método, discreto.
- **Grid de blueprint** (linhas técnicas finíssimas, `rgba(46,61,69,.05)`) como textura de fundo — papel de arquiteto.
- **Halo/glow radial** muito diluído (musgo ou dourado) atrás do foco. Sutil, luz natural, não efeito.
- Geometria sagrada (octaedro, linha fina) como ornamento estrutural, nunca protagonista.

---

## 5. Composição
- **Respiro é luxo:** margens generosas, muito espaço vazio. Não lotar.
- **1 mensagem por peça.** Um título forte, um apoio. O olho descansa.
- **Foto da Débora** (quando usar): tratamento terroso/quente, integrada ao fundo areia — ver `05 - design/fotos/`.
- Cantos suaves (raio 10–16px em cards). Sombra suave em camadas, nunca sombra dura.
- CTA (se houver): petróleo com texto areia + borda fina dourada. Nunca botão neon.

---

## 6. O que EVITAR (tells de "fora da marca")
- Dark mode, fundo preto, neon, gradiente vibrante.
- Dourado como fundo chapado de texto.
- Emoji, ícones genéricos de banco, stock "corporativo sorridente".
- Excesso de texto, mais de um foco, poluição visual.
- Linguagem/imagem que diagnostica o lead como quebrado (posicionamento 30/06: líder que já lidera bem — completar, não consertar).

---

## 7. Formatos
- Feed quadrado **1080×1080** · Stories/Reels capa **1080×1920** · (se preciso) 1200×628 p/ link.
- Legibilidade mobile: título grande, contraste AAA, testar em tela pequena.

---

## 8. Prompt-base pra IA de imagem (colar e adaptar)
> "Static ad creative, editorial and calm, warm paper background (#FAF8F3), sage green (#7A9E89) accent block, petroleum blue (#2E3D45) serif headline (Fraunces style), thin gold (#B89B72) line detail, generous whitespace, subtle architectural blueprint grid texture, natural soft light, premium and sober — no neon, no dark mode, no emoji. Audience: experienced leaders looking inward. [inserir headline e elemento]."

> Copy das peças (headlines/CTA) NÃO se inventa aqui — vem aprovada de `COPY-CRIATIVOS-ESTATICOS.md` + voz da Débora (`07 - skills/debora-voice`). Esta direção é só o VISUAL.
