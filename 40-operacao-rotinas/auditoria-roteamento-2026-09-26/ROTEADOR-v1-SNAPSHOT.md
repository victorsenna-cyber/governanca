# ROTEADOR v1 — SNAPSHOT ANTES DA AUDITORIA (26/09/2026)

> **Tipo:** registro · **O que é:** as 49 linhas do `CLAUDE.md` §6 exatamente como estavam antes de qualquer correção desta auditoria. **Guarda G3:** nada do roteador antigo se perde — se a reescrita esquecer algo, está aqui.

## R01

| ⭐ **"como o repo funciona", "onde fica X", "quem decide o quê", visão geral, organograma, mapa, onboarding de agente novo, "me explica a estrutura", auditar o próprio desenho da operação** | `MAPA-DO-REPO.md` (instituído 20/09/2026 · versão renderizada em `MAPA-DO-REPO.html`). **Não é fonte de regra — é o GRAFO de funcionamento.** O `README.md` diz *o que existe*; este diz *o que acontece depois*. Sete caixas, do pedido ao registro, com os **dois loops** onde o trabalho volta (gate que reprova · pacote do Codex não promovido) e o ciclo que fecha em `STATUS.md`. ⭐ **O que o desenho revelou e nenhum texto do repo dizia junto: a alçada da `REGRA Nº 0` está NO CAMINHO, antes da produção — não é checagem que se faz depois de escrever.** 🔴 **Em divergência com o `CLAUDE.md`, vale o `CLAUDE.md`, e a divergência é sinal de que o mapa envelheceu** — ele entra na mesma tarefa da `REGRA Nº 1`, porque método novo muda o roteador e o roteador é a §2 dele |

## R02

| 🔴 ⭐ **"entregar um repo para o cliente", repo de cliente, cérebro da operação, kernel para a equipe dele, "como a equipe dele opera com a nossa orientação", entregar mais que documento, aumentar percepção de valor da entrega** | `90-templates/repo-cliente/` (instituído 23/09/2026 · 🟡 vigência provisória) — **README** (a tese, a fronteira, as 3 condições, a economia, o quando NÃO) + **`CLAUDE-modelo.md`** (o kernel a instalar). **É o degrau 3 do DFY** (`METODO-DIRECT-RESPONSE.md` §4.2) e o **primeiro item real do inventário** de `30-comercial/oferta.md` §7-bis. ⭐ **A tese: documento depende de alguém lembrar de consultar; repo com kernel é carregado por um agente a cada sessão** — é a `REGRA Nº 1` (*nunca se ativa método na mão*) aplicada ao cliente. 🔴 **A fronteira que protege o produto: entra o RESULTADO das nossas decisões (o ICP dele, a promessa dele, o mecanismo dele); NUNCA os métodos que as produziram — todo o `100-métodos/` fica na casa.** Teste de uma linha: *este arquivo serviria a outro cliente com um copiar-colar? Sim → é método nosso, não entra.* 🔴 **Três condições sem as quais vira pasta morta:** um agente carrega o kernel (**lacuna de FATO: com que ferramenta a equipe dele trabalha?**) · alguém **nomeado** escreve nele · a primeira peça é escrita conosco dentro dele. ⚠️ **Nunca entra como argumento para destravar negociação parada por preço** — é o anti-padrão Bárbara Rosa, escopo crescendo enquanto preço cai |

## R03

| 🔴 ⭐ **"isso é método ou framework?", blueprint, taxonomia, "onde esse arquivo deveria morar", nomear artefato novo, "por que carreguei isso e não serviu", auditar o vocabulário do repo** | `00-core/TAXONOMIA-DE-ARTEFATOS.md` (instituída 26/09/2026 · 🟡 provisória). **Seis tipos, cada um com teste de uma linha: FRAMEWORK** (muda o que você acredita · sem etapas) · **MÉTODO** (etapa 1 e saída com nome) · **POLÍTICA** (piso, teto, alçada) · **GATE** (item que reprova sozinho) · **TRILHO** (ordena OUTROS artefatos) · **BLUEPRINT** (forma vazia que se copia). ~~O diagnóstico é contável: 28 arquivos com prefixo `METODO-`, e só 6 têm procedimento.~~ 🔴 **Corrigido no mesmo dia por auditoria independente (5 agentes, leitura integral, §0-bis): 14 de 29 são método por dominância; 15 são framework, política, gate, trilho ou ponteiro sob o nome `METODO-` — e quase todos são HÍBRIDOS de 3 a 4 tipos. O defeito não é falta de procedimento, é híbrido sem mapa: cada híbrido ganhou no cabeçalho a linha `Abrir por momento` (decidir §x · produzir §y · conferir §z), em vez de ser partido.** O campo `Tipo:` foi reclassificado nos 32 arquivos de `100-métodos/`, com proveniência. 🔴 ⭐ **E o PROCESSO (§4.2): os tipos entram SEMPRE nesta ordem, e gate não substitui etapa anterior — é a leitura estrutural do erro Bárbara.** ⭐ **E a taxonomia paga na ORDEM DE CARGA, não na catalogação: framework → trilho → método → blueprint → política → gate.** Fora dessa ordem o sintoma é nomeável — gate antes de método reprova o que não existe · método antes de framework produz peça correta e estrategicamente errada · **blueprint antes de método é a pasta preenchida a palpite.** Contém a classificação dos 28, os 5 achados (incluindo **`GATE-DE-CONTRATACAO` que é política e `TESTE-DE-PILARES` que é gate — nomes trocados entre si**), e 🔴 **a lacuna declarada: falta o framework da CASA** — o `PRINCIPIO-CONTINUUM.md` nunca é premissa de decisão. **Não renomeia nada por decisão de custo** |

## R04

| 🔴 ⭐ **"propaguei tudo?", fechar tarefa que criou ou alterou método, skill ou template, REGRA Nº 1, "o AGENTS está sincronizado?", "falta veto de quem?", auditoria de propagação** | `40-operacao-rotinas/ferramentas/verificar-propagacao.py` *(gate · 26/09/2026)*. **A `REGRA Nº 1` mecanizada:** para cada artefato de `100-métodos/` confere `Tipo:` válido · linha no §6 · linha no §7 · veto na tabela do gate de congruência · menção no `STATUS.md` — e se o `AGENTS.md` bate com o `CLAUDE.md`. Não altera nada; sai com código 1 se houver pendência. 🔴 **Existe porque o ato 5 foi pulado em 23/09 e em 26/09 pelo mesmo agente que escreveu a regra — checklist que depende de lembrar não é checklist**, que é o diagnóstico que já trocou a replicação manual do `AGENTS.md` por regeneração |

## R05

| ICP, oferta, posicionamento, modelo de negócio, abrir/fechar nicho | `10-skills/c-level/CEO.skill.md` + `30-comercial/ICP.md` + `oferta.md` |

## R06

| pipeline, vendas, fechamento, forecast, receita previsível | `10-skills/c-level/CRO.skill.md` + `30-comercial/` |

## R07

| **prospecção fria, abordagem, script de WhatsApp, follow-up, qualificação** | `METODO-ABORDAGEM-FRIA.md` + `30-comercial/prospeccao-sites/` + voz (§6.1) |

## R08

| **inbound / SDR estruturado** | `METODO-SALESFORCE-INBOUND.md` + `c-level/CRO.skill.md` |

## R09

| caixa, margem, DRE, runway, precificação | `10-skills/c-level/CFO.skill.md` + `00-core/POLITICAS-DE-DECISAO.md` |

## R10

| **proposta comercial de qualquer tipo, orçamento, cotação, precificar um projeto, renovação, reajuste, "quanto cobrar de X"** | `100-métodos/METODO-ANCORAGEM-DE-PROPOSTA.md` (7 âncoras + 3 gates + 5 condições de recusa) + `00-core/POLITICAS-DE-DECISAO.md` §§4-5. **Nenhuma proposta sai sem as 7 âncoras preenchidas ou declaradas faltantes.** 🔴 ⭐ **E desde 17/09/2026, proposta é peça de conversão: entra também no circuito de página §6.3 e no gate anti-slop da skill de copy** (§0-ter do método: três réguas estruturais). **Seis gates de saída, não três** — os novos são procedência de toda afirmação (D), arquitetura de conversão (E) e onboarding vendido (F). **Bloco de onboarding ausente reprova a proposta.** 🔴 ⭐ **E desde 18/09/2026, a Âncora 1-bis: o denominador do breakeven é a EMPRESA, nunca o produto lançado.** Entrega que serve a estratégia, marca, canal ou processo comercial se divide pela margem de tudo o que a empresa vende. 🔴 **Sintoma de que erramos: o cliente responde com uma CONTA, não com uma dúvida — conta correta do cliente é sempre erro de escopo nosso.** Denominador inexistente não se estima: precifica-se só o G0 e a recorrência volta na devolutiva. 🔴 ⭐ **E a RÉGUA 4 (18/09/2026): proposta NÃO É CARTA — o processo da negociação nunca vira conteúdo do documento.** Erro nosso, versão anterior, o que foi retirado e cronologia da conversa vão na **mensagem que acompanha**, em uma frase. **Teste: um sócio que nunca falou conosco entende o documento inteiro sem contexto?** Métricas: zero blocos sobre nós · zero frases iniciadas em *"Eu"* · menções ao cliente × a nós ≥ 5:1. Proposta formal/contrato: + `CLO.skill.md`; com garantia de resultado: + cláusula de medição verificável |

## R11

| **contrato, cláusula, proposta formal, aditivo, disputa, ameaça, risco jurídico, LGPD, registro de caso, societário/CNPJ** | `10-skills/c-level/CLO.skill.md` + `80-juridico/POLITICAS-JURIDICAS.md` (conflito ativo: + `10-skills/juridico/blue-team.skill.md` · gerar contrato: + `10-skills/juridico/contratos.skill.md`) |

## R12

| arquitetura, automação, IA, dados, segurança | `10-skills/c-level/CTO.skill.md` |

## R13

| processo, entrega, SLA, capacidade | `10-skills/c-level/COO.skill.md` |

## R14

| **gestão de tráfego de cliente: plano de mídia, campanha, criativo de anúncio, otimização, escala, relatório, diagnóstico de CPA** | `METODO-TRAFEGO-PAGO.md` + `10-skills/gestao-trafego.skill.md` + `30-comercial/trafego-clientes/<cliente>/` |

## R15

| 🔴 ⭐ **anúncio de resposta direta: criativo para quiz, VSL, página ou conversa, "escreve o anúncio", mecanismo do problema e da solução, CTA com valor** | `100-métodos/METODO-CONSTRUCAO-DE-CRIATIVOS-DR.md` (promovido 20/09/2026) + `10-skills/copywriter-senior-continuum/` + voz e `clientes/<cliente>/lexico-icp/` + matriz e gates do `METODO-TRAFEGO-PAGO.md` §4 quando houver mídia. Mecanismo chama `METODO-PONTOS-LOGICOS.md`. **Anúncio não abre o circuito de página §6.3** — só quando o destino precisa ser criado ou refeito |

## R16

| ⭐ **empilhar ganchos, abertura composta, "quantos hooks tem esse vídeo", auditar sequência de abertura** | `100-métodos/METODO-EMPILHAMENTO-DE-HOOKS.md` (20/09/2026) + skill de copy (módulos 03 e 04) + léxico do cliente. **Vale para peça nova: ausência de vencedor não bloqueia.** Derivar de base vencedora chama também a lateralização |

## R17

| ⭐ **lateralizar anúncio, variação de vencedor, "faz mais versões desse que vende", renovar criativo validado** | `100-métodos/METODO-LATERALIZACAO-DE-CRIATIVOS.md` (20/09/2026) + evidência da base + `METODO-TRAFEGO-PAGO.md` §4.2 e §7.3 + plano da conta. 🔴 **Sem base com resultado documentado é exploração, e se chama assim.** Redação nova passa também pela construção DR |

## R18

| **"o hook rate está alto e não vende", queda de conversão, fadiga de criativo** | diagnóstico de mídia primeiro (`METODO-TRAFEGO-PAGO.md` §7.4 e §4.4). **Não presumir que a causa é o gancho**, e não classificar como vencedora uma base sem o critério da conta |

## R19

| **roteiro de vídeo curto, criativo de Reels, gancho/hook, carrossel, "por que meu vídeo não performa", 🔴 ⭐ "não sei o que postar", "estou sem assunto", "travei na hora de gravar", "o que eu gravo hoje"** | `10-skills/copywriter-senior-continuum/` (módulo 06: ⭐ **§11.1-bis — escolher o SENTIMENTO antes do assunto.** *"O que eu vou postar"* não tem resposta certa, porque qualquer assunto serve — **e é por isso que se trava com o celular na mão.** A pergunta com resposta é *o que a pessoa vai sentir*, e ela tem **cinco**: curiosidade · surpresa · identificação · aprendizado · tensão. **Escolhido o sentimento, o assunto vem sozinho.** 🔴 **Identificação é bloco de espelho e cai inteira na régua de procedência — é o sentimento mais fácil de fabricar e o mais caro quando é fabricado.** Sentimento ≠ conflito: o conflito é o "Mas" comprimido, o sentimento é o efeito. Fonte: `900-criação-implementação-victor/criativos/transcricao-sentimento-do-video-2026-09-20.md` — **autor não identificado, e os 1.500 vídeos são alegação dele: a régua se adota pela lógica, não por resultado medido.** Demais: conflito antes de contexto, 6 eixos, ajuste de mídia paga) + voz do cliente (criativo de tráfego: + matriz `METODO-TRAFEGO-PAGO.md` §4) + 🔴 **`clientes/<cliente>/lexico-icp/` (obrigatório desde 10/09/2026 — sem banco, não se escreve: ver §6.1)** |

## R20

| ⭐ **"a conta não anda e ninguém sabe por quê", pilares, coerência, "para quem é mesmo?", divergência entre proposta e registro, onboarding de conta nova, depois de pivô, antes de página ou VSL** | `100-métodos/METODO-TESTE-DE-PILARES.md` (instituído 12/09/2026: cinco pilares — ICP, promessa, narrativa, oferta, produto — e cinco perguntas binárias. **Falha aqui quase sempre é decisão que ninguém tomou, não entrega que ninguém fez.**) → saída em `clientes/<cliente>/PILARES.md`. 🔴 **Reprovação em P1 (ICP em uma frase) ou P4 (lista igual em todo lugar) BLOQUEIA produção de copy** — é o mesmo mecanismo que custou a conta Bárbara Rosa. Primeira aplicação: `clientes/Débora Delgado/PILARES.md`, 3 de 5 reprovando |

## R21

| 🔴 ⭐ **"pergunto ou decido?", cliente querendo escolher entre versões, cliente pedindo mudança de copy, "o que você prefere?", brief com campo vazio, elicitação de cliente, artefato que devolve decisão ao cliente** | `100-métodos/METODO-ALCADA-DE-ESTRUTURA.md` (instituído 15/09/2026, **alçada Victor · REGRA Nº 0 do §8**). **A estrutura de conversão é nossa, sempre.** Duas lacunas — **FATO** (pergunta obrigatória) × **ESTRUTURA** (decisão nossa obrigatória) · os 9 campos do brief reclassificados, com **promessa e mecanismo saindo de "perguntar" para "decidir"** · direito de objeção de congruência do cliente e o nosso dever de responder — alterar do nosso jeito ou explicar por que não · **propriedade do ativo ≠ autoria da estrutura** · 6 frases-sinal do erro · gate de 3 itens. 🔴 **Prevalece sobre qualquer skill, método ou artefato de conta em conflito** |

## R22

| 🔴 **léxico do público, "como o ICP fala", cena de espelho, banco de falas do público, montar o `lexico-icp/` de um cliente** | `100-métodos/METODO-ARQUEOLOGIA-DE-ICP.md` (instituído 10/09/2026: irmão simétrico do MEL — o MEL extrai **quem assina**, este extrai **quem ouve**; graus de procedência `D`/`R`/`I`, ID por frase, gate com veto) + `clientes/<cliente>/lexico-icp/`. **Nunca derivar a fala do público da fala do cliente: é erro de método registrado, não atalho** |

## R23

| 🔴 ⭐ **pontos lógicos, tese de marketing, "o argumento não fecha", cadeia de raciocínio, mecanismo da VSL, "por que a pessoa deve acreditar", montar argumento** | `100-métodos/METODO-PONTOS-LOGICOS.md` (instituído 13/09/2026 · **autoria: João Campos**). **Cadeia, não lista: remova um elo e o seguinte tem que desabar.** Teste de encadeamento · 2 padrões de anatomia · dose **5–8 (o erro típico é 20)** · 6 modos de falha · **monta-se de trás para frente e a conclusão NÃO vai para a peça** — o último passo é do leitor, e é por isso que ele o defende. 🔴 ⭐ **E desde 20/09/2026 a cadeia tem DESTINO declarado: o One Belief** (`METODO-MECANISMO-E-ONE-BELIEF.md`), escrito antes do primeiro elo. **Sem destino, o teste de encadeamento aprova uma cadeia em que todo elo é verdadeiro e o conjunto não aponta para lugar nenhum** — e o **teste de destino** é o que pega isso. O elo também ganhou anatomia: afirmação · prova · **benefício no sabor certo pela posição** (consequência / decepção / benefício) · **conexão**. ⭐ **É o mesmo defeito da REGRA Nº 4 da `voz-victor.skill.md` visto do outro lado: salto de lógica na fala e elo faltando na escrita são a mesma falha, e ela já está documentada com reincidência.** 🔴 **Não se aplica a conteúdo de topo — conteúdo abre laço, cadeia fecha** |

## R24

| ⭐ **"estrutura dentro da estrutura", estrutura invisível, elementos da copy, "por que modelar funciona", modelar × copiar, sequência de elementos, ordem dos argumentos** | `100-métodos/METODO-ESTRUTURA-INVISIVEL.md` (instituído 13/09/2026). **A tese: a copy não é o texto — é uma sequência de atos persuasivos, e o texto é a superfície deles.** Três níveis (bloco · **elemento** · superfície), a cadeia causal que explica por que a ordem transfere e as palavras não, **5 regras de boa formação** (promessa gera dívida de prova · dor exige saída · mecanismo antecede oferta · segmentação vem cedo · transição é elemento) e o procedimento extrair → transpor → verificar. 🔴 **Não se aplica a peça de degrau 3 (reenquadre), onde a sequência se quebra de propósito.** É a mesma operação do metamodelo, em outra unidade. ⭐ **E desde 20/09/2026 a skill de copy tem o módulo correspondente: `10-skills/copywriter-senior-continuum/referencias/09-estrutura-invisivel.md`** — carregado em peça-mestra e sempre que houver referência a modelar. O método é a fonte; o módulo é o que executa na hora de escrever |

## R25

| ⭐ **benchmarking, "o que o mercado está fazendo", analisar concorrente, contar palavras por bloco, estrutura invisível, referência de nicho, swipe file** | `100-métodos/METODO-BENCHMARKING.md` (instituído 13/09/2026: **fonte canônica, serve a toda peça de conversão — VSL, página, anúncio, e-mail, mensagem, proposta**). 6 fases · gate de evidência (**referência entra por prova de que vende, nunca por impressão**) · taxonomia de 30+ elementos em 6 famílias · **contagem em 3 níveis — bloco, elemento e métricas derivadas** (densidade de prova, razão prova/promessa, distância até a primeira prova, densidade lógica) · 15 dimensões · degrau de sofisticação · espaço vazio com teste de discriminação. 🔴 **Gate de saída com 8 itens.** 🔴 ⭐ **E desde 22/09 (REGRA Nº 2 do §8), o gate de evidência é de ESCALA, não de venda:** toda referência leva o estado — escalado / em escala / testando — e o sinal que o prova; **só a escalada serve de base** Alimenta `30-comercial/swipe-file/` (`§11.5`). ⭐ **As Fases B e C (capturar, segmentar, marcar e contar) têm motor próprio desde 20/09: `METODO-DESTILACAO-DE-VSL.md`** — este arquivo diz o que medir, aquele diz como |

## R26

| **anúncio de concorrente para analisar, "destila essa copy", "achei essa peça boa", mercado saturado, comprador que se orgulha da própria competência** | `10-skills/copywriter-senior-continuum/` **módulo 08** (reenquadre de categoria: 5 batidas, 3 testes, escada de 3 degraus, fronteira reenquadre × desculpa vendida) + `mcp Meta Ads: biblioteca de anúncios` para medir quantos já ocupam o mesmo degrau. **Nunca copiar o degrau: medir e subir.** |

## R27

| tráfego pago/orgânico nosso, canais, geração de demanda | `10-skills/heads/head-trafego.skill.md` |

## R28

| conteúdo, narrativa, linha editorial | `10-skills/heads/head-conteudo.skill.md` (papel e decisão) + `10-skills/copywriter-senior-continuum/` módulo 06 (método e execução) |

## R29

| cobrança, conciliação, rotina financeira | `10-skills/heads/head-financeiro.skill.md` |

## R30

| retenção, adoção, churn, health score | `10-skills/heads/head-customer-success.skill.md` |

## R31

| ativação, kickoff, TTFV, onboarding | `10-skills/heads/head-onboarding-orquestrado.skill.md` |

## R32

| infraestrutura, VPS, n8n, cybersec | `10-skills/heads/head-ti-cybersec.skill.md` |

## R33

| **página de vendas, landing, dobras, CRO de página, "criar uma página para X"** | **circuito de 3 skills — ver §6.3.** Entrada sempre por `10-skills/gerador-web-designer-senior-continuum/` (ele classifica ticket, modelo, ato de conversão e temperatura antes de qualquer dobra) |

## R34

| 🔴 ⭐ **"o que o Codex fez", integrar o trabalho dele, pacote isolado, promover proposta, destilação feita pelo Codex, "cadê o registro daquela call", estado de conta que parece desatualizado** | `execução Codex/STATUS-CODEX.md` (**o índice — sempre primeiro**) + `40-operacao-rotinas/RITO-INTEGRACAO-CODEX.md` (gate de 5 itens). **Onde o trabalho dele vive:** `execução Codex/` (geral) · `clientes/<cliente>/execução Codex/` (por conta) · `910 - execução Codex/` (**histórico, read-only, não é destino**). 🔴 **Pacote isolado é PROPOSTA, nunca estado** — e a promoção é sempre nossa, nunca dele (§0 do `AGENTS.md`). ⚠️ **Se o estado de uma conta parece velho, o primeiro lugar a olhar é a fila do `STATUS-CODEX.md` §2** |

## R35

| 🔴 ⭐ **resposta direta, direct response, DR, "isso é copy de branding ou de venda?", princípios de copy, 40/40/20, qual lista usar, "entregar pronto", done for you, DFY, produto para funil, "o que colocar na oferta", 🔴 "isso já está escalado?", "qual promessa usar", "qual oferta usar", modelar oferta** | `100-métodos/METODO-DIRECT-RESPONSE.md` — 🔴 ⭐ **§2-bis, REGRA DA ESCALA (22/09/2026, REGRA Nº 2 do §8): promessa, oferta, lead e arquitetura vêm de referência ESCALADA; mecanismo, prova, voz e cena vêm do cliente. Três estados, quatro fontes, e o espaço vazio nunca é estrutura principal.** (Método instituído 18/09/2026 — **é o TRONCO: VSL, benchmarking, estrutura invisível e pontos lógicos são galhos dele, e foram criados antes**). Contém: a distinção DR × branding (**a maior parte da copy do mercado brasileiro é de branding, inclusive a que se vende como copy de venda**) · os 7 princípios imutáveis com autoria marcada · **40/40/20 — a copy vale 20% porque público e oferta já decidiram 80% antes dela existir**, e é desconfortável para nós porque copy é onde somos mais fortes · hierarquia de lista e RFM · **prova vence promessa** · o que DR não resolve. 🔴 ⭐ **§4 — DONE FOR YOU como princípio de PRODUTO, não tática de oferta:** dentro de toda venda opera uma **baixa autoestima** — o obstáculo declarado é o método, o real é a pessoa (*"seu método funciona, mas eu não vou conseguir executar"*), e **nenhuma promessa alcança essa objeção; aumentar a promessa piora.** Escada de 5 degraus (instrução → template → modelo → **ativo funcional** → feito por nós) · 🔴 **a fronteira que protege a margem: DFY construído UMA vez e entregue MUITAS é ativo; refeito por cliente é serviço com preço de produto** · os 3 riscos (atribuição, desculpa, uso fora de contexto) · **e é o DFY que responde o bloco de onboarding da proposta — quanto tempo do cliente isso consome** |

## R36

| 🔴 ⭐ **"isso bate com os métodos?", auditar o próprio output, congruência, "carreguei método demais?", conferir antes de entregar, contradição entre métodos, output que decide** | `100-métodos/METODO-GATE-DE-CONGRUENCIA.md` (instituído 20/09/2026 · 🟡 vigência provisória) + gate em `00-core/COMPLIANCE-DE-OUTPUT.md`. **Havia 7 métodos com gate de saída declarado, 3 com gate sob outro nome e 2 juízes de skill, e nenhum auditava o CONJUNTO** — cinco métodos carregados davam cinco verificações isoladas. ⭐ **As duas peças que tornam barato: a DECLARAÇÃO DE CARGA no fecho, e a RÉGUA DE VETO — uma linha por método, com o que reprova sozinho.** O auditor checa essas linhas, não relê os métodos. **5 passes**, e os dois que só existem por haver muitos métodos: **P0 proporcionalidade** (método que não decidiu nada no output sobrou) e **P3 contradição** (🔴 resolvida em silêncio, reprova). **Tabela de vetos em §3 — é o instrumento inteiro** |

## R37

| 🔴 ⭐ **cliente novo, conta nova, "por onde eu começo", "montar a estrutura completa do zero", abrir conta, ordem das etapas, "o que vem primeiro", conta travada sem saber em que etapa está** | `100-métodos/METODO-TRILHO-DE-CONTA-NOVA.md` (instituído 20/09/2026 · 🟡 vigência provisória). **Não cria método: ORDENA os que existem.** Quatro atos, dez etapas, **uma entrada e uma saída por etapa** · 🔴 **todo gate bloqueante vive no Ato II — depois dele só se produz** · ⭐ **o PEDIDO ÚNICO: tudo o que se pede ao cliente sai de uma vez, no dia 0, e só contém lacuna de FATO** (seis pedidos não custam seis vezes mais que um: custam seis latências — na conta Débora foram 33 dias esperando um ICP que levou 1 hora para decidir) · **o que nunca corre em paralelo** · gate de passagem de 3 perguntas. Opera em `clientes/<cliente>/PAINEL.md`, **uma tela**. Kit: `90-templates/conta-nova/` |

## R38

| 🔴 ⭐ **nomear mecanismo, apelido, "como chamar esse método", one belief, crença central, "qual é a tese", mecanismo único, batizar a oferta** | `100-métodos/METODO-MECANISMO-E-ONE-BELIEF.md` (instituído 20/09/2026 · 🟡 vigência provisória). 🔴 **Vocabulário decidido: `mecanismo` é o BLOCO; `apelido` é parte integrante dele — o mecanismo RECEBE um apelido.** ⭐ **E a tese é nossa: o apelido é uma ÂNCORA (ancoragem de PNL)** — o termo que, dito sozinho, re-elicia o mecanismo inteiro. **Cinco condições de instalação, e a mais dura: repetição EXATA — sinônimo quebra a âncora.** Contém os 10 ângulos, o NUUPPECC, **nome ≠ explicação**, e o **One Belief** (*"[nova oportunidade] é a chave para [desejo] e só é possível através do [apelido]"*), que é **o destino da cadeia de pontos lógicos e NÃO vai escrito na peça**. 🔴 **Ancoragem sem estado é rótulo vazio: sem mecanismo construído, não se nomeia** |

## R39

| ⭐ **VSL, vídeo de vendas, funil de VSL, "vender para público frio", perpétuo, roteiro de vídeo de vendas, aquisição por tráfego frio** | `100-métodos/METODO-FUNIL-DE-VSL.md` (instituído 13/09/2026, **cinco blocos desde 20/09/2026**: 3 gates de entrada · 40/40/20 · estrutura `lead → história → mecanismo → **CONSTRUÇÃO** → oferta` escrita de trás para frente — **o 5º bloco responde a objeção que mora entre acreditar na tese e olhar o preço: *"se é tão bom, por que você está vendendo?"*** · estrutura invisível · done-for-you + demonstração · 6 condições de recusa) + o **circuito de página §6.3**, do qual a VSL é um tipo de saída. 🔴 🔴 ⭐ **Antes dos gates, a pergunta da REGRA Nº 2 (§8): VSL é o formato escalado neste nicho?** Se o que escala é quiz, desafio ou aula, a VSL não é a entrada — e as três referências da Fase 1 são VSLs **escaladas**, não "boas". **Dois gates bloqueiam antes da primeira linha: P1/P4 do teste de pilares, e capital reservado para 2–3 tentativas — nunca uma.** A régua-mãe do §9 mudou em 13/09 para permitir isto; ler a alteração antes de aplicar. ⭐ **A Fase 1 (benchmark das 3 referências) executa-se pelo `METODO-DESTILACAO-DE-VSL.md`** — sem ele, a matriz sai por intuição e passa o gate sem ter medido nada |

## R40

| direção de arte, design de tela, tokens, acessibilidade, implementação de interface | `10-skills/ui-ux-designer-senior-continuum/` (modo direção ou modo execução, ver §6.3) |

## R41

| **transcript de call, gravação de reunião, "destila essa call", "o que saiu da reunião", resumo de call, extrair dores/insumos de uma conversa gravada** | `100-métodos/METODO-DESTILACAO-DE-CALLS.md` (7 etapas, **13 eixos** de classificação, IDs estáveis, índice por destino de uso, gate de 7 respostas). **Eixo 13 (instituído 25/08/2026): audita a nossa própria língua na call — metamodelo, saltos de lógica, muletas — e propaga obrigatoriamente para a skill de voz de quem falou**. **Saída obrigatória é `.md`; PDF é opcional.** Exemplar: `clientes/PRANA KA/DESTILACAO-CALL-2026-08-11.md`. 🔴 ⭐ **Fronteira instituída 20/09/2026: "destila" + PEÇA DE TERCEIRO não cai aqui.** Call é conversa nossa e produz **fato** de grau `D`; VSL, página ou anúncio alheio é artefato publicado e produz **estrutura** de grau `R`/`[B]`. **Confundir os dois é colher cena de concorrente como se fosse fala do nosso público — o erro que custou a conta Bárbara Rosa.** Peça de terceiro → linha seguinte |

## R42

| 🔴 ⭐ **destilar/modelar VSL de referência, transcrição de VSL, "analisa essa VSL", "quero modelar essa estrutura", extrair blocos e elementos de uma peça alheia, contar dose de uma referência** | `100-métodos/METODO-DESTILACAO-DE-VSL.md` (instituído 20/09/2026 · 🟡 **vigência provisória, verificação em caso real pendente**). **É o motor executável das Fases B e C do `METODO-BENCHMARKING.md`** e a metade EXTRAIR do `METODO-ESTRUTURA-INVISIVEL.md`: 9 etapas · 12 eixos · IDs estáveis `R1-E01`/`R1-PL1` · vocabulário fechado de 35 rótulos · contagem em 3 níveis com **ritmo de fala medido** · **trilha de tela** (a demonstração é invisível num transcript) · gate de 10. 🔴 **Declara o que a peça NÃO informa — lucro, conversão, retenção, causa** — e é isso que impede a matriz de ser lida como dado de performance. Artefato: `90-templates/benchmark-vsl/DESTILACAO-VSL.md`. **Não autoriza colher cena, dor ou fala: isso é `METODO-ARQUEOLOGIA-DE-ICP.md`, grau `D`** |

## R43

| **gerar PDF de qualquer artefato, "manda em PDF", material diagramado para cliente/prospect/contraparte** | 🔴 ⭐ **DUAS decisões, nessa ordem, e a primeira não é o gerador — é a CLASSE (instituída 19/09/2026, alçada Victor · `90-templates/pdf-noturno/README.md` §3-bis).** **Pergunta que decide: que pergunta do leitor este documento responde?** *"como isso funciona?"* → **ESTRUTURA** (eixo = o mecanismo em diagrama) · *"por que eu faria isso?"* → **DECISÃO** (eixo = a economia) · *"eu assino?"* → **FORMAL**. 🔴 ⭐ **A classe se escolhe pelo ESTADO DO LEITOR, não pelo que queremos dizer: quem ainda não visualiza o mecanismo recebe ESTRUTURA, porque economia apresentada a quem não visualiza convida a conferir a conta em vez de concordar — e com `n=0` a conta é o ponto mais frágil do documento.** Arquitetura da classe ESTRUTURA: **capa → o mapa inteiro num diagrama só → uma seção por caixa do mapa → o que falta (nosso × seu) → o que o documento NÃO faz.** Modelo de partida pronto: `90-templates/pdf-noturno/modelo-estrutura.html`. Exemplares: `Metodo-Direct-Response-Debora.pdf` (DECISÃO) e `Funil-Debora-19-09.pdf` (ESTRUTURA) — **são classes, não versões; nenhuma substitui a outra.** ⚠️ **Isto não mexe na régua-mãe do §9 nem nas 7 âncoras: a economia segue obrigatória internamente e segue sendo o eixo de proposta. A classe decide onde ela fica, não se existe.** **Depois da classe, o gerador: documento que se lê para ENTENDER vai no `pdf-noturno/` (fundo escuro, entrada HTML); documento que se lê para ASSINAR vai no `pdf-continuum/` (fundo claro, entrada Markdown).** O noturno existe porque **`.md` puro aberto fora de um leitor que renderize vira texto com sinais de marcação** — o PDF é o que carrega a leitura para fora da casa. Classes, restrições e primeira aplicação em `90-templates/pdf-noturno/README.md`. 🔴 **Sem emoji em PDF** (as fontes do ambiente não têm os glifos) e **diagrama vai como SVG inline**, porque o renderizador não executa JavaScript — o Mermaid continua sendo a fonte no `.md`. ⚠️ **O `pdf-continuum` está marcado para revisão:** é derivado de um PDF da conta PRANA KA e nunca foi reescrito como template de casa. Detalhe abaixo: `90-templates/pdf-continuum/` (`build-pdf.py` + `estilo.css` + `capa.exemplo.json`; paletas `ouro-rubi`, `grafite`, `vinho-sobrio`). **Nunca escrever CSS novo por documento.** Só gerar PDF quando o material sai da casa |

## R44

| **extração de linguagem/voz: perfil linguístico, skill de voz de cliente, mapa de comunicação, auditoria de voz** | `10-skills/extracao-linguagem.skill.md` (fonte completa: `100-métodos/Método de extração de linguagem/METODOLOGIA CONTINUUM DE EXTRAÇÃO DE LINGUAGEM.md`). 🔴 **Fronteira instituída 10/09/2026: o MEL extrai a voz de QUEM ASSINA. Ele não produz, e não autoriza inferir, a voz de QUEM OUVE** — para isso, `METODO-ARQUEOLOGIA-DE-ICP.md`. O postulado do "público-espelho" (§2.5.3 do MEL) vale para **critérios**, como hipótese a confirmar, e **nunca para léxico, cena ou dor narrada** |

## R45

| **definição de resultado/meta, plano estratégico, diagnóstica de cliente, oferta bem formulada, cocriação/manifestação, reenquadre** | `10-skills/geracao-de-resultados.skill.md` (fonte completa: `100-métodos/METODO-GERACAO-DE-RESULTADOS.md`) — PNL (O'Connor, 9 condições bem formuladas) + cocriação (UCEM). Combina com a árvore de copy (§6.1) em páginas/ofertas |

## R46

| 🔴 ⭐ **"não estou conseguindo ver", fluxograma, diagrama, BPMN, mapa de processo, "desenha isso pra mim", cliente que não visualiza, proposta que não entra, explicar funil ou operação** | `100-métodos/METODO-CAMADA-DE-VER.md` (instituído 18/09/2026, alçada Victor · **gate em `00-core/COMPLIANCE-DE-OUTPUT.md`**). **Todo artefato de decisão tem duas camadas — LER e VER — e entregamos sempre a primeira.** 🔴 **O diagnóstico é nosso: o "BPMN" que fazíamos era MATRIZ (raias × fases, 30 palavras por célula), e matriz é tabela que aprendeu a desenhar.** Grafo responde *"o que acontece depois"*; matriz responde *"o que existe em cada cruzamento"* — **e decisão é sempre sobre o depois.** Contém: gramática de 6 regras (3–6 palavras por nó · losango com as duas saídas rotuladas · **todo processo real tem loop** · sem legenda) · **o diagrama ABRE o documento, nunca fecha** · 4 padrões (fluxo de decisão · cadeia de dependência · **antes × depois, que é o que vende** · mapa de decisão pendente) · 4 modos de falha · **Mermaid como formato, porque é texto e versiona** · e 🔴 **quando NÃO desenhar** — preço, inventário, léxico, destilação e copy não têm fluxo dentro. **Teste de 5 segundos: o leitor aponta com o dedo onde está?** |

## R47

| 🔴 ⭐ **"quanto tempo isso leva?", estimar prazo, montar cronograma, quantas horas cobrar, "isso cabe na semana?", dimensionar entrega, prazo estourando** | `100-métodos/METODO-ESTIMATIVA-DE-CARGA.md` (instituído 18/09/2026, alçada Victor). **O default silencioso era a hora de construção manual, e ela é a referência errada para esta operação.** 🔴 **Três camadas que comprimem de formas opostas: A · produção (comprime muito) · B · colheita — call, entrevista, leitura (NÃO comprime) · C · latência — esperar decisão, acesso, gravação (não comprime, e às vezes piora).** **O multiplicador vale só para A; aplicá-lo a B e C produz cronograma que estoura.** ⭐ **E o cronograma se monta pela camada dominante, que quase sempre é C** — na conta Débora foram 33 dias esperando um ICP que levou 1 hora para decidir. ⭐⭐ **A unidade de medida deixa de ser hora e passa a ser decisão fechada + hora do cliente economizada** — porque preço ancorado em hora transforma a nossa eficiência em desconto automático. 🔴 **Hora nossa nunca aparece em documento que sai da casa.** E o freio: **velocidade de produção × velocidade de absorção do cliente** — artefato não absorvido tem custo e valor zero. ⚠️ **Calibragem em `n=1` e a coluna de horas reais em aberto: orienta ORDEM, não autoriza número em proposta até três semanas de registro** |

## R48

| **contratar, delegar, "não tenho hora", capacidade estourada, tripwire de horas, avaliar candidato, o que sai da minha mão** | `100-métodos/METODO-GATE-DE-CONTRATACAO.md` (escada D1-D4, piso de estratégia, régua da pessoa excepcional, 3 freios) + `00-core/POLITICAS-DE-DECISAO.md` §4-bis. **Nunca recusar por teto de horas — acionar contratação** |

## R49

| **cliente nominal, projeto de cliente, voz, produto, página, campanha ou entrega específica** | `clientes/<cliente>/AGENTS.md` (se existir) + `clientes/<cliente>/CLAUDE.md` + fontes locais indicadas pelo kernel do cliente. **Raiz canônica: `00 - Local\01 - Governança\clientes\`** (confirmado 22/07/2026). Clientes ativos: `PRANA KA/` · `Débora Delgado/` · `Jéssica/` · `Guilherme Araújo/` (a criar). |

