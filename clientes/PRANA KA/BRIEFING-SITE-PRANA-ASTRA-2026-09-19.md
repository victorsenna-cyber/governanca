# BRIEFING DE CONSTRUÇÃO — SITE THE GOLDEN TEMPLE

> **Destinatário:** Codex · GPT-6 Astra · **Data:** 19/09/2026 · **Cliente:** Prana Ka
> **Dono da decisão:** Victor · **Escrito por:** Claude, em papel de CEO
> **Substitui:** `BRIEFING-PAGINA-MAE-CODEX-2026-08-27.md`, que estava PARADO desde 12/09 e vira ponteiro para este.

> 🔴 **LEIA A §0 E A §12 ANTES DE QUALQUER LINHA DE CÓDIGO.** A §0 define onde você pode escrever. A §12 define o que você não pode inventar. As duas prevalecem sobre todo o resto deste documento.

---

## 0. ONDE VOCÊ ESCREVE — e isto não é negociável

**Regra §0 do `AGENTS.md`, instituída em 15/09/2026:** toda criação ou alteração sua acontece **exclusivamente** dentro de uma pasta chamada `execução Codex`.

**Seu destino, literal:**

```
clientes/PRANA KA/execução Codex/site-2026-09/
```

| Pode | Não pode |
|---|---|
| ler qualquer arquivo da Governança | escrever, mover ou renomear qualquer arquivo fora do seu destino |
| criar toda a árvore do site dentro do seu destino | tocar em `04 - web design/` — é fonte, não é área de trabalho |
| registrar seu trabalho em `execução Codex/REGISTRO-<data>.md` | editar `STATUS.md`, `DECISOES.md`, diários ou métodos |
| propor atualização de canônico, escrita dentro do seu destino | promover a proposta você mesmo |

**Nada do que você produzir é canônico até ser promovido por nós**, pelo `40-operacao-rotinas/RITO-INTEGRACAO-CODEX.md`. Ao terminar, escreva o que produziu em `execução Codex/STATUS-CODEX.md` — é o índice pelo qual a gente descobre que existe trabalho pronto.

---

## 1. OBJETO

**O que existe no fim, em uma frase:**

> O site The Golden Temple implementado como bundle estático multi-página, em **português, inglês e espanhol**, com as quatro frentes de oferta e as páginas institucionais, responsivo em 390 / 768 / 1440, pronto para upload por gerenciador de arquivos — **sem publicar nada**.

**O que NÃO é o objeto:**

- não é decidir preço, promessa, mecanismo, ordem de dobra ou headline — tudo isso vem travado
- não é publicar, apontar domínio, ativar checkout, pixel ou formulário
- não é escrever copy nova em português — a copy de PT está pronta e é literal
- não é decidir a estética — ela está travada na §4 e em `DIRECAO-VISUAL-PRANA.md`

---

## 2. O QUE MUDOU DESDE O BRIEFING DE 27/08 — leia, é curto e muda tudo

Cinco coisas, e cada uma tem consequência direta no que você vai construir.

| # | Mudança | Consequência para você |
|---|---|---|
| **1** | **Multilíngue PT/EN/ES entrou no escopo** (19/09) | a arquitetura de arquivos muda — §3 |
| **2** | **Tipografia corrigida** (`DEC-2026-09-19-004`) | Bodoni Moda **morreu**. Nenhum display abaixo de peso **600** — §4.2 |
| **3** | **Elemento por dobra virou gate** (`DEC-2026-09-19-005`) | **dobra só com texto reprova.** Biblioteca de 23 imagens pronta — §5 |
| **4** | **Três páginas de oferta foram corrigidas e verificadas** (19/09) | elas são a **fonte da copy e das decisões**, e você as reconstrói no sistema novo — §7 |
| **5** | **A promessa de topo passa a terminar em EXPRESSÃO** (`DEC-2026-09-19-006`) | vale para headline e copy de topo — §12.3 |

⚠️ **E a arquitetura de 8 pastas do briefing antigo foi revista** contra o plano da Nala/Kátia (12/09), que pede *"um único site"*. **"Site único" nunca significou "página única"** — significa parar de fragmentar em domínios diferentes. A árvore da §3 é a versão vigente.

---

## 3. ARQUITETURA DE ARQUIVOS

### 3.1 As restrições que decidem a forma

| # | Restrição | Consequência |
|---|---|---|
| **R1** | **Sem etapa de build.** Nada de npm, bundler, transpilador ou framework | o que o navegador não executa direto está proibido |
| **R2** | **Upload por gerenciador de arquivos**, na raiz do domínio | caminhos **root-relative** (`/css/...`), nunca `../` |
| **R3** | **Multi-página real.** Não é um `index.html` com âncoras | cada frente tem pasta própria com `index.html` |
| **R4** | **Sem servidor.** Sem PHP, sem Node, sem rota dinâmica | URLs limpas pelo padrão `pasta/index.html` |
| **R5** | **Dependência externa só por CDN**, com `defer` e SRI quando houver | Lenis e GSAP por CDN; **fontes self-hosted** |
| **R6** | **CSS e JS são compartilhados entre os três idiomas** | só o HTML duplica; **nunca duplicar CSS ou JS por idioma** |

### 3.2 🔴 Multilíngue — pasta por idioma, e a razão importa

**Decisão travada: pastas por idioma, HTML duplicado, sem JS de tradução.**

O que foi descartado, e por quê: a abordagem de JSON + JavaScript trocando textos em tempo de execução **quebra sem JS, causa flash de conteúdo não traduzido, e é invisível para busca**. Num site que só existe para ser encontrado, isso não é detalhe de implementação — é o produto falhando.

```
/
├── index.html                    ← PT · idioma principal, raiz
├── o-templo/index.html
├── metodo/index.html
├── caminhos/index.html
├── mentoria/index.html           ← oferta
├── visao-uterina/index.html      ← oferta
├── curso/index.html              ← oferta
├── arte/index.html
├── prana/index.html
│
├── en/                           ← inglês, a MESMA árvore
│   ├── index.html
│   ├── the-temple/index.html
│   ├── method/index.html
│   ├── paths/index.html
│   ├── mentorship/index.html
│   ├── uterine-vision/index.html
│   ├── course/index.html
│   ├── art/index.html
│   └── prana/index.html
│
├── es/                           ← espanhol, a MESMA árvore
│   ├── index.html
│   ├── el-templo/index.html
│   ├── metodo/index.html
│   ├── caminos/index.html
│   ├── mentoria/index.html
│   ├── vision-uterina/index.html
│   ├── curso/index.html
│   ├── arte/index.html
│   └── prana/index.html
│
├── css/                          ← UM só, para os três idiomas
│   ├── tokens.css
│   ├── base.css
│   ├── components.css
│   ├── motion.css
│   └── pages/{home,templo,oferta,arte,caminhos}.css
│
├── js/
│   ├── config.js                 ← ÚNICO lugar com URL externa
│   ├── i18n-switch.js            ← só troca de rota, não traduz nada
│   ├── scroll.js                 ← Lenis + GSAP
│   ├── reveal.js                 ← ScrollTrigger por dobra
│   ├── hero-25d.js               ← só a home carrega
│   ├── nav.js
│   └── main.js
│
├── assets/
│   ├── fonts/                    ← fraunces, manrope (self-hosted)
│   ├── biblioteca/               ← as 23 imagens — §5
│   ├── geometry/
│   ├── logos/
│   └── images/hero/
│
├── sitemap.xml
└── robots.txt
```

### 3.3 As quatro regras de idioma

**1 · `hreflang` em toda página, apontando para as três variantes e para `x-default`.**

```html
<link rel="alternate" hreflang="pt-BR" href="https://thegoldentemple.io/mentoria/">
<link rel="alternate" hreflang="en"    href="https://thegoldentemple.io/en/mentorship/">
<link rel="alternate" hreflang="es"    href="https://thegoldentemple.io/es/mentoria/">
<link rel="alternate" hreflang="x-default" href="https://thegoldentemple.io/mentoria/">
```

**2 · O seletor de idioma é um `<a href>`, nunca um `<select>` com JavaScript.** Ele leva à página equivalente no outro idioma — não à home. `i18n-switch.js` existe só para marcar o idioma ativo e lembrar a escolha em `localStorage`; **se o JS falhar, os três links continuam funcionando**.

**3 · Nenhum redirecionamento automático por idioma do navegador.** Sem servidor não dá para fazer direito, e feito errado prende a visitante no idioma errado sem saída.

**4 · `<html lang="pt-BR">` / `"en"` / `"es"`** — e `og:locale` correspondente.

### 3.4 🔴 O que se traduz, o que se transcria e o que nunca se traduz

| Categoria | Tratamento |
|---|---|
| **Nome dos produtos e da marca** | ⛔ **nunca traduzir.** `The Golden Temple` · `Visão Uterina` · `Portais do Ventre` · `Método S.E.R.` · `Despertar do Prazer Sagrado` · `Prana Ka` permanecem em português em todos os idiomas |
| **Depoimento de cliente** | ⛔ **nunca traduzir a citação.** Fica no original, com tradução entre colchetes abaixo, em corpo menor. **Depoimento traduzido deixa de ser prova e vira texto nosso** |
| **Corpo, FAQ, descrição, microcopy** | ✅ tradução direta, natural, sem literalidade |
| **Headline, promessa, CTA, bloco de oferta** | 🟡 **transcriação, e marcada.** Traduza preservando **o pivô, o elemento e a ordem**; adapte a palavra. **Marque cada um com `<!-- REVISAR: transcriação -->`** |
| **Moeda** | R$ em todos os idiomas, sem conversão. Ela recebe em real |

> 🔴 **Por que headline vai marcada:** copy de conversão traduzida ao pé da letra perde o que fazia converter. A tradução final dessas peças é decisão nossa, não sua — mas a estrutura completa é sua. **Entregue as três línguas funcionando, com os blocos de conversão sinalizados para revisão.** Isso não é entrega incompleta: é a fronteira certa.

---

## 4. SISTEMA VISUAL

Fonte completa e citações da cliente: **`DIRECAO-VISUAL-PRANA.md`**. O essencial está aqui.

### 4.1 Tokens

```css
:root{
  /* cor — amostrada dos arquivos dela, nunca pedida */
  --ruby:       #6d2338;
  --ruby-deep:  #481625;
  --wine:       #45162a;
  --obsidian:   #150f12;
  --ivory:      #f3ebdd;
  --ivory-light:#faf5eb;
  --paper:      #f4eee4;
  --ink:        #211a18;
  --ink-soft:   #554743;

  /* ouro — a superfície puxa para âmbar, a linha não */
  --gold:       #b88a43;
  --gold-light: #d8b66d;
  --gold-amber: #c8912f;   /* "golden orange", pedido dela em 09/09 */
  --gold-line:  #ae7d31;   /* texto e traço fino: âmbar perde contraste */

  --line:       rgba(33,26,24,.18);
  --line-light: rgba(243,235,221,.2);

  --serif: "Fraunces","Iowan Old Style",Georgia,serif;
  --sans:  "Manrope","Segoe UI",sans-serif;
  --display-axes: 'SOFT' 60, 'WONK' 1;

  --page-pad:    clamp(1.25rem,4.5vw,5.5rem);
  --section-pad: clamp(6rem,11vw,10rem);
  --content:     90rem;
}
```

### 4.2 🔴 Tipografia — a correção que motivou este briefing

**Diagnóstico de Victor, 19/09:** *"o UI/UX atual gerado pelo Codex está com letras finas. não gostei. as letras podem ser mais preenchidas."*

**O que estava errado, com número:** Bodoni Moda em **peso 400** — didone, haste de fio de cabelo — num título de 140px. E todo o display da Mentoria em **peso 500**, incluindo o H1 de 8rem. No Curso, `.section-marker` em **300** com 6rem de corpo.

**O que fecha o argumento, e não é opinião:** **em nenhuma peça que ela produziu sozinha existe tipografia de contraste alto.** Nem nos quatro cards de depoimento, nem nos dez cards do Despertar, nem na capa do Golden Temple — todas em sans grossa arredondada ou serifa decorativa de traço cheio.

| Papel | Fonte | Peso | Observação |
|---|---|---|---|
| **H1** | Fraunces | **650** | com `font-variation-settings: var(--display-axes)` |
| **H2** | Fraunces | **640** | |
| **H3** | Fraunces | **620** | |
| **`<em>` dentro de título** | Fraunces | **560** | mantém o contraste sem virar fio |
| **Número, preço, índice de seção** | Fraunces | **700** | |
| **Corpo** | Manrope | **400** | nunca 300 — perde legibilidade no marfim |
| **Ênfase no corpo** | Manrope | 600 | |
| **Versalete** | Manrope | 500, `letter-spacing:.16em` | |
| ~~Bodoni Moda~~ | — | — | ⛔ **removida do projeto.** Não declarar `@font-face`, não fazer preload, não usar |

**Escala:** títulos sobem um degrau em relação aos bundles antigos. **H1 72–88px** no desktop, **H2 48px**. Quem é muito visual lê título como imagem, não como texto.

> **A régua, em uma frase:** *ouro fino em letra fina é joia barata.* O traço precisa ter corpo para o ouro ter peso.

### 4.3 Ornamento — a regra que resolve a tensão dela

Ela disse as duas coisas na mesma conversa: *"estou no exercício de ficar cada vez mais clean"* **e** *"eu sinto falta de geometrias, né? Sabe, **pra mim tem que ser muito visual o negócio**"* `[11/08 00:24:34]`. E nomeou a própria estética: **"estética venusiana"** `[02:22:53]` — curva, pétala, textura tátil, ouro com brilho, densidade ornamental.

> **A fronteira: layout respira, ornamento acontece.** Muito ar **entre** dobras; **dentro** da dobra, densidade.

Na prática: arte de fundo em `mix-blend-mode: multiply` sobre marfim e `screen` sobre escuro, com máscara radial, opacidade **0,12–0,30**. Presença sem poluição. O conteúdo sempre em `z-index` acima.

---

## 5. A BIBLIOTECA DE IMAGENS — 23 peças, já prontas

**Copie de `04 - web design/_biblioteca/` para `assets/biblioteca/` no seu destino.** Já estão em WebP, ≤1600px, **3,4 MB no total**. Não precisa converter nada, não precisa buscar imagem em banco, e **não precisa pedir nada à cliente**.

| Arquivo | O que é | Serve a |
|---|---|---|
| `rosa-vermelha-orvalho` | **rosa rubi macro com orvalho** — a superfície da marca | prova, clímax, depoimento |
| `rosa-dourada` · `rosa-dourada-agua` | rosa em ouro líquido | oferta, promessa |
| `selo-templo` | **logo circular com fundo removido** — najas, ankh alada, Sri Yantra | hero, rodapé, selo de dobra |
| `ornamento-divisor` | assinatura ornamental dela, 180×45 | divisor entre dobras |
| `sri-yantra-cobre` | Sri Yantra em cobre | dobra de método |
| `geometria-flor-da-vida` | flor da vida e três círculos, fundo escuro | mecanismo |
| `ouroboros` | serpente em círculo com estrela | ciclo, continuidade |
| `nautilo-dourado` · `espiral-nautilo-papel` | espiral áurea | ordem dos passos, transição |
| `circulo-fogo-mulheres` | mulheres em roda ao redor do fogo | comunidade, círculos |
| `templo-egipcio` | interior de templo em ouro | fundo de dobra escura |
| `templo-sri-yantra` · `templo-flutuante-rosas` | o templo como lugar | abertura, encerramento |
| `portal-arco-rosa` | **arco rosa-claro com ankh** — estética venusiana pura | convite, passagem |
| `mulher-panteras` | arte egípcia, mulher com panteras | autoridade |
| `pantera-halo` | pantera negra com halo dourado | Leoas, força |
| `estatua-ankh` | estátua com ankh | prova simbólica |
| `disco-solar` · `explosao-luz` | luz dourada | clímax, revelação |
| `textura-ouro-folha` | folha de ouro amassada | textura de fundo |
| `mar-aereo` | mar turquesa, vista aérea | respiro, contraste |
| `prana-golden-temple` | **retrato dela** entre colunas de ankh | dobra "quem conduz" |

**Reserva disponível, não convertida:** os 7 cards nomeados do Despertar em `04 - web design/curso/assets/images/passagens/` e 13 felinos em `O TEMPLO DOURADO/WORKSHOP 8-8 PORTAL DAS LEOAS/`.

> 🔴 **A regra que vale como gate:** **nenhuma dobra sai sem elemento visual próprio. Dobra só com texto é dobra reprovada.** Uma peça por dobra é o **mínimo**, não o teto. O teto é a legibilidade.

---

## 6. MOVIMENTO

Ela pediu, duas vezes: *"**Gostei que ela está em movimento**"* `[00:18:17]` · *"**se pudesse tocar uma música no meu site**. Quando a pessoa entra (…) toda uma experiência"* `[01:27:49]`.

| Camada | Decisão |
|---|---|
| **Rolagem** | Lenis por CDN, `lerp` 0.08. Desativado em `prefers-reduced-motion` |
| **Revelação** | GSAP ScrollTrigger: `opacity 0→1`, `translateY 24px→0`, 700ms, `power2.out`, stagger 90ms |
| **Geometria** | desenho por `stroke-dashoffset` na entrada da dobra. **É o que ela elogiou** — use nas peças SVG |
| **Imagem** | parallax suave e escala lenta (1.0→1.06). A estética venusiana pede respiração, não corte seco |
| **Hero 2.5D** | ⚠️ **só na home** (§8). Nas demais páginas, parallax simples |
| **Som** | 🔴 **não implementar autoplay.** Navegador bloqueia e o visitante é punido. A tradução correta do desejo dela é **um botão de som discreto e persistente, desligado por padrão** — a experiência fica disponível sem ser imposta |

---

## 7. AS PÁGINAS DE OFERTA — copy travada, você reconstrói o código

As três páginas de oferta **já existem, corrigidas e verificadas em 19/09**. Elas são sua **fonte literal de copy e de comportamento**. Você reconstrói o código no sistema unificado — **a copy em português é literal, zero edição**.

| Página sua | Fonte de copy e comportamento | Ato de conversão |
|---|---|---|
| `/mentoria/` | `04 - web design/mentoria/` | **agendamento** → `wa.me/5548984248922` |
| `/visao-uterina/` | `04 - web design/visao-uterina/` | **agendamento** → mesmo WhatsApp |
| `/curso/` | `04 - web design/curso/` | **dois estágios** — §7.3 |

### 7.1 Mentoria — o que não pode regredir

- **Sem preço na página.** O valor é R$ 3.369 pelo ciclo de 3 meses e é dito na conversa. Decisão dela, reconfirmada em `[15:57:56]`
- **Sem política de cancelamento.** O bloco fica **oculto** enquanto não houver texto aprovado — §12.1
- Campos exibidos: início *entrada a qualquer momento* · encontros *a cada 14 dias, às quartas, 19h* · turma *sem limite, cada uma no próprio ritmo* · inscrição *perene*
- **Os botões que abrem o WhatsApp dizem "Quero conversar sobre minha entrada".** Os que rolam até a oferta dizem "Quero selar minha entrada". Botão que promete selar e entrega conversa quebra a confiança no clique

### 7.2 Visão Uterina — o que não pode regredir

- **R$ 333, visível.** Decisão da titular em 02/09, posterior e mais fundamentada que o R$ 297 do plano da Nala
- **Dobra de prova com os quatro depoimentos, em HTML real — nunca imagem de texto**, e cada um com o nome da autora
- 🔴 **A atribuição é obrigatória e literal:** os depoimentos são dos **Portais do Ventre**, não da Visão Uterina. A dobra abre dizendo isso
- ⛔ **Não escrever "crédito abatível" nem "filtro de capacidade".** São raciocínio interno, não termo de oferta

### 7.3 Curso — o CTA de dois estágios

O link de pagamento **não existe** e não será pedido. A página opera assim:

```js
const CONFIG = Object.freeze({
  checkoutUrl: "",                       // quando existir, o botão vira checkout sozinho
  contactUrl: "https://wa.me/5548984248922?text=…"
});
```

Sem `checkoutUrl`, o botão abre a conversa e a venda acontece por lá. **Trocar de estágio é preencher uma linha.** UTM só se anexa ao checkout real — o WhatsApp descarta parâmetro desconhecido e o link fica sujo à toa.

⛔ **Jamais usar a URL PagTrust da Masterclass como checkout do Curso.** Ela existe e responde, e mandaria a compradora para o produto errado.

### 7.4 ⭐ As sete passagens têm nome — use-os

A página antiga dizia *"Passagem"* sete vezes enquanto os sete cards nomeados por ela estavam na pasta. Os nomes, e as miniaturas em `curso/assets/images/passagens/`:

`01` Permissão de habitar o corpo · `02` Corpo templo, prazer sem culpa · `03` Permissão de sentir as águas internas · `04` A dança de Shiva-Shakti · `05` A voz do prazer · `06` Espelhos do amor · `07` Consagração da rosa

---

## 8. A HOME — `/index.html`

**Função: fazer a visitante se reconhecer e escolher uma direção. Não vende nada.**

| # | Dobra | Conteúdo | Elemento visual | Movimento |
|---|---|---|---|---|
| **1** | Hero | selo + nome + linha de posicionamento | `selo-templo` | **2.5D — §8.2** |
| **2** | O credo | o bloco literal dela — §8.1 | `ornamento-divisor` | revelação linha a linha, 90ms |
| **3** | Os dois portais | as duas portas de entrada, lado a lado | `portal-arco-rosa` | entrada alternada |
| **4** | O que é a escola | 3 parágrafos + link para `/o-templo/` | `geometria-flor-da-vida` | fade + 24px |
| **5** | O método S.E.R. | 5 passos, uma linha cada + link `/metodo/` | `sri-yantra-cobre` | desenho de traço |
| **6** | Os caminhos | cards: Mentoria · Visão Uterina · Curso | `rosa-dourada` por card | stagger 120ms |
| **7** | A arte | faixa com Spotify e YouTube + link `/arte/` | `disco-solar` | slide lateral suave |
| **8** | Quem conduz | retrato, 2 parágrafos, link `/prana/` | `prana-golden-temple` | fade |
| **9** | Prova | os quatro depoimentos + o vídeo da Carol | `rosa-vermelha-orvalho` | fade |
| **10** | O chamado | fechamento + destino único | `templo-flutuante-rosas` | revelação lenta |

### 8.1 O credo — o único texto já aprovado, literal dela

Dito em 11/08/2026. **Usar exatamente assim, sem reescrever:**

> Aqui o corpo é templo. O ventre é altar. A voz é portal. A arte é oração. O prazer é meditação. A sombra é mestra. O amor é lei.
>
> Cada mulher caminha no seu ritmo, mas nenhuma caminha sozinha.

**Tratamento:** cada sentença em uma linha, revelação sequencial, Fraunces 28–40px peso 620, centralizado, muito ar. **Manter "a sombra é mestra"** — decisão registrada (`C-62`).

### 8.2 O hero 2.5D — só aqui

**Técnica: depth-map parallax.** Uma imagem + um mapa de profundidade em escala de cinza; o shader desloca os pixels conforme o ponteiro ou o giroscópio. Escolhida por ser **a única das três famílias avaliadas que não compromete o mobile** (`REFERENCIAS-UI-E-REPOS-2026-08-27.md` §2).

- WebGL puro em `<canvas>`, **sem Three.js** — a cena é um quad com dois samplers
- Base de referência: `LuXDAmore/vue-fake3d-image-effect` (**MIT**). ⛔ **Não usar `akella/fake3d` — não tem licença declarada**
- Deslocamento máximo **0.012 do lado**; amortecimento por interpolação, fator 0.06 por frame. **O efeito tem que ser percebido, não notado**

| Condição | Comportamento |
|---|---|
| WebGL indisponível | `<img>` estática, sem canvas |
| `prefers-reduced-motion: reduce` | **estática, obrigatoriamente** |
| largura < 768px | giroscópio **só com permissão**; sem permissão, estática |
| imagem não decodificada | não inicializar o canvas — evita salto de layout |

**O sujeito do efeito é o `selo-templo`** — profundidade entre asas, ankh e najas. A foto de retrato em alta que o briefing antigo esperava **não virá**, e não será pedida: o selo funciona, é coerente com a marca e não bloqueia a entrega.

---

## 9. AS PÁGINAS INSTITUCIONAIS

| Rota | Conteúdo | Fonte de copy |
|---|---|---|
| `/o-templo/` | o que é, para quem abre, as quatro dimensões, as três linhagens, e **por que não é curso** | `COPY-GOLDEN-TEMPLE-V3.md` — **17 de 18 frases já verificadas contra o docx da marca. Usar essa copy, não escrever nova** |
| `/metodo/` | o S.E.R. em profundidade: Aterrar · Compreender · Alquimizar + os dois seguintes | `COPY-GOLDEN-TEMPLE-V3.md` e `mentoria/index.html` |
| `/caminhos/` | três cards que levam às ofertas | derivar dos títulos e subtítulos das três páginas de oferta |
| `/arte/` | Spotify, YouTube, singles, DJ sets | `ATIVOS-E-LINKS.md` §1 — **só os canais listados lá** |
| `/prana/` | quem conduz | `mentoria/index.html` dobra d6 + `visao-uterina/index.html` §04 |

**A regra que evita link morto:** card cuja página de destino não existe **não é link** — é texto com a marcação `[EM BREVE]` visível. Link que leva a 404 é pior que ausência.

---

## 10. HEADER, FOOTER E NAVEGAÇÃO SEM BUILD

Sem include no HTML estático, a escolha é entre duplicar ou injetar. **Duplique.**

- header e footer **escritos em cada `index.html`**, idênticos, com a única variação sendo o item ativo e as rotas do idioma
- ⛔ **não injetar header por `fetch` + `innerHTML`**: causa piscada, quebra sem JS e atrasa o LCP
- o item ativo é marcado por uma classe no `<body>` (`page-home`, `page-mentoria`), não por comparação de URL em JS
- menu mobile: `<details>` nativo ou botão com `aria-expanded`. Sem biblioteca
- **o seletor de idioma vive no header**, com os três links sempre presentes

---

## 11. GATES DE ACEITE — rode e declare item a item

Você não diz que terminou. Você **roda e reporta o resultado real**.

### 11.1 Técnico

- [ ] Renderiza sem erro de console em **390 / 768 / 1440**
- [ ] Nenhum caminho relativo com `../` — todos root-relative
- [ ] Funciona com JavaScript desativado: conteúdo legível, navegação e troca de idioma funcionais
- [ ] `prefers-reduced-motion: reduce` desliga Lenis, ScrollTrigger e o 2.5D
- [ ] Lighthouse ≥ **90** em performance, acessibilidade, boas práticas e SEO, em mobile
- [ ] Contraste **AA** em todo texto — **conferir ouro sobre marfim, que é onde falha**
- [ ] Nenhum link, pixel, checkout ou domínio ativado

### 11.2 Idioma

- [ ] As **27 páginas** existem (9 × 3) e nenhuma dá 404
- [ ] `hreflang` recíproco e correto em todas, com `x-default`
- [ ] O seletor leva à **página equivalente**, nunca à home
- [ ] Nomes de produto e marca **não traduzidos** em nenhum idioma
- [ ] Depoimento no original, com tradução entre colchetes abaixo
- [ ] Todo bloco de conversão em EN e ES marcado `<!-- REVISAR: transcriação -->`

### 11.3 Visual — o gate que motivou este briefing

- [ ] **Elemento visual próprio em cada dobra.** Zero dobras só-texto
- [ ] **Nenhum display abaixo de peso 600**
- [ ] **Bodoni Moda ausente** do CSS, do preload e da pasta de fontes
- [ ] **Rosa com orvalho presente** em pelo menos uma dobra por página
- [ ] **Símbolo da marca** no hero e no rodapé de toda página
- [ ] Geometria animada na entrada de pelo menos três dobras por página
- [ ] **Teste do olho de 3 segundos:** role a página rápido. **Se alguma tela parecer um documento de texto, reprova**

### 11.4 Copy

- [ ] Copy em PT **idêntica** à fonte travada — diff limpo
- [ ] Todo `[COPY PENDENTE]` listado no fecho, nenhum preenchido por conta própria
- [ ] Nenhum item da §12 presente em nenhum idioma

---

## 12. 🔴 O QUE NÃO PODE SER ESCRITO

**Esta seção prevalece sobre qualquer outra deste documento.** O repositório tem histórico de fato comercial inventado por preenchimento automático. A régua da casa: **placeholder não cria fato.**

### 12.1 Proibido em qualquer página e em qualquer idioma

| Proibido | Motivo |
|---|---|
| **Política de cancelamento, reembolso, transferência ou garantia** | 🔴 **cláusula com efeito jurídico não se inventa.** O bloco fica **oculto**, não preenchido. Isto criaria obrigação em nome dela |
| **Preço na home ou nas institucionais** | elas não vendem. Preço vive na página da oferta |
| **Preço na Mentoria** | decisão dela: o valor é dito na conversa |
| **Data de turma, prazo, vaga ou escassez** | nada disso está confirmado |
| **A palavra "psicóloga"** | autorizada por ela, **mas sob gate regulatório** — CRP não verificado (`DEC-2026-08-03-003`) |
| **"Tantra"** | red line explícita dela. Termo oficial: **espiritualidade encarnada** |
| **"Empoderamento"** | `DEC-2026-09-02-004`. ⚠️ **"Poder" é permitido** — é palavra do público. A distinção é real e sobrevive na copy |
| **"Gostosa"** | vocabulário de conteúdo, nunca de página |
| **Qualquer número** — alunas, anos, resultados | nenhum foi confirmado |
| **Depoimento além dos quatro nomeados** | os quatro de 17/09 são os autorizados |
| **Frase nova na voz dela** | se faltar texto, deixe `[COPY PENDENTE]` visível. **Nunca preencher** |

### 12.2 Proibido decidir — devolva em vez de resolver

- se faltar asset, **use placeholder cinza com a dimensão escrita** — nunca busque imagem de banco
- se um bloco não couber visualmente, **entregue como está e aponte no fecho**. Não reescreva, não encurte, não troque palavra
- **ordem das dobras é decisão travada** — não reordene mesmo que pareça melhor
- se a copy travada parecer errada, **entregue como está e registre em TRAVEI EM**

### 12.3 ⭐ A régua de promessa, se você precisar de uma linha de topo

A promessa de topo **termina em EXPRESSÃO**, não em prazer nem em segurança (`DEC-2026-09-19-006`).

Vem do banco de léxico do público: quatro depoimentos, quatro mulheres. A titular notou **confiança em 3 de 4**. **Expressão aparece em 4 de 4** e ninguém tinha notado. A tríade ventre → voz → corpo está certa, mas **é a voz que as clientes relatam como chegada** — ventre e corpo são meio.

> **Regra de fechamento:** na dúvida sobre um fato, **o elemento não entra na página.** Ausência é corrigível; invenção publicada não.

---

## 13. ORDEM DE EXECUÇÃO

| Lote | O que | Por que nessa ordem |
|---|---|---|
| **1** | `tokens.css`, `base.css`, fontes, header e footer, as 27 pastas com `index.html` mínimo válido | sem a fundação, cada página inventa a sua |
| **2** | `scroll.js`, `reveal.js`, `nav.js`, `i18n-switch.js` — movimento e navegação funcionando em página vazia | depurar movimento sobre conteúdo é o dobro do trabalho |
| **3** | As **três páginas de oferta em PT**, copy literal | são as que geram dinheiro. Se o tempo acabar, o que existe já converte |
| **4** | A **home em PT**, dobra a dobra na ordem da §8, incluindo o 2.5D | |
| **5** | As institucionais em PT | |
| **6** | **EN e ES**, as 18 páginas, com os blocos de conversão marcados | tradução sobre estrutura estável; tradução sobre estrutura em mudança se perde |
| **7** | `sitemap.xml`, `robots.txt`, `hreflang`, gates da §11 rodados e reportados | |

---

## 14. FECHO OBRIGATÓRIO

Ao terminar, escreva em `execução Codex/site-2026-09/REGISTRO-2026-09-XX.md` e indexe em `execução Codex/STATUS-CODEX.md`:

```
ARQUIVOS PRODUZIDOS
- caminho — o que é (1 linha)

GATE
- item a item da §11, com resultado real — não "deve funcionar"

TRAVEI EM
- toda parada por falta de contrato, com a pergunta exata
- "nenhuma" é resposta válida e rara

PENDÊNCIAS
- o que ficou como [COPY PENDENTE] ou placeholder, e por quê

BLOCOS MARCADOS PARA TRANSCRIAÇÃO
- lista de arquivo + bloco em EN e ES que precisam da nossa revisão
```

> **"TRAVEI EM" é o campo mais valioso do fecho.** Cada parada registrada é um buraco de contrato encontrado antes de virar retrabalho. Se você precisou ler o repositório inteiro para entender a tarefa, **o briefing falhou — não você.** Registre onde.

---

**Base:** `DIRECAO-VISUAL-PRANA.md` · `DECISOES.md` DEC-2026-09-19-000 a 006 · `lexico-icp/BANCO.md` · `COPY-GOLDEN-TEMPLE-V3.md` · `ATIVOS-E-LINKS.md` · `REFERENCIAS-UI-E-REPOS-2026-08-27.md` · `INTEGRACAO-PLANO-NALA-2026-09-12.md` · `AGENTS.md` §0 · `90-templates/CONTRATO-EXECUTOR.md`
