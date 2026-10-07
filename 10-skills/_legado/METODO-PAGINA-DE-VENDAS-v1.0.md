# MÉTODO CONTINUUM · Arquitetura de Páginas de Vendas — v1.0

> **[LEGADO · arquivado 20/09/2026]** Conteúdo íntegro da **v1.0 (01/07/2026)**, encontrado ativo em `100-métodos/` durante a auditoria do eixo de VSL. É **anterior** à v2.0 já arquivada aqui (`METODO-PAGINA-DE-VENDAS-v2.0.md`, 18/07/2026) e duas versões atrás da fonte ativa. Fonte histórica, leitura. **Não carregar como fonte ativa.** Fonte ativa: `10-skills/gerador-web-designer-senior-continuum/` + `10-skills/ui-ux-designer-senior-continuum/`, pelo circuito de `CLAUDE.md` §6.3.

---

> **Ativo interno da Continuum AI Systems.** Padrão de estrutura, tensão e elementos para
> toda página cujo objetivo real é VENDER (workshop, curso, mentoria, serviço, SaaS).
> Serve a humanos e a agentes de IA: pode ser carregado como contexto de qualquer build.
> v1.0 · 01/07/2026 · Origem: auditoria da landing Carreira Alinhada (Fable 5) + prática
> de CRO. Documento vivo: toda auditoria nova deve alimentar este arquivo.

---

## AS 10 LEIS CONTINUUM (resumo executivo)

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
    Parte 5, e sem aprovação humana.

---

## PARTE 0 · O modelo mental: a página como circuito

Uma página de vendas administra três correntes simultâneas:

| Corrente | O que é | Como se comporta |
|---|---|---|
| **Tensão** | energia emocional que move o leitor para baixo e para o botão | sobe com reconhecimento e custo; alivia com método e segurança; morre com monotonia |
| **Crença** | quanto o leitor acredita na promessa e em quem promete | só sobe com especificidade, prova e honestidade; desce com hype e promessa absoluta |
| **Atrito** | custo cognitivo e prático de continuar (ler, entender, decidir, pagar) | cada bloco confuso, animação lenta, campo a mais ou dúvida sem resposta soma atrito |

**A venda acontece quando, diante do CTA, tensão x crença > atrito.** Todo o resto deste
documento é engenharia dessas três correntes.

### O saldo de atenção

O leitor chega com um crédito pequeno de atenção (3 a 8 segundos). Cada dobra ou **deposita**
(reconhecimento, valor novo, prova, beleza funcional) ou **saca** (confusão, repetição,
decoração sem função, texto vago). Página que saca duas vezes seguidas perde o leitor.
Pergunta de projeto para CADA bloco: *"isto deposita ou saca?"*

### As 12 perguntas, na ordem em que o cérebro as faz

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
- **Nunca:** carrossel, vídeo em autoplay, promessa absoluta, mais de um CTA primário,
  valor dependente de animação (se o JS atrasar, a dobra precisa estar inteira no primeiro
  paint).
- **Erros comuns:** headline "criativa" que não informa (clareza cobra menos que
  criatividade); preço escondido em produto de ticket baixo (mostrar "a partir de X"
  qualifica o clique); esconder para quem é.

### D2 · O Espelho (dor/reconhecimento)

Responde à pergunta 4 (primeira metade). A seção onde o leitor se vê descrito melhor do
que ele mesmo se descreveria.

- **Contém:** UMA cena concreta e recente da vida do cliente (a reunião de ontem, a fatura
  de sexta, o e-mail não respondido), seguida da nomeação do padrão invisível por trás
  dela. Lista curta de sintomas irmãos (3 a 5) para ampliar o reconhecimento.
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

Responde às perguntas 8 e 9. Sem prova, tudo acima é alegação.

- **Hierarquia de força (usar a mais forte disponível):**
  1. Resultado específico com número e nome ("reduzi o turnover do meu time em 40%, Maria, Head de CX");
  2. Depoimento específico sobre a TRANSFORMAÇÃO (não sobre a pessoa ser "incrível");
  3. Demonstração (antes/depois, amostra do método em ação);
  4. Autoridade emprestada (mídia, certificações, volume: "300 líderes acompanhados");
  5. Prova social genérica (avaliações, logos) — a mais fraca, nunca a única.
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
  as outras promessas da página.

### D8 · A Oferta (a dobra da decisão)

Responde às perguntas 10 e 11. Aqui a página inteira é cobrada.

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
```

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

### 2.3 As sete regras de cadência

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

### 2.4 Cadência de contraste visual (a tensão que se vê)

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
estatisticamente marginal.

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
trouxe o clique, com as mesmas palavras. Quebra de correspondência = bounce.

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

---

## PARTE 5 · Gate de publicação (checklist)

**Mensagem**
- [ ] Teste dos 5 segundos com alguém de fora: o que é, para quem, o que ganha, quanto/próximo passo.
- [ ] H1 é promessa de estado, específica, sem superlativo.
- [ ] Eyebrow qualifica o público na primeira dobra.
- [ ] As 12 perguntas têm resposta, na ordem, e nada na página está fora delas.
- [ ] Message match com a origem do tráfego.

**Tensão**
- [ ] D3 (custo de continuar) existe e tem peso.
- [ ] Nenhum trecho com 2+ telas sem CTA.
- [ ] Clímax visual coincide com a oferta (ou fecho).
- [ ] Fecho ecoa o H1 uma oitava acima.

**Valor e prova**
- [ ] Pilha "você sai com" tangível ANTES do preço.
- [ ] Toda promessa forte tem prova a até uma dobra.
- [ ] Foto real de quem conduz + credencial concreta (ou seção movida para pós-oferta).
- [ ] Qualificação inclui "para quem NÃO é".

**Oferta**
- [ ] Ancoragem honesta; escassez real com motivo; zero timer falso.
- [ ] Risk reversal colado no CTA.
- [ ] Uma decisão por bloco (plano OU turma OU bump, em sequência).
- [ ] FAQ cobre: tempo, "já tentei", risco, e a objeção identitária do ICP.

**Técnica e integridade**
- [ ] Primeira dobra inteira no primeiro paint (sem depender de JS).
- [ ] Mobile testado em aparelho real (dobra, oferta, CTA sticky).
- [ ] Contraste AA, foco visível, teclado funciona, reduced-motion respeitado.
- [ ] Zero placeholder {{...}} visível; zero travessão se a voz da marca proíbe.
- [ ] Checklist anti-slop do projeto aplicado; aprovação humana registrada.

---

## PARTE 6 · Medição e iteração

- **Instrumentar por dobra:** scroll depth nas fronteiras das dobras, cliques por CTA
  (qual porta converte), tempo na oferta, plays/aberturas de FAQ.
- **Diagnóstico pela curva:** abandono alto na D1 = promessa/match; scroll alto + clique
  baixo = tensão sem segurança (prova/garantia); clique alto + venda baixa = problema no
  checkout, não na página.
- **Ordem de otimização** (impacto por esforço): 1º primeira dobra, 2º oferta, 3º prova,
  4º cadência de CTA, 5º resto. Nunca otimizar a D7 antes da D1.
- **Um teste por vez**, com hipótese escrita ("mudar X move Y porque Z") e amostra que
  aguente a conclusão. Sem tráfego para testar, aplicar o padrão deste playbook e coletar
  dados qualitativos (gravações de sessão, 5 entrevistas > opinião interna).

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

---

*Playbook Continuum AI Systems · v1.0 · Autor: Fable 5 sob direção de Victor Senna.*
*Alimente este documento: cada auditoria, teste A/B e página lançada deve voltar aqui
como regra nova, exceção documentada ou anti-padrão promovido.*
