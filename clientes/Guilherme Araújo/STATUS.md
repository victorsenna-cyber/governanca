# STATUS.md — ESTADO CONSOLIDADO

> STATUS: VIGENTE · estado operacional
> Baseline estrutural verificado em: 2026-07-19T00:56:47-03:00
> Integração do Codex em: 2026-10-02 · escopo: pacotes de 29/09 a 02/10 (ver seção própria abaixo); estado de mídia da conta **não revalidado nesta data**
> Atualização parcial anterior em: 2026-10-01 (mantida, não revogada) · escopo: destilação do WhatsApp de 19/09 a 01/10, duas linhas de produto, conta parada, criativos e quiz do Diagnóstico. Anterior: 2026-09-05 · escopo: verificação da conta, diagnóstico de fadiga do criativo do topo e criação da camada 2 em pausa; demais domínios não foram revalidados

## Atualização de estado — integração do trabalho do Codex (29/09 a 02/10), 02/10/2026

Rito: `40-operacao-rotinas/RITO-INTEGRACAO-CODEX.md`. Fonte: pacotes em `execução Codex/` desta conta e linhas do Guilherme em `execução Codex/STATUS-CODEX.md` §2 (raiz). **Pacote do Codex é proposta; nada abaixo vira aprovado por constar aqui.** Mutações externas nesta sessão: nenhuma.

### O que subiu como fato (com fonte)

| Fato | Fonte | Limite |
|---|---|---|
| Diagnóstica da Permissão **ativa** e Desafio 28 Dias com **checkout ativo** | declaração de Victor em 29/09, via `PLANO-CRIATIVOS-BOFU-...-2026-09-29.md` §1 e §10 | URL e conteúdo do checkout **não verificados** |
| Desafio: R$ 997 · 28 dias · 4 encontros em grupo + 1 atendimento individual | descrição do Guilherme em 19/09 (`chat.txt`, linhas 15–31), via PLANO §1 | calendário, formato, atividades entre encontros, vagas, parcelamento e política de entrada **sem fonte**; as cartas de 09/09 citam 5 encontros e parcelamento, **não promovidos** |
| Diagnóstica, condições de 01/10: 2h · mapeamento + passo a passo · R$ 97 · Elton Euler só como "mesmos princípios" | `DECISOES.md` **DEC-2026-10-01-001** (fonte `REVISAO-...-2026-10-01.md` §8.1) | divergência com "mapa mental depois da sessão" (atualização de 01/10) **aberta** |
| Arte de referência de 04/09 (nome, R$ 97,00, "em apenas 2h destravo", "o mesmo Método do Elton Euler"): faixa 4 palavras · principal 18 · CTA 7 · preço 1 token | `ANALISE-VOLUME-CRIATIVO-DIAGNOSTICA-2026-09-30.md` §2 (contagem aferível) | é redação **histórica**; as duas formulações acima ficam vedadas pela DEC-2026-10-01-001 |
| Dois quizzes (Permissão: 24 telas/16 perguntas; Signos: 16 telas/10 perguntas), motor único, Apps Script e 120 capturas **construídos localmente**; errata §17 (E1–E6, rota ALTO T19→T23) aplicada em 02/10 | `quizzes-2026-10-02/RELATORIO.md` | aceite de 22 itens: **16 passaram · 2 falharam · 4 não testados** (falharam: fluxo até o checkout do Signos e os 12 destinos reais, por 4 checkouts vazios; não testados: comparação visual integral, componentes ausentes na referência, Apps Script em planilha Google real, gravação real). **Sem publicação, deploy, integração Google ou Pixel** |
| Configurações vazias dos quizzes | `RELATORIO.md` "Configurações vazias" e "COPY PENDENTE" | `apps_script_url`, `pixel_id`, dados legais, termos/privacidade, `imagem_mapa`; no Signos: 4 checkouts, preço, apoio do preço, resposta de cancelamento, descrições por elemento |

### Entregue pelo Codex, pendente de aprovação (PROPOSTA — NÃO VIGENTE)

| Pacote | O que é | Por que não sobe como aprovado |
|---|---|---|
| `PLANO-CRIATIVOS-BOFU-DIAGNOSTICA-E-DESAFIO-2026-09-29.md` | blueprint de 8 conceitos BOFU em duas trilhas (C Desafio, D Diagnóstica), guias de gravação, taxonomia, gate de saída por peça | o próprio plano declara **copy final bloqueada por insumo**; nenhuma peça publicada, nenhuma mídia ativada |
| `COPYS-ESTATICOS-DIAGNOSTICA-2026-10-01.md` | seis copys (D-A01 a D-C02, três ângulos) no volume da arte de referência | **superada em parte** pela `REVISAO-...-2026-10-01.md`, que apontou que o lote removeu promessa e mecanismo em vez de calibrá-los, e trouxe o lote final §8.3 (também pendente de diagramação e aprovação). Usa a exceção do portão que o Codex **interpretou** da ordem de Victor de 01/10 (*"agora faça com base nesse tamanho, usando os métodos do repo"*): interpretação do Codex, **não confirmada como decisão**; vale, no máximo, para aquele lote |
| `ANALISE-VOLUME-CRIATIVO-...-2026-09-30.md` (parte de recomendação) | orçamento de variações por bloco | proposta; só a contagem é fato |
| `quizzes-2026-10-02/` | produto web local (acima) | construção com aceite parcial; destino proposto é a área web do cliente, após as pendências |

### Dado pessoal — lista de e-mails de leads

`execução Codex/emails-leads-meta-2026-09-29.txt`: **existe**, 3.557 linhas (um e-mail por linha), SHA-256 `37ad5c0f…23d561`, extraída de 14 arquivos CSV/XLSX; **uso previsto: Victor subir como público na Meta** (não foi enviada nesta tarefa). **Endereços não foram copiados para nenhum outro arquivo.** 🔴 **Contradição com a atualização de 01/10 (linha "lista de leads de terceiro"):** ali a lista é **"NÃO SUBIR"**, 3.096 e-mails + 460 @, de pessoas que se aplicaram a processos de outra pessoa, **autorização não confirmada**. Os números não batem (3.557 × 3.096) e **não se sabe se é a mesma base**. A vedação de 01/10 **permanece** até Victor confirmar origem e autorização; esta integração não a levanta.

> **Atualização 05/10/2026:** Victor informou que o Guilherme **autorizou** o uso desta lista. A vedação "NÃO SUBIR" de 01/10 está levantada por decisão do cliente. A contradição de números apontada acima não existe: é o mesmo arquivo (3.096 e-mails + 460 @ de Instagram = 3.556, mais uma linha). A subida para a Meta continua sendo ação do Victor e não foi feita. Só os e-mails servem como identificador de público; os @ não entram.

### Estado dos portões de peça ao público (`00-core/roteador/ARVORE-ESCRITA.md`)

- `PILARES.md` da conta: **inexistente**. `CRIATIVOS/01_PILARES.md` é orientação criativa histórica de outra oferta e não substitui o teste P1/P4. **Portão não passado.**
- `lexico-icp/`: **inexistente**, logo **sem fonte de grau D**. A fala do Guilherme sobre compradores não é fala de compradora. **Portão não passado.**
- **Consequência:** nenhuma copy, criativo, roteiro ou quiz para o público desta conta é **aprovável** hoje. O lote de 01/10 só existe por exceção declarada e não confirmada. Volta para CONTA antes de qualquer aprovação.

### Pendências de alçada (Victor)

1. ~~Origem e autorização da lista de leads~~ Resolvido em 05/10/2026: autorizado pelo Guilherme. Subida à Meta liberada, a cargo do Victor.
2. Confirmar ou negar a exceção do portão para o lote de seis copys, e se vale para o lote final §8.3.
3. Rodar a CONTA (teste de pilares P1/P4 e léxico ICP com fonte D) antes de aprovar peça ao público.
4. Conciliar "mapa mental depois da sessão" × "mapeamento + passo a passo" com o Guilherme.
5. Preço, apoio do preço e política de cancelamento do grupo de Signos, e os 4 checkouts, para fechar os quizzes; decidir se quizzes sobem e quando.
6. Verificar URL e condições do checkout do Desafio e a Diagnóstica ativa antes de qualquer destino de mídia.

### Fora desta integração, e por quê

`execução Codex/metodos/METODO-EIXOS-DE-VARIACAO-DE-CRIATIVOS.md` é método de governança geral, não desta conta: segue pendente na fila raiz. `REVISAO-...` e `CRIATIVOS-DIAGNOSTICO-COMPRA-E-QUIZ-...-2026-10-01.md` já eram citados na atualização de 01/10 e não são trabalho do Codex.

## Atualização de estado — duas linhas de produto e conta parada, 01/10/2026

Fonte: `DESTILACAO-WHATSAPP-2026-09-19-A-10-01.md` (62 áudios transcritos + capturas) e leitura da conta `605257748612701` em 01/10.

| Componente | Estado em 01/10/2026 | Evidência / limite |
|---|---|---|
| **arquitetura de produto** | **duas linhas**: SIGNOS (público geral) e PERMISSÃO (terapeutas, mentoras, cartomantes) | áudios do Guilherme de 19/09; Signos alimenta Permissão |
| linha SIGNOS · Grupo de Conselho Semanal por elemento | 4 grupos no WhatsApp e 4 produtos na PagTrust criados em 19/09 | preço **não fechado**: R$ 97/mês, trimestral R$ 297 ou semestral R$ 497 |
| linha PERMISSÃO · Diagnóstico da Permissão | R$ 97 · sessão de 2h · **mapa mental entregue depois da sessão** | confirmado pelo Guilherme em 01/10 19:14 |
| escada da Permissão | Desafio R$ 997 · Jornada R$ 2.997 · Mentoria R$ 5.000 | texto do Guilherme de 19/09 |
| conta de anúncios | **nenhuma campanha ativa · zero gasto em 14 dias** | pausa de 22/09 foi a pedido do Guilherme, por pagamento pendente; R$ 276,45 quitados em 24/09 |
| pedido de ativação do Guilherme (22–23/09) | **não executado há 9 dias** | Reel `DZu9VpARUsE` + estáticos do Diagnóstico + 5 vídeos por elemento |
| criativos do Diagnóstico | 6 variações de compra direta e 6 de quiz prontas | `execução Codex/CRIATIVOS-DIAGNOSTICO-COMPRA-E-QUIZ-2026-10-01.md`; V6 corrigida na destilação §8 |
| quiz da Permissão | plano e paralelo prontos; não construído | `03 - ofertas e funis/QUIZ-PERMISSAO-PLANO-E-PARALELO-2026-10-01.md` |
| **lista de leads de terceiro** | ~~NÃO SUBIR~~ **AUTORIZADO pelo Guilherme em 05/10/2026 (informado pelo Victor)** · 3.096 e-mails + 460 @ | origem: pessoas que se aplicaram a processos de outra pessoa; autorização do Guilherme confirmada em 05/10 |
| fila do DESPERTAR | 236 comentários sem entrega verificada | nenhuma menção em duas semanas de conversa |
| `PLANO-DE-MIDIA.md` e `PLANO-MIDIA-3-CAMADAS` | **superados** | foram escritos para uma linha só, ticket R$ 497, venda por call |

**Gargalo dominante:** deixou de ser criativo. É **decisão** — preço do grupo, divisão de verba entre as duas linhas e a autorização da lista — e **capacidade de entrega** do Guilherme, que agora soma doze signos por semana a tudo que já fazia.

## Atualização de estado — conta de anúncios verificada, 29/08/2026

Leitura direta da conta `605257748612701` via conector Meta Ads. Fonte: `06 - mídia paga/AUDITORIA-BRIEFING-REELS-2026-08-29.md`.

| Componente | Estado em 29/08/2026 | Evidência / limite |
|---|---|---|
| `GA\|TOFU\|FORMACAO\|ENGAJAMENTO\|DESPERTAR\|20260826` | **ATIVA** desde 26/08 18h43 · R$ 15,00/dia · R$ 37,75 gastos | campanha `120254917323250210`, conjunto `120254917323260210` |
| entrega prometida do áudio `Decreto de Ativação Sistêmica` | **NÃO VERIFICADA** · há **62 comentários** aguardando | gate duro de `MODUS-OPERANDI.md` §3.3; decidir entre entregar ou pausar |
| desempenho do Reel `DYDbEN6hCYU` | CTR **7,74%** · CPM **R$ 3,29** · alcance 8.950 · freq 1,28 | segundo melhor CTR e menor CPM já registrados na conta |
| custo por comentário | **R$ 0,61** | primeiro benchmark real de intenção declarada desta conta |
| avanço comentário → DM → conversa | **sem registro** | sem essa camada, R$ 0,61 é custo, não resultado |
| `GA\|TOFU\|IG\|TRAFEGO-PERFIL\|LOOKALIKE\|20260818` | **PAUSED** · R$ 20,00/dia · R$ 0,00 gastos | `120254780918080210`; trio lookalike íntegro; reutilizável para o Reel `DYS-lPOBu4a` |
| demais campanhas da conta | todas pausadas | 16 campanhas listadas; nenhuma outra ativa |
| teto de R$ 25,00/dia | respeitado · R$ 15,00/dia ativos | folga de R$ 10,00/dia |
| conector nativo de Ads Manager | **acessível e operante para leitura e escrita** | **corrige o registro de 26/08**, que o dava como indisponível; Chrome deixa de ser a única rota |
| briefing de Reels dirigidos de 29/08 | `PROPOSTA — NÃO VIGENTE` | executável após as três correções da §8 da auditoria |
| mutações externas nesta verificação | nenhuma | somente leitura |

**Gargalo dominante desta frente:** a fila de 62 comentários sem entrega confirmada. Enquanto a campanha roda sem a entrega operando, cada dia de verba aumenta uma dívida de promessa.

### Execução de 29/08 — orçamentos, marca `HG` e Pixel

Instrução de Victor: *"suba e ative as campanhas"*. Registro completo em `06 - mídia paga/SUBIDA-ONDA2-20260829.md`.

| Componente | Estado após a execução |
|---|---|
| `GA\|HG\|TOFU\|FORMACAO\|ENGAJAMENTO\|DESPERTAR\|20260826` | ACTIVE · **R$ 10,00/dia** (era R$ 15,00) |
| `GA\|HG\|TOFU\|IG\|TRAFEGO-PERFIL\|IMATURA-MADURA\|20260829` | PAUSED · **R$ 15,00/dia** (era R$ 20,00) · estrutura de 18/08 **reutilizada**, não duplicada |
| soma ativa | R$ 10,00/dia · teto de R$ 25,00 respeitado |
| marca de hipótese | `HG` aplicada nas duas campanhas e no conjunto de tráfego, conforme `MODUS-OPERANDI.md` §4 |
| anúncio de tráfego | **não criado**: o Reel `DYS-lPOBu4a` do briefing não existe entre os 100 Reels do perfil de 18/06 a 28/08 nem nos rascunhos |
| alternativa disponível | rascunho de 26/08 no conjunto de tráfego já traz `18120166222797244` ("Vc tem permissão de transformar vidas?", `#terapeuta`) e `18113387758939644` |
| **Pixel** | **`1259363302489132`** encontrado nos rascunhos · resolve parte de `H-01`; eventos, CAPI e EMQ **não** validados |
| Página / Instagram actor | `103620069213113` / `5527080837359669` confirmados |
| gasto causado pela execução | R$ 0,00 |

**Gargalo permanece o mesmo:** os 62 comentários sem entrega confirmada. A redução para R$ 10,00/dia desacelera a fila; não a resolve.

## Atualização de estado — verificação da conta e fadiga do topo, 05/09/2026

Leitura direta da conta `605257748612701`. Fontes: `06 - mídia paga/DIAGNOSTICO-FADIGA-TOPO-2026-09-05.md` e `06 - mídia paga/SUBIDA-ONDA3-20260905.md`.

| Componente | Estado em 05/09/2026 | Evidência / limite |
|---|---|---|
| `GA\|HG\|TOFU\|...\|DESPERTAR\|20260826` | **ATIVA** · R$ 10,00/dia · **R$ 101,67** gastos | campanha `120254917323250210`, conjunto `120254917323260210` |
| **fila do áudio `Decreto de Ativação Sistêmica`** | **139 comentários** aguardando · **era 62 em 29/08** | gate duro `MODUS-OPERANDI.md` §3.3 · **mais que dobrou em 7 dias** |
| custo por comentário · **média** | R$ 0,73 | ainda dentro do teto de R$ 0,80 |
| custo por comentário · **marginal 01–04/09** | **R$ 1,13** | **41% acima do teto** · 4 dias seguidos |
| CTR | **5,14%** em 01–04/09 · era 8,03% em 27–29/08 | queda de 36% |
| CPM | **R$ 3,24 nos dois blocos** | idêntico: descarta leilão e sazonalidade |
| frequência diária | 1,00 a 1,06 | descarta saturação por repetição |
| **diagnóstico** | **fadiga de criativo** — a peça acabou, não piorou | `AP-05` e `AP-06` no `LOG-DECISOES.md` |
| `GA\|HC\|MOFU\|ENGAJAMENTO-QUENTE\|COMENTARIO\|20260905` | **CRIADA em pausa** · R$ 8,00/dia · sem anúncio | campanha `120255058867030210`, conjunto `120255058867860210` |
| público **Vídeo View 50% — campanha 08/2026** | **4.600 a 5.400 pessoas** · criado em 04/09 | `120255056249220210` · não constava do inventário do plano de 04/09 |
| `GA\|HG\|TOFU\|IG\|TRAFEGO-PERFIL\|IMATURA-MADURA\|20260829` | PAUSED · R$ 15,00/dia · sem anúncio | `120254780918080210` · inalterada |
| teto de R$ 25,00/dia | respeitado · R$ 10,00/dia ativos | folga de R$ 15,00/dia |
| subida do topo para R$ 25 | **NÃO executada** · `LD-015` revoga `LD-R04` | a premissa de custo que a sustentava caiu |
| mutações externas nesta sessão | **2 criações em pausa** · gasto R$ 0,00 | nenhuma ativação, nenhuma verba alterada |

**Gargalo dominante desta frente, agora com dois nomes.** A fila de 139 comentários sem entrega confirmada continua sendo o primeiro. O segundo é a peça do topo, que chegou ao fim do ciclo: a alavanca deixou de ser verba e passou a ser **rotação de criativo**.

**A ordem importa.** Trocar a peça antes de entregar o que a peça anterior prometeu só troca a fila de lugar.

## Atualização de estado — oferta do Grupo e acesso Meta Ads, 26/08/2026

Direção humana registrada como `DEC-2026-08-26-002` e evidência consolidada em `01 - contexto/evidencias/CONFIRMACAO-OFERTA-E-ACESSO-META-2026-08-26.md`.

| Componente | Estado em 26/08/2026 | Evidência / limite |
|---|---|---|
| Grupo — plano semestral | **R$ 497 · VIGENTE** | resolve a divergência R$ 497 × R$ 500 apenas para o Grupo |
| Grupo — encontro | **terça-feira, às 20h · VIGENTE** | 19h30 fica superado para peças e planos futuros |
| entrada comercial | **call de vendas** | lista/comentário abre o processo; não equivale a matrícula |
| capacidade | relativamente limitada pela agenda de calls e admissão | teto numérico de calls/vagas continua não documentado |
| escassez permitida | capacidade limitada do processo de entrada | “garantir sua vaga” continua vedado sem reserva/admissão efetiva |
| acesso Meta Ads | autenticado; portfólio `terapeutaguilhermearaujo` e conta `CA 01` acessíveis; controle `Criar` habilitado | verificação somente leitura no Chrome |
| conector nativo de Ads Manager | nenhuma conta acessível retornada | não usar como rota de execução até vinculação; Chrome é a rota disponível |
| rascunhos existentes | **3 alterações** aguardando revisão/publicação | autoria e conteúdo não auditados; não descartar nem publicar sem revisão |
| não revalidado | Pixel/eventos, cobrança atual, identidades conectadas e conteúdo dos rascunhos | permanecem gates de pré-subida |
| mutações externas nesta tarefa | nenhuma | nenhuma campanha, anúncio, verba, público, rascunho ou publicação foi alterado |

**Leitura operacional:** o acesso pelo Chrome não bloqueia a subida; o conector nativo ainda não está vinculado. O próximo gate é revisar os três rascunhos existentes e validar Pixel/evento aplicável, cobrança, identidade, ativo, campanha/objetivo, público, geografia, orçamento e teto antes de criar ou publicar.

## Atualização de estado — exceção operacional Guilherme, 26/08/2026

Direção humana registrada como `DEC-2026-08-26-001`: pedidos avulsos de anúncios originados por Guilherme passam para uma trilha de execução dirigida e deixam de travar por divergência com a estratégia recomendada pela Continuum.

| Componente | Estado em 26/08/2026 | Evidência / regra |
|---|---|---|
| relação comercial | exceção: pagamento informado de R$ 110 + indicações; não equivale à Assessoria Completa | `MODUS-OPERANDI.md` §1 e §5 |
| estratégia recomendada | preservada como `ESTRATEGIA-CONTINUUM`; a arquitetura da call atribuída a 04/08 e `DEC-2026-08-18-001` não foram apagadas | não entra automaticamente em cada pedido avulso |
| modo padrão para pedido do Guilherme | `EXECUCAO-DIRIGIDA-GUILHERME`: camada operacional de gestor de tráfego júnior | hipótese e responsabilidade estratégica registradas como Guilherme |
| divergência estratégica | registrar uma vez; não bloquear nem reabrir o planejamento | gates duros permanecem |
| alçada de Guilherme | escolher ativo e solicitar criação/publicação dentro de campanha, objetivo, público, geografia, orçamento e teto já aprovados por Victor | `subir` sem ativação expressa = `PAUSED` |
| alçada de Victor | campanha/objetivo novo, verba/teto, público, geografia, destino, oferta, promessa, fluxo e ampliação de escopo | `CLAUDE.md` §8 + `SCOPE.md` |
| evidência atual | conversa WhatsApp preservada e hasheada | `01 - contexto/evidencias/WHATSAPP-2026-08-26-AJUSTE-MODO-OPERACIONAL.png` |
| mutações externas nesta tarefa | nenhuma | nenhum anúncio, campanha, verba, público ou conta foi alterado |

**Gargalo removido:** divergência entre a solicitação de Guilherme e o plano Continuum não é mais motivo para paralisar a execução. **Fronteira preservada:** fluidez operacional não converte R$ 110 e indicações em direito ao serviço integral.

## Atualização de estado — funil Instagram e carrosséis, 18/08/2026

Direção humana registrada como `DEC-2026-08-18-001`: três campanhas conectadas por função, reconhecimento de marca, tráfego para o perfil e engajamento com comentário para Direct e social selling.

| Componente | Estado em 18/08/2026 | Evidência / gate |
|---|---|---|
| briefing de campanhas | concluído localmente, sem subida | `06 - mídia paga/BRIEFING-CAMPANHAS-FUNIL-INSTAGRAM-2026-08-18.md` |
| carrosséis por consciência | 8 copies + spec autossuficiente; `C01` a `C06` produzidos localmente, total de 48 cards e 6 pranchas; direção vigente em grade calculada 6 x 8, sem grafismo abstrato | `05 - design e criativos/carrosseis-campanha-2026-08-18/`; PNGs validados em 1080 x 1350; `C07` e `C08` seguem condicionados |
| post Pesquisa Terapeuta | auditado; **não promover como está**; reposicionado para a campanha de engajamento | `05 - design e criativos/post Pesquisa Terapêuta/AUDITORIA-E-ITERACAO-2026-08-18.md` |
| palavra-chave | proposta: `MAPA` | exige entrega correspondente no Direct |
| presente | proposta: Mapa Breve da Permissão Sistêmica para Terapeutas | ainda precisa existir, ser aprovado e testado |
| orçamento | último registro: R$ 20/dia e cap de R$ 600; atualidade não revalidada | não fracionar automaticamente entre três campanhas |
| geografia | Brasil × Santa Catarina permanece dependente de decisão atual | campanha anterior não torna a escolha automaticamente vigente |
| consentimento | comentário autoriza a entrega prometida, não sequência comercial ilimitada | devolutiva, pesquisa e call exigem informação e permissão coerentes |
| mutações externas | nenhuma | nenhuma campanha, anúncio, verba, publicação ou mensagem alterada |

**Gargalo dominante desta frente:** presente + Direct + mensuração precisam estar operáveis antes de comprar comentário. Sem essa camada, a mídia só compra trabalho manual não rastreado.

## Atualização de estado — call estratégica atribuída a 04/08/2026

Fonte primária destilada em `DESTILACAO-CALL-2026-08-04.md`: 1h00min24s, 451 turnos e 58 pontos com ID estável. A data é **A VALIDAR** porque foi inferida do carimbo do arquivo e não é dita na gravação.

| Componente | Estado em 18/08/2026 | Evidência / gate |
|---|---|---|
| ICP de aquisição | direção registrada: terapeutas, principalmente sistêmicas; cartomantes e pessoas com vínculo forte em autoconhecimento/espiritualidade como adjacências | `C-29` a `C-33`; atualidade a revalidar antes de campanha nova |
| arquitetura de captação | quiz → resultado simples → formulário → devolutiva, com página de captura como controle | `C-21` a `C-28`; decisão registrada, execução não verificada |
| amostra do formulário | `n=4`, todas pediram devolutiva | `C-02` e `C-03`; amostra insuficiente para projeção |
| preços | Grupo semestral resolvido em **R$ 497**; provável R$ 1.997 × R$ 2.997 na Jornada continua aberta | `DEC-2026-08-26-002`; `C-06`, `P-GA-05` ainda dependem de Guilherme |
| horário do Grupo | **terça-feira, às 20h** | `DEC-2026-08-26-002`; 19h30 fica histórico/superado |
| entrada no Grupo | processo comercial por call de vendas; capacidade relativa da agenda de calls | permite escassez de processo, não promessa de vaga garantida |
| crédito do Desafio | R$ 1.000 de desconto/cashback foi dito na call | `C-08`; condição, prazo e cumulatividade não documentados |
| capacidade da Jornada | não discutida | `P-GA-07`; bloqueia escala, não a leitura |
| dados e consentimento | o formulário permite recusar devolutiva, mas a fala cogitou contato “de qualquer forma” | `C-24`, `R-03`; contato de quem recusou fica vedado sem outra base legítima |
| entregas prometidas | 2 páginas, sistema de criativos, curadoria/transcrição e extrações | `C-56` a `C-58`; sem prazo e sem execução verificada |
| mutações externas | nenhuma nesta tarefa | sem campanha, verba, publicação, integração ou mensagem |

**Gargalo dominante desta frente:** não é produção. Para o Grupo, preço, horário e mecanismo de entrada foram fechados; faltam teto numérico de calls/vagas e os gates de mídia. Para a Jornada, oferta/capacidade, consentimento e o experimento mínimo continuam abertos.

## Estado da iteração do repositório

| Componente | Estado | Evidência |
|---|---|---|
| Gate 1 — inventário e proteção | concluído e aprovado | inventários em `09 - operação/inventarios/` |
| Fase 2 — kernel aditivo | concluída; Gate 2 aprovado pelo executor | teste e handoff em `09 - operação/` |
| réplica de Governança | 14/14 arquivos com paridade byte a byte confirmada | `00 - governança continuum/MANIFESTO-SYNC.md` |
| acervo operacional legado | preservado nos caminhos originais | manifesto Gate 1 + mapa de migração |
| páginas, copy, funis e criativos | não iterados | diretriz humana de 2026-07-19 |
| skills locais | nenhuma criada/adaptada | política de generalização em `07 - skills/README.md` |
| migração física | não iniciada | 39/39 diretórios legados preservados |
| mutações externas | nenhuma | escopo da task |

## Estado por domínio

| Domínio | Caminho atual | Estado de autoridade |
|---|---|---|
| contexto/ecossistema | arquivos raiz e fontes catalogadas | `A VALIDAR` para canonização |
| produtos/ofertas/funis | `Cartomancia Sistêmica/`, `FUNIL_CONSTELACAO/`, `ESTEIRA_JORNADA_CONSTELACAO/` e documentos raiz | múltiplas fontes; `A VALIDAR` |
| páginas | `Páginas de vendas/`, `páginas script de vendas/` e workspaces relacionados | versão vigente `A VALIDAR` |
| criativos | `CRIATIVOS/` e `01 - Criativos/` | acervo catalogado; autoridade interna `A VALIDAR` |
| mídia paga | `meta-ads/` e skill legada | estado atual e Pixel `A VALIDAR` |
| dashboard | `00 - Governança/index.html` | classificado como dashboard legado; fonte de dados `A VALIDAR` |
| fontes brutas | PDFs, aulas, mapas, insights e provas | evidência preservada; não editar |

## Decisões humanas ainda abertas

- H-01 — acesso à conta Meta Ads resolvido em 26/08/2026; Pixel/eventos, cobrança e identidades conectadas ainda exigem verificação na conta.
- H-02 — página vigente por produto: Victor/Continuum.
- H-03 — Grupo: R$ 497/semestre e terça às 20h resolvidos; demais nomes, preços, formatos, entregas e teto de calls/vagas: Guilherme.
- H-04 — estado da esteira e do funil CORE: Guilherme + Continuum.
- H-05 — uso e fonte do dashboard: Victor/Continuum.
- H-06 — ações antigas de mídia executadas fora do repositório: Victor/Continuum.
- H-07 — autoria real dos materiais de voz: Guilherme/Continuum.

Essas lacunas não bloqueiam o kernel. Bloqueiam qualquer promoção dos respectivos fatos para `VIGENTE`.

## Registro documental — cartas recebidas em 09/09/2026

Dois textos do Desafio Rompa o Teto Financeiro recebidos de Victor e arquivados integralmente. Cópias individuais com SHA-256 verificado e [compilado para uso](01%20-%20contexto/textos-recebidos/2026-09-09-cartas-rompa-o-teto-financeiro/03-CARTAS-ROMPA-O-TETO-FINANCEIRO-PARA-USO.md). Escopo documental; nenhuma oferta, preço, campanha ou publicação foi alterada ou revalidada. Detalhes no diário de 09/09/2026.
## Registro de entrega local — carrossel Rompa o Teto, 09/09/2026

Carrossel de oito cards 1080 × 1350 concluído, baseado nas cartas recebidas nesta data. [Pacote e instruções](05%20-%20design%20e%20criativos/carrossel-rompa-o-teto-2026-09-09/README.md): PNGs, prancha, ZIP, copy, legenda e planejamento. Revisão editorial e visual concluídas; não publicado. Confirmações para publicação: 28 dias/5 encontros, Direct e processo de seleção. Nenhuma mudança comercial ou na conta de anúncios.