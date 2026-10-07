# ENTREGA DO SITE — conduta, mensagem e documento

> 🔴 **REVISADO NO MESMO DIA. A mensagem vigente é a da §7.** As §§3 e 4 foram escritas antes de lermos a conversa de 17–21/09 e **pedem à cliente quatro decisões das quais três já estavam resolvidas** — uma por resposta dela, duas por fonte que já tínhamos. Preservadas abaixo como registro do erro; **não enviar.** Base da revisão: `REGISTRO-INTERACAO-2026-09-20.md`.

> **Tipo:** registro de interação + peça pronta · **Data:** 25/09/2026 · **Dono:** Victor
> **Estado do trabalho:** site concluído e auditado em **21/09**. Parado há **4 dias**, sem pendência técnica.
> **Voz:** `10-skills/voz-victor.skill.md` — REGRAS Nº 1 (zero diminutivo), Nº 2 (nunca da posição de quem pede) e Nº 5 (teto de elogio).

---

## 1. O DIAGNÓSTICO, E ELE INVERTE O PEDIDO

O pedido foi: *"linguagem que reduza a expectativa e aumente a percepção de valor."* **A linguagem é a última alavanca disponível aqui, e é a mais fraca das três.** As duas anteriores são o tempo e a arquitetura da entrega.

### 1.1 🔴 O silêncio é o que infla a expectativa — não o trabalho

**Quatro dias sem notícia é o oposto da estratégia pretendida.** Quem espera uma entrega grande e não recebe sinal não baixa a expectativa: **constrói a própria versão do que está vindo, e essa versão não tem limite de orçamento, prazo nem física.**

> **Cada dia parado aumenta exatamente a variável que se queria reduzir.** A linguagem da mensagem vai ter que cobrir uma distância que o silêncio criou — e que não existia em 21/09.

⚠️ **E há um segundo custo, invisível:** o site está pronto e as páginas antigas continuam no ar. As duas publicadas hoje carregam decisões que ela mesma revogou em 02/09. **O que está rodando agora é pior do que o que está parado na pasta.**

### 1.2 O que de fato reduz expectativa, e não é adjetivo modesto

**Lista de pendências reduz expectativa melhor que qualquer frase humilde** — e ao contrário dela, não custa autoridade.

| Frase modesta | Lista de pendências |
|---|---|
| *"fiz o que deu"* | *"faltam quatro decisões suas"* |
| diz que o trabalho é pequeno | diz que o trabalho **não terminou** |
| põe quem escreve na posição de quem pede (**REGRA Nº 2**) | põe quem escreve na posição de quem conduz |
| ela avalia | ela **participa** |

**O instrumento já existe pronto no pacote.** O `LEIA-ANTES-DE-PUBLICAR.md` é literalmente uma lista de gates que dependem dela. **Nunca precisou ser escrito: precisava ser filtrado e enviado.**

### 1.3 ⭐ O que aumenta percepção de valor, e não é elogio ao próprio trabalho

**Não é dizer que foi difícil. É mostrar o que ela não sabia — sobre o material dela.**

A conta tem três achados desta natureza, e o terceiro é o mais forte porque **é sobre o trabalho dela, não sobre o nosso**:

| # | Achado | Por que funciona |
|---|---|---|
| 1 | **A pasta dela tem 73 imagens. O site usava três.** | ela mandou e esqueceu. Devolver isso é devolver patrimônio |
| 2 | **As sete passagens do Despertar tinham nome nos cards dela, e a página dizia "Passagem" sete vezes** | erro concreto, corrigido, sem culpar ninguém |
| 3 | 🔴 ⭐ **Ela escreveu que "praticamente todas trazem a palavra CONFIANÇA". Confiança aparece em 3 de 4. EXPRESSÃO aparece em 4 de 4.** | **ela leu os próprios depoimentos e viu uma coisa; nós lemos e vimos outra, mais forte e unânime.** Prova de atenção que nenhum adjetivo compra |

> **A régua: percepção de valor sobe quando o cliente descobre que foi lido com mais atenção do que ele leu a si mesmo.** Isso não se afirma — se demonstra, e cabe em três frases.

### 1.4 Sobre a crítica dela, e isto é operacional

Cliente que critica muito é cliente **engajado** — e engajamento é o insumo mais caro que existe. O risco nunca foi a crítica: **é o vácuo em que a crítica cresce sem interlocutor.**

🔴 **E a regra de conduta, que vale acima de tudo o que está escrito aqui: a entrega não se apresenta pedindo desculpa.** Vinte e sete páginas em três idiomas, com Lighthouse entre 90 e 97 e nota 100 em acessibilidade, boas práticas e SEO nas 27, não se apresenta de joelhos. **Reduzir expectativa é sobre o que ainda falta. Nunca sobre o que foi feito.**

**Os quatro tells a varrer antes de enviar** (`voz-victor.skill.md` §9): justificar o tempo · minimizar a entrega (*"fiz uma versão inicial"*) · gratidão performática repetida · pedir permissão para existir (*"quando você puder"*, *"se não for incômodo"*).

---

## 2. A ARQUITETURA DA ENTREGA — decisão de estrutura

**Duas camadas, nesta ordem. A inversão está na primeira.**

| | Se ela abre… | Posição de cada um |
|---|---|---|
| ❌ **Errado** | *"terminei o site, dá uma olhada"* | ele **apresenta**, ela **julga** |
| ✅ **Certo** | *"está pronto e travado em quatro decisões que são suas"* | ele **conduz**, ela **participa** |

**A mesma entrega. A posição é que muda — e é ela que determina se a primeira reação é crítica ou decisão.**

### 2.1 🔴 O formato: ela é visual, então a entrega é navegável

Ela disse *"pra mim tem que ser muito visual o negócio"* e *"eu sou muito estética, eu gosto de imagem"*. **Mandar um PDF que descreve um site é entregar a pior versão do que existe.**

**Decisão: a entrega principal é um link navegável, protegido.** Sobe o `_entrega/site/` num link temporário com senha — Netlify Drop, Vercel ou subpasta do domínio dela com `.htpasswd`. ⚠️ **O pacote está com `index,follow`: prévia pública sem proteção entra em buscador antes de a decisão ser tomada.**

O documento da §4 vai junto, e é **de uma página**. Ele não descreve o site — só carrega as quatro decisões.

---

## 3. A MENSAGEM — pronta para enviar

> **Enviar em blocos separados no WhatsApp**, na ordem abaixo. Link primeiro, porque ela é visual e vai abrir antes de terminar de ler.

---

**Bloco 1**

> Prana, o site está pronto.
>
> [link] — senha: [x]

**Bloco 2**

> Nove páginas, em português, inglês e espanhol. Vinte e sete no total.
>
> O Templo Dourado abre o site. A Visão Uterina, a mentoria e o Despertar viraram páginas dentro dele, e não endereços separados.

**Bloco 3**

> Três coisas apareceram no caminho e mudaram o resultado.
>
> A pasta que você me mandou tem 73 imagens suas. O site usava três. Agora cada dobra de cada página tem um elemento seu — a rosa com orvalho, o selo das najas, o Sri Yantra, o portal.
>
> As sete passagens do Despertar têm nome nos seus cards, e a página de vendas dizia "Passagem" sete vezes. Agora estão nomeadas, com a arte de cada uma.
>
> E os quatro depoimentos. Você me escreveu que praticamente todas trazem a palavra confiança. Confiança está em três das quatro. **Expressão está nas quatro.** Nenhuma delas combinou entre si, e é a palavra que elas usam para contar o que mudou.

**Bloco 4**

> O site não sobe ainda. Tem quatro decisões que só você pode tomar, e elas estão no documento que vai aqui.
>
> Quando você me responder essas quatro, eu subo.

---

### 3.1 Por que cada bloco está assim

| Bloco | O que faz | A regra que obedece |
|---|---|---|
| **1** | abre pelo resultado, não pelo processo. Sem justificar o tempo | REGRA Nº 2 — não escrever da posição de quem pede |
| **2** | escala sem adjetivo. *"Vinte e sete"* carrega sozinho | REGRA Nº 5 — teto de elogio |
| **3** | valor por descoberta, não por afirmação. **Zero frases sobre nós** | §1.3 · REGRA Nº 5 |
| **4** | o pivô. *"Está pronto"* **E** · *"não sobe ainda"* **MAS** · *"quando você responder, eu subo"* **POR ISSO** | REGRA Nº 4 — pivô apontável em uma frase |

**O que foi deliberadamente deixado de fora:** qualquer menção ao tempo que levou · *"espero que goste"* · *"qualquer coisa me avisa"* · *"dei o meu melhor"* · pedido de feedback. **Feedback ela dá sem ser convidada — convidar só transfere a condução.**

⚠️ **E o Bloco 4 termina em decisão, não em espera.** *"Quando você me responder, eu subo"* é compromisso nosso com condição objetiva. *"Fico no aguardo"* seria a **REGRA Nº 7** sendo quebrada — nunca fechar com metáfora de espera.

---

## 4. O DOCUMENTO QUE VAI JUNTO — uma página

> **Título: `Quatro decisões antes de o site subir`**

---

### O que está pronto

Nove páginas, em três idiomas. O Templo Dourado na frente; a Visão Uterina, a mentoria e o Despertar dentro dele.

Tudo funciona sem depender de nada externo: as páginas carregam, navegam e leem em celular, tablet e computador, e continuam legíveis se a internet da visitante cair no meio.

### O que falta, e é seu

**1 · O vídeo da Carol**

O site reserva o lugar dele na página inicial, nos três idiomas. **Só entra com a sua autorização expressa** — os quatro depoimentos escritos já estão autorizados e publicados; o vídeo não.

**Resposta: sim ou não.**

**2 · "Desde 2021"**

A frase aparece em quatro páginas: *"Desde 2021, a versão individual desta jornada vem sendo vivida e refinada."* **Números não confirmados não entram por conta própria.**

**Resposta: confirma o ano, ou me diga qual é.**

**3 · A música**

Você falou em tocar uma música quando a pessoa entra. O site tem o botão de som, desligado por padrão — áudio que toca sozinho é bloqueado pelo navegador e afasta quem chega.

**Resposta: qual faixa, e o link dela. Ou "por enquanto não".**

**4 · Os singles e os DJ sets**

A página de arte hoje leva aos seus canais oficiais. Cada trabalho individual só entra se você disser qual é.

**Resposta: a lista com os links. Ou "só os canais, por enquanto".**

### O que não está nesta lista, e é nosso

Revisão das versões em inglês e espanhol · ajuste de textos internos · teste em aparelho físico · configuração de domínio e hospedagem. **Nada disso depende de você.**

---

## 5. A CONDUÇÃO DEPOIS DO ENVIO

| Se ela… | Conduta |
|---|---|
| **critica um detalhe visual** | é objeção de congruência, e ela tem esse direito. **A estrutura é nossa; o gosto dentro dela é conversa.** Mudar, ou explicar por escrito por que não. Nunca silêncio, nunca acatamento automático (`REGRA Nº 0`) |
| **pede mudança que quebra conversão** | *"Consigo fazer. Antes disso: essa parte está assim porque [razão em uma frase]. Se ainda fizer sentido para você, eu mudo."* Uma frase, não uma defesa |
| **responde só uma das quatro** | responder o que der para responder e **repetir as três que faltam na mesma mensagem.** Lista curta não cansa |
| **some** | 🔴 **pressupor o momento, nunca a intenção** (`REGRA Nº 8`). *"Prana, imagino que a semana esteja cheia. As quatro seguem abertas; quando você responder, eu subo."* |
| 🔴 **pede coisa nova** | **fecho de escopo na mesma mensagem** (`REGRA Nº 5.3`): *"Consigo fazer. Isso está fora do que a gente fechou — te mando como fica."* **Três calls seguidas sem uma frase sobre o nosso lado é o padrão registrado desta conta.** Não repetir |

---

## 6. O QUE ISSO CUSTOU, PARA NÃO REPETIR

| Fato | Medida |
|---|---|
| Site concluído e auditado | **21/09/2026** |
| Entregue | **não, até 25/09** |
| Parado | **4 dias**, sem pendência técnica |
| Causa nomeada por Victor | *"travei por causa de crenças, devido a várias críticas dela sobre e o possível nível altíssimo de expectativa"* |
| Efeito real | as páginas antigas seguiram no ar, **com decisões que ela mesma revogou em 02/09** |

> 🔴 **A régua que sai daqui: entrega pronta que não sai da casa não é entrega — é estoque.** E estoque de trabalho intelectual **perde valor todo dia**, porque a expectativa de quem espera cresce sozinha enquanto o produto fica parado.

**O mecanismo que evita a repetição, e é de processo, não de disciplina:** pacote fechado pelo Codex entra na fila do `STATUS-CODEX.md` **na mesma tarefa** — e pendente há mais de 48h **abre a sessão, antes do que foi pedido** (`RITO-INTEGRACAO-CODEX.md`). **Este pacote ficou 4 dias fora da fila. É a terceira vez que isso acontece**, e as três estão registradas na mesma tabela.

---

## 7. ⭐ A ENTREGA REVISADA — depois de ler a conversa de 17 a 21/09

### 7.1 O que a conversa mudou

| Antes de ler | Depois de ler |
|---|---|
| quatro decisões para ela | **uma** — o preço do Curso. As outras três já estavam resolvidas (`REGISTRO-INTERACAO-2026-09-20.md` §2.4) |
| cliente crítica, expectativa alta | **nas últimas cinco mensagens: gratidão, interesse, e ela pedindo desculpa pelas demoras dela** |
| entrega de site | **entrega de site + a porta de um produto novo que ela mesma abriu** — curso de ~R$ 297, *"iniciando-se na sexualidade sagrada"* |
| silêncio nosso | silêncio **dela** desde 21/09, depois de um convite sem data |

**O que isso faz com a estratégia:** a entrega deixa de ser só entrega. **É o único motivo legítimo para retomar a conversa do funil sem parecer cobrança** — e o site pronto é a prova de capacidade que torna a conversa séria.

### 7.2 Antes de subir — três ajustes no pacote do Codex

| # | Ajuste | Onde |
|---|---|---|
| 1 | Visão Uterina: **"1h30 · online ou presencial"** | PT, EN, ES |
| 2 | Curso: **preço oculto até ela confirmar.** CTA segue no estágio 1 (WhatsApp) — o preço vai na conversa, como na Mentoria | PT, EN, ES |
| 3 | Home: **vídeo da Carol no lugar do `[COPY PENDENTE]`**, autorizado por destinação | PT, EN, ES |

### 7.3 A mensagem — vigente

> Blocos separados, nesta ordem.

**Bloco 1**

> Prana, o site está pronto.
>
> [link] — senha: [x]

**Bloco 2**

> Nove páginas, em português, inglês e espanhol. Vinte e sete no total.
>
> O Templo Dourado abre o site, e a Visão Uterina, a mentoria e o Despertar viraram páginas dentro dele. A Visão Uterina já está com o que você me mandou: R$ 333, 1h30, online ou presencial.

**Bloco 3**

> Três coisas apareceram no caminho e mudaram o resultado.
>
> A pasta que você me mandou tem 73 imagens suas. O site usava três. Agora cada parte de cada página tem um elemento seu — a rosa com orvalho, o selo das najas, o Sri Yantra, o portal.
>
> As sete meditações do Despertar têm nome nos seus cards, e a página dizia "Passagem" sete vezes. Agora estão nomeadas, com a arte de cada uma.
>
> E os depoimentos. Você me escreveu que praticamente todas trazem a palavra confiança. Confiança está em três das quatro. **Expressão está nas quatro.** Nenhuma delas combinou entre si, e é a palavra que elas usam para contar o que mudou.

**Bloco 4**

> Uma decisão é tua: o preço do Despertar. A página estava em R$ 97, e no teu áudio você falou em 297 para um curso de entrada. Até você me confirmar, ele fica sem preço na página e a venda passa pela conversa.
>
> Olha com calma. Se não tiver nada que você queira mudar, eu subo na segunda.

**Bloco 5**

> Sobre o que você perguntou: resposta direta não é o comentário que devolve um link — isso é automação. É a estrutura inteira que leva quem ainda não te conhece até a compra, com cada peça medida pelo resultado.
>
> E o curso de entrada que você descreveu no áudio é exatamente a peça que falta pra ela funcionar.
>
> Te mostro numa conversa de uma hora. Terça (29) às 15h ou quinta (1º) às 15h?

**Bloco 6**

> Uma coisa do meu lado: o site em três idiomas, com a página do Templo e as da escola, foi além das quatro páginas que a gente fechou. Isso entra junto nessa conversa.

### 7.4 Por que cada bloco está assim

| Bloco | O que faz |
|---|---|
| **2** | devolve os fatos dela **já aplicados**. Prova de escuta sem dizer *"eu ouvi"* |
| **3** | valor por descoberta sobre o material dela. Zero frases sobre nós |
| **4** | 🔴 **a única pergunta, e ela não bloqueia nada.** E *"se não tiver nada, eu subo na segunda"* troca *"aguardo sua aprovação"* por **data com direito de veto** — ela decide, mas o padrão é andar. Com o ritmo de resposta dela (dias), aprovação explícita como condição deixaria o site novo parado atrás das páginas velhas |
| **5** | 🔴 **responde a pergunta que ficou cinco dias sem resposta** — e é o que mais pesa: ela está interessada numa coisa que entendeu errado. Depois, **liga a ideia dela ao nosso método** (*"a peça que falta"*), e fecha com **dois horários**, não com *"se quiser, a gente conversa"* — o convite sem data de 21/09 terminou em silêncio |
| **6** | ⭐ **o fecho de escopo — uma frase, não uma negociação** (voz `REGRA Nº 5.3`). É a quarta conversa seguida sem uma frase sobre o nosso lado (`P-PM-09`). 🔴 **É também a alavanca de percepção de valor mais forte da mensagem inteira: valor que nunca é nomeado é percebido como incluído.** *"Entra junto nessa conversa"* não é conta: é agenda |

⚠️ **Os horários do Bloco 5 são sugestão — ajustar à agenda.** Quarta às 19h é o encontro da mentoria dela; evitar.

⚠️ **O Bloco 6 é decisão comercial da alçada do Victor.** A recomendação é mandar: sem ele, a conversa do funil começa com o site de 27 páginas já tratado como cortesia, e a primeira proposta nasce ancorada em zero.

### 7.5 Antes da call — o que precisa existir, e é nosso

| # | Item | Por quê |
|---|---|---|
| 1 | **benchmark de referência escalada** em sexualidade sagrada / bem-estar sexual feminino, Brasil e internacional | `REGRA Nº 2` do §8. **"Estrutura validada" foi dito em 21/09 e ainda não tem lastro no nicho dela** |
| 2 | **política de anúncios da Meta para o nicho + o histórico de bloqueio dela** | 🔴 ela contou que o Instagram foi bloqueado. Funil com mídia paga em sexualidade vive ou morre nessa política |
| 3 | **as 7 âncoras** para o funil **e** para a ampliação do site | `METODO-ANCORAGEM-DE-PROPOSTA.md`. Sem elas, preço vira adjetivo |
| 4 | **os dois gates do funil**: P1/P4 do teste de pilares e capital para 2–3 tentativas de mídia | `METODO-FUNIL-DE-VSL.md` §2. Capital de mídia é lacuna de FATO — **pergunta de call** |

---

## 8. ✅ ENVIADO — 27/09/2026, no grupo "Prana - Páginas de Vendas"

| Camada | Registro |
|---|---|
| **Fato** | mensagem da §7.3 enviada por Victor, com os ajustes da `AUDITORIA-SITE-PRODUCAO-2026-09-25.md` §6: link aberto `thegoldentemple.io`, sem senha · *"Se tiver algo que você queira mudar, me fala e eu ajusto."* no lugar da data de publicação |
| ✅ **Confirmado pela captura** | enviada às **00h53**, num bloco único, **com o Bloco 6 (fecho de escopo)**. Horários propostos: *"Terça às 15h ou quinta às 15h?"*, sem data escrita |
| **Resposta dela — 00h54, um minuto depois** | *"Querido, boa noite! Eu peço perdao que nao consegui te responder mais aqui nesses dias, fiz 3 ancoramentos de trabalhos mto fortes e passei ontem e hoje fazendo faxinas fortes em casa"* · *"Amanha de manha vou dar uma lida em tudo que mandou e me colocar em dia contigo ate a segunda ali"* · *"Gratidao por tudo"* |
| **Leitura** | 🟢 **terceira vez seguida em que quem pede desculpa pela demora é ela.** Nenhuma reação ao Bloco 6 — ela ainda não leu. **Compromisso dela: responder até segunda (28/09).** Horário da call em aberto |
| **Conduta** | uma linha no máximo, sem reabrir nenhum assunto: *"Boa noite, Prana. Lê com calma."* **Não repetir os horários nem o fecho de escopo** — ela já se comprometeu com a segunda. Se a segunda passar sem resposta, vale a retomada da linha abaixo |
| **Estado do site no envio** | L4 aprovado no domínio — `ITERACAO-SITE-2026-09-25.md` |
| **Tom** | entrega sem desculpa e sem pedido de aprovação; valor por descoberta sobre o material dela; uma pergunta de fato (preço do Despertar); convite com data |
| **Próximo passo** | resposta dela. **Se ela sumir, não repetir a mensagem:** após 72h, uma linha pressupondo o momento (`voz-victor` REGRA Nº 8) — *"Prana, imagino que a semana esteja cheia. Quando você olhar o site, me diz se terça ou quinta funciona pra gente conversar."* |

---

**Base:** `REGISTRO-INTERACAO-2026-09-20.md` · `execução Codex/site-2026-09/REGISTRO-2026-09-21.md` · `_entrega/LEIA-ANTES-DE-PUBLICAR.md` · `lexico-icp/BANCO.md` · `DIRECAO-VISUAL-PRANA.md` · `10-skills/voz-victor.skill.md` §§5-ter, 6, 9 · `DECISOES.md` DEC-2026-09-19-000 a 007
