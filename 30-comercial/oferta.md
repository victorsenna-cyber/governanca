# oferta.md — Arquitetura de Oferta da Continuum

> Como empacotamos e vendemos valor. Define a oferta âncora, a escada de ofertas (CORE), preços de referência e a lógica de ancoragem.
> Princípio: **serviço valida, produto escala.** Cada oferta entrega ordem operacional — não execução isolada.

---

## 1. Promessa central

> **Organizamos vendas, cobrança, operação, clientes e dados em uma única lógica de crescimento — para a receita parar de escapar entre as áreas.**

Categoria: **Revenue & Operations OS**. Não é agência, não é ferramenta solta, não é automação genérica.
Frase-âncora institucional: *"Dominamos o Ritmo: crescemos para gerar ordem."*

---

## 2. Oferta âncora atual (Fase 01 — Serviço Recorrente + Setup)

**Máquina de Receita Previsível + Onboarding Orquestrado**, com **Agente de IA (SDR) no WhatsApp** como ponta visível de valor.

Estrutura de cobrança em duas partes:

- **Setup (pagamento único):** monta a estrutura — diagnóstico, pipeline, scripts, SDR AI, scraping de leads, integração WhatsApp, dashboards.
- **Recorrência mensal (MRR):** opera, calibra e expande — prospecção contínua, follow-up, rituais de pipeline, suporte e iteração.

> Lógica: o **setup antecipa caixa** e paga a montagem; a **recorrência** gera previsibilidade e financia o produto (Continuum OS).

---

## 3. Escada de ofertas (linha CORE)

> **Precedência de preço:** os números que **decidem** vivem em `00-core/POLITICAS-DE-DECISAO.md` §5 (pisos, tetos de desconto, alçadas). Os valores citados aqui são **referência de arquitetura de oferta**, não fonte de preço. **Em qualquer divergência, vale POLÍTICAS.**

Três níveis. O score do ICP (`ICP.md` §5) define o ponto de entrada.

### ⭐ Degrau 0 — Mapa da Ordem *(porta de entrada paga, instituída 12/09/2026)*

**A distinção entre as versões é amplitude diagnosticada, não profundidade. Nenhuma é "básica", e nas duas o cliente sai com o mapa E as sugestões de execução.**

| Versão | Amplitude | Produção | Preço |
|---|---|---:|---:|
| **Núcleo** | **5 dimensões**: ICP, promessa, oferta, narrativa e **Pivô de Conversão** · 7 dias · devolutiva 45 min | ~8h | **R$ 1.997** |
| **Operação** | **10 dimensões**: as 5 do Núcleo + página, funil, conteúdo, **tráfego pago e dados/tracking** · 14 dias · devolutiva 90 min | ~20h | **a partir de R$ 5.000** |

**Abatimento:** integral no setup se a Assessoria fechar em até 15 dias da devolutiva. O Núcleo abate no Operação dentro de 60 dias.

> **A fronteira que precisa ser dita na devolutiva:** o Mapa entrega **o que fazer e em que ordem**. A Assessoria é **quem faz junto, toda semana.** Sugestão de execução não é execução.

> **Régua: nenhuma proposta de Assessoria sai sem diagnóstico rodado** — pago como Degrau 0, ou coberto por fase de descoberta já executada e registrada no repositório. **Proposta sem diagnóstico é `n=0` e se escreve assim.**

### ⭐ Trilho do ICP B — Assessoria Estratégica · Alicerce

| | |
|---|---:|
| Escopo fechado: os **4 pilares** (ICP, promessa, oferta, narrativa), testados em conversa real | **a partir de R$ 6.000** |
| Fora, com degrau nomeado: página (R$ 1.497) · funil · campanha inicial (a orçar) | |
| Gate de saída: oferta levada a **10 conversas reais**, com respostas registradas | |

**Ver `ICP.md` §4-bis.** Não confundir trilhos: Mapa da Ordem é para quem já fatura; Alicerce para quem ainda não.

### Linha CORE

| Oferta | Setup (ref.) | MRR (ref.) | O que inclui |
|---|---|---|---|
| **CORE Essencial** | R$ 6.000 | R$ 2.000 | Scraping de leads + **SDR AI no WhatsApp** + follow-up estruturado. Ativa pipeline sobre base existente. |
| **CORE Avançado** | R$ 10.000 | R$ 3.000 | Tudo do Essencial + **pipeline/forecast**, rituais comerciais, dashboard de leads/MRR. (ex.: ARO Transportes) |
| **CORE Full / Padrão** | R$ 25.000 | R$ 4.000 | Tudo do Avançado + **WhatsApp integrado**, estruturação comercial completa, scraping ampliado, onboarding orquestrado. |

**Ofertas de porta de entrada (score 40–59 ou caixa imediato):**

- **Estruturação Comercial avulsa:** setup ~**R$ 4.000** (+ R$ 2.000 SDR AI). Monta o Sistema Comercial Mínimo Viável em ~4 semanas.
- **Dashboard de Leads (HTML):** entregável rápido de valor, abre conversa para CORE.

**Faixa de referência consolidada:** Agente IA + estruturação comercial = **R$ 1.800–3.500/mês**; pacotes setoriais ("Contabilidade que Vende") **a partir de R$ 3.500/mês**.

### ⭐ Pacote setorial — **VAREJO MULTI-LOJA / FRANQUIA** (instanciado 28/08/2026, `n=0`)

Primeira instância: conta Carolina (IVS, `clientes/Carolina Ribeiro/OFERTA-CAROLINA-2026-08-28.md`). **Não é preço novo — é o CORE Essencial e o CORE Full instanciados para operação com várias unidades.**

**Mecanismo nomeado: O FIO CONTÍNUO** — três nós: **Primeira Resposta · Malha de Recontato · Retorno da Base**. Nomear o mecanismo, e não a categoria, é o que tira a oferta da prateleira de "agente de IA para WhatsApp", onde a comparação só tem preço.

| | Etapa 1 · Recepção Contínua | Etapa 2 · Continuum OS · Rede |
|---|---|---|
| Instancia | CORE Essencial | CORE Full |
| Loja 1 | R$ 6.000 setup + R$ 2.500/mês | rede até 3 lojas: R$ 25.000 + R$ 5.000/mês |

> ⚠️ Os valores acima seguem **`POLITICAS` §5**, não a tabela do §3 deste arquivo — o MRR do CORE Essencial é **R$ 2.500**, não R$ 2.000. É a divergência já registrada em `STATUS.md` §6.4 (*vale POLITICAS*), e ela continua pendente de alinhamento neste arquivo (KR4.4).
| Loja adicional | R$ 1.500 + R$ 1.200/mês | + R$ 800/mês |

**Três regras que este pacote institui e que valem para qualquer conta multi-unidade:**
1. **Loja adicional é incremento de configuração, nunca projeto novo** (~25% do setup, ~48% do mensal). É o que prova que construímos sistema e não serviço — e é o que faz a terceira unidade caber.
2. **O preço da Etapa 2 vai publicado dentro da proposta da Etapa 1**, com gate medido e crédito de migração de 50% do setup. Escada com preço guardado vira negociação do zero na segunda venda.
3. 🔴 **Teto de volume obrigatório.** É a primeira família de oferta da casa com **custo variável por unidade de uso** (mensageria + inferência): MRR liso e ilimitado corrói a margem exatamente quando o cliente cresce. Faixa incluída + excedente por conversa, revistos a cada 3 meses.

**Setores adjacentes onde o mesmo pacote se aplica sem redesenho:** franquias de varejo com tráfego pago para WhatsApp, clínicas com várias unidades, escolas e academias com matrícula por unidade.

---

### ⭐ Frente nova — FUNIL DE VSL *(aberta 13/09/2026, `n=0`)*

**Construção de funil de aquisição em público frio:** produto de entrada + roteiro de VSL + página + anúncios + estrutura de teste de lead. Método: `100-métodos/METODO-FUNIL-DE-VSL.md`.

🔴 **Preço e escopo NÃO definidos — e não se inventam aqui.** A frente está aberta como capacidade, não como produto de catálogo. Antes de ir a qualquer cliente:

| # | Pendência | Por quê |
|---|---|---|
| 1 | **Faixa de preço** derivada da curva de carga (`POLITICAS` §4-ter) | construção é fase pesada, operação é leve — **preço único aqui repetiria o erro do ciclo 1 da Débora, que rodou a R$ 50/h** |
| 2 | **Quem paga a mídia** | se o capital de teste é do cliente, entra nas condições de validade (Âncora 5). Se é nosso, vira custo e muda o preço |
| 3 | **Trilho de ICP** | serve ao **ICP A** (já fatura, tem capital de teste) — ⚠️ **o ICP B quase sempre reprova no gate de caixa**, e vender a ele seria o loop de verba que a régua-mãe existe para impedir |

**Enquanto as três não fecharem: `n=0`, e é assim que se escreve em qualquer proposta.**

## 4. Ofertas de serviço complementares (cross/upsell)

Validadas em entrega real — empacotar conforme dor do cliente (detalhe em `servicos.md`):

- **Assessoria de Marketing e Crescimento** — funil completo + tráfego pago (Meta Ads) + criativos + conteúdo + tracking. Caso Débora: **R$ 12.000 / 6 meses** (R$ 2.000/mês), obrigação de meio. Pode incluir garantia de performance (meta de referência 1,5× investimento).
- **Tráfego Pago** (Google / Meta) — aquisição qualificada acoplada ao funil.
- **Conteúdo / Autoridade** — linha editorial de 4 camadas, carrosséis, posicionamento.
- **Sites de Conversão / Web Design** — para nichos premium (estética automotiva).

> Regra: complementares **não se vendem soltos** ao não-ICP. Só entram quando há (ou haverá) estrutura comercial que os sustente.

---

## 5. Lógica de ancoragem e venda

Método: *"Venda é engenharia de decisão"* — o cliente **conclui**, não é convencido. Sequência (sistema de vendas v3.0):

Frame → Diagnóstico → Quantificação → **Dor financeira** → Quebra de ilusão → Visão de futuro → Método → Oferta → **Ancoragem** → Decisão.

Axiomas de ancoragem:

- *"Sem número, não há decisão."* — toda proposta quantifica a receita que escapa hoje.
- *"Sem dor financeira, não há urgência."* — ancorar o preço contra a perda atual, não contra concorrente.
- Ancorar **CORE Full primeiro**, descer para Avançado/Essencial conforme score e caixa.
- Preferir **entrada antecipada (50%+ do setup)** — alavanca de caixa e compromisso.

---

## 6. O que NÃO ofertamos

- Execução isolada sem estrutura ("só tráfego", "só bot", "só automação").
- Promessa de resultado sem capacidade de entrega.
- Desconto que quebra margem sem autorização (decisão do CEO).
- Sofisticação (módulo/IA avançada) antes de operação estável no cliente.

---

## 7. Roadmap de oferta (serviço → produto)

1. **Fase 01 — Serviço Recorrente + Setup** (posição atual): caixa imediato + recorrência; cliente vira fonte de dados.
2. **Fase 02 — Productização:** transformar o que fazemos manualmente em **módulos vendáveis** (Follow-up AI, Cobrança/Reativação, Onboarding Orquestrado, BI Executivo, Decision Engine).
3. **Fase 03 — SaaS Modular + Enterprise:** assinatura a partir dos processos validados; contratos de maior ticket. *A operação financia o produto.*

---

## 7-bis. 🔴 ⭐ INVENTÁRIO DONE FOR YOU — a tarefa aberta que o método de DR cria *(18/09/2026)*

> **`100-métodos/METODO-DIRECT-RESPONSE.md` §4 instituiu o Done For You como princípio de produto.** `METODO-ANCORAGEM-DE-PROPOSTA.md` §0-ter régua 2-bis instituiu que **o bloco de onboarding de toda proposta se responde com inventário de ativo, não com estimativa de hora.**
>
> 🔴 **O inventário não existe.** Enquanto não existir, toda proposta continua respondendo *"quanto tempo do cliente isso consome"* por estimativa — **que é exatamente o que a régua acaba de proibir.**

**A tabela a preencher, uma linha por entrega da escada do §3:**

| Entrega | O que o cliente recebe PRONTO hoje | Degrau (0–4) | Já existe, ou se refaz por cliente? | O que subiria de degrau com uma construção única |
|---|---|---|---|---|
| ⭐ **REPO DE CLIENTE — "o cérebro da operação"** *(23/09/2026)* | **kernel instalado + 8 arquivos com as decisões daquela operação**, carregados por um agente a cada sessão: ICP e léxico · promessa · mecanismo e apelido · oferta e preço · voz e proibições · provas com fonte · gates de publicação · estado e log de decisões | **3 · ativo funcional** | 🟢 **esqueleto: construído UMA vez** (`90-templates/repo-cliente/`) · conteúdo: é a entrega que já vendemos, escrita dentro do continente. **Custo marginal é de FORMA, não de matéria** | — *(já está no degrau 3)*. **Degrau 4 seria nós operarmos dentro dele, e isso é outro produto** |
| *(demais entregas a preencher)* | | | | |

**As três perguntas que classificam cada linha** (§4.3 do método de DR): remove uma etapa que ele teria de executar? · **é repetível sem customização?** · ele consegue usar sem nos perguntar nada?

🔴 **A coluna que decide é a terceira.** Item que se refaz do zero a cada cliente **não é DFY — é serviço, e precisa estar no preço como serviço.** É o mesmo mecanismo que fez o ciclo 1 da Débora rodar a R$ 50/h: entrega tratada como ativo sendo paga como ativo, e executada como operação.

⚠️ **E o inventário tem valor comercial imediato, não só de higiene:** cada item no degrau 3 é uma linha que a proposta pode escrever como fato — *"você recebe X pronto"* — em vez de promessa. **Hoje escrevemos promessa porque não sabemos o que temos.**

---

## 8. Handoffs

← `ICP.md` (a quem ofertar) · → `produtos.md` (o que é o produto/OS) · → `servicos.md` (como entregamos) · → `onboarding.md` (o que acontece após o "sim") · ← `c-level/CFO.skill.md` (viabilidade de preço/margem) · ← `c-level/CEO.skill.md` (aprovação de exceção comercial).

---
*Base: `20 - Tese Investimento/Deck Estratégico 2026`; `10 - Cultura/continuum-sales-system.html`; propostas reais (ARO, Biopromais, Débora, Gezus); `02 - Comercial/`; `15 - Projeto Continuum (docs base)/COMERCIAL.md`.*
