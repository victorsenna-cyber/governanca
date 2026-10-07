# CONTRATO DE EXECUTOR — Quiz da Débora · v3 (fluxo por NÍVEL + segmentação + planilha)

> **Escrito:** 03/10/2026 · Opus (Cowork, CEO) · **Dono:** Victor · **Executor:** Codex
> **A UI, a base de código e o gate visual continuam os da v2** (`CONTRATO-QUIZ-NORTE-v2-2026-10-03.md` §1, §2, §3.5, §4, §5): referência `lp02-profissaohomesales`, igual e sem alteração (imagens podem sair), motor do quiz do Gui.
> **O que a v3 troca:** o fluxo e a copy. **Prevalece sobre a v1 e a v2 em todo conteúdo.**
> **Por que (Victor, 03/10):** a v2 abria com quatro opções de dor, todas negativas, e não mostrava um nível. **Um quiz entrega à pessoa o NÍVEL em que ela está**, abre com perguntas leves de perfil, como a referência (gênero e idade), e os dados alimentam uma planilha para uso futuro por script.

---

## 1. Fluxo (25 telas no máximo)

| # | Tela | Componente (do motor do Gui) | Grava como |
|---|---|---|---|
| T1 | abertura + **gênero** | hero + grade 2 colunas (cards com rótulo preto; **emoji no lugar da foto**) | `genero` |
| T2 | idade | grade 2×2 | `idade` |
| T3 | tamanho do time | lista | `time` |
| T4 | tempo de liderança | lista | `tempo` |
| T5 | contato com o Eneagrama | lista | `eneagrama` |
| T6 | **inserção** que reusa T3 | cartão de inserção + botão | — |
| T7–T14 | 8 situações **pontuadas** | lista, **sem emoji, ordem embaralhada** | `s1`…`s8` (0–3) |
| T15 | desejo | lista com emoji | `desejo` |
| T16 | captura | formulário | `nome` `whatsapp` `email` |
| T17 | carregamento | tela de carregamento | — |
| T18 | **resultado** com barra de nível | barra de métrica + cartão + botão | `soma` `nivel` `pct` |

---

## 2. Copy travada (literal)

### T1 · abertura
- **Tag:** "TESTE GRATUITO PARA LÍDERES:"
- **Headline** (com destaque de cor em *NÍVEL*, como no sistema de cores do quiz do Gui): "EM QUE **NÍVEL** ESTÁ A SUA LIDERANÇA DE PESSOAS?"
- **Subheadline** (sublinhar *um primeiro norte*): "Em 3 minutos, **um primeiro norte** pela ótica do Eneagrama, sem decorar tipo nenhum e sem rótulo."
- "↓ RESPONDA PARA COMEÇAR ↓"
- **Pergunta:** "Você é homem ou mulher?" · `homem` "Homem" 👨‍💼 · `mulher` "Mulher" 👩‍💼

### T2 · "Qual é a sua idade?"
`18-29` "18 a 29" · `30-39` "30 a 39" · `40-49` "40 a 49" · `50+` "50 ou mais"

### T3 · "Quantas pessoas você lidera hoje?"
`1-5` "1 a 5" · `6-15` "6 a 15" · `16-50` "16 a 50" · `50+` "Mais de 50"

### T4 · "Há quanto tempo você lidera pessoas?"
`<1` "Menos de 1 ano" · `1-3` "De 1 a 3 anos" · `4-10` "De 4 a 10 anos" · `10+` "Mais de 10 anos"

### T5 · "Qual é o seu contato com o Eneagrama?"
`nunca` "Nunca ouvi falar" · `ouvi` "Já ouvi falar" · `teste` "Já fiz um teste" · `estudo` "Estudo ou aplico"

### T6 · inserção
- **Título:** "{rótulo de T3} pessoas, {rótulo de T3} formas de entender o mesmo pedido."
  > exibir o rótulo como foi escolhido: "1 a 5 pessoas, 1 a 5 formas…" · para `50+`: "Mais de 50 pessoas, mais de 50 formas de entender o mesmo pedido."
- **Texto:** "As próximas 8 situações mostram em que nível você está para lidar com isso. Responda pelo que você faz hoje, não pelo que gostaria de fazer."
- **Botão:** "Continuar"

### T7–T14 · situações pontuadas
**As 8 perguntas e opções são as P2–P9 da v1** (`CONTRATO-QUIZ-NORTE-2026-10-03.md` §3.3), literais, com a mesma pontuação 0–3. Gravar `s1`…`s8` na ordem P2…P9.

### T15 · "Hoje, o que você mais quer na sua liderança?"
`combinado` 🎯 "Que o combinado aconteça de primeira" · `feedback` 💬 "Que o meu feedback chegue na pessoa" · `relacoes` 🤝 "Relações mais leves no time" · `sobrecarga` 🧘 "Parar de puxar tudo para mim"

### T16 · captura
Copy da v1 §3.4, trocando só o título: "O seu nível está pronto."

### T17 · carregamento
"Calculando o seu nível…" (no padrão de animação da tela de carregamento do motor)

### T18 · resultado
**Barra de nível:** rótulo "Seu nível de leitura das pessoas do seu time" · porcentagem `pct = round(10 + soma/24 × 85)` (de 10% a 95%; **nunca 0, nunca 100**).

| `nivel` | Soma | Título | Texto |
|---|---|---|---|
| `1` | 0–9 | "Nível 1 · Você está liderando em uma língua só: a sua." | texto `f1` da v1 §3.5 |
| `2` | 10–17 | "Nível 2 · Você já percebe que as pessoas funcionam diferente. Falta saber como." | texto `f2` da v1 §3.5 |
| `3` | 18–24 | "Nível 3 · Você já lidera olhando para o outro. Agora dá para fazer isso com método." | texto `f3` da v1 §3.5 |

**Parágrafo do desejo (pela T15):**

| Valor | Texto |
|---|---|
| `combinado` | "E o que você mais quer hoje, que o combinado aconteça de primeira, depende exatamente disso: o pedido precisa ser claro na língua de quem recebe, não só na sua." |
| `feedback` | "E o que você mais quer hoje, que o seu feedback chegue na pessoa, depende exatamente disso: ele precisa ser dito como aquela pessoa consegue ouvir, não como você gostaria de ouvir." |
| `relacoes` | "E o que você mais quer hoje, relações mais leves no time, começa por algo que quase ninguém vê: muitas vezes o comportamento que incomoda é proteção. Quando você entende o que a pessoa protege, sai uma camada de julgamento, e a relação fica mais leve." |
| `sobrecarga` | "E o que você mais quer hoje, parar de puxar tudo para você, depende de pedir na língua de cada um: quando o pedido chega certo, você não precisa pedir de novo, nem fazer sozinho." |

**Ponte e rodapé:** iguais à v1 §3.5.

---

## 3. Planilha — integração pronta, URL depois

- **Reaproveitar** `clientes/Guilherme Araújo/execução Codex/quizzes-2026-10-02/apps-script/Code.gs` como base. Entregar `apps-script/Code.gs` + `LEIA-ME.md` (como publicar e colar a URL).
- No quiz: `const LEADS_ENDPOINT = "";` — **o Victor cola a URL depois.** Vazio = não envia e faz `console.info` do payload.
- **Envio:** no submit da T16 (antes do resultado). Uma linha por lead. Falha de rede **não trava** o resultado.
- **Colunas, nesta ordem:** `ts` · `nome` · `whatsapp` · `email` · `genero` · `idade` · `time` · `tempo` · `eneagrama` · `s1`…`s8` · `soma` · `nivel` · `pct` · `desejo` · `utm_source` · `utm_medium` · `utm_campaign` · `utm_content` · `utm_term` · `url` · `user_agent`
- Valores gravados como os **códigos** do §2 (`30-39`, `teste`, `combinado`…), não como os rótulos — é o que o script vai ler.

---

## 4. Gate — o da v2, mais:

- [ ] Percursos completos para os 3 níveis × 4 desejos; limites 9/10, 17/18; `pct` em 0 → 10% e 24 → 95%
- [ ] T6 exibe corretamente os 4 valores de T3
- [ ] Payload com as 28 colunas na ordem do §3 (print do `console.info`)
- [ ] `Code.gs` grava uma linha de teste numa planilha local de teste (ou declarar não testável)
- [ ] Varredura de léxico vetado → 0

## 5. Proibido decidir
O da v2, mais: não acrescentar pergunta de perfil além de T1–T5 · não mostrar a soma em pontos, só a porcentagem e o nível · não nomear nível além dos três títulos.
