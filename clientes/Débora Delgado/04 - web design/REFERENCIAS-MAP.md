# REFERENCIAS-MAP.md — De cada referência ao uso na landing

> ⚠️ ATUALIZAÇÃO (30/06): arquitetura mudou para **Next.js/Vercel**. As instruções abaixo
> de "traduzir React→vanilla / não usar WebGL" estão SUPERADAS: agora as referências
> ÚTEIS podem ser usadas **como componentes React de verdade** (com contenção e recoloridas
> na paleta). ÚTEIS: Cinematic Hero, Shader Background, Dynamic Waveform, Noise. IGNORAR
> (não têm relação com landing): AI Chat model (x2), Bolt Style Chat, Agents Plan. Mantenha
> o mapeamento de "onde usar cada uma"; descarte só a parte de "adaptar para vanilla".

> As referências em `referências/` são **componentes React/Next premium** (GSAP,
> framer-motion, WebGL, lucide). **NÃO são o stack final.** O entregável é **HTML/CSS/JS
> vanilla autocontido para Wix**. Esta tabela diz, para cada arquivo: o que é, onde
> aplicar na página, e **como adaptar para vanilla**. (Os arquivos com sufixo "2" são
> duplicatas do mesmo componente — tratar como um só.)

---

## Tabela mestre

| Arquivo (`referências/`) | O que é (técnica original) | Onde aplicar na landing | Como adaptar → HTML/CSS/JS vanilla Wix |
|---|---|---|---|
| **Cinematic landing Hero.md** | Hero cinematográfico React + **GSAP/ScrollTrigger**: reveal em timeline (blur→nítido, y→0), parallax 3D do mouse, card material com sombras físicas, botões táteis, film-grain, grid mascarado, anel de progresso. | **Hero (seção 1)** e o reveal sequencial da **dor (2)** e do **método (3)**. Card material → **card de oferta (5)**. Botões táteis → **CTA** global. | GSAP timeline → **IntersectionObserver** que adiciona classe `.is-visible`; a animação roda por **CSS transitions** (`opacity`, `transform: translateY/scale`, `filter: blur`). Parallax do mouse → `mousemove` + `requestAnimationFrame` setando `--mouse-x/--mouse-y` (CSS vars) com `transform` leve; **desligar < 768px e em `prefers-reduced-motion`**. Reaproveitar literalmente o CSS de `premium-depth-card` e `btn-modern-light/dark` (são CSS puro), **reescalando as cores para a paleta da Débora** (musgo/petróleo/areia, acento dourado — não os azuis/cinza do exemplo). Film-grain → ver Noise effect. Sem mockup de iPhone: o objeto do hero é a **fingerprint/geometria** da Débora (SVG). |
| **Shader Background.md** | Fundo **WebGL** (vertex+fragment shader): grid + linhas de plasma animadas, warp, cores roxo/azul. | **Fundo do hero** e transições de seção (atmosfera viva). | **Não usar WebGL/shader.** Traduzir para **gradiente animado em `<canvas>` 2D vanilla** OU **gradiente CSS** (`background` radial/linear) animado lentamente (`@keyframes` movendo posição/opacidade) nas cores da Débora: musgo↔petróleo com brilho dourado pontual sobre base areia. Manter **lento e sutil** (não o plasma vibrante). Pausar quando fora da viewport e em `prefers-reduced-motion`. **Trocar todas as cores** do exemplo (que são neon) pela paleta terrosa. |
| **Background Snippets Noise effect11.md** | Overlay de **ruído/grain** em `<canvas>` 2D vanilla (já é quase vanilla): `createImageData` + ruído aleatório, `patternAlpha`, refresh por frames. | **Textura sutil** sobre o fundo do hero e seções (sensação de papel/film). | **Quase pronto** — portar o `useEffect` para JS puro: um `<canvas>` fixo `pointer-events:none`, função `drawGrain()` idêntica, `requestAnimationFrame` com `patternRefreshInterval` alto (refresh baixo = leve) e `patternAlpha ~10–15`. **Remover o radial laranja** do exemplo; o grain entra **por cima da paleta da Débora**. Alternativa ainda mais leve: overlay **SVG `feTurbulence` estático** (sem JS). Desligar animação em `prefers-reduced-motion`. |
| **Agents Plan.md** | Lista de **tarefas/etapas** React + framer-motion: status (círculos), expansão, progressão, dependências, ícones lucide. | **Método dos 3 dias (seção 3)** — Dia 1→2→3 como progressão. **Lotes (seção 5)** — Lote 1→2→3 com estado "vigente/esgotado". | Estado React + framer-motion → **estrutura estática em HTML/CSS**: 3 blocos com **numeração editorial** (01/02/03) ligados por **linha conectora fina dourada** (borda/pseudo-elemento). Reveal por scroll (IntersectionObserver, stagger via `transition-delay`). **Sem ícones lucide** — usar geometria fina da marca. Para lotes: estado via classe (`.lote--ativo`, `.lote--esgotado`) atualizável manualmente no embed; sem framework. |
| **Bolt Style Chat.md** | Caixa de chat estilo Bolt: **seletor de modelo (dropdown)** premium, chips, ícones, animação de abertura. | **Seletor de turma na inscrição (seção 7)** — o padrão de dropdown/seleção sofisticado. | Aproveitar **só o padrão visual do seletor** (dropdown elegante, item ativo, transição). Implementar com **`<select>` estilizado** ou **grupo de `radio` + `<label>`** acessível (teclado, foco visível), passando a turma escolhida ao **link de checkout** (query param). Ignorar toda a lógica de chat/modelos de IA. Cores → paleta Débora. |
| **AI Chat model ref.md** + **AI Chat model ref 2.md** | Input de chat com **textarea auto-resize**, anexos, dropdown de modelo (variação do Bolt). | **Apoio ao seletor (seção 7)** e a qualquer campo de formulário de inscrição (nome/e-mail, se houver). | Reaproveitar a técnica de **textarea/input com foco e estados premium** e o auto-resize (função `adjustHeight` portada para JS puro) **se** o formulário tiver campo de texto. Caso a inscrição seja só "escolher turma → checkout", usar apenas o estilo de input/foco. Sem dependências React. |

---

## Princípios ao traduzir (valem para todas)

1. **Técnica, não cópia.** Pega-se a *sensação* (reveal cinematográfico, profundidade,
   fundo vivo, seletor elegante) e reimplementa em vanilla. Nunca importar React/GSAP/
   framer-motion/WebGL no entregável.
2. **Cores sempre da Débora.** Todos os exemplos vêm com azul/roxo/neon. **Trocar 100%**
   pela paleta: areia `#F1EDE4` (base), musgo `#7A9E89` (estrutura), petróleo `#2E3D45`
   (texto), dourado `#B89B72` / terracota `#C08552` (acento raro).
3. **Sutileza > espetáculo.** Reduzir intensidade de tudo (grain, gradiente, parallax,
   sombras) para o registro **sóbrio/premium** da marca. O exemplo é o teto técnico, não
   o teto de drama.
4. **Performance e acessibilidade.** Animações por `transform`/`opacity`; pausar canvas
   fora da viewport; **`prefers-reduced-motion`** desliga parallax e grain animado;
   contraste AA; teclado no seletor e no FAQ.
5. **Wix-safe.** Um `.html` autocontido, JS defensivo (checar elementos antes de usar),
   sem CDN de framework. CSS reaproveitado dos exemplos (que já é CSS puro) é bem-vindo,
   recolorido.
