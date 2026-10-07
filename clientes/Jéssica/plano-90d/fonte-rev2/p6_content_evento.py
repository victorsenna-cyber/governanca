# -*- coding: utf-8 -*- (parte E: revisão 2 de 11/08/2026 — o terceiro motor)

# ============================================================ 12 O TERCEIRO MOTOR
BLOCKS += OPENER("12", "O terceiro motor", "revisão 2 · 11 de agosto",
    "Quando este plano foi escrito, eventos presenciais estavam na lista do que não seria feito agora. "
    "A nossa conversa de 6 de agosto mostrou que aquela exclusão foi escrita contra uma coisa diferente "
    "da que está na mesa. Esta parte corrige isso e transforma o seu evento no terceiro motor "
    "do plano.")

BLOCKS += [
    P("O que muda, e o que continua igual", "h2"),

    TWO(
        MINI("Continua fora",
             ["Evento presencial como <b>produto novo</b>: oferta própria, página própria, funil próprio e "
              "meta de bilheteria.",
              "Isso continuaria abrindo uma frente que compete com as duas que já existem, e não é o que "
              "você descreveu na call."]),
        MINI("Passa a valer",
             ["A <b>Ladies Fluency Experience</b> como vivência de aquisição: público local e base quente, "
              "teto de capacidade, ingresso de filtro.",
              "Métrica única: <b>quantas mentorias saem dali</b>. Não quantos ingressos foram vendidos."]),
    ),
    SP(9),

    P("A razão é estrutural, e já estava escrita neste plano. O diagnóstico da seção 03 identificou que o "
      "seu ativo de conversão mais forte é a conversa de trinta minutos com demonstração vivencial. "
      "O evento é essa demonstração acontecendo para uma sala inteira ao mesmo tempo.", "p"),

    CALLOUT("Não é uma frente nova",
            "É o mesmo ativo que já converte, multiplicado pela sala. Por isso ele cabe no plano sem "
            "competir com o que já está rodando.", "ruby"),
    SP(9),

    P("O funil, agora com três motores", "h2"),

    TABLE(["", "Motor 1 · Instagram", "Motor 2 · Google", "Motor 3 · Evento"],
          [[("Público", "tdb"), "brasileiras adultas, inglês", "estrangeiros em Floripa, português",
            "empresárias de Florianópolis"],
           [("Combustível", "tdb"), "3 reels por semana", "perfil no Google e busca paga",
            "Turbinar local e base quente"],
           [("Destino", "tdb"), "página de inglês", "página de português", "página do evento"],
           [("Fechamento", "tdb"), "sua conversa de 30 min", "sua conversa de 30 min",
            ("o pitch na sala", "tdb")],
           [("Leva para", "tdb"), "aulas, R$ 497 a R$ 1.700", "aulas de português",
            ("mentoria, R$ 4.997", "tdb")]],
          [22*mm, CW*0.26, CW*0.26, CW*0.26]),
    SP(7),

    P("A diferença que importa: os dois primeiros motores levam à esteira que você já tem. "
      "O terceiro leva à esteira nova. <b>É a via de caixa mais curta e de maior valor unitário do ciclo "
      "inteiro</b>, e por isso ele ganha prioridade de atenção no último terço do plano.", "p"),

    PageBreak(),
]

# ============================================================ 13 O QUE SE VENDE NA SALA
BLOCKS += OPENER("13", "O que se vende na sala", "a decisão comercial do evento",
    "Esta é a decisão mais importante do último terço do plano. Ela contraria o instinto natural, "
    "porque o Intensivão VIP é hoje o único produto de dez mil reais no seu portfólio e por isso parece "
    "o candidato óbvio ao palco.")

BLOCKS += [
    DARKBOX("A decisão",
            ["O pitch na sala é da <b>mentoria</b>, não do Intensivão.",
             "Quatro contradições desqualificam o Intensivão para esse público. Todas as quatro saem "
             "da sua própria fala na call de 6 de agosto."]),
    SP(11),

    STEP("1", "Contradição de diagnóstico",
         ["Você mesma definiu a dor da sala: <i>“a questão dela não é mais falta de vocabulário. Ela trava, "
          "ela gagueja, ela tem medo.”</i>",
          "O Intensivão é a resposta para <b>“me falta volume e tempo”</b>. Oferecer mais aula a quem não tem "
          "problema de aula responde a uma pergunta que a sala não fez — e faz isso logo depois de quatro "
          "horas provando que você entendeu a dor dela."]),

    STEP("2", "Contradição de mecanismo",
         ["A tarde inteira prova que o destravamento acontece <b>no coletivo, com o corpo, num ambiente "
          "seguro</b>. Yoga, duplas, jogo, roda, café.",
          "O Intensivão é o oposto: individual, online, na tela, sozinha. Vender individual depois de "
          "demonstrar que a cura é coletiva é vender o contrário do que se acabou de provar."]),

    STEP("3", "Contradição de identidade",
         ["Uma empresária de quarenta anos não se vê como “aluna fazendo quatro aulas de inglês por semana”. "
          "Essa frase a devolve para a escola, que é onde o medo de errar em público costuma ter começado.",
          "<b>“Processo” é progressão de identidade. “Aula” é regressão.</b> Para esse público, isso não é "
          "diferença de palavra: é diferença de decisão."]),

    STEP("4", "Contradição de escala — a que decide",
         ["<i>“Essa questão de vender tempo é uma coisa que eu não quero mais. Quero justamente escalar. "
          "Dar duas, três aulas por dia, assim tá ótimo.”</i>",
          "O Intensivão é o produto que <b>mais consome hora sua por real faturado</b>: dezesseis aulas por "
          "mês para cada aluna. Vender Intensivão no evento seria usar o veículo da travessia para acelerar "
          "justamente o modelo do qual você quer sair."]),

    SP(4),
    CondPageBreak(58 * mm),
    KeepTogether([
        P("Os dois caminhos, lado a lado", "h2"),
        TABLE(["Se o pitch for", "Preço", "Vendas para R$ 20 mil", "Rende por hora sua"],
              [["Intensivão VIP semestral", "R$ 10.200", "2 · 13% da sala", ("R$ 106", "tdb")],
               [("English Therapy + Circle", "tdb"), ("R$ 4.997", "tdb"), "4 · 27% da sala",
                ("R$ 1.363 a R$ 1.817", "tdb")]],
              [CW*0.34, CW*0.16, CW*0.26, CW*0.24], aligns=["L", "R", "C", "R"]),
        SP(6),
        P("São o dobro de unidades para o mesmo faturamento — e ainda assim é o caminho certo, porque o "
          "produto custa metade, fala com a dor que a sala acabou de sentir na pele, e rende <b>treze vezes "
          "mais por hora sua</b>. O desenho completo da mentoria está no estudo entregue junto com este "
          "plano.", "p"),
    ]),

    PageBreak(),
]

# ============================================================ 13.2 A MECANICA DO PITCH
BLOCKS += [
    P("A mecânica do pitch", "h1"),
    P("O que acontece entre 17h20 e 18h decide o resultado do dia inteiro.", "h1sub"),
    Rule(), SP(4),

    TABLE(["Horário", "O que acontece"],
          [[("14h – 17h20", "tdb"), "A vivência, exatamente como você desenhou. "
            "<b>Zero menção a venda.</b> A experiência não pode ser sentida como isca"],
           [("17h20", "tdb"), "Você nomeia o que acabou de acontecer na sala: <i>“ninguém aqui travou por falta "
            "de palavra. Travou por outra coisa. Essa outra coisa tem nome e tem caminho.”</i> "
            "A ponte é a vivência delas, não um argumento"],
           [("17h25", "tdb"), "Você apresenta a <b>primeira turma de English Therapy</b>, que começa em fevereiro: para quem é, o que não é, os doze encontros, "
            "seis vagas. <b>Oito a doze minutos, não mais</b>"],
           [("17h35", "tdb"), "Condição de sala, com prazo verdadeiro: vale até o fim do evento. "
            "O desconto tem motivo declarado, não é truque"],
           [("17h40", "tdb"), "<b>Ficha de papel na mão de todas</b>, com três caixas"],
           [("17h45 – 18h", "tdb"), "Café final. Você agenda as conversas <b>na hora</b>, com data e horário "
            "no celular da pessoa"]],
          [26*mm, CW - 26*mm]),
    SP(9),

    P("Uma oferta no palco, três caixas na ficha", "h2"),

    P("Três ofertas faladas confundem, e confusão não compra. Por isso sobe uma só. A ficha acomoda a "
      "diversidade da sala sem exigir que ninguém levante a mão:", "p"),

    SCRIPTBOX(["<b>( ) Quero a turma de English Therapy.</b> Me manda os detalhes hoje ainda.",
               "<b>( ) Quero só o Circle</b> por enquanto.",
               "<b>( ) Quero conversar sobre o meu caso</b> antes de decidir."],
              "A FICHA — TRÊS CAIXAS, PAPEL, CANETA"),
    SP(9),

    CALLOUT("O item mais barato e mais decisivo do evento",
            "A ficha custa centavos e resolve o problema de um público cujo traço definidor é a vergonha "
            "de se expor. Levantar a mão numa roda é exatamente o que essa mulher evita a vida toda."),
    SP(9),

    CondPageBreak(72 * mm),
    KeepTogether([
        P("O que não fazer", "h2"),
        *UL(["<b>Coletar nomes para vender depois.</b> A mulher que acabou de falar inglês em público pela "
             "primeira vez está no pico. Três dias depois ela está no trabalho, com o boleto na frente. "
             "A mesma oferta tem dois preços psicológicos nesses dois momentos.",
             "<b>Transformar cada nome em uma call.</b> É meia hora por mulher para vender "
             "o que caberia em vinte minutos, e uma parte não comparece.",
             "<b>Filtrar por “quem sentir no coração”.</b> Isso seleciona as mais expressivas, não as mais "
             "prontas. Quem mais precisa de lapidação é justamente a que não levanta a mão."]),
        SP(7),
        CALLOUT("Se travar na hora",
                "Você lê o texto. Ler o pitch converte infinitamente mais do que não fazer o pitch. "
                "Estão previstos dois ensaios com a Continuum na semana anterior ao evento.", "ruby"),
    ]),

    PageBreak(),
]

# ============================================================ 14 ENCHER A SALA
BLOCKS += OPENER("14", "Encher a sala", "aquisição para o evento",
    "Uma sala, uma data, um raio de trinta quilômetros. Esse tamanho de objetivo não pede estrutura de "
    "campanha: pede a ferramenta simples usada com disciplina.")

BLOCKS += [
    P("Por que Turbinar, e não o Gerenciador", "h2"),
    P("Escala local, verba pequena, sem histórico de conta e sem pixel maduro. Quando o objetivo cabe em "
      "centenas de reais, o Gerenciador cobra complexidade sem devolver precisão. Ele entra quando houver "
      "volume e histórico — não agora.", "p"),

    TABLE(["Parâmetro", "Definição"],
          [[("Objetivo", "tdb"), "Mais visitas ao site, com o link da página do evento. "
            "Se a página atrasar: mais mensagens no Direct"],
           [("Geografia", "tdb"), "Florianópolis mais trinta quilômetros. Reforço em Campeche, "
            "Lagoa da Conceição, Centro e Norte da Ilha"],
           [("Perfil", "tdb"), "Mulheres, 28 a 55 anos"],
           [("Interesses", "tdb"), "Desenvolvimento pessoal · yoga e meditação · terapias integrativas · "
            "empreendedorismo feminino · viagem internacional · aprender inglês"],
           [("Verba", "tdb"), "R$ 20 a 30 por dia por criativo, de cinco a sete dias. "
            "Duas ondas de R$ 400 a 600. <b>Teto do ciclo: R$ 1.200</b>"],
           [("Onda 1", "tdb"), "Do anúncio da data até 29/11, com o preço de pré-venda prestes a subir. <b>Sem verba antes de a data existir</b>"],
           [("Onda 2", "tdb"), "Primeira quinzena de janeiro. Dezembro fica sem verba"],
           [("Regra de corte", "tdb"), "Criativo que gastar R$ 100 sem gerar uma inscrição, pausa. "
            "Criativo com custo por inscrição abaixo da média, dobra a verba"]],
          [30*mm, CW - 30*mm]),
    SP(9),

    DARKBOX("Escassez real, nunca fabricada",
            ["Preço que sobe em data marcada: R$ 147 até 29/11, R$ 197 a partir de 30/11. Data única. "
             "Nenhum número de vagas é dito antes de o local existir (revisão 4).",
             "Tudo que for dito precisa ser verdade verificável. Floripa é um público pequeno e conectado: "
             "um exagero circula, e circula rápido."]),

    PageBreak(),
]

# ============================================================ 14.2 MATRIZ DE CRIATIVOS
BLOCKS += [
    P("Os criativos", "h1"),
    P("Nove peças no lançamento: três ângulos por três formatos, com três ganchos por ângulo.", "h1sub"),
    Rule(), SP(4),

    TABLE(["Ângulo", "Função", "Ganchos — os primeiros três segundos"],
          [[("A1 · A trava não é o inglês", "tdb"), "Quebra de crença. O ângulo mais forte, e o que separa "
            "você de qualquer escola",
            "“Você não trava no inglês por falta de vocabulário.”<br/>"
            "“Tem mulher que sabe mais inglês do que consegue falar. Eu vejo isso toda semana.”<br/>"
            "“O problema não é o que falta na sua cabeça. É o que sobra no seu corpo.”"],
           [("A2 · O lugar que você nunca teve", "tdb"), "A dor literal delas: não ter com quem praticar",
            "“Você já estudou inglês. O que você nunca teve foi onde falar.”<br/>"
            "“Estudar sozinha te leva até aqui. Depois daqui, só tem gente.”<br/>"
            "“Não é mais aula que te falta.”"],
           [("A3 · Só entre mulheres", "tdb"), "A segurança da sala como benefício, com a história real do English Flow",
            "“Uma tarde. Só mulheres. Tudo em inglês.”<br/>"
            "“Numa sala só de mulheres, ninguém fala para impressionar.”<br/>"
            "“Se você entrar, vai falar. E ninguém ali vai te corrigir na frente dos outros.”"],
           [("A4 · Corpo antes de palavra", "tdm"), "Reserva. Fala direto ao público terapêutico",
            "“A comunicação começa no corpo, não na gramática.”<br/>"
            "“Antes de destravar a língua, destrava o diafragma.”"],
           [("A5 · Começar o ano falando", "tdm"), "Sazonal, dezembro e janeiro",
            "“Você fez a lista de metas de novo. Inglês está nela de novo.”"]],
          [CW*0.24, CW*0.26, CW*0.50]),
    SP(9),

    P("A estrutura de cada peça", "h2"),
    P("<b>Conflito primeiro, nunca contexto.</b> Uma ideia só. E o pivô que precisa caber em uma linha "
      "apontável: <b>E · Mas · Por isso</b>.", "p"),

    SCRIPTBOX(["Você entende série sem legenda. Lê e-mail em inglês. E quando alguém te pergunta algo na "
               "sua frente, some tudo.",
               "<b>[E]</b> Você estudou de verdade, o conhecimento está aí.",
               "<b>[Mas]</b> o corpo fecha antes da palavra sair, e nenhuma aula nova resolve isso.",
               "<b>[Por isso]</b> eu criei uma tarde inteira em Floripa, só entre mulheres, só em inglês, "
               "pra trabalhar exatamente essa parte. Pré-venda até 29/11. Link na bio."],
              "MODELO DE CORPO — ÂNGULO A1, VÍDEO"),
    SP(9),

    TWO(
        MINI("Formatos e quantidade",
             ["<b>4 vídeos curtos</b> com você falando. É o formato que mais converte para você: a sua voz "
              "e o seu rosto são o produto.",
              "<b>3 imagens estáticas</b> com a frase do gancho em tipografia limpa.",
              "<b>2 vídeos de bastidor</b> no espaço do evento, quando o local fechar."]),
        MINI("Chamadas para ação",
             ["Rotacionar, nunca repetir a mesma em peças simultâneas:",
              "“Garanta sua vaga” · “Quero estar nessa sala” · “Garantir na pré-venda”",
              "“Me conta: você trava mesmo sabendo?” — só em peça de comentário, para gerar sinal social."]),
    ),
    SP(9),

    CALLOUT("Fadiga e reposição",
            "Frequência acima de 3,5 com queda de 20% no clique: pausa a peça e repõe da fila. "
            "Manter três criativos prontos antes de cada onda."),

    PageBreak(),
]

# ============================================================ 14.3 FEED
BLOCKS += [
    P("O que sustenta entre um anúncio e outro", "h1"),
    P("O criativo capta. O feed decide se você é confiável quando a pessoa vai conferir o perfil.", "h1sub"),
    Rule(), SP(4),

    TABLE(["#", "Post", "Função"],
          [["1", ("O anúncio", "tdb"), "O que é a tarde e para quem, na pré-venda. Data e lugar, quando fecharem"],
           ["2", ("Por que só mulheres", "tdb"), "Com a história real do English Flow: <i>“os rapazes falavam tão "
            "bem que eu me senti inibida”</i>. A decisão vira posicionamento e desarma a pergunta antes dela vir"],
           ["3", ("O que acontece na tarde", "tdb"), "Os cinco blocos, sem entregar o conteúdo. Reduz o medo do "
            "desconhecido, que é a objeção número um de quem tem vergonha"],
           ["4", ("O espaço", "tdb"), "Fotos do local, quando fechar. Para esse público, o lugar é parte da oferta"],
           ["5", ("A sua história", "tdb"), "A atleta que aprendeu sozinha, o caderno, a própria voz gravada. "
            "Autoridade por trajetória, não por credencial"],
           ["6", ("Depoimento de aluna", "tdb"), "Com autorização. É a prova que o plano cobra desde a fase 1"],
           ["7", ("Objeção invertida", "tdb"), "“E se meu inglês não for bom o suficiente?” É a objeção que mais "
            "mata inscrição nesse público"],
           ["8", ("Últimas vagas reais", "tdb"), "Com o número verdadeiro. Na semana do evento"]],
          [8*mm, CW*0.28, CW - 8*mm - CW*0.28]),
    SP(9),

    P("Como dividir os três reels da semana", "h2"),
    P("O teto continua sendo três por semana. O que muda é para onde eles apontam.", "p"),

    TABLE(["Período", "Reels sobre o evento", "Reels sobre o produto principal"],
          [["Semanas 1 e 2 do motor", "1", "2"],
           ["Semanas 3 a 6", "2", "1"],
           [("Últimas duas semanas", "tdb"), ("3", "tdb"), "0"]],
          [CW*0.44, CW*0.28, CW*0.28], aligns=["L", "C", "C"]),

    PageBreak(),
]

# ============================================================ 15 CRONOGRAMA DO MOTOR 3
BLOCKS += OPENER("15", "O caminho até janeiro", "cronograma do terceiro motor · revisão 4",
    "O evento foi para janeiro de 2027, e o plano foi estendido até 31/01 para continuar dentro dele. "
    "A leitura do resultado, sete dias depois do evento, é o insumo do próximo plano.")

BLOCKS += [
    TABLE(["Lote", "Preço", "Vale"],
          [[("Pré-venda", "tdb"), ("R$ 147", "tdb"), "de 22/09 <b>até 29/11</b>"],
           [("Primeiro lote", "tdb"), ("R$ 197", "tdb"), "<b>a partir de 30/11</b>"],
           ["Lotes seguintes", "a decidir", "duração e quantidade definidas no anúncio da data"]],
          [CW*0.30, CW*0.20, CW*0.50]),
    SP(4),
    P("Os preços sobem por data, não por venda. Nenhum lote tem cota de vagas.", "p"),
    SP(6),
    TABLE(["Quando", "Marco", "Dono"],
          [[("até o anúncio", "tdb"), "Um dos três posts da semana sobre o evento. Venda para quem já te conhece. "
            "<b>Sem verba</b>", "Jéssica"],
           [("novembro", "tdb"), "Visita completa ao espaço alternativo. <b>Data e local fechados</b> quando a Casa "
            "Viva abrir as reservas de 2027", "Jéssica"],
           [("no anúncio", "tdb"), "Página com dia e local. Aviso primeiro a quem já comprou, depois post no feed", "as duas"],
           [("anúncio a 29/11", "tdb"), "<b>Onda 1 de Turbinar.</b> Dois dos três posts no evento. "
            "Última semana: <i>R$ 147 até 29/11</i>", "Jéssica"],
           [("30/11", "tdb"), "<b>Primeiro lote, R$ 197</b>", "Jéssica"],
           [("dezembro", "tdb"), "Sem verba. Dois dos três posts no evento. Ângulo: começar o ano falando", "Jéssica"],
           [("1ª quinzena jan.", "tdb"), "<b>Onda 2 de Turbinar.</b> Três dos três posts no evento", "Jéssica"],
           [("D-14 a D-2", "tdb"), "Dois ensaios do pitch. Fichas impressas. Condição de sala definida. "
            "Autorização de imagem no formulário", "as duas"],
           [("janeiro", "tdb"), "<b>Ladies Fluency Experience · primeira edição</b>", "Jéssica"],
           [("D+1 a 31/01", "tdb"), "<b>Posts do próprio evento:</b> fotos, bastidores, falas autorizadas e a turma "
            "de English Therapy que abriu na sala", "Jéssica"],
           [("D+7", "tdb"), "Leitura do resultado contra o cenário base", "Continuum"],
           [("31/01", "tdb"), "Revisão do ciclo e plano do próximo", "Continuum"]],
          [30*mm, CW - 30*mm - 20*mm, 20*mm]),
    SP(6),
    CALLOUT("A condição que fecha o ciclo",
            "Para a leitura de D+7 e a revisão caberem até 31/01, o evento precisa cair até 24/01. "
            "A sua preferência, 20/01, cabe.", "gold"),

    PageBreak(),

    P("As sete decisões que destravam tudo", "h1"),
    P("Enquanto estas sete linhas estiverem abertas, a construção não começa.", "h1sub"),
    Rule(), SP(4),

    TABLE(["#", "Decisão", "Trava o quê"],
          [["1", ("Data e local", "tdb"), "<b>Janeiro de 2027</b>, preferência 20/01. Fecham em novembro, quando a Casa Viva abrir as reservas"],
           ["2", ("O que os R$ 250 incluem, e o custo do yoga", "tdb"), "Preço do ingresso e margem"],
           ["3", ("Nome da mentoria", "tdb"), "RESOLVIDA: <b>English Therapy</b>"],
           ["4", ("Preço final da mentoria e do combo", "tdb"), "Página, pitch, projeção"],
           ["5", ("Você vende no palco, ou coleta nomes?", "tdb"), ("A receita inteira do evento", "tdb")],
           ["6", ("Nível mínimo", "tdb"), "RESOLVIDA: o evento filtra por comportamento; a turma vendida na sala é do intermediário em diante"],
           ["7", ("Quando começa a turma 1", "tdb"), "<b>Fevereiro de 2027</b>, com a conclusão da formação. Data exata a confirmar"]],
          [8*mm, CW*0.52, CW - 8*mm - CW*0.52]),
    SP(9),

    CALLOUT("A número 5 é a que separa caixa de boa lembrança",
            "É a que exige mais de você e a que mais vale ensaiar junto. Estão previstas duas rodadas na "
            "semana anterior ao evento.", "ruby"),
    SP(11),

    P("A meta do evento", "h2"),
    P("O cenário abaixo foi calculado para uma sala de quinze. Sem teto de vagas, ele é refeito quando o local definir a capacidade:", "p"),

    KPIROW([("R$ 10,7 mil", "conservador<br/>1 combo · 2 Circle"),
            ("R$ 21,7 mil", "cenário base<br/>2 combos · 1 mentoria · 3 Circle"),
            ("R$ 32,7 mil", "otimista<br/>3 combos · 2 mentorias · 4 Circle")]),
    SP(9),

    CALLOUT("Sobre o ingresso",
            "Uma sala de quinze deixaria cerca de R$ 1.880 em ingressos. Uma única venda de combo vale quase três "
            "vezes isso. O ingresso não existe para fazer dinheiro: existe para garantir que quem disse que "
            "vem, vem. Sala pela metade destrói o ambiente seguro, que é o seu mecanismo."),

    PageBreak(),
]

# ============================================================ 16 RISCOS NOVOS
BLOCKS += [
    P("O que pode dar errado no evento", "h1"),
    P("Seis riscos que entram com o terceiro motor, e a proteção de cada um.", "h1sub"),
    Rule(), SP(4),

    TABLE(["Risco", "Proteção"],
          [[("Sala com menos de dez pessoas", "tdb"),
            "O evento se paga com três presentes, então isso não é risco financeiro. "
            "<b>Piso de execução: oito confirmadas.</b> Abaixo disso, adiar três semanas em vez de fazer sala "
            "vazia — sala pela metade mata o ambiente seguro, que é o mecanismo"],
           [("O evento canibalizar as páginas", "tdb"),
            "A construção do motor 3 é adicional, não substituta. Se atrasar o WhatsApp corporativo ou os "
            "três reels por semana, o motor 3 recua"],
           [("Travar na hora de vender", "tdb"),
            "Dois ensaios na semana anterior, ficha física que dispensa levantar a mão, e uma oferta só "
            "falada. Se ainda assim travar, você lê o texto"],
           [("Nível heterogêneo travar iniciantes", "tdb"),
            "O filtro de entrada é de comportamento. O requisito de nível vale para a turma vendida na sala, "
            "e é dito no pitch, não descoberto depois"],
           [("Escassez fabricada queimar a confiança", "tdb"),
            "Só números verdadeiros: preço que sobe em data marcada, data única, nenhuma vaga contada antes de o local existir. "
            "Em Floripa, um exagero circula"],
           [("Promessa terapêutica na comunicação", "tdb"),
            "O evento trabalha vergonha e medo <b>na comunicação</b>. Não é terapia, não trata trauma, não "
            "diagnostica. A formação em saúde integrativa está em conclusão: comunicar como abordagem, "
            "nunca como certificação"]],
          [CW*0.30, CW*0.70]),
    SP(9),

    P("Onde vive a decisão de produto", "h2"),
    P("Este plano cita as ofertas como fato decidido e não as rediscute. Nome, promessa, entrega, preço e "
      "esteira vivem no estudo entregue junto com esta revisão. <b>É o que mantém o plano estável quando a "
      "decisão de produto for revisada</b> — um plano de execução que carrega dúvida de produto reabre a "
      "dúvida toda semana e paralisa a linha inteira.", "p"),

    PageBreak(),
]
