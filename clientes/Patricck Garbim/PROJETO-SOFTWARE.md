# PROJETO PRINCIPAL — Software de gestão de acolhimento

> **Tipo:** estado + registro (4 camadas, `CLAUDE.md` §11.1) · **Aberto em:** 09/10/2026 · **Alçada:** Victor
> 🔴 **Hierarquia da conta (Victor, 09/10/2026 09:04):** *"o projeto principal é a criação de um software… o projeto secundário é a assessoria de marketing para captação"*. A captação passou na frente na call de 08/10 por pedido do Patricck (*"colocar a carroça na frente dos cavalos"*, áudio 08/10 17:57:54) — **ordem de conversa não é ordem de importância.**
> Fontes: áudios de 06/10 e 08/10 em `01 - contexto/WhatsApp/` · prints do WhatsApp de 07/10 · site público do Instituto Abba Pai (lido em 09/10/2026). **O software não foi discutido na call de 08/10.** ⭐ **Foi o tema inteiro da call de 09/10 (09h47–10h27)** → `DESTILACAO-CALL-2026-10-09.md` (IDs `S-23` a `S-53`, riscos `R-09` a `R-17`).
> IDs `S-` são estáveis e citáveis, como os `C-` da destilação.

---

## 1. FATOS E NÚMEROS

### 1.1 Origem e partes

| ID | Fato | Fonte literal |
|---|---|---|
| **S-01** | Patricck trouxe o projeto e chamou Victor como parceiro técnico — *"na minha cabeça não veio uma outra pessoa para fazer esse projeto junto a mim que não seja você, até pelo conhecimento técnico"* | áudio 06/10 11:13:03 |
| **S-02** | Proposta dele: **fazer o projeto junto**; *"para a gente fazer uma análise e ver se você topa esse projeto comigo"* | idem |
| **S-03** | Victor topou em princípio: *"eu estou aberto aqui pra gente fazer esse projeto sim, Patrick, bora pra cima"* — e pediu call para *"escopo, datas, precificação"* | áudio Victor 06/10 14:17:46 |
| **S-04** | **Comprador:** uma unidade de acolhimento que procurou Patricck — **Instituto Abba Pai** (*"essa é a Instituição que quer o sistema próprio"*) | print 07/10 09:31 · `institutoabbapai.com.br` |
| **S-05** | Abba Pai, pelo site: **comunidade terapêutica masculina** em Ceilândia Norte, **Brasília/DF**, capacidade de **104 residentes**, acolhimento voluntário, base nos 12 Passos | site lido em 09/10/2026 |
| **S-06** | *"Eles trabalham 100% com recursos do governo"* | print 07/10 09:34 |
| **S-07** | Relação com a casa onde Patricck trabalha: *"essa unidade é do PAI do dono da unidade que eu trabalho"* · *"porem as unidades nao tem vinculo"* | print 07/10 09:34 |
| **S-07a** | Patricck pôs o software como prioridade: *"Hoje vamos falar desse projeto do sistema da abba pai. E mais pra frente vamos desembaraçando esses outros projetos que tenho, como tenho a expertise da area e voce a tecnologia e todo embasamento que converte, vai dar bom"* | print 07/10 09:50 |
| **S-08** | **Preço já acertado com o comprador** — *"ele já tem um valor de acercobrado"* `[transcrição incerta: "valor acertado/cobrado"]`. ~~O valor não nos foi informado.~~ ✅ **R$ 4.500**, cotado por Patricck há ~4 meses, ancorado no SaaS de R$ 130/mês (S-45, call 09/10 `[10:20:08]`) — se o comprador for o Abba Pai (R-17) | áudio 06/10 11:13:03 |

### 1.2 O problema que o software resolve

| ID | Fato | Fonte |
|---|---|---|
| **S-09** | Hoje o Instituto Casa do Pai e outras unidades do Brasil usam um **SaaS** de gestão desenvolvido pelo *"desafio, jovem"* `[transcrição incerta: Desafio Jovem]`, *"o maior grupo de acolhimento em território nacional"* | áudio 06/10 11:13:03 |
| **S-10** | 🔴 **Falha central: vazamento de dados entre unidades** — *"uma unidade tentiva de acesso a dados de outras, como informações dos acolhidos, telefones de responsáveis"* | idem |
| **S-11** | **Requisito do comprador: servidor interno, sistema exclusivo** — *"eles querem um servidor interno, tudo interno… o sistema é feito exclusivamente para eles, não um sistema onde a gente cria e libera um acesso"* | idem |
| **S-12** | Leitura técnica de Victor: software rodando em **VPS contratada em nome da instituição**, propriedade dela, **manutenção via SSH**; cybersecurity como requisito | áudio Victor 06/10 14:17:46 · print 07/10 09:55 *"cybersecurity é prioridade pra qualquer projeto então"* |

### 1.3 O que já existe

| ID | Fato | Fonte |
|---|---|---|
| **S-13** | Patricck **já fez um protótipo**, baseado no sistema atual, com vibe coding — e reconhece o limite: *"somente o conhecimento de VibeCode não vai suprir a demanda necessária"* | áudio 06/10 11:13:03 |
| **S-14** | Ele **mapeou o sistema atual** (front e back) e compartilhou o levantamento num documento do Claude: `claude.ai/artifact/DvokgVznf6d4Nh5J54A6h4` — *"um compilado de todas as funcionalidades, botei o claude pra mapear tudo, mas mesmo assim muita coisa é só visualizando mesmo"* | prints 07/10 09:18–09:19 e 19:08 |
| **S-15** | ✅ **Resolvido em 09/10:** o levantamento está em `PROJETO SISTEMA DE ACOLHIMENTO/Levantamento_Sys_CT_FINAL.pdf` (35 p., dados trocados por fictícios — S-26). ~~O documento não abre para nós (acesso negado em 09/10/2026).~~ Victor disse ter lido (*"sobre o artefato, finalizo a leitura e te passo o feedback"*, 07/10 09:57) — **o conteúdo não está no repositório** | tentativa de leitura 09/10 |
| **S-16** | Patricck deu a Victor **acesso a `sistema.ct.org.br`** com usuário de *"acesso irrestrito a tudo"*, alertando: *"Cuidado com os dados viu, são de pacientes que estao acolhidos no momento… dados ultra hiper mega sensiveis"* | prints 07/10 19:03–19:04 |
| **S-17** | Victor: *"olhei o sistema por dentro.. muito bom · tenho algumas perguntas pra você · faço na call"* | prints 07/10 22:13 |

### 1.4 Requisitos funcionais já ditos (lista viva — completar com o levantamento S-14)

| ID | Requisito | Fonte |
|---|---|---|
| **S-18** | Aba **Acolhidos** lista **só quem está acolhido no momento** | prints 07/10 19:05–19:06 |
| **S-19** | **Desligado não aparece na lista, mas aparece na busca por nome** — a ficha fica no banco (*"é uma funcionalidade que devemos ter no que vamos criar"*) | idem |
| **S-20** | **Prontuário e dados de desligados são consultados depois** — *"para justiça, processos e etc"* → retenção e exportação são requisito | print 07/10 19:07 |
| **S-21** | **Contador de internações por acolhido** no canto da linha (ex.: *"2"* = segunda internação nesta unidade) | prints 07/10 19:07–19:08 |
| **S-22** | **Isolamento total de dados** — é a razão de existir do projeto (S-10, S-11) | — |

### 1.4-bis Requisitos e estado do protótipo — call de 09/10/2026

O protótipo **roda** (Laravel 12 + PostgreSQL, toda tabela com `ct_id`), feito por Patricck em etapas, e foi demonstrado ao lado do Sys CT (S-23 a S-25). **A pasta recebida em `PROJETO SISTEMA DE ACOLHIMENTO/` é só a casca** — o código vem pelo Drive (S-27). Requisitos novos, com citação: **S-28 a S-42** na destilação — visual totalmente diferente do Sys CT (plágio), fluxo igual e navegação livre, documentos de identificação opcionais (passaporte para estrangeiros sem CPF), Lista de Interesse funcional, **exclusão definitiva** (🔴 R-11), busca ao digitar, cada profissional no seu quadrado, só o técnico acolhe, trilha de auditoria visível ao Administrador, leitos editáveis pela unidade, backup contínuo, cantina com comprovante e saldo. **Fora agora:** Tickets e Financeiro — que voltam se o sistema virar produto multi-CT (S-41).

### 1.5 Comercial — 🔴 quase tudo em aberto

| O que não sabemos | Por que decide |
|---|---|
| ~~O valor acertado com o Abba Pai (S-08)~~ ✅ **R$ 4.500** (S-45) | 🔴 como obra, **não fecha**: estimativa do próprio Victor de ~R$ 10 mil só de token (S-48, R-09) |
| 🔴 **Quem é o comprador** — Abba Pai (S-04) ou Casa do Pai (onde foram feitos levantamento e protótipo)? (R-17) | contrato, nota, VPS e controlador dos dados |
| 🔴 **Propriedade do código** — dito três vezes *"é deles"* (S-47), e Victor quer vender a outras unidades com recorrência (S-49) | sem licença (código nosso, instância e dados deles) não existe produto — R-10 · DEC-PG-12 |
| **Quem contrata e quem fatura** — a Continuum **não tem CNPJ** (`CLAUDE.md` §1) e a instituição trabalha com **recurso público** (S-06), que costuma exigir nota fiscal e, às vezes, processo de compra | pode ser o bloqueio número um do projeto inteiro |
| **Divisão entre Patricck e Victor** — parceria, subcontratação ou Patricck como intermediário comissionado? | define quem é o nosso cliente |
| **Escopo:** paridade com o sistema atual? só o que o Abba Pai usa? migração dos dados do sistema atual? | decide horas, prazo e risco |
| **Prazo** esperado pelo comprador | idem |
| **Manutenção mensal** depois da entrega — inclusa, cobrada à parte, de quem? | é a única receita recorrente do projeto |
| **Quem paga a VPS** e em nome de quem fica | S-12 |
| **Se o Abba Pai é uma das 4 unidades de Brasília** da captação (C-15) | conflito ou sinergia entre os dois projetos |

## 2. DECISÕES E O PORQUÊ

Em `DECISOES.md`: **DEC-PG-01** (hierarquia dos projetos) · **DEC-PG-07** (nenhum dado de acolhido no repositório) · **DEC-PG-10** (o sistema atual é referência funcional, não molde) · **DEC-PG-11** (nada se constrói antes de valor, contratante, faturamento e acordo de dados — **atualizada em 09/10: auditoria do protótipo liberada, ajuste de código não**) · **DEC-PG-12** 🟡 (licença, não cessão) · **DEC-PG-13** 🟡 (exclusão definitiva só sem registro clínico) · **DEC-PG-14** (base de 1.500 fora de prospecção até a origem estar clara).

## 3. TOM E CONDUTA

- ⭐ **Ele é quem constrói** (call 09/10): especificação de 35 páginas, etapas, teste manual. O nosso papel é o que vibe code não cobre — segurança, isolamento, auditoria, design (S-13). **Não chamar o trabalho de "fácil"** (L-10): é a parte barata de fazer e cara de errar, e a divisão ainda não existe.
- **Patricck é parceiro e cliente ao mesmo tempo** neste projeto, e é ele quem fala com o comprador. **Não falar com o Abba Pai sem ele** até a divisão estar escrita.
- Ele já investiu: protótipo, mapeamento, levantamento. **Reconhecer o trabalho dele é verdade e é estratégico** — ele sabe que vibe code não basta (S-13) e chamou Victor por isso.
- **Dados de paciente:** o próprio Patricck abriu o assunto com cuidado. Responder no mesmo nível — Victor não navega fichas além do necessário para entender a funcionalidade, e diz isso a ele.
- Ele se descreve como quem *"deixou de ser mestre de obras inacabadas"* e *"toca uma coisa de cada vez"* (prints 07/10 09:50): **um projeto não pode afogar o outro.** Os dois correm com donos e datas separados.

## 4. MENSAGENS LITERAIS

Íntegras dos áudios em `01 - contexto/WhatsApp/`: `2026-10-06 at 11.13.03` (apresentação do projeto), `2026-10-06 at 14.15.40 - victor` e `14.17.46 - victor` (aceite e leitura técnica), `2026-10-08 at 17.57.54` (*"tem que tratar esse assunto aí da questão do desenvolvimento do sistema… a call a gente for fazer a gente resolve isso daí"*). Mensagens de texto de 07/10 transcritas acima com hora.

## 5. PRÓXIMO PASSO E DONO *(atualizado 09/10/2026, após a call das 09h47)*

| # | O quê | Dono | Quando |
|---|---|---|---|
| 1 | **Antes do upload:** mandar a mensagem da `DESTILACAO-CALL-2026-10-09.md` ("Próxima mensagem") — comprador nominal, licença × cessão, divisão, e upload **sem `.env` e sem dado real** | Victor | hoje |
| 2 | Decidir **DEC-PG-12** (licença) e **DEC-PG-13** (exclusão) | Victor | antes do item 4 |
| 3 | Subir o código no Drive | Patricck | quando fechar a sessão |
| 4 | **Auditoria do código** (só leitura): isolamento por `ct_id` e por perfil, autoria (não assinar como outro), trilha de auditoria, exclusão × guarda, segredos, divergência `CLAUDE.md` × `AGENTS.md` do protótipo, rastro de derivação do Sys CT (R-15) → relatório para Victor devolver ao Patricck | Claude + Victor | depois do item 3 |
| 5 | Retirar `PROJETO SISTEMA DE ACOLHIMENTO/env` da Governança (R-13) | Victor | hoje |
| 6 | Com comprador, propriedade e divisão: **NEGÓCIO** (âncora: R$ 4.500 não paga obra — só paga como 1º cliente de produto) → **JURÍDICO** (contrato + licença + acordo de dados) → só então ajuste de código e infra | Claude + Victor | depois dos itens 1–2 |
