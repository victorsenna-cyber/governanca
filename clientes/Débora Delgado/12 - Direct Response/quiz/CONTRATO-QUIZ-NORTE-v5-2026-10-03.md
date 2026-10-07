# CONTRATO DE EXECUTOR — Quiz da Débora · v5 (do zero, só pela referência original)

> **Escrito:** 03/10/2026 · Opus (Cowork, CEO) · **Dono:** Victor · **Executor:** Codex
> **Substitui v1–v4 em UI, código e resultado.** Do v4 continuam valendo **só** o texto das perguntas (§2), o cálculo (§3), os textos de alavanca (§4, item 5) e as colunas da planilha (§5).
> 🔴 **Decisão do Victor (03/10):** refazer **do zero**, partindo **única e exclusivamente** da referência original. **Não usar nada do quiz do Guilherme** (motor, CSS, configs, Apps Script), nem das entregas v1–v4 da Débora.
> **Publicação:** `https://deboradelgado.space/quiz/` · `VSL_URL` e `LEADS_ENDPOINT` ficam vazios (o Victor integra depois).

> 🔴 **ARQUIVO ÚNICO (03/10):** tudo o que este contrato cita de outras versões está copiado na íntegra nos **ANEXOS A, B e C** no fim deste arquivo. **Não abrir v1, v3 nem v4.** Onde o texto disser "v3 §2" → **Anexo A** · "v4 §2 / §3 / §4 / §5" → **Anexo B** · "v1 §3.4" → **Anexo C**.

---

## 1. A referência — e a regra que manda em tudo

**Fonte única de UI/UX:** `920-referências lp/lp02-profissaohomesales-com-clone-local-integral-2026-10-03/`
- abrir com `ABRIR-COPIA.cmd` (visualizador offline: 45 telas navegáveis)
- código original em `arquivos/` · capturas em `_verificacao/`

**Regra:** UI/UX **igual à referência, sem alteração de nada** — layout, tipografia, cores, tamanhos, espaçamentos, raios, sombras, barra de progresso, tags, cards, botões, barras de métrica, banners, cards de eco, botão fixo, transições, carregamento, rodapé e comportamento responsivo.
**Única exceção:** **as imagens podem sair** (são de outro negócio). Onde houver imagem, o componente fica sem ela ou com o emoji indicado; o resto, idêntico.

**Não entra da referência:** texto, imagem, vídeo, número, selo, depoimento, preço, cupom, cronômetro, dados de empresa — **e nenhum script de terceiro** (Pixel, GTM, Panda, inlead, Next, trackers). Copia-se o visual e o comportamento, reescritos em código próprio.

---

## 2. Etapa 0 — catalogar antes de construir (obrigatória)

Percorrer as 45 telas no visualizador e gerar `MAPA-REFERENCIA.md`: nº da tela · tipo de componente (pergunta em grade com imagem, pergunta em lista, inserção, carregamento, captura, resultado, oferta…) · print em 390 px.
Depois, **casar cada tela nossa (§3) com o tipo de tela da referência** e anotar no mapa qual componente cada uma usa.

- Telas da referência **sem correspondente nosso** (vídeo, preço, cupom, cronômetro, depoimentos, selo): **saem.** **A página final da referência (depois do resultado) NÃO sai: ela vira a página do próximo passo (§4-bis).**
- Inserções da referência além das 3 do §3: **saem** — não criar texto.
- Tela nossa **sem componente equivalente** na referência: **parar e devolver** com o print.

---

## 3. Fluxo e copy

| Tela | Conteúdo | Componente da referência |
|---|---|---|
| T1 | abertura + gênero — copy da **v3 §2, T1** | abertura com 1ª pergunta em grade de 2 (como "Você é homem ou mulher?"); emoji 👨‍💼 / 👩‍💼 no lugar da foto |
| T2–T5 | idade · tamanho do time · tempo de liderança · Eneagrama — **v3 §2, T2 a T5** | T2 na grade de idade (como "Qual a sua idade?"); T3–T5 no componente de pergunta da referência |
| I1 | inserção — **v3 §2, T6** | inserção da referência |
| S1–S10 | situações 1 a 10 — **v4 §2** (opções embaralhadas, sem emoji) | pergunta em lista |
| I2 | inserção de meio — **v4 §2, T17** | inserção |
| S11–S25 | situações 11 a 25 — **v4 §2** | pergunta em lista |
| T6 | desejo — **v3 §2, T15** | pergunta em lista com emoji |
| T7 | captura — **v1 §3.4**, título "O seu nível está pronto." | captura da referência |
| T8 | carregamento — "Calculando o seu nível…" | carregamento da referência |
| T9 | **resultado** — §4 abaixo | tela de resultado da referência |
| T10 | **página do próximo passo** — §4-bis | página final da referência (a que vem depois do resultado), mesmos componentes |

---

## 4. Resultado — mesmo esqueleto da tela de resultado da referência, bloco a bloco

| Bloco da referência | Na Débora (literal) |
|---|---|
| texto pequeno "Aqui está o seu resultado..." | "Aqui está o seu resultado..." |
| banner verde com headline | "COM BASE NAS SUAS RESPOSTAS, A SUA LIDERANÇA DE PESSOAS ESTÁ NO NÍVEL {nivel}" |
| ilustrações antes × depois | **saem** (imagem) |
| pílulas "Situação Atual" (vermelha) × "Com a Nova Profissão Digital" (verde) | "Hoje" × "Com o método da Débora" |
| barras de métrica (vermelhas × verdes) | **5 linhas**, uma por área, com os nomes do v4 §4 item 3. Esquerda = `pct_dX`. Direita = `min(95, max(80, pct_dX + 40))` |
| "Você respondeu que..." | "Você respondeu que..." |
| 4 cards de eco (título com destaque de cor + texto) | cards A, B, C e D abaixo |
| "Por isso..." | "Por isso..." |
| banner verde | "A SUA MAIOR ALAVANCA É: {ÁREA EM CAIXA ALTA}" |
| texto cinza sob o banner | texto da área do v4 §4 item 5 + " Clique no botão abaixo para ver o próximo passo." |
| botão fixo "Continuar" | "Continuar" → T10 |

**Destaque de cor** nos cards: a mesma regra da referência (palavra-chave colorida no título). Destacar o trecho entre `**…**`.

**Card A · tamanho do time** — título "Você lidera **{rótulo de T3}** pessoas" (para `50+`: "Você lidera **mais de 50** pessoas") · texto "São {rótulo} formas diferentes de entender o mesmo pedido." (para `50+`: "São mais de 50 formas diferentes de entender o mesmo pedido.")

**Card B · tempo de liderança** — título "Lidera há **{rótulo de T4 em minúsculas}**" · texto:
- `<1` "Quanto antes você aprende a entender o seu time, menos o retrabalho vira hábito."
- `1-3` "É a fase em que os atritos começam a se repetir, e dá para mudar isso agora."
- `4-10` "Você já sabe gerar resultado. O que falta é gastar menos energia para isso."
- `10+` "Com essa experiência, o que mais rende agora é entender quem você lidera, não mais técnica."

**Card C · Eneagrama**
- `nunca` "**Nunca ouviu falar** do Eneagrama" · "Melhor assim: você não precisa decorar tipo nenhum para começar."
- `ouvi` "**Já ouviu falar** do Eneagrama" · "Agora é ver como ele funciona na prática da liderança."
- `teste` "**Já fez um teste** de Eneagrama" · "O teste mostra um tipo. O que muda a liderança é saber o que fazer com isso no dia a dia."
- `estudo` "**Estuda ou aplica** o Eneagrama" · "Você já tem a base. Falta levar isso para cada pedido, feedback e conversa difícil."

**Card D · desejo** — título "O que você mais quer é **{trecho}**" · texto "E é exatamente isso que fica mais fácil quando você entende como cada pessoa funciona."
trechos: `combinado` "que o combinado aconteça de primeira" · `feedback` "que o seu feedback chegue na pessoa" · `relacoes` "relações mais leves no time" · `sobrecarga` "parar de puxar tudo para você"

## 4-bis. T10 · Página do próximo passo — ela VENDE A AULA (a VSL)

> **Função:** como na origem, a página final avisa que **existe mais um passo** e vende esse passo. Aqui o passo é **assistir à aula** — o preço e a oferta estão na aula, **não nesta página**. Mapear cada bloco abaixo no componente equivalente da página final da referência; bloco da referência sem par aqui (preço, cupom, cronômetro, selo, depoimento) **sai**.

| Bloco | Texto (literal) |
|---|---|
| tag | "FALTA SÓ UM PASSO:" |
| headline (destaque de cor em *COMO SAIR DAÍ*) | "O SEU RESULTADO MOSTRA ONDE VOCÊ ESTÁ. A AULA MOSTRA **COMO SAIR DAÍ**." |
| subheadline | "Uma aula curta da Débora Delgado, pela ótica do Eneagrama, para líderes que querem que o time entregue mais com menos esforço, o seu e o deles." |
| título da lista | "Na aula, você vai ver:" |
| card 1 | "**Por que** o pedido que é claro para você chega de outro modo para quem recebe" |
| card 2 | "**As Nove Línguas:** você lidera em uma língua, o seu time fala nove" |
| card 3 | "**Como** entender o que move cada pessoa, sem decorar tipo nenhum" |
| card 4 | "**O que muda** na sua maior alavanca: {área}" |
| eco do nível | "Você está no **Nível {nivel}**. A aula começa exatamente do ponto em que a maioria dos líderes trava." |
| quem conduz | "Débora Delgado" · `[[ FALTA: uma linha de credencial com número ]]` · foto `[[ FALTA: foto da Débora — se não vier, o componente fica sem imagem ]]` |
| botão | "Quero assistir à aula" → `VSL_URL?origem=quiz&nivel={nivel}&alavanca={dX}` + UTMs |
| texto sob o botão | "Gratuita · cerca de 20 minutos" |
| FAQ (só se a página final da referência tiver FAQ) | "A aula é gratuita?" → "Sim." · "Preciso conhecer o Eneagrama?" → "Não. Você não precisa decorar tipo nenhum." · "Quanto tempo dura?" → "Cerca de 20 minutos." |

> ⚠️ *As Nove Línguas* é provisório até a conferência da Débora; se mudar, só o card 2 muda.

**Rodapé:** no estilo do rodapé da referência — "Débora Delgado · deboradelgado.space" · `[[ FALTA: CPF/CNPJ ]]` · "Ao acessar esta página, você está de acordo com: Termos de Uso | Política de Privacidade" (links `[[ FALTA ]]`) · e, em texto pequeno: "Este quiz é um ponto de partida, não um diagnóstico de personalidade. Ele não indica o seu tipo no Eneagrama."

---

## 5. Técnico

| Item | Regra |
|---|---|
| Entrega | pasta `quiz/` pronta para subir: `index.html` + `styles.css` + `app.js` + `assets/` (Inter `.woff2` tirada do clone) |
| Código | **próprio, do zero**, HTML/CSS/JS puros. Reproduzir o CSS e o comportamento medindo a referência (classes, variáveis, breakpoints). **Sem framework, sem CDN, sem script de terceiro** |
| Estado | em memória. Sem localStorage/sessionStorage |
| Planilha | `apps-script/Code.gs` + `LEIA-ME.md` escritos do zero · envio no submit da captura · **colunas do v4 §5 (53), nesta ordem, gravando os códigos** · `LEADS_ENDPOINT = ""` → não envia e faz `console.info` do payload · falha de rede não trava o resultado |
| Eventos | `window.dataLayer` com `quiz_start`, `quiz_answer` (nº da tela), `lead_submit`, `quiz_result` (nível e alavanca). Nenhum pixel |

---

## 6. Saída e gate

**Onde:** `clientes/Débora Delgado/execução Codex/quiz-norte-v5-2026-10-03/` (`quiz/` · `apps-script/` · `MAPA-REFERENCIA.md` · `README.md`) + linha no `STATUS-CODEX.md`.

**Trabalhar em etapas e parar com evidência ao fim de cada uma:** 0 mapa → 1 CSS e componentes → 2 fluxo e copy → 3 cálculo e resultado → 4 planilha → 5 gate.

- [ ] **Pares lado a lado** (referência × nosso) em 390 e 1440 px para: abertura, grade de idade, pergunta em lista, inserção, captura, carregamento e resultado. Diferença só de conteúdo e imagens
- [ ] Sem rolagem horizontal em 360 / 390 / 768 / 1440; botão fixo do resultado não cobre conteúdo
- [ ] Copy idêntica às fontes (v3, v4 e este contrato); nada de texto a mais
- [ ] Cálculo: limites do v4 §3 · empates · "todas iguais" mostra só a alavanca · barras direitas pela fórmula do §4
- [ ] T10: par lado a lado com a página final da referência em 390 e 1440 px; o botão leva à `VSL_URL` com os parâmetros
- [ ] Percursos: nível 1, 2 e 3 · cada área como alavanca · os 4 valores dos cards B, C e D
- [ ] Payload com as 53 colunas (print do `console.info`)
- [ ] Network sem domínio externo; nenhum endpoint, pixel ou domínio ativo
- [ ] Nenhum tipo ou número de tipo do Eneagrama exibido
- [ ] Léxico vetado na tela: `grep -iE "padrão|talento|motivação|do jeito d|extrair|performance|programar"` → 0
- [ ] Ao ler arquivos no PowerShell: `-Encoding UTF8`. Nada de extrair copy do markdown por script — escrever à mão e conferir

## 7. Proibido decidir

- alterar qualquer coisa da UI/UX da referência além de tirar imagens
- criar ou ajustar texto · acrescentar tela da referência que não esteja no §3
- reaproveitar código do quiz do Guilherme ou das versões anteriores
- mostrar pontos (só nível e porcentagem)

## 8. Fecho

ARQUIVOS ALTERADOS · GATE item a item com os prints · TRAVEI EM · PENDÊNCIAS (`VSL_URL`, `LEADS_ENDPOINT`, CPF/CNPJ, links legais).


---

# ANEXO A — copy de perfil, inserção, desejo e captura (cópia literal da v3 §2)

> **Vale só:** T1 a T6 e T15 (desejo). **Ignorar** T7–T14, T16, T17 e T18 deste anexo — o resultado é o do §4 e §4-bis deste contrato, e a captura é o Anexo C. Qualquer menção a "v1" aqui dentro **não** pede abrir outro arquivo.

### 2. Copy travada (literal)

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

---

# ANEXO B — situações, cálculo, resultado por área e planilha (cópia literal da v4 §2 a §5)

> **Vale:** as 25 situações, a inserção T17 (aqui = I2), o cálculo, o **item 3** (nomes das 5 áreas) e o **item 5** (textos de alavanca) do resultado, e a planilha. **Os demais itens do resultado deste anexo são substituídos pelo §4 deste contrato.** Menções a "v1/v3" aqui dentro **não** pedem abrir outro arquivo.

### 2. As 25 situações

### Área 1 · Pedir e delegar (`d1`)
**s1** · "Você pede uma entrega e ela volta diferente do que você imaginou. O que você pensa primeiro?"
0 "Que a pessoa não prestou atenção." · 1 "Que eu deveria ter detalhado mais." · 2 "Que talvez ela tenha entendido o pedido de outra forma." · 3 "Que eu preciso entender como essa pessoa recebe um pedido antes de fazer o próximo."

**s2** · "Antes de delegar uma tarefa importante, você…"
0 "Explica uma vez e confia que a pessoa vai entender." · 1 "Explica com bastante detalhe, igual para todos." · 2 "Pergunta se ficou claro." · 3 "Pede para a pessoa contar como vai fazer, para ver como ela entendeu."

**s3** · "Um prazo combinado não foi cumprido. Você pensa…"
0 "Que faltou compromisso." · 1 "Que eu deveria ter acompanhado mais de perto." · 2 "Que talvez o prazo não tenha feito sentido para ela." · 3 "Que preciso entender como essa pessoa se organiza com prazos."

**s4** · "Quando alguém não entrega, a primeira coisa que você faz é…"
0 "Cobrar de novo, mais firme." · 1 "Explicar de novo, com mais detalhe." · 2 "Perguntar o que travou." · 3 "Rever como pediu, e se aquela pessoa entende pedidos assim."

**s5** · "Quando você precisa que algo saia de primeira, você…"
0 "Faz você mesmo." · 1 "Passa para quem sempre entrega." · 2 "Passa e acompanha de perto." · 3 "Escolhe a quem passar e como explicar, de acordo com a pessoa."

### Área 2 · Feedback e cobrança (`d2`)
**s6** · "Quando você dá um feedback, você…"
0 "Fala como você gostaria de ouvir." · 1 "Usa o mesmo roteiro com todo mundo." · 2 "Ajusta o tom conforme a pessoa." · 3 "Pensa antes no que essa pessoa precisa ouvir para conseguir agir."

**s7** · "Depois de um feedback difícil, a pessoa fica na defensiva. Você…"
0 "Conclui que ela não aceita crítica." · 1 "Recua para não piorar o clima." · 2 "Explica de novo, com outras palavras." · 3 "Entende o que aquilo ameaçou nela e retoma por esse caminho."

**s8** · "Para reconhecer um bom trabalho, você…"
0 "Não costuma reconhecer: fazer bem é obrigação." · 1 "Elogia em público, igual para todos." · 2 "Elogia quando lembra." · 3 "Sabe que cada pessoa valoriza um tipo de reconhecimento, e reconhece assim."

**s9** · "Você precisa cobrar a mesma coisa pela terceira vez. Você…"
0 "Cobra mais firme." · 1 "Desiste e resolve sozinho." · 2 "Pergunta o que está acontecendo." · 3 "Muda a forma de pedir, porque a anterior não chegou."

**s10** · "Quando um feedback seu dá certo, você acha que foi porque…"
0 "A pessoa finalmente entendeu." · 1 "Eu fui firme." · 2 "O momento era bom." · 3 "Eu falei de um modo que fazia sentido para aquela pessoa."

### T17 · inserção de meio
- **Título:** "Você está na metade."
- **Texto:** "Até aqui, as situações mostram como você pede e como dá feedback. Agora vêm a escuta, os conflitos e o quanto você conhece quem lidera."
- **Botão:** "Continuar"

### Área 3 · Escuta e comunicação (`d3`)
**s11** · "Um liderado traz um problema com muitos detalhes e deixa o principal para o final. Você…"
0 "Interrompe e pede para ir direto ao ponto." · 1 "Escuta, mas já impaciente, pensando na resposta." · 2 "Pergunta qual decisão ele precisa de você." · 3 "Entende que é assim que ele organiza o raciocínio, e ajusta como escuta."

**s12** · "Uma pessoa do time quase não fala nas reuniões. Para você, isso é…"
0 "Falta de iniciativa." · 1 "Timidez, que ela precisa superar." · 2 "Algo que eu respeito, mas não sei como lidar." · 3 "Sinal de que ela participa de outra forma, e eu pergunto como prefere contribuir."

**s13** · "Você explica uma ideia e a pessoa não entende. Você…"
0 "Repete do mesmo modo, mais devagar." · 1 "Explica com mais detalhes." · 2 "Usa um exemplo." · 3 "Pergunta como ela entendeu, para saber por onde explicar."

**s14** · "Enquanto alguém do time fala com você, na maior parte do tempo você está…"
0 "Pensando na resposta." · 1 "Esperando a pessoa chegar ao ponto." · 2 "Prestando atenção no que ela diz." · 3 "Prestando atenção no que ela diz e no que aquilo mostra sobre ela."

**s15** · "Duas pessoas do time discutem e parecem falar de coisas diferentes. Você…"
0 "Decide quem tem razão." · 1 "Pede para os dois se acalmarem." · 2 "Ouve cada um separadamente." · 3 "Percebe que estão falando línguas diferentes e traduz um para o outro."

### Área 4 · Conflitos e relações (`d4`)
**s16** · "Alguém do time é direto demais e às vezes soa agressivo. Você…"
0 "Chama a atenção para a postura." · 1 "Evita conversas difíceis com essa pessoa." · 2 "Tenta entender o que está por trás dessa reação." · 3 "Sabe que muitas vezes isso é proteção, e conversa a partir daí."

**s17** · "Alguém do time te irrita com frequência. Você…"
0 "Evita trabalhar com essa pessoa." · 1 "Tolera, mas a irritação aparece." · 2 "Tenta separar o pessoal do profissional." · 3 "Procura entender o que nela é diferente de você, e o que ela protege."

**s18** · "Uma pessoa do time discorda de quase tudo. Você vê isso como…"
0 "Falta de respeito." · 1 "Implicância." · 2 "Um estilo que cansa, mas às vezes ajuda." · 3 "A forma dela de testar se a ideia é segura, e algo que dá para usar a favor do time."

**s19** · "Quando um conflito no time se repete, você…"
0 "Espera que se resolva sozinho." · 1 "Chama os envolvidos e define uma regra." · 2 "Conversa com cada um." · 3 "Entende o que cada um está protegendo e conduz a partir disso."

**s20** · "Depois de um conflito resolvido, a relação com a pessoa…"
0 "Fica distante." · 1 "Fica cordial, mas fria." · 2 "Volta ao normal com o tempo." · 3 "Fica mais leve, porque eu entendi o que aconteceu do lado dela."

### Área 5 · Conhecer quem você lidera (`d5`)
**s21** · "Uma pessoa do time vê risco em tudo o que é novo. Para você, isso é…"
0 "Resistência, que atrasa o time." · 1 "Pessimismo, que eu preciso contornar." · 2 "Cuidado, que às vezes exagera." · 3 "A forma como ela protege o time — e uma informação útil, se eu souber usar."

**s22** · "Uma pessoa precisa de mais silêncio e privacidade do que o resto do time. Você…"
0 "Acha que ela precisa se integrar mais." · 1 "Respeita, mas acha estranho." · 2 "Dá espaço quando percebe." · 3 "Combina com ela como prefere receber demandas e retornos."

**s23** · "Se alguém te perguntasse o que move cada pessoa do seu time, você…"
0 "Diria que todos querem a mesma coisa: crescer e ganhar mais." · 1 "Saberia responder sobre uma ou duas pessoas." · 2 "Teria um palpite sobre a maioria." · 3 "Saberia dizer sobre cada uma."

**s24** · "Quando uma pessoa nova entra no time, você…"
0 "Passa as regras e espera que ela se adapte." · 1 "Deixa o tempo mostrar como ela é." · 2 "Conversa para conhecer o histórico dela." · 3 "Procura entender cedo como ela funciona, para saber como pedir e como acompanhar."

**s25** · "Pensando no seu time hoje, você diria que…"
0 "Se todos trabalhassem como eu, as coisas andariam." · 1 "As pessoas são diferentes, mas o pedido tem que ser o mesmo para todos." · 2 "Sei que as pessoas funcionam diferente, mas não sei bem como." · 3 "Conheço como cada pessoa funciona e uso isso para direcionar."

> **Procedência (para o revisor):** s1, s4, s6, s11, s16, s21, s22, s25 = as 8 da v1, com fonte. s15 "línguas diferentes" `[17/08 00:25:26]` · s7, s17, s19, s20 "proteção / o que a pessoa protege / mais leve" `[16/09 10:27:01–10:27:56]` · s23 "o que move" `[E30-25]` · s24 `E30-11`. As demais são situações de gestão sem cena atribuída ao ICP.

---

### 3. Cálculo

| | Faixa | Regra |
|---|---|---|
| **Total** | `soma` 0–75 | `nivel` = **1** (0–28) · **2** (29–53) · **3** (54–75) · `pct = round(10 + soma/75 × 85)` |
| **Por área** | `d1`…`d5`, 0–15 cada | nível da área = **1** (0–5) · **2** (6–10) · **3** (11–15) · `pct_dX = round(10 + dX/15 × 85)` |
| **Ponto mais forte** | maior `dX` | empate: a área de número menor |
| **Maior alavanca** | menor `dX` | empate: a área de número menor · **se forte e alavanca forem a mesma área (todas iguais), mostrar só a alavanca** |

---

### 4. Resultado (T36) — nesta ordem

1. **Barra geral:** "Seu nível de leitura das pessoas do seu time" · `pct`
2. **Título e texto do nível geral:** v3 §2, T18 (tabela dos três níveis), literal
3. **"O seu nível em cada área"** — cinco barras, uma por área, rótulo = nome da área + "Nível {1|2|3}" + `pct_dX`:
   "Pedir e delegar" · "Feedback e cobrança" · "Escuta e comunicação" · "Conflitos e relações" · "Conhecer quem você lidera"
4. **"Seu ponto mais forte: {área}."**
5. **"Onde está a sua maior alavanca: {área}."** + o texto da área:

| Área | Texto |
|---|---|
| `d1` | "É onde o combinado se perde: o pedido sai claro para você e chega de outro modo para quem recebe." |
| `d2` | "É onde mais esforço se perde: o feedback sai como você gostaria de ouvir, e não como a pessoa consegue ouvir." |
| `d3` | "É onde mais coisa passa sem ser vista: você escuta o que a pessoa diz, mas ainda não o que aquilo mostra sobre ela." |
| `d4` | "É onde está o maior desgaste: o comportamento que incomoda costuma ser proteção, e enquanto isso não fica claro, a relação pesa." |
| `d5` | "É a base de todas as outras: sem saber como cada pessoa funciona, todo pedido vira tentativa." |

6. **Parágrafo do desejo:** v3 §2, T18, literal
7. **Ponte, botão e rodapé:** v1 §3.5, literal

---

### 5. Planilha — o da v3 §3, com estas colunas, nesta ordem

`ts` · `nome` · `whatsapp` · `email` · `genero` · `idade` · `time` · `tempo` · `eneagrama` · `s1`…`s25` · `d1` · `d2` · `d3` · `d4` · `d5` · `soma` · `nivel` · `pct` · `forte` · `alavanca` · `desejo` · `utm_source` · `utm_medium` · `utm_campaign` · `utm_content` · `utm_term` · `url` · `user_agent`

> Contagem: 9 + 25 + 5 + 3 + 3 + 8 = **53 colunas.** (`forte` e `alavanca` gravam `d1`…`d5`.)

---

---

# ANEXO C — tela de captura (cópia literal da v1 §3.4)

### 3.4 Tela de captura (antes do resultado)

- **Título:** "O seu norte está pronto."
- **Corpo:** "Para onde enviamos o seu resultado?"
- **Campos:** Nome (obrigatório) · WhatsApp com DDD (obrigatório) · E-mail (opcional)
- **Consentimento (texto sob o botão):** "Ao continuar, você concorda em receber o seu resultado e conteúdos da Débora Delgado. Seus dados não são compartilhados."
- **Botão:** "Ver o meu norte"
- **Erro:** "Preencha nome e WhatsApp para ver o resultado."
