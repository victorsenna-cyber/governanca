# PLANO DE ALTERAÇÕES — PRANA KA · 10/08/2026

> **Tipo:** plano de execução e pauta de reunião
> **Origem:** `REGISTRO-INTERACAO-2026-08-10.md` (janela 06/08 a 10/08/2026)
> **Reunião:** 11/08/2026, 15h00 — **janela útil ≈ 1h30** (ela tem compromisso às 16h35)
> **Regra-mãe aplicada:** resultado antes de construção (`../../CLAUDE.md` §9). Nenhum item abaixo é construído sem estar declarado qual dinheiro gera, em quantos dias e em quantos passos até o pagamento.

---

> **Correção de fato aplicada em 10/08/2026, após a 1ª redação (ordem humana de Victor):**
> **Masterclass e Mentoria estão PUBLICADAS.** Curso e página-mãe, não. **Todas as páginas estão criadas; o que resta são modificações simples, rápidas de fazer e de subir em produção.**
> Isto rebaixa o esforço de tudo abaixo — e **eleva a urgência de duas coisas**, porque correção em página no ar não é a mesma coisa que ajuste em página local. Ver §2.1 e §2.3.

---

## 1. Diagnóstico em uma página

**Problema central:** a conta trocou de fase sem que a estrutura trocasse junto. Deixou de ser um problema de **prazo** (publicar antes de 08/08) e virou um problema de **modelo** — a cliente está reescrevendo motor de vendas, ato de conversão e natureza da página-mãe ao mesmo tempo, e as quatro páginas foram construídas para o modelo anterior.

**Gargalo dominante — e agora é o único.** Com a construção concluída (4/4), duas páginas no ar e deploy rápido, **a capacidade sai da lista de causas**. Sobra uma coisa só: **a Mentoria continua sem preço desde 27/07/2026** — quinta janela consecutiva — e agora ganhou um segundo caminho até o dinheiro (Visão Uterina a R$ 300) que também não está decidido.

**A forma mais concreta de dizer isso: a página da Mentoria está no ar, recebendo visita, e não consegue receber dinheiro** — `offerIsReady = false`, 9 campos em `null`. Não é bug: é o fail-closed funcionando como projetado, esperando um número que não chega há 14 dias. **Não estamos atrasados por falta de mão de obra. Estamos parados por falta de uma decisão que só ela toma.**

**Maior alavanca:** ela disse duas vezes que a narrativa não pegou (*"algo ainda nao pegou mesmo…"*, 06/08 · *"o que eu questiono é se eu puxei na linha certa de narrativa"*, 10/08) e no áudio de 15h54 **descreveu o próprio funil pela primeira vez**: música → círculos das vozes da deusa → mentoria, com DJ sets e espetáculos como alcance. A alavanca é entrar como quem resolve narrativa e arquitetura, não como quem entrega HTML — e a reunião de amanhã é a porta.

**O que NÃO será feito agora:**
- não construir o hub/escola com música, YouTube, Spotify e espetáculos antes de decisão de escopo registrada;
- não "codificar" as seis frentes (símbolo por linha de trabalho) dentro do pacote vigente;
- não readequar a página da Mentoria enquanto preço e plataforma estiverem abertos;
- não publicar nada antes da nova data estar escrita e a inscrita de 07/08 estar avisada;
- não retomar Pixel e planilha de leads nesta semana.

---

## 2. O que muda em cada página

### 2.1 Masterclass Portal das Felinas — `04 - web design/v2/`

**Estado: NO AR, com checkout PagTrust ativo, anunciando uma data que não existe mais.** Já existe pelo menos 1 inscrita paga (compra de 07/08/2026, sexta à noite).

> **🔴 Isto é P0 de hoje, não item de fila.** Página local com data velha é rascunho. **Página no ar com data velha, checkout ligado e divulgação apontando para ela é informação errada circulando — e dá para comprar acreditando nela.** A correção é de minutos; o que não pode é esperar a reunião.
>
> **O horário ainda estar aberto (P-MC-08) não adia nada.** Publicar "quarta, 19 de agosto" com o horário atual já é mais verdadeiro que "sábado, 8 de agosto". O horário se ajusta amanhã em um campo só, depois de A-10.

**Não é troca de número — é troca de dia da semana, de data e possivelmente de âncora narrativa.**

| # | Alteração | Onde | Ocorrências | Gate |
|---|---|---|---|---|
| **A-01** | `8/8` → nova data | `index.html`: title, 2 meta, header, hero, CTA fixo mobile, payload de checkout | **7** | data escrita |
| **A-02** | `8 de agosto` → nova data por extenso | eyebrow do hero, bloco de oferta, seção de detalhe, FAQ | **5** | data escrita |
| **A-03** | **`Sábado` → `Quarta-feira`** | 3 pontos, sempre colado à data | **3** | **19/08/2026 é quarta-feira — conferido** |
| **A-04** | `9h30` → horário confirmado | 5 pontos | **5** | **P-MC-08 continua aberta e agora vale para dia útil** |
| **A-05** | `Portal do Leão` na eyebrow | 1 ponto | **1** | ver A-07 |
| **A-06** | Payload de checkout `produto: "Portal das Felinas 8/8"` | `index.html` linha ~2419 | 1 | muda com A-01 |
| **A-07** | **Reancoragem narrativa: o Lionsgate é 08/08 e terá passado** | copy de hero, oferta e FAQ | — | **decisão da Prana na reunião** |
| **A-08** | Integrar a bio autorizada em 31/07/2026 (P-MC-09) | bloco de autoridade | 1 | "psicóloga" segue sob gate de CRP (DEC-2026-08-03-003) |
| **A-09** | Mencionar o que o card prometeu e a página omite: ritual e preparação para os eclipses (P-MC-10) | copy da entrega | — | só depois de A-07 |

**O ponto que ninguém apontou (A-07).** O carrossel de 11 cards publicado em 02/08 é inteiro construído sobre o portal 8/8: Portal de Leão, Sirius, Lionsgate, *"atravessar o Lionsgate em plena potência"*. Com o evento no dia 19, **a promessa central perde o objeto**. Isso não é detalhe de copy: é a diferença entre um evento que acontece *dentro* de um portal e um evento que acontece *depois* dele. Duas saídas, e ela decide qual:

1. **Reancorar nos eclipses de agosto** — que ela mesma já prometeu no card ("preparando também para os eclipses que ocorrerão em agosto") e que seguem à frente da nova data. Datas exatas: ela é a autoridade, confirmar na reunião.
2. **Reposicionar como colheita** — o Lionsgate abriu, a masterclass encarna o que foi aberto. Mantém a linhagem narrativa do carrossel sem fingir que o portal ainda está aberto.

A opção 1 preserva a promessa literal já publicada. A opção 2 preserva o investimento de 11 cards. **Não fazer nada é a única saída ruim**, e é a saída padrão se a reunião não tocar no assunto.

**Correção estrutural a instituir junto (A-10):** a data está escrita à mão em 15 pontos do HTML. Ela já mudou a data uma vez sem nos consultar e pode mudar de novo. **Extrair data, dia da semana e horário para um único objeto de configuração**, como já foi feito no Curso e na Mentoria. Custo: baixo. Evita a próxima rodada de 15 edições manuais e o risco de sobrar um "sábado" perdido numa FAQ.

---

### 2.2 Curso Despertar do Prazer Sagrado — `04 - web design/curso/`

**Estado:** construído em 04/08, validado (Lighthouse 100/100/100/100), `checkoutUrl: ""` e CTA fail-closed. **Falta só o checkout** — é literalmente o único item.

**Pedido dela (10/08, 15h49):** *"precisa ter um checkout? não da para enviar para um link numa conversa no whats comigo? dai as pessoas que se interessarem me chamam. dai eu crio via infinitepay"*

**Diagnóstico: ela está confundindo duas coisas diferentes.** O que ela quer evitar é **plataforma e taxa** — a InfinitePay recebe integral, e isso é preferência legítima dela, registrada desde 31/07. O que ela propôs remover é **o caminho automático**. São coisas separadas: um link de pagamento InfinitePay **já é um checkout** e pode ir direto no botão, sem conversa no meio.

**Por que a conversa no meio não deve entrar, no critério dela mesma:**

| Critério | Botão com link InfinitePay | Conversa no WhatsApp |
|---|---|---|
| Recebimento integral | ✅ igual | ✅ igual |
| Custo por venda em **hora dela** | zero | 1 conversa por interessada, com resposta manual e criação de link |
| Vende de madrugada, no fim de semana, na semana lunar | ✅ | ❌ só quando ela responde |
| Perda entre intenção e pagamento | 1 passo | 3+ passos, com janela para desistir |
| Alinhamento com "tornar mais rentável cada hora minha" (06/08, 09h20) | ✅ | ❌ contradiz |

**R$ 97 é ticket de impulso.** Impulso não sobrevive a "me chama no direct". A conversa é o formato certo para a Mentoria e para a Visão Uterina — ticket alto, decisão que exige presença. Para o Curso, é o formato que consome a hora que ela declarou querer preservar.

**Recomendação fechada (não pergunta):** botão → link de pagamento InfinitePay → página de obrigado. Ela mantém a plataforma que prefere, recebe integral, e a página trabalha sem ela. **O que precisamos dela é uma coisa só: o link.** Já pedido em 31/07/2026, 23h36, sem retorno há 10 dias.

| # | Alteração | Gate |
|---|---|---|
| **C-01** | preencher `checkoutUrl` em `js/main.js` | link InfinitePay da Prana |
| **C-02** | página de obrigado simples para mensuração | depois de C-01 |
| **C-03** | teste ponta a ponta com compra real de R$ 1 ou modo teste | antes de publicar |
| **C-04** | GATE-01 a GATE-06 (fatos comerciais do Curso) | permanecem abertos |

---

### 2.3 Mentoria O Templo Dourado — `04 - web design/mentoria/`

**Estado: NO AR e fail-closed.** `offerIsReady = false` com os **9 campos obrigatórios de `OFFER_CONFIG` em `null`** — verificado por leitura do `script.js` em 10/08/2026. **A página existe, recebe visita e não converte por construção. É o P0 real da conta e está parada há 14 dias.**

> **Use isto na reunião, literalmente.** Não é "precisamos do preço para construir a página". É: **"a sua página de mentoria está no ar. Ela funciona. A única coisa que falta para ela receber dinheiro é um número."** A distância entre a Mentoria e a primeira venda é preencher 9 campos e subir — trabalho de minutos, esperando uma decisão de 14 dias.

**Fato novo que muda a arquitetura (06/08, 09h20):** a Academia Soph sugeriu **Visão Uterina paga a R$ 300, com pitch no fim da própria sessão e os R$ 300 abatidos se a pessoa entrar na Mentoria.** Se isso for adotado, o **ato de conversão da Mentoria muda de compra direta para agendamento** — e isso contraria frontalmente **DEC-2026-07-24-001**, que tirou a Visão Uterina do fluxo principal.

**Correção de entendimento nosso:** vínhamos tratando a Visão Uterina como oferta paralela e risco de canibalização (P-XX-01). **Não é.** Ela é a etapa de pesquisa/ICP que a Prana já fazia de graça — o nome que ela deu à sessão de diagnóstico. O risco real não é competir com a Mentoria: é a Mentoria passar a depender de uma sessão 1-a-1 que consome uma hora dela por prospect.

**Nossa posição para a reunião — não é "sim" nem "não", é "e":**

> A Visão Uterina paga resolve o problema certo (parar de dar hora de graça) e cria outro se virar o único topo: **1 hora por prospect não escala e não sobrevive a uma semana lunar.** O desenho que atende aos dois lados é a **Masterclass alimentando as Visões Uterinas**, não substituindo-as: a aula qualifica muitas de uma vez, e quem se move vai para a sessão paga — que já vem pré-aquecida e converte melhor. Ela mantém a venda humanizada 1-a-1 que ela sabe fazer ("capto coisas do campo dela e uso até palavras que ela usa"), e para de fazer essa sessão com quem ainda não decidiu nada.

**Isso responde à pergunta dela de 06/08 às 09h22** — que continua sem resposta há 4 dias, e que outra consultoria já respondeu.

| # | Alteração | Depende de |
|---|---|---|
| **M-01** | **preço da Mentoria** (P-ME-01) | decisão dela · **P0** |
| **M-02** | **plataforma de checkout** — PagTrust × InfinitePay (P-ME-05) | decisão dela · **P0** |
| **M-03** | definir o ato de conversão: compra direta × agendamento de Visão Uterina | decisão dela, na reunião |
| **M-04** | se M-03 = agendamento: refazer CTA, dobra final e `OFFER_CONFIG`; a página deixa de ser página de compra e vira página de aplicação | M-03 |
| **M-05** | ancorar R$ 300 como crédito, não como desconto — crédito abatível é ativo, desconto é perda de valor percebido | M-01 |
| **M-06** | readequação ao modelo de assinatura contínua (pendente desde 27/07) | M-01, M-02 |
| **M-07** | fluxo pós-pagamento (P-ME-07) | Prana + Nakielly |

**Régua financeira:** enquanto M-01 estiver aberto, **a página de maior ticket do pacote não gera nenhum dinheiro**. Todo o resto do plano é secundário a isto.

---

### 2.4 Página-mãe The Golden Temple — `04 - web design/the-golden-temple-v2/`

**Estado:** V2 corrigida em 04/08, copy V3 escrita e não implementada, `/curso` responde 404, não publicada.

**Pedido dela (áudio de 15h54):** transformar a página numa **casa completa** — YouTube, Instagram, Spotify, fotos, "o link das coisas que eu fiz", a produção musical, os DJ sets, os círculos das vozes da deusa, os espetáculos "em breve", tudo "organizado e linkado".

**Verificação técnica:** a V2 tem **zero links externos** hoje. Não há YouTube, Instagram, Spotify ou qualquer social. O pedido é construção nova, não ajuste.

**Duas coisas no mesmo pedido, e elas precisam ser separadas:**

| Parte | Natureza | Decisão |
|---|---|---|
| **Confirmação da arquitetura** — "o templo dourado todo ele como escola e o templo dourado mentoria pagina de lançamento" | **já é o que existe construído** | ✅ mostrar na reunião como acordo materializado |
| **Hub de 6 frentes** — música, singles, DJ sets, círculos, espetáculos, links sociais, galeria | **ampliação de escopo** sobre DEC-2026-07-07-001 | 🟡 decisão comercial separada |
| **"Codificar" cada frente** — símbolo e código próprio por linha de trabalho | **arquitetura de marca**, disciplina distinta de web design | 🟡 decisão comercial separada |

**Como conduzir, sem dizer "fora do escopo" como primeira frase.** A visão dela é boa e o áudio prova que ela chegou num nível de clareza novo — inclusive descreveu o próprio funil (música → círculos → mentoria) pela primeira vez. O movimento certo é: **reconhecer a visão · mostrar que a página-mãe já foi construída para ser esse portal · nomear o que cabe no pacote e o que é novo · e propor a ordem.**

**Ordem proposta:** o hub é o ativo que a operação inteira vai usar por anos — **e é exatamente por isso que ele não deve ser feito antes de a Mentoria vender.** Hub é via de audiência; Mentoria é via de caixa. Fazer o hub primeiro é construir a vitrine da escola antes de a escola ter matrícula paga.

| # | Alteração | Escopo |
|---|---|---|
| **T-01** | fazer `/curso` responder 200 (P-PM-06) | pacote |
| **T-02** | implementar a copy V3 já escrita | pacote |
| **T-03** | regressão visual em origem HTTP | pacote |
| **T-04** | links para Instagram, YouTube e Spotify | **ampliação leve** — decidir se entra como cortesia de fechamento |
| **T-05** | seção de música/singles com player | ampliação |
| **T-06** | galeria de fotos e portfólio de trabalhos | ampliação |
| **T-07** | DJ sets, espetáculos, círculos das vozes da deusa como frentes navegáveis | ampliação |
| **T-08** | sistema de códigos/símbolos por frente | ampliação — projeto próprio |

---

## 3. Pauta da reunião — 11/08/2026, 15h00

**Restrição:** ~1h30 de janela real. Sete assuntos não cabem em conversa aberta. Cabem em pauta com decisão pré-formulada — que é, aliás, o único formato ao qual ela responde com decisão (padrão registrado em 03/08 e reconfirmado em 10/08).

**Antes da reunião, duas coisas:**

1. **Corrigir a data na página no ar** (§2.1). Chegar na reunião com isso feito muda a conversa: mostramos uma página já certa e pedimos as três informações que faltam, em vez de listar pendências.
2. **Perguntar sobre a mulher que comprou na sexta à noite** — ela foi avisada? *É a única coisa nesta pauta que envolve alguém que já pagou.*

**A frase que abre a reunião** (e que só é dizível por causa da correção de capacidade): *"suas duas páginas estão no ar. A da mentoria funciona e está esperando uma coisa só para conseguir receber: um número."*

| # | Bloco | Tempo | Saída obrigatória |
|---:|---|---:|---|
| 1 | **Data** — 19 de agosto, quarta-feira. Horário: 9h ou 9h30? | 10 min | data, dia e hora **escritos** |
| 2 | **Narrativa** — o Lionsgate é 8/8 e no dia 19 já passou. Reancorar nos eclipses ou reposicionar como colheita? *(É a resposta direta ao "algo ainda nao pegou")* | 20 min | âncora escolhida |
| 3 | **Motor** — Visão Uterina paga a R$ 300: sim, e a Masterclass alimenta as sessões em vez de ser substituída por elas | 20 min | modelo definido |
| 4 | **Preço da Mentoria** — não sai da reunião sem número | 15 min | **valor e parcelamento** |
| 5 | **Plataforma** — InfinitePay para tudo, incluindo o link do Curso | 5 min | link entregue ou prazo com data |
| 6 | **Templo Dourado** — mostrar as páginas prontas, confirmar a arquitetura de dois destinos, separar pacote de ampliação | 15 min | escopo delimitado por escrito |
| 7 | **Fechamento** — quem faz o quê até quando | 5 min | próximo passo com dono e data |

**Se o tempo apertar, a ordem de sacrifício é:** 6 → 2 → 5. **Nunca sacrificar 1, 3 e 4** — são os únicos itens que destravam dinheiro.

**Conduta (de `REGISTRO-INTERACAO-2026-08-10.md`, Camada 3):**
- afirmar, não perguntar aberto — ela decide sobre proposta, desabafa sobre pergunta;
- oferecer as datas para ela cruzar com o ciclo **antes** de fechar, e dizer isso com naturalidade;
- zero cobrança pelo adiamento — o adiamento foi decisão legítima dela e a pressão de prazo é nossa;
- ciclo, radiônica e Lionsgate são o sistema operacional dela, não enfeite;
- "fora do escopo" nunca abre uma resposta sobre o hub.

---

## 4. Régua financeira do plano

| Frente | Dinheiro que gera | O que falta | Nosso esforço |
|---|---|---|---|
| **Preço da Mentoria (M-01)** | destrava a única oferta de ticket alto — **página já no ar** | **um número** | preencher 9 campos + deploy |
| **Link InfinitePay do Curso (C-01)** | R$ 97, venda passiva | **um link** | um campo + deploy |
| **Data da Masterclass (A-01 a A-06)** | protege as inscrições de R$ 88 já em curso | **nada — depende só de nós** | minutos + deploy · **hoje** |
| **Narrativa pós-Lionsgate (A-07)** | recupera a promessa publicada | **uma escolha dela** | edição de copy |
| **Hub / página-mãe ampliada (T-04 a T-08)** | **nenhum diretamente** | escopo e preço | projeto próprio |

**Conclusão que ordena a fila, agora afiada pela correção de capacidade:** de cinco frentes, **quatro geram dinheiro, e três delas estão esperando uma frase da cliente — não uma semana nossa.** A única que depende só de nós cabe hoje.

**A leitura executiva que isso obriga:** o pacote de R$ 1.297 está construído e metade publicado. **O que impede este cliente de virar prova de resultado é preço, link e data — três informações.** Se a reunião de amanhã entregar as três, esta conta fecha na semana. Se não entregar, nenhuma hora nossa a desbloqueia — e é por isso que a pauta tem decisões pré-formuladas em vez de perguntas.

**O hub continua fora da fila** — não porque falte tempo, mas porque não gera caixa e é o único item capaz de transformar uma semana de fechamento numa semana de construção.

---

## 5. O que este plano não resolve

- **Nossa latência.** Ela fez uma pergunta estratégica em 06/08 às 09h22 e pediu a call às 09h24. A call foi proposta em 10/08 às 17h24. No intervalo, outra consultoria respondeu. A correção instituída — pergunta estratégica dela é P0 de 24h — só vale se for executada.
- **A audiência do carrossel de 02/08.** Onze cards publicados chamando para 8/8. Ninguém sabe se quem comentou "FELINAS" foi reavisado.
- **As URLs públicas não estão escritas em lugar nenhum do repo** (P-PU-01). Duas páginas no ar e nenhum arquivo diz onde elas estão. Contraria a régua de continuidade (`../../CLAUDE.md` §11): hoje, verificar o estado de publicação exige perguntar a uma pessoa.
- **O risco invertido da correção de capacidade.** Com a execução fácil, a frente **parece** resolvida. Não está: preço, link e narrativa continuam abertos, e nenhum deles se resolve com hora nossa.

---

**Base:** `REGISTRO-INTERACAO-2026-08-10.md` · `STATUS.md` local · `DECISOES.md` · `../../CLAUDE.md` §§6.3, 9, 11 · `../../100-métodos/METODO-GERACAO-DE-RESULTADOS.md` §3-quater
