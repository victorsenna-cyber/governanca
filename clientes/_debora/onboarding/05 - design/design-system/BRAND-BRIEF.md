# BRAND BRIEF — Workshop "Carreira Alinhada" (Débora Delgado)

> **O que é este documento:** um **briefing de marca** — o INPUT para o design system
> que o Claude Code vai gerar. **Não é o design system final** (sem tokens, escala
> tipográfica completa, componentes ou specs de export). É a direção a destilar.
> Base: arte oficial da Débora + decisão de identidade de 25/06 (ver `DECISOES.md`,
> `PROJECT.md` §6, `OFERTA-CANONICA.md` §3b).

---

## Paleta (base a refinar)

Hex extraídos da arte oficial. Tratar como **ponto de partida**, não valores
fechados — o design system deve refinar contraste/acessibilidade e variações.

| Cor | Hex (base) | Papel |
|---|---|---|
| Verde-sálvia / musgo | `#7A9E89` | Cor-assinatura. Superfícies, blocos, fundos de seção, ilustração. Traz o terroso/orgânico. |
| Areia / off-white | `#F1EDE4` | Fundo dominante, respiro, base clara dos cadernos e páginas. Sensação de papel/calma. |
| Azul-petróleo escuro | `#2E3D45` | Texto e títulos, contraste sóbrio sobre areia. Substitui o "preto puro" (mais quente, menos duro). |
| Dourado / terracota | `#B89B72` (dourado) · `#C08552` (terracota) | **Acento** — fingerprint, linhas de geometria sagrada, detalhes, CTA refinado. Usar com parcimônia; é o brilho, não a base. |

**Regra de proporção:** areia domina (fundo) -> verde-musgo estrutura -> petróleo dá o
texto -> dourado/terracota pontua. Dourado nunca como grande área chapada.

---

## Tipografia (ATUALIZADO — serifada editorial)

- **Títulos:** **serifada editorial moderna** (não sans). Fonte: **Fraunces**
  (Google Fonts) como base; **Newsreader** como alternativa a validar. Serifada dá
  o nível "editorial premium" que a sans Jost não entrega. Pode usar caixa-alta com
  tracking em eyebrows/rótulos, mas os títulos grandes ficam em caixa mista, serifada.
- **Corpo:** **Inter** (Google Fonts), caixa normal, entrelinha generosa (1.7).
- **Direção a evitar:** sans genérica "de IA" (Jost/Poppins) nos títulos, display
  arredondada, script, fontes de efeito. Nada infantil ou "guru".

---

## Elementos gráficos

- **Logo / símbolo:** **impressão digital (fingerprint) dourada** — a unicidade da
  pessoa; pode dialogar com um **labirinto** (jornada interna, fingerprint-labirinto).
- **Geometria sagrada:** **icosaedro / sólidos platônicos** (incl. dodecaedro) em
  **linha fina dourada** sobre fundo musgo ou areia. Estrutura, ordem, congruência.
- **Orgânicos:** **folhas, ondas, mandala** — apenas com **parcimônia**, como textura
  ou detalhe de canto, nunca enchendo a peça. Equilibram o geométrico com o vivo.
- **Símbolo do Eneagrama (geometria sagrada do método):** ver seção dedicada abaixo.
- **Tratamento:** linha fina, muito respiro, composições assimétricas calmas.

---

## Símbolo do Eneagrama — recriar, NÃO copiar

> **Decisão (29/06):** o eneagrama é a geometria sagrada que representa o método.
> Por ora entra **somente na seção do método** (onde se fala dos 9 estilos). Há a
> **possibilidade futura** de promovê-lo a **elemento de marca forte** (hero/capa) —
> mas isso **depende de validação da Débora**; não assumir ainda. A marca primária
> segue sendo a **digital-labirinto**.
>
> **Importante:** as imagens de referência (em `05 - design/referencias-eneagrama/`,
> quando adicionadas) são **conceito, não arte a copiar**. O Claude Code / Claude
> Design deve **recriar o símbolo do zero em SVG**, parametrizado na paleta da Débora.
> O eneagrama é figura geométrica de domínio público, construível matematicamente.

**Construção geométrica (especificação para recriar):**
- **Círculo** externo (a unidade/o todo).
- **9 pontos** equidistantes sobre o círculo, numerados **1 a 9** no sentido horário,
  com o **9 no topo** (12h).
- **Triângulo interno** ligando os pontos **3 – 6 – 9** (a "lei do três").
- **Hexade** (figura de 6 lados irregular) seguindo a sequência **1 → 4 → 2 → 8 → 5 →
  7 → 1** (a "lei do sete"; period decimal de 1/7). As duas figuras juntas formam a
  estrela de nove pontas característica.
- Opcional, bem sutil: **flor-da-vida pontilhada** ao fundo, opacidade muito baixa.

**Coordenadas validadas (viewBox 0 0 240 240, centro 120,120, raio 100):**
Calculadas por trigonometria (9 no topo, passo 40°, horário). Use exatamente estas:
```
ponto 1: 184.3, 43.4      ponto 6: 33.4, 170.0
ponto 2: 218.5, 102.6     ponto 7: 21.5, 102.6
ponto 3: 206.6, 170.0     ponto 8: 55.7, 43.4
ponto 4: 154.2, 214.0     ponto 9: 120.0, 20.0  (topo)
ponto 5: 85.8, 214.0
```
- Triângulo (polygon): `206.6,170.0  33.4,170.0  120.0,20.0`  (liga 3-6-9)
- Hexade (polyline): `184.3,43.4  154.2,214.0  218.5,102.6  55.7,43.4  85.8,214.0  21.5,102.6  184.3,43.4`  (liga 1-4-2-8-5-7-1)
- 9 nós: um círculo pequeno (r≈3.4) em cada ponto acima.

**Regras de estilo (coerência com a marca):**
- **Monocromático** — traço em **dourado `#B89B72`** ou **petróleo `#2E3D45`** sobre
  fundo areia. **NÃO** usar as 9 cores dos tipos (bolinhas coloridas das referências);
  elas quebram a paleta sóbria. (Decisão 29/06.)
- **Linha fina**, mesma espessura do tratamento de geometria sagrada do resto do system.
- Numeração 1–9 opcional e discreta; quando presente, na tipografia do system.
- Entregar como **SVG vetorial** reaproveitável (escala/recolore por token), não PNG.

**Usos previstos (por ora):** ícone/ilustração da seção "9 estilos / método" na landing
e nos materiais do workshop. Marca d'água de hero **só se** a Débora aprovar a promoção
a elemento de marca forte.

---

## Camada Premium / Atmosfera (ADICIONADO 30/06 — correção do "flat genérico")

Esta camada é o que separa "correto" de **premium**. O design NÃO é flat: tem
profundidade, luz e gradiente sutil, mantendo a sobriedade terrosa. Direção: **"blueprint
claro"** — base muito clara, técnica e respirável, com atmosfera discreta.

**Fundo:**
- Base **ainda mais clara** que o areia chapado: quase-branco quente `#FAF8F3` a
  `#F6F2EA`, com **gradiente muito sutil** (radial/linear) que dá volume sem chamar atenção.
- **Grid técnico discreto** ao fundo (linhas finíssimas, opacidade ~4-6%, na cor petróleo
  ou musgo), tipo papel de arquitetura / blueprint. Reforça "sistema, estrutura, mapa".
- **Glow radial suave** atrás de elementos-âncora (hero, eneagrama): um halo musgo ou
  dourado bem diluído, dando foco e luz.

**Profundidade (sem virar pesado) — REVISADO 30/06:**
- **REMOVER os orbes/manchas verdes (musgo) dos blocos.** Ficaram "manchados", chamam
  atenção errada e quebram o minimalismo. A profundidade vem da **luz (gradiente
  claríssimo) + grid + tipografia**, não de manchas coloridas.
- Se usar atmosfera, que seja **quase imperceptível**: um halo neutro (branco quente)
  muito diluído atrás de âncoras, nunca uma mancha de cor saturada.
- **Glassmorphism discreto** em cards-âncora: fundo semitransparente + blur leve + borda
  de 1px com luz. Usar com parcimônia (cards de oferta, depoimento), não em tudo.
- Sombras **suaves e em camadas** (não a sombra dura padrão): elevação sutil.

**Refino minimalista (o que separa "limpo" de "sofisticado") — ADICIONADO 30/06:**
- **Menos elementos, cada um perfeito, com mais respiro.** Minimalismo premium é espaço
  em branco generoso + detalhe impecável, não preencher.
- **Hairlines douradas** como detalhe (linha-fio finíssima separando blocos, sob títulos,
  ou emoldurando âncoras), com terminais cuidados.
- **Numeração de seção elegante** (ex.: "01 —" em serifada pequena dourada), em vez de
  rótulos chapados.
- **Hierarquia tipográfica mais ousada:** títulos maiores e mais dramáticos, contraste
  forte entre o display serifado e o corpo. Não ter medo de um H1 grande com muito ar.
- **Espaçamento mais dramático** entre seções (respiro vertical generoso).
- Detalhe de **kerning/tracking** nos eyebrows e cuidado com viúvas/órfãs no texto.

**Botões / CTA (efeito espelho "liquid glass" iOS — REVISADO 30/06):**
- **NÃO usar azul-petróleo** no botão (puxa para corporativo genérico). Base do CTA:
  **chumbo/grafite petróleo dessaturado** (ex.: `#2A3238`–`#363F45`) OU **musgo profundo**,
  com **vidro translúcido** por cima. O grafite é o preferido (neutro, sofisticado, o
  dourado brilha mais sobre ele).
- Estilo **"liquid glass" (iOS recente)**: vidro semitransparente com leve refração
  (`backdrop-filter: blur` + saturação), **highlight especular fino** no topo (linha de
  luz curva, não um brilho chapado), **sombra interna** sutil nas bordas inferiores,
  **borda luminosa** de 1px (dourado bem fino ou branco translúcido). Hover: o specular
  desliza/intensifica de leve. Cantos bem arredondados (pill ou ~14–18px).
- Régua: deve parecer **vidro real sob luz**, não "botão com gradiente". Sutil, caro.

**Ritmo (blocos menos monótonos):**
- **Alternar o tratamento de fundo** entre seções: clara lisa → clara com grid → clara com
  orbe desfocado → faixa musgo suave. Variar para o olho não cansar, mantendo tudo claro.
- Seções podem ter **larguras e alinhamentos diferentes** (full-bleed vs. centrado vs.
  assimétrico), não todas no mesmo container monótono.

**O que continua proibido (anti-AI-slop):** gradiente neon/arco-íris, glassmorphism em
tudo, glow forte, blur exagerado que vira "borrado", sombra dura de template. A régua é
**sutileza**: se parecer efeito, está forte demais. Deve parecer luz natural e papel fino.

**Referência conceitual (não copiar):** continuumsystems.com.br/p2 (blur, gradientes de
fundo, fonte) — mas aquela é DARK; aqui é a versão CLARA/terrosa do mesmo conceito.

---

## Tom visual

Sóbrio, **premium**, terroso, sereno, adulto. Profundo mas leve — espelha a voz da
Débora (discernimento, congruência, sem hype). **Anti-infantil** e **anti-AI-slop**:
nada de gradientes neon, emojis na arte, stock genérico, ícones 3D brilhantes,
glow exagerado ou simetria perfeita "de template".

---

## Do / Don't visual

| Fazer | Evitar |
|---|---|
| Areia como fundo, muito espaço em branco | Fundos escuros pesados ou chapados de dourado |
| Dourado fino como acento (linhas, fingerprint, CTA) | Dourado como grande área ou "luxo brega" |
| Geometria sagrada em traço fino | Ilustração 3D, render brilhante, gradiente vibrante |
| Caixa-alta com tracking largo nos títulos | Fontes arredondadas/fofas, script, efeitos |
| Folha/onda/mandala com parcimônia | Saturar a peça de elementos orgânicos |
| Composição calma, assimétrica, editorial | Layout "template de curso", banners de hype |
| Petróleo escuro como texto (contraste quente) | Preto puro duro / cinza sem vida |

---

## Para o design system (próximo passo)

A partir deste brief, o design system final deve produzir: tokens de cor (com
variações e checagem de contraste WCAG), escala tipográfica e pesos, sistema de
espaçamento, componentes (botões/CTA, cards, seções), tratamento dos elementos
gráficos (SVG da fingerprint e dos sólidos) e regras de uso. **Este arquivo é a
entrada; o design system é a saída.**
