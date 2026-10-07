# CONTRATO DE EXECUTOR — Quiz da Débora · v6 (ritmo, alinhamento, inserções, contexto do resultado)

> **Escrito:** 03/10/2026 · Opus (Cowork, CEO) · **Dono:** Victor (aprovado: "pode fazer") · **Executor:** Codex
> **É um ajuste sobre o quiz v5 que já está no ar.** Editar o código existente em `clientes/Débora Delgado/execução Codex/quiz-norte-v5-2026-10-03/quiz/`. **Tudo o que este contrato não muda continua como está** (v5 e anexos).
> **Referência de UI:** a mesma da v5 (`920-referências lp/lp02-profissaohomesales-com-clone-local-integral-2026-10-03/`) e o seu `MAPA-REFERENCIA.md`.
> **Por que (Victor, 03/10):** telas uniformes demais, sem a quebra de visual da origem · textos e perguntas desalinhados · "Você está na metade" crua · "Com o método da Débora" aparece sem contexto.

---

## 1. Alinhamento — regra única para todas as telas de pergunta

- **mesma distância do topo** em todas as telas de pergunta, igual à da referência (medir na tela 5 do mapa). O título **nunca** encosta na barra de progresso (corrige a tela do desejo)
- título e opções com o **alinhamento da referência** em todas as telas, sem exceção
- **remover "Situação X de 25"** — a referência não tem; só a barra de progresso
- **opção sem emoji não reserva espaço de ícone** — o texto começa no recuo normal da referência (hoje há um vão vazio à esquerda)
- **resultado:** nome da área numa linha, "Nível X · Y%" na linha seguinte, e a barra abaixo, sem sobrepor (como a tela 32)

---

## 2. Ritmo — formatos variados, como a origem

| Formato | Componente | Pontos |
|---|---|---|
| **lista 4** | lista da referência, só texto | 0 · 1 · 2 · 3 (como na v5) |
| **binária** | pergunta binária da referência (telas 3, 4, 6), com ✅ e ❌ no lugar da imagem | ✅ = 3 · ❌ = 0 |
| **lista 3** | lista de 3 da referência (telas 11, 17), só texto | 0 · 1,5 · 3 |
| **grade** | grade 2×2 da referência (tela 2), emoji no lugar da foto | 0 · 1 · 2 · 3 |

Opções embaralhadas em lista 4, lista 3 e grade. **Binária: ✅ sempre primeiro.** A área continua valendo de 0 a 15 e os limites de nível não mudam (v5, Anexo B §3). `s1`…`s25` podem ter decimal (1,5); a planilha grava como número.

### 2.1 As situações que mudam — o resto fica literal como na v5

**s2 · binária** — "Antes de delegar algo importante, você pede para a pessoa contar como vai fazer?"
✅ "Sim, quase sempre" · ❌ "Não, explico e confio que ela entendeu"

**s4 · lista 3** — "Quando alguém não entrega, a primeira coisa que você faz é…"
0 "Cobrar de novo, mais firme." · 1,5 "Perguntar o que travou." · 3 "Rever como pediu, e se aquela pessoa entende pedidos assim."

**s7 · binária** — "Quando alguém fica na defensiva depois de um feedback, você consegue entender o que aquilo ameaçou nela?"
✅ "Sim, na maioria das vezes" · ❌ "Não, geralmente concluo que ela não aceita crítica"

**s8 · grade** — "Para reconhecer um bom trabalho, você…"
🚫 0 "Não costumo: fazer bem é obrigação" · 📣 1 "Elogio em público, igual para todos" · 🙂 2 "Elogio quando lembro" · 🎯 3 "Reconheço como cada pessoa valoriza"

**s9 · lista 3** — "Você precisa cobrar a mesma coisa pela terceira vez. Você…"
0 "Cobra mais firme." · 1,5 "Pergunta o que está acontecendo." · 3 "Muda a forma de pedir, porque a anterior não chegou."

**s12 · binária** — "Quando alguém quase não fala nas reuniões, você pergunta como ela prefere contribuir?"
✅ "Sim" · ❌ "Não, espero que ela se manifeste"

**s14 · lista 3** — "Enquanto alguém do time fala com você, na maior parte do tempo você está…"
0 "Pensando na resposta." · 1,5 "Prestando atenção no que ela diz." · 3 "Prestando atenção no que ela diz e no que aquilo mostra sobre ela."

**s17 · binária** — "Quando alguém do time te irrita com frequência, você procura entender o que nela é diferente de você?"
✅ "Sim" · ❌ "Não, tento só tolerar"

**s19 · grade** — "Quando um conflito no time se repete, você…"
⏳ 0 "Espera que se resolva sozinho" · 📏 1 "Define uma regra" · 🗣️ 2 "Conversa com cada um" · 🛡️ 3 "Entende o que cada um protege"

**s20 · lista 3** — "Depois de um conflito resolvido, a relação com a pessoa…"
0 "Fica distante." · 1,5 "Volta ao normal com o tempo." · 3 "Fica mais leve, porque eu entendi o que aconteceu do lado dela."

**s22 · binária** — "Você combina com cada pessoa como ela prefere receber demandas e retornos?"
✅ "Sim" · ❌ "Não, é igual para todos"

**s24 · lista 3** — "Quando uma pessoa nova entra no time, você…"
0 "Passa as regras e espera que ela se adapte." · 1,5 "Deixa o tempo mostrar como ela é." · 3 "Procura entender cedo como ela funciona, para saber como pedir e como acompanhar."

---

## 3. Inserções — de 2 para 5, no componente de inserção da referência (título · imagem · texto · botão "Continuar")

> **Elas quebram o ritmo e apresentam a Débora e o método antes do resultado.** É isso que dá contexto à coluna da direita do resultado (§4).
> **Imagem:** onde está indicado emoji, usar o emoji grande no lugar da imagem. **Foto da Débora:** `clientes/Débora Delgado/04 - web design/novo funil + páginas/img/debora.jpg`; se não existir, `clientes/Débora Delgado/04 - web design/página pré-final/index deployado/debora-d6.webp`. Copiar para `quiz/assets/`, otimizada (≤ 120 KB).

**Fluxo:** T1–T5 → **I1** → s1–s10 → **I2** → s11–s15 → **I3** → s16–s20 → **I4** → s21–s25 → **I5** → T6 (desejo) → T8 → T9 → T7 → T10

| | Título | Imagem | Texto |
|---|---|---|---|
| **I1** | *(sem mudança — v5)* | — | *(sem mudança)* |
| **I2** | "Você está na metade." | **foto da Débora** | *"Remove uma camada de julgamento e aí todos os relacionamentos vão tender a ficar mais leves."* — Débora Delgado · e abaixo: "Até aqui, as situações mostram como você pede e como dá feedback. Agora vêm a escuta, os conflitos e o quanto você conhece quem lidera." |
| **I3** | "Por que o mesmo pedido chega diferente" | 🗣️ | "Uma pessoa explica com muitos detalhes e deixa o principal para o final. A outra escuta esperando só a conclusão. As duas são competentes, e é como se estivessem falando línguas diferentes. A Débora chama isso de As Nove Línguas." |
| **I4** | "O comportamento que incomoda costuma ser proteção" | 🛡️ | *"Não é que a pessoa é agressiva. Ela usa aquilo porque ela tem muito medo de ser traída. Então ela se protege antes."* — Débora Delgado |
| **I5** | "Você lidera em uma língua. O seu time fala nove." | 🧭 | "Faltam poucas perguntas. Em seguida, você vê o seu nível em cada área e onde está a sua maior alavanca." |

> Procedência: I2 e I4 `[16/09 10:27:18–10:27:56]` · I3 `[17/08 00:25:26]`. "As Nove Línguas" é provisório até a conferência da Débora.

---

## 4. Resultado — contexto da coluna da direita

- pílula verde: ~~"Com o método da Débora"~~ → **"Entendendo a língua de cada pessoa"**
- pílula vermelha "Hoje" e a fórmula das barras: sem mudança

---

## 5. Gate

- [ ] Pares lado a lado com a referência em 390 e 1440 px: lista 4, binária, lista 3, grade, cada inserção (I1–I5) e resultado
- [ ] Mesma distância do topo em todas as telas de pergunta (print de 4 telas seguidas mostrando o título na mesma altura)
- [ ] Nenhum "Situação X de 25"; nenhum vão de ícone vazio
- [ ] Percurso completo sem erro; todos os 5 níveis por área corretos com decimais; limites do v5 Anexo B §3
- [ ] Payload com as 52 colunas, valores numéricos
- [ ] Nenhum tipo ou número de tipo do Eneagrama exibido
- [ ] Varredura de léxico vetado → 0
- [ ] Caminhos absolutos `/quiz/…` mantidos em `index.html` e `styles.css`; versão dos arquivos subida para `?v=5`; `window.dataLayer` iniciado no `app.js`

## 6. Fecho

ARQUIVOS ALTERADOS · GATE com os prints · TRAVEI EM · PENDÊNCIAS. **Listar exatamente quais arquivos o Victor precisa subir de novo para `/quiz/`.**
