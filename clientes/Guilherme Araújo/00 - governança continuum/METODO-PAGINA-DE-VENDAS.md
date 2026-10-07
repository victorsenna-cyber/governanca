# MÉTODO CONTINUUM · Arquitetura de Páginas de Vendas

> **Ativo interno da Continuum AI Systems.** Padrão de estrutura, tensão e elementos para
> toda página cujo objetivo real é VENDER (workshop, curso, mentoria, serviço, SaaS,
> comunidade/assinatura). Serve a humanos e a agentes de IA: pode ser carregado como
> contexto de qualquer build.
> **v2.0 · 18/07/2026** · Origem v1.0: auditoria da landing Carreira Alinhada (01/07/2026).
> v2.0: auditoria estrutural completa — o que mudou está no CHANGELOG (rodapé).
> Documento vivo: toda auditoria, teste e página lançada deve alimentar este arquivo.
> Escopo: este método define ESTRUTURA. O texto final cruza a árvore de copy (§5.3).

---

## AS 12 LEIS CONTINUUM (resumo executivo)

1. **Lei do Circuito**: venda = tensão suficiente + crença apontada para o CTA + atrito
   menor que a tensão no momento da decisão. Toda dobra trabalha essas três correntes.
2. **Lei da Pergunta**: a página responde às perguntas do cérebro NA ORDEM em que ele as
   faz. Responder antes da pergunta desperdiça atenção; depois, perde a venda.
3. **Lei dos 5 Segundos**: na primeira dobra, um estranho entende o que é, para quem é,
   o que ganha e qual o próximo passo. Sem scroll, sem clique, sem animação pendente.
4. **Lei do Degrau**: não existe virada sem custo. Antes de apresentar a solução, a página
   precisa fazer sentir o preço de continuar igual. Dor espelhada sem custo é empatia
   que não converte.
5. **Lei do Valor Antes do Preço**: o cérebro só aceita um número depois de ter uma pilha
   contra a qual pesá-lo. Preço apresentado antes da pilha de valor flutua e assusta.
6. **Lei da Prova Vizinha**: toda promessa forte tem uma prova a até uma dobra de
   distância. Promessa sem prova por perto vira desconfiança acumulada.
7. **Lei do Deserto**: nunca mais de 2 telas de scroll sem uma porta (CTA). O pico de
   desejo raramente acontece em cima de um botão; a porta vai até o pico.
8. **Lei do Clímax Coincidente**: o pico de contraste visual da página deve coincidir com
   o pico de decisão (a oferta ou o fecho). Uma página uniformemente bonita é
   emocionalmente plana.
9. **Lei da Escassez Real**: urgência só quando verdadeira (data, lote, vaga). Escassez
   fabricada compra uma venda e vende a reputação.
10. **Lei do Gate**: nada vai ao ar com placeholder visível, sem passar no checklist da
    Parte 6, e sem aprovação humana.
11. **Lei do Brief**: nenhuma dobra se escreve sem o brief de entrada completo (§5.1).
    Campo vazio vira pergunta ao dono da oferta, nunca invenção. Prova inventada não é
    copy, é mentira.
12. **Lei do Débito de Crença**: toda alegação abre um débito que só prova quita. A página
    não chega à oferta devendo: saldo negativo na D8 é carrinho abandonado projetado.

*(As leis 1–10 mantêm a numeração da v1.0; referências antigas continuam válidas.)*

---

## PARTE 0 · O modelo mental: a página como circuito

Uma página de vendas administra três correntes simultâneas:

| Corrente | O que é | Como se comporta |
|---|---|---|
| **Tensão** | energia emocional que move o leitor para baixo e para o botão | sobe com reconhecimento e custo; alivia com método e segurança; morre com monotonia |
| **Crença** | quanto o leitor acredita na promessa e em quem promete | só sobe com especificidade, prova e honestidade; desce com hype e promessa absoluta |
| **Atrito** | custo cognitivo e prático de continuar (ler, entender, decidir, pagar) | cada bloco confuso, animação lenta, campo a mais ou dúvida sem resposta soma atrito |

**A venda acontece quando, diante do CTA, tensão x crença > atrito.** Todo o resto deste
documento é engenharia dessas três correntes: a tensão tem curva (Parte 2), a crença tem
extrato (§0.2), o atrito tem inventário (§0.3).

### 0.1 O saldo de atenção

O leitor chega com um crédito pequeno de atenção (3 a 8 segundos). Cada dobra ou **deposita**
(reconhecimento, valor novo, prova, beleza funcional) ou **saca** (confusão, repetição,
decoração sem função, texto vago). Página que saca duas vezes seguidas perde o leitor.
Pergunta de projeto para CADA bloco: *"isto deposita ou saca?"*

### 0.2 O extrato de crença (o segundo livro-caixa)

A tensão tem curva; a crença tem **extrato bancário**. Toda alegação movimenta o saldo:

| Movimento | Efeito no saldo |
|---|---|
| Promessa de estado (H1) | **-3** (o débito inaugural: toda página começa devendo) |
| Alegação de mecanismo ("funciona porque...") | -2 |
| Promessa secundária / benefício afirmado | -1 |
| Resultado específico com número e nome | **+3** |
| Depoimento específico sobre a transformação | +2 |
| Demonstração (antes/depois, amostra do método) | +2 |
| Autoridade emprestada (mídia, volume, credencial) | +1 |
| Qualificação negativa honesta ("talvez ainda não seja para você") | +1 |
| Garantia / risk reversal (credita na hora da decisão) | +1 |
| Prova social genérica (logos, estrelas) | +0,5 |
| Superlativo ou promessa absoluta | débito que NENHUMA prova quita (por isso é proibido) |

Regras do extrato:

- **Regra de saldo:** o leitor deve cruzar a fronteira da D8 com saldo ≥ 0. Se o wireframe
  acumula promessas até a D5 e só prova na D6, o saldo mais negativo da página acontece
  exatamente onde o desejo é maior — projetar a quitação ANTES do pico.
- **Mapa de quitação:** no wireframe, cada promessa forte ganha uma linha
  `promessa → prova que a quita → distância em dobras`. Distância > 1 viola a Lei 6.
- Os números do extrato são régua de projeto, não contabilidade exata: servem para
  discutir wireframe com critério ("esta dobra deve e não paga") em vez de gosto.

### 0.3 As quatro famílias de atrito (inventário de caça)

Atrito não se resolve "deixando mais limpo"; se caça por família, dobra a dobra:

1. **Cognitivo** — frase que precisa ser relida, jargão interno, bloco denso sem
   hierarquia, metáfora que não abre sozinha, informação certa na dobra errada.
2. **Decisório** — duas escolhas no mesmo bloco, CTAs competindo, opção demais na oferta,
   pergunta que a página levanta e não responde.
3. **Sensorial/técnico** — peso de página, animação no caminho crítico, layout shift,
   fonte pequena no mobile, contraste ruim, vídeo que exige som.
4. **De confiança** — números que não batem entre dobras, promessa do H1 diferente da
   promessa da oferta, design com cara de template, foto stock, cheiro de texto de IA.

A varredura das quatro famílias é item obrigatório do gate (Parte 6). A família 4 é a
mais cara: atrito de confiança não soma, multiplica.

### 0.4 As 12 perguntas, na ordem em que o cérebro as faz

A estrutura ideal de página é simplesmente a resposta a estas perguntas, nesta ordem:

1. Isso é para mim?
2. O que é isso?
3. O que eu ganho com isso?
4. Por que eu deveria me importar AGORA com esse problema?
5. Por que nada do que tentei funcionou?
6. Como isso funciona? (qual o mecanismo?)
7. O que exatamente eu recebo?
8. Quem é você para me prometer isso?
9. Funciona para gente como eu?
10. Quanto custa, e por que vale mais do que custa?
11. E se der errado para mim?
12. O que eu faço agora?

Perguntas 1 a 3 pertencem à primeira dobra. 4 e 5 à agitação. 6 e 7 ao método e à pilha de
valor. 8 e 9 à prova e qualificação. 10 e 11 à oferta e objeções. 12 é o fecho. **Se um
bloco não responde a nenhuma dessas perguntas, ele não pertence à página.**

---

## PARTE 1 · O objeto: as dobras canônicas

Estrutura padrão Continuum, do topo ao rodapé. A ordem admite modulações (Parte 4), mas
cada dobra tem função, elementos obrigatórios e proibições.

### D0 · Barra superior (não é dobra, é moldura)

- **Contém:** logo-marca pequena + nome, e UM link-âncora discreto para a oferta.
- **Nunca:** menu de navegação completo (páginas de venda não têm saída lateral), telefone,
  redes sociais. Cada link a mais é uma porta para fora.
- **Porquê:** o leitor que já decidiu precisa de atalho; os demais não precisam de desvio.

### D1 · Primeira dobra (Hero)

Responde às perguntas 1, 2, 3 e 12. A dobra mais cara da página: 100% veem, e a maioria
decide aqui se a segunda dobra existe.

- **Contém, obrigatoriamente:**
  - **Eyebrow de pertencimento + formato**: "PARA QUEM LIDERA · WORKSHOP AO VIVO · 3 DIAS".
    Qualifica em um segundo (pergunta 1) e já entrega o formato.
  - **H1 = promessa de estado** (o "depois" que a pessoa quer ser/ter), específica, na
    linguagem do cliente. Nunca o nome do produto como título.
  - **Subhead = reconhecimento + promessa + mecanismo**: reconhece onde a pessoa está,
    diz o salto e APONTA o como, em 2 ou 3 frases.
  - **CTA primário** com microcopy embaixo (preço de entrada ou remoção de risco).
  - **Sinais de esforço/formato** (duração, datas, canal): o custo em tempo é a primeira
    objeção silenciosa.
- **Contém, se houver espaço nobre sobrando:** pilha de valor resumida ou selos, nunca
  espaço vazio decorativo. Metade da dobra vazia é aluguel pago sem inquilino.
- **Se houver vídeo/VSL:** regras próprias em §3.10; a dobra continua tendo que passar na
  Lei dos 5 Segundos com o vídeo PARADO.
- **Nunca:** carrossel, vídeo em autoplay com som, promessa absoluta, mais de um CTA
  primário, valor dependente de animação (se o JS atrasar, a dobra precisa estar inteira
  no primeiro paint).
- **Erros comuns:** headline "criativa" que não informa (clareza cobra menos que
  criatividade); preço escondido em produto de ticket baixo (mostrar "a partir de X"
  qualifica o clique); esconder para quem é.

### D2 · O Espelho (dor/reconhecimento)

Responde à pergunta 4 (primeira metade). A seção onde o leitor se vê descrito melhor do
que ele mesmo se descreveria.

- **Contém:** UMA cena concreta e recente da vida do cliente (a reunião de ontem, a fatura
  de sexta, o e-mail não respondido), seguida da nomeação do padrão invisível por trás
  dela. Lista curta de sintomas irmãos (3 a 5) para ampliar o reconhecimento.
- **Matéria-prima:** a cena vem do brief (§5.1, campo 2), com as palavras
  que o cliente usa — nunca da imaginação do redator sobre a persona.
- **Nunca:** acusar ("você falha em..."), diagnosticar como quebrado quem se vê competente,
  listar dores genéricas de persona. A régua: o leitor deve pensar "como você sabia?",
  nunca "lá vem".
- **Porquê:** reconhecimento é o depósito de atenção mais barato e mais poderoso que
  existe; é ele que compra as próximas três dobras. E crença em quem diagnostica precede
  crença em quem prescreve.

### D3 · O Custo de Continuar (agitação) — a dobra mais esquecida

Responde à pergunta 4 (segunda metade). É a Lei do Degrau em forma de bloco.

- **Contém:** 3 a 6 linhas mostrando que o problema é COMPOSTO: se repete no próximo
  ciclo, cobra juros (tempo, dinheiro, pessoas, saúde, identidade) e não se resolve
  sozinho. Fechar com uma pergunta reflexiva, não com uma ameaça.
- **Nunca:** terrorismo, cifras inventadas, drama. Em marcas sóbrias o custo é dito com
  serenidade, e por isso mesmo pesa mais.
- **Porquê:** aversão à perda é aproximadamente 2x mais motivadora que expectativa de
  ganho. Sem este degrau, a única urgência que sobra na página é a do lote, que é
  externa e mais fraca. É a diferença entre "que bonito" e "eu preciso resolver isso".

### D4 · A Virada (mecanismo único)

Responde às perguntas 5 e 6. O momento em que a página deixa de falar do problema e
apresenta O CAMINHO.

- **Contém:**
  - Uma frase-ponte que invalida as soluções tentadas sem humilhar quem tentou ("não é
    falta de técnica; técnica não alcança padrão").
  - O **mecanismo com NOME próprio** (método, sistema, mapa). Nome transforma processo em
    propriedade: só existe aqui.
  - O caminho em **3 a 5 passos/etapas**, cada um com título + 2 ou 3 linhas + resultado
    parcial ("você sai deste passo com...").
- **Nunca:** despejar o conteúdo inteiro (currículo é atrito), jargão interno, mais de 5
  passos (deixa de parecer caminho e vira curso).
- **Porquê:** a pergunta 5 ("por que nada funcionou?") precisa de resposta ANTES do
  mecanismo, senão o cérebro arquiva a solução nova na mesma gaveta das anteriores.
  O nome + passos cria fluência de processamento: o que parece simples de percorrer
  parece possível de alcançar.
- **Atenção ao extrato:** esta é a dobra que mais abre débito depois do H1 (alegação de
  mecanismo). A prova que a quita precisa estar a no máximo uma dobra (Lei 6 e Lei 12).

### D5 · A Pilha de Valor ("você sai com")

Responde à pergunta 7. A dobra que quase todo mundo esquece e que sustenta o preço.

- **Contém:** lista tangível e enxuta (4 a 7 itens) do que a pessoa LEVA: entregáveis,
  acessos, artefatos, transformações nomeadas. Cada item concreto o bastante para ser
  imaginado ("um roadmap dos próximos 6 meses, do destino até a ação de hoje").
- **Nunca:** inflar com bônus irrelevantes, listar features sem tradução em ganho, usar
  valores fictícios riscados ("de R$ 2.997 por...") em marcas de discernimento.
- **Porquê:** Lei do Valor Antes do Preço. É contra esta pilha que o número da oferta
  será pesado. Sem pilha, o preço é caro por definição.

### D6 · A Prova

Responde às perguntas 8 e 9. Sem prova, tudo acima é alegação — é aqui que o extrato de
crença (§0.2) faz o grosso da quitação.

- **Hierarquia de força (usar a mais forte disponível):**
  1. Resultado específico com número e nome ("reduzi o turnover do meu time em 40%, Maria, Head de CX");
  2. Depoimento específico sobre a TRANSFORMAÇÃO (não sobre a pessoa ser "incrível");
  3. Demonstração (antes/depois, amostra do método em ação);
  4. Autoridade emprestada (mídia, certificações, volume: "300 líderes acompanhados");
  5. Prova social genérica (avaliações, logos) — a mais fraca, nunca a única.
- **Fonte:** só entra prova do inventário auditável do brief (§5.1, campo 5). Depoimento em
  vídeo curto (30–60s, com nome e contexto) vale como nível 2 forte; regras em §3.10.
- **Quem conduz/fundou** entra aqui: foto REAL (nunca stock, nunca IA), credencial
  concreta em 2 linhas, e a razão pessoal de fazer o que faz (1 linha).
- **Regra de colocação:** prova perto das promessas e perto do CTA da oferta (Lei da
  Prova Vizinha). Se a prova ainda é fraca (negócio novo), usar prova emprestada do
  histórico do fundador e MOVER a seção "quem conduz" para depois da oferta, para o
  vazio não interromper a subida.
- **Nunca:** depoimento sem nome/contexto, elogio vago, parede de logos sem relação com
  o ICP, e jamais depoimento inventado.

### D7 · Qualificação (para quem é / para quem não é)

Responde à pergunta 9 pela via da identidade.

- **Contém:** duas colunas ou duas listas: "é para você se..." (3 a 4 critérios ligados a
  situação e desejo, não a demografia) e **"talvez ainda não seja, se..."** (2 a 3
  critérios honestos).
- **Porquê:** a exclusão explícita é o gatilho de pertencimento mais subestimado que
  existe: quem passa no filtro se compromete mais (consistência), o lead desqualificado
  sai antes de virar custo, e a honestidade da segunda lista empresta crença para todas
  as outras promessas da página (é o crédito de "qualificação negativa" do extrato).

### D8 · A Oferta (a dobra da decisão)

Responde às perguntas 10 e 11. Aqui a página inteira é cobrada — e o extrato de crença
precisa estar no azul (Lei 12).

- **Contém, nesta ordem interna:**
  1. **Recapitulação de valor em 1 linha** (eco da pilha da D5);
  2. **Preço com ancoragem honesta**: parcelamento, comparação com o custo do problema,
     ou lotes. Lotes POR TEMPO (o preço sobe na data) criam antecipação verdadeira;
     lotes por quantidade só se a contagem for real e auditável;
  3. **Escassez real** (vagas, datas, capacidade) com o motivo da escassez ("20 pessoas
     para que você seja visto, não só inscrito"): escassez com razão convence, escassez
     sem razão cheira a tática;
  4. **CTA primário** (o mesmo verbo/promessa do CTA da dobra 1);
  5. **Risk reversal COLADO no CTA**: garantia, reembolso, transferência. A última coisa
     que o dedo lê antes de clicar deve desarmar o "e se der errado";
  6. **Order bump / próximo passo do funil** discreto, se houver.
- **Visual:** este é o lugar do clímax de contraste da página (Lei 8). O item vigente
  (lote/plano recomendado) é o ÚNICO aceso; o resto é contexto.
- **Por tipo de oferta** (evento, serviço, assinatura, ticket alto): a mecânica interna
  muda — ver a matriz do §4.4 antes de escrever esta dobra.
- **Nunca:** timer falso, "mais escolhido" em lote temporal (não faz sentido lógico e o
  leitor percebe), preço antes do valor, mais de uma decisão simultânea (escolher plano E
  turma E bônus no mesmo bloco: sequenciar).

### D9 · Objeções (FAQ)

Responde ao resíduo da pergunta 11. O FAQ é a página de vendas dos céticos: muitos pulam
tudo e leem só ele.

- **Contém:** 5 a 8 perguntas REAIS, escritas na voz do cliente (com o ceticismo dele:
  "isso é mais um curso de autoajuda?"), respostas curtas que respondem de verdade E
  reafirmam valor. Sempre incluir: tempo/esforço, "já tentei X e não funcionou", risco/
  garantia, e a objeção identitária do ICP (a que ele tem vergonha de perguntar).
- **Nunca:** perguntas de marketing disfarçadas ("por que este é o melhor programa do
  mercado?"), respostas defensivas, FAQ como despejo de informação operacional.
- **Sinal de projeto:** se uma pergunta do FAQ é aberta por mais da metade dos leitores
  (Parte 7), ela não é objeção residual, é objeção central: a resposta sobe para o corpo
  da página como dobra ou bloco.

### D10 · O Fecho (última porta)

Responde à pergunta 12 pela última vez, para quem precisou da página inteira.

- **Contém:** eco emocional da promessa do H1 (a página termina onde começou, uma oitava
  acima), 2 ou 3 linhas de convite sereno, CTA final, e um lembrete da escassez real.
- **Nunca:** argumento novo (fecho não é lugar de informação inédita), desespero
  ("última chance!!!"), múltiplas opções.
- **Porquê:** efeito de posição serial: as pessoas lembram do começo e do fim. O fim é a
  assinatura emocional que ela leva para a decisão (muitos fecham a página e voltam
  depois; o fecho é o que volta com eles).

### Rodapé

Nome/CNPJ, contato, termos, pagamento. Sem links de navegação, sem novidade.

### 1.1 Orçamento de scroll (proporção de referência)

Cada dobra tem um tamanho que serve à sua função. Referência em alturas de tela (vh,
desktop; mobile re-hierarquiza, §3.8):

| Dobra | Altura alvo | Nota |
|---|---|---|
| D1 Hero | 90–100vh | a dobra É a tela; nada essencial abaixo da linha |
| D2 Espelho | 60–90vh | denso de texto, curto de scroll |
| D3 Custo | 50–70vh | a mais curta das dobras de texto: peso, não extensão |
| D4 Virada | 100–140vh | a mais longa permitida (nome + 3–5 passos) |
| D5 Pilha | 60–90vh | lista escaneável |
| D6 Prova | 80–120vh | cresce com a qualidade (nunca com a quantidade) da prova |
| D7 Qualificação | 40–60vh | respiro |
| D8 Oferta | 100–140vh | o clímax merece espaço; 1 decisão por bloco |
| D9 FAQ | 60–100vh | acordeão fechado por padrão |
| D10 Fecho | 50–80vh | centralizado, sereno |

Total de referência: **8 a 11 telas** (frio até 12; quente 5 a 6 — Parte 4.1). Página de
15+ telas quase sempre é currículo disfarçado de página de vendas.

---

## PARTE 2 · O porquê: a física da tensão

### 2.1 Os três fios da tensão

Tensão não é um número só; são três fios trançados:

- **Tensão de identificação** ("isso é sobre mim"): sobe no espelho e na qualificação.
- **Tensão de resolução** ("quero a saída, quero agora"): sobe no custo, no mecanismo e
  na pilha; é a que aponta para o botão.
- **Fio de segurança** ("posso confiar, não vou me machucar"): sobe com prova, garantia
  e honestidade; não é tensão, é o que PERMITE agir sob tensão.

A venda exige os três: identificação sem resolução emociona e não converte; resolução sem
segurança gera carrinho abandonado; segurança sem tensão gera "salvei nos favoritos".

### 2.2 A curva de voltagem ideal (0 a 10)

```
V
10|                                              ____
 9|                        (pico do custo)      /D8  \        (fecho)
 8|                     ___                    / OFERTA\      ____
 7|                    /D3 \        ____      /  clímax \    /D10\
 6|          ____     /custo\      /D5  \    /  visual + \  /fecho\
 5|         /D2  \   /       \    /pilha \__/   decisão   \/      \
 4|  ____  /espelho\/         \  /  D4-D5  D6-D7            D9     \
 3| /D1  \/         \          \/ mecanismo prova/qualif.   FAQ     \
 2|/ hero \          \         (alívio COM  (segurança      (vale    \
 1|promessa\          \         direção)     sobe)          técnico)  \
 0+---------------------------------------------------------------------> scroll
      ^                          ^                ^              ^
     CTA 1                  CTA 2 (fim         CTA 3 (D8,      CTA 4
   (primário)              D4/D5, discreto)   o grande)      (fecho)
```

A linha de portas embaixo do eixo é a Lei do Deserto aplicada: um CTA a um olhar de
distância de cada pico de tensão de resolução.

Leitura da curva, dobra a dobra:

| Dobra | Voltagem entra -> sai | Fio dominante | O que a move | Peso visual alvo |
|---|---|---|---|---|
| D1 Hero | 2 -> 4 | resolução (promessa) | curiosidade + pertencimento | ALTO (tipografia) |
| D2 Espelho | 4 -> 6 | identificação | reconhecimento ("como sabia?") | médio |
| D3 Custo | 6 -> 8/9 | resolução (perda) | aversão à perda, juros do problema | médio, mais denso |
| D4 Virada | 9 -> 6 | resolução (esperança) | mecanismo nomeado, passos possíveis | médio-alto |
| D5 Pilha | 6 -> 7 | resolução (desejo) | tangibilidade, imaginação de posse | médio |
| D6 Prova | 7 -> 7 | segurança | evidência, rosto real | médio |
| D7 Qualificação | 7 -> 7,5 | identificação | pertencer ao grupo filtrado | baixo (respiro) |
| D8 Oferta | 7,5 -> 9,5 | os três juntos | valor pesado contra preço + escassez real | **MÁXIMO (clímax)** |
| D9 FAQ | 9,5 -> 6 | segurança | dúvidas desarmadas uma a uma | baixo |
| D10 Fecho | 6 -> 8 | identificação + resolução | eco da promessa, última porta | médio-alto |

### 2.3 O extrato de crença sobre a curva

A curva de voltagem diz onde a tensão sobe; o extrato (§0.2) diz se o leitor ACREDITA na
subida. Sobreposição alvo:

- **D1–D5 é a zona de endividamento:** promessa (H1), mecanismo (D4) e pilha (D5) abrem
  débito. É saudável dever aqui — página que não promete não tensiona.
- **D6–D7 é a zona de quitação:** prova + qualificação negativa devem trazer o saldo a
  zero ou acima ANTES da fronteira da D8.
- **D8 credita na boca do caixa:** garantia/risk reversal é o último crédito, colado no CTA.
- **D9 cobre o cheque especial:** FAQ quita os débitos residuais de quem ainda deve.

Erro clássico que esta sobreposição revela: wireframe com D6 fraca e D4 grandiosa — a
página tensiona bem e converte mal, porque cruza a oferta devendo. O diagnóstico "scroll
alto + clique baixo" (Parte 7) quase sempre é esse saldo negativo.

### 2.4 As sete regras de cadência

1. **Nunca dois alívios seguidos.** Depois de cada vale (método explicado, dúvida
   respondida), a próxima dobra reergue tensão (custo, desejo, escassez). Duas dobras
   seguidas de conforto e o leitor está confortável demais para agir.
2. **Nunca dois picos seguidos.** Depois do custo (D3), alivie COM DIREÇÃO (D4). Tensão
   sem válvula vira estresse, e estresse fecha aba.
3. **O degrau precede a virada.** D4 sem D3 é palestra. A solução só tem o tamanho do
   problema sentido imediatamente antes.
4. **Tensão nunca volta a zero.** Mesmo nos vales (FAQ), manter um fio: escassez lembrada
   na microcopy, CTA visível. Zero tensão = página "para ler depois".
5. **Clímax coincidente.** O momento de maior peso visual (contraste, cor, profundidade,
   escala) deve ser o momento de maior decisão (D8). Se a página inteira é igualmente
   bonita, a oferta é visualmente um item de lista.
6. **A porta vai até o pico** (Lei do Deserto). Mapear onde a tensão de resolução atinge
   picos (fim da D4, fim da D5, D8, D10) e garantir um CTA a um olhar de distância de
   cada um. Cadência padrão: D1 (primário) -> fim de D4/D5 (secundário discreto) -> D8
   (primário, o grande) -> D10 (primário).
7. **O fecho é uma oitava acima do hero.** Mesma promessa, mais profunda, agora com tudo
   o que o leitor já sabe. Círculo fechado = página que "faz sentido" como narrativa.

### 2.5 Cadência de contraste visual (a tensão que se vê)

O olho também tem curva. Regras Continuum:

- **Ritmo de fundos:** alternar tratamentos (claro liso -> claro com textura -> faixa de
  cor -> claro) a cada 1 ou 2 dobras. Três fundos iguais seguidos = deserto visual.
- **Um único clímax.** UMA dobra com contraste máximo (fundo escuro/denso da paleta, ou
  inversão), reservada para a oferta ou o fecho. Dois clímax = nenhum.
- **Peso tipográfico acompanha a voltagem:** títulos maiores e mais dramáticos nos picos
  (D1, D8, D10); nos vales, tipografia serve à leitura, não ao impacto.
- **Densidade como tensão:** blocos densos (listas, tabela de oferta) tensionam; espaço
  em branco alivia. Usar densidade de propósito, não por acidente de conteúdo.
- **Assimetria nos picos, simetria nos vales.** Composição assimétrica cria inquietação
  produtiva; centralizado acalma. O fecho centralizado é o único "amém" da página.

---

## PARTE 3 · Os elementos: anatomia fina

### 3.1 Headlines (H1)

Quatro padrões que funcionam, em ordem de preferência Continuum:

1. **Estado de chegada:** "Lidere com tudo o que você é." (o depois, encarnado)
2. **Antes -> depois:** "Do bom líder ao líder inteiro."
3. **Reconhecimento + upgrade:** "Você já lidera bem. Que tal liderar inteiro?"
4. **Resultado + sem a dor:** "Clientes todo mês, sem depender de indicação."

Régua: específico o bastante para ser de UMA página; curto o bastante para caber em duas
linhas no mobile; zero superlativo. Se o H1 funciona no concorrente, ele não posiciona.

### 3.2 Subheads

Fórmula: **reconhece + promete + aponta o como.** ("Você já lidera bem. Falta liderar sem
se trair. Em três dias, você reconhece o padrão que te segura e sai com um plano que é
seu.") O subhead é onde a promessa ganha mecanismo; sem ele, o H1 é poesia.

### 3.3 CTAs

- **Copy:** primeira pessoa e específica ("Quero minha vaga", "Escolher minha turma",
  "Receber o diagnóstico"). Nunca "Enviar", "Saiba mais", "Clique aqui".
- **Microcopy sob o botão:** o desarme da última objeção (preço de entrada, garantia,
  "leva 2 minutos", "sem cartão"). É o texto mais lido da página depois do H1.
- **Hierarquia:** um primário por tela, no máximo. Secundários são discretos (link,
  outline) e nunca competem em cor/peso.
- **Consistência:** o verbo do CTA é o MESMO da D1 à D10 (mudar o verbo no meio quebra o
  trilho mental do compromisso).
- **Destino:** por padrão, CTAs anteriores à D8 ancoram NA OFERTA (o leitor decide vendo
  o valor inteiro); só a D8 e o fecho abrem checkout/formulário direto. Exceções: público
  quente (§4.1) e ticket baixo com preço já exposto na D1 — aí toda porta pode ir direto.

### 3.4 Preço e ancoragem

- Valor sempre antes do número (Lei 5).
- **Âncoras honestas:** parcelamento ("12x de..."), custo do problema ("uma contratação
  errada custa X"), comparação interna (mentoria custa 40x o workshop). Âncora falsa
  (preço riscado inventado) é proibida.
- **Lotes por tempo:** mostrar o lote vigente aceso, o anterior encerrado, o próximo com
  data. A tensão vem de ver o trem passando, não de um selo.
- **Ticket alto:** a página vende a CONVERSA (aplicação, diagnóstico), não o contrato.
  Nesse caso o "preço" da página é o custo do próximo passo (tempo, formulário).

### 3.5 Ícones e imagens

- **Ícones:** só com função de escaneabilidade (marcar itens de lista, formato). Um único
  sistema (linha fina OU preenchido, nunca misturado), do design system. **Nunca emoji
  como ícone. Nunca um ícone decorativo por feature** (assinatura de template).
- **Imagens:** rosto humano real vende mais que qualquer ilustração; direção do olhar da
  foto apontando para o texto/CTA guia o olho do leitor. Proibido: stock genérico,
  pessoas de banco de imagem sorrindo, renders de IA como "foto".
- **Elementos de marca** (geometrias, texturas, assinaturas visuais): são temperos, nunca
  o prato. Se remover o elemento e a dobra continuar funcionando, ele está no tamanho certo.

### 3.6 Garantia e risk reversal

Tipos, do mais forte ao mais fraco: incondicional com prazo > condicional clara ("se
participar dos 3 dias e não sentir X...") > transferência/crédito > "sem letra miúda"
implícito. Onde: colado no CTA da oferta + entrada própria no FAQ. A garantia não é custo,
é compra de confiança: quem quase compraria, compra; quem pediria reembolso de má fé é
estatisticamente marginal. **Garantia condicional é obrigação de resultado: só entra na
página se as condições forem mensuráveis e o contrato as cobrir** (regra jurídica:
`80-juridico/POLITICAS-JURIDICAS.md`).

### 3.7 Formulário e handoff de checkout

- Cada campo a mais é atrito; pedir só o que o próximo passo exige.
- O clique do CTA deve levar a uma página que CONTINUA a conversa (mesma promessa, mesma
  cara); mudança brusca de identidade no checkout mata vendas silenciosamente.
- Depois do pagamento: instrução imediata do próximo passo (grupo, e-mail, calendário).
  Pós-compra sem chão é a primeira semente do reembolso.

### 3.8 Mobile (onde a maioria decide)

- A dobra mobile é OUTRA dobra: re-hierarquizar, não espremer. H1 em no máximo 3 linhas,
  CTA no primeiro scroll.
- Zona do polegar: CTAs e acordeões alcançáveis; considerar CTA sticky discreto após a D8.
- Tabelas viram cards empilhados; o lote vigente vem PRIMEIRO na pilha.
- Testar em aparelho real (emulador e screenshot mentem sobre fonte, dobra e overflow).

### 3.9 Velocidade e animação

- O valor da primeira dobra NUNCA depende de JS: texto e CTA nascem no primeiro paint;
  animação é revelação progressiva do que já está lá.
- Micro-interações de 150 a 300ms; revelações de até 700ms; nada acima de 1s no caminho
  crítico. `prefers-reduced-motion` sempre respeitado.
- Animação com função (guiar o olho, contar o método, dar peso ao clímax). Se é só
  "bonito", corta: cada efeito é atrito de performance.

### 3.10 Vídeo e VSL

- **Regra-mãe: a página funciona 100% com todos os vídeos parados.** Vídeo é amplificador
  de crença e tensão, nunca o único portador da mensagem (nem todo mundo pode dar play).
- **Nunca autoplay com som.** Autoplay mudo e curto (loop de demonstração) é tolerado fora
  do caminho crítico de leitura; qualquer vídeo com fala espera o clique.
- **Thumbnail é uma mini-dobra:** rosto real + uma frase de curiosidade específica.
  Thumbnail genérica é CTA desperdiçado.
- **Legendas sempre** (a maioria assiste sem som). Duração alvo: depoimento 30–60s;
  demonstração 1–3min; VSL segue roteiro próprio.
- **Página VSL-first:** quando o vídeo é a peça central (lançamentos, ticket alto), as 12
  perguntas e a curva de voltagem continuam mandando — no ROTEIRO do vídeo. Abaixo dele, a
  página vira versão comprimida: pilha (D5), prova (D6), oferta (D8), FAQ (D9), fecho.
  O CTA pode ser revelado por tempo (delay) SOMENTE se o teste provar ganho; por padrão,
  porta visível.

---

## PARTE 4 · Modulações (quando fugir do padrão)

### 4.1 Por temperatura de tráfego

| | FRIO (ads, viral) | MORNO (social, indicação) | QUENTE (lista, remarketing) |
|---|---|---|---|
| D1 | pertencimento explícito, promessa clara, zero jargão de marca | promessa + mecanismo já no subhead | oferta quase imediata ("as turmas de agosto abriram") |
| D2-D3 | completas e vívidas (ele não sabe que tem o problema nomeado) | encurtadas | cortadas ou 2 linhas de lembrete |
| Prova | máxima, o mais cedo possível | normal | mínima (já confia) |
| Comprimento | página inteira | 70% | 40%: valor, oferta, FAQ, fecho |

Regra de ouro: **message match**: a primeira dobra repete a promessa do anúncio/post que
trouxe o clique, com as mesmas palavras. Quebra de correspondência = bounce. Quando o
tráfego é gerido por nós, o par anúncio↔D1 é definido em conjunto com o
`METODO-TRAFEGO-PAGO.md` (matriz de criativos §4): a página não se escreve isolada do
anúncio que a alimenta.

### 4.2 Por nível de consciência do problema (Schwartz aplicado)

- **Inconsciente do problema:** a página começa no sintoma vivido (D2 vem antes de
  qualquer promessa de solução).
- **Consciente do problema, não da solução:** padrão canônico deste playbook.
- **Consciente da solução, não do produto:** D4 (mecanismo) sobe na página; diferenciação
  contra alternativas ganha bloco próprio.
- **Consciente do produto:** oferta, prova e razão-para-agora dominam; o resto encolhe.

### 4.3 Por tom de marca

O esqueleto (dobras, curva, leis) é invariante. O que muda é a VOZ dos gatilhos:

- **Marca de discernimento** (padrão Continuum premium): custo dito com serenidade,
  escassez com motivo, qualificação negativa honesta, zero hype, zero countdown.
- **Marca de energia** (varejo, lançamento agressivo): picos mais altos e mais próximos,
  urgência mais explícita, MAS as leis 6 (prova), 9 (escassez real) e 10 (gate) seguem
  inegociáveis. A Continuum não constrói página que mente, para nenhum cliente.

### 4.4 Por tipo de oferta (a mecânica da D8 muda)

O esqueleto D1–D10 vale para os quatro tipos; o que muda é a decisão que a D8 pede, a
escassez que é REAL em cada modelo e a prova que mais pesa:

| | **Evento/curso com data** | **Serviço done-for-you** (site, assessoria) | **Assinatura/comunidade** | **Ticket alto → aplicação** |
|---|---|---|---|---|
| O que o CTA compra | a vaga | a conversa OU o pacote fechado | a entrada (1º mês/anual) | a candidatura/call |
| Escassez real disponível | data + lote + capacidade da sala | capacidade real de agenda/onboarding (número auditável, não retórica) | preço/condição de fundador com data de fim | vagas de agenda do fundador |
| Prova que mais pesa | transformação de ex-alunos | portfólio + antes/depois + processo visível | vida real da comunidade (prints, rituais, permanência) | casos com número e nome |
| Mecânica da D8 | lotes por tempo, vigente aceso | 1 pacote-herói com escopo fechado; alternativa vira conversa, não menu | mensal vs anual, UM aceso; deixar claro o que acontece no dia 1 | sem preço na página (ou faixa); o "preço" é o custo do próximo passo |
| Pós-CTA imediato | checkout -> grupo/agenda | formulário curto -> call agendada | onboarding no primeiro minuto | aplicação -> resposta com prazo dito |
| Risco específico | vender além da capacidade da experiência | prometer prazo que a agenda não sustenta | churn do mês 2 por onboarding vazio | atrair curioso sem filtro (D7 reforçada) |

Regra Continuum transversal: **a promessa da página nunca excede a capacidade de entrega
registrada** (`00-core/POLITICAS-DE-DECISAO.md` §4). Página que vende o que a agenda não
entrega é dívida com juros de reputação.

---

## PARTE 5 · A linha de produção (como a página nasce)

A v1.0 descrevia o objeto; esta parte descreve a fábrica. Ordem inegociável: **brief →
esqueleto → copy → voz → design → gate.** Design antes de copy é decoração de suposição.

### 5.1 O brief de entrada (gate de entrada — Lei 11)

Nenhuma dobra se escreve sem estes 9 campos. Campo vazio = pergunta ao dono da oferta.

1. **Oferta:** o que é, formato, preço e condições reais, escassez VERDADEIRA disponível
   (data? vagas? capacidade?), garantia que o dono topa assinar.
2. **ICP e léxico:** quem é, situação de partida, desejo de chegada, objeção identitária,
   e as PALAVRAS que essa pessoa usa (áudio, print, pesquisa — matéria-prima da D2).
3. **Promessa central:** o estado de chegada em uma frase (vira candidata a H1).
4. **Mecanismo:** o caminho em 3–5 passos e o nome próprio (existente ou a batizar).
5. **Inventário de provas:** TUDO que existe e é auditável, classificado pela hierarquia
   da D6 (1 a 5). O que não existe não entra; o buraco vira estratégia (prova emprestada
   do fundador, D6 pós-oferta).
6. **Origem do tráfego:** temperatura (4.1) + a peça exata que trará o clique (message
   match é com palavras, não com tema).
7. **Nível de consciência** (4.2) e **tipo de oferta** (4.4).
8. **Voz:** skill de voz aplicável (cliente, Victor, Nakielly) e tom de marca (4.3).
9. **Destino do clique:** checkout/formulário/call, meios de pagamento, e o que acontece
   nos 5 minutos seguintes à conversão (3.7).

### 5.2 A ordem de escrita (de trás para frente)

A página se LÊ de cima para baixo e se ESCREVE quase ao contrário:

1. **Oferta primeiro (D8 + D5).** Se a oferta não fica de pé sozinha numa página em
   branco (valor, número, escassez com motivo, garantia), nenhuma copy salva. Descoberta
   de oferta fraca aqui custa uma conversa; descoberta na véspera custa o lançamento.
2. **Mapa de quitação (D6).** Casar cada promessa com a prova do inventário. Onde não há
   prova, a promessa desce de tamanho AGORA (e não no FAQ, respondendo reclamação).
3. **Mecanismo (D4).** Nome + passos + resultado parcial de cada passo.
4. **Espelho e custo (D2 + D3).** Com o léxico do brief; a cena antes do conceito.
5. **FAQ (D9).** Das objeções reais do campo 2, não das que gostaríamos de receber.
6. **Hero por último (D1).** Só depois de conhecer a página inteira dá para prometer com
   precisão: o H1 é o destilado, não o rascunho. Fecho (D10) junto: é o eco dele.
7. **Passe de voz.** A copy inteira cruza as skills da Parte 5.3 (voz + stop-slop).
8. **Design sobre o wireframe aprovado.** A curva de contraste (2.5) se projeta sobre a
   curva de voltagem já definida; o design amplifica decisões, não as toma.
9. **Gate de saída (Parte 6)** + aprovação humana registrada.

### 5.3 Handoffs obrigatórios (a árvore de copy aplicada)

Este método define estrutura; ele NUNCA sai sozinho:

| Situação | Combinação obrigatória |
|---|---|
| Toda página de vendas | este método + `10-skills/copywriting-fable5.skill.md` + `10-skills/stop-slop.skill.md` |
| Peça-mestra (página de campanha/lançamento, VSL) | + `10-skills/copywriting-avancado.skill.md` (Schwartz, coreografia de objeções, copy↔visual) |
| Página de cliente | + skill de voz do cliente (ex.: `debora-voice`). NUNCA `voz-victor` |
| Página nossa na voz do Victor | + `10-skills/voz-victor.skill.md` |
| Tráfego pago alimentando a página | par anúncio↔D1 definido com `METODO-TRAFEGO-PAGO.md` §4 |
| Preço/garantia da NOSSA oferta | validar contra `00-core/POLITICAS-DE-DECISAO.md` §5 (piso, teto, entrada) |
| Garantia condicional (qualquer página) | cláusulas mensuráveis, espelhadas no contrato (`80-juridico/`) |

Uso operacional rápido (revisão, wireframe, decisão de estrutura): a skill resumida
`10-skills/pagina-de-vendas.skill.md` basta. Build ou auditoria profunda: este arquivo
inteiro no contexto.

---

## PARTE 6 · Gate de publicação (checklist)

**Entrada (antes de escrever — Lei 11)**
- [ ] Brief de entrada com os 9 campos preenchidos (5.1); nenhum campo inventado.
- [ ] Inventário de provas auditável; zero prova fabricada ou "melhorada".
- [ ] Escassez declarada é verificável no mundo real (data, agenda, contagem).

**Mensagem**
- [ ] Teste dos 5 segundos com alguém de fora: o que é, para quem, o que ganha, quanto/próximo passo.
- [ ] H1 é promessa de estado, específica, sem superlativo.
- [ ] Eyebrow qualifica o público na primeira dobra.
- [ ] As 12 perguntas têm resposta, na ordem, e nada na página está fora delas.
- [ ] Message match com a origem do tráfego (palavras, não tema).

**Tensão**
- [ ] D3 (custo de continuar) existe e tem peso.
- [ ] Nenhum trecho com 2+ telas sem CTA.
- [ ] Clímax visual coincide com a oferta (ou fecho).
- [ ] Fecho ecoa o H1 uma oitava acima.

**Crença (Lei 12)**
- [ ] Mapa de quitação preenchido: toda promessa forte tem prova nomeada a ≤ 1 dobra.
- [ ] Saldo do extrato ≥ 0 na entrada da D8 (leitura de wireframe, dobra a dobra).
- [ ] Qualificação inclui "para quem NÃO é".
- [ ] Foto real de quem conduz + credencial concreta (ou seção movida para pós-oferta).

**Valor e oferta**
- [ ] Pilha "você sai com" tangível ANTES do preço.
- [ ] Ancoragem honesta; escassez real com motivo; zero timer falso.
- [ ] Risk reversal colado no CTA; se condicional, condições mensuráveis e cobertas em contrato.
- [ ] Uma decisão por bloco (plano OU turma OU bump, em sequência).
- [ ] Mecânica da D8 conferida contra o tipo de oferta (§4.4).
- [ ] FAQ cobre: tempo, "já tentei", risco, e a objeção identitária do ICP.

**Atrito (varredura das 4 famílias — §0.3)**
- [ ] Cognitivo: nenhuma frase que precise ser relida; informação na dobra da pergunta certa.
- [ ] Decisório: um primário por tela; nenhuma escolha dupla no mesmo bloco.
- [ ] Sensorial/técnico: primeira dobra inteira no primeiro paint; vídeo sem autoplay com som; legendas.
- [ ] Confiança: números batem entre dobras; promessa do H1 = promessa da D8.

**Técnica e integridade**
- [ ] Mobile testado em aparelho real (dobra, oferta, CTA sticky).
- [ ] Contraste AA, foco visível, teclado funciona, reduced-motion respeitado.
- [ ] Eventos de medição instalados (§7.1) e pixel/UTM conferidos quando há tráfego pago.
- [ ] Zero placeholder {{...}} visível; zero travessão se a voz da marca proíbe.
- [ ] Copy cruzou stop-slop + skill de voz aplicável; aprovação humana registrada.

---

## PARTE 7 · Medição e diagnóstico

### 7.1 Instrumentação padrão (por dobra)

Nomenclatura Continuum (mesmos nomes em toda página, para comparar entre páginas):

- `view_dN` — fronteira de cada dobra atingida (scroll depth por dobra, não por %).
- `cta_click_{d1|d4|d8|d10}` — clique por porta (QUAL porta converte importa mais que quantas).
- `faq_open_{n}` — abertura por pergunta do FAQ.
- `video_play` / `video_50` — se houver vídeo (§3.10).
- `checkout_start` / `purchase` (ou `form_start` / `form_submit` / `call_booked`).

Tempo na D8 e gravações de sessão (quando disponíveis) completam o quadro.

### 7.2 Árvore de diagnóstico (sintoma → dobra suspeita → primeira correção)

| Sintoma | Onde olhar | Primeira correção |
|---|---|---|
| Bounce alto, < 10s | D1 / message match | reescrever promessa com as palavras da peça de origem; teste dos 5 segundos |
| Scroll morre na fronteira D2/D3 | espelho genérico | trocar conceito por cena; léxico do brief, não da persona imaginada |
| Scroll morre na D4 | mecanismo | menos passos, mais resultado parcial; currículo virou atrito |
| Scroll alto + clique baixo | crença (saldo negativo) | prova vizinha das promessas maiores; garantia mais visível; §2.3 |
| Tempo alto na D8 sem clique | oferta | recap de valor antes do preço; UMA decisão por bloco; âncora honesta |
| Clique alto + venda baixa | checkout/handoff | continuidade visual, campos a menos, meios de pagamento; a página não é a ré |
| FAQ com abertura > 50% em uma pergunta | objeção central mal alocada | promover a resposta a bloco/dobra no corpo da página |
| Conversão boa no quente, ruim no frio | modulação 4.1 ignorada | versão fria completa (espelho/custo vívidos, prova cedo) |

### 7.3 Ordem de otimização (impacto por esforço)

1º primeira dobra, 2º oferta, 3º prova, 4º cadência de CTA, 5º resto. Nunca otimizar a
D7 antes da D1.

### 7.4 Protocolo de teste

- **Um teste por vez**, com hipótese escrita ("mudar X move Y porque Z") e critério de
  parada definido ANTES (amostra mínima ou data), para a ansiedade não decidir no meio.
- Sem tráfego para testar: aplicar o padrão deste playbook e coletar dado qualitativo
  (gravações de sessão, 5 entrevistas > opinião interna, teste dos 5 segundos com
  estranhos).
- Resultado de teste (ganho, perda ou empate) volta para ESTE arquivo: vira regra nova,
  exceção documentada ou anti-padrão promovido.

---

## APÊNDICE · Anti-padrões (a lista da vergonha)

Sinais de página que saca em vez de depositar. Nenhum passa no gate:

1. Hero centralizado clichê (título + subtítulo + 2 botões) com carrossel.
2. Promessa absoluta ("resultado garantido", "em 7 dias", "para qualquer pessoa").
3. Timer falso, escassez sem motivo, "mais vendido" em lote temporal.
4. Preço antes do valor; número sem pilha.
5. Deserto de CTA (3+ telas sem porta) ou floresta de CTAs (3 portas por tela).
6. Depoimento sem nome, elogio vago, logo sem relação com o ICP.
7. Stock genérico, render de IA como foto, emoji como ícone, um ícone 3D por feature.
8. Gradiente neon "de IA", glassmorphism em tudo, animação que atrasa o valor.
9. Parede de texto sem hierarquia OU fragmentação total (bullets e negrito em tudo).
10. FAQ de marketing ("por que somos os melhores?").
11. Placeholder no ar, link quebrado, checkout com outra cara.
12. Página que o próprio dono não mandaria para um amigo sem pedir desculpas.
13. Notificação fake de compra ("Fulano acabou de garantir a vaga") e contador de
    visitantes inventado: escassez social fabricada é a Lei 9 quebrada em público.
14. Pop-up (entrada, saída, desconto) que sequestra a leitura antes da D2: a página
    interrompendo a própria venda.
15. Seção institucional autobiográfica no meio da subida ("nossa história", linha do
    tempo da empresa): biografia serve à prova (D6), nunca ao ego.
16. Duas ofertas diferentes na mesma página: página de vendas tem UM destino; o resto
    é funil, não dobra.
17. Texto com cheiro de IA: tríades genéricas, simetria perfeita de bullets, adjetivos
    em fila, "não é X, é Y" em série (reprova no stop-slop antes de chegar ao gate).
18. Curva plana: dez dobras com a mesma altura emocional e o mesmo peso visual. Página
    sem pico projetado é catálogo com botão.

---

## CHANGELOG

- **v2.0 (18/07/2026)** — auditoria estrutural: o método deixou de descrever só o objeto
  e passou a descrever a fábrica. (a) Leis 11 (Brief) e 12 (Débito de Crença), numeração
  1–10 preservada; (b) extrato de crença + mapa de quitação (§0.2, §2.3) e inventário de
  atrito em 4 famílias (§0.3): as três correntes do circuito agora têm instrumento;
  (c) orçamento de scroll por dobra (§1.1); (d) regras de vídeo/VSL (§3.10); (e) modulação
  por tipo de oferta (§4.4: evento, done-for-you, assinatura, ticket alto); (f) Parte 5
  nova: brief de entrada, ordem de escrita de trás para frente, handoffs da árvore de
  copy; (g) gate reorganizado com blocos de Entrada, Crença e Atrito; (h) Parte 7 com
  eventos padronizados e árvore de diagnóstico; (i) anti-padrões 13–18. **Curva de
  voltagem preservada** (agora com as portas de CTA marcadas no eixo).
- **v1.0 (01/07/2026)** — criação, a partir da auditoria da landing Carreira Alinhada
  (Fable 5) + prática de CRO.

---

*Playbook Continuum AI Systems · v2.0 · Autor: Fable 5 sob direção de Victor Senna.*
*Alimente este documento: cada auditoria, teste A/B e página lançada deve voltar aqui
como regra nova, exceção documentada ou anti-padrão promovido.*
