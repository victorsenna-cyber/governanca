# BRIEFING PARA O CODEX — DOIS QUIZZES DO GUILHERME

> STATUS: PRONTO PARA EXECUÇÃO · **v2** · produção local, sem publicação
> v2 (02/10, Victor): UI idêntica à referência, sem nenhuma alteração de design · os dois quizzes perguntam renda · integração com planilha via Apps Script
> Data: 2026-10-02 · Autor: Claude (Cowork), a pedido de Victor
> Entrega esperada: **duas páginas de quiz** construídas sobre **um único motor**
> Referência de estrutura e de visual: `920-referências lp/lp02-profissaohomesales-com-arquivo-literal/`
> Contexto da conta: `DESTILACAO-WHATSAPP-2026-09-19-A-10-01.md` · `03 - ofertas e funis/QUIZ-PERMISSAO-PLANO-E-PARALELO-2026-10-01.md`
> **Este briefing prevalece sobre o plano de 01/10** onde houver diferença: ordem das perguntas, mapa entregue depois da sessão, fecho por compra direta.

---

## 0. Leia isto primeiro

1. **Toda a redação é feita fora do Codex. O Codex não escreve nenhuma palavra que o público leia.** Isso inclui headline, pergunta, opção, botão, rótulo, placeholder, mensagem de erro, texto alternativo, título da aba e descrição da página. A copy das telas está nas §6 e §7; a microcopy, na §16.
   - Não reescrever, não "melhorar", não encurtar, não completar.
   - **Se faltar um texto, não escreva.** Coloque no lugar o marcador `[[COPY PENDENTE: onde]]`, visível na tela, e liste no relatório. Texto faltando volta para redação; não se resolve na construção.
   - Se algo parecer errado, construa como está e registre a dúvida.
2. **Não há portão de `PILARES.md` nem de léxico D para esta tarefa.** Victor autorizou a redação; os fatos de oferta foram confirmados por ele e pelo Guilherme em 01/10.
3. **Depoimentos entram depois.** O Guilherme ainda vai enviar. Construir os espaços, deixá-los desligados (§9). Nenhum depoimento, número de alunos, print ou nome de cliente pode ser inventado ou trazido da referência.
4. **Nada da referência é reaproveitado como conteúdo**: nem texto, nem imagem, nem vídeo, nem número, nem dado legal. Dela vêm só a estrutura e o sistema visual.
5. Onde houver `⚠ CONFIG`, o valor fica em arquivo de configuração e a página **não pode ser publicada** enquanto estiver vazio.

---

## 1. O que construir

| | **Quiz 1 · PERMISSÃO** | **Quiz 2 · SIGNOS** |
|---|---|---|
| Público | terapeutas e mentoras | público geral que acompanha o próprio signo |
| O quiz faz | **constata** se a pessoa tem nível baixo de Permissão. Não mapeia | identifica o **elemento** e mostra como é o conselho semanal |
| Fecho | **Diagnóstico da Permissão** · sessão individual de 2h com o Guilherme · R$ 97 | **Grupo de Conselho Semanal** do elemento dela |
| Destino do botão | checkout PagTrust, um link | checkout PagTrust, **quatro links**, um por elemento |
| Linguagem | feminino ("você está pronta") | **neutra** — sem "pronto/pronta", sem "bem-vindo/a" |
| Telas | 24 (16 perguntas) | 16 (10 perguntas) |

**Os dois quizzes também são instrumento de dados.** Cada resposta é gravada, com chave estável, numa planilha (§10). Serve para qualificar o contato futuro e para **medir ponto A e ponto B**: a mesma pessoa refaz o quiz depois de um período de acompanhamento e as duas linhas são comparáveis. Por isso as chaves das perguntas e as opções **não podem mudar** depois de publicado sem subir a versão do quiz.

**Um motor, duas configurações.** Todo o conteúdo (telas, opções, pontos, textos condicionais, links) vive em dois arquivos de dados, um por quiz. O motor não contém texto.

---

## 2. Como usar a referência

O arquivo literal tem o quiz inteiro. O funil está em `arquivos/lp02.profissaohomesales.com/df1d516d6a881817-index.html`, dentro de `__NEXT_DATA__`, cifrado; as capturas em `_verificacao/original-mobile.png` e `original-desktop.png` mostram a abertura renderizada.

**Copiar da referência:**

- a largura estreita de coluna única, mobile-first;
- a hierarquia da tela de abertura: faixa de alerta → headline → subheadline → primeira pergunta **já na mesma tela**;
- o sistema de cores das headlines (§3.2);
- os componentes: barra de progresso, faixa de alerta, cartão de opção, tela de inserção, tela de carregamento, barra de métrica, cartão de argumento, bloco de preço, FAQ;
- as três mecânicas: primeira pergunta na abertura · inserção que reusa a resposta · eco das respostas no resultado.

**Não copiar:** qualquer texto, imagem, vídeo, número, selo de universidade, pilha de preços, cupom, cronômetro, bônus, dados de empresa.

---

## 3. Sistema visual — **idêntico ao da referência, sem nenhuma alteração**

**Decisão de Victor: fontes e cores são as originais. Nada de UI ou UX muda.** Este briefing não define design; ele aponta para a referência. O que muda entre a referência e as nossas páginas é **só o conteúdo**.

### 3.1 Fonte da verdade

A fonte da verdade é a página capturada, não esta seção. Abrir a cópia local (`ABRIR-COPIA.cmd` ou `_visualizacao/abrir.cjs`), percorrer o quiz e **ler os estilos computados** de cada componente: família e peso da fonte, tamanho, entrelinha, cor, fundo, raio, borda, sombra, espaçamento, altura, transição.

Reproduzir esses valores **exatamente**. Não arredondar, não "harmonizar", não trocar por equivalente.

Para conferência, a configuração do funil de referência declara:

| Token | Valor na referência |
|---|---|
| Fundo | `#ffffff` |
| Cor de título | `#030712` |
| Cor de texto | `#6b7280` |
| Cor de tema | `#000000` |
| Destaque positivo nas headlines | `rgb(22, 163, 74)` |
| Destaque negativo nas headlines | `rgb(220, 38, 38)` |
| Fonte de destaque e de texto | Inter |
| Raio | `rounded-2xl` |
| Altura dos elementos | 56 px |
| Largura do contêiner | `max-w-[28rem]` |
| Tamanho de texto | 16 px |

Se o estilo computado divergir desta tabela, **vale o estilo computado**.

### 3.2 Headlines — mesmo esquema de cores da referência

Cada headline nossa ocupa o lugar de uma headline da referência e **herda o estilo dela inteiro**. Só o texto muda.

| Nossa tela | Espelha na referência | O que herdar |
|---|---|---|
| T01 · S01 — abertura | tela 1 | faixa de alerta `warning` · H1 preto em negrito · H3 cinza `rgb(107,114,128)` em negrito, tamanho pequeno, com o primeiro termo sublinhado · linha "↓ RESPONDA PARA COMEÇAR ↓" · H2 da pergunta |
| perguntas | telas 2 a 8 | título da pergunta e cartões de opção |
| T04 · S02 — inserção com variável | tela 9 | H2 com a variável e o desfecho em verde |
| T09 · S09 — inserção de autoridade | tela 13 | texto de abertura, imagem, H2, alerta `success` |
| T16 — inserção condicional | tela 21 | H1 com destaque verde; uma variante por resposta |
| T18 · S12 — carregamento | tela 31 | componente de carregamento |
| T19 · S13 — resultado | tela 32 | "Aqui está o seu resultado…" · alerta cheio com texto branco · métrica · "Você respondeu que…" · cartões de argumento |
| T21 — comparação | tela 34 | H1 com um termo em vermelho e outro em verde · duas colunas |
| T23 · S15 — captura | tela 40 | título, campos, botão, texto de consentimento |
| T24 · S16 — oferta | tela 41 | H2 de abertura com nome e trecho em verde · alerta "role para baixo" · bloco do especialista · alertas · cartões · bloco de preço · botão · FAQ · rodapé |

**Marcação usada na copy deste briefing:** `<g>…</g>` é o verde da referência · `<r>…</r>` é o vermelho da referência · `<u>…</u>` é sublinhado. O que não tem marca usa a cor padrão do elemento. As marcas dizem **quais palavras** recebem destaque; **como** o destaque se parece é o da referência.

As duas páginas, por herdarem da mesma origem, saem com o mesmo esquema. Conferir lado a lado no aceite.

### 3.3 Onde a referência tem imagem e nós não temos

O componente de opção **não muda**: mesmo cartão, mesmo espaço de imagem, mesma proporção, mesma barra de rótulo. Muda só o que vai dentro do espaço:

- a plataforma da referência já aceita **emoji** como imagem — está em uso nos cartões de argumento da tela 41. Usar esse mesmo recurso nas opções, até existirem fotos reais;
- **não gerar foto de pessoa por IA**;
- o campo de imagem de cada opção fica na configuração, para troca posterior;
- **fotos do Guilherme**, as únicas reais: `05 - design e criativos/fotos Guilherme/` e `01 - Criativos/Diagnóstico da Permissão/`. Usar só nas telas indicadas, no mesmo lugar e proporção em que a referência usa a foto do especialista.

A resposta da cor do resultado no Quiz 1 usa os estilos de alerta **que a referência já tem**: `danger` para BAIXO, `warning` para MÉDIO, `success` para ALTO. Nenhum estilo novo.

---

## 4. Componentes do motor

**Todo componente se comporta como na referência.** A tabela lista o que existe; aparência e interação vêm de lá.

| Componente | Na referência |
|---|---|
| Barra de progresso e botão voltar | presentes desde a tela 1 |
| Opção de escolha única | grade ou linha, com espaço de imagem; tocar avança como na referência |
| Tela de inserção | texto, imagem, botão; aceita `{{variável}}` e variante condicional (tela 21) |
| Carregamento | barra com percentual, 5 s, avança sozinho (telas 31 e 39) |
| Alerta | estilos `warning`, `success`, `danger`, `light`; versão cheia e versão clara |
| Métrica | barra com rótulo (tela 32) |
| Argumento | cartão com texto, com ou sem imagem (telas 27, 32, 41) |
| Campo de formulário | texto, e-mail, telefone com máscara (tela 40) |
| Preço | bloco de preço (tela 41) |
| FAQ | sanfona, primeira aberta (tela 41) |
| Depoimento | bloco de citações (tela 35) — ver §9 |

**Não acrescentar comportamento que a referência não tem**: nada de animação nova, modal, microinteração. Se a referência não faz, não fazemos. **Botões fixos seguem a referência** (corrigido em 02/10: a versão anterior proibia botão fixo por engano). Em conflito de UI entre este briefing e a referência, vale a referência.

**Estado:** respostas em memória e em `sessionStorage`, para o voltar e para recarregar sem perder o ponto.

---

## 5. Triagem das perguntas da referência

A referência tem 27 perguntas. A maioria existe por causa do produto dela (renda extra pelo celular). Abaixo, o destino de cada uma.

| # | Pergunta da referência | Por que existe lá | Quiz 1 | Quiz 2 |
|---:|---|---|---|---|
| 1 | Homem ou mulher? | trocar as fotos das opções | **sai** · vira "Qual é a sua atuação?" | **sai** · vira "Qual é o seu signo?" |
| 2 | Idade | segmentar foto e tom | **sai** | **sai** |
| 3 | Tem filhos? | preparar a inserção "pense nos seus filhos" | **sai** | **sai** |
| 4 | Assiste vídeos curtos? | o produto é fazer vídeo | **sai** | **adapta** · "acompanha tiragens do seu signo?" |
| 5 | Com que frequência? | idem | **sai** | **sai** · fundida na anterior |
| 6 | **Tem celular com internet?** | requisito do produto dela | **sai** | **sai** |
| 7 | Rede que mais usa | idem | **sai** | **sai** |
| 8 | Tempo no celular | alimenta a inserção 1 | **adapta** · "quantas formações já fez?" | **sai** |
| 10 | Quanto ganha? | segmentar | **adapta** · faturamento com atendimentos | **adapta** · renda mensal |
| 11 | Satisfeito com o salário? | declarar a dor | **adapta** · "recebe o equivalente ao que entrega?" | **sai** |
| 12 | Deixou de fazer algo por dinheiro? | dor concreta | **adapta** · "na hora de dizer o preço…" | **sai** |
| 14 | Conflitos em casa por dinheiro? | dor emocional | **adapta** · "sente culpa depois de cobrar?" | **sai** |
| 15 | Compra o que quer ou o que consegue? | dor | **adapta** · "entrega mais do que foi combinado?" | **sai** |
| 16 | Frequência de preocupação | dor | **sai** · redundante | **adapta** · "como você começa a semana?" |
| 17 | Salário não fecha? | dor | **adapta** · "sobe e volta ao mesmo lugar?" | **adapta** · "sente que repete as mesmas situações?" |
| 18 | Consegue aumentar a renda no emprego? | dor → abertura | **adapta** · "ganhar mais que a família de origem" | **sai** |
| 19 | Já pensou em renda extra? | tentativas | **adapta** · "o que já tentou?" | **adapta** · "já fez uma leitura antes?" |
| 20 | O que te trava? | declarar a objeção | **adapta** · "o que mais te impede?" | **adapta** · "quando precisa decidir…" |
| 22 | Prefere aparecer ou não? | objeção do produto | **sai** | **sai** |
| 24 | R$ 5.000 faria diferença? | desejo | **sai** · redundante | **sai** |
| 25 | Primeira coisa que faria | desejo | **sai** · fundida | **sai** |
| 26 | Tempo disponível por dia | requisito do produto | **sai** | **sai** |
| 28 | Maior motivação | desejo | **adapta** · "o que mudaria primeiro?" | **adapta** · "o que mais quer de um conselho?" |
| 29 | Conta com R$ 5.000 hoje | desejo | **sai** · redundante | **sai** |
| 30 | O que mudaria na vida | desejo | **sai** · fundida na 28 | **adapta** · "em que área precisa de direção?" |
| 33 | Quão disposto está? | compromisso | **entra** | **sai** |
| 38 | Acredita que conseguiria com o plano? | micro-sim antes da captura | **entra** | **entra** |

**Perguntas novas, que a referência não tem:** no Quiz 1, "há quanto tempo atende", "já deu desconto sem pedirem" e a de família de origem; no Quiz 2, o signo.

**Saldo:** Quiz 1 com 16 perguntas · Quiz 2 com 10. **Os dois perguntam renda** (decisão de Victor): qualifica o contato e é o principal marcador de ponto A e ponto B.

---

## 6. QUIZ 1 · PERMISSÃO — tela a tela

Legenda: **[P]** pontua · **[V]** vira variável · 🔤 emoji da opção.

### T01 · Abertura + P1

- **Faixa (aviso):** `RESPONDA E DESCUBRA O SEU NÍVEL DE PERMISSÃO:`
- **H1:** `QUAL É O SEU <g>NÍVEL DE PERMISSÃO</g> PARA PROSPERAR COM O SEU TRABALHO?`
- **H3:** `<u>TESTE GRATUITO</u> PARA TERAPEUTAS E MENTORAS QUE ESTUDAM, ATENDEM BEM E SENTEM QUE O FINANCEIRO NÃO ACOMPANHA.`
- **Deixa:** `↓ RESPONDA PARA COMEÇAR ↓`
- **H2 · P1 [V `atuacao`]:** `Qual é a sua atuação hoje?`
- **Opções, grade 2×2:** 🌿 `Terapeuta` · 🧭 `Mentora` · 🃏 `Cartomante` · 🌱 `Estou começando a atender`
- **Rodapé:** `⚠ CONFIG` dados legais do Guilherme + links de Termos e Privacidade.

### T02 · P2

`Há quanto tempo você atende?` — ⏳ `Menos de 1 ano` · `De 1 a 3 anos` · `De 3 a 5 anos` · `Mais de 5 anos`

### T03 · P3 [V `formacoes`]

`Quantas formações ou cursos você já fez na sua área?` — 📚 `1 ou 2` · `De 3 a 5` · `Mais de 5` · `Já perdi a conta`

Valor da variável para uso em frase: `1 ou 2` · `de 3 a 5` · `mais de 5` · `tantas formações que perdeu a conta`.

### T04 · Inserção 1

- **H2:** `Você já fez <g>{{formacoes}}</g> formações. Conhecimento não parece ser o que está faltando.`
  Variante quando `formacoes` = "já perdi a conta": `Você já fez <g>tantas formações que perdeu a conta</g>. Conhecimento não parece ser o que está faltando.`
- **Texto:** `As próximas perguntas olham para outro lugar: o que acontece na hora de receber.`
- **[espaço de depoimento · desligado]**
- **Botão:** `Continuar`

### T05 · P4 [V `faturamento`] — não pontua, qualifica

`Quanto você fatura por mês com os seus atendimentos?` — 💰 `Até R$ 2 mil` · `De R$ 2 mil a R$ 5 mil` · `De R$ 5 mil a R$ 10 mil` · `Mais de R$ 10 mil`

### T06 · P5 [P]

`Você sente que recebe o equivalente ao que entrega?`

| Opção | Pontos |
|---|---:|
| ⚖️ `Não. Entrego muito mais do que recebo` | 3 |
| `Poderia ser melhor` | 2 |
| `Sim, recebo o que acho justo` | 0 |

### T07 · P6 [P] [V `reacao_preco`]

`Na hora de dizer o seu preço, o que acontece?`

| Opção | Pontos | Valor da variável |
|---|---:|---|
| 😶 `Travo e acabo falando um valor menor` | 3 | `trava e fala um valor menor` |
| `Falo, mas fico desconfortável` | 2 | `fala, mas fica desconfortável` |
| `Falo com tranquilidade` | 0 | `fala com tranquilidade` |

### T08 · P7 [P]

`Você já deu desconto sem a pessoa pedir?` — 🏷️ `Com frequência` **3** · `Algumas vezes` **2** · `Raramente` **1** · `Nunca` **0**

### T09 · Inserção 2 — mecanismo

- **Texto pequeno, cinza:** `Isso tem nome.`
- **H2:** `E não é <r>falta de técnica</r>.`
- **Imagem:** foto do Guilherme.
- **Texto:** `Em constelação a gente vê de onde isso costuma vir: quem cresce mais do que a mãe conseguiu crescer sente, sem perceber, que está abandonando alguém. Aí cobra menos, entrega mais, e chama isso de vocação.`
- **Faixa (sucesso, clara):** `É o que eu chamo de Permissão.`
- **Botão:** `Continuar`

### T10 · P8 [P]

`Depois de cobrar, você sente culpa?` — 😔 `Quase sempre` **3** · `Às vezes` **2** · `Raramente` **1** · `Nunca` **0**

### T11 · P9 [P]

`Você costuma entregar mais do que foi combinado?` — 🎁 `Sim, quase sempre` **3** · `Às vezes` **2** · `Não` **0**

### T12 · P10 [P]

`Seu faturamento sobe e depois volta para o mesmo lugar?` — 📉 `Sim, parece que existe um teto` **3** · `Oscila, mas vai crescendo devagar` **1** · `Não, cresce de forma consistente` **0**

### T13 · P11 [P]

`Quando você pensa em ganhar bem mais do que a sua família de origem ganhou, o que sente?` — 🌳 `Desconforto ou culpa` **3** · `Vontade e medo ao mesmo tempo` **2** · `Tranquilidade` **0**

### T14 · P12 [V `tentou`]

`O que você já tentou para resolver isso?` — 🔁 `Cursos de vendas e marketing` · `Mais formações na minha área` · `Terapia ou processos pessoais` · `Nunca trabalhei isso diretamente`

### T15 · P13 [V `impede`]

`O que mais te impede de cobrar o que acha justo?`

| Opção | Valor da variável |
|---|---|
| 🚧 `Medo de perder a cliente` | `o medo de perder a cliente` |
| `Medo de parecer interesseira` | `o medo de parecer interesseira` |
| `Sentir que ainda não estou pronta` | `a sensação de ainda não estar pronta` |
| `Não sei dizer` | `algo que você ainda não sabe nomear` |

### T16 · Inserção 3 — condicional pela resposta de T14

| Se `tentou` = | H2 |
|---|---|
| Cursos de vendas e marketing | `Técnica de venda ensina <g>o que dizer</g>. Não muda o que você sente na hora de dizer.` |
| Mais formações na minha área | `Estudar é confortável. <g>Vender é se colocar em exposição.</g>` |
| Terapia ou processos pessoais | `Você já olhou para muita coisa. Talvez ainda não tenha olhado para a <g>Permissão de receber</g>.` |
| Nunca trabalhei isso diretamente | `Faz sentido. Quase ninguém olha para isso, porque parece só <g>"o meu jeito"</g>.` |

**Botão:** `Continuar`. Esta tela só reenquadra; **não** apresenta a oferta.

### T17 · P14 [V `desejo`]

`Se essa trava saísse do caminho, o que mudaria primeiro?`

| Opção | Valor da variável |
|---|---|
| ✨ `Cobraria o valor que acho justo` | `cobrar o valor que acha justo` |
| `Teria mais clientes sem me sentir vendendo` | `ter mais clientes sem se sentir vendendo` |
| `Viveria só dos meus atendimentos` | `viver só dos seus atendimentos` |
| `Pararia de me sentir em dívida com todo mundo` | `parar de se sentir em dívida com todo mundo` |

### T18 · Carregamento

`Calculando o seu nível de Permissão com base nas suas respostas…` — 5 s.

### T19 · RESULTADO

- **Texto:** `Aqui está o seu resultado.`
- **Faixa de resultado, cheia, cor pelo nível:** `SEU NÍVEL DE PERMISSÃO HOJE: {{NIVEL}}`
- **Barra de métrica única:** rótulo `Permissão para receber`. Preenchimento = `100 − (pontos ÷ 21 × 100)`, arredondado, mínimo visual de 8%. Cor: a do nível.
- **Parágrafo por nível** — §8.2.
- **Subtítulo:** `Você respondeu que…`
- **Três cartões de argumento:**
  1. **Você já fez {{formacoes}} formações.** `Então o que falta não é conhecimento.`
  2. **Na hora do preço, você {{reacao_preco}}.** `É onde a Permissão aparece primeiro.`
  3. **O que mais te impede é {{impede}}.** `E isso raramente se resolve com técnica.`
- **Fecho, em negrito:** `O teste mostra onde a trava aparece. Ele não mostra de onde ela vem.`
- **Nota pequena, cinza:** `Este teste é um indicativo com base nas suas respostas. Não é diagnóstico clínico nem substitui acompanhamento profissional.`
- **Botão:** `Entender o próximo passo`

O resultado aparece **antes** da captura. Os anúncios prometem "descubra"; o nível não pode ficar atrás de formulário.

### T20 · P15

`Quão disposta você está a olhar para isso?` — 🔥 `Quero resolver agora` · `Quero entender melhor antes` · `Só estou curiosa`

### T21 · O teste × o Diagnóstico

- **H2:** `O que o teste mostrou e o que <g>o Diagnóstico mapeia</g>`
- **Duas colunas:**

| O teste mostrou | O Diagnóstico mapeia |
|---|---|
| que existe uma trava | **de onde** ela vem |
| onde ela aparece | **qual** Permissão está faltando |
| o seu nível hoje | **o passo a passo** para destravar |

- **[espaço de depoimento · desligado]**
- **Botão:** `Continuar`

### T22 · P16 — micro-sim

`Você acredita que destravaria isso se soubesse exatamente onde está a trava e qual o passo a passo?` — ✅ `Sim, estou pronta para isso` · `Com certeza, só preciso de direção` · `Acho que sim, quero tentar`

### T23 · Captura

- **H2:** `Para onde eu envio o seu resultado e o próximo passo?`
- **Campos:** `Primeiro nome` · `WhatsApp` · `E-mail`
- **Botão:** `Ver o próximo passo`
- **Consentimento, visível, abaixo do botão:** `Ao continuar, você autoriza o uso do seu nome, e-mail, WhatsApp e das suas respostas neste teste para receber o resultado, para contato do Guilherme Araújo e para acompanhar a sua evolução ao longo do tempo. Você pode pedir a remoção dos seus dados a qualquer momento.` + links.

### T24 · OFERTA — página longa, rolagem

1. **H2:** `{{nome}}, O TESTE MOSTROU <r>ONDE</r> A SUA TRAVA APARECE. O PRÓXIMO PASSO É MAPEAR <g>DE ONDE ELA VEM</g>.`
2. **Faixa (perigo, clara):** `↓ ROLE PARA BAIXO ↓`
3. **Foto do Guilherme** + texto: `{{nome}}, Guilherme aqui.` / `Sou professor de Cartomancia Sistêmica e mentor de vendas humanizadas. Trabalho com terapeutas e mentoras que sabem atender e travam na hora de receber.`
4. **H2:** `Por que estudar mais <r>não resolveu</r>`
   Texto: `Porque a trava não está no que você sabe. Está no que você se permite. Enquanto essa Permissão não é localizada, toda técnica nova bate no mesmo teto.`
5. **Faixa (sucesso, cheia):** `DIAGNÓSTICO DA PERMISSÃO`
   Texto: `Uma sessão individual de 2 horas comigo, para mapear a sua Permissão. Trabalho com os mesmos princípios de Elton Euler, aplicados ao seu caso.`
6. **H2:** `O que acontece` — três cartões de argumento:
   - **1 · Localizar** — `Onde a sua trava aparece e desde quando.`
   - **2 · Mapear** — `Qual Permissão está faltando e de onde ela vem.`
   - **3 · Passo a passo** — `O que fazer, na ordem, para destravar.`
7. **H2:** `O que você <g>recebe</g>`
   - `A sessão individual de 2 horas.`
   - `Depois da sessão, o <strong>mapa da sua Permissão</strong>: um mapa mental com tudo que foi localizado.`
   - `O passo a passo do que fazer para destravar.`
   - **[espaço de imagem do mapa · desligado]** — `⚠ CONFIG`: foto real de um mapa entregue, com dados cobertos.
8. **H2:** `Conforme você respondeu`
   - ✅ `Seu nível de Permissão hoje: {{nivel}}`
   - ✅ `O que mais te impede: {{impede}}`
   - ✅ `O que você quer mudar primeiro: {{desejo}}`
9. **H2:** `Para quem é`
   - `Para quem já atende ou está começando.`
   - `Para quem se reconheceu nas perguntas do teste.`
   - `Para quem quer olhar para isso agora.`
10. **[espaço de depoimentos · desligado]**
11. **Bloco de preço:** título `DIAGNÓSTICO DA PERMISSÃO` · valor `R$ 97` · apoio `Sessão individual de 2h · mapa da Permissão · passo a passo`
12. **Botão:** `GARANTIR MINHA SESSÃO` → checkout (§11)
13. **Texto pequeno:** `Depois do pagamento, você recebe o link para escolher o seu horário.`
14. **FAQ**
    - **Isso é terapia?** `Não. É uma sessão de mapeamento, com começo, meio e fim. Não substitui acompanhamento psicológico ou médico.`
    - **Preciso já estar atendendo?** `Não. Serve também para quem está começando e já sente a trava.`
    - **Como eu agendo?** `Depois do pagamento, você recebe o link da agenda e escolhe o melhor horário.`
    - **Quando recebo o mapa?** `Depois da sessão.`
    - **O que acontece depois?** `Você fica com o mapa e o passo a passo. Se fizer sentido seguir comigo, eu te apresento os caminhos.`
15. **Rodapé:** `⚠ CONFIG` dados legais + aviso: `O Diagnóstico da Permissão é um processo de autoconhecimento. Não substitui acompanhamento psicológico ou médico e não garante resultado financeiro. Os resultados dependem da aplicação de cada pessoa.`

**Variação da oferta para nível ALTO** — provisória, até Victor decidir com o Guilherme:

- item 1 vira: `{{nome}}, PELAS SUAS RESPOSTAS A PERMISSÃO <g>NÃO PARECE SER</g> O QUE SEGURA O SEU FINANCEIRO.`
- depois do item 3, inserir: `Se o resultado não acompanha, o ponto pode estar em estratégia, posicionamento ou oferta. Se mesmo assim você quiser um olhar individual, o Diagnóstico confirma isso em 2 horas.`
- itens 4 e 8 **não aparecem**.
- o restante segue igual.

### Depois da T24 · não existe página de obrigado no quiz

O botão sai para o checkout. O pós-compra é da PagTrust.

---

## 7. QUIZ 2 · SIGNOS — tela a tela

Linguagem neutra em todas as telas. Sem promessa de previsão, sem "vai acontecer".

### S01 · Abertura + P1

- **Faixa (aviso):** `RESPONDA E DESCUBRA O CONSELHO DO SEU ELEMENTO:`
- **H1:** `O QUE AS CARTAS TÊM A DIZER PARA <g>O SEU SIGNO</g> NESTA SEMANA?`
- **H3:** `<u>TODA SEMANA</u>, UM CONSELHO DAS CARTAS PARA O SEU ELEMENTO E UM APROFUNDAMENTO PARA O SEU SIGNO.`
- **Deixa:** `↓ RESPONDA PARA COMEÇAR ↓`
- **H2 · P1 [V `signo` → deriva `elemento`]:** `Qual é o seu signo?`
- **Opções, grade 3×4**, glifo grande + barra preta de rótulo: ♈ Áries · ♉ Touro · ♊ Gêmeos · ♋ Câncer · ♌ Leão · ♍ Virgem · ♎ Libra · ♏ Escorpião · ♐ Sagitário · ♑ Capricórnio · ♒ Aquário · ♓ Peixes
- **Rodapé:** `⚠ CONFIG`

**Derivação:** Fogo = Áries, Leão, Sagitário · Terra = Touro, Virgem, Capricórnio · Ar = Gêmeos, Libra, Aquário · Água = Câncer, Escorpião, Peixes. Emoji do elemento: 🔥 🌍 💨 💧.

### S02 · Inserção 1

- **H2:** `{{signo}} é do elemento <g>{{elemento}}</g>.`
- **Imagem:** foto do Guilherme.
- **Texto:** `Toda semana eu tiro as cartas para o seu elemento e aprofundo para o seu signo. Antes de te mostrar como funciona, algumas perguntas rápidas.`
- **Botão:** `Continuar`

### S03 · P2

`Você costuma acompanhar tiragens ou previsões do seu signo?` — 🔮 `Toda semana` · `De vez em quando` · `Raramente` · `Nunca acompanhei`

### S04 · P3 [V `area`]

`Em que área você mais precisa de direção agora?`

| Opção | Valor da variável |
|---|---|
| 💼 `Trabalho e dinheiro` | `trabalho e dinheiro` |
| ❤️ `Amor e relacionamentos` | `amor e relacionamentos` |
| 🏠 `Família` | `família` |
| 🪞 `Eu comigo` | `a sua relação com você` |

### S05 · P4 [V `semana`]

`Como você costuma começar a semana?`

| Opção | Valor da variável |
|---|---|
| 🌅 `Com clareza do que fazer` | `com clareza do que fazer` |
| `Com algumas dúvidas` | `com algumas dúvidas` |
| `No automático, resolvendo o que aparece` | `no automático` |
| `Com ansiedade pelo que vem` | `com ansiedade pelo que vem` |

### S06 · P5

`Quando precisa decidir algo importante, o que você faz?` — 🧩 `Decido rápido e depois vejo` · `Fico adiando` · `Peço a opinião de várias pessoas` · `Procuro um sinal`

### S07 · P6

`Você sente que repete as mesmas situações?` — 🔁 `Sim, parece um ciclo` · `Em algumas áreas` · `Não`

### S08 · P7 [V `renda`] — não pontua, qualifica

`Qual é a sua renda mensal hoje?` — 💰 `Até R$ 2 mil` · `De R$ 2 mil a R$ 5 mil` · `De R$ 5 mil a R$ 10 mil` · `Mais de R$ 10 mil` · `Não tenho renda no momento`

A resposta **não aparece** em nenhuma tela depois. Vai só para a planilha.

### S09 · Inserção 2 — mecanismo

- **H2:** `As cartas não decidem por você. Elas mostram <g>onde você ainda não se deu permissão para agir</g>.`
- **Texto:** `O conselho da semana é isso: uma direção clara para o seu elemento, e um aprofundamento para o seu signo.`
- **[espaço de depoimento · desligado]**
- **Botão:** `Continuar`

### S10 · P8

`Você já fez uma leitura de cartas antes?` — 🃏 `Sim, faço com frequência` · `Já fiz algumas vezes` · `Nunca fiz, mas tenho curiosidade`

### S11 · P9 [V `quer`]

`O que você mais quer de um conselho semanal?`

| Opção | Valor da variável |
|---|---|
| 🧭 `Clareza para decidir` | `clareza para decidir` |
| `Coragem para agir` | `coragem para agir` |
| `Calma para atravessar a semana` | `calma para atravessar a semana` |
| `Entender o que estou vivendo` | `entender o que você está vivendo` |

### S12 · Carregamento

`Preparando o conselho do elemento {{elemento}}…` — 5 s.

### S13 · RESULTADO

- **Texto:** `Aqui está o seu resultado.`
- **Faixa de resultado, verde cheia:** `SEU ELEMENTO: {{EMOJI}} {{ELEMENTO}}`
- **Texto:** `{{signo}} divide esse elemento com {{outros_dois_signos}}.`
- **Subtítulo:** `Você respondeu que…`
- **Três cartões:**
  1. **Você começa a semana {{semana}}.** `O conselho chega antes da semana começar.`
  2. **Precisa de direção em {{area}}.** `É por aí que o aprofundamento do seu signo costuma ajudar.`
  3. **Quer {{quer}}.** `É para isso que o conselho serve.`
- **Botão:** `Ver como funciona`

**Texto por elemento — NÃO INCLUIR nesta versão.** Descrições de traço por elemento ("Fogo age antes de pensar…") são conteúdo do Guilherme e ele não escreveu. O resultado fica só com o elemento e o eco das respostas. Deixar um campo `descricao_elemento` vazio na configuração, por elemento, para preencher depois.

### S14 · P10 — micro-sim

`Quer receber o conselho do seu elemento toda semana?` — ✅ `Sim, quero começar` · `Quero entender melhor primeiro`

### S15 · Captura

- **H2:** `Para onde eu envio o próximo passo?`
- **Campos:** `Primeiro nome` · `WhatsApp` · `E-mail`
- **Botão:** `Ver como funciona`
- **Consentimento:** o mesmo texto de T23.

### S16 · OFERTA

1. **H2:** `{{nome}}, O GRUPO DE <g>{{ELEMENTO}}</g> ESTÁ ABERTO PARA {{SIGNO}}.`
2. **Faixa (perigo, clara):** `↓ ROLE PARA BAIXO ↓`
3. **Foto do Guilherme** + texto: `{{nome}}, Guilherme aqui.` / `Sou professor de Cartomancia Sistêmica. Toda semana eu tiro as cartas para cada elemento e aprofundo para cada signo.`
4. **Faixa (sucesso, cheia):** `GRUPO DE CONSELHO SEMANAL · {{ELEMENTO}}`
5. **H2:** `Como funciona` — três cartões:
   - **1 · O conselho do elemento** — `Toda semana, a direção das cartas para {{elemento}}.`
   - **2 · O aprofundamento do seu signo** — `Um direcionamento exclusivo para {{signo}}, dentro do grupo.`
   - **3 · No seu WhatsApp** — `Você recebe no grupo do seu elemento.`
6. **H2:** `Conforme você respondeu`
   - ✅ `Seu signo: {{signo}} · elemento {{elemento}}`
   - ✅ `Onde você precisa de direção: {{area}}`
   - ✅ `O que você quer do conselho: {{quer}}`
7. **H2:** `O que isto <r>não é</r>`
   - `Não é previsão do que vai acontecer.`
   - `Não é consulta individual.`
   - `É uma orientação para a sua semana, a partir das cartas.`
8. **[espaço de depoimentos · desligado]**
9. **Bloco de preço:** título `GRUPO {{ELEMENTO}}` · valor `⚠ CONFIG` · apoio `⚠ CONFIG`
10. **Botão:** `ENTRAR NO GRUPO DE {{ELEMENTO}}` → checkout **do elemento** (§11)
11. **Texto pequeno:** `Depois do pagamento, você recebe o acesso ao grupo.`
12. **FAQ**
    - **Como eu recebo?** `No grupo de WhatsApp do seu elemento.`
    - **É uma consulta individual?** `Não. É um conselho para o seu elemento, com aprofundamento para o seu signo.`
    - **Posso cancelar?** `⚠ CONFIG`
    - **E se eu quiser uma tiragem só para mim?** `É possível, à parte. Dentro do grupo eu explico como.`
13. **Rodapé:** `⚠ CONFIG` + aviso: `Conteúdo de orientação e autoconhecimento. Não substitui acompanhamento psicológico, médico, jurídico ou financeiro.`

**Não afirmar o dia da semana** em que o conselho chega. O Guilherme falou em domingo, mas não fechou.

---

## 8. Lógica

### 8.1 Pontuação do Quiz 1

Sete perguntas pontuam: T06, T07, T08, T10, T11, T12, T13. Máximo **21**. Mais pontos = menos Permissão.

| Pontos | `nivel` | Estilo da faixa |
|---:|---|---|
| 14 a 21 | `BAIXO` | alerta `danger` da referência |
| 7 a 13 | `MÉDIO` | alerta `warning` da referência |
| 0 a 6 | `ALTO` | alerta `success` da referência |

### 8.2 Parágrafo do resultado, por nível

**BAIXO** — `Suas respostas mostram um padrão consistente: você entrega, e na hora de receber alguma coisa segura. Isso não é falta de capacidade nem de técnica. É uma Permissão que ainda não foi dada, e ela costuma ter origem bem mais antiga que o seu consultório.`

**MÉDIO** — `Você já se permite em alguns pontos e trava em outros. É o cenário mais comum de quem vive no quase: quase fecha, quase cobra o justo, quase cresce. Existe um teto, e ele está em lugares específicos.`

**ALTO** — `Pelas suas respostas, a Permissão não parece ser o que segura o seu financeiro hoje. Se o resultado não acompanha, o ponto pode estar em estratégia, posicionamento ou oferta.`

**O nível ALTO tem de ser alcançável e tem de aparecer como está.** Não ajustar pontos para empurrar todo mundo para BAIXO. Um teste que só devolve "você tem o problema" não é teste.

### 8.3 Variáveis

Toda `{{variável}}` usa o **valor de frase** definido na tela, não o rótulo da opção. `{{NIVEL}}`, `{{ELEMENTO}}`, `{{SIGNO}}` em caixa alta; as minúsculas, em caixa normal. `{{nome}}` com a primeira letra maiúscula. Se uma variável faltar, a frase inteira some — nunca mostrar `{{…}}` nem "undefined".

### 8.4 Roteamento do Quiz 2

`elemento` escolhe um entre quatro links de checkout. Com o link daquele elemento vazio, o botão fica desabilitado e o build falha no teste de aceite.

---

## 9. Depoimentos — construir o espaço, deixar desligado

- Um componente `depoimento` com dois formatos: **citação** (texto, nome, atuação) e **imagem** (print).
- Posições já marcadas: Quiz 1 em T04, T21 e item 10 da oferta · Quiz 2 em S09 e item 8 da oferta.
- Chave única na configuração: `depoimentos_ativos: false`. Com `false`, o espaço **não ocupa altura** e não deixa título órfão.
- Conteúdo em lista na configuração, vazia. **Não preencher com exemplo, lorem ou texto ilustrativo.**
- O mesmo vale para a imagem do mapa (item 7 da oferta do Quiz 1).

As páginas têm de estar completas e fazer sentido **sem** depoimento nenhum.

---

## 10. Dados — planilha via Apps Script, rastreamento e privacidade

### 10.1 O que a planilha precisa permitir

1. **Qualificar** — ver, por pessoa, tudo que ela respondeu, o resultado e se clicou no checkout.
2. **Medir ponto A e ponto B** — a mesma pessoa refaz o quiz mais tarde; as duas linhas têm as mesmas colunas e se comparam.

### 10.2 Quando enviar

| Momento | Envio | O que vai |
|---|---|---|
| envio da captura (T23 · S15) | **cria a linha** | contato + todas as respostas + resultado + UTMs |
| toque no botão de checkout | **atualiza a mesma linha** | `clicou_checkout: "sim"` e `checkout_em` |

Antes da captura nada é enviado: sem contato, a resposta é anônima e não entra na planilha. O abandono por tela se mede pelo `dataLayer` (§10.6).

### 10.3 Formato do envio

```json
{
  "lead_id": "uuid gerado no navegador na primeira tela",
  "quiz": "permissao",
  "quiz_versao": "1.0",
  "momento": "A",
  "nome": "…", "whatsapp": "…", "email": "…",
  "resultado": "BAIXO",
  "pontos": 17,
  "respostas": { "p01_atuacao": "Terapeuta", "p05_recebe_equivalente": "Poderia ser melhor", "p05_pts": 2 },
  "utm": { "source": "…", "medium": "…", "campaign": "…", "content": "…", "term": "…" },
  "clicou_checkout": "",
  "hp": ""
}
```

- `quiz`: `permissao` ou `signos`. Cada um grava numa **aba** de mesmo nome.
- `resultado`: o nível (Quiz 1) ou o elemento (Quiz 2). `pontos` só existe no Quiz 1.
- `momento`: `A` por padrão. Se a página for aberta com `?m=B`, grava `B`. É assim que a reaplicação se distingue. A pessoa digita o contato de novo; **não** passar contato pela URL.
- `respostas`: **o texto da opção escolhida**, sob a chave estável da pergunta (§10.4). Nas perguntas que pontuam, também `<chave>_pts`.
- `hp`: campo-isca invisível no formulário. Preenchido = robô; o script descarta.

**Como enviar, no navegador:**

```js
// criação da linha, no envio da captura
fetch(CONFIG.apps_script_url, {
  method: 'POST',
  mode: 'no-cors',
  headers: { 'Content-Type': 'text/plain;charset=utf-8' },
  body: JSON.stringify(payload)
});

// atualização, no toque do checkout — a página vai sair, então sendBeacon
navigator.sendBeacon(
  CONFIG.apps_script_url,
  new Blob([JSON.stringify({ lead_id, quiz, clicou_checkout: 'sim', checkout_em: new Date().toISOString() })],
           { type: 'text/plain;charset=utf-8' })
);
```

`text/plain` e `no-cors` são obrigatórios: o Apps Script não responde a preflight. A resposta volta opaca, então **o quiz não espera por ela** — avança para a oferta de qualquer jeito. O envio nunca pode travar a pessoa. Guardar o payload em `sessionStorage` e tentar de novo uma vez, na tela seguinte, se o `fetch` lançar erro de rede.

### 10.4 Chaves das respostas — estáveis, não renomear

**Quiz 1 · aba `permissao`**

| Chave | Pergunta |
|---|---|
| `p01_atuacao` | atuação |
| `p02_tempo_atende` | há quanto tempo atende |
| `p03_formacoes` | quantas formações |
| `p04_faturamento` | faturamento mensal |
| `p05_recebe_equivalente` + `_pts` | recebe o equivalente |
| `p06_hora_do_preco` + `_pts` | na hora do preço |
| `p07_desconto` + `_pts` | desconto sem pedirem |
| `p08_culpa` + `_pts` | culpa depois de cobrar |
| `p09_entrega_a_mais` + `_pts` | entrega mais que o combinado |
| `p10_teto` + `_pts` | sobe e volta |
| `p11_familia_origem` + `_pts` | ganhar mais que a família de origem |
| `p12_ja_tentou` | o que já tentou |
| `p13_impede` | o que mais impede |
| `p14_mudaria` | o que mudaria primeiro |
| `p15_disposicao` | quão disposta |
| `p16_acredita` | micro-sim |

**Quiz 2 · aba `signos`**

| Chave | Pergunta |
|---|---|
| `p01_signo` | signo |
| `p02_acompanha` | acompanha tiragens |
| `p03_area` | área em que precisa de direção |
| `p04_comeca_semana` | como começa a semana |
| `p05_decide` | como decide |
| `p06_repete` | repete situações |
| `p07_renda` | renda mensal |
| `p08_ja_fez_leitura` | já fez leitura |
| `p09_quer` | o que quer do conselho |
| `p10_quer_receber` | micro-sim |

Para o ponto A e B, os marcadores são: no Quiz 1, `pontos`, `resultado`, `p04_faturamento` e as sete perguntas pontuadas; no Quiz 2, `p07_renda`, `p04_comeca_semana` e `p06_repete`.

### 10.5 O script — entregar pronto, em `apps-script/Code.gs`

Script **vinculado à planilha** (Extensões → Apps Script). Cria as abas e o cabeçalho sozinho, acrescenta coluna quando chega chave nova e atualiza a linha quando o `lead_id` já existe.

```js
const ABAS = { permissao: 'permissao', signos: 'signos' };
const FIXAS = ['recebido_em', 'lead_id', 'quiz', 'quiz_versao', 'momento',
               'nome', 'whatsapp', 'email', 'resultado', 'pontos',
               'clicou_checkout', 'checkout_em'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.hp) return out({ ok: true });                       // robô: finge que gravou
    const aba = ABAS[d.quiz];
    if (!aba || !d.lead_id) return out({ ok: false, erro: 'payload' });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(aba) || ss.insertSheet(aba);
    const flat = achatar(d);

    let head = sh.getLastColumn()
      ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].filter(String)
      : [];
    if (!head.length) head = FIXAS.slice();
    Object.keys(flat).forEach(k => { if (head.indexOf(k) < 0) head.push(k); });
    sh.getRange(1, 1, 1, head.length).setValues([head]);

    let row = 0;
    const last = sh.getLastRow();
    if (last > 1) {
      const ids = sh.getRange(2, head.indexOf('lead_id') + 1, last - 1, 1).getValues();
      for (let i = 0; i < ids.length; i++) {
        if (ids[i][0] === d.lead_id) { row = i + 2; break; }
      }
    }

    if (row) {                                                // atualiza só o que veio
      const atual = sh.getRange(row, 1, 1, head.length).getValues()[0];
      const novo = head.map((k, i) => (k in flat) ? limpar(flat[k]) : atual[i]);
      sh.getRange(row, 1, 1, head.length).setValues([novo]);
    } else {
      flat.recebido_em = new Date();
      sh.appendRow(head.map(k => (k in flat) ? limpar(flat[k]) : ''));
    }
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, erro: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function achatar(d) {
  const o = {};
  Object.keys(d).forEach(k => {
    if (k === 'hp') return;
    if (k === 'respostas') Object.keys(d[k] || {}).forEach(j => o[j] = d[k][j]);
    else if (k === 'utm') Object.keys(d[k] || {}).forEach(j => o['utm_' + j] = d[k][j]);
    else o[k] = d[k];
  });
  return o;
}

// corta tamanho e neutraliza fórmula: valor que começa com = + - @ vira texto
function limpar(v) {
  if (v instanceof Date) return v;
  const s = String(v == null ? '' : v).slice(0, 500);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}
```

**Publicação do script** (passo humano, descrever no relatório): Implantar → Nova implantação → App da Web → executar como **eu** → acesso **qualquer pessoa**. A URL `…/exec` entra em `apps_script_url`. A cada mudança no script, **nova versão da implantação**, senão a URL continua servindo o código antigo.

**Entregar junto:** um `apps-script/LEIA-ME.md` com esses passos e um `apps-script/teste.http` (ou comando `curl`) que cria uma linha de teste e depois a atualiza.

**Limites que o Victor precisa conhecer:** a URL do script é pública e fica visível no código da página; qualquer pessoa pode escrever na planilha. O campo-isca, o corte de tamanho e a neutralização de fórmula reduzem o estrago, não impedem. A planilha guarda dado pessoal com renda: **acesso restrito**, nunca link público.

### 10.6 Rastreamento

| Momento | Evento |
|---|---|
| carregar a página | `PageView` |
| primeira resposta | evento próprio `QuizStart` |
| cada tela | `dataLayer.push({event:'quiz_step', quiz, tela})` — mede abandono por tela |
| ver o resultado | evento próprio `QuizResult` com `nivel` ou `elemento` |
| enviar a captura | `Lead` |
| tocar no botão de checkout | `InitiateCheckout` |

- **Pixel:** `⚠ CONFIG`. O ID `1259363302489132` foi encontrado em rascunhos da conta e **não foi validado**; não fixar no código.
- `Purchase` é disparado no checkout da PagTrust, fora deste projeto.
- **Não enviar ao Pixel** renda, faturamento, pontos nem respostas. Só o nome do evento e, no `QuizResult`, o nível ou o elemento.

### 10.7 Privacidade

- **Nenhum dado pessoal em URL.** Nome, e-mail e telefone **não** vão em querystring para o checkout. Vão só `utm_*`, `quiz` e `nivel` ou `elemento`. A referência faz o contrário; não repetir.
- Repassar os `utm_*` de entrada até o link de checkout.
- Renda e faturamento ficam **só** na planilha.
- Nenhum script de terceiro além do Pixel e da chamada ao Apps Script.

---

## 11. Configuração

| Chave | Quiz | Valor |
|---|---|---|
| `checkout_diagnostico` | 1 | `https://checkout.pagtrust.com.br/ck1a8c1922?funnel=fn7a9c7bc3` |
| `checkout_fogo` · `_terra` · `_ar` · `_agua` | 2 | `⚠ CONFIG` — existem na PagTrust, links não recebidos |
| `preco_signos_valor` · `preco_signos_apoio` | 2 | `⚠ CONFIG` — preço em definição (mensal R$ 97, trimestral R$ 297 ou semestral R$ 497) |
| `cancelamento_signos` | 2 | `⚠ CONFIG` |
| `pixel_id` | ambos | `⚠ CONFIG` |
| `apps_script_url` | ambos | `⚠ CONFIG` — URL `…/exec` da implantação do Apps Script |
| `quiz_versao` | cada um | `1.0` — subir quando mudar pergunta, opção ou pontuação |
| `dados_legais` · `url_termos` · `url_privacidade` | ambos | `⚠ CONFIG` |
| `depoimentos_ativos` | ambos | `false` |
| `imagem_mapa` | 1 | vazio |
| `descricao_elemento` × 4 | 2 | vazio |

---

## 12. Proibido

- Inventar depoimento, nome, número de alunos, resultado financeiro, selo, estudo ou prova.
- "100% qualificada", "garantido", "comprovado", "em X dias".
- Cronômetro, cupom, "vagas limitadas", "últimas vagas", pilha de preços riscados, bônus.
- "O mesmo método do Elton Euler". A única forma permitida é **"os mesmos princípios de Elton Euler"**, e ela aparece uma vez, no item 5 da oferta do Quiz 1.
- "Você sai com o mapa". O mapa é entregue **depois** da sessão.
- Misturar as ofertas: Quiz 1 não menciona os grupos; Quiz 2 não menciona o Diagnóstico.
- Foto de pessoa gerada por IA.
- Qualquer cor, fonte, espaçamento ou comportamento que não esteja na referência.
- Renomear ou reordenar as chaves de resposta de §10.4.

---

## 13. Critérios de aceite

- [ ] Os dois quizzes rodam do primeiro toque ao botão de checkout, no celular (360 e 390 px) e no desktop, sem rolagem horizontal.
- [ ] Comparação visual com a referência, componente a componente, em 390 px e no desktop: mesma fonte, mesmos pesos, mesmas cores, mesmos raios, mesmos espaçamentos. Entregar pares de captura referência × nosso para abertura, pergunta, inserção, resultado, captura e oferta.
- [ ] As headlines dos dois quizzes seguem a tabela de §3.2: mesmas fontes, mesmos pesos, mesmas cores, mesma regra de destaque. Conferir lado a lado T01 × S01, T19 × S13 e T24 × S16.
- [ ] Nenhum estilo ou comportamento que não exista na referência.
- [ ] Quiz 1: os três níveis são alcançáveis. Testar três percursos — só respostas de 3 pontos, só de 0, e um misto que caia em MÉDIO.
- [ ] Quiz 1: as quatro variantes de T16 aparecem conforme T14.
- [ ] Quiz 1: a oferta de nível ALTO aparece com as diferenças descritas.
- [ ] Quiz 2: os 12 signos levam ao elemento certo e ao link certo.
- [ ] Nenhuma `{{variável}}` crua aparece em nenhuma tela, em nenhum percurso.
- [ ] Com `depoimentos_ativos: false`, não há espaço vazio nem título órfão.
- [ ] Voltar funciona e preserva as respostas; recarregar não perde o ponto.
- [ ] Formulário valida nome, WhatsApp e e-mail; o consentimento está visível sem rolar.
- [ ] Nenhum dado pessoal em URL.
- [ ] Apps Script: o envio da captura cria **uma** linha na aba certa, com todas as chaves de §10.4; o toque no checkout **atualiza a mesma linha**, sem duplicar. Testado nos dois quizzes.
- [ ] Apps Script: com a URL fora do ar, o quiz avança para a oferta normalmente.
- [ ] Apps Script: valor iniciado por `=` chega à planilha como texto; envio com o campo-isca preenchido não grava.
- [ ] Abrir com `?m=B` grava `momento = B`.
- [ ] Renda e faturamento não aparecem em nenhuma tela depois de respondidos e não são enviados ao Pixel.
- [ ] Busca no código pelas expressões proibidas de §12 retorna zero.
- [ ] **Nenhum texto visível foi escrito na construção.** Todo texto das páginas existe, igual, nas §6, §7 ou §16 deste briefing. O que faltou está marcado `[[COPY PENDENTE: …]]` e listado no relatório.
- [ ] Nenhum texto, imagem ou dado da referência no resultado.
- [ ] Capturas de tela de todas as telas dos dois quizzes, em 390 px, entregues junto.

---

## 14. Entrega

- Código dos dois quizzes sobre o mesmo motor, com os dois arquivos de configuração separados.
- `apps-script/Code.gs`, `apps-script/LEIA-ME.md` e o teste de envio.
- Capturas de todas as telas.
- Relatório curto: o que foi construído, os testes dos percursos, a lista de `⚠ CONFIG` ainda vazios, e qualquer dúvida de copy **sem tê-la alterado**.
- Onde gravar: na pasta de isolamento do Codex, conforme o contrato dele. **Não publicar, não fazer deploy, não ativar Pixel.**

---

## 15. O que ainda depende de gente, e não trava a construção

| Item | Dono |
|---|---|
| depoimentos e foto de um mapa real | Guilherme |
| quatro links de checkout dos grupos | Guilherme |
| preço e periodicidade do grupo | Guilherme + Victor |
| dados legais, termos e privacidade | Guilherme |
| texto por elemento, se ele quiser | Guilherme |
| fotos reais para as opções, se quiserem trocar os emojis | Guilherme + Victor |
| oferta para quem tira ALTO | Victor + Guilherme |
| Pixel validado | Victor |
| planilha criada, script implantado e URL `…/exec` | Victor |

---

## 16. Microcopy e conteúdo de apoio — também é redação, também está fechado

Tudo que aparece para a pessoa e não está nas §6 e §7.

### 16.1 Textos de interface, iguais nos dois quizzes

| Onde | Texto |
|---|---|
| título do componente de carregamento | `Carregando…` |
| título do FAQ | `Perguntas frequentes` |
| placeholder · nome | `Digite seu primeiro nome` |
| placeholder · WhatsApp | `(00) 00000-0000` |
| placeholder · e-mail | `Digite seu e-mail` |
| erro · nome | `Informe o seu primeiro nome.` |
| erro · WhatsApp | `Informe um WhatsApp válido, com DDD.` |
| erro · e-mail | `Informe um e-mail válido.` |
| linha do rodapé | `Ao acessar esta página, você está de acordo com:` |
| links do rodapé e do consentimento | `Termos de Uso` · `Política de Privacidade` |
| rótulo acessível do voltar | `Voltar` |
| rótulo acessível da barra | `Progresso do teste` |
| sem JavaScript | `Ative o JavaScript para fazer o teste.` |
| texto alternativo · foto | `Guilherme Araújo` |
| texto alternativo · mapa | `Exemplo de mapa da Permissão` |

### 16.2 Título e descrição da página

| | Quiz 1 | Quiz 2 |
|---|---|---|
| `<title>` | `Teste da Permissão · Guilherme Araújo` | `O conselho do seu elemento · Guilherme Araújo` |
| descrição e `og:description` | `Descubra o seu nível de Permissão para prosperar com o seu trabalho. Teste gratuito para terapeutas e mentoras.` | `Responda e descubra o conselho das cartas para o seu elemento e o seu signo.` |
| `og:title` | igual ao `<title>` | igual ao `<title>` |

As duas páginas saem com `noindex`.

### 16.3 Emoji de cada opção, na ordem em que as opções aparecem

Onde a tela das §6 e §7 mostra um emoji só, vale esta tabela.

**Quiz 1**

| Pergunta | Emojis, na ordem das opções |
|---|---|
| P1 atuação | 🌿 · 🧭 · 🃏 · 🌱 |
| P2 tempo que atende | 🌱 · 🌿 · 🌳 · 🌲 |
| P3 formações | 📗 · 📚 · 🗂️ · 🤯 |
| P4 faturamento | 🪙 · 💵 · 💰 · 💎 |
| P5 recebe o equivalente | 😮‍💨 · 🤔 · 😊 |
| P6 hora do preço | 😶 · 😬 · 😌 |
| P7 desconto | 🔁 · ↩️ · 🤏 · 🚫 |
| P8 culpa | 😔 · 😕 · 🙂 · 😌 |
| P9 entrega a mais | 🎁 · 🤲 · ✋ |
| P10 teto | 📉 · 〰️ · 📈 |
| P11 família de origem | 😣 · 😰 · 😌 |
| P12 já tentou | 📣 · 📚 · 🛋️ · 🫥 |
| P13 impede | 💔 · 🙈 · ⏳ · ❓ |
| P14 mudaria | 💲 · 🤝 · 🏡 · 🕊️ |
| P15 disposição | 🔥 · 🔎 · 👀 |
| P16 micro-sim | ✅ · 🧭 · 🌱 |

**Quiz 2**

| Pergunta | Emojis, na ordem das opções |
|---|---|
| P1 signo | o glifo de cada signo |
| P2 acompanha | 🔮 · 🌙 · ☁️ · 🆕 |
| P3 área | 💼 · ❤️ · 🏠 · 🪞 |
| P4 começa a semana | 🌅 · 🤔 · 🔄 · 😰 |
| P5 decide | ⚡ · ⏳ · 🗣️ · 🔍 |
| P6 repete | 🔁 · 〰️ · ➡️ |
| P7 renda | 🪙 · 💵 · 💰 · 💎 · 🌱 |
| P8 já fez leitura | 🃏 · ✨ · 👀 |
| P9 quer | 🧭 · 🦁 · 🍃 · 💡 |
| P10 micro-sim | ✅ · 🔎 |

### 16.4 Dado derivado, não redação

`{{outros_dois_signos}}` no resultado do Quiz 2 é montado a partir da tabela de elementos de S01, no formato `Leão e Sagitário`.

### 16.5 O que continua sem texto, de propósito

Ficam com `[[COPY PENDENTE]]` até a redação chegar: dados legais do rodapé · valor e linha de apoio do preço do grupo de signos · resposta de "Posso cancelar?" · descrição por elemento · depoimentos.

---

## 17. Errata de redação — 02/10, depois da primeira entrega

Correções de copy feitas pela redação a partir das dúvidas registradas no `RELATORIO.md`. Valem sobre as §6 e §7.

**E1 · T19, cartão 1, quando `formacoes` = "já perdi a conta"**
Título do cartão: `Você já fez tantas formações que perdeu a conta.`
Nos demais casos, segue `Você já fez {{formacoes}} formações.`

**E2 · T19, cartão 2 — a linha de apoio depende da resposta de T07, não do nível**

| Resposta em T07 | Linha de apoio |
|---|---|
| `Travo e acabo falando um valor menor` ou `Falo, mas fico desconfortável` | `É onde a Permissão aparece primeiro.` |
| `Falo com tranquilidade` | `Aqui a Permissão não aparece como trava.` |

**E3 · T19, quando o nível é ALTO**
- Cartão 3, linha de apoio: `Vale olhar se isso é trava ou falta de estratégia.`
- Fecho em negrito: `O teste não encontrou uma trava forte de Permissão. Ele não mostra o que mais pode estar segurando o seu resultado.`

**E4 · Percurso do nível ALTO — provisório, como a oferta ALTO**
Depois de T19, o nível ALTO **pula T20, T21 e T22** e vai direto para T23 (captura). Essas três telas falam de uma trava que o resultado ALTO não confirmou. As chaves `p15_disposicao` e `p16_acredita` vão vazias para a planilha nesse percurso.

**E5 · S13, cartão 1, linha de apoio**
De `O conselho chega antes da semana começar.` para `O conselho te dá uma direção para a semana.`

**E6 · Oferta (T24 e S16) — interface**
Sem barra de progresso e sem botão voltar, como na tela 41 da referência.
