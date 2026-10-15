# REAUDITORIA (ciclo 2) — esqueleto do módulo de aplicação, v2

**VEREDITO: PASSA COM CORREÇÕES**

STATUS: relatório de auditoria · 12/10/2026 · arquivo auditado: `MODULO-APLICACAO-ESQUELETO.md` v2 (175 linhas) · o relatório do ciclo 1 (`AUDITORIA-MODULO-APLICACAO.md`) não foi alterado. Linhas citadas = linhas da v2.

**Placar dos dez achados do ciclo 1:** 9 fechados · 1 fechado em parte (#1) · 0 abertos.
**Defeitos novos:** 3 🟡 · 2 ⚪. **🔴 do ciclo 1 (#1):** não se reproduz como estava (ninguém nomeia, deduz ou supõe tipo), mas deixa um resíduo 🟡: "indexado pela necessidade" não está sustentado pelo Sistema nem pelos trechos do exemplo.

---

## 1. Os dez achados do ciclo 1

| # | Situação | Evidência (v2) |
|---|---|---|
| 1 🔴 | **Fechado em parte** (resíduo 🟡, ver seção 2) | Fechado na forma: l.17 e l.46 ("nunca dando nome ao jeito de funcionar dela"), l.79 (a suposição é sobre o que a pessoa precisa, "pronto para trocá-la"), B0 l.117, B3.2 l.161. A fórmula "pode ser que esta pessoa funcione como o Tipo 5" saiu. Aberto na estrutura: os dois blocos do exemplo (l.83–93) continuam sendo o texto de um tipo cada, e a lacuna da Aula 4 continua pedida por número (l.63, l.102) |
| 2 🟡 | **Fechado** | B4 l.173–174: registra D19, a contradição interna D18×D19, a aula 8 do curso (professor que ouve e sugere), a fala de 16/09 `[10:27:01]`; Parte A, pergunta 3 (l.103) leva a ela a prática dela com líderes. B3.2 l.162 mantém o veto à frase de D19 |
| 3 🟡 | **Fechado** | l.62 "É proposta nossa; você nos diz se bate"; B1 l.126: "`E30-14` e `E30-15` **não** servem de lastro"; B3.1 l.153: "proposta nossa", "depende do aceite dela" |
| 4 🟡 | **Fechado** | B1 l.125: "`E30-13` sustenta **só** a escuta… 'Perguntar antes de cobrar' **não** está em `E30-13`: é proposta nossa"; l.53 vem marcada "sugestão nossa"; l.27 atribui a ela só a ideia de escutar pelo computador do outro |
| 5 🟡 | **Fechado** | A FALTA das "duas ou três perguntas" saiu; l.55 "Não é roteiro de perguntas"; B1 l.125 "Sem lista de perguntas"; B3.2 l.164 "Decisão nossa: não traz"; `E30-12` deixou de ser usado. Resíduo ⚪: l.53 ainda prescreve uma pergunta específica ("o que ela precisou para entregar") |
| 6 🟡 | **Fechado** | B3.1 l.152–153: lastro "decisão de mecanismo nossa (B0)" / "proposta nossa (briefing §8)", estado "depende do aceite dela"; `E30-19` e `E30-14` deixaram de ser lastro. Resíduo ⚪: ver seção 5 |
| 7 🟡 | **Fechado** | Pergunta 2 (l.102) agora é só fato dela (tem o que dizer e consegue escrever/gravar?); a alternativa "cobre só os cinco" saiu; pergunta 3 (l.103) é a prática dela; a referência errada à "aula 5" saiu |
| 8 🟡 | **Fechado** | l.40 e B1 l.123: "pouco material pronto"; `87` declarado como não sustentando o exercício; "não presumimos que o líder tenha palpite do próprio tipo"; "com clientes" saiu; `Luz e Sombra`/`Liderança pela raiz` declarados "não abertos"; `A Lente`/`A Ferida` declarados "conteúdo não aberto" (l.47 e B1 l.124); `6. Dicas` retirado como lastro de escuta (B1 l.125) |
| 9 🟡 | **Fechado** | Aula 5 (l.66–71) sem encontros quinzenais e sem "folha de uma página"; B1 l.127 diz expressamente que não depende dos encontros |
| 10 🟡 | **Fechado** | Parte A sem sigla, ID `E30`/`D18`, caminho de arquivo, `§` ou "lastro"/"teto" (conferido linha a linha, l.9–106). Resíduos ⚪: ver seção 4 |

## 2. O 🔴 com atenção redobrada: o líder ainda atribui um tipo por outro caminho?

**Não por nomeação. Sim, de fato, por um caminho lateral, que a v2 não fecha.**

1. **Nenhum passo pede ao líder que nomeie, deduza ou suponha o tipo.** A suposição é sobre o que a pessoa precisa ou protege (l.46, l.53, l.68, l.79), é testada perguntando, e quem confirma é a pessoa (l.19). Isso cumpre B0.
2. **Mas "indexar pela necessidade" não está sustentado pelos trechos usados.**
   - O Sistema é organizado por tipo, não por necessidade. Os trechos citados são, na fonte, trechos de **um tipo**: "Para quem convive ou lidera essa personalidade, vale lembrar que **ela** precisa de tempo…" (Tipo 5); "Para quem convive ou lidera pessoas com essa personalidade…" (Tipo 6) (`SISTEMA-COMUNICACAO-E-LIDERANCA-POR-TIPO.md` l.314 e l.384).
   - As duas "necessidades" do exemplo (l.83: tempo e espaço; l.89: clareza sobre o risco) são exatamente o rótulo de traço dos dois tipos da demonstração da VSL (D14: "vê a falha de longe", "privacidade inegociável"). É o tipo com outro nome.
   - Não existe, em lugar nenhum, uma lista de necessidades mapeando as nove maneiras de funcionar, nem uma instrução de quem faria esse índice. A lacuna da Aula 4 é pedida **por número** (l.63 "4, 7, 8 e 9"; l.102 idem). Para o líder chegar ao parágrafo certo, alguém precisa ligar "necessidade" a "parágrafo do tipo X"; a v2 não diz quem.
3. **O resultado prático:** o líder que observa uma necessidade abre o parágrafo do tipo cuja marca é aquela necessidade e passa a agir com afirmações de nível de tipo ("confia mais em argumentos sólidos do que em apelos emocionais", "os questionamentos… raramente vêm de má vontade") sobre uma pessoa que mostrou **uma** necessidade. O próprio Sistema avisa que o tipo sozinho não basta (`SIS · Tipo 6 · Estilo de comunicação`, último parágrafo: "olhar para o subtipo antes de aplicar qualquer generalização"). A atribuição de tipo foi removida do texto, não do mecanismo.
4. **"Suposição" no sentido do curso?** A palavra é literal (aula `5`: "Primeiro que ele só pode ter uma suposição. pode desconfiar da sua personalidade com o que você traz pra ele."). Mas no curso: (a) "ele" é o **professor de Eneagrama**; (b) o objeto da suposição é a **personalidade** da pessoa; (c) a base é "o que você traz pra ele" numa entrevista (aula `8`). Na v2 a palavra é emprestada para outro sujeito (o líder) e outro objeto (necessidade/proteção). Não é erro de citação, mas B0 l.117 o apresenta como se o curso sustentasse ("a palavra é dela") e o recorte com reticências (“ele só pode ter uma suposição… Mas você tem que se identificar”) corta justamente a frase que diz que o objeto é o tipo. O B4 (l.173) descreve a condição estreita corretamente: as duas passagens da Parte B não conversam.

Classificação: o 🔴 do ciclo 1 não se reproduz (não há ato de atribuir tipo no fluxo). O resíduo é 🟡 e está nos defeitos novos N1, N2 e N3 abaixo.

## 3. Defeitos novos criados pela correção

| # | Grav. | Onde | O que está errado | Evidência |
|---|---|---|---|---|
| N1 | 🟡 | l.83–93 (exemplo, seção 4 passo 3) | As aspas do Sistema ficaram literais, mas agora aparecem sob rótulos de **necessidade** ("Se a pessoa mostra precisar de…"). Como o início de cada trecho cortou a frase de abertura ("Para quem convive ou lidera essa personalidade…"), o "ela", "essa personalidade" e "essa pessoa" que restam dentro das aspas passam a se ler como "a pessoa que mostrou a necessidade". O que era afirmação sobre um tipo parece afirmação sobre quem tem aquela necessidade | l.84 "ela precisa de tempo…"; l.85 "já que essa personalidade confia mais…"; l.92 "os questionamentos feitos por essa pessoa raramente vêm de má vontade…" · fonte: "Para quem convive ou lidera essa personalidade, vale lembrar que ela precisa…" |
| N2 | 🟡 | Parte A l.75 e l.81 ("o que o seu Sistema diz sobre cada necessidade"); B0 l.117; B1 l.126 | (a) Descreve a ela o **Sistema dela** de um modo que ele não é: ele é por tipo, e ela vai notar. (b) A garantia de B0/B1 ("o número aparece só como fonte"; "estes números só aparecem aqui, na conferência") é falsa: os números aparecem na Parte A (l.63, l.102: "4, 7, 8 e 9") e a lacuna a ser escrita é por número. (c) Quem monta o índice necessidade→trecho não está nomeado nem pedido a ela | l.63, l.102 · B1 l.126 |
| N3 | 🟡 | l.97 (Parte A) e B0 l.117 | "ele só pode ter uma suposição" aparece em Parte A sob "Se a suposição estiver errada", dirigido ao líder, sem dizer que "ele" é o professor de Eneagrama e que a suposição é sobre o tipo de quem ele escuta. Em B0, o recorte com reticências omite a frase que fixa o objeto. A citação é literal; o uso muda o referente | Curso `2. …/5`: "Professores de Eneagrama que são bons professores eles não contam a sua personalidade pra você. Primeiro que ele só pode ter uma suposição. pode desconfiar da sua personalidade com o que você traz pra ele." |
| N4 | ⚪ | l.3 | Cabeçalho "v2 · devolução 1" é de uso interno e fica acima da Parte A. Se o arquivo for enviado inteiro, ela lê essa linha | l.3 |
| N5 | ⚪ | B3.1 l.148, l.149, l.150 | Linha 148 ("O módulo parte do Sistema") afirma algo sobre o módulo com estado "existe"; o que existe é o Sistema. Linha 149: "dicas para o ambiente de trabalho" nos nove tipos, dito solto, pode ser lido como dica ao líder (só 5 de 9 são). Linha 150: "ensina a distinguir o comportamento do que move a pessoa", sem qualificar que a aula `5` trata de quem se identifica; B3.2 l.163 cobre o caso do orientar, mas não o das duas anteriores | `INDICE-CURSO-E-SISTEMA.md` §2; curso `2. …/5` |

**Aspas novas ou alteradas, todas conferidas.** l.19 "Mas não usem o comportamento pra bater o martelo." (`2. …/6`) ✓ · "Mas você tem que se identificar." (`2. …/5`) ✓ · l.97 "ele só pode ter uma suposição" ✓ (literal, ver N3) · B4 l.173 trecho de D19 ✓ · B4 l.174 trecho de D18 e "Por isso o curso tem um módulo só de aplicação" ✓ · B1 l.123 "não ter descoberto é normal" ✓ (paráfrase da aula `48`). Os seis trechos do Sistema (l.84–93) e as demais aspas do curso (l.47, l.97) são os do ciclo 1, literais.

**Atribuição nova a falas dela:** l.40 "que você contou que usa para explicar liderança" (analogia do computador, `E30-20`, "eu sempre uso a analogia do computador"): ok. l.27 "ideia de escutar pelo computador do outro é sua, da conversa de 30/09": ok (`E30-13`). Nenhuma atribuição nova indevida.

**Promessa nova:** nenhuma. l.15 ("pedir o mesmo resultado de um jeito que a pessoa consegue executar") e l.17–19 descrevem o módulo como desenho nosso; ⚪ apenas que l.17 e l.19 não levam o rótulo "sugestão nossa" (o aviso de l.11 cobre o documento).

**Perguntas de "O que precisamos de você" (l.99–106):**

| Pergunta | Natureza | Parecer |
|---|---|---|
| 1. Onde isto não bate com o que você ensina? | fato dela | ok |
| 2. Tem o que dizer ao líder para 4, 7, 8 e 9 e consegue escrever/gravar até dezembro? | fato dela (tem/consegue) | ok; a segunda metade repete a 4 |
| 3. Você deixa o líder levantar uma suposição sobre alguém do time? Como orienta para ele não fechar em cima dela? | prática dela | ok. Não devolve decisão nossa; a decisão de mecanismo já está em B0 |
| 4. Consegue gravar as cinco aulas até o primeiro encontro? | fato dela | ok |

Nenhuma devolve decisão nossa. As quatro tratam do que ela pratica, tem ou consegue entregar.

## 4. Parte A: legibilidade e autonomia

**Sem sigla, ID, caminho de arquivo ou jargão interno** de l.9 a l.106. Nomes de aulas e partes do Sistema vêm entre aspas e são os dela. Vocabulário nosso que restou, e que ela entende por contexto: "maneiras de funcionar" (é também a fala da VSL), "turma fundadora", "[[ FALTA ]]" (marcador, explicado de fato pelo texto que o acompanha), "sugestão nossa" (definido em l.11). Compreensível sem a Parte B: **sim**. Duas ressalvas: (a) N2 (descrição do Sistema que não bate com o que ela conhece); (b) N4 (cabeçalho). A Parte A não traz o rótulo "O que motiva no trabalho" (usa "o que move a pessoa") ✓.

## 5. Parte B: listas "pode" e "não pode afirmar"

| Linha | Lastro | Estado | Parecer |
|---|---|---|---|
| l.146 aulas curtas de aplicação | briefing §6 | decisão registrada | ok |
| l.147 entram até dezembro; nunca "já disponível" | briefing §5 D18, §6 | depende dela | ok |
| l.148 módulo parte do Sistema | registro 07/10 l.19; extração | "existe" | ⚪ (N5): é o Sistema que existe; que o módulo parta dele é desenho |
| l.149 nove tipos têm quatro tipos de conteúdo | `INDICE` §2 | existe | ok no fato; ⚪ (N5) |
| l.150 92 aulas; distingue comportamento e o que move | `INDICE` §1; `2. …/5` | existe | 92 ✓ (soma 5+5+6+9+9+9+8+29+10+2); ⚪ (N5) |
| l.151 auto-observação para quem já reconheceu a própria personalidade | `87` | existe | ok |
| l.152 suposição a testar, a pessoa confirma | decisão nossa | depende do aceite | estado correto; mas o lastro "decisão nossa" não responde pela exatidão do que o curso diz (ver N3) |
| l.153 resultado e direção do líder | proposta nossa | depende do aceite | ok |
| l.154 5 aulas, ~40 min | este esqueleto | só após aceite e gravação | ok |

Lista "não pode afirmar" (l.158–169): sem lacuna nova. As entradas coincidem com o briefing §3, §5, §8 e com a decisão de mecanismo. B4 (l.171–174) é consistente com as fontes: D19 e D18 conferem na `G2-TESE-v3-FALA.md` (l.71, l.61, l.63).

## O que foi conferido e bateu (v2)

- Todas as aspas novas e alteradas (acima) são literais nas fontes. Os seis trechos do Sistema do exemplo seguem literais.
- Aulas citadas por nome na Parte A existem com esse nome ("Processo da descoberta da personalidade", "Questões Centrais", "Dicas no processo de identificação"). Os números da B1 l.124 batem com o índice (15, 18, 21; 24, 27, 30; 33, 36, 39).
- B1 l.125 (Tipo 6, último parágrafo de "Estilo de comunicação", sobre subtipo) é fiel ao Sistema.
- 7 lacunas no ciclo 1 → agora 5 `[[ FALTA ]]` de conteúdo + 2 de resposta dela (l.104, l.106) = 7 marcadores; a Aula 4 mantém a lacuna dos 4 tipos; viabilidade como no ciclo 1.
- Cenário "Preciso dessa proposta revisada até quinta." é o de D14 e está marcado como nosso (l.75).
- O módulo continua sem prometer tipo, número de resultado, cura, técnica de conversa; sem nome de terceiro, sem os termos vetados do briefing §8.
