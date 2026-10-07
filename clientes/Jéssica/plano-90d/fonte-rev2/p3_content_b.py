# -*- coding: utf-8 -*- (parte B: diretriz + funil de vendas)

# ============================================================ 04 DIRETRIZ
BLOCKS += OPENER("04", "Um funil, dois motores, um destino", "diretriz",
    "A tenta&ccedil;&atilde;o natural seria fazer o Instagram falar com todo mundo. Ele n&atilde;o consegue. "
    "Brasileiras que querem ingl&ecirc;s e estrangeiros que querem portugu&ecirc;s n&atilde;o se encontram no "
    "mesmo lugar, nem na mesma l&iacute;ngua.")

BLOCKS += [
    TWO(
        MINI("Motor 1 &middot; Instagram",
             ["<b>P&uacute;blico:</b> mulheres adultas brasileiras, 25+, que querem falar ingl&ecirc;s com "
              "confian&ccedil;a.",
              "<b>Por que Instagram:</b> esse p&uacute;blico n&atilde;o busca professora no Google. Ele descobre "
              "algu&eacute;m e se identifica. &Eacute; um canal de reconhecimento, e o seu m&eacute;todo &eacute; "
              "reconhec&iacute;vel.",
              "<b>Combust&iacute;vel:</b> tr&ecirc;s reels por semana, sobre a sua tese &mdash; n&atilde;o dicas "
              "gen&eacute;ricas de ingl&ecirc;s.",
              "<b>Destino:</b> p&aacute;gina de ingl&ecirc;s e orat&oacute;ria bil&iacute;ngue."],
             OFFWHITE),
        MINI("Motor 2 &middot; Google",
             ["<b>P&uacute;blico:</b> estrangeiros vivendo no Brasil ou com v&iacute;nculo pr&oacute;ximo com "
              "brasileiros.",
              "<b>Por que Google:</b> esse p&uacute;blico procura com inten&ccedil;&atilde;o declarada &mdash; "
              "<i>portuguese classes</i>, <i>portuguese teacher</i>. Quem busca j&aacute; decidiu que quer; "
              "s&oacute; falta escolher com quem.",
              "<b>Combust&iacute;vel:</b> Perfil de Empresa no Google, gratuito, e depois an&uacute;ncio de "
              "pesquisa.",
              "<b>Destino:</b> p&aacute;gina de portugu&ecirc;s, escrita em ingl&ecirc;s."],
             colors.HexColor("#F7ECEF")),
        ratio=0.5),

    SP(10),
    DARKBOX("O destino &eacute; um s&oacute;",
            ["Os dois motores desembocam no mesmo lugar: <b>WhatsApp &rarr; conversa de 30 minutos &rarr; "
             "matr&iacute;cula.</b> Nenhuma p&aacute;gina tenta vender a mensalidade sozinha, e nenhuma "
             "p&aacute;gina pede cart&atilde;o antes de voc&ecirc; ter ouvido a pessoa.",
             "As p&aacute;ginas n&atilde;o vendem a aula. Elas vendem a conversa. Isso preserva o &uacute;nico "
             "lugar onde a sua convers&atilde;o j&aacute; &eacute; alta, em vez de tentar substitu&iacute;-lo."]),

    SP(9),
    P("Por que os p&uacute;blicos n&atilde;o se misturam numa p&aacute;gina s&oacute;", "h2"),
    P("Uma p&aacute;gina que tenta falar com brasileira e estrangeiro ao mesmo tempo obriga cada visitante a "
      "descobrir sozinho qual metade &eacute; dele. Todo par&aacute;grafo que serve aos dois deixa de servir "
      "bem a qualquer um. Duas p&aacute;ginas separadas custam o mesmo esfor&ccedil;o e convertem cada uma no "
      "seu idioma, com a sua dor e o seu pre&ccedil;o.", "p"),
    PageBreak(),
]

# ============================================================ 05 FUNIL
BLOCKS += OPENER("05", "O funil de vendas", "o cora&ccedil;&atilde;o da opera&ccedil;&atilde;o",
    "Esta se&ccedil;&atilde;o documenta o processo que voc&ecirc; j&aacute; executa &mdash; e que hoje s&oacute; "
    "existe na sua cabe&ccedil;a. Escrito, ele pode ser repetido em dia ruim, medido, melhorado e, um dia, "
    "entregue a outra pessoa.")

BLOCKS += [
    P("As cinco etapas", "h2"),
    TABLE(["#", "Etapa", "O que acontece", "Meta"],
          [["1", ("Chegada", "tdb"), "A pessoa te chama no WhatsApp, vinda de indica&ccedil;&atilde;o, "
            "Instagram ou Google.", "responder em at&eacute; 4h &uacute;teis"],
           ["2", ("Triagem", "tdb"), "Quatro perguntas curtas e o agendamento imediato da conversa.",
            "60% aceitam a conversa"],
           ["3", ("A conversa", "tdb"), "Trinta minutos no Zoom: escuta, demonstra&ccedil;&atilde;o do "
            "m&eacute;todo e op&ccedil;&otilde;es de investimento.", "50% matriculam"],
           ["4", ("Matr&iacute;cula", "tdb"), "Recomenda&ccedil;&atilde;o de frequ&ecirc;ncia, condi&ccedil;&atilde;o "
            "escolhida, contrato e primeira aula marcada.", "primeira aula em at&eacute; 7 dias"],
           ["5", ("Retomada", "tdb"), "Quem n&atilde;o fechou na hora entra numa sequ&ecirc;ncia de tr&ecirc;s "
            "toques com data marcada.", "20% dos adiados fecham depois"]],
          [8 * mm, 26 * mm, CW - 8 * mm - 26 * mm - 33 * mm, 33 * mm]),

    SP(9),
    CALLOUT("O princ&iacute;pio que sustenta o funil inteiro",
            ["Nenhuma etapa termina sem a pr&oacute;xima marcada. N&atilde;o existe &ldquo;depois eu te "
             "aviso&rdquo; da sua parte: existe dia e hora, ou existe uma data para voltar a falar. "
             "&Eacute; isso que separa um funil de uma caixa de entrada."]),
    PageBreak(),

    # ---------------- ETAPA 1
    P("ETAPA 1", "eyebrow"),
    P("Chegada: de onde vem quem chega", "h2"),
    P("A primeira pergunta que voc&ecirc; j&aacute; faz &mdash; <i>como voc&ecirc; me conheceu?</i> &mdash; &eacute; "
      "a mais valiosa do funil inteiro, e a mais f&aacute;cil de perder. Ela &eacute; o &uacute;nico jeito de "
      "saber qual motor est&aacute; funcionando. Anote a resposta sempre, mesmo que seja numa lista simples "
      "no bloco de notas.", "p"),

    TABLE(["Origem", "O que esperar", "O que muda no seu atendimento"],
          [[("Indica&ccedil;&atilde;o", "tdb"), "Chega com confian&ccedil;a emprestada e alta "
            "inten&ccedil;&atilde;o. Sua melhor convers&atilde;o.",
            "Cite quem indicou j&aacute; na primeira mensagem. Isso fecha o circuito de confian&ccedil;a."],
           [("Instagram", "tdb"), "Chega conhecendo o seu jeito, mas sem conhecer o m&eacute;todo. "
            "Curiosidade alta, urg&ecirc;ncia baixa.",
            "A conversa de 30 minutos importa mais aqui: &eacute; nela que a curiosidade vira decis&atilde;o."],
           [("P&aacute;gina ou Google", "tdb"), "Chega mais frio e mais racional. J&aacute; viu o pre&ccedil;o "
            "e o formato antes de falar com voc&ecirc;.",
            "N&atilde;o repita o que a p&aacute;gina j&aacute; disse. Pergunte o que faltou."],
           [("Base antiga", "tdb"), "J&aacute; conversou com voc&ecirc; e n&atilde;o fechou. Pode ter mudado "
            "de vida desde ent&atilde;o.", "Reabra pelo contexto antigo, nunca por oferta nova."]],
          [24 * mm, 52 * mm, CW - 24 * mm - 52 * mm]),

    SP(8),
    CALLOUT("Tempo de resposta &eacute; taxa de convers&atilde;o",
            ["Quem pergunta sobre aula est&aacute; quase sempre perguntando para mais de uma professora. "
             "Responder em quatro horas &uacute;teis n&atilde;o &eacute; educa&ccedil;&atilde;o: &eacute; vantagem "
             "competitiva. Se voc&ecirc; estiver em aula o dia inteiro, uma mensagem curta de "
             "reconhecimento j&aacute; segura a conversa at&eacute; voc&ecirc; poder responder direito."]),
    PageBreak(),

    # ---------------- ETAPA 2
    P("ETAPA 2", "eyebrow"),
    P("Triagem no WhatsApp: quatro perguntas e uma data", "h2"),
    P("Este &eacute; o seu processo atual, escrito. Ele resolve o problema do WhatsApp cheio, porque separa em "
      "poucas mensagens quem quer conversar de quem est&aacute; s&oacute; sondando pre&ccedil;o. O objetivo "
      "desta etapa n&atilde;o &eacute; vender. &Eacute; marcar a conversa.", "p"),

    STEP("1", "Acolher e perguntar a origem",
         "&ldquo;Como voc&ecirc; me conheceu?&rdquo; &mdash; abre a conversa, cria conex&atilde;o e te entrega "
         "o dado mais importante do funil.", "30 segundos"),
    STEP("2", "Qualificar o objetivo",
         "&ldquo;Seu interesse seria pessoal, profissional ou acad&ecirc;mico?&rdquo; &mdash; define o "
         "territ&oacute;rio da conversa e j&aacute; te diz onde focar a demonstra&ccedil;&atilde;o.", "30 segundos"),
    STEP("3", "Aprofundar uma vez",
         "Se profissional, pergunte a &aacute;rea de atua&ccedil;&atilde;o. Se pessoal, pergunte o contexto &mdash; "
         "viagem, fam&iacute;lia, retomada de estudo. Uma pergunta s&oacute;, n&atilde;o um question&aacute;rio.",
         "1 minuto"),
    STEP("4", "Oferecer data concreta, n&atilde;o disponibilidade gen&eacute;rica",
         "&ldquo;Voc&ecirc; est&aacute; dispon&iacute;vel amanh&atilde; &agrave;s nove?&rdquo; converte muito mais "
         "que &ldquo;quando voc&ecirc; pode?&rdquo;. Ofere&ccedil;a dois hor&aacute;rios fechados e deixe a "
         "pessoa escolher entre eles.", "1 minuto"),
    STEP("5", "Enquadrar a conversa antes de encerrar",
         "Diga o que vai acontecer nos trinta minutos: voc&ecirc;s v&atilde;o se conhecer, ela vai ver como o "
         "m&eacute;todo funciona e vai receber as op&ccedil;&otilde;es de investimento para escolher. Quem sabe "
         "o que vai acontecer aparece.", "30 segundos"),

    SP(4),
    SCRIPTBOX(["Oi, [nome]! Que bom te ver por aqui. Seja muito bem-vinda.",
               "Me conta uma coisa antes: como voc&ecirc; me conheceu?",
               "<i>&mdash; depois da resposta &mdash;</i>",
               "Que legal! E o seu interesse pelo ingl&ecirc;s seria mais pessoal, profissional ou acad&ecirc;mico?",
               "<i>&mdash; depois da resposta &mdash;</i>",
               "Perfeito. Ent&atilde;o vamos fazer o seguinte: eu tenho amanh&atilde; &agrave;s 9h ou quinta &agrave;s "
               "19h para a gente conversar trinta minutinhos por Zoom. A gente se conhece, eu te mostro como "
               "funciona a metodologia e te apresento as op&ccedil;&otilde;es de investimento para voc&ecirc; escolher "
               "a que faz sentido. Qual dos dois fica melhor para voc&ecirc;?"],
              "TRIAGEM NO WHATSAPP &middot; ADAPTE AO SEU JEITO"),

    SP(7),
    CALLOUT("E quando a pessoa pergunta o pre&ccedil;o antes de tudo?",
            ["N&atilde;o fuja da pergunta e n&atilde;o entregue uma tabela solta. As duas coisas custam venda. "
             "Diga a faixa e traga de volta para a conversa: <i>&ldquo;os planos come&ccedil;am em R$ 497 por "
             "m&ecirc;s e variam conforme a frequ&ecirc;ncia; na conversa eu entendo o seu objetivo e te digo qual "
             "faz sentido, para voc&ecirc; n&atilde;o pagar por mais aula do que precisa&rdquo;</i>. "
             "Voc&ecirc; respondeu, foi honesta, e o pr&oacute;ximo passo continua sendo a conversa."]),
    PageBreak(),

    # ---------------- ETAPA 3
    P("ETAPA 3", "eyebrow"),
    P("A conversa de 30 minutos", "h2"),
    P("Este &eacute; o seu ativo mais valioso, e at&eacute; hoje ele n&atilde;o estava escrito em lugar nenhum. "
      "O roteiro abaixo foi reconstru&iacute;do a partir da sua pr&oacute;pria descri&ccedil;&atilde;o. "
      "Leia como espelho, n&atilde;o como corre&ccedil;&atilde;o: a sua tarefa aqui &eacute; validar e ajustar, "
      "n&atilde;o aprender.", "p"),

    STEP("1", "Encantamento", ["Apresenta&ccedil;&atilde;o pessoal, calor, nome. Antes de qualquer conte&uacute;do, "
         "existe uma pessoa conhecendo outra. &Eacute; aqui que a temperatura da conversa inteira &eacute; definida."],
         "0 &rarr; 3 min"),
    STEP("2", "Escuta", ["&ldquo;Me fala um pouco sobre a sua hist&oacute;ria com o ingl&ecirc;s. Qual &eacute; o "
         "seu n&iacute;vel hoje? Com o que voc&ecirc; trabalha?&rdquo;",
         "Voc&ecirc; deixa falar e anota. Enquanto escuta, faz duas leituras ao mesmo tempo: o objetivo dela e o "
         "perfil dela &mdash; direta ao ponto, expansiva ou mais fechada. Essa leitura define o seu ritmo pelo "
         "resto da conversa."], "3 &rarr; 13 min"),
    STEP("3", "Pedir a passagem", ["&ldquo;Voc&ecirc; tem mais uns quinze minutinhos para eu te mostrar o "
         "m&eacute;todo?&rdquo;",
         "Parece detalhe e n&atilde;o &eacute;. Pedir permiss&atilde;o para continuar transforma apresenta&ccedil;&atilde;o "
         "em convite, e te d&aacute; o direito de conduzir os pr&oacute;ximos quinze minutos sem parecer que est&aacute; "
         "empurrando. Se ela falou demais e sobrou pouco tempo, comprima &mdash; nunca atropele."], "13 min"),
    STEP("4", "Demonstra&ccedil;&atilde;o vivencial", ["Voc&ecirc; n&atilde;o descreve o m&eacute;todo: voc&ecirc; "
         "faz a pessoa viver um peda&ccedil;o dele. Na ordem que voc&ecirc; j&aacute; usa:",
         "<b>a.</b> quebra a cren&ccedil;a de que ser&aacute; s&oacute; gram&aacute;tica &mdash; a objei&ccedil;&atilde;o "
         "silenciosa da maioria, e quase sempre a lembran&ccedil;a de uma experi&ecirc;ncia ruim;<br/>"
         "<b>b.</b> mostra o passo a passo da aula, com gram&aacute;tica e conversa&ccedil;&atilde;o juntas;<br/>"
         "<b>c.</b> demonstra os recursos: o &aacute;udio de resposta imediata, com acerto e erro vis&iacute;veis, "
         "e os v&iacute;deos de falantes de nacionalidades diferentes;<br/>"
         "<b>d.</b> nomeia a orat&oacute;ria bil&iacute;ngue &mdash; respira&ccedil;&atilde;o, postura, olhar &mdash; "
         "que &eacute; o que nenhuma escola oferece."], "13 &rarr; 25 min"),
    STEP("5", "Ancorar a expectativa", ["&ldquo;Isso que eu te mostrei &eacute; s&oacute; uma amostra, para "
         "voc&ecirc; sentir confian&ccedil;a. Tem muita coisa que voc&ecirc; s&oacute; vai conhecer sendo minha "
         "aluna.&rdquo;",
         "Essa frase faz duas coisas ao mesmo tempo: protege voc&ecirc; da compara&ccedil;&atilde;o com quem promete "
         "tudo, e responde &agrave; queixa mais comum de quem j&aacute; tentou com outro professor &mdash; que a aula "
         "n&atilde;o era nada do que imaginava."], "25 min"),
    STEP("6", "Op&ccedil;&otilde;es e recomenda&ccedil;&atilde;o", ["Voc&ecirc; apresenta os caminhos e "
         "<b>recomenda um</b>, com o porqu&ecirc;, baseado no que ouviu nos primeiros dez minutos. Ningu&eacute;m "
         "gosta de escolher sozinho entre quatro pre&ccedil;os.",
         "Termine sempre com uma pergunta de decis&atilde;o, n&atilde;o com um sil&ecirc;ncio: <i>&ldquo;faz sentido "
         "come&ccedil;armos com duas vezes por semana?&rdquo;</i>"], "25 &rarr; 30 min"),

    SP(5),
    CALLOUT("A regra dos primeiros dez minutos",
            ["Tudo o que voc&ecirc; recomenda no minuto 27 vem do que voc&ecirc; ouviu at&eacute; o minuto 13. "
             "Se a escuta encolhe, a recomenda&ccedil;&atilde;o vira palpite &mdash; e palpite n&atilde;o fecha "
             "m&oacute;dulo de seis meses. Quando o tempo apertar, corte da demonstra&ccedil;&atilde;o, "
             "nunca da escuta."]),
    PageBreak(),

    # ---------------- ETAPA 4 e 5
    P("ETAPA 4", "eyebrow"),
    P("Matr&iacute;cula: o que precisa acontecer antes de desligar", "h2"),
    P("Uma conversa excelente que termina sem pr&oacute;ximo passo concreto vira lembran&ccedil;a boa e nada mais. "
      "Quatro coisas fecham a etapa:", "p"),
    UL(["<b>A frequ&ecirc;ncia recomendada</b>, dita por voc&ecirc;, com o motivo ligado ao objetivo dela.",
        "<b>A condi&ccedil;&atilde;o escolhida</b> &mdash; mensal ou semestral, forma de pagamento definida.",
        "<b>O contrato enviado</b> no mesmo dia, enquanto a decis&atilde;o est&aacute; quente.",
        "<b>A primeira aula marcada</b> com dia e hora, de prefer&ecirc;ncia dentro de sete dias. Aluna que "
        "come&ccedil;a r&aacute;pido desiste menos."]),

    SP(9),
    P("ETAPA 5", "eyebrow"),
    P("Quem n&atilde;o fecha na hora", "h2"),
    P("&ldquo;Vou pensar&rdquo; quase nunca &eacute; n&atilde;o. Costuma ser dinheiro, tempo ou medo de "
      "n&atilde;o dar conta &mdash; e cada um pede uma resposta diferente. O erro caro &eacute; deixar a "
      "conversa morrer sozinha por consider&aacute;-la constrangedora.", "p"),

    TABLE(["Toque", "Quando", "O que dizer"],
          [[("1", "tdb"), "no mesmo dia", "Agradecer a conversa e mandar por escrito a recomenda&ccedil;&atilde;o "
            "e as condi&ccedil;&otilde;es. Sem press&atilde;o, s&oacute; registro do que foi conversado."],
           [("2", "tdb"), "3 dias depois", "Uma pergunta &uacute;nica e direta: ficou alguma d&uacute;vida sobre "
            "a frequ&ecirc;ncia ou sobre a condi&ccedil;&atilde;o?"],
           [("3", "tdb"), "10 dias depois", "Fechar o ciclo com honestidade: perguntar se este &eacute; o momento "
            "ou se faz mais sentido voc&ecirc;s se falarem daqui a alguns meses. Marcar a data desse retorno."]],
          [16 * mm, 26 * mm, CW - 42 * mm]),

    SP(7),
    CALLOUT("A r&eacute;gua de perda",
            ["Depois do terceiro toque sem resposta, a pessoa sai do seu radar ativo e entra na lista de "
             "reativa&ccedil;&atilde;o com uma data. Isso n&atilde;o &eacute; desistir dela: &eacute; parar de gastar "
             "energia di&aacute;ria com quem n&atilde;o est&aacute; pronto. Sem essa r&eacute;gua, o WhatsApp vira "
             "um cemit&eacute;rio de conversas em aberto que pesa todo dia."]),
    PageBreak(),

    # ---------------- MOTOR 0
    P("CAIXA IMEDIATO", "eyebrow"),
    P("A via mais curta at&eacute; o pr&oacute;ximo dinheiro", "h2"),
    P("Conte&uacute;do e an&uacute;ncio levam semanas para dar retorno. Duas a&ccedil;&otilde;es abaixo levam "
      "dias, custam zero e usam algo que voc&ecirc; j&aacute; tem. Elas rodam nas semanas 1 e 2, em paralelo "
      "&agrave; constru&ccedil;&atilde;o dos motores.", "p"),

    P("1. Indica&ccedil;&atilde;o estruturada", "h3"),
    P("Hoje a indica&ccedil;&atilde;o acontece por gratid&atilde;o espont&acirc;nea. Ela pode acontecer por "
      "convite &mdash; e o melhor momento para convidar &eacute; logo depois de uma aluna te dar um retorno "
      "positivo, que &eacute; algo que voc&ecirc; j&aacute; provoca quando pergunta como est&aacute; sendo "
      "estudar com voc&ecirc;.", "p"),
    SCRIPTBOX(["Que alegria ler isso, [nome]. Obrigada de verdade.",
               "Deixa eu te fazer um convite: se voc&ecirc; conhece algu&eacute;m que quer destravar o ingl&ecirc;s "
               "&mdash; ou que j&aacute; estudou e ainda trava na hora de falar &mdash; pode me apresentar. "
               "A conversa inicial de trinta minutos &eacute; por minha conta e ela sai de l&aacute; sabendo "
               "exatamente o que fazer, matriculando comigo ou n&atilde;o."],
              "PEDIDO DE INDICA&Ccedil;&Atilde;O &middot; DEPOIS DE UM FEEDBACK POSITIVO"),

    SP(8),
    P("2. Reativa&ccedil;&atilde;o da base do WhatsApp", "h3"),
    P("Varra as conversas dos &uacute;ltimos doze meses e separe quem demonstrou interesse e n&atilde;o "
      "fechou. Essas pessoas j&aacute; sabem quem voc&ecirc; &eacute;: n&atilde;o precisam ser convencidas de "
      "novo, s&oacute; precisam ser lembradas num momento diferente da vida delas.", "p"),
    SCRIPTBOX(["Oi, [nome]! Aqui &eacute; a J&eacute;ssica, do ingl&ecirc;s. Tudo bem?",
               "Lembrei de voc&ecirc; hoje: a gente conversou sobre aula em [m&ecirc;s] e na &eacute;poca n&atilde;o "
               "era o momento.",
               "Estou organizando as turmas do pr&oacute;ximo m&oacute;dulo e queria saber se agora faz mais "
               "sentido para voc&ecirc;. Se fizer, a gente marca trinta minutinhos para conversar. Se n&atilde;o "
               "fizer, tamb&eacute;m est&aacute; tudo bem &mdash; s&oacute; me responde para eu saber."],
              "REATIVA&Ccedil;&Atilde;O DA BASE"),

    SP(7),
    CALLOUT("Por que isto vem antes do tr&aacute;fego pago",
            ["Uma lista de cinquenta conversas antigas com dez por cento de retorno d&aacute; cinco conversas "
             "novas nesta semana &mdash; exatamente a meta mensal do cen&aacute;rio-alvo, conquistada sem "
             "algoritmo, sem verba e sem esperar. O tr&aacute;fego pago serve para escalar o que j&aacute; "
             "funciona, nunca para produzir o primeiro dinheiro."]),
    PageBreak(),
]
