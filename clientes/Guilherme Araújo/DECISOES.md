# DECISOES.md — REGISTRO CANÔNICO

> STATUS: VIGENTE · fonte de decisões aprovadas
> Atualizado em: ~~2026-08-29~~ 2026-10-02 (DEC-2026-10-01-001, via rito de integração do Codex)

## Como registrar

Toda decisão deve conter ID, data/hora local, escopo, decisão, fonte/evidência, autoridade, substituição, `Propaga p/`, estado da propagação e observações. Uma proposta sem autoridade permanece `PROPOSTA — NÃO VIGENTE`.

Criar uma decisão sinaliza propagação; não autoriza editar arquivos que estejam fora da task vigente.

## Decisões vigentes

### DEC-2026-07-19-001 — Migração governada por fases

| Campo | Registro |
|---|---|
| data/hora | 2026-07-19 · America/Sao_Paulo |
| escopo | arquitetura do repositório |
| decisão | instalar e migrar a governança em fases, com parada obrigatória entre gates e preservação de evidências |
| fonte/evidência | task mestra aprovada + aprovação humana do Gate 1 |
| autoridade | Victor/Continuum |
| substitui | governança implícita e centrada somente em Meta Ads |
| Propaga p/ | `CLAUDE.md`, `STATUS.md`, `GOVERNANCA-REPO.md`, `09 - operação/` |
| estado da propagação | concluída para a Fase 2; fases seguintes permanecem bloqueadas |
| observações | nenhuma fase posterior é automática |

### DEC-2026-07-19-002 — Referências externas somente leitura

| Campo | Registro |
|---|---|
| data/hora | 2026-07-19 · America/Sao_Paulo |
| escopo | Governança Continuum e repositório Débora |
| decisão | usar ambos apenas como referência; não alterar, mover, formatar ou gerar metadados dentro deles |
| fonte/evidência | regra humana explícita + task mestra |
| autoridade | Victor/Continuum |
| substitui | não |
| Propaga p/ | `CLAUDE.md`, `SCOPE.md`, réplica e testes de gate |
| estado da propagação | concluída para a Fase 2 |
| observações | a réplica local da Governança é byte a byte e imutável |

### DEC-2026-07-19-003 — Acervo existente somente catalogado nesta etapa

| Campo | Registro |
|---|---|
| data/hora | 2026-07-19T00:47:33-03:00 |
| escopo | páginas, copy, funis, criativos, mídia, fontes e demais artefatos de Guilherme |
| decisão | não iterar nem mover o conteúdo atual; apenas catalogar onde existe e como o roteador o encontra |
| fonte/evidência | instrução humana de 2026-07-19: “não precisamos de iterar os itens agora” |
| autoridade | Victor/Continuum |
| substitui | qualquer leitura da Fase 2 ou 3 que autorizasse iteração automática dos artefatos |
| Propaga p/ | task mestra, `CLAUDE.md`, `README.md`, `STATUS.md`, `09 - operação/CATALOGO-ACERVO-LEGADO.md` |
| estado da propagação | concluída no kernel; válida para fases futuras até nova autorização |
| observações | a catalogação não declara qual versão é canônica |

### DEC-2026-07-19-004 — Skills como capacidades gerais com overlay local

| Campo | Registro |
|---|---|
| data/hora | 2026-07-19T00:47:33-03:00 |
| escopo | métodos e skills derivados de Governança ou de mecanismos observados em Débora |
| decisão | generalizar a capacidade para operar para qualquer cliente; manter voz, oferta, estado, fatos e decisões em fontes/overlays locais apontados pelo roteador |
| fonte/evidência | instrução humana de 2026-07-19 |
| autoridade | Victor/Continuum |
| substitui | nomes/contratos exclusivos por cliente previstos originalmente no §5 da task mestra |
| Propaga p/ | adendo da task mestra, `CLAUDE.md`, `07 - skills/README.md`; arquitetura de skills da fase futura |
| estado da propagação | parcial — política instalada; implementação de skills não autorizada nesta fase |
| observações | nenhum conteúdo específico de Débora é copiado; a réplica bruta de Governança continua imutável |

### DEC-2026-08-04-001 — Priorizar terapeutas na aquisição

| Campo | Registro |
|---|---|
| data/hora | 2026-08-04 · horário exato não registrado · **data A VALIDAR** pelo carimbo do transcript |
| escopo | ICP de aquisição para Grupo, Desafio e ofertas individuais |
| decisão | priorizar terapeutas, principalmente terapeutas sistêmicas; cartomantes e pessoas com vínculo forte em autoconhecimento/espiritualidade permanecem como adjacências, sem tratar interesse genérico como qualificação |
| fonte/evidência | `DESTILACAO-CALL-2026-08-04.md` `C-29` a `C-33`; fala do Guilherme em [00:25:27–00:35:32] |
| autoridade | Guilherme — fatos de comprador e direção do próprio negócio; Victor/Continuum — tradução para aquisição |
| substitui | aquisição ampla baseada apenas em comentário/interesse genérico; não exclui a amplitude da entrega do Grupo |
| Propaga p/ | próximos briefings, segmentação, matriz de criativos e lógica do quiz; somente em task própria |
| estado da propagação | parcial — registrada em `STATUS.md` e na destilação; atualidade deve ser revalidada antes de campanha nova |
| observações | decisão de ICP não autoriza campanha, verba, publicação nem mudança de oferta |

### DEC-2026-08-04-002 — Validar pesquisa e quiz como mecanismo de qualificação

| Campo | Registro |
|---|---|
| data/hora | 2026-08-04 · horário exato não registrado · **data A VALIDAR** pelo carimbo do transcript |
| escopo | funil de captação e qualificação |
| decisão | desenhar o caminho quiz → resultado simples → formulário da pesquisa → devolutiva; manter página de captura como controle experimental e concentrar a rota vencedora somente após leitura de métricas |
| fonte/evidência | `DESTILACAO-CALL-2026-08-04.md` `C-21` a `C-28`; Guilherme: *“Bora fazer”* [00:44:13] e *“perfeito, muito bom, gostei”* [00:46:34–00:47:12] |
| autoridade | Guilherme + Victor/Continuum |
| substitui | uso indiscriminado de comentário como fim e promessa genérica de “ganhe um diagnóstico” |
| Propaga p/ | futuro contrato do quiz/captura, formulário, tracking e plano de mídia; somente em task própria |
| estado da propagação | parcial — decisão registrada; `P-GA-04` foi resolvida por `DEC-2026-08-26-002`; execução segue não verificada e os demais gates aplicáveis permanecem abertos |
| observações | contato deve respeitar a escolha de devolutiva; a alegação “pesquisa nacional” exige finalidade e operação reais |

### DEC-2026-08-18-001 — Funil de mídia em três objetivos para Instagram

| Campo | Registro |
|---|---|
| data/hora | 2026-08-18 · America/Sao_Paulo |
| escopo | aquisição, conteúdo pago e social selling no Instagram |
| decisão | estruturar o funil com três campanhas conectadas: reconhecimento de marca por alcance, tráfego para o perfil do Instagram e engajamento com publicação cuja ação é comentar para receber uma entrega no Direct; a conversa pode avançar para call diagnóstica após qualificação e permissão |
| fonte/evidência | direção humana explícita de Victor em 18/08/2026 + `DESTILACAO-CALL-2026-08-04.md` `C-18`, `C-20`, `C-21` a `C-28` e `C-48` |
| autoridade | Victor/Continuum, com fatos de público e operação originados de Guilherme |
| substitui | comentário como fim isolado e campanhas sem continuidade entre mídia, perfil, DM e call |
| Propaga p/ | `06 - mídia paga/BRIEFING-CAMPANHAS-FUNIL-INSTAGRAM-2026-08-18.md`, matriz de criativos, produção dos carrosséis, roteiro de DM e futuro plano de mídia |
| estado da propagação | parcial: briefing, copy e auditoria local concluídos; produção, subida, verba, publicação e ativação permanecem pendentes de gates e aprovação humana |
| observações | as três campanhas formam a arquitetura, mas não precisam operar simultaneamente com verba fragmentada; cada peça terá uma ação única. O post “Pesquisa Terapeuta” entra apenas na campanha de engajamento e não deve ser promovido na versão atual |

### DEC-2026-08-26-001 — Execução dirigida por Guilherme como exceção operacional

| Campo | Registro |
|---|---|
| data/hora | 2026-08-26 · decisão humana atual; conversa preservada entre 13:23 e 13:30 · America/Sao_Paulo |
| escopo | relação comercial e operação de anúncios solicitados diretamente por Guilherme |
| decisão | separar `ESTRATEGIA-CONTINUUM` de `EXECUCAO-DIRIGIDA-GUILHERME`. Pedidos avulsos de anúncios feitos por Guilherme passam a ser executados como hipótese dele, na camada operacional de gestor de tráfego júnior, sem travar por divergirem da estratégia que nós recomendamos. A divergência é registrada uma vez e não reabre o planejamento. Um pedido preservável de Guilherme autoriza selecionar e criar/publicar o anúncio dentro de campanha, objetivo, público, geografia, orçamento e teto já aprovados por Victor; `subir` sem ativação expressa deixa o anúncio em `PAUSED` |
| fonte/evidência | instrução direta de Victor em 26/08/2026; `01 - contexto/evidencias/WHATSAPP-2026-08-26-AJUSTE-MODO-OPERACIONAL.png` (SHA-256 `0582A13F9F26DB081767CD61232073EE34E77817AAD1570397696B52A4753B1A`); contraste com a arquitetura apresentada na call atribuída a 04/08/2026 e registrada em `DESTILACAO-CALL-2026-08-04.md` `C-15` a `C-28`, `C-48` a `C-50` e §11 |
| autoridade | Victor/Continuum define escopo, alçada e modo operacional; Guilherme é dono e autorizador da hipótese criativa solicitada dentro da estrutura previamente aprovada |
| substitui | a expectativa de que todo pedido avulso de Guilherme precise convergir com o plano estratégico antes de ser executado; não substitui `DEC-2026-08-18-001`, que permanece como estratégia recomendada e trilha separada |
| Propaga p/ | `MODUS-OPERANDI.md`, `CLAUDE.md`, `SCOPE.md`, `STATUS.md`, `DIARIO-DE-BORDO.md` e `09 - operação/FILA-PROPAGACAO.md` |
| estado da propagação | concluída localmente em 26/08/2026; nenhuma mutação externa executada nesta decisão |
| observações | exceção exclusiva deste cliente. O pagamento informado de R$ 110 é simbólico e as indicações não concedem acesso à Assessoria Completa, não criam banco de horas e não formam precedente para a Continuum. Campanha/objetivo novo, verba/teto, público, geografia, destino e ampliação de escopo continuam sob Victor; política de plataforma, veracidade, consentimento, jurídico e orçamento continuam como gates duros |

### DEC-2026-08-26-002 — Condições vigentes do Grupo de Estudos

| Campo | Registro |
|---|---|
| data/hora | 2026-08-26 · America/Sao_Paulo |
| escopo | preço semestral, horário e mecanismo de entrada do Grupo de Estudos da Permissão Sistêmica |
| decisão | promover para vigente o plano semestral de **R$ 497** e o encontro de **terça-feira, às 20h**. Registrar que a entrada comercial passa por **call de vendas**; a capacidade é relativamente limitada pela agenda de calls e admissão, sem teto numérico confirmado |
| fonte/evidência | instrução direta de Victor em 26/08/2026; `01 - contexto/evidencias/CONFIRMACAO-OFERTA-E-ACESSO-META-2026-08-26.md`; convergência com `DESTILACAO-CALL-2026-08-04.md` `C-04` para R$ 497 |
| autoridade | Victor/Continuum registra a confirmação operacional recebida para o cliente; Guilherme permanece autoridade de produto e disponibilidade |
| substitui | R$ 500 como preço semestral vigente e 19h30 como horário vigente em peças e planos futuros; não reescreve documentos históricos datados |
| Propaga p/ | `STATUS.md`, `30-comercial/trafego-clientes/guilherme/METAS.md`, próximos briefings, copies e anúncios do Grupo |
| estado da propagação | concluída nos estados canônicos e sinalizada nos planos históricos em 26/08/2026 |
| observações | “vagas limitadas” só pode se referir à capacidade do processo de calls/admissão. Lista ou comentário não garantem vaga; a comunicação deve vender a entrada na lista e a call, não matrícula automática |

### REG-2026-08-26-001 — Ativação da campanha DESPERTAR (fato, não decisão nova)

| Campo | Registro |
|---|---|
| data/hora | ativada em 2026-08-26T18:43:30-03:00 · registrada em 2026-08-29 |
| escopo | conta `605257748612701`, campanha `120254917323250210` |
| fato | a campanha `GA\|TOFU\|FORMACAO\|ENGAJAMENTO\|DESPERTAR\|20260826` foi ativada e operou por 3 dias a R$ 15,00/dia, com R$ 37,75 gastos, 8.950 alcançados e **62 comentários** |
| trilha | `EXECUCAO-DIRIGIDA-GUILHERME`, sob `DEC-2026-08-26-001` |
| fonte/evidência | leitura direta da conta em 29/08; `06 - mídia paga/AUDITORIA-BRIEFING-REELS-2026-08-29.md` |
| autoridade | ativação dentro da alçada do `MODUS-OPERANDI.md`; verba dentro do teto de R$ 25,00/dia |
| divergência registrada | o briefing de 29/08 descreve esta campanha como pausada a R$ 25,00/dia. Está ativa a R$ 15,00/dia. O próprio briefing declara não ter verificado a conta |
| gate aberto | entrega do áudio `Decreto de Ativação Sistêmica` aos 62 comentários não verificada. Gate duro de `MODUS-OPERANDI.md` §3.3 |
| Propaga p/ | `STATUS.md`, `DIARIO-DE-BORDO.md`, `09 - operação/FILA-PROPAGACAO.md` |
| estado da propagação | concluída em 29/08 |
| observações | registro de fato executado, não decisão nova. Não endossa nem substitui `DEC-2026-08-18-001` |

### PROP-BRIEF-2026-08-29 — Briefing de Reels dirigidos

| Campo | Registro |
|---|---|
| estado | **PROPOSTA — NÃO VIGENTE** |
| data | 2026-08-29 |
| escopo | duas campanhas simultâneas dentro de teto de R$ 25,00/dia: tráfego ao perfil com o Reel `DYS-lPOBu4a` a R$ 15,00 e engajamento com o Reel `DYDbEN6hCYU` a R$ 10,00 |
| fonte | `06 - mídia paga/BRIEFING-CAMPANHAS-REELS-DIRIGIDOS-2026-08-29.md`, produzido pelo Codex sem verificação da conta |
| autoridade necessária | Victor, porque ajuste de orçamento e criação de campanha estão fora da alçada delegada em `MODUS-OPERANDI.md` §3.2 |
| condições para virar vigente | 1. resolver o gate do áudio · 2. reutilizar `120254780918080210` em vez de criar campanha de tráfego nova · 3. marcar `HG` nos nomes, conforme `MODUS-OPERANDI.md` §4 |
| ressalvas técnicas | posicionamentos abertos a `audience_network`, `marketplace` e `search` na campanha ativa; registradas uma vez e não bloqueiam |
| Propaga p/ | `STATUS.md`, `09 - operação/FILA-PROPAGACAO.md`, runbook e scheduled task da Onda 1 |
| observações | a arquitetura e os critérios de leitura do briefing estão corretos. O que falha são três fatos de estado e uma duplicação estrutural |

### DEC-2026-10-01-001 — Diagnóstica da Permissão: condições da oferta e limite de citação de Elton Euler

| Campo | Registro |
|---|---|
| data/hora | 2026-10-01 · registrada em 2026-10-02 (integração do Codex) · America/Sao_Paulo |
| escopo | linguagem de promessa e de mecanismo nos criativos da Diagnóstica da Permissão (linha PERMISSÃO) |
| decisão | (1) a sessão dura **2h**; (2) a pessoa leva **um mapeamento da Permissão dela, com o passo a passo que precisa fazer para destravar**; (3) preço **R$ 97**, compra direta; (4) Elton Euler só pode aparecer como **"os mesmos princípios"** ou **"a mesma base lógica"**; ficam **proibidas** formas que sugiram identidade de método, endosso ou parceria ("o mesmo método", "método do Elton Euler", "aplico o método dele") |
| fonte/evidência | respostas de Victor de 01/10/2026 registradas em `execução Codex/REVISAO-CRIATIVOS-DIAGNOSTICA-2026-10-01.md` §8.1 (**transcrição por terceiro, não a mensagem literal**); R$ 97 e sessão de 2h também em `STATUS.md` (atualização de 01/10, confirmação do Guilherme em 01/10 19:14) |
| autoridade | Victor/Continuum (linguagem e alçada de estrutura); Guilherme como autoridade de produto e entrega |
| substitui | a redação da arte de 04/09 (**"em apenas 2h destravo"** e **"o mesmo Método do Elton Euler"**) como texto utilizável em peça nova; não reescreve a arte histórica |
| Propaga p/ | `STATUS.md`, copys e criativos da Diagnóstica |
| estado da propagação | registrada em `STATUS.md` em 02/10/2026; nenhuma peça foi aprovada ou publicada por esta decisão |
| observações | divergência a resolver com Guilherme: o `STATUS.md` de 01/10 diz que o **mapa mental é entregue depois da sessão**; esta decisão diz que a pessoa leva o mapeamento + passo a passo. Podem ser a mesma entrega em momentos diferentes; **não foi conciliado por suposição**. Promessa de prazo ("em apenas 2h") só vale se 2h for a duração da sessão, não o prazo de um resultado |

## Propostas não vigentes

As decisões acima registram direção de ICP, experimento e as condições confirmadas do Grupo. Preço da Jornada, cashback, teto numérico de calls/vagas, promessa, página publicada, campanha, Pixel e conteúdo vigente continuam sem nova decisão nesta tarefa.
