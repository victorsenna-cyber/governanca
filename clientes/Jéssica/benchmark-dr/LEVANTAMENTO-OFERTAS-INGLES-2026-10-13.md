# LEVANTAMENTO DE OFERTAS DE INGLÊS ESCALADAS (BRASIL) — conta Jéssica Oliveira

> **Data da coleta:** 13/10/2026 · **Método:** `METODO-DIRECT-RESPONSE.md` §2-bis (REGRA DA ESCALA) + `METODO-BENCHMARKING.md` §3 · **Molde:** `90-templates/benchmark-vsl/MATRIZ.md` (§0, referências e evidência)
> **Natureza:** levantamento de referências (Fase A do benchmarking). **Não é o benchmark completo:** não há contagem de blocos, métricas derivadas nem 15 dimensões, porque nenhuma VSL foi transcrita. Itens do gate do §9 não cumpridos estão declarados na seção 4.
> **Trava permanente:** nada de copy de terceiros aqui. Promessa descrita por mim, em uma linha; títulos de anúncio não são reproduzidos.
> **Grau de procedência:** tudo o que descreve o que o concorrente "acha" do público é `R`/`I`, nunca `D`.

---

## 1. O que foi buscado, onde, com quais termos

**Ordem de busca declarada** (METODO-DIRECT-RESPONSE §2-bis): (1) mesmo nicho, Brasil: **foi a única fonte usada para a tabela de estado**. (2) mesmo nicho, internacional e (3) adjacente: **não buscados** nesta rodada (ver seção 4). O nicho "inglês para brasileiros que travam na fala" tem referência no Brasil, então a ordem não precisou descer.

**Ferramentas e réguas**

| Ferramenta | Uso | Observação |
|---|---|---|
| `ads_library_search` (Meta MCP), país BR, `ACTIVE` | descobrir anunciantes e `page_id` | 5 buscas por palavra + 3 por `page_id`. Serviu só para **descobrir**. |
| Página pública da Biblioteca de Anúncios via Chrome headless (`?active_status=active&ad_type=all&country=BR&view_all_page_id=<id>`) | **régua**: total "~N resultados", datas de "Veiculação iniciada em", links de destino | Segue a nota de memória "ativo da API não é no ar". Em todas as páginas em que comparei (BeConfident 26/26, Pronúncia Online 23/23, Inglês em 7 dias 6/6, English Language Academy 295 vs ~300) **API e web bateram**; mesmo assim os números citados abaixo são os da web. |
| `WebFetch` | abrir páginas de destino | 8 destinos abertos; 3 não renderizaram o conteúdo (ver seção 4). |
| `WebSearch` | ofertas conhecidas por escala | 3 buscas; **não retornaram dado de faturamento nem ranking** (ver seção 4). |

**Termos buscados na Biblioteca (BR, ativos):** "travar no inglês" (~695 resultados estimados), "falar inglês sem travar" (~411), "conversação em inglês" (~3.934), "fluência inglês" (~4.278), "inglês destravar" (~1.938). **Não rodados por limite de chamadas:** "inglês para adultos", "inglês método", "aula de inglês online". As contagens por termo são estimativa da API e vêm inflacionadas (muitos são escolas locais); não foram usadas como evidência.

**Limite de leitura das datas:** a página pública carrega só parte dos anúncios (lazy load). **A data mais antiga citada é a mais antiga que apareceu, e a verdadeira pode ser anterior.** Para a régua dos 60 dias isso erra para baixo (a favor da cautela).

---

## 2. Tabela de referências

Legenda de estado (§2-bis): **ESCALADO** = 20+ ativos da mesma oferta, ou anúncio ativo há 60+ dias, ou histórico grande · **EM ESCALA** = 10–20 ativos com variações, ou mais antigo entre 30 e 60 dias · **TESTANDO** = poucos ativos, todos recentes · **NÃO VERIFICÁVEL**.
"Hoje" = 13/10/2026. Formato do anúncio (vídeo ou estático): **não verificado em nenhuma linha** (não abri os criativos).

| # | Anunciante | Evidência de escala (o que vi) | Estado | Classe da promessa | Formato da oferta e preço | Tipo de lead e destino | Arquitetura do funil | Link (página pública) |
|---:|---|---|---|---|---|---|---|---|
| 1 | **Fluency Academy** (página "Fluency TV Inglês") | **~360 ativos**; mais antigo visível 09/04/2026 (**~187 dias**). Dois sinais fortes. | ⭐ **Escalado** | começar a aprender inglês (generalista, não é destravar fala) | escola online de idiomas; matrículas por turma. **Preço não visto** | anúncio para página de matrícula da primeira turma (13 anúncios), minicurso (1), outro funil "2cap" (2); um com WhatsApp | **não aberta** (WebFetch não foi feito). Rotas: matrícula direta, minicurso | `facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&view_all_page_id=559509444210093` |
| 2 | **Teacher Poli** | **~370 ativos**; mais antigo visível 05/06/2026 (**~130 dias**); 22 dos anúncios com o mesmo destino | ⭐ **Escalado** | conversar em inglês + oferta promocional (desconto de mais de 50%) | oferta de desconto sobre curso próprio. **Preço não visto** | tráfego para link próprio que redireciona (encurtador, depois página de funil "Método APA BR Meta", versão de 22/09) | **não legível**: a página final carrega por JavaScript e o WebFetch devolveu só o título. Formato (VSL, quiz, texto) **não verificado** | `…view_all_page_id=238736745982689` |
| 3 | **Open English** | 32 ativos; mais antigo visível 22/07/2026 (**~83 dias**) | ⭐ **Escalado** (pelo critério de longevidade e volume) | inglês para o filho (público infantil, **fora do ICP da Jéssica**) | escola online. **Preço não visto** | não verificado | não aberta | `…view_all_page_id=415082161937315` |
| 4 | **inFlux** (inglês e espanhol) | 67 ativos; mais antigo visível 06/08/2026 (**~68 dias**) | ⭐ **Escalado** (critério de volume e longevidade; **oferta mista**: parte dos anúncios é para vestibular) | plano de estudos, material gratuito e atendimento | escola, captura por WhatsApp e material gratuito. **Preço não visto** | WhatsApp e página de materiais | não aberta | `…view_all_page_id=126879507361047` |
| 5 | **Teacher Ca** | 10 ativos; mais antigo visível 02/07/2026 (**~103 dias**) | ⭐ **Escalado só por longevidade, sinal fraco** (volume baixo) | dificuldade de se comunicar em inglês | não verificado. **Preço não visto** | não verificado | não aberta | `…view_all_page_id=273922173337072` |
| 6 | **English Language Academy** (marca de app "Wordletic") | **~300 ativos** (295 na API), em **português, espanhol, francês e italiano**; mais antigo visível 14/09/2026 (**~29 dias**); conta em USD | **Em escala** (volume de escalado, idade de em-escala; muitas peças são a mesma promessa traduzida) | **a mais próxima do ICP**: "entendo e não falo", destravar e falar com confiança, a culpa não é do aluno | app de aprendizado com hipnose e neurociência como método. **Preço não visto** (a página de entrada é quiz) | quiz de plano personalizado em páginas `/br/start-4`, `/es/start-10`, `/ar/start-10`, `/it/start-10` | quiz de entrada (gênero, teste curto, plano personalizado), sem VSL e sem checkout na página aberta. Prova declarada na página: "100 mil usuários" e "95% de sucesso" (sem fonte) e logos de instituições sem endosso ao produto | `…view_all_page_id=806838072521740` |
| 7 | **BeConfident** | **26 ativos**, 14 deles com a mesma promessa em variação; mais antigo visível 11/09/2026 (**~32 dias**); ângulos laterais para o profissional (entrevista, reunião, promoção) | **Em escala** | falar inglês rápido e sem travar; vertente profissional | **app + WhatsApp com mentores de IA**; plano anual **12 × R$ 59,90 ou R$ 598 à vista** (a página mostra "de R$ 1.194", que não fecha com as parcelas); cancelamento em 7 dias | anúncio abre página de lead com rastreio `meta-ads` e leva ao **teste grátis por WhatsApp** (3 passos, envio de áudio em inglês) e depois ao plano anual | teste grátis → plano anual. Prova (da própria empresa, não verificada): "200 mil alunos", 2,8 mil avaliações na App Store, rodada de investimento | `…view_all_page_id=117717437940218` |
| 8 | **Tia do Inglês** | 40 ativos; 20 deles para duas versões da mesma página; mais antigo visível 24/08/2026 (**~50 dias**) | **Em escala** (limite com escalado) | destravar o medo de falar ("mindset da fluência"), PNL, aprendizagem acelerada | **pré-lançamento "Black"**: lista de espera, abertura em 19/10 às 20h; pacote vitalício (plataforma de curso do básico ao avançado, mindset da fluência, inglês de negócios, imersões online, arenas de conversação, assistente de IA no WhatsApp). **Preço não informado** na página; bônus para as primeiras inscritas | anúncios de lista de espera e de **aulas gratuitas** | captura (nome, e-mail, WhatsApp) → evento de abertura. Sem VSL na página. **Sem prova** na página | `…view_all_page_id=1598333610413704` |
| 9 | **Beyond With John** | **~160 resultados** na web, mas só as datas de 08 a 12/10 carregaram (**idade não verificada**); 21 anúncios para a página de Black Friday e 5 para a página "vsl4" | **Em escala** (volume alto, idade desconhecida) | ser fluente em 6 meses; vocabulário da profissão; IA personalizada | curso autodidata gravado + mentorias semanais + comunidade + assistente de IA. **R$ 997 à vista ou 12 × R$ 99,70** (a soma das parcelas dá R$ 1.196; valor "somado" de R$ 10.800 como âncora). Garantia condicional de 90 dias e outra "incondicional" no FAQ, que não coincidem | anúncio → página de vendas | **página de texto longo** (apesar do nome "vsl4"), 4 vídeos de depoimento, método com nome próprio, ancoragem de valor, garantia, bônus em dinheiro condicionado | `…view_all_page_id=502232602977977` |
| 10 | **English With Nina** | 49 ativos; mais antigo visível 10/09/2026 (**~33 dias**) | **Em escala** (**nicho adjacente**: inglês + carreira global/trabalho remoto) | inglês para vaga remota no exterior | funil de quiz (idade, perfil) que entrega um guia; também aula gratuita e workshop ao vivo. **Preço não visto** | quiz (17 anúncios), página de captura (8), workshop ao vivo (3) | quiz → guia → workshop/live. Destino final do quiz **não visível** | `…view_all_page_id=114955542492912` |
| 11 | **Inglês em 7 dias** | **6 ativos**; mais antigo visível 28/09/2026 (**~15 dias**); mesma promessa nos 6 | **Testando** (sinal fraco) | **a dor idêntica à da Jéssica**: entende e trava na hora de falar | **imersão presencial** em Belo Horizonte: 7 encontros, 51 horas-aula (45 presenciais), 14 a 22/11. **Preço não aparece na página.** Garantia de devolução condicionada aos 2 primeiros dias; apostila e flashcards. Requisito: inglês básico (A2) | anúncio → página de texto com depoimentos; cadastro com avaliação de nível por videochamada | página de texto, sem VSL, **sem produto de entrada mais barato**. Mecanismo: técnicas conscientes + **PNL contra o medo de errar**. Prova: nota 5,0 no Google (186 avaliações), "mais de 4.500 alunos", "13 anos de método", 6 vídeos de depoimento. Formulário de inscrição exibia erro no momento da leitura | `…view_all_page_id=1352670094749865` |
| 12 | **Pronúncia Online** | 23 ativos; mais antigo visível 06/10/2026 (**~7 dias**); conta em USD; todos com o mesmo texto de botão | **Testando** | pronúncia (recorte estreito) | página de venda quase vazia (botão e rodapé), treino de pronúncia com professora nativa. **Preço não visto**. Produto: método com sigla própria e plano de 30 dias (inferido pelo endereço) | anúncio → página de venda curta | **incompleta/ilegível**: sem preço, sem prova, mecanismo só nomeado | `…view_all_page_id=109035374101241` |
| 13 | **Mundo Fluente** | 6 ativos; mais antigo visível 10/09/2026 (~33 dias) | **Testando** | repertório de frases para falar | **produto de entrada de baixíssimo valor: "1.000 frases" por R$ 19,90** (no título do anúncio) | não verificado | não aberta | `…view_all_page_id=1321560241040060` |
| 14 | **Goal Fluent** | 2 ativos; ambos de 13/10/2026 | **Testando** | inglês do futebol, sem travar (nicho específico) | produto de entrada **R$ 47** (no título do anúncio) | não verificado | não aberta | `…view_all_page_id=1279670558574068` |
| 15 | **Luana Englishh** | 5 ativos; de 12 e 13/10/2026 | **Testando** | descobrir o nível | **quiz de teste de nível** como isca | quiz | não aberta | `…view_all_page_id=718676204672926` |
| 16 | **Nathalia Costa Cursos** | 9 ativos; mais antigo visível 06/10/2026 | **Testando** | aprender inglês com personalidade | escola autoral. **Preço não visto** | não verificado | não aberta | `…view_all_page_id=750369694816661` |
| 17 | **Infoprodutos pequenos de apoio**: Lena (livros bilíngues), Auyne Tanaka (páginas de gramática), Multipacks (isca por comentário), Native Speaking Language (app, conta em VND) | 2 a 18 ativos, todos com início entre 09 e 13/10/2026 | **Testando** | material de estudo e app de baixo valor | pacotes baratos; **preços não vistos** | não verificado | não abertas | ver `page_id` na API: 431484533371822 · 497832083406368 · 1150388974819071 · 230159123517190 |
| 18 | **Escolas locais com captura por WhatsApp** (Teacher Doug FAVO English, IMV, PH English Classes, Daniel Linhares e outras) | 7 a 9 ativos cada; um deles (Teacher Doug) tem anúncio visível desde 27/02/2025 (**~19 meses**) | **Não verificável como referência de DR**: longevidade existe, mas é captação local de aluno por conversa, sem funil replicável | "me chama aqui", ancorada na localidade | aula experimental e matrícula presencial/local | WhatsApp | conversa de venda, invisível na Biblioteca | `page_id`: 386068674592908 · 690949294109760 · 895425780314144 · 506896902501237 |
| 19 | **Cursos de conversação em marketplace** (Destrave Suas Primeiras Conversas em Inglês, Talk2U, Business English Hot Seat, Inglês AO VIVO em 12 Meses, entre outros) | só **existência na vitrine do marketplace**; Talk2U com nota 3,7 em 21 avaliações. **Nenhum dado de venda ou de veiculação** | **Não verificável** | travar na conversa; conversação ao vivo | cursos gravados e turmas ao vivo, de iniciante ao avançado. **Preços não vistos** | — | — | WebSearch (vitrine do marketplace) |

**Contagem por estado: 5 escalado · 5 em escala · 7 testando · 2 não verificável (19 linhas).**
As linhas 17 e 18 reúnem mais de um anunciante cada; contadas como uma linha cada.

⚠️ **Escalado não significa escalado em *destravar a fala***. As quatro referências do estado ESCALADO (Fluency, Teacher Poli, Open English, inFlux) vendem **escola de inglês generalista** em volume de matrícula. As referências **na classe de promessa da Jéssica** (entende e trava, destravar, falar com confiança) estão em **EM ESCALA** (English Language Academy, BeConfident, Tia do Inglês) ou **TESTANDO** (Inglês em 7 dias). Pelo §2-bis, **EM ESCALA entra como segunda referência, nunca sozinha**; a base de promessa precisa vir de linha escalada, e a classe "destravar" ainda não tem uma. Esta é a conclusão mais importante do levantamento e precisa de decisão do Victor (ver seção 6).

---

## 3. Padrões que se repetem em 3 ou mais referências

Só padrão. Nenhum texto copiado.

1. **Promessa na classe "falar sem travar" / "destravar".** Presente em English Language Academy (#6), BeConfident (#7), Inglês em 7 dias (#11), Tia do Inglês (#8, com "mindset da fluência"), Teacher Ca (#5), Beyond With John (#9, fluência com prazo de 6 meses), Teacher Poli (#2, "converse"). O enquadre mais forte entre as de volume alto é **tirar a culpa do aluno** e nomear o bloqueio como algo fora da falta de capacidade. Prova de que o recorte da Jéssica **não é espaço vazio**: está ocupado por pelo menos quatro anunciantes.
2. **Mecanismo explicado por mente, emoção ou neurociência.** PNL (Inglês em 7 dias, Tia do Inglês), hipnose + neurociência (English Language Academy), neurociência e "neuro" (Beyond With John). Quatro referências. **A Jéssica difere ao trabalhar corpo, emoção e presença** (METODO-EMOTIONAL-SPEAKING); o mecanismo e o apelido são onde ela se diferencia (§2-bis), mas **o termo genérico "emocional/mente" já está tomado**; o diferencial precisa estar no corpo e na presença, que não apareceu em nenhuma das referências lidas.
3. **Entrada por um passo gratuito antes da oferta: teste, quiz, aula ou conversa.** BeConfident (teste grátis por WhatsApp com áudio), English Language Academy (quiz de plano personalizado), English With Nina (quiz + aula gratuita + workshop), Luana Englishh (quiz de nível), Tia do Inglês (aulas gratuitas + lista de espera), Fluency (minicurso). **Seis referências.** Nenhuma das que li usa VSL na entrada; a Beyond With John usa página de texto longo, apesar do nome do arquivo.
4. **Volume de criativos com variação sobre a mesma promessa, inclusive por idioma e por ângulo profissional.** English Language Academy (4 idiomas), BeConfident (carreira, entrevista, reunião, promoção), Fluency e Teacher Poli (dezenas ao mesmo destino). É a "lateralização" do `METODO-LATERALIZACAO-DE-CRIATIVOS`.
5. **IA como componente do produto.** BeConfident (mentor de IA), Beyond With John (assistente de IA), Tia do Inglês (assistente no WhatsApp), Wordletic/English Language Academy (app). Quatro. **Para a Jéssica isso pode ser contraste**, pois o método dela é presença humana; hipótese minha, não dado.
6. **Garantia curta ou condicional e ancoragem de valor.** BeConfident (cancelamento em 7 dias), Beyond With John (90 dias condicional + valor somado de R$ 10.800), Inglês em 7 dias (devolução condicionada aos 2 primeiros dias). Três.

**Faixa de preço de entrada observada (só o que apareceu escrito, nenhuma venda verificada):**

| Degrau | Valor | Quem | Leitura |
|---|---:|---|---|
| Isca de baixíssimo valor | R$ 19,90 a R$ 47 | Mundo Fluente, Goal Fluent | **ambos em TESTANDO**; não servem de base |
| Assinatura de app | R$ 59,90 por mês (R$ 598 à vista no ano) | BeConfident | em escala |
| Curso autodidata + mentoria | R$ 997 à vista ou 12 × R$ 99,70 | Beyond With John | em escala (idade desconhecida) |
| Imersão presencial | não visto | Inglês em 7 dias | testando |

---

## 4. O que NÃO foi possível verificar, e por quê

| Item | Motivo |
|---|---|
| **Formato do anúncio (vídeo ou estático)** em todas as linhas | não abri os criativos (`ad_snapshot_url`) por limite de chamadas |
| **Preço** de Fluency, Teacher Poli, Open English, inFlux, English Language Academy, Tia do Inglês, Pronúncia Online, Inglês em 7 dias | a página não exibiu o valor, ou a página não foi aberta, ou é checkout/matrícula atrás de formulário |
| **Arquitetura de Fluency** | página de matrícula **não aberta** (limite de chamadas) |
| **Arquitetura de Teacher Poli** | o link encadeia dois redirecionamentos e termina numa página de funil que carrega por JavaScript; o `WebFetch` devolveu **só o título** ("Método APA BR Meta | Teacher Poli - 22.09"). Se é VSL, quiz ou texto: **não sei** |
| **Destino final do quiz de English With Nina** | só a primeira pergunta é visível |
| **Idade real** de Beyond With John, English Language Academy, Fluency, Teacher Poli | a página pública carrega só parte dos anúncios; a data citada é a mais antiga **que apareceu**, a real pode ser anterior. Em Beyond With John carregaram só datas de 08 a 12/10 |
| **Histórico de anúncios inativos** | no Brasil a Biblioteca só mostra os ativos (§2-bis); **não consultei a União Europeia** |
| **Faturamento, ranking e volume público** (evidência alternativa do §2-bis) | `WebSearch` retornou nada útil: sem dado sobre Fluency Academy além de perfil institucional (criada em 2017, "mais de 400 mil alunos" segundo matéria de agência, fonte secundária); **nada** sobre Teacher Poli; ranking da Hotmart de inglês **não encontrado**. Fonte fraca de IA (accio) descartada |
| **Fonte de confiança da casa (Filemon) sobre ofertas de inglês** | o repositório só registra um caso de passagem (seção 5); **não há lista de ofertas de inglês validadas por ele** |
| **Nichos internacional e adjacente** (ordem de busca passos 2 e 3) | não buscados; o §2-bis pede declarar. Uma busca internacional de "fear of speaking English" / "speak confidently" é o próximo passo natural |
| **Termos "inglês para adultos", "inglês método", "aula de inglês online"** | não rodados |
| **Playwright MCP** | falhou ao conectar na sessão; usei Chrome headless direto (já documentado na memória) |
| **Itens do gate do `METODO-BENCHMARKING.md` §9 não cumpridos:** contagem de blocos, métricas derivadas, sequência de elementos, 15 dimensões, degrau de sofisticação, espaço vazio | nenhuma VSL foi transcrita; **este arquivo é a Fase A**, não o benchmark |
| **Dimensões 9 a 12 (Bloco B, público)** | não apuradas |

---

## 5. Achados do repositório (PASSO 2)

Grep por `inglês | ingles | fluência | fluencia | English` (sem diferenciar maiúsculas):

| Pasta | Resultado |
|---|---|
| `30-comercial/swipe-file/` | **0 ocorrências.** Não há referência de inglês no swipe file. |
| `100-métodos/` | **0 ocorrências.** |
| `70-metodologias-chave/` | **0 ocorrências.** |
| `900-criação-implementação-victor/` | só duas fontes relevantes, ambas da destilação de criativos do Filemon: `criativos/DESTILACAO-CRIATIVOS-FILEMON-2026-10-08.md` **C-33** (variação por público, com o "caso do cliente de inglês": um gancho para estudantes, outro para cristãos, outro para empresários) e **C-38** (modelar anúncio de outro nicho: anúncio de milhas adaptado para inglês, "escalando", L196 a L198). A mesma destilação registra, na linha ~323, que **"os casos (inglês…) são relatados de memória"**: grau `R`, sem nome de anunciante e sem número. O mesmo conteúdo aparece em `criativos/transcript-criativos-tiago-filemon.md` e `VSL/transcript-criativos-tiago-filemon.md`. Os demais ~30 arquivos com ocorrência são da pasta `agency-agents-main` (agentes genéricos, i18n, tradutor): ruído. |
| `clientes/` (fora de `Jéssica/`) | menções incidentais ("inglês", "English") em transcrições e registros de Débora Delgado, PRANA KA, Paola Lopes Rosa, Patricck Garbim, Thomas Ravely, Renata Betta e Bárbara Rosa, e em `Débora Delgado/12 - Direct Response/vsl/2026-10-02/A4-BLOCO-2-CICLO-2.md`. **Não abri esses arquivos**: nenhum tem nome sugestivo de benchmark de inglês e a busca é por palavra, não por conteúdo. **Nenhuma conta de outro cliente atua no nicho de inglês.** |
| `clientes/Jéssica/` (existente, só listado, **não lido**) | `OFERTA.md`, `ICP.md`, `PROMESSA.md`, `NARRATIVA.md`, `METODO-EMOTIONAL-SPEAKING.md`, `ANALISE-PAGINA-INGLES-30-07.md`, `ARQUEOLOGIA-DE-LINGUAGEM.md`, `MAPA-DE-COMUNICACAO-JESSICA.md`, `vivencia-presencial/ESTRUTURA-DE-OFERTA-LADIES-FLUENCY-EXPERIENCE.md`, `pagina-1-ingles-para-brasileiros/`; transcrição da call de 22/09 em `clientes/_transcripts/` (21 menções). **O próximo passo é cruzar este levantamento com `OFERTA.md` e `PROMESSA.md`.** |

**Conclusão do passo 2:** o repositório **não tinha nenhuma referência escalada de inglês**. Este arquivo é o primeiro registro. A regra do §11.5 pede que referência aprovada alimente `30-comercial/swipe-file/mercado/`; **não escrevi lá** (pedido era um único arquivo).

---

## 6. Leitura para a decisão (alçada do Victor)

Não é o veredito do benchmark; é o que o levantamento permite afirmar.

1. **Há demanda e há veiculação pesada no nicho geral** (Fluency, Teacher Poli, Open English, inFlux em ESCALADO). Isso sustenta "inglês no Brasil paga mídia".
2. **A classe específica "destravar a fala" não tem uma referência ESCALADA com evidência que eu consiga sustentar.** A mais forte é a **English Language Academy** (~300 ativos em quatro idiomas, mas ~29 dias visíveis, funil de quiz para app) e a **BeConfident** (26 ativos, 32 dias, teste grátis por WhatsApp). Ambas EM ESCALA. Pelo §2-bis a promessa "destravar" só entra como **segunda referência**, e a base viria de uma referência escalada ainda por achar (escola generalista = promessa diferente).
3. **O mecanismo "mente/emoção" não é espaço vazio** (PNL, hipnose, neurociência). O que não apareceu em nenhuma página lida: **corpo e presença**. Isso é hipótese de diferencial no mecanismo, onde o §2-bis permite diferenciar, **e não** na estrutura.
4. **A referência de formato mais parecida com a vivência presencial da Jéssica** é a imersão do **Inglês em 7 dias** (#11): mesma dor, PNL, presencial, garantia condicional. Está em TESTANDO, só serve de **leitura**, nunca de base.
5. **Padrão de arquitetura dominante nas referências com volume: passo gratuito (quiz, teste, aula) antes da oferta**, e não VSL. Se a casa quer VSL para a Jéssica, **nenhuma referência de inglês aberta aqui a sustenta como arquitetura escalada**; seria teste declarado.

**Próximos passos que fecham o gate (todos fora do escopo deste pedido):** (a) abrir os criativos de English Language Academy, BeConfident e Teacher Poli para classificar o formato e o gancho; (b) renderizar o funil de Teacher Poli e a matrícula da Fluency com navegador; (c) buscar internacional ("speak confidently", medo de falar inglês) como segunda fonte; (d) pedir ao Filemon se há oferta de inglês que ele acompanhe (fonte de confiança da casa); (e) rodar os três termos faltantes.
