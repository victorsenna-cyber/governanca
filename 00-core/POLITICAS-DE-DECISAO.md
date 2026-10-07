# POLÍTICAS DE DECISÃO — Números, Alçadas e Tripwires

> **Tipo:** política (camada 2) · **Atualizado em:** 2026-07-02 · **Status:** proposto pelo sistema, vigente até calibração do Victor
> Fonte única dos números que decidem. As personas (`10-skills/`) consultam este arquivo; nenhuma skill carrega número próprio.
> Mudança aqui = decisão registrada (data + motivo no rodapé).

---

## 1. Alçadas de decisão (quem decide o quê)

> **🔴 Alteração de fato (22/08/2026, alçada Victor): a Nakielly não executa mais na operação.**
> **Toda alçada de execução e todo cálculo de capacidade passam a ser 100% Victor, 0% Nakielly.**
> ### 🔴 SUPERADO EM 22/08/2026 — a conversa aconteceu e a sociedade foi encerrada.
>
> ~~"A participação societária segue dividida e NÃO foi alterada [...] a conversa ainda não aconteceu."~~ **Redação de 22/08 pela manhã, escrita antes da conversa daquela tarde. Preservada tachada porque o repositório não tem histórico de git ativo.**
>
> **FATO VIGENTE (22/08/2026, registrado em `80-juridico/societario/ACORDO-NAKIELLY-2026-08-22.md`): a Nakielly encerrou o ciclo com a Continuum por iniciativa própria e não quer participação. Victor detém 100% da empresa.** Ela declarou *"essa empresa é sua. sempre foi sua"*. **Não houve partilha: houve absorção integral de passivos por Victor**, que assumiu 100% do que estava em aberto (cartão e distrato) sem contrapartida societária.
>
> **Consequência para esta seção: não existe mais "consenso obrigatório entre sócios". Toda alçada desta tabela é do Victor, sem exceção.** A linha "decisão estrutural societária" permanece como categoria, aplicável a decisões futuras (entrada de sócio, CNPJ, cap table).
>
> ⚠️ **O que ainda NÃO está feito, e é a pendência nº 1 desta seção: o instrumento escrito.** O encerramento é acordo verbal — **o terceiro desta operação sem papel, depois de Jon e Ithallo.** Enquanto não houver minuta assinada com as 7 cláusulas (incluindo IP do método e do repositório), **o fato registrado aqui é verdadeiro e não é oponível.**

| Decisão | Alçada |
|---|---|
| Posicionamento, preço, exceção comercial | **Victor** |
| Processo interno, ajuste de escopo de cliente ativo | **Victor** *(era Nakielly até 22/08/2026)* |
| Aceitar novo cliente | **Victor aprova + Victor valida capacidade (§4).** **Os dois gates continuam obrigatórios**, e agora são a mesma pessoa fazendo duas contas diferentes: uma quer vender, a outra tem que entregar. **O gate de capacidade não deixa de existir por ter perdido o segundo par de olhos: ele passa a exigir disciplina no lugar de conversa** |
| Investimento / despesa > R$ 5.000 | **Victor** |
| Desconto acima do teto (§5) | **Victor** |
| Abrir/fechar nicho ou frente comercial | **Victor**, com critério do §6 atendido |
| Decisão estrutural societária | 🔴 **Victor, sozinho (22/08/2026).** ~~Consenso obrigatório~~ — não há segundo sócio. Categoria mantida para decisões futuras: entrada de sócio, CNPJ, cap table |

## 2. Norte e trajetória (o que estamos construindo)

- **North star: R$ 40.000 de MRR** (horizonte: 30/06/2027; marcos intermediários em `60-planos/PLANO-90-DIAS.md`).
- **Trajetória em 3 estágios com gates de transição:**

| Estágio | Motor comercial | Gate de saída (quando muda o foco) |
|---|---|---|
| **A — Caixa** (atual) | venda de sites (prospecção fria) | MRR ≥ R$ 10k → prospecção fria de sites cai a 50% da energia comercial |
| **B — Carteira → MRR** | conversão site→assessoria + primeiros CORE | MRR ≥ R$ 20k **e** 2 segmentos com n≥3 clientes recorrentes → foco muda |
| **C — Sistemas** | venda direta de sistemas/marketing (CORE), sites só como porta oportunista | MRR ≥ R$ 40k → decisão de contratação e productização (Fase 02) |

- A tese de investimento (`..\20 - Tese Investimento\`) aponta o destino; este arquivo governa o caminho.

## 3. Previsibilidade (definição operacional)

"Não escalar sem previsibilidade" significa, verificavelmente:

- **Pipeline coverage ≥ 3×**: valor qualificado no pipeline ≥ 3× a meta de venda do mês.
- **Forecast confiável**: 2 meses consecutivos com realização ≥ 80% do previsto.
- **Retenção comprovada**: churn ≤ 3%/mês por 2 meses.

Só com os três atendidos escalamos aquisição, preço ou estrutura. (Exceção condicional: janela de blitzscaling, `00-core/BLITZSCALING.md` — hoje **fechada**.)

## 4. Capacidade (régua de aceite de cliente)

**Somos 1 pessoa na execução (22/08/2026).** Capacidade é número, não sensação:

- **Horas de entrega disponíveis:** **Victor, e só.** A referência antiga era 20h/semana. 🔴 **`a calibrar` com urgência — este número decide sozinho quantos clientes cabem.**
- **Teto de comprometimento: 70%** das horas de entrega. **A 20h/semana isso dá ~61h/mês, contra ~140h/mês quando eram dois. Queda de 57% do teto.**
- **Tripwire:** horas comprometidas > 85% por 2 semanas → 🔴 **aciona contratação** (§4-bis). *Redação anterior, revogada em 28/08/2026: "pausa de venda ativa até estabilizar".*

> ### 🔴 CORREÇÃO DE FATO (03/09/2026, alçada Victor) — a carga da conta Débora era **~40h/mês** na tabela abaixo e o medido é **< 8h/mês.**
>
> **Erro de 5×.** A tabela seguinte foi construída sobre ele e está corrigida logo abaixo. **A causa está em §4-ter e é mais cara que o número.**

| Horas de entrega reais | Teto 70% | Cabe Débora (**< 8h medidas**) + um contrato novo de 33h no mês 1? |
|---:|---:|---|
| 20h/sem (~87h/mês) | 61h/mês | ✅ **41h comprometidas = 67% do teto**, 20h de folga |
| **24h/sem (~104h/mês)** | **73h/mês** | ✅ 56% do teto |
| 30h/sem (~130h/mês) | 91h/mês | ✅ 45% do teto |

**O que a correção destrava, e é material:** a leitura anterior (120% do teto a 20h/semana) **reprovava qualquer contrato novo.** Com o número medido, cabe a Débora **mais um contrato de 33h e ainda sobram ~20h/mês.** Toda decisão tomada entre 22/08 e 03/09 que citou "capacidade estourada" como razão foi tomada sobre um número 5× inflado — incluindo a análise de gate da conta Carolina (28/08), onde a Débora aparece consumindo *"66-98% do teto"* e o correto é **~13%**.

## 4-ter. ⭐ CURVA DE CARGA — carga de conta não é constante mensal (instituído 03/09/2026, alçada Victor)

**O erro de 5× acima não foi de aritmética. Foi de modelo:** o repositório tratava carga como número fixo por conta, e carga de conta é **curva com duas fases de ordem de grandeza diferente.**

| Fase | O que consome | Carga | Caso Débora |
|---|---|---|---|
| **Construção** | tracking, BM de anúncios, domínio, ICP, oferta, produto, narrativa, páginas, funil | **alta** | ~40h/mês × 6 meses |
| **Operação** | execução, cadência, iteração, leitura de dado, ajuste | **baixa** | **< 8h/mês** |

**Duas consequências, e a segunda é a que custa dinheiro.**

**1. Toda estimativa de horas declara em qual fase está.** Número de carga sem fase declarada é inutilizável — subestima a construção e superestima a operação, e erra nas duas direções ao mesmo tempo.

**2. 🔴 Preço único para contrato com duas fases de carga é sempre errado — e o caso Débora prova com número:**

| Fase | Preço mensal | Horas | **Valor-hora real** |
|---|---:|---:|---:|
| Construção (ciclo 1, 6 meses) | R$ 2.000 | ~40h | 🔴 **R$ 50/h** |
| Operação (ciclo 2, renovação) | R$ 2.000 | < 8h | ✅ **≥ R$ 250/h** |

> ⭐ **A descoberta que isso obriga a registrar: o contrato que furava o piso era o ORIGINAL, não a renovação.** O ciclo 1 vendeu construção a preço de operação e rodou a **um quinto do piso** por seis meses. **A renovação a R$ 2.000/mês não é desconto: é a primeira fase do contrato em que a conta se paga.**
>
> **E explica um sintoma que estava sem causa:** a operação entregou muito, o cliente está satisfeito, e o caixa não melhorou. **Não foi falta de venda. Foi vender construção a preço de operação — e o ciclo acabar justo antes da fase lucrativa.**

**A régua que fecha:** contrato com fase de construção sai em **duas linhas — setup + mensal** (modelo já praticado na oferta CORE e na proposta Carolina), ou a construção é subsidiada pela operação **e o cliente que sai no fim do ciclo 1 leva o subsídio embora.** Preço liso em contrato de duas fases não é simplificação: é o subsídio escondido de quem escreveu.

## 4-quater. Estimativa de hora presume operação manual — e a nossa não é (instituído 03/09/2026)

**Os números de carga do repositório foram herdados por analogia com operação de agência tradicional.** A nossa opera com IA na execução, e a diferença aparece justamente na fase de operação, onde a curva do §4-ter cai.

**Duas regras, e a segunda protege a primeira:**

1. **Hora se mede, não se presume.** Toda carga declarada em folha interna traz a marca de proveniência: `[medido]` · `[estimado por analogia]` · `[hipótese]`. **Analogia com agência tradicional é hipótese, nunca dado.**
2. 🔴 **Ganho de IA sobe a margem, não desce o preço.** A economia de hora é **nossa vantagem competitiva e a fonte de capacidade** — repassá-la integralmente ao cliente entrega a vantagem e mantém o mesmo aperto com mais entrega. **O preço continua se decidindo por capacidade geradora de riqueza (§5), nunca por quanto tempo levamos.**

> **Corolário para a régua de exposição de §5:** com IA, hora exposta a cliente é ainda mais perigosa que antes — porque a conta fica boa demais e convida a pergunta errada. **O produto continua sendo o ativo que sobra, não o tempo gasto.**

> **⭐ A régua que mudou de peso, não de texto.** Estourar capacidade sempre custou sono. **Desde a garantia de execução (§5), custa dinheiro: entrega minha atrasada por culpa minha é um mês não faturado.** O gate de capacidade deixou de ser higiene interna e virou risco de receita direto — **exatamente no mês em que a operação perdeu metade da mão de obra.**

- **Onboardings simultâneos: máximo 3** — e o onboarding inteiro é do Victor desde 21/08 (`30-comercial/onboarding.md`).
- **Onboardings simultâneos: máximo 3.**
- **Novo cliente só entra se**: horas projetadas do contrato + carteira atual ≤ 140h/mês **e** há vaga de onboarding. Senão: 🔴 **aciona contratação (§4-bis)** — fila com data e preço de exceção continuam sendo alternativas, **recusar por horas não é mais uma delas**.
- **Tripwire:** horas comprometidas > 85% por 2 semanas → 🔴 **aciona contratação** (§4-bis). Automatizar é alternativa; pausar venda **não é mais**.

## 4-bis. ⭐ GATE DE CONTRATAÇÃO — hora é insumo, não é teto (instituído 28/08/2026, alçada Victor)

> **Regra-mãe: nunca se recusa venda, escopo ou frente por falta de horas.**
> **O que a Continuum vende é a forma de pensar estratégia do Victor. Hora de execução é insumo comprável; a forma de pensar, não.**
> Escopo que estoura o teto **aciona contratação**, sempre. Método completo, escada de delegação, régua da pessoa excepcional e os três freios: `100-métodos/METODO-GATE-DE-CONTRATACAO.md`.

**O que o §4 acima passa a significar.** Os números de capacidade continuam valendo como **medida**, e deixam de valer como **veto**. Teto estourado não fecha a porta: abre uma decisão de contratação, com custo, receita nomeada e rampa.

| Faixa de delegação | Régua para liberar | Estado |
|---|---|---|
| **D1 · execução técnica** (build, integração, deploy, QA sob spec e gate) | spec + gate de aceite + revisão do Victor | **✅ liberada — primeira contratação** |
| **D2 · operação de entrega** | D1 estável + SOP escrito | 🟡 `a calibrar` |
| **D3 · atendimento/CS + back-office** | D2 estável | 🟡 `a calibrar` |
| **D4 · estratégia** (diagnóstico, oferta, precificação, arquitetura, condução de call) | **MRR ≥ R$ 40.000** **E** (12+ meses de casa **OU** régua da pessoa excepcional), com decisão registrada | 🔴 **fechada** |

**Nunca se delega, em nenhum estágio:** posicionamento · precificação · abrir/fechar nicho · aceitar ou recusar cliente · decisão societária.

**Gatilhos de contratação:**
- **Primário — cobertura de pipeline ≥ 3× a meta do mês** (§3): contrata **antes** de a venda fechar, para a rampa acontecer fora do contrato. ⚠️ assume risco de caixa deliberadamente.
- **Secundário — contrato assinado** cujo escopo estoura o teto: contratação acionada na assinatura, custo lançado no próprio contrato.
- **Defesa — tripwire de 85% por 2 semanas:** 🔴 **passa a acionar contratação. Não pausa mais venda ativa** (revoga a leitura anterior do §4 e do §7).

**Os três freios que substituem o teto de horas:**
1. **Caixa** — PJ por escopo antes de CLT; toda contratação nomeia a receita que a paga (contrato, parcela, data); reserva mínima `a calibrar`.
2. **Pensamento** — a única recusa por capacidade que sobrevive: *a entrega exige delegar estratégia a quem ainda não pode recebê-la*.
3. **Rampa** — 2 a 4 semanas para D1 (`n=0`), com hora do Victor consumida em dobro no período. Prazo de proposta que ignora a rampa mente.

**Comprar hora autoriza entregar mais, nunca cobrar menos.** Piso de R$ 250/h, margem de 70% e teto de desconto de 10% seguem intactos.

## 5. Pricing (modelo, pisos e tetos)

> **Fronteira (10/08/2026):** esta seção define **quanto** cobramos. **Como a proposta se ancora** — breakeven, payback, curva de gerações, custo da inação, condições de validade, cenários e as 5 condições de recusa — vive em `100-métodos/METODO-ANCORAGEM-DE-PROPOSTA.md`. Os pisos abaixo são a **Âncora 7** daquele método: nenhuma proposta sai sem ser validada contra eles.

> **⭐ Régua de exposição (22/08/2026, alçada Victor, alcance de carteira): serviço por hora NUNCA é mostrado a cliente.**
> O preço se **decide** por **capacidade geradora de riqueza** — quanto o ativo construído faz o cliente ganhar, e em quanto tempo. O preço se **verifica** pelos pisos desta seção.
>
> | | Decide o preço | Verifica o preço |
> |---|---|---|
> | Olha para | o cliente | nós |
> | Instrumento | breakeven dele, payback, curva de gerações, custo da inação | valor-hora, margem, capacidade, folga de horas |
> | Vive em | proposta, folha do cliente, artifacts | **Âncora 7, e só ali** |
> | Sai da casa? | sim | **nunca** |
>
> **O piso de R$ 250/h não é revogado por esta régua: ele muda de função.** Deixa de ser método de precificação e passa a ser **checagem interna de viabilidade**. Continua obrigatório e continua podendo vetar um preço; o que ele deixa de ser é a **razão** pela qual o preço é aquele. **Preço decidido por hora confessa que o produto é tempo. O nosso produto é o ativo que sobra depois.**
>
> **Obrigação operacional:** antes de qualquer artefato ir a cliente, varrer por "por hora", "R$/h", "valor-hora" e horas de escopo nossas. Agenda ou horas **do cliente** ficam — costumam ser o núcleo do argumento de valor.

**Modelo:** setup (paga a montagem, antecipa caixa) + recorrência (MRR, paga a operação e financia o produto). Serviço avulso existe só como porta de entrada.

> ### ⭐ NO QUE O PREÇO SE ANCORA (instituído 20/08/2026 — Victor)
>
> **Preço se ancora na entrega e no retorno provável. Nunca na hora.**
>
> Ancoramos em três coisas: **capacidade real de entrega** · **probabilidade de retorno para o cliente** (receita gerada, ou estrutura viável para o objetivo declarado dele) · **estrutura e método já validados** sobre os quais a entrega se apoia.
>
> **Nunca ancoramos em** horas trabalhadas, esforço percebido, tabela de mercado, o que o cliente pode pagar, ou comparação com salário de contratação.
>
> **Gate de recusa:** não se oferece nada sem probabilidade real de gerar receita ou criar estrutura viável. Sem uma das duas, a proposta não é cara nem barata — **não deveria existir**.
>
> Método completo: `100-métodos/METODO-ANCORAGEM-DE-PROPOSTA.md` §0-bis.

- **Valor-hora de referência interna: R$ 250/h.** ⚠️ **É gate de viabilidade, não método de precificação.** Nenhuma proposta sai com preço implícito abaixo disso (preço ÷ horas estimadas ≥ 250) — e o motivo tem duas faces: protege a margem **e protege a entrega**. Escopo que não cabe no preço vira entrega menor, e entrega menor destrói a probabilidade de retorno que ancorou o preço. **O teto de horas serve ao cliente antes de servir a nós.** A conta de hora vive na folha interna e **nunca aparece como justificativa de preço para o cliente**.
- **Piso de margem de contribuição: 70%** em recorrência (nosso custo é hora + ferramenta; margem protege capacidade).
- **Desconto:** teto de **10%**, e **somente no setup, nunca no MRR** (recorrência barata é gargalo perpétuo). Acima disso: Victor. Alternativa preferida a desconto: **reduzir escopo, não preço**.
- **⭐ Desconto por prazo nasce na RENOVAÇÃO, não no contrato longo (22/08/2026).** Contrato longo assinado hoje dá desconto sobre trabalho ainda não orçado. **O ciclo 2 não repete a construção do ciclo 1**, e é só isso que autoriza cobrar menos por ele. **O erro que a régua corrige é conceitual: desconto por volume pressupõe que o custo unitário cai com a escala, e em serviço com entrega mensal ele não cai** — o mês 12 consome quase as mesmas horas do mês 6. **Volume sem economia de escala é só desconto.** Referência: DEC-RB-16 (`clientes/Renata Betta/DECISOES.md`).
- 🔴 **⭐ CAPITAL DE TESTE DE MÍDIA — piso de entrada (instituído 13/09/2026).** Frente que depende de tráfego frio para validar (funil de VSL e equivalentes) **só abre com capital reservado para 2 a 3 tentativas**, nunca uma. Faixa de benchmark: **R$ 2.000–3.000 por tentativa → R$ 6.000–9.000 de exposição**. **Reservado significa separado, não previsto.** Razão com número: a assertividade de referência é ~30% por tentativa, logo **uma tentativa isolada tem ~70% de chance de não provar nada** — e o dinheiro sai sem gerar venda nem aprendizado utilizável. **Quem tem capital para uma tentativa não tem capital para a frente: tem para um teste de mensagem.** Se o capital é do cliente, entra nas condições de validade da proposta (Âncora 5). Se é nosso, valida contra o caixa vivo do `STATUS.md`. Método: `100-métodos/METODO-FUNIL-DE-VSL.md` §2.2.
- **⭐ Taxa de meio de pagamento é sempre repassada, nunca absorvida.** Precedente com número: absorver 29% (18x) sobre R$ 27.000 custa **R$ 7.830** e derruba a operação ~25% abaixo do piso. **Antes de cotar parcelamento, confirmar qual dos dois modelos a operadora usa** — coeficiente de parcelamento (o comprador paga os juros, recebemos o cheio) ou taxa deduzida do bruto (`bruto = líquido ÷ (1 − taxa)`). Sobre a mesma taxa nominal os dois divergem materialmente, e errar o modelo é sub-recuperar em silêncio.
- **⭐ Garantia de execução: autorizada como padrão. Garantia de resultado: segue vedada.** Formulação canônica: *"Se uma entrega marcada como minha não sair na data marcada, e o atraso for meu, você não paga aquele mês."* Incondicional do nosso lado, verificável sem interpretação, obrigação de meio. **Garantia com condição de contrapartida do cliente não vale: ela é lida como letra miúda e não vende.** Referência: DEC-RB-15.
- ⭐ **O setup é sempre maior que a parcela mensal** (instituído 20/08/2026). Se o setup fica abaixo da mensalidade, o preço está afirmando que a montagem vale menos que um mês de manutenção — e não vale: **o setup é o que decide se o resto funciona.** A régua vale também **depois de juros de parcelamento**, que é onde ela costuma quebrar.
  **Quando a régua for violada, corrige-se por acréscimo no setup, nunca por redução da parcela.** Redistribuir empurra a recorrência para baixo do piso, e recorrência barata é gargalo perpétuo. Na prática, a régua costuma revelar **setup subprecificado**, não mensalidade alta.
- **Entrada: mínimo 50% do setup antecipado.** Sem entrada, sem agenda.
- **Inadimplência > 15 dias:** entrega pausada com aviso; > 45 dias: encerramento formal.
- **Reajuste:** preços de tabela revisados a cada 6 meses ou a cada 10 casos entregues no formato (o que vier antes).

**Escada de ofertas vigente (preços-alvo):** ver `30-comercial/oferta.md` §3 (tabela com unit economics). Resumo:

> ### ✅ MAPA DA ORDEM — precificado no piso, sem exceção (revisado 12/09/2026, alçada Victor)
>
> **A versão anterior desta nota registrava exceção de piso sobre preços de R$ 697 e R$ 1.497. Victor corrigiu a arquitetura no mesmo dia, e a exceção deixou de existir.**
>
> | Versão | Preço | Horas | Valor-hora |
> |---|---:|---:|---:|
> | **Núcleo** | R$ 1.997 | ~8h | ✅ **R$ 250/h** |
> | **Operação** | a partir de R$ 5.000 | ~20h | ✅ **R$ 250/h** |
>
> **O que a correção mudou, e é decisão de arquitetura, não de tabela:** o Mapa **deixou de ser produto básico de entrada.** A distinção entre as versões é **amplitude diagnosticada**, não profundidade — o Núcleo fecha a camada que decide (4 pilares + Pivô de Conversão), o Operação acrescenta a que executa e mede (página, funil, conteúdo, tráfego, dados/tracking).
>
> **Em ambas o cliente sai com o mapa E as sugestões de execução.** É isso que sustenta o preço sem exceção: não se vende o apontamento, vende-se o apontamento com o caminho.
>
> **A fronteira que precisa continuar dita:** sugestão de execução não é execução. O Mapa entrega **o que fazer e em que ordem**; a Assessoria é **quem faz junto, toda semana**.

| Oferta | Preço | Função na trajetória |
|---|---|---|
| **⭐ Mapa da Ordem · Núcleo** (12/09/2026) | **R$ 1.997** — 5 dimensões (4 pilares + Pivô de Conversão), ~8h | porta de entrada paga · ✅ **R$ 250/h** |
| **⭐ Mapa da Ordem · Operação** (12/09/2026) | **a partir de R$ 5.000** — 10 dimensões, com tráfego e tracking, ~20h | diagnóstico completo · ✅ **R$ 250/h** |
| **⭐ Alicerce** (12/09/2026) | **a partir de R$ 6.000** — 4 pilares, escopo fechado, 24h | trilho do ICP B (`ICP.md` §4-bis) · ✅ **R$ 250/h, no piso exato** |
| Site de conversão | R$ 997 (lote fundador) → **R$ 1.497** padrão → R$ 1.997 com 10 casos | caixa + carteira (Estágio A) |
| Assessoria Base | **R$ 2.500/mês** (escopo fechado: 1 canal + site + relatório) | construir MRR (Estágio B) |
| Assessoria Completa | **R$ 4.500/mês** (funil + tráfego + criativos + conteúdo) | MRR de ticket maior |
| CORE Essencial | setup R$ 6k + **R$ 2.500/mês** | Estágio B→C |
| CORE Avançado | setup R$ 10k + **R$ 3.500/mês** | Estágio C |
| **⭐ Motor de Receita** (instituído 20/08/2026) | **setup R$ 6k + R$ 4.500/mês** | Assessoria Completa **com diagnóstico de dependências** |
| **⭐ CORE Operação + Receita** (instituído 20/08/2026) | **setup R$ 10k + R$ 5.500/mês** | **retorno à tese fundadora** |
| CORE Full | setup R$ 25k + **R$ 5.000/mês** | Estágio C |

> ### As duas linhas novas (20/08/2026) — e por que existem
>
> **Motor de Receita** — setup de **16h**: diagnóstico do caminho do dinheiro até onde a receita depende, e a **matriz if-else** (*"para vender X, o processo Y precisa existir"*), entregue ao cliente. Mensal de **18h**: narrativa, posicionamento, lançamento, páginas, mídia.
> ⚠️ **Fronteira obrigatória na proposta:** entregamos o mapa das dependências de processo; **quem executa é a operação do cliente**, e se as dependências não forem resolvidas **a projeção deixa de valer**. Sem essa cláusula escrita, esta oferta vira promessa incompleta.
>
> **CORE Operação + Receita** — setup de **40h**: BPMN **AS-IS** do caminho do dinheiro, **mapa de vazamentos**, **TO-BE** com pontos de integração de IA declarados, **TO-RUN** (quem executa, com que gatilho, **e o que fazer na exceção**), matriz if-else e **motor de governança** implantado. Mensal de **22h**: as duas camadas, mais guarda da governança e direção dos recursos que o cliente já tem.
>
> **O motor de governança tem seis componentes:** fonte única de estado · camadas declaradas (política, processo, estado) · **régua de exceção** · registro de decisão com o descartado · cadência · precedência. **BPMN é o processo; governança é o que faz o processo sobreviver ao contato com a realidade.**
>
> **Nenhuma das duas inclui construção de sistema.** Desenhamos o processo; o cliente ou o dev dele constrói.
> **Nenhuma das duas é contratação.** Não operamos o dia a dia — **construímos a operação que a próxima contratação do cliente vai operar**, e a régua que a mantém coerente. Posicionar como "braço direito" faz sermos medidos contra um salário, e essa comparação se perde sempre.
>
> **Fronteira com a Assessoria:** Assessoria trabalha a receita **sobre a operação que existe**. CORE O+R **redesenha a operação a partir da receita pretendida**. Se o gargalo é processo, é CORE; se é demanda, é Assessoria.
>
> **Os tetos de hora são regra interna, não item de contrato** — as quatro linhas fecham exatamente em R$ 250/h dentro do teto. Estourar é furar o piso.
> Primeiro caso: Kraken Rally, `30-comercial/assessoria-prospects/danilo-kraken/OFERTA-CORE-KRAKEN.md`. **`n=0` até o primeiro contrato fechado.**

> **Anti-padrão registrado (caso Débora):** R$ 2.000/mês por escopo de agência completa (funil + páginas + 8 criativos + tráfego + conteúdo + tracking) fica **abaixo do valor-hora piso** e compra gargalo. Contratos assim não se repetem: escopo daquele tamanho é Assessoria Completa (R$ 4.500/mês) ou não é.

**Exceção registrada como precedente, não como padrão (proposta Liz, 17/07/2026):** 6 meses por R$ 15.000 com valor-hora implícito de ~R$ 85–100, **abaixo do piso**, sob alçada Victor. Justificativa: 1º MRR novo + case de lançamento. **A leitura que fica:** a exceção não fechou a venda (Liz declinou por relacionamento, não por preço). Preço abaixo do piso não compra a objeção que ele pretende comprar — e deixa a dívida de capacidade de qualquer forma. Toda exceção futura passa pela Âncora 7 e pela §3 do método de ancoragem (condições de recusa), com decisão registrada.

## 5-ter. 🔴 ORDEM DE DEPENDÊNCIA DA ENTREGA — urgência corta volume, nunca dependência (instituído 10/09/2026, alçada Victor)

**Gatilho:** perda da conta Bárbara Rosa, cinco dias depois de fechada. `clientes/Bárbara Rosa/ENCERRAMENTO-2026-09-10.md`.

**A cadeia, e ela não tem atalho:**

> **diagnóstico → ICP colhido → oferta e narrativa → copy**

Cada elo é insumo do seguinte. **Pular um elo não acelera a entrega: troca a entrega por uma imitação dela**, com a mesma aparência e sem o conteúdo. Copy sem ICP é achismo com boa estrutura.

**A régua:**

> **Pedido urgente de cliente não altera a ordem de dependência.** Quando a urgência é real, **reduz-se o volume, nunca a dependência.** Uma peça com procedência vale mais que dez sem.

**As três respostas possíveis a "preciso para ontem":**

| Resposta | Veredito |
|---|---|
| Entregar **uma** peça, marcada como rascunho, sobre o único material com procedência | ✅ |
| Dizer que não cabe, **e dizer o que cabe e quando** | ✅ |
| Entregar **o volume completo como se fosse definitivo**, sobre insumo não colhido | 🔴 **proibido.** É a única resposta que não pode dar certo |

**Leitura de risco que vem junto (camada 3 do §11 do kernel).** Cliente que já foi lesada por prestador, que desconfia de entrega com cara de IA, ou que muda de direção sob pressão de meta, **pedindo entrega urgente antes do diagnóstico, está fazendo um teste de conformidade disfarçado de pedido operacional.** Entregar rápido e errado confirma exatamente o medo dela. **O sinal estava registrado em quatro pontos do repositório antes da entrega, e foi lido tarde.**

**Onde isso aparece na operação:** `CLAUDE.md` §6.1 (as duas réguas) · `10-skills/copywriter-senior-continuum/` v3.1 (régua de ordem na checklist e nas 18 regras de decisão) · `100-métodos/METODO-ARQUEOLOGIA-DE-ICP.md` §6.

## 6. ICP e abertura de frente

- **Duas frentes comerciais no máximo**, com papéis explícitos (`30-comercial/ICP.md`): frente de caixa (sites) e frente de tese (assessoria/CORE).
- **Segmento só é "validado" com n ≥ 3** clientes pagantes recorrentes e playbook escrito. Um contrato = um caso, não um segmento.
- **Abrir nicho novo exige:** segmento atual saturado ou travado + playbook replicável (script + lista + critério de score) + capacidade livre (§4). Decisão: Victor.
- **Concentração: nenhum cliente pode passar de 40% da receita.** Acima disso, diversificar é prioridade 1 do pipeline.

## 7. Tripwires (param a operação e forçam decisão)

| Sinal | Limite | Ação obrigatória |
|---|---|---|
| Churn | > 3%/mês | CS diagnostica causa antes de qualquer venda nova no segmento |
| TTFV | > 30 dias em 2 clientes seguidos | revisar onboarding (`30-comercial/onboarding.md`) |
| Concentração | > 40% em 1 cliente | diversificação vira prioridade de pipeline |
| Inadimplência | > 10% do MRR | rotina de cobrança diária até normalizar |
| Horas comprometidas | > 85% por 2 semanas | 🔴 **aciona contratação (§4-bis)** — não pausa venda |
| CAC | subindo 2 meses sem LTV acompanhar | rever oferta/canal antes de escalar verba |
| MRR novo | 2 meses abaixo de 50% da meta do plano | revisão estratégica extraordinária (ritual mensal antecipado) |

---
*Registro de mudanças: 2026-07-02 — criação (proposto pelo sistema sob direção do Victor: norte 40k MRR, trajetória sites→assessoria→sistemas). Pendente de calibração: horas disponíveis (§4), preços-alvo (§5).*
*Registro de mudanças: 2026-08-28 — **§4-bis instituído (alçada Victor): gate de contratação.** Falta de hora deixa de reprovar venda e passa a acionar contratação. Escada D1-D4 com D4 (estratégia) travada em MRR ≥ R$ 40k + 12 meses de casa ou régua da pessoa excepcional. Tripwire de 85% deixa de pausar venda ativa. Método: `100-métodos/METODO-GATE-DE-CONTRATACAO.md`.*
