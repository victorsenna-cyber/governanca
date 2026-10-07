# Auditoria da destilação de 16/09 + análise da call

> **Tipo:** auditoria (derivado) · **Escrito:** 17/09/2026 · **Dono:** Victor
> **Objeto:** `clientes/Débora Delgado/execução Codex/DESTILACAO-2026-09-16/` — pacote do Codex, entregue 16/09 12h16, **pendente na fila do `STATUS-CODEX.md` §2 há 24h**
> **Rito:** `40-operacao-rotinas/RITO-INTEGRACAO-CODEX.md` §4, gate de 5 itens
> **Call auditada:** 16/09, 09:06:31–11:10:01, 2h03min30s

---

# PARTE 1 · A DESTILAÇÃO — ✅ APROVADA, com quatro ressalvas

## 1.1 O que eu verifiquei de forma independente, e não por leitura

**Não confiei na auto-validação do Codex.** Rodei conferência própria contra o `TRANSCRIPT-LIMPO.md`:

| Verificação | Alegado pelo Codex | **Meu resultado** |
|---|---|---|
| Segmentos da fonte | 1.615 | ✅ **1.615** |
| Turnos agrupados | 818 | ✅ **818** (409 de cada lado — simetria perfeita, o que é sinal de diarização automática, não de equilíbrio de fala) |
| Tokens de fala nossa | 6.550 | ✅ **6.543** — 0,1% de diferença por regra de tokenização, declarada no script |
| **Citações conferidas contra o timestamp** | 126 de 126 | ✅ **105 de 105** no meu recorte (formato `[hh:mm:ss]: "…"`), **zero divergências** |
| SHA-256 da fonte antes/depois | intacta | declarado, não reexecutado aqui |

🔴 **E conferi manualmente os quatro pontos onde uma destilação costuma errar — atribuição de fala em turnos sobrepostos.** O caso mais arriscado é o `C-10`, onde há **dois cabeçalhos no mesmo segundo `[11:00:42]`**, um de cada falante. **A atribuição está correta:** *"Vamos colocar o Eneagrama. Então."* é do Victor, e *"Ai, Bora!"* é dela. **Um destilador desatento inverteria exatamente aí.**

## 1.2 Conformidade de método — 13 de 13 eixos

**Contei os eixos do `METODO-DESTILACAO-DE-CALLS.md` contra as seções: §1 a §13. Estão todos, na ordem, sem inventar eixo e sem fundir dois.** IDs estáveis (`C-01`…`C-60`, `L-01`…`L-10`), índice por destino de uso na §0, o que não foi dito na §11, eixo 13 na §13 com proposta de propagação para a voz.

## 1.3 ⭐ Onde ela está ACIMA do nosso próprio padrão

**1 · Recusou corrigir em silêncio, e listou as divergências.** §11 tem um bloco *"Divergências a não corrigir silenciosamente"* com cinco itens — inclusive erros de cálculo nossos na própria call. **É o `CLAUDE.md` §11.2 aplicado com mais rigor do que costumamos aplicar.**

**2 · Separou grau `D` de grau `R` sem ser mandado, e acertou a fronteira difícil:** *"A fala de Débora é direta para desejos dela como cliente da assessoria, **não automaticamente grau D do público comprador do curso**."* ⭐ **É exatamente a fronteira MEL × arqueologia que instituímos em 10/09, aplicada corretamente por um agente que não escreveu a regra.**

**3 · Escreveu uma seção inteira (§6, direção visual) para dizer que nada aconteceu ali.** A tentação era pular. **Declarar o vazio é o que impede alguém de inventar depois.**

**4 · 🔴 Omitiu a senha do sistema do relatório e disse que omitiu.** A credencial está na fala dela `[10:56:11]`. **A destilação não a reproduz.**

**5 · Recusou transformar aceite em autorização, repetidamente.** C-52, C-53, C-31: *"não interpretar como autorização para ativar conta ou campanha"*, *"não acessar conta, copiar credenciais"*. **Quem escreveu isso entendeu a diferença entre ter combinado e ter podido.**

## 1.4 ⚠️ As quatro ressalvas

**1 · 🔴 A tabela de marcadores da §13 publica um número que o próprio texto declara não confiável.**
Ela diz: *"Ruídos como 'E aí?' podem ser artefatos automáticos: a contagem não é diagnóstico confiável da fala oral sem áudio."* **E então publica 16 linhas de contagem, com *"e aí" a 12,06 por mil.*** Conferi: *"E aí?"* aparece como **segmento isolado** dezenas de vezes, dos dois lados — **é artefato de diarização, não muleta de fala.** Publicar a linha convida alguém a tratá-la como tique real daqui a três meses. **Ou não se publica, ou se marca a linha como contaminada.**

**2 · Subavaliou que os depoimentos podem já estar publicados.**
C-39 trata como *"precisam ser localizados"*. Mas ela diz **duas vezes** que já subiu: `[10:03:36]` *"eu não sei se você viu lá no liderança raiz, **eu coloquei os depoimentos**"* e `[11:09:07]` *"Lá no liderança. Na raiz **já estão os depoimentos**"*. **Se já estão públicos no site dela, a questão de autorização muda de natureza** — e isso merecia consequência própria, não só "localizar".

**3 · 🔴 O achado mais importante da call está na linha 2 de uma tabela de 13.**
*"Qual reserva de mídia e teto de perda do teste? — Nenhum orçamento autorizado na call."* **Conferi na fonte: "verba", "investimento" e "orçamento" têm ZERO ocorrências em 2h03 de conversa sobre um funil pago.** Isso não é uma lacuna entre treze. **É a condição de recusa nº 2 do `METODO-FUNIL-DE-VSL.md` §7.** Pertencia à síntese executiva.

**4 · Camada 3 existe, mas distribuída.** Tom e conduta aparecem em `L-01`…`L-10` e nas *"ausências observáveis"* — o suficiente para o gate, **e sem um bloco de "o enquadramento que funcionou"**. `C-04` (*"traumatizada de compromissos longos"*) é fato relacional de primeira ordem e está numa célula de tabela.

## 1.5 Veredito contra o gate do `RITO` §4

| # | Item do gate | Estado |
|---|---|---|
| 1 | Procedência conferida | ✅ **105/105 verificadas por mim** |
| 2 | Contradição com o canônico | 🔴 **HÁ UMA, e é grande — ver Parte 2.2.** Não se resolve promovendo |
| 3 | Fronteira de decisão respeitada | ✅ 8 decisões marcadas como **candidatas**, com descarte e evidência |
| 4 | Camadas do §11.1 | ✅ 4 de 4, com a 3 distribuída |
| 5 | Destino correto | ✅ proposto por destino, nada aplicado |

> ## ✅ **A destilação está bem feita. É a melhor que esta conta já teve** — e é a primeira com verificação mecânica reproduzível.
>
> 🔴 **Mas ela não sobe inteira hoje**, porque o item 2 do gate trava: o pacote contradiz o que escrevemos em 15/09, e a contradição é sobre dinheiro.

---

# PARTE 2 · A CALL — o que mudou, e o que ninguém recalculou

## 2.1 ⭐⭐⭐ O melhor que aconteceu: ela resolveu o furo nº 3, e resolveu sozinha

Em 15/09 listei quatro furos na estratégia de VSL. **O terceiro era: *"o curso não existe"*.**

**Ela matou esse furo na call, apontando um ativo que já está pronto e parado:** o curso de Eneagrama — `[10:22:55]` *"mais de cem aulas ali"*, ~**sete horas** de gravação (`C-11`, corrigindo o Victor, que tinha dito "mais de vinte"), **27 vídeos só de subtipo** (~2h20).

> **E o método já previa esse caminho sem nomeá-lo assim.** O `METODO-FUNIL-DE-VSL.md` §3.2 lista três caminhos de produto de entrada, todos assumindo **criação**. ⭐ **Surge um quarto: usar produto que já existe e está parado.** É mais barato que os três, e vale virar linha do método.

## 2.2 🔴🔴🔴 O que ninguém recalculou, e é o achado desta auditoria

**Em 15/09 eu escrevi, e o Victor levou para a call:**

> *"A turma de outubro é o G1, a VSL é o G2, e o G1 paga o G2. As 8 vagas × R$ 4.000–6.000 = R$ 32.000–48.000 são exatamente a reserva de capital que o gate do §2.2 exige."*

**Na call, ela tirou a turma da mesa** — `C-26`, `[09:24:09]` *"Eu não quero correr e fechar um grupo e fazer essa entrega. Agora."* · `[09:28:08]` *"preciso amadurecer minha geração de demanda"*.

**E adiou a renovação** — `C-03`, `[11:07:32]` *"eu não consigo tomar uma decisão pra Janeiro. Agora."*

> ## 🔴 Então, em duas horas, o modelo perdeu as duas pernas financeiras ao mesmo tempo:
>
> | | Em 15/09 | Depois da call |
> |---|---|---|
> | **Capital do teste** | as 8 vagas de outubro | 🔴 **nenhuma fonte identificada** |
> | **Nossa receita** | renovação a decidir | 🔴 **adiada, sem data** |
> | **Verba de mídia** | a perguntar | 🔴 **zero menções em 2h03** |
>
> **E o plano seguiu como se nada disso tivesse mudado.** ⭐ **O Codex viu e escreveu com todas as letras** (`C-26`): *"Não continuar tratando a turma de outubro como pré-requisito acordado para financiar a VSL."*
>
> 🔴 **Isso é uma correção direta do meu raciocínio de 15/09, feita por outro agente, e está certa.**

**A consequência operacional é dura e simples:** hoje a conta **não passa** na condição de recusa nº 2 do `METODO-FUNIL-DE-VSL.md` — *"não há capital para 2 a 3 tentativas"*. **Não é motivo para parar a construção; é motivo para não ligar mídia.** A VSL pode ser escrita e gravada; **o primeiro real de anúncio não sai sem esse número.**

## 2.3 ⚠️ A renovação não foi recusada por preço — e tratar como preço é o erro caro

> `[11:07:45]` *"Eu acho que eu fiquei **muito traumatizada de fazer compromissos muito longos** sem saber o que vai acontecer."*
> `[11:08:02]` *"Eu prefiro esperar um pouco mais pra frente. A gente vê de novo. **Mas vamos rodar essas Vsls.**"*

**O Codex acertou o diagnóstico e a instrução** (`C-04`): *"Não classificar como objeção de preço. Não oferecer desconto por inferência."*

> ⭐ **E havia uma saída na sala que não foi oferecida.** A objeção é ao **comprimento do compromisso**, não ao valor. A resposta a *"traumatizada de compromisso longo"* não é desconto — **é prazo menor, ou prazo amarrado ao teste.** Ela mesma desenhou a ponte: *"vamos rodar essas VSLs, ver o caminho que a gente está tomando."*
>
> **A proposta que cabia era a que ela pediu sem pedir: um ciclo curto ligado ao resultado do teste, não quatro meses de calendário.**

## 2.4 🔴 As quatro coisas que a pauta pedia e não entraram

| # | O que estava na `PAUTA-CALL-2026-09-16.md` | O que a fonte mostra |
|---|---|---|
| 1 | 🔴 **Verba de mídia: "a pergunta que não pode ficar sem resposta"** | **zero ocorrências de "verba", "investimento", "orçamento"** |
| 2 | **As 5 perguntas de fato do P4** | *"conversas difíceis"* = 0 · *"diagnóstico de cultura"* = 0 · *"4 ou 5 individuais"* = 0. **Nenhuma foi feita** |
| 3 | 🔴 **Ver o LinkedIn que ela redesenhou na véspera + a headline decidida** | *"headline"* = 0 · *"perfil"* = 0. **Não entrou** |
| 4 | **A meta de +R$ 20k/mês** | **zero ocorrências.** A régua financeira da conta não apareceu numa call de 2h sobre faturamento |

> ⚠️ **Sobre o item 2, há uma atenuante real e ela importa: o produto mudou no meio da call.** As cinco perguntas do P4 eram sobre a **mentoria**. O produto do primeiro teste passou a ser o **curso de Eneagrama**. **O P4 não ficou sem resposta — ficou obsoleto**, e precisa ser refeito para o produto novo.
>
> ⭐ **E a destilação já fez metade desse trabalho novo**: `C-17` (maestrias **não** estão gravadas), `C-18` (caminhos de crescimento **não** estão no curso), `C-22`/`C-23` (o que o sistema complementar traz), `C-24` (acesso por senha global). **É o inventário do produto novo, colhido sem que ninguém pedisse.**

## 2.5 🔴 O produto melhorou e a oferta piorou

**Existe curso pronto — e ele é menor do que a promessa que se quer fazer.**

| O que se quer prometer | Onde está |
|---|---|
| identificação do tipo | ✅ no curso gravado |
| ⚠️ identificação **rápida para todos** | 🔴 **a própria dona nega**: `[10:32:33]` *"pode ser mais demorado, dependendo do nível de consciência"* — e ela disse *"posso garantir que ela vai se identificar rápido"* 13 segundos antes. **A destilação pegou a contradição** |
| maestrias / talentos | 🔴 `[10:30:46]` *"eu não gravei todas as maestrias de cada tipo"* |
| caminhos de crescimento | 🔴 `[10:35:32]` *"também não está naquele curso"* |
| sistema de conhecimento | 🟡 existe, **com senha global** (`C-24`) |
| 4 encontros ao vivo | 🟡 direção aceita · **"perene" × "3 primeiros meses" se contradizem** (`C-51`) |

> **Tradução: o ativo existe, a oferta ainda não.** E é exatamente isso que a síntese do Codex diz, e está certa: *"o gargalo não é convencer Débora de que VSL existe. É transformar o produto reaproveitado em oferta delimitada."*

## 2.6 ⚠️ Sobre a nossa condução — e uma parte é minha

**`L-05`:** entre `[09:57:50]` e `[10:00:30]`, o Victor entregou **quase literal** a análise que eu escrevi em 15/09 — *"a proposta fala do líder que não destrava o outro, os depoimentos falam do líder que não se autorizou primeiro"* · *"é o elo que faltava embaixo da narrativa da senha"*.

**E ela perguntou duas vezes o que estava sendo decidido:** `[09:58:16]` *"Isso são as dores específicas que você está falando?"* · `[10:00:30]` *"Isso aí que você está trazendo para o curso, para a VSL?"*

> 🔴 **O material era bom e entrou na hora errada.** Numa call cuja decisão era **qual produto testar**, uma tese sobre narrativa compete com a decisão em vez de servi-la.
>
> ⭐ **A régua que fica, e é minha:** **insight de narrativa vai por escrito antes da call, não falado dentro dela.** Na call entra a decisão a tomar, e a tese entra só se alguém perguntar por quê.

**`L-06` é o mesmo defeito em versão barata:** *"geralmente tenho mais de vinte horas ali"* — inventário inferido, corrigido pela dona no segundo seguinte para sete. **É a Régua 9 da `voz-victor` (número de terceiro entra declarado como de terceiro) aplicada a inventário: número de produto do cliente não se estima em voz alta.**

## 2.7 🔴 Ação de segurança, hoje

**A senha do sistema de conhecimento está em texto claro no repositório**, em `execução Codex/DESTILACAO-2026-09-16/TRANSCRIPT-LIMPO.md`. A destilação a omitiu do relatório e declarou a omissão — **conduta correta.** Mas o arquivo está lá.

**Duas ações, e a primeira é dela:** trocar a senha do sistema · decidir se o `TRANSCRIPT-LIMPO.md` fica como está, é redigido, ou sai do repositório.

---

# PARTE 3 · O QUE FAZER, EM ORDEM

| # | Ação | Por quê |
|---|---|---|
| **1** | 🔴 **Mandar a mensagem da verba** — quanto ela reserva para o teste, e de onde sai | **sem isso a VSL não liga mídia.** É condição de recusa nº 2 do método |
| **2** | ⭐ **Reformular a renovação como ciclo curto ligado ao teste**, não quatro meses | ela recusou **comprimento**, não preço. E ela mesma abriu a porta: *"vamos rodar essas VSLs"* |
| **3** | **Refazer o P4 para o produto novo** — inventário do curso + do sistema, o que é bônus, o que não entra | `C-17`, `C-18`, `C-22`, `C-24` já são metade do trabalho |
| **4** | **Resolver "perene" × "3 primeiros meses"** dos 4 encontros | contradição declarada em `C-21`/`C-51`, e vira promessa na página |
| **5** | **Trocar a senha** e decidir o destino do transcript | credencial em claro no repo |
| **6** | **Promover a destilação** com as ressalvas da Parte 1.4 | está pendente há 24h na fila do `STATUS-CODEX.md` |
| **7** | **Olhar o LinkedIn dela e entregar a headline** | ela redesenhou em 15/09, ninguém olhou, e não entrou na call |

> 🔴 **E o que NÃO fazer: escrever roteiro de VSL esta semana.** O produto ainda não é oferta (2.5), não há verba (2.2) e o inventário não está fechado (2.4). **Escrever agora é produzir peça que vai ser refeita — e é exatamente o que a régua-mãe do §9 existe para impedir.**

---

---

# PARTE 4 · AS SETE PERGUNTAS (18/09)

## 4.1 🔴⭐⭐⭐ O QUE A CALL REVELA — e a destilação pegou dois terços

**Em 71 segundos, entre `[10:13:21]` e `[10:14:22]`, ela separou três objetos de crença. Ler os três juntos é o achado da call inteira:**

> `[10:13:21]` *"Eu honestamente, **não é que eu não acredito em você**, mas eu acredito em você, mas **eu ainda não consigo visualizar. Eu fazendo, fazer a VSL, fazer o curso.** Ok, mas **eu tenho dificuldade de visualizar**."*
> `[10:14:00]` *"Eu acho que **tráfego é um negócio instável na minha cabeça. Eu não consigo confiar em tráfego.**"*
> `[10:14:22]` *"Mas **eu confio da gente testar esse caminho que você está enxergando.** Coisas que eu não estou enxergando. E bora ver."*

| Objeto | Estado |
|---|---|
| **Nós** | ✅ **confia.** Explicitamente, duas vezes |
| **Tráfego como canal** | 🔴 **não confia.** *"instável na minha cabeça"* |
| **⭐ Ela mesma no papel** | 🔴 **não consegue ver.** *"não consigo visualizar eu fazendo"* |

> ## 🔴 O terceiro é o que ninguém nomeou, e é o que decide.
>
> **A destilação capturou o tráfego (`C-44`) e o consentimento exploratório. Não capturou que ela disse, com todas as letras, que não se vê fazendo.** São coisas diferentes: uma é dúvida sobre o método, a outra é **dúvida sobre o próprio papel dentro dele.**
>
> ⭐⭐ **E cruza com o WhatsApp da véspera:** *"**não consigo imaginar** mto vender mentoria pra público frio"* `[15/09 17:12]`.
>
> ## A assinatura da objeção dela é sempre a mesma: **"não consigo visualizar / não consigo imaginar". Ela concorda e não vê.**
>
> 🔴 **Consequência operacional, e é a maior desta auditoria: ela não precisa de mais argumento. Precisa de ver.** Argumento não resolve dificuldade de visualização — **demonstração resolve.** Três horas de explicação de VSL produziram *"eu topo"*; **nenhum minuto produziu *"agora eu vejo"*.**
>
> ⚠️ **E a mudança de produto não resolveu isso.** Trocar curso novo por curso pronto tirou **metade** do "eu fazendo" — **a VSL ela ainda tem que gravar.**

### O que mais a call revela

**1 · A objeção nunca foi a VSL.** `[09:16:54]` *"eu já assisti algumas… **eu topo fazer uma VSL**"* — aos dez minutos de call. **O que estava em jogo era o esforço, o prazo e o compromisso.** A destilação acertou isso na §12.

**2 · ⭐ Ela argumentou a favor da resposta direta sozinha, e a destilação não pegou.** `[09:46:33]` *"Será que isso vai durar, gente? Porque as coisas do digital… eu sei que é um negócio que **o povo vende desde sempre por cartas**… isso é um negócio **mais atemporal** do que as coisas que estão no Instagram."* **Ela se vendeu o princípio.** É crença declarada espontaneamente — e é por onde se reabre a conversa, não pelo *"100 mil por dia"*.

**3 · 🔴 Um padrão relacional que ela trouxe e nós não registramos.** `[09:40:30]` *"eu ficava **esperando ele me validar para eu me validar**. E ele, pelo contrário, **ele não me validava**."* — sobre a assessoria anterior. **Camada 3 pura, e não está na destilação.**
> ⭐ **A leitura operacional: validar explicitamente o que ela traz é conduta, não gentileza.** E foi o que funcionou nesta call — ela explicou o próprio produto por ~40 minutos, foi ouvida, **e daí saiu a escolha do Eneagrama.** O melhor resultado da call veio do trecho em que menos falamos.

---

## 4.2 AS SUAS PROMESSAS — literais, com hora

| # | Promessa | Literal | Prazo dito |
|---|---|---|---|
| **1** | 🔴 **Replanejar as datas e combinar de novo** | `[11:08:37]` *"Eu já vou planejar, replanejar… essa questão de datas"* · `[11:08:47]` *"**Eu vou replanejar essas datas. E eu combino contigo novamente. Combinado.**"* | `[11:08:34]` *"Nessa semana ali"* — **vence 21/09** |
| **2** | **Enviar o PDF do funil de LinkedIn no grupo** | `[11:06:17]` *"Eu vou enviar o PDF lá no grupo para você também. **Daqui a pouco.**"* | imediato |
| **3** | **Destilar a conversa e usar a lente dela nos elementos** | `[11:02:42]` *"Vou destilar essa conversa aqui. Aquilo que você trouxe sobre eneagrama, inclusive"* | ✅ **cumprida** (pacote de 16/09) |
| **4** | **Verificar login individual e integração PagTrust** | `[11:03:38]` *"**vou verificar antes de dar a certeza para você**"* · `[11:04:27]` *"vou verificar se a PagTrust faz isso… se é possível"* | sem prazo |
| **5** | 🟡 **Construir o sistema de acesso, SE for viável** | `[11:04:37]` *"E aí, **se for possível**, eu também faço a criação desse sistema para você"* | condicional |
| **6** | **Fazer o teste de identificação que ela vai mandar** | `[10:48:50]` *"Vou fazer esse teste"* | sem prazo |
| **7** | **A edição da VSL é sua** | `[10:16:42]` *"a edição da VSL, ela fica comigo também"* | escopo |

> ⚠️ **A promessa 5 é a mais perigosa da lista** — e você mesmo a protegeu bem com o *"se for possível"* (`L-09` elogia isso). **Mas ela foi dita no mesmo minuto que a 4, e o cliente ouve as duas como uma só.** Se a PagTrust não fizer, **a promessa 5 precisa ser encerrada em voz alta**, não desaparecer.
>
> 🔴 **A promessa 1 é a única com prazo e vence em três dias.** É também a que destrava todas as outras.

---

## 4.3 O QUE A DÉBORA QUER

### O que ela quer do negócio

| O que | Literal |
|---|---|
| ⭐ **Empresas, e é o foco declarado** | `[09:25:49]` *"**meu foco maior é esse de ir para empresas**"* · `[09:26:07]` *"o grupo já existe. Não quero formar um grupo, porque quando eu pego um grupo da empresa, **o elemento cultura fica natural**"* |
| **Individual crescendo aos poucos, não turma forçada** | `[09:24:28]` *"**prefiro ir pingando aos poucos**… se um mês eu vender uma mentoria individual, tá bom. Aí daqui a pouco eu vendo mais uma"* |
| **Demanda antes de preço** | `[09:28:08]` *"a verdade é que **eu ainda não tenho demanda**. Então eu preciso **amadurecer minha geração de demanda**"* · `[10:09:23]` *"não quero sair colocando um preço muito alto… quero fazer um **caminho natural**"* |
| **Manter a call de seleção** | `[09:23:23]` *"gosto de ter call antes da pessoa entrar na mentoria **como se fosse um processo seletivo**"* |

### ⭐⭐⭐ E o que ela quer de NÓS — ela disse falando de outro

> `[09:37:26]` *"**Eu não entrei para ele me passar uma metodologia. Eu queria que ele me olhasse, pegasse o que eu tenho**"*
> `[09:37:59]` *"**Ele pega o que você faz bem e transforma isso numa linguagem comercial que penetra no público que você quer.**"*

> **É a definição do nosso serviço, escrita pela cliente, de graça.** A destilação pegou como `C-48` ✅.
>
> ⭐ **E é exatamente o que aconteceu de bom nesta call:** ela mostrou o que tem (o curso de Eneagrama), foi olhada, e o que ela tem virou o produto do teste. **Quando fizemos isso, funcionou em 40 minutos.**

### O critério que ela repetiu, e que governa tudo

> `[10:09:54]` *"**Eu não quero forçar. Eu quero que as coisas sejam mais naturais.**"*

⚠️ **E o Codex acertou a ressalva** (`C-43`): *"Não interpretar 'natural' como ausência de trabalho."* **Natural, para ela, é sem forçar demanda que não existe — não é sem esforço.**

---

## 4.4 🔴 ONDE ELA DEMONSTROU NÃO-CRENÇA

| # | Objeto | Literal | O que isso NÃO é |
|---|---|---|---|
| **1** | ⭐ **Ela mesma executando** | `[10:13:21]` *"não consigo visualizar **eu fazendo**, fazer a VSL, fazer o curso… **tenho dificuldade de visualizar**"* | não é dúvida sobre o método |
| **2** | **Tráfego pago como canal** | `[10:14:00]` *"tráfego é um negócio **instável na minha cabeça. Eu não consigo confiar em tráfego**"* | não é recusa ao teste |
| **3** | **Construir produto antes de validar** | `[10:20:06]` *"**eu não tenho um método agora. Eu não tenho um curso para gravar agora**"* · `[10:20:44]` *"não retorna dinheiro ainda, na expectativa de que isso vai dar certo. **E eu não faço ideia se vai dar certo**"* | ✅ **resolvida na call** — virou Eneagrama |
| **4** | **Compromisso longo** | `[11:07:45]` *"fiquei **muito traumatizada de fazer compromissos muito longos** sem saber o que vai acontecer"* | 🔴 **não é objeção de preço** |
| **5** | **A distância até a validação** | `[10:21:10]` *"a gente só vai ter essa resposta de validação **em dez de Dezembro**"* | é o gatilho de tudo |
| **6** | **O Instagram** | `[09:51:28]` *"**não tô muito animada pra mexer no Instagram**"* · `[09:52:59]` *"não tenho nenhuma vontade"* | preferência de canal, não bloqueio |

> ⚠️ **Repare no padrão dos itens 1, 2 e 4: nenhum é sobre se a estratégia funciona.** São sobre **ela dentro da estratégia** — se ela se vê fazendo, se ela consegue confiar, se ela aguenta se comprometer. **Três não-crenças, e as três são sobre ela, não sobre nós nem sobre o método.**

---

## 4.5 ✅ ONDE ELA DEMONSTROU CRENÇA

| # | Objeto | Literal |
|---|---|---|
| **1** | ⭐ **Em nós** | `[10:14:22]` *"**eu confio da gente testar esse caminho que você está enxergando.** Coisas que eu não estou enxergando. E bora ver."* · `[10:13:21]` *"não é que eu não acredito em você"* |
| **2** | **No formato VSL** | `[09:16:54]` *"eu já assisti algumas… estou entendendo o que você está falando. **Eu topo fazer uma VSL**"* — **aos 10 minutos de call** |
| **3** | ⭐⭐ **Na resposta direta como princípio — argumentada por ela** | `[09:46:33]` *"o povo vende desde sempre **por cartas**… é um negócio **mais atemporal** do que as coisas que estão no Instagram"* |
| **4** | **No próprio produto, sem hesitar** | `[10:27:56]` *"Eu não mostro só a personalidade. **Eu mostro a criança daquela personalidade. E o que essa criança desenvolveu para sobreviver.**"* · `[10:31:41]` *"**Eu tenho isso para todo mundo do time.**"* |
| **5** | **Na aplicação prática, com caso** | `[10:46:35]` *"**Eu sabia que todo dia ela ia ficar mais tarde.**"* · `[10:47:43]` *"Se eu desse pra ele o prazo real, ele vai atrasar"* |
| **6** | **No teste como caminho** | `[11:08:02]` *"prefiro esperar um pouco mais pra frente… **Mas vamos rodar essas VSLs.**"* |

> ## ⭐ A leitura que junta as duas listas:
> ### Ela acredita no método, no formato, no produto dela e em nós. **A única coisa em que ela não acredita é que ela consiga fazer a parte dela.**
>
> **E isso não se resolve com argumento — se resolve tirando a parte dela do caminho crítico, ou mostrando ela pronta.**

---

## 4.6 ⏱ OS PRAZOS QUE PRECISAM SER REFEITOS

### O calendário apresentado na call, e por que ele morreu

| Marco | O que era | Estado |
|---|---|---|
| **10/10** | planejamento de campanha + roteiro | 🟡 **encurta** — roteiro de VSL para curso pronto é menos trabalho |
| **15 a 25/10** | janela de gravação dela (15 dias) | 🟡 **encurta** — só a VSL, **o curso não precisa mais ser gravado** |
| **11 a 15 / 20 a 30 (nov)** | produção e montagem | 🟡 recalcular |
| **Novembro** | entrega | 🟡 recalcular |
| 🔴 **10/12** | **início do tráfego** | 🔴 **MORREU.** Existia porque o curso tinha que ser construído |

> ## 🔴 A data de 10/12 é a causa de quase tudo que aconteceu nesta call.
>
> `[10:21:10]` *"a gente só vai ter essa resposta de validação **em dez de Dezembro**"* — **é a frase imediatamente anterior a *"eu tenho que validar o produto"***. **Ela não reagiu à VSL. Reagiu a esperar 85 dias para saber.**

### Os prazos que sobraram em aberto

| Prazo | Estado |
|---|---|
| 🔴 **Nova data de ativação** | **não existe.** Sua promessa: *"replanejo essa semana e combino contigo"* — **vence 21/09** |
| 🔴 **Fim da Assessoria corrente** | ⚠️ `[11:06:28]` *"Ela iria até Dezembro, até dia **dezoito de Dezembro, salvo engano**"* + pausa → `[11:06:56]` *"**Dia quinze de Janeiro**"*. **"Salvo engano" sobre a própria data de fim de contrato: conferir o instrumento, hoje** |
| 🔴 **Renovação** | adiada **sem data de retomada.** *"Mais para frente"* não é prazo |
| **4 encontros do bônus** | sem janela, sem frequência, sem expiração. E *"perene"* × *"3 primeiros meses"* se contradizem |
| **Verba de mídia** | **nunca teve prazo porque nunca teve número** |

---

## 4.7 PRÓXIMOS PASSOS — em ordem de quem destrava quem

| # | Passo | Por quê | Quando |
|---|---|---|---|
| **1** | ⭐⭐ **Entregar o calendário novo, curto, com a data de ativação em cima** | é a sua única promessa com prazo, **e é a resposta direta à causa da resistência dela.** Sem curso para gravar, a ativação anda muito para a esquerda | 🔴 **até 21/09** |
| **2** | ⭐⭐⭐ **Mostrar, não explicar** — o roteiro da VSL com as falas dela já dentro, ou um trecho gravado | **é a resposta ao *"não consigo visualizar eu fazendo"***, e nenhuma explicação a mais resolve isso | com o item 1 |
| **3** | 🔴 **Perguntar a verba e o teto de perda** | zero menções em 2h03. **Condição de recusa nº 2 do método** — sem isso não liga mídia | com o item 1 |
| **4** | **Conferir o contrato: 18/12 ou 15/01?** | você disse *"salvo engano"* sobre o fim do próprio contrato | hoje |
| **5** | **Enviar o PDF do funil de LinkedIn** | prometido *"daqui a pouco"* em `[11:06:17]` | se ainda não foi |
| **6** | **Fechar o inventário do produto novo** — curso × sistema × bônus, e o que **não** entra | `C-17`, `C-18`, `C-22`, `C-24` já são metade | antes do roteiro |
| **7** | **Resolver "perene" × "3 meses"** dos 4 encontros | vira promessa na página | antes do roteiro |
| **8** | **Trocar a senha do sistema** | credencial em claro no repositório | hoje |
| **9** | 🟡 **Reabrir a renovação como ciclo curto ligado ao teste** | ela recusou **comprimento**, não preço — e abriu a porta: *"vamos rodar essas VSLs"* | **depois do item 1 entregue**, não antes |

> ### 🔴 E a régua de conduta que sai desta call, para o item 9:
> **Não reabrir renovação antes de entregar o calendário novo.** Ela disse que decide depois de ver o caminho. **Cobrar antes de mostrar é pedir a fé que ela acabou de dizer que não tem.**

> ### ⭐ E a régua de conduta que sai do que funcionou:
> **O melhor resultado da call veio dos ~40 minutos em que ela explicou o produto dela e foi ouvida.** `[09:37:26]` diz o que ela compra: *"eu queria que ele me olhasse, pegasse o que eu tenho"*. **Na próxima call, a proporção de fala precisa repetir essa — e o conteúdo novo vai por escrito antes, não falado dentro.**

---

*Auditoria escrita em 17/09/2026, ampliada em 18/09 com as sete perguntas. Verificação mecânica independente rodada contra `TRANSCRIPT-LIMPO.md`. Nenhum canônico alterado nesta tarefa; a promoção do pacote é decisão do Victor, com as quatro ressalvas da Parte 1.*
