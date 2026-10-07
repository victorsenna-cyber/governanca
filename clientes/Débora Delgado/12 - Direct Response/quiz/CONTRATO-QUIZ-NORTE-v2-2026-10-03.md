# CONTRATO DE EXECUTOR — Quiz "Um primeiro norte" · v2 (refazer a UI pela referência)

> **Escrito:** 03/10/2026 · Opus (Cowork, CEO) · **Dono:** Victor · **Executor:** Codex
> **Substitui a UI da v1** (`CONTRATO-QUIZ-NORTE-2026-10-03.md`). **A copy e a lógica da v1 continuam valendo**, com as mudanças do §3 abaixo.
> **Por que a v2:** a v1 não especificou a referência de UI. O resultado saiu com cara de site institucional (card verde, botão "Começar"). **Decisão do Victor: a UI/UX é IGUAL à referência, sem alteração de nada.**
> **Publicação:** `https://deboradelgado.space/quiz/` · `VSL_URL` e `LEADS_ENDPOINT` entram depois.

---

## 1. Objeto

Refazer o quiz **copiando a UI/UX da referência elemento por elemento** — layout, tipografia, cores, tamanhos, espaçamentos, raios, sombras, barra de progresso, tag, botões de opção, campos, transições e rodapé — e **trocando só o conteúdo** pelo do §3.

**Não é o objeto:** adaptar a referência à marca da Débora · reaproveitar o `site.css` ou o visual da v1 · escrever ou ajustar texto.

---

## 2. Fontes

| # | Arquivo | Para quê |
|---|---|---|
| 1 | **este contrato** | o que muda e o que não muda |
| 2 | `920-referências lp/lp02-profissaohomesales-com-arquivo-literal/` | 🔴 **a UI.** Abrir com `ABRIR-COPIA.cmd`. Fonte da verdade: `arquivos/lp02.profissaohomesales.com/*-index.html` (CSS, variáveis de tema, classes) + os bundles em `arquivos/inlead.digital/` (componentes das outras etapas) + `_verificacao/original-mobile.png` e `original-desktop.png` |
| 3 | `CONTRATO-QUIZ-NORTE-2026-10-03.md` §3.2–§3.7 | copy das perguntas, faixas, atritos, ponte, lógica e técnico |
| 4 | ⭐ `clientes/Guilherme Araújo/execução Codex/quizzes-2026-10-02/hostinger/teto/` (`engine.js` · `styles.css` · `config/teto.json` · `assets/inter.woff2`) | 🔴 **a base de código.** Mesma referência, já reproduzida com fidelidade e testada em 360/390/1440 sem overflow (`RELATORIO.md`, `qa/pairs/`). **Reaproveitar o motor e o CSS sem alterar; a Débora é um `config/norte.json` novo.** Se o motor não suportar algo do §3 (faixa por soma, embaralhamento, parágrafo por atrito), estender o motor e declarar no fecho |
| 5 | `execução Codex/quiz-norte-2026-10-03/quiz-norte.html` | só como conferência da lógica da v1 (pontuação, limites, eventos) |

---

## 3. O que muda em relação à v1

### 3.1 Tela de entrada — segue a estrutura da referência: hero + 1ª pergunta na mesma tela, **sem botão "Começar"**

| Componente da referência | Texto (literal) |
|---|---|
| tag amarela (pill) | "RESPONDA E RECEBA O SEU PRIMEIRO NORTE:" |
| headline (caixa alta, como na referência) | "Em 3 minutos, um primeiro norte sobre como você está liderando." |
| subheadline cinza, com o termo sublinhado | "Pela ótica do **Eneagrama**. Sem decorar tipo nenhum e sem rótulo." — sublinhado em *Eneagrama* (como *NOVA PROFISSÃO* na referência) |
| linha "↓ … ↓" | "↓ RESPONDA PARA COMEÇAR ↓" |
| título da pergunta | P1 da v1: "O que mais tem pesado na sua liderança hoje?" |
| opções | as 4 da P1 da v1, no componente de opção em lista da referência, com estes emojis: `combinado` 🔁 · `feedback` 📭 · `relacoes` 😬 · `sobrecarga` 😩 |

**Saem da tela de entrada:** o "Corpo" e a "Nota" da v1 (a referência não tem esses blocos). A nota já está no rodapé do resultado.

### 3.2 Perguntas 2 a 9

Mesmo componente de opção da referência, **sem emoji** (para não sugerir a resposta certa). Barra de progresso no topo, como na referência. Avança ao tocar.
> Se o componente da referência **não** existir sem imagem/emoji, **parar e devolver** — não inventar variação.

### 3.3 Captura e resultado

- **Captura:** componente de formulário do inlead presente nos bundles (campos e botão nas medidas da referência). Copy da v1 §3.4.
- **Resultado:** mesma tipografia e espaçamentos da referência (headline → texto → botão). Copy da v1 §3.5, na ordem faixa → atrito → ponte. O destaque "Você lidera em uma língua. O seu time fala nove." usa o estilo da headline.

### 3.4 Rodapé — mesma posição e estilo do rodapé da referência

"Débora Delgado · deboradelgado.space" · `[[ FALTA: CNPJ ou CPF de quem vende ]]` · "Ao acessar esta página, você está de acordo com: Termos de Uso | Política de Privacidade" (links `[[ FALTA ]]`).

### 3.5 Técnico — o que muda

| Item | v2 |
|---|---|
| Entrega | pasta pronta para subir em `/quiz/`: `index.html` + `assets/` |
| Fonte | **Inter, como na referência**, servida localmente a partir dos `.woff2` do arquivo literal — sem CDN |
| Cores e tema | **os da referência** (fundo branco, acento preto, tag amarela). Não usar o verde da Débora |
| Scripts de terceiro da referência | **nenhum** (Pixel, GTM, Panda, trackers, inlead/next): copia-se o visual, não o código deles |
| Resto | igual à v1 §3.7 (memória, `LEADS_ENDPOINT` vazio, `dataLayer`, `VSL_URL` com parâmetros) |

---

## 4. Saída e gate

**Onde:** `clientes/Débora Delgado/execução Codex/quiz-norte-v2-2026-10-03/quiz/` + `README.md` + linha no `STATUS-CODEX.md`.

- [ ] **Comparação visual lado a lado com `original-mobile.png` e `original-desktop.png`**: print da v2 em 390 e 1440 na mesma posição. Diferenças só de conteúdo
- [ ] Medidas conferidas contra a referência: container `max-w-[28rem]`, opção `56px`, raio `rounded-2xl`, fonte Inter, acento `#000000`
- [ ] Gate da v1 (§4) inteiro, menos o item do botão "Começar"
- [ ] Nenhum script ou requisição de terceiro (aba Network vazia de domínios externos)
- [ ] Varredura de léxico vetado → 0

## 5. 🔴 Proibido decidir

- "melhorar" ou adaptar a UI da referência — **igual, sem alteração de nada**
- trocar, encurtar ou acrescentar texto além do §3 e da v1
- usar imagem, foto ou ilustração da referência (são de outro negócio). **Única exceção ao "igual" (Victor, 03/10): onde a referência tem imagem, a imagem pode sair** — o componente fica sem ela, com o resto idêntico
- acrescentar etapa que a referência tenha e a v1 não (ex.: idade, gênero, tela de carregamento com promessa de dinheiro)

## 6. Fecho

O mesmo da v1: ARQUIVOS ALTERADOS · GATE (com os prints) · TRAVEI EM · PENDÊNCIAS.
