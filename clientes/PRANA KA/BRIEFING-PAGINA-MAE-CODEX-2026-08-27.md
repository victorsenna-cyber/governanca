# PONTEIRO — BRIEFING DA PÁGINA-MÃE (27/08/2026)

> ## 🔴 ESTE ARQUIVO NÃO É MAIS A FONTE ATIVA. SUBSTITUÍDO EM 19/09/2026.
>
> **Fonte ativa: [`BRIEFING-SITE-PRANA-ASTRA-2026-09-19.md`](BRIEFING-SITE-PRANA-ASTRA-2026-09-19.md)** · contrato de execução: `CONTRATO-SITE-PRANA-ASTRA-2026-09-19.md`
>
> **Por que foi substituído, e não apenas atualizado:** o escopo deixou de ser *"a página-mãe"* e passou a ser **o site inteiro em três idiomas**, por ordem de Victor em 19/09. Cinco coisas mudaram desde que este documento foi escrito, e cada uma altera o que se constrói:
>
> | # | O que mudou | Onde vive agora |
> |---|---|---|
> | 1 | **Multilíngue PT/EN/ES entrou no escopo** — muda a arquitetura de arquivos inteira | briefing novo §3.2 |
> | 2 | **Bodoni Moda morreu · nenhum display abaixo de peso 600** (`DEC-2026-09-19-004`) | §4.2 |
> | 3 | **Elemento por dobra virou gate** — dobra só com texto reprova (`DEC-2026-09-19-005`) | §5 e §11.3 |
> | 4 | **As três ofertas foram corrigidas e verificadas** em 19/09 — são fonte de copy travada | §7 |
> | 5 | **A promessa de topo passa a terminar em EXPRESSÃO** (`DEC-2026-09-19-006`) | §12.3 |
>
> **O que deste documento sobreviveu inteiro e foi carregado para o novo:** as restrições R1–R6, a especificação técnica do hero 2.5D, as regras de movimento, o credo literal dela, e a §10 *"o que não pode ser escrito"* — que virou a §12 do briefing novo, ampliada.
>
> **O que morreu:** a árvore de 8 pastas da §3 (substituída pela árvore trilíngue) e o mapa de páginas da §6 (reescrito com as três ofertas dentro do site).
>
> ⚠️ **Conteúdo íntegro preservado abaixo**, porque este repositório não tem histórico de git ativo e o raciocínio original — em especial a escolha da referência de UI e a rejeição do `akella/fake3d` por falta de licença — continua valendo como proveniência. **Ler para entender por quê; nunca para executar.**

---

<details>
<summary><strong>Conteúdo original de 27/08/2026 — legado, não executar</strong></summary>

> 🔴 **PARADO EM 12/09/2026 — NÃO CONSTRUIR AINDA.** O plano da Nala/Kátia chegou em 09/09 e a titular declarou uma ordem de prioridade diferente da arquitetura de 8 pastas deste briefing: **1. Templo Dourado · 2. Despertar do Prazer Sagrado · 3. Da Tensão ao Tesão** — e a Visão Uterina, única frente com preço e ato de conversão definidos, não aparece na lista dela. Além disso, o plano pede *"um único site"*, o que **não invalida a página dedicada, mas muda a estrutura de pastas** (ver `INTEGRACAO-PLANO-NALA-2026-09-12.md` §§2.2 e 2.3). **Revisar §3 e §6 deste briefing antes de qualquer linha de código.** O resto do documento — tokens, hero 2.5D, movimento, gates e §10 — permanece válido.

> **Destinatário:** Codex · **Data:** 27/08/2026 · **Cliente:** Prana Ka
> **Natureza:** briefing de execução. Quem executa **não decide fato comercial, não inventa copy e não muda a ordem das dobras**.
> **Nota de escopo:** este site é **ampliação** sobre `DEC-2026-07-07-001` (pacote fechado em 4 páginas). A precificação está aberta em `P-PM-09`. Isto não bloqueia a construção — bloqueia a entrega.

---

## 0. COMO USAR ESTE DOCUMENTO

| Se você vai… | Leia |
|---|---|
| montar o esqueleto de arquivos | §3 |
| escrever CSS | §4 |
| construir o hero | §5 |
| montar uma página específica | §6 |
| resolver header/footer sem build | §7 |
| saber se terminou | §9 |
| **saber o que NÃO pode escrever** | **§10 — leia antes de tudo** |

---

## 1. A REFERÊNCIA ESCOLHIDA

### 1.1 A escolha

> **`lecolevancleefarpels.com` — L'École des Arts Joailliers, a escola da maison Van Cleef & Arpels.**

**Por que essa, e não uma de moda ou relojoaria:** porque é a única categoria que resolve **os três problemas da Prana ao mesmo tempo**.

| Problema da Prana | Como L'École resolve |
|---|---|
| **"Escola é instituição, não oferta"** | é literalmente uma escola dentro de uma maison. Não vende com carta — **acolhe com programa** |
| **Ouro e ornamento sem virar kitsch** | joalheria é o mercado que passou 200 anos aprendendo a mostrar ouro com sobriedade. Ornamento botânico, fundo neutro, muito ar |
| **Seis frentes sob uma casa** | cursos, conferências, exposições, publicações, ateliês — **cada frente com página própria, uma marca só** |

E há um espelho que decide: **L'École é a escola de uma casa de joias. O Templo Dourado é a escola de uma sacerdotisa.** Mesma estrutura — instituição que ensina, ancorada numa herança, com ornamento como assinatura e não como decoração.

**Honestidade sobre a verificação:** tentei renderizar o site hoje e **não consegui** — é JavaScript pesado e não sai por fetch de HTML. A escolha está fundamentada na **estrutura da instituição**, que é pública e verificável em 30 segundos abrindo o site. **Abra antes de aprovar.**

### 1.2 A referência secundária, só para movimento

Os Sites of the Day do Awwwards de agosto/2026 — em especial **MIU MIU "A House that we shaped"** e **The Watch** — servem **exclusivamente** como calibragem de coreografia de scroll e peso de transição. **Não servem como referência de estrutura**, que já está resolvida em §1.1.

### 1.3 O que explicitamente NÃO copiar

- **De Sahara Rose:** a tipografia, a grade e o acabamento. Só a arquitetura de menu foi aproveitada.
- **De qualquer escola de sexualidade sagrada:** a home como carta de vendas. Ver `REFERENCIAS-PAGINA-MAE-2026-08-20.md` §4.2.

---

## 2. RESTRIÇÕES INEGOCIÁVEIS

| # | Restrição | Consequência |
|---|---|---|
| **R1** | **Sem etapa de build.** Nada de npm, bundler, transpilador ou framework | tudo que o navegador não executa direto está proibido |
| **R2** | **Upload por gerenciador de arquivos**, na raiz do domínio | caminhos **root-relative** (`/css/...`), nunca relativos com `../` |
| **R3** | **Multi-página real.** Não é um `index.html` com âncoras | cada frente tem pasta própria com `index.html` |
| **R4** | **Sem servidor.** Sem PHP, sem Node, sem rota dinâmica | URLs limpas via padrão `pasta/index.html` |
| **R5** | **Dependência externa só por CDN**, com `defer` e SRI quando disponível | Lenis e GSAP por CDN; fontes **self-hosted** |
| **R6** | **Preservar o sistema atual.** `the-golden-temple-v2` já tem tokens, fontes e geometrias | **estender, não recomeçar** |

---

## 3. ARQUITETURA DE ARQUIVOS

```
/
├── index.html                    ← o Portal (home)
├── o-templo/index.html           ← a escola: o que é, método, linhagens
├── metodo/index.html             ← o S.E.R em profundidade
├── caminhos/index.html           ← as jornadas: Mentoria, Curso, Círculos
├── arte/index.html               ← música, Spotify, YouTube, singles
├── circulos/index.html           ← Vozes da Deusa (presencial)
├── prana/index.html              ← quem conduz
├── contato/index.html            ← ⚠️ só criar quando houver canal (§10)
│
├── css/
│   ├── tokens.css                ← variáveis, extraídas do v2 atual
│   ├── base.css                  ← reset, tipografia, grade
│   ├── components.css            ← header, footer, card, botão, selo
│   ├── motion.css                ← estados de revelação e transição
│   └── pages/
│       ├── home.css
│       ├── templo.css
│       ├── arte.css
│       └── caminhos.css
│
├── js/
│   ├── config.js                 ← ÚNICO lugar com URLs externas
│   ├── scroll.js                 ← Lenis + integração GSAP
│   ├── reveal.js                 ← ScrollTrigger por dobra
│   ├── hero-25d.js               ← shader depth-map (§5)
│   ├── nav.js                    ← header, menu mobile, estado ativo
│   └── main.js                   ← orquestrador, roda em todas as páginas
│
└── assets/
    ├── fonts/                    ← já existem: fraunces, manrope, bodoni-moda
    ├── geometry/                 ← já existem: flower-of-life, vesica, hero-orb
    │   └── + ankh-selo.svg, naja.svg, sri-yantra.svg, rosa.svg   ← DERIVAR das logos
    ├── logos/                    ← PNG transparente + selo simplificado
    ├── images/
    │   └── hero/                 ← retrato + mapa de profundidade (§5)
    └── icons/
```

**Regra de caminho (R2):** todo `href` e `src` começa com `/`. Isso quebra em `file://` — **testar sempre por HTTP local**, nunca abrindo o arquivo direto.

---

## 4. SISTEMA VISUAL

### 4.1 Tokens — herdar do bundle atual, com adição

O `the-golden-temple-v2/css/styles.css` já define o sistema, e ele **confere com as cores amostradas das logos reais** (`ATIVOS-E-LINKS.md` §4). Manter:

```css
--ink:#211a18;  --ink-soft:#5c4f49;
--ivory:#f4eddf; --ivory-soft:#fbf7ee; --ivory-deep:#e9dcc8;
--ruby:#6d2338;  --ruby-dark:#3c111f;
--obsidian:#120d0d; --obsidian-soft:#1b1214;
--gold:#bd8a3b;  --gold-deep:#84541d; --gold-light:#e6c67d; --gold-pale:#f6e6b8;
--serif:"Fraunces",...;  --sans:"Manrope",...;
```

**Adicionar apenas:**

```css
--rosa-vinho:#6b2130;   /* as rosas da logo da mentoria */
--gold-fosco:#ae7d31;   /* o traço linear da logo — ouro de FILETE e TEXTO */
--rule:.6px;            /* espessura canônica de filete */
```

> **A distinção que define o acabamento:** `--gold` é para **superfície**; `--gold-fosco` é para **linha e texto**. Ouro brilhante em texto pequeno é o que faz um site parecer barato. **Texto em ouro usa sempre `--gold-fosco`.**

### 4.2 Tipografia

| Papel | Fonte | Regra |
|---|---|---|
| **Display** | Fraunces | só em `h1` e `h2`. Peso 300–400, **nunca bold** |
| **Corpo** | Manrope | 300 para texto longo, 500 para ênfase |
| **Versalete** | Manrope, `letter-spacing: .18em`, uppercase, 11px | eyebrow, rótulo, menu |

**Escala:** 12 · 14 · 16 · 20 · 28 · 40 · 64 · 96. Nada fora disso.
**Medida de linha:** máximo **62ch** em texto corrido. Ela escreve em blocos longos — sem essa trava, vira parede.

### 4.3 Grade e ritmo

- Container: `min(100% - 3rem, 1220px)`
- **Uma coluna como padrão.** Duas só em cards de caminho
- Espaço entre dobras: **160px desktop / 96px mobile**. Generoso é o ponto — é o que traduz "clean" sem tirar ornamento
- **Regra do ar:** nenhuma dobra encosta na anterior. Se o layout parecer vazio, está certo

### 4.4 Ornamento — a regra que resolve a tensão dela

Ela pediu **"clean, removendo os excessos"** e ao mesmo tempo símbolos e geometrias. A resolução é de dosagem, não de escolha:

| Regra | Especificação |
|---|---|
| **Uma geometria por dobra. Nunca duas** | SVG de traço, `--gold-fosco`, opacidade 0.5–0.8 |
| **Ornamento é pontuação, não fundo** | proibido usar símbolo como textura ou marca d'água atrás de texto |
| **A logo cheia aparece 2 vezes no site inteiro** | hero da home e rodapé. Em todo o resto, o **selo simplificado** |
| **Ouro ocupa no máximo 15% do campo visível** | o resto é marfim e tinta |

### 4.5 Os símbolos e o que cada um significa

Derivar SVG de traço a partir das logos em `design/logos/`. **Significado literal dela, para legenda quando houver:**

| Símbolo | Significado, na voz dela |
|---|---|
| **Najas** | *"símbolo da magia sexual de Ísis, da transmutação profunda, da fertilidade, da regeneração. São protetoras porque combatem as magias sexuais caídas e as distorções da sexualidade"* |
| **Ankh alada** | vida e ascensão — o selo da escola |
| **Rosas em vinho** | **"o chamado da rosa dourada"** — o ICP |
| **Sri Yantra** | geometria de criação |
| **Fênix-serpente** | o método S.E.R |

---

## 5. O HERO 2.5D — especificação técnica

### 5.1 Técnica: depth-map parallax

Uma imagem + um mapa de profundidade em escala de cinza. Shader desloca os pixels conforme o ponteiro ou o giroscópio. **Escolhida por ser a única das três famílias que não compromete o mobile** (`REFERENCIAS-UI-E-REPOS-2026-08-27.md` §2).

### 5.2 Implementação

- WebGL puro em `<canvas>`, sem Three.js — a cena é **um quad com dois samplers**
- Base de referência: `LuXDAmore/vue-fake3d-image-effect` (**MIT**). **Não copiar `akella/fake3d` — não tem licença declarada**
- Deslocamento máximo: **0.012 do lado** — o efeito tem que ser percebido, não notado
- Amortecimento: interpolação com fator 0.06 por frame

### 5.3 Regras de segurança

| Condição | Comportamento |
|---|---|
| WebGL indisponível | `<img>` estática, sem canvas |
| `prefers-reduced-motion: reduce` | **estática, obrigatoriamente** |
| Largura < 768px | efeito por giroscópio **só com permissão**; sem permissão, estática |
| Imagem não decodificada | não inicializar o canvas — evita salto de layout |

### 5.4 ⚠️ Bloqueio de insumo

**O hero 2.5D depende de uma foto que ainda não existe:** retrato em alta resolução, de frente, com fundo separável, para gerar o mapa de profundidade. A foto atual nas páginas é a do Despertar do Prazer Sagrado, **que ela já reprovou**.

**Enquanto não chegar:** construir o hero com o **selo da ankh alada** como sujeito do efeito 2.5D — profundidade entre asas, ankh e najas. Funciona, é coerente, e não bloqueia a entrega.

---

## 6. MAPA DE PÁGINAS

### 6.1 `/` — O Portal

Função: **fazer a visitante se reconhecer e escolher uma direção.** Não vende nada.

| # | Dobra | Conteúdo | Ornamento | Movimento |
|---|---|---|---|---|
| **1** | **Hero** | selo 2.5D + nome + a linha de posicionamento | o selo é o ornamento | 2.5D (§5) |
| **2** | **O credo** | o bloco literal dela — §6.1-bis | filete duplo | revelação linha a linha, 90ms |
| **3** | **Os dois portais** | as duas portas de entrada, lado a lado | vesica piscis | entrada alternada |
| **4** | **O que é a escola** | 3 parágrafos + link para `/o-templo/` | flor da vida | fade + 24px |
| **5** | **O método S.E.R** | 4 passos, uma linha cada + link `/metodo/` | fênix-serpente | desenho de traço |
| **6** | **Os caminhos** | cards: Mentoria · Curso · Círculos | ankh por card | stagger 120ms |
| **7** | **A arte** | faixa com Spotify e YouTube + link `/arte/` | rosa | slide lateral suave |
| **8** | **Quem conduz** | retrato, 2 parágrafos, link `/prana/` | — | fade |
| **9** | **Prova** | o depoimento em vídeo (§6.5) | — | fade |
| **10** | **O chamado** | fechamento + destino único | logo cheia | revelação lenta |

#### 6.1-bis — o único texto que já está aprovado

Literal dela, em 11/08/2026. **Usar como está, sem reescrever:**

> Aqui o corpo é templo. O ventre é altar. A voz é portal. A arte é oração. O prazer é meditação. A sombra é mestra. O amor é lei.
> Cada mulher caminha no seu ritmo, mas nenhuma caminha sozinha.

**Tratamento:** cada sentença em uma linha, revelação sequencial, Fraunces 28–40px, centralizado, muito ar. **Manter "a sombra é mestra"** — decisão registrada (`C-62`).

### 6.2 `/o-templo/` — a escola

O que é, para quem abre, as quatro dimensões, as três linhagens, e **por que não é curso**. Fonte de conteúdo: `COPY-GOLDEN-TEMPLE-V3.md`, já escrito e verificado contra o docx da marca — **17 de 18 frases confirmadas literalmente**. **Usar essa copy; não escrever nova.**

### 6.3 `/caminhos/` — as jornadas

Três cards, e a regra que evita link morto:

| Card | Destino | Estado |
|---|---|---|
| **Mentoria — Iniciação Sacrossexual** | `config.js` → `links.mentoria` | ✅ no ar |
| **Curso — Despertar do Prazer Sagrado** | `links.curso` | 🟡 **só linkar quando responder 200** |
| **Círculos — Vozes da Deusa** | `/circulos/` | 🟡 presencial, retorno em setembro |

**DJ sets e espetáculos NÃO entram.** Foram citados por ela, mas não têm data nem destino. **Frente sem destino vira link morto — e link morto numa página institucional custa mais que a frente ausente.**

### 6.4 `/arte/` — música e canais

Faixa com **Spotify em destaque** (é o pedido literal dela), grade de vídeos do YouTube, espaço para singles com data. Links em `config.js`.

### 6.5 O depoimento

`youtube.com/watch?v=3NbO7HBGbkU` — **facade estática com play**, não `<iframe>` direto. iframe do YouTube custa ~700KB antes de qualquer clique. Carregar o player só no clique.

---

## 7. HEADER E FOOTER SEM BUILD

**Decisão: duplicar o HTML em cada página.** Não injetar por `fetch()`.

**Por quê:** injeção por JS causa piscada no carregamento, quebra sem JS, e prejudica indexação. Com 8 páginas, duplicar é mais barato que qualquer alternativa.

**Como manter:** `/_source/partials/header.html` e `footer.html` como fonte de referência — **pasta prefixada com `_` não sobe para o servidor**. Ao alterar, propagar para as 8 páginas na mesma tarefa.

**Header:** selo à esquerda · menu O Templo · Método · Caminhos · Arte · à direita, um único botão de ação. **Estado ativo marcado com filete `--gold-fosco` embaixo do item.**

---

## 8. MOVIMENTO

```html
<!-- fim do body, nesta ordem -->
<script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js" defer></script>
<script src="/js/main.js" type="module"></script>
```

| Padrão | Especificação |
|---|---|
| **Revelação padrão** | `opacity 0→1`, `translateY 24px→0`, 700ms, `power2.out`, gatilho a 80% da viewport |
| **Stagger em grupo** | 90ms entre itens |
| **Desenho de geometria** | `stroke-dashoffset` de 100% a 0, 1200ms |
| **Transição entre páginas** | fade de 240ms na saída. **Sem transição elaborada** — não há SPA, e simular uma sem framework produz mais bug que efeito |
| **`prefers-reduced-motion`** | **desliga Lenis, desliga 2.5D, mantém tudo visível.** Não é opcional |

**Regra de ouro do movimento:** nada aparece por movimento sozinho. **Todo elemento revelado tem que existir no HTML e ficar visível se o JS falhar.** Estado inicial oculto vive em `motion.css` dentro de `@media (prefers-reduced-motion: no-preference)`.

---

## 9. GATES DE ACEITE

**Nenhum item é opcional.**

| # | Gate |
|---|---|
| **G1** | **Sem JavaScript, todo o conteúdo continua legível e navegável** |
| **G2** | Lighthouse ≥ **95** nas quatro métricas, mobile, em cada página |
| **G3** | **LCP < 2,5s** em 4G simulado |
| **G4** | JS total < **120KB** comprimido |
| **G5** | Zero erro de console em todas as 8 páginas |
| **G6** | Zero hexadecimal fora de `tokens.css` |
| **G7** | Um `<h1>` por página, hierarquia sem salto |
| **G8** | Contraste **AA** — checar especialmente ouro sobre marfim |
| **G9** | Validação em **390 / 768 / 1440 px**, zero overflow horizontal |
| **G10** | `prefers-reduced-motion` testado e funcionando |
| **G11** | **Zero link morto.** Destino sem URL confirmada não vira `<a>` |
| **G12** | Navegação completa por teclado, foco visível em ouro |
| **G13** | Sobe por gerenciador de arquivos e funciona **sem nenhum passo de build** |

---

## 10. ⚠️ O QUE NÃO PODE SER ESCRITO

**Esta seção prevalece sobre qualquer outra.** O repositório tem histórico de fatos comerciais inventados por preenchimento automático — e a régua da casa é: **placeholder não cria fato.**

| Proibido | Motivo |
|---|---|
| **Preço de qualquer coisa na página-mãe** | ela não vende — os preços vivem nas páginas de oferta |
| **Data de turma, prazo, vaga ou escassez** | nada disso está confirmado |
| **A palavra "psicóloga"** | autorizada por ela, **mas sob gate regulatório** — CRP não verificado (`DEC-2026-08-03-003`) |
| **"Tantra"** | red line explícita dela. Termo oficial: **espiritualidade encarnada** |
| **"Gostosa"** | vocabulário de conteúdo, **nunca de página** |
| **Depoimento não autorizado** | só o vídeo de §6.5 está liberado |
| **Qualquer número** — alunas, anos, resultados | nenhum foi confirmado |
| **Frase nova na voz dela** | usar `COPY-GOLDEN-TEMPLE-V3.md` e as citações literais. **Se faltar texto, deixar marcador visível `[COPY PENDENTE]`** — nunca preencher |

**Regra de fechamento:** na dúvida sobre um fato, **o elemento não entra na página**. Ausência é corrigível; invenção publicada não.

---

## 11. ORDEM DE EXECUÇÃO

1. `tokens.css`, `base.css`, fontes — herdadas do v2
2. Header e footer, e as 8 pastas com `index.html` mínimo válido
3. `scroll.js` e `reveal.js` — movimento base funcionando em página vazia
4. Home, dobra a dobra, na ordem de §6.1
5. `hero-25d.js` com o **selo** como sujeito (§5.4)
6. Páginas internas, começando por `/o-templo/` com a copy V3
7. `config.js` com os links reais de `ATIVOS-E-LINKS.md`
8. Gates §9, um a um, antes de qualquer upload

---

**Fontes:** `REFERENCIAS-PAGINA-MAE-2026-08-20.md` · `REFERENCIAS-UI-E-REPOS-2026-08-27.md` · `ATIVOS-E-LINKS.md` · `DESTILACAO-CALL-2026-08-11.md` · `COPY-GOLDEN-TEMPLE-V3.md` · `04 - web design/the-golden-temple-v2/`

</details>
