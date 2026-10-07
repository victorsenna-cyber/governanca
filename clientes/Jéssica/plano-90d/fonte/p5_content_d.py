# -*- coding: utf-8 -*- (parte D: motores, cronograma, metricas, riscos, fecho)

# ============================================================ 07 MOTORES
BLOCKS += OPENER("07", "A sequ&ecirc;ncia dos dois motores", "ordem de execu&ccedil;&atilde;o",
    "Cada passo abaixo destrava o seguinte. Pular a ordem n&atilde;o acelera o resultado &mdash; s&oacute; "
    "antecipa o custo.")

BLOCKS += [
    P("Motor 1 &middot; Instagram &rarr; ingl&ecirc;s para brasileiras", "h2"),
    TABLE(["#", "Passo", "Quando", "Dono"],
          [["1", "Bio, destaques e link para a p&aacute;gina de ingl&ecirc;s", "Semana 1", "voc&ecirc; e n&oacute;s"],
           ["2", "Primeiro lote de tr&ecirc;s reels gravado e publicado", "Semana 1", "voc&ecirc;"],
           ["3", "Cad&ecirc;ncia de tr&ecirc;s reels por semana estabilizada", "Semanas 2 a 4", "voc&ecirc;"],
           ["4", "Leitura dos dados: reten&ccedil;&atilde;o, mensagens geradas, qual pilar puxa conversa",
            "Semana 4", "n&oacute;s"],
           ["5", "Impulsionar apenas o reel vencedor da quinzena", "Fase 2", "n&oacute;s orientamos"]],
          [8 * mm, CW - 8 * mm - 60 * mm, 30 * mm, 30 * mm]),

    SP(9),
    P("Motor 2 &middot; Google &rarr; portugu&ecirc;s para estrangeiros", "h2"),
    TABLE(["#", "Passo", "Quando", "Dono"],
          [["1", "Fechar a precis&atilde;o da oferta: os dois valores divergentes, o recorte geogr&aacute;fico "
            "e o WhatsApp final", "Semanas 1 e 2", "voc&ecirc; e n&oacute;s"],
           ["2", "Cinco a dez conversas reais com estrangeiros locais, s&oacute; para ouvir",
            "Semanas 2 a 4", "voc&ecirc;"],
           ["3", "Perfil de Empresa no Google publicado &mdash; gratuito e imediato", "Semanas 3 e 4",
            "n&oacute;s orientamos"],
           ["4", "P&aacute;gina de portugu&ecirc;s ativada com WhatsApp real", "assim que os itens 1 e 3 fecharem",
            "n&oacute;s"],
           ["5", "An&uacute;ncio de pesquisa no Google, verba de teste", "Fase 2", "n&oacute;s"]],
          [8 * mm, CW - 8 * mm - 60 * mm, 30 * mm, 30 * mm]),

    SP(8),
    CALLOUT("Por que o passo 2 existe, mesmo parecendo lento",
            ["A oferta de portugu&ecirc;s &eacute; nova e ainda n&atilde;o foi comprada por ningu&eacute;m. Cinco "
             "conversas com estrangeiros de verdade custam algumas horas e respondem o que nenhuma reuni&atilde;o "
             "responde: qual dor eles nomeiam, com que urg&ecirc;ncia e quanto aceitam pagar. "
             "An&uacute;ncio sobre oferta n&atilde;o validada gasta verba para descobrir a mesma coisa &mdash; "
             "s&oacute; que caro e devagar."]),
    PageBreak(),
]

# ============================================================ 08 CRONOGRAMA
BLOCKS += OPENER("08", "Cronograma", "30 &middot; 60 &middot; 90",
    "Tr&ecirc;s fases de trinta dias. Cada uma tem um resultado que se pode verificar sem discuss&atilde;o.")

BLOCKS += [
    P("Fase 1 &middot; Funda&ccedil;&atilde;o &mdash; 06/08 a 04/09", "h2"),
    TABLE(["A&ccedil;&atilde;o", "Dono", "Prazo"],
          [["Preencher o painel da Semana 1 (os seis n&uacute;meros)", "voc&ecirc;", "Semana 1"],
           ["Campanha de indica&ccedil;&atilde;o com as alunas atuais", "voc&ecirc;", "Semana 1"],
           ["Reativa&ccedil;&atilde;o da base do WhatsApp", "voc&ecirc;", "Semanas 1 e 2"],
           ["Bio, destaques e link novos", "voc&ecirc; e n&oacute;s", "Semana 1"],
           ["Primeiro lote de reels gravado e publicado", "voc&ecirc;", "Semana 1"],
           ["Enviar WhatsApp corporativo, fotos e certifica&ccedil;&atilde;o", "voc&ecirc;", "Semana 1"],
           ["Corrigir os dois valores da oferta de portugu&ecirc;s", "voc&ecirc; e n&oacute;s", "Semana 2"],
           ["Ativar as duas p&aacute;ginas com WhatsApp real", "n&oacute;s", "assim que o n&uacute;mero chegar"],
           ["Cinco a dez conversas de valida&ccedil;&atilde;o com estrangeiros", "voc&ecirc;", "Semanas 2 a 4"],
           ["Perfil de Empresa no Google no ar", "voc&ecirc; publica, n&oacute;s orientamos", "Semanas 3 e 4"],
           ["Documentar tr&ecirc;s provas public&aacute;veis, com autoriza&ccedil;&atilde;o", "voc&ecirc;", "Semana 4"]],
          [CW - 66 * mm, 34 * mm, 32 * mm]),
    SP(4),
    P("<b>Resultado da fase:</b> funil inteiro no ar, caixa novo vindo de indica&ccedil;&atilde;o e base quente, "
      "oferta de portugu&ecirc;s definida e ouvida na rua.", "small"),

    PageBreak(),
    P("Fase 2 &middot; Tra&ccedil;&atilde;o &mdash; 05/09 a 04/10", "h2"),
    TABLE(["A&ccedil;&atilde;o", "Dono"],
          [["An&uacute;ncio de pesquisa no Google para o portugu&ecirc;s, verba de teste", "n&oacute;s"],
           ["Impulsionar o reel vencedor da quinzena", "n&oacute;s orientamos"],
           ["Iterar os reels pelos dados e dobrar no pilar que mais gera conversa", "voc&ecirc; e n&oacute;s"],
           ["Publicar as provas j&aacute; autorizadas nas p&aacute;ginas e nos reels", "n&oacute;s e voc&ecirc;"],
           ["Ritual quinzenal de m&eacute;tricas: quinze minutos, uma decis&atilde;o registrada", "n&oacute;s"]],
          [CW - 40 * mm, 40 * mm]),
    SP(4),
    P("<b>Resultado da fase:</b> primeiro fluxo pago rodando nos dois motores e as primeiras "
      "matr&iacute;culas rastre&aacute;veis por origem.", "small"),

    SP(9),
    P("Fase 3 &middot; Escala e ordena&ccedil;&atilde;o &mdash; 05/10 a 04/11", "h2"),
    TABLE(["A&ccedil;&atilde;o", "Dono"],
          [["Escalar o que provou custo saud&aacute;vel; desligar o que n&atilde;o provou", "n&oacute;s"],
           ["Decis&atilde;o de capacidade: agenda acima de 80% &rarr; subir pre&ccedil;o de novas "
            "matr&iacute;culas e priorizar duplas e grupos", "voc&ecirc; e n&oacute;s"],
           ["Estruturar o English Flow como degrau de perman&ecirc;ncia para quem termina um m&oacute;dulo",
            "voc&ecirc; e n&oacute;s"],
           ["Revis&atilde;o dos 90 dias e desenho do pr&oacute;ximo ciclo", "n&oacute;s"]],
          [CW - 40 * mm, 40 * mm]),
    SP(4),
    P("<b>Resultado da fase:</b> motores ajustados, agenda protegida por pre&ccedil;o e a decis&atilde;o do "
      "pr&oacute;ximo ciclo tomada com dados &mdash; n&atilde;o com vontade.", "small"),
    PageBreak(),
]

# ============================================================ 09 METRICAS
BLOCKS += OPENER("09", "Painel de m&eacute;tricas", "como saberemos",
    "Seis n&uacute;meros, nenhum decorativo. Cada um existe para responder uma pergunta que muda uma "
    "decis&atilde;o.")

BLOCKS += [
    TABLE(["M&eacute;trica", "Pergunta que responde", "Cad&ecirc;ncia"],
          [[("Conversas novas por semana, separadas por origem", "tdb"),
            "O topo est&aacute; crescendo? Qual motor est&aacute; puxando?", "semanal"],
           [("Conversas de 30 minutos agendadas e realizadas", "tdb"),
            "A triagem est&aacute; funcionando ou as pessoas somem antes?", "semanal"],
           [("Matr&iacute;culas por m&ecirc;s e receita nova", "tdb"),
            "O plano est&aacute; se pagando?", "mensal"],
           [("Reten&ccedil;&atilde;o dos reels e mensagens geradas", "tdb"),
            "Qual pilar de conte&uacute;do trabalha de verdade?", "quinzenal"],
           [("Custo por conversa iniciada", "tdb"),
            "O an&uacute;ncio merece continuar recebendo verba?", "quinzenal"],
           [("Ocupa&ccedil;&atilde;o da agenda", "tdb"),
            "&Eacute; hora de subir pre&ccedil;o em vez de buscar mais gente?", "mensal"]],
          [56 * mm, CW - 56 * mm - 26 * mm, 26 * mm]),

    SP(9),
    DARKBOX("A regra da revis&atilde;o quinzenal",
            ["Toda revis&atilde;o termina com <b>uma decis&atilde;o registrada</b>: dobrar em alguma coisa, matar "
             "alguma coisa ou corrigir alguma coisa. Quinze minutos, no grupo.",
             "Reuni&atilde;o de m&eacute;trica que termina em &ldquo;interessante&rdquo; &eacute; reuni&atilde;o "
             "que n&atilde;o precisava existir. Se o n&uacute;mero n&atilde;o muda o que voc&ecirc; faz na semana "
             "seguinte, ele sai do painel."]),

    SP(9),
    P("Datas das revis&otilde;es", "h2"),
    TABLE(["Revis&atilde;o", "Data", "Foco"],
          [["1&ordf;", "20/08/2026", "Baseline preenchido, cad&ecirc;ncia de reels de p&eacute;, primeiros "
            "retornos da reativa&ccedil;&atilde;o."],
           ["2&ordf;", "03/09/2026", "Fechamento da Fase 1 e leitura das taxas reais do funil."],
           ["3&ordf;", "17/09/2026", "Primeiros dados do an&uacute;ncio e do pilar vencedor."],
           ["4&ordf;", "01/10/2026", "Fechamento da Fase 2: o que escala e o que morre."],
           ["5&ordf;", "15/10/2026", "Capacidade e pre&ccedil;o."],
           ["6&ordf;", "04/11/2026", "Revis&atilde;o dos 90 dias e desenho do pr&oacute;ximo ciclo."]],
          [22 * mm, 32 * mm, CW - 54 * mm]),
    PageBreak(),
]

# ============================================================ 10 RISCOS
BLOCKS += OPENER("10", "Riscos e prote&ccedil;&otilde;es", "o que pode dar errado",
    "Nenhum destes riscos &eacute; hipot&eacute;tico: todos apareceram na nossa conversa. Cada um tem uma "
    "prote&ccedil;&atilde;o escrita antes de acontecer.")

BLOCKS += [
    TABLE(["Risco", "Prote&ccedil;&atilde;o"],
          [[("O perfeccionismo travar a cad&ecirc;ncia de conte&uacute;do", "tdb"),
            "Grava&ccedil;&atilde;o em lote semanal &middot; tr&ecirc;s reels &eacute; teto e piso &middot; "
            "publicado vence perfeito. Se um v&iacute;deo j&aacute; est&aacute; bom, ele sai."],
           [("An&uacute;ncio antes da oferta de portugu&ecirc;s estar pronta", "tdb"),
            "Gate expl&iacute;cito: an&uacute;ncio &eacute; o passo cinco do Motor 2, nunca o primeiro."],
           [("Crescer al&eacute;m da agenda e piorar a entrega", "tdb"),
            "R&eacute;gua de ocupa&ccedil;&atilde;o na Fase 3: acima de 80%, sobe pre&ccedil;o e priorizam-se "
            "duplas e grupos, em vez de acrescentar horas."],
           [("Promessa que soe cl&iacute;nica ou terap&ecirc;utica", "tdb"),
            "O trabalho &eacute; educacional. Emo&ccedil;&atilde;o, corpo e presen&ccedil;a entram como parte de "
            "aprender idioma. Isso vale para p&aacute;gina, reel e conversa."],
           [("Depoimento publicado sem autoriza&ccedil;&atilde;o", "tdb"),
            "Nome, print, foto ou &aacute;udio de aluna s&oacute; v&atilde;o ao ar com autoriza&ccedil;&atilde;o "
            "escrita guardada. Sem ela, a prova &eacute; anonimizada ou n&atilde;o &eacute; usada."],
           [("Duas frentes ao mesmo tempo dispersarem a energia", "tdb"),
            "As frentes t&ecirc;m ritmos diferentes de prop&oacute;sito: o ingl&ecirc;s pede constância sua "
            "(reels); o portugu&ecirc;s pede decis&otilde;es pontuais e depois roda no Google, com "
            "pouca demanda do seu tempo."],
           [("O plano virar documento parado", "tdb"),
            "Revis&atilde;o quinzenal com data marcada e uma decis&atilde;o registrada por vez. Datas na "
            "p&aacute;gina anterior."]],
          [50 * mm, CW - 50 * mm]),
    PageBreak(),
]

# ============================================================ 11 INSUMOS
BLOCKS += OPENER("11", "O que depende de voc&ecirc;", "para o plano andar",
    "Cinco itens. Enquanto eles n&atilde;o chegam, as p&aacute;ginas ficam no ar como vitrine e o funil "
    "n&atilde;o consegue receber ningu&eacute;m.")

BLOCKS += [
    TABLE(["#", "Item", "Por que trava", "At&eacute; quando"],
          [["1", ("O n&uacute;mero do WhatsApp corporativo", "tdb"),
            "&Eacute; o destino de todos os bot&otilde;es das duas p&aacute;ginas. Sem ele, o formul&aacute;rio "
            "n&atilde;o abre conversa nenhuma.", ("Semana 1", "tdb")],
           ["2", ("O endere&ccedil;o da planilha de contatos", "tdb"),
            "&Eacute; onde cada lead fica registrado com nome, telefone e objetivo. Sem isso, quem preenche o "
            "formul&aacute;rio se perde.", ("Semana 1", "tdb")],
           ["3", ("Autoriza&ccedil;&atilde;o das provas", "tdb"),
            "Cada print, nome ou foto de aluna precisa de um sim por escrito antes de aparecer publicamente.",
            ("Semana 1", "tdb")],
           ["4", ("Os dois valores da oferta de portugu&ecirc;s", "tdb"),
            "O total do plano semestral de uma aula por semana est&aacute; divergente, e o valor final dos "
            "planos mensais depois do desconto n&atilde;o foi fechado.", ("Semana 2", "tdb")],
           ["5", ("Fotos e certifica&ccedil;&atilde;o", "tdb"),
            "As fotos melhoram as duas p&aacute;ginas; a certifica&ccedil;&atilde;o &eacute; prova e s&oacute; "
            "pode ser citada com o documento em m&atilde;os.", ("Semana 2", "tdb")]],
          [8 * mm, 42 * mm, CW - 8 * mm - 42 * mm - 24 * mm, 24 * mm]),

    SP(9),
    CALLOUT("Uma observa&ccedil;&atilde;o honesta sobre o item 3",
            ["Pedir autoriza&ccedil;&atilde;o para usar o retorno de uma aluna costuma parecer constrangedor e "
             "quase nunca &eacute;. Quem escreveu aquilo escreveu porque quis. Uma mensagem simples resolve: "
             "<i>&ldquo;posso mostrar o que voc&ecirc; me escreveu para outras pessoas que est&atilde;o na "
             "d&uacute;vida? Se preferir, eu tiro o seu nome&rdquo;</i>."]),
    PageBreak(),
]

# ============================================================ FECHO
BLOCKS += [
    P("Para fechar", "h1"),
    P("O que este plano decide, em quatro linhas.", "h1sub"),
    Rule(), SP(4),

    P("<b>Decis&atilde;o.</b> Crescer por dois motores separados, com uma porta de entrada &uacute;nica e um "
      "fechamento &uacute;nico: o Instagram vende o m&eacute;todo para brasileiras, o Google captura "
      "inten&ccedil;&atilde;o de estrangeiros, e os dois desembocam na sua conversa de trinta minutos.", "p"),
    P("<b>Dire&ccedil;&atilde;o.</b> Caixa primeiro, com indica&ccedil;&atilde;o e base quente. Audi&ecirc;ncia em "
      "paralelo, com tr&ecirc;s reels por semana. An&uacute;ncio por &uacute;ltimo, e s&oacute; sobre oferta "
      "validada com p&aacute;gina no ar.", "p"),
    P("<b>A&ccedil;&atilde;o.</b> O cronograma das tr&ecirc;s fases, com dono e prazo em cada linha, e uma "
      "revis&atilde;o quinzenal que termina sempre com uma decis&atilde;o registrada.", "p"),
    P("<b>Impacto.</b> Ao fim de noventa dias, a pergunta &ldquo;de onde vem a pr&oacute;xima aluna?&rdquo; "
      "deixa de ter como resposta &ldquo;espero que algu&eacute;m me indique&rdquo;.", "p"),

    SP(12),
    DARKBOX("Uma &uacute;ltima coisa",
            ["Voc&ecirc; construiu um m&eacute;todo a partir de um laptop de brinquedo, um caderno e a sua "
             "pr&oacute;pria voz gravada antes de entender o que dizia. Ningu&eacute;m que faz isso tem "
             "problema de capacidade.",
             "O que faltava era um caminho para que mais gente chegasse at&eacute; a conversa em que voc&ecirc; "
             "j&aacute; &eacute; excelente. &Eacute; s&oacute; isso que este documento constr&oacute;i."]),

    SP(14),
    Rule(46, 1.6, GOLD, 0),
    SP(9),
    P("Plano estrat&eacute;gico de 90 dias &middot; Emotional Speaking &middot; J&eacute;ssica Oliveira<br/>"
      "Vig&ecirc;ncia 06/08/2026 a 04/11/2026 &middot; primeira revis&atilde;o em 20/08/2026<br/>"
      "Elaborado por Continuum AI Systems como parte do escopo contratado.", "small"),
]
