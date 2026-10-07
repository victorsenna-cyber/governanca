# -*- coding: utf-8 -*- (parte A: abertura, diagnostico, resultado)

# ============================================================ CAPA
BLOCKS += [
    Spacer(1, 74 * mm),
    P("PLANO ESTRAT&Eacute;GICO &middot; REVIS&Atilde;O 4", "cov4"),
    Spacer(1, 4),
    P("90 dias para um<br/>fluxo previs&iacute;vel<br/>de conversas.", "cov1"),
    Spacer(1, 9),
    Rule(46, 2.2, GOLD, 0),
    Spacer(1, 12),
    P("Emotional Speaking &middot; ingl&ecirc;s e orat&oacute;ria bil&iacute;ngue<br/>"
      "Jéssica Oliveira", "cov2"),
    Spacer(1, 46 * mm),
    P("Vig&ecirc;ncia 06/08/2026 &rarr; 31/01/2027<br/>"
      "Revis&atilde;o 4 &middot; 27 de setembro de 2026<br/><br/>"
      "Preparado por Continuum AI Systems", "cov3"),
    PageBreak(),
]

# ============================================================ COMO LER
BLOCKS += [
    P("Como ler este plano", "h1"),
    P("Antes de come&ccedil;ar, tr&ecirc;s combinados.", "h1sub"),
    Rule(), SP(3),

    P("Este documento n&atilde;o &eacute; uma lista de ideias. &Eacute; uma sequ&ecirc;ncia de decis&otilde;es "
      "com dono, prazo e n&uacute;mero. Cada p&aacute;gina existe para responder uma pergunta que a sua "
      "opera&ccedil;&atilde;o j&aacute; faz hoje &mdash; e para tirar a resposta do improviso.", "plead"),

    SP(4),
    STEP("1", "Ele parte do que j&aacute; funciona, n&atilde;o do que falta",
         ["Voc&ecirc; j&aacute; tem um ativo raro: uma conversa de trinta minutos que converte. Quase tudo aqui "
          "existe para colocar mais gente qualificada dentro dessa conversa &mdash; e para que ela aconte&ccedil;a "
          "do mesmo jeito toda vez, mesmo nos dias em que voc&ecirc; est&aacute; cansada."]),
    STEP("2", "Ele separa o que traz dinheiro do que traz audi&ecirc;ncia",
         ["Conte&uacute;do e an&uacute;ncio constroem audi&ecirc;ncia, e audi&ecirc;ncia leva tempo. "
          "Indica&ccedil;&atilde;o e base quente trazem caixa em dias. As duas coisas rodam juntas neste plano, "
          "mas nunca s&atilde;o confundidas &mdash; e a segunda paga a espera da primeira."]),
    STEP("3", "Ele cabe na sua agenda, e a protege",
         ["A capacidade de uma professora que d&aacute; aula sozinha &eacute; o teto real do neg&oacute;cio. "
          "Por isso o plano tem tr&ecirc;s reels por semana como teto e piso, e uma regra clara de quando "
          "parar de crescer em volume e come&ccedil;ar a crescer em pre&ccedil;o."]),

    SP(6),
    CALLOUT("O que este plano <b>n&atilde;o</b> faz nos pr&oacute;ximos 90 dias",
            ["Curso digital gravado &middot; mentoria para professoras &middot; vers&atilde;o corporativa em "
             "audit&oacute;rio &middot; English Flow presencial misto &middot; TikTok e YouTube &middot; "
             "contrata&ccedil;&atilde;o de outros professores.",
             "Nada disso &eacute; descartado. Tudo isso &eacute; o ciclo seguinte, e entra na ordem que o caixa "
             "autorizar. Um neg&oacute;cio de uma pessoa s&oacute; cresce fechando frentes, n&atilde;o abrindo."]),
    SP(7),
    CALLOUT("Duas coisas sa&iacute;ram desta lista, e por motivos diferentes",
            ["<b>O evento presencial saiu porque virou prioridade.</b> A conversa de 6 de agosto mostrou que "
             "ele n&atilde;o &eacute; uma frente nova competindo com as outras: &eacute; a sua conversa de "
             "convers&atilde;o acontecendo para uma sala inteira ao mesmo tempo. Ele agora &eacute; o "
             "<b>Motor 3</b>, com se&ccedil;&atilde;o pr&oacute;pria e cronograma pr&oacute;prio.",
             "<b>O carrossel saiu porque a raz&atilde;o da exclus&atilde;o deixou de existir.</b> Ele estava "
             "fora porque exigia design, e design &eacute; onde o seu perfeccionismo trava. Como os "
             "carross&eacute;is agora v&ecirc;m prontos, esse custo n&atilde;o &eacute; mais seu."], "ruby"),
    PageBreak(),
]

# ============================================================ SUMARIO EXECUTIVO
BLOCKS += [
    P("Sum&aacute;rio executivo", "h1"),
    P("Se voc&ecirc; s&oacute; ler uma p&aacute;gina, leia esta.", "h1sub"),
    Rule(), SP(4),

    TABLE(["", "Leitura"],
          [[("<b>O problema central</b>", "tdb"),
            "O neg&oacute;cio vende muito bem no um a um, e n&atilde;o tem como fazer isso acontecer de novo "
            "amanh&atilde;. A matr&iacute;cula depende de algu&eacute;m lembrar de te indicar."],
           [("<b>O gargalo dominante</b>", "tdb"),
            "Topo de funil. A convers&atilde;o j&aacute; &eacute; forte: quem entra na conversa de trinta minutos "
            "costuma virar aluna. O que falta &eacute; volume qualificado entrando."],
           [("<b>A maior alavanca</b>", "tdb"),
            "Transformar a sua conversa de trinta minutos em destino de dois caminhos separados: "
            "Instagram para brasileiras que querem ingl&ecirc;s, Google para estrangeiros que querem "
            "portugu&ecirc;s. Duas p&aacute;ginas, dois p&uacute;blicos, um mesmo fechamento."],
           [("<b>A primeira a&ccedil;&atilde;o</b>", "tdb"),
            "Semana 1: medir onde voc&ecirc; est&aacute; hoje, abrir a campanha de indica&ccedil;&atilde;o e "
            "reativar a base do WhatsApp. Isso &eacute; caixa em dias, sem depender de algoritmo."],
           [("<b>O que n&atilde;o ser&aacute; feito agora</b>", "tdb"),
            "Curso digital, mentoria para professoras, eventos, novos canais. Fica para o ciclo seguinte."]],
          [30 * mm, CW - 30 * mm]),

    SP(11),
    P("METAS", "eyebrow"),
    P("Onde queremos estar em 31/01/2027", "h2"),
    P("O plano trabalha com tr&ecirc;s cen&aacute;rios. O do meio &eacute; o alvo; os outros dois existem para "
      "voc&ecirc; saber se est&aacute; adiantada ou atrasada sem precisar de planilha.", "p"),

    KPIROW([("5", "novas matr&iacute;culas por m&ecirc;s<br/>no cen&aacute;rio-alvo"),
            ("17", "conversas novas por m&ecirc;s<br/>que sustentam esse n&uacute;mero"),
            ("3", "reels por semana<br/>teto e piso de conte&uacute;do")]),

    SP(9),
    DARKBOX("A decis&atilde;o que este plano toma",
            ["Crescer por dois motores separados, com uma &uacute;nica porta de entrada e um &uacute;nico "
             "fechamento. O Instagram vende o m&eacute;todo para brasileiras. O Google captura inten&ccedil;&atilde;o "
             "de busca de estrangeiros. Os dois desembocam no WhatsApp, e o WhatsApp desemboca na conversa de "
             "trinta minutos &mdash; que continua sendo o lugar onde voc&ecirc; &eacute; imbat&iacute;vel.",
             "<b>Caixa primeiro, audi&ecirc;ncia em paralelo, an&uacute;ncio por &uacute;ltimo.</b> An&uacute;ncio "
             "sobre oferta que ainda n&atilde;o foi validada &eacute; dinheiro queimado com aparência de estrat&eacute;gia."]),
    PageBreak(),
]

# ============================================================ 01 ONDE ESTAMOS
BLOCKS += OPENER("01", "Onde estamos hoje", "ponto de partida",
    "Um plano que come&ccedil;a sem baseline vira opini&atilde;o em noventa dias. Esta se&ccedil;&atilde;o separa "
    "o que j&aacute; sabemos do que precisa ser medido na primeira semana &mdash; e entrega o painel para medir.")

BLOCKS += [
    P("O que j&aacute; est&aacute; confirmado", "h2"),
    TABLE(["Dimens&atilde;o", "Situa&ccedil;&atilde;o hoje"],
          [["Tempo de opera&ccedil;&atilde;o", "Seis anos ensinando, com material e metodologia criados por voc&ecirc;."],
           ["Origem das alunas", "A maior parte vem de indica&ccedil;&atilde;o. Uma parte menor vem do Instagram."],
           ["Processo comercial", "WhatsApp &rarr; conversa de aproximadamente 30 minutos no Zoom &rarr; matr&iacute;cula."],
           ["Convers&atilde;o percebida", "Alta entre indicados. Nas suas palavras: raramente quem chega por "
            "indica&ccedil;&atilde;o n&atilde;o se matricula."],
           ["Formatos ativos", "Individual de 1 a 4 vezes por semana &middot; dupla, trio e grupo &middot; "
            "English Flow para avan&ccedil;ados."],
           ["Ciclo de contrata&ccedil;&atilde;o", "M&oacute;dulos de seis meses, cobrados como mensalidade."],
           ["Faixa de investimento", "De R$ 497 a R$ 1.700 por m&ecirc;s no individual; 6 &times; R$ 357 por pessoa "
            "em grupo; 6 &times; R$ 327 no English Flow."],
           ["Teto operacional", "Voc&ecirc; d&aacute; aula sozinha. N&atilde;o h&aacute; individual cinco vezes "
            "por semana. A agenda &eacute; o limite real do crescimento."],
           ["Oferta nova", "Portugu&ecirc;s para estrangeiros, ao vivo por v&iacute;deo, do zero ao avan&ccedil;ado, "
            "60 a 70 minutos, com material digital."]],
          [34 * mm, CW - 34 * mm]),

    PageBreak(),
    P("PAINEL DA SEMANA 1", "eyebrow"),
    P("O que precisa ser medido antes de qualquer an&uacute;ncio", "h2"),
    P("Estes seis n&uacute;meros n&atilde;o existem em lugar nenhum hoje. Sem eles, daqui a noventa dias "
      "n&atilde;o teremos como dizer se o plano funcionou &mdash; s&oacute; teremos a sensa&ccedil;&atilde;o de "
      "que sim ou de que n&atilde;o. Preencha uma vez, na primeira semana, e depois s&oacute; atualize.", "p"),

    TABLE(["#", "N&uacute;mero", "Como levantar", "Valor"],
          [["1", ("Alunas ativas hoje", "tdb"), "Contagem direta na sua agenda da semana.", ("__________", "tdm")],
           ["2", ("Receita mensal atual", "tdb"), "Soma das mensalidades vigentes deste m&ecirc;s.", ("__________", "tdm")],
           ["3", ("Matr&iacute;culas por m&ecirc;s", "tdb"), "M&eacute;dia dos &uacute;ltimos tr&ecirc;s meses.", ("__________", "tdm")],
           ["4", ("Conversas novas por semana", "tdb"), "Quantas pessoas novas te chamam no WhatsApp por aulas.", ("__________", "tdm")],
           ["5", ("Ocupa&ccedil;&atilde;o da agenda", "tdb"), "Horas dadas &divide; horas que voc&ecirc; aceita dar.", ("__________", "tdm")],
           ["6", ("Seguidores no Instagram", "tdb"), "N&uacute;mero de hoje, para comparar em 31/01.", ("__________", "tdm")]],
          [8 * mm, 42 * mm, CW - 8 * mm - 42 * mm - 26 * mm, 26 * mm]),

    SP(8),
    CALLOUT("Por que isso vem antes de tudo",
            ["O n&uacute;mero 5 &eacute; o mais importante e o menos &oacute;bvio. Se a sua agenda j&aacute; "
             "estiver acima de oitenta por cento, o plano muda de forma: o objetivo deixa de ser trazer mais gente "
             "e passa a ser subir pre&ccedil;o e priorizar grupos. Crescer volume com agenda cheia n&atilde;o "
             "aumenta o seu ganho &mdash; s&oacute; aumenta o seu cansa&ccedil;o."]),
    PageBreak(),
]

# ============================================================ 02 RESULTADO
BLOCKS += OPENER("02", "O resultado dos 90 dias", "para onde estamos indo",
    "Um resultado bem formulado precisa ser dito no positivo, ter evid&ecirc;ncia observ&aacute;vel, caber nos "
    "seus recursos e respeitar a sua vida. &Eacute; assim que o alvo deste ciclo est&aacute; escrito.")

BLOCKS += [
    DARKBOX("A declara&ccedil;&atilde;o",
            ["At&eacute; 31 de janeiro de 2027, tenho conversas qualificadas chegando toda semana por dois "
             "caminhos que eu controlo &mdash; Instagram e Google &mdash; com um n&uacute;mero est&aacute;vel de "
             "novas matr&iacute;culas por m&ecirc;s, e duas p&aacute;ginas que transformam visita em conversa "
             "no WhatsApp sem que eu precise explicar tudo de novo."]),
    SP(9),

    P("A matem&aacute;tica, de tr&aacute;s para frente", "h2"),
    P("Toda meta de venda &eacute; uma conta simples lida ao contr&aacute;rio. Come&ccedil;amos pelo n&uacute;mero "
      "de matr&iacute;culas desejadas e voltamos at&eacute; quantas conversas precisam come&ccedil;ar. As taxas "
      "abaixo s&atilde;o <b>hip&oacute;teses de trabalho</b>: a primeira quinzena mede as suas de verdade e "
      "substitui estas.", "p"),

    TABLE(["Etapa do funil", "Conservador", "Alvo", "Ambicioso"],
          [[("Novas matr&iacute;culas por m&ecirc;s", "tdb"), ("3", "tdb"), ("5", "tdb"), ("8", "tdb")],
           ["Conversas de 30 min necess&aacute;rias", "6", "10", "16"],
           ["Conversas novas no WhatsApp", "10", "17", "27"],
           [("Visitas &agrave;s p&aacute;ginas", "tdm"), ("100", "tdm"), ("170", "tdm"), ("270", "tdm")],
           [("Taxa aplicada: conversa &rarr; call", "tdm"), ("60%", "tdm"), ("60%", "tdm"), ("60%", "tdm")],
           [("Taxa aplicada: call &rarr; matr&iacute;cula", "tdm"), ("50%", "tdm"), ("50%", "tdm"), ("50%", "tdm")]],
          [CW - 3 * 25 * mm, 25 * mm, 25 * mm, 25 * mm], aligns=["L", "C", "C", "C"]),

    SP(6),
    P("A taxa de call para matr&iacute;cula est&aacute; deliberadamente conservadora em cinquenta por cento. "
      "Entre indicados, a sua convers&atilde;o real &eacute; bem mais alta &mdash; mas parte do volume novo "
      "vir&aacute; de gente que nunca ouviu falar de voc&ecirc;, e essa gente converte menos. Se a sua taxa medida "
      "for maior, o mesmo esfor&ccedil;o entrega mais matr&iacute;culas.", "small"),

    PageBreak(),
    P("O que isso vira em receita", "h2"),
    P("Considerando o piso da sua tabela, R$ 497 por m&ecirc;s, e lembrando que cada matr&iacute;cula &eacute; um "
      "m&oacute;dulo de seis meses &mdash; ou seja, ela permanece somando nos meses seguintes:", "p"),

    TABLE(["Cen&aacute;rio", "Matr&iacute;culas em 90 dias", "Receita recorrente nova ao fim do ciclo"],
          [["Conservador", "9", "cerca de R$ 4.470 por m&ecirc;s"],
           [("Alvo", "tdb"), ("15", "tdb"), ("cerca de R$ 7.450 por m&ecirc;s", "tdb")],
           ["Ambicioso", "24", "cerca de R$ 11.900 por m&ecirc;s"]],
          [CW - 100 * mm, 40 * mm, 60 * mm], aligns=["L", "C", "L"]),

    SP(6),
    CALLOUT("Onde este c&aacute;lculo encosta na realidade",
            ["Estes n&uacute;meros usam o menor pre&ccedil;o da sua tabela. Cada aluna que escolhe duas vezes por "
             "semana vale R$ 798, e cada grupo muda a conta inteira, porque paga por pessoa e ocupa uma hora s&oacute; "
             "da sua agenda.",
             "<b>E &eacute; exatamente por isso que o cen&aacute;rio ambicioso provavelmente encontra o teto da sua "
             "agenda antes do dia 90.</b> Quando isso acontecer, a resposta certa n&atilde;o &eacute; trabalhar mais "
             "horas: &eacute; subir o pre&ccedil;o de novas matr&iacute;culas e priorizar duplas e grupos. Essa "
             "decis&atilde;o est&aacute; escrita na Fase 3."]),
    PageBreak(),
]

# ============================================================ 03 DIAGNOSTICO
BLOCKS += OPENER("03", "Diagn&oacute;stico", "o que a conversa revelou",
    "O que segue veio da nossa conversa de 20 de julho. N&atilde;o &eacute; avalia&ccedil;&atilde;o de "
    "desempenho: &eacute; o mapa de onde a alavanca pega.")

BLOCKS += [
    TWO(
        MINI("For&ccedil;as j&aacute; instaladas",
             ["<b>M&eacute;todo com mecanismo pr&oacute;prio.</b> Idioma, emo&ccedil;&atilde;o, corpo e "
              "presen&ccedil;a numa mesma aula, com seis anos de pr&aacute;tica atr&aacute;s.",
              "<b>Processo comercial maduro.</b> Voc&ecirc; veio do comercial e aplica isso: pergunta de origem, "
              "qualifica&ccedil;&atilde;o, agendamento imediato, demonstra&ccedil;&atilde;o vivencial.",
              "<b>Cadeia de indica&ccedil;&atilde;o ativa.</b> Uma aluna trouxe o marido, que trouxe a filha, "
              "que indicou outras. Isso &eacute; ativo, n&atilde;o sorte.",
              "<b>Hist&oacute;ria pr&oacute;pria e forte.</b> O laptop da Xuxa, o caderno, a voz gravada, a "
              "Wizard, a certifica&ccedil;&atilde;o. Mat&eacute;ria-prima de conte&uacute;do que ningu&eacute;m "
              "pode copiar.",
              "<b>Oferta nova com demanda observada.</b> O portugu&ecirc;s para estrangeiros nasceu de algo que "
              "voc&ecirc; viu acontecendo na sua cidade."]),
        MINI("Fragilidades a resolver",
             ["<b>Aquisi&ccedil;&atilde;o sem sistema.</b> Indica&ccedil;&atilde;o espont&acirc;nea mais "
              "Instagram sem cad&ecirc;ncia. Nenhum dos dois &eacute; program&aacute;vel hoje.",
              "<b>Perfeccionismo com conte&uacute;do.</b> Voc&ecirc; mesma nomeou: horas escolhendo uma cor. "
              "Por isso este plano fixa cad&ecirc;ncia baixa e defende publicar acima de aperfei&ccedil;oar.",
              "<b>Oferta de portugu&ecirc;s ainda imprecisa.</b> Dois valores divergentes e o recorte "
              "geogr&aacute;fico em aberto. An&uacute;ncio antes disso &eacute; desperd&iacute;cio.",
              "<b>Provas fortes sem documenta&ccedil;&atilde;o.</b> Existem hist&oacute;rias excelentes de alunas, "
              "mas quase nenhuma est&aacute; publicada com autoriza&ccedil;&atilde;o, contexto e data.",
              "<b>Teto de hora-aula.</b> Voc&ecirc; &eacute; a entrega inteira. Escalar por volume tem limite "
              "aritm&eacute;tico &mdash; e ele chega antes do que parece."]),
        ratio=0.5),

    SP(10),
    P("A frase que organiza o diagn&oacute;stico", "h2"),
    P("&ldquo;Eu vejo meu WhatsApp cheio de coisa e eu n&atilde;o dou conta sozinha de atender toda essa "
      "demanda.&rdquo;", "quote"),
    SP(3),
    P("Essa frase parece um problema de excesso, e &eacute; na verdade um problema de triagem. "
      "Existe demanda chegando; o que n&atilde;o existe &eacute; um caminho que separe rapidamente quem quer "
      "conversar de verdade de quem est&aacute; s&oacute; perguntando pre&ccedil;o. A se&ccedil;&atilde;o do funil "
      "resolve exatamente isso, e devolve o seu tempo.", "p"),
    PageBreak(),
]
