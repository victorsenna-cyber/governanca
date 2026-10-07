# -*- coding: utf-8 -*- (conteúdo do estudo de possibilidade — A mentoria)

# ============================================================ CAPA
BLOCKS += [
    Spacer(1, 74 * mm),
    P("ESTUDO DE POSSIBILIDADE", "cov4"),
    Spacer(1, 4),
    P("A mentoria que<br/>já existe dentro<br/>do seu método.", "cov1"),
    Spacer(1, 9),
    Rule(46, 2.2, GOLD, 0),
    Spacer(1, 12),
    P("Ladies Fluency &middot; Jéssica Oliveira", "cov2"),
    Spacer(1, 46 * mm),
    P("11 de agosto de 2026<br/>"
      "Entrega adicional, fora do escopo contratado<br/><br/>"
      "Preparado por Continuum AI Systems", "cov3"),
    PageBreak(),
]

# ============================================================ ABERTURA
BLOCKS += [
    P("O que você disse", "h1"),
    P("E que virou este documento.", "h1sub"),
    Rule(), SP(3),

    P("Na nossa call de 6 de agosto, você falou isto quase de passagem, enquanto pensava em voz alta:", "plead"),

    CALLOUT("", ["<i>“Eu quero trazer essas alunas de intermediário como se fosse uma mentoria de oratória "
                 "bilíngue, mas como se fosse um processo de lapidação. Porque eu vejo que a pessoa que chega "
                 "ali no intermediário para avançado, a questão dela não é tanto o vocabulário mais. É mais a "
                 "dificuldade de conseguir conversar. Ela tem um conhecimento, mas ela não sabe se comunicar "
                 "bem. Então ela trava, ela gagueja, ela tem medo. Várias outras questões que vão além do "
                 "idioma.”</i>"]),
    SP(7),
    P("E logo depois:", "p"),
    CALLOUT("", ["<i>“Talvez oito encontros, uma coisa assim. Um acompanhamento de dois meses. Eu posso colocar "
                 "talvez o nome de acompanhamento. Eu ainda não pensei nessa parte.”</i>"]),
    SP(9),

    DARKBOX("Você não estava tendo uma ideia",
            ["Você estava descrevendo um produto que já existe dentro do seu método e nunca foi vendido "
             "separado.",
             "Este documento faz três coisas: mostra por que ele deve ser o que você vende no evento de "
             "outubro, mostra por que não deve ser o Intensivão, e desenha o produto pronto para você "
             "decidir."]),

    PageBreak(),
]

# ============================================================ 01 A INVERSAO
BLOCKS += OPENER("01", "O que muda de lugar", "olhando o seu próprio método",
    "O Emotional Speaking conecta cinco dimensões: idioma, emoção, corpo, presença e experiência. "
    "Todos os produtos que você vende hoje colocam o idioma na frente, e entregam as outras quatro como "
    "diferencial. Aula de inglês com um método muito melhor por trás.")

BLOCKS += [
    P("O problema disso não é o método. É o que o mercado faz com ele: quando a pessoa lê “aula de inglês”, "
      "ela compara com escola de idioma. E escola de idioma tem preço conhecido — trezentos a seiscentos "
      "reais por mês. <b>A comparação acontece antes de qualquer conversa sobre valor, e o teto do seu preço "
      "passa a ser definido por alguém que não usa o seu método.</b>", "p"),
    SP(5),

    P("A mentoria inverte a ordem", "h2"),

    TWO(
        MINI("O que você vende hoje",
             ["<b>idioma</b> na frente",
              "+ emoção<br/>+ corpo<br/>+ presença<br/>+ experiência",
              "<i>Lido como: aula de inglês com bônus bom.</i>"]),
        MINI("O que a mentoria vende",
             ["<b>emoção · corpo · presença</b><br/>o que se transforma",
              "<b>idioma</b><br/>onde se pratica e se comprova",
              "<i>Lido como: processo de desenvolvimento.</i>"]),
    ),
    SP(9),

    P("Isso não é uma reembalagem. É a sua própria tese, dita por você:", "p"),

    CALLOUT("", ["<i>“A dificuldade de falar nem sempre está no idioma. Em muitos casos, a emoção, a "
                 "autocobrança e o corpo impedem que o conhecimento disponível se torne comunicação.”</i>"]),
    SP(9),

    P("<b>Desenvolvimento emocional aplicado à fala não tem preço de mercado conhecido. E não compete com "
      "escola de idioma.</b> É por isso que o produto pode custar dez vezes uma aula — não porque a sua hora "
      "vale dez vezes mais, mas porque não é a mesma categoria de compra.", "p"),
    SP(5),

    CALLOUT("Uma coisa sua que está guardada e devia estar na frente",
            "Você tem formação em saúde integrativa com abordagem sistêmica. Isso não aparece em nenhuma "
            "página, nenhuma oferta e nenhum conteúdo seu hoje. Para o público que vai estar na sala em "
            "outubro, essa é a credencial que mais pesa — mais até que a certificação internacional de "
            "inglês.", "ruby"),

    PageBreak(),
]

# ============================================================ 02 QUEM ESTARA NA SALA
BLOCKS += OPENER("02", "Quem vai estar naquela sala", "o público do evento",
    "Pelo que você contou da sua vida em Florianópolis, dá para ver com bastante nitidez quem se inscreve "
    "num evento seu.")

BLOCKS += [
    UL(["Você circula em <b>rodas de mulheres</b> — yoga, café, exercício sistêmico.",
        "Participa de um <b>Business Club feminino</b>, mensal, com mulheres que já têm negócio e resultado.",
        "Escolheu a <b>Casa Viva</b>, que é um ecossistema terapêutico, cuja dona trabalha com conhecimentos "
        "sistêmicos.",
        "Sua rede local é essa: as meninas do espaço, a fisioterapeuta que fala inglês, o evento do Cauê."]),
    SP(7),

    DARKBOX("A leitura",
            ["A sala de outubro vai ser majoritariamente de <b>empresárias e empreendedoras de Floripa, do "
             "campo do desenvolvimento pessoal e terapêutico</b>. Mulheres que já compram experiência."]),
    SP(11),

    P("O que essa mulher compra, e o que não compra", "h2"),

    TABLE(["Ela compra", "Ela não compra"],
          [["processo, jornada, travessia", "curso, módulo, carga horária"],
           ["mentoria, imersão, círculo", "aula particular"],
           ["consciência, corpo, autoria", "técnica solta"],
           ["grupo pequeno e curado", "turma"],
           ["quem já viveu o que ensina", "credencial isolada"]],
          [CW*0.5, CW*0.5]),
    SP(7),

    P("Ela já paga entre três e quinze mil reais por mentoria, imersão e formação, sem pestanejar. "
      "<b>Preço não é a objeção dela. Encaixe de identidade é.</b>", "p"),
    SP(5),

    CALLOUT("A consequência, em uma frase",
            "O que você vender naquela sala não pode ser lido como curso de inglês. No instante em que for, "
            "o teto de preço despenca e a mulher sai da própria identidade — porque “aluna de inglês” não é "
            "como ela se vê.", "ruby"),

    PageBreak(),
]

# ============================================================ 03 POR QUE NAO O INTENSIVAO
BLOCKS += OPENER("03", "Por que não o Intensivão", "a decisão do palco",
    "O Intensivão VIP, quatro vezes por semana, mil e setecentos reais por mês, é hoje o produto mais caro "
    "do seu portfólio. No semestre dá dez mil e duzentos. É natural que pareça o candidato certo para o "
    "palco. Não é — e as quatro razões são todas suas.")

BLOCKS += [
    STEP("1", "Ele responde a uma pergunta que a sala não fez",
         ["Você mesma diagnosticou: <i>“a questão dela não é tanto o vocabulário mais. Ela trava, ela "
          "gagueja, ela tem medo.”</i>",
          "O Intensivão é a resposta para <b>“me falta volume e tempo”</b>. Mas a mulher que passou quatro "
          "horas com você não tem problema de volume: ela tem anos de inglês nas costas.",
          "Oferecer mais aula a quem não tem problema de aula, logo depois de quatro horas provando que você "
          "entendeu a dor dela, apaga tudo que você acabou de construir. Ela não vai saber explicar por quê, "
          "mas vai sentir que você não estava falando com ela."]),

    STEP("2", "Ele contradiz o que a tarde provou",
         ["A vivência inteira demonstra uma tese: <b>o destravamento acontece no coletivo, com o corpo, num "
          "ambiente seguro.</b> Yoga, duplas, jogo, roda, café.",
          "O Intensivão é o oposto: individual, online, na tela, sozinha. Vender individual depois de provar "
          "que a cura é coletiva é vender o contrário do que se acabou de demonstrar."]),

    STEP("3", "“Aula” a devolve para o lugar onde a vergonha nasceu",
         ["Uma empresária de quarenta anos não se vê como “aluna fazendo quatro aulas de inglês por semana”. "
          "Essa frase a coloca de volta na escola — que é, na maior parte dos casos, exatamente o lugar onde "
          "o medo de errar em público começou.",
          "<b>“Processo” é progressão de identidade. “Aula” é regressão.</b> Para essa mulher, isso não é "
          "diferença de palavra: é diferença de decisão."]),

    STEP("4", "A razão que é só sua",
         ["<i>“Essa questão de vender tempo é uma coisa que eu não quero mais. Nos próximos anos quero "
          "justamente escalar. Dar duas, três aulas por dia, assim tá ótimo.”</i>",
          "O Intensivão é o produto que <b>mais consome hora sua por real faturado</b>: dezesseis aulas por "
          "mês para cada aluna, o que dá cento e seis reais por hora sua. É o pior produto do seu portfólio "
          "no critério que você mesma escolheu.",
          "Vender Intensivão no seu evento seria usar o veículo da sua travessia para acelerar justamente o "
          "modelo do qual você quer sair."]),

    SP(3),
    CondPageBreak(50 * mm),
    KeepTogether([
        P("A comparação, lado a lado", "h2"),
        TABLE(["Se você pitcha", "Preço", "Quantas para R$ 20 mil", "Rende por hora sua"],
              [["Intensivão VIP semestral", "R$ 10.200", "2 · 13% da sala", ("R$ 106", "tdb")],
               [("Lapidação + Circle", "tdb"), ("R$ 4.997", "tdb"), "4 · 27% da sala",
                ("R$ 1.363 a R$ 1.817", "tdb")]],
              [CW*0.32, CW*0.16, CW*0.27, CW*0.25], aligns=["L", "R", "C", "R"]),
        SP(6),
        P("Você precisa vender <b>o dobro de unidades</b> — e ainda assim é o caminho certo, porque o produto "
          "custa metade, fala com a dor que a sala acabou de sentir na pele, e <b>rende treze vezes mais por "
          "hora sua</b>.", "p"),
    ]),

    PageBreak(),
]

# ============================================================ 04 O PRODUTO
BLOCKS += OPENER("04", "Lapidação", "o produto, desenhado",
    "Você já tinha o nome. Usou sem perceber: “como se fosse um processo de lapidação”. "
    "Lapidação nomeia transformação. “Acompanhamento” — que foi o que você cogitou — nomeia logística. "
    "Nome de método é patrimônio; nome de logística é commodity.")

BLOCKS += [
    TABLE(["Campo", "Definição"],
          [[("Para quem", "tdb"), "Mulheres que já entendem inglês e não conseguem falar. "
            "Intermediário e avançado, sem exceção"],
           [("A promessa", "tdb"), "Conduzir uma conversa inteira em inglês, do começo ao fim, "
            "<b>sem pedir desculpa pelo próprio inglês</b>"],
           [("O que não é", "tdb"), "Não é aula, não tem currículo, não tem nível, não tem prova"],
           [("Duração", "tdb"), "3 meses"],
           [("Formato", "tdb"), "12 encontros online semanais de 1h30, em grupo, mais "
            "<b>1 encontro presencial de fechamento</b>"],
           [("Turma", "tdb"), "6 a 8 mulheres, curadas por nível numa conversa de entrada"],
           [("Preço", "tdb"), "<b>R$ 4.997</b> à vista, ou 12 × R$ 497"],
           [("Preço na sala", "tdb"), "<b>R$ 3.997</b>, ou 10 × R$ 447 — válido só até o fim do evento"]],
          [28*mm, CW - 28*mm]),
    SP(9),

    P("Os quatro movimentos dos três meses", "h2"),

    TABLE(["", "Movimento", "O que acontece"],
          [["1", ("Mapa de travas", "tdb"), "Onde o corpo fecha, o que a voz interna diz, em que situação "
            "exata. Cada uma sai com o próprio mapa"],
           ["2", ("Corpo", "tdb"), "Respiração, postura, olhar, presença. A parte que você já sabe que vem "
            "antes da palavra"],
           ["3", ("Exposição graduada", "tdb"), "Falar diante do grupo em dificuldade crescente, com a sua "
            "correção sem ferir"],
           ["4", ("Vida real", "tdb"), "Simulação das situações que cada uma nomeou no mapa. A reunião, "
            "o jantar, a apresentação, a viagem"]],
          [8*mm, CW*0.26, CW - 8*mm - CW*0.26]),
    SP(9),

    CondPageBreak(96 * mm),
    TWO(
        MINI("Por que 3 meses, e não os 2 que você pensou",
             ["Dois meses é curto para o arco que a promessa exige, e não sustenta o preço.",
              "Três meses dão tempo de a transformação ficar <b>visível para a própria aluna</b> — que é de "
              "onde nasce o depoimento espontâneo que hoje falta no seu material."]),
        MINI("O que ela leva",
             ["O mapa individual",
              "Gravações de antes e depois",
              "Prática entre pares nos intervalos",
              "O encontro presencial de fechamento"]),
    ),
    SP(9),

    DARKBOX("O detalhe que resolve dois problemas de uma vez",
            ["<b>O encontro presencial de fechamento da turma é a próxima edição do Ladies Fluency "
             "Experience.</b>",
             "Você entrega um presencial sem produzir um evento extra. A turma fecha o processo dentro de "
             "uma experiência, e não numa chamada de Zoom. E toda edição já começa com seis a oito mulheres "
             "confirmadas antes de você vender o primeiro ingresso.",
             "O evento alimenta a mentoria. A mentoria enche o evento. É isso que transforma o Ladies "
             "Fluency Experience de “evento” em <b>sistema</b>."]),

    PageBreak(),
]

# ============================================================ 05 O CIRCLE
BLOCKS += OPENER("05", "Ladies Fluency Circle", "o segundo produto",
    "Existe uma frase que você usa para descrever a dor das suas alunas, e que é literalmente uma descrição "
    "de produto: “eu não tenho ninguém para me apoiar, para praticar”. Hoje você não vende nada que resolva "
    "isso. E é o produto mais leve que você pode ter.")

BLOCKS += [
    TABLE(["Campo", "Definição"],
          [[("O que é", "tdb"), "O lugar permanente de prática que elas dizem não ter"],
           [("Entrega", "tdb"), "1 encontro online por mês, 1h30, em grupo, cem por cento em inglês · "
            "grupo de WhatsApp com desafio semanal · <b>prioridade e desconto em toda edição presencial</b>"],
           [("Preço", "tdb"), "<b>R$ 197 por mês</b>, ou R$ 1.970 no ano"],
           [("Sua carga", "tdb"), "<b>1h30 por mês</b>"]],
          [24*mm, CW - 24*mm]),
    SP(9),

    P("Ele faz três coisas, e a terceira é a mais importante", "h2"),

    STEP("1", "Dá um lugar para quem não compra hoje",
         "E que por isso não precisa sair de mãos vazias."),
    STEP("2", "Cria a sua primeira receita recorrente",
         "Dinheiro que entra sem você dar aula. Nenhuma linha do seu negócio hoje se parece com isso."),
    STEP("3", "Vira o viveiro",
         ["As próximas turmas de Lapidação saem de dentro do Circle. Uma mulher que pratica com você todo "
          "mês há seis meses <b>não precisa de pitch</b>. Ela já decidiu."]),

    SP(4),
    CALLOUT("A conta do Circle",
            "Doze mulheres no Circle são R$ 2.364 por mês, por uma hora e meia de trabalho."),

    PageBreak(),
]

# ============================================================ 06 O QUE SOBE AO PALCO
BLOCKS += OPENER("06", "O que sobe ao palco", "a oferta do evento",
    "Uma oferta falada, três caixas na ficha de papel. Três ofertas faladas confundem, e confusão não "
    "compra.")

BLOCKS += [
    TABLE(["Oferta", "O que inclui", "Preço cheio", "Na sala"],
          [["Lapidação", "mentoria, 3 meses", "R$ 4.997", ("R$ 3.997", "tdb")],
           [("Lapidação + Circle", "tdb"), ("mentoria + 1 ano de comunidade", "tdb"), "R$ 6.997",
            ("R$ 4.997", "tdb")],
           ["Circle avulso", "comunidade, 1 ano", "R$ 2.364", "R$ 1.970"]],
          [CW*0.28, CW*0.36, CW*0.18, CW*0.18], aligns=["L", "L", "R", "R"]),
    SP(7),

    P("O combo é o que você apresenta", "h2"),
    UL(["<b>O valor fica visível.</b> R$ 4.997 por uma mentoria de três meses exige um ato de fé. "
        "R$ 4.997 por três meses de lapidação <i>mais</i> um ano inteiro de comunidade tem duas coisas para "
        "pesar na mão.",
        "<b>Resolve o depois.</b> Sem o Circle, ela termina em três meses e volta a não ter onde praticar — "
        "e a sua promessa se desfaz sozinha.",
        "<b>Ancora.</b> Com o combo a R$ 4.997, a mentoria sozinha a R$ 3.997 parece o negócio pior. "
        "Que é o que ela é."]),
    SP(9),

    P("Como fica a conta do evento", "h2"),
    P("Com quinze mulheres na sala e ingressos em dois lotes. Custo do espaço: R$ 250.", "p"),

    KPIROW([("R$ 10,6 mil", "conservador<br/>1 combo · 2 Circle"),
            ("R$ 21,5 mil", "cenário base<br/>2 combos · 1 mentoria · 3 Circle"),
            ("R$ 37,5 mil", "otimista<br/>4 combos · 2 mentorias · 4 Circle")]),
    SP(9),

    CALLOUT("Repare no que isso diz sobre o ingresso",
            "Vendendo quinze ingressos a R$ 147 e R$ 197, sobram cerca de R$ 1.650. Uma única venda de combo "
            "vale três vezes isso. O ingresso não existe para fazer dinheiro: existe para garantir que quem "
            "disse que vem, vem — porque sala pela metade destrói o ambiente seguro, que é o seu mecanismo.",
            "ruby"),

    PageBreak(),
]

# ============================================================ 07 A CONTA DA SUA HORA
BLOCKS += OPENER("07", "A conta que muda a sua semana", "ecologia",
    "Você disse que quer dar duas ou três aulas por dia e parar de vender tempo. Isso não é um desejo vago: "
    "é uma conta, e ela fecha.")

BLOCKS += [
    TABLE(["O que você vende", "Receita", "Sua hora", "Por hora sua"],
          [["Intensivão, 4× por semana", "R$ 1.700/mês", "16h/mês", ("R$ 106", "tdb")],
           ["Individual, 1× por semana", "R$ 497/mês", "4h/mês", ("R$ 124", "tdb")],
           ["Grupo de 4, 1× por semana", "R$ 1.428/mês", "4h/mês", ("R$ 357", "tdb")],
           [("Lapidação, turma de 6", "tdb"), "R$ 29.982 no trimestre", "22h", ("R$ 1.363", "tdb")],
           [("Lapidação, turma de 8", "tdb"), "R$ 39.976 no trimestre", "22h", ("R$ 1.817", "tdb")],
           [("Circle, 15 membros", "tdb"), "R$ 2.955/mês", "1h30/mês", ("R$ 1.970", "tdb")]],
          [CW*0.34, CW*0.24, CW*0.18, CW*0.24], aligns=["L", "R", "R", "R"]),
    SP(9),

    DARKBOX("Uma turma de Lapidação vale quinze vezes a sua hora numa aula individual",
            ["E a carga: com <b>três turmas rodando ao mesmo tempo, mais o Circle</b>, são cerca de "
             "<b>cinco horas por semana</b>.",
             "Não é que a travessia caiba na sua agenda. É que ela é a única coisa que devolve a sua agenda."]),

    PageBreak(),
]

# ============================================================ 08 O QUE NAO FAZER AGORA
BLOCKS += OPENER("08", "O que não fazer agora", "ordem, não corte",
    "Você tem sete ideias boas e capacidade para duas. Isso não é crítica: é o retrato de quem está em "
    "movimento. O que vale mais aqui é a ordem.")

BLOCKS += [
    TABLE(["Ideia", "Por que não agora", "Quando"],
          [[("Curso gravado", "tdb"), "É o que mais custa produzir e menos gera caixa agora. "
            "E o insumo certo ainda não existe",
            "Depois da turma 1 de Lapidação — que é o roteiro do curso, já validado e gravado"],
           [("Formação de professoras", "tdb"), "Exige método documentado, casos e marca consolidada",
            "Ano 2, com 3 turmas entregues"],
           [("Versão corporativa em auditório", "tdb"), "Outro público, outro ciclo de venda, outra oferta. "
            "Misturar dilui as duas", "Depois de 2 edições femininas entregues"],
           [("English Flow presencial misto", "tdb"), "É uma segunda linha de evento, não um produto",
            "Edição 3, como teste"]],
          [CW*0.24, CW*0.44, CW*0.32]),
    SP(9),

    CALLOUT("E as aulas multiníveis?",
            "Continuam. Elas são a base que financia a travessia. Ninguém corta a receita que paga as contas "
            "antes de a nova estar de pé. O que muda é que ela vai encolher por escolha sua, e não por "
            "abandono."),

    PageBreak(),
]

# ============================================================ 09 DECISOES
BLOCKS += OPENER("09", "O que você precisa decidir", "sete linhas",
    "Enquanto estas sete linhas estiverem abertas, a construção do evento não avança.")

BLOCKS += [
    TABLE(["#", "Decisão"],
          [["1", "Data exata em outubro"],
           ["2", "O que os R$ 250 da Casa Viva incluem, e quanto custa o yoga da parceira"],
           ["3", "O nome final da mentoria e da comunidade"],
           ["4", "O preço final da mentoria e do combo"],
           ["5", ("Você vende no palco, ou coleta nomes para vender depois?", "tdb")],
           ["6", "Nível mínimo de inglês na inscrição"],
           ["7", "Quando começa a turma 1"]],
          [8*mm, CW - 8*mm]),
    SP(11),

    P("Sobre a número 5, com franqueza", "h2"),
    P("Na call, o seu plano foi este: <i>“eu pego os nomes, ou deixo os nomes comigo, que aí eu entro em "
      "contato e marco a call.”</i>", "p"),
    P("Entendemos de onde vem. Vender no palco é desconfortável, e mais ainda quando a sala é de mulheres "
      "com quem você acabou de criar intimidade. Mas vale olhar o custo:", "p"),

    UL(["A mulher que acabou de falar inglês em público pela primeira vez <b>está no pico</b>. Três dias "
        "depois ela está no trabalho, com o boleto na frente. A mesma oferta tem dois preços psicológicos "
        "completamente diferentes nesses dois momentos.",
        "Quinze nomes numa lista viram <b>quinze calls de trinta minutos</b>. São sete horas e meia de "
        "trabalho para vender o que caberia em vinte — e uma parte não comparece.",
        "<b>“Quem sentir no coração” seleciona as mais expressivas, não as mais prontas.</b> Quem mais "
        "precisa de lapidação é justamente a que não levanta a mão."]),
    SP(7),

    CondPageBreak(92 * mm),
    KeepTogether([
        P("Há uma forma que respeita o seu jeito", "h2"),
        P("Uma oferta só, falada em dez minutos, e uma ficha de papel na mão de todas:", "p"),
        SCRIPTBOX(["<b>( ) Quero a Lapidação.</b> Me manda os detalhes hoje ainda.",
                   "<b>( ) Quero só o Circle</b> por enquanto.",
                   "<b>( ) Quero conversar sobre o meu caso</b> antes de decidir."],
                  "A FICHA"),
        SP(7),
        P("Ninguém precisa se expor levantando a mão. Você recolhe as fichas no café e agenda as conversas "
          "ali, com data e horário no celular da pessoa.", "p"),
        SP(5),
        CALLOUT("E se na hora travar",
                "Você lê o texto. Ler o pitch converte infinitamente mais do que não fazer o pitch. "
                "A gente ensaia junto, duas vezes, na semana anterior.", "ruby"),
    ]),

    PageBreak(),
]

# ============================================================ FECHO
BLOCKS += [
    P("Em uma página", "h1"),
    P("O estudo inteiro, resumido.", "h1sub"),
    Rule(), SP(4),

    P("<b>O que você tem.</b> Um método com cinco dimensões, seis anos de prática, formação em saúde "
      "integrativa, um evento com estrutura pronta e uma sala de empresárias de Floripa prestes a se sentar "
      "na sua frente.", "p"),
    P("<b>O que falta.</b> Um produto que essa sala possa comprar. Tudo que você vende hoje é lido como aula "
      "de inglês, e aula de inglês não é o que essa mulher compra.", "p"),
    P("<b>A saída.</b> Vender a parte do seu método que ninguém mais tem — emoção, corpo e presença — usando "
      "o idioma como campo de prática. Isso é a Lapidação. Custa R$ 4.997 porque não é a mesma categoria de "
      "compra, e não porque a sua hora vale mais.", "p"),
    P("<b>O que isso faz pelo seu negócio.</b> Substitui hora vendida a R$ 106 por turma vendida a R$ 1.363. "
      "Cria a sua primeira receita recorrente. E transforma um evento de outubro no primeiro passo concreto "
      "da travessia que você declarou querer fazer.", "p"),

    SP(12),
    DARKBOX("O que decide tudo",
            ["O que acontece entre 17h20 e 18h no dia do evento.",
             "A tarde inteira você já sabe conduzir. Ninguém precisa te ensinar a fazer uma mulher falar "
             "inglês numa roda — você faz isso há seis anos. O que este documento resolve são os quarenta "
             "minutos finais."]),

    SP(14),
    Rule(46, 1.6, GOLD, 0),
    SP(9),
    P("Estudo de possibilidade &middot; A mentoria &middot; Ladies Fluency &middot; Jéssica Oliveira<br/>"
      "11 de agosto de 2026 &middot; entrega adicional, fora do escopo contratado.<br/>"
      "Os números de conversão são estimativas de cenário, não garantias. "
      "Todas as citações são transcrições literais da call de 06/08/2026.<br/>"
      "Elaborado por Continuum AI Systems.", "small"),
]
