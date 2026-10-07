# ESTRUTURA DA PROPOSTA — Carolina (IVS)

> **Tipo:** arquitetura do documento + esqueleto com `{{placeholders}}` · **Data:** 28/08/2026 · **Dono:** Victor
> **Fonte única da estrutura da proposta desta conta.** Substitui `ESQUELETO-ESCADA-A-B.md`, que virou ponteiro.
> **Produto e preço:** `../OFERTA-CAROLINA-2026-08-28.md` · **Economia:** `../PROPOSTA-FOLHA-INTERNA-2026-08-28.md`
> ⚠️ **Não enviar.** Todo `{{campo}}` é lacuna que só o diagnóstico preenche. Placeholder que sobra no envio é número inventado.

---

## 0. A regra que governa o documento inteiro

**A ordem das dobras é a ordem da decisão dela, não a ordem do nosso escopo.**

Ela não decide lendo o que fazemos. Decide quando (a) reconhece o próprio número, (b) vê o que ele custa por mês, (c) entende por que o caminho óbvio não resolve, (d) vê o mecanismo, e só então (e) encontra o preço — já pequeno ao lado da perda.

Sequência da casa (`oferta.md` §5): **Frame → Diagnóstico → Quantificação → Dor financeira → Quebra de ilusão → Visão de futuro → Método → Oferta → Ancoragem → Decisão.**

**Duas regras duras:**
1. **Preço nunca aparece antes da dobra 8.** Preço antes de número é preço solto, e preço solto é sempre caro — ainda mais nesta conta, onde existe outro orçamento na mesa (R-1).
2. **Nenhum número sem marca de procedência** na versão de trabalho: `[dado dele]` · `[dado nosso]` · `[benchmark]` · `[hipótese]` (Gate A).

---

## 1. As 12 dobras

| # | Dobra | Função | Âncora | Veto — volta se |
|---|---|---|---|---|
| 1 | **Capa e frase de enquadramento** | dizer do que se trata em uma linha | — | for título de serviço em vez de nome do problema |
| 2 | **O que eu vi na sua operação** | devolver os números **dela** | procedência | tiver número nosso disfarçado de número dela |
| 3 | **O que isso custa por mês** | transformar preço absoluto em comparação | **4 · inação** | vier sem fonte por variável |
| 4 | **Por que contratar mais gente não resolve** | quebra de ilusão | — | soar como desqualificar a equipe dela |
| 5 | **O Fio Contínuo — os três nós** | mecanismo nomeado | — | virar lista de funcionalidades |
| 6 | **Etapa 1 · Recepção Contínua** | o que entra, com marco e data | **5 · condições** | tiver entregável sem data e sem dono |
| 7 | **Quando a Etapa 2 entra** | gate medido + **preço da Etapa 2 já publicado** | **3 · gerações** | o gate for adjetivo em vez de faixa |
| 8 | **A conta** | breakeven, payback, 3 cenários | **1, 2, 6** | breakeven vier sobre ticket em vez de margem |
| 9 | **De que isso depende** | dono, prazo e o que quebra | **5** | faltar o "se falhar" de alguma linha |
| 10 | **O que eu não prometo** | fronteira explícita | **Gate B** | for suavizada |
| 11 | **Como se paga** | três portas | — | citar hora, R$/h ou horas nossas |
| 12 | **Próximo passo, com data** | fechar o ciclo | — | terminar em "me avisa" |

---

## 2. Esqueleto com `{{placeholders}}`

### Dobra 1 — Capa
**Carol — o que está vazando entre o anúncio e a venda, e em que ordem se fecha.**
Itapema · Tijucas · {{data}}

### Dobra 2 — O que eu vi
> *"Eles estão mais lentos de resposta e também pra ajudar nos recontatos."* — você, 23/08

| Hoje | Número |
|---|---|
| Leads/mês | {{leads_mes}} |
| Sem resposta ou parados no 1º contato | {{pct_sem_resposta}}% → **{{leads_perdidos}} pessoas/mês** |
| Tempo médio até a 1ª resposta | {{tmr}} · pior dia: {{tmr_pior}} |
| Toques previstos × executados | 6 × **{{toques_reais}}** |
| Clientes na base sem contato de retorno | {{base_inativa}} |

**Nenhum desses números é meu. São seus.** `[dado dele]`

### Dobra 3 — O que isso custa por mês
```
{{leads_perdidos}} × {{conversao}}% de conversão × R$ {{margem}} de margem
= R$ {{custo_inacao_comercial}}/mês que entra no anúncio e não chega na venda
+ R$ {{custo_inacao_reativacao}}/mês de base que ninguém reativa
──────────────────────────────────────
= R$ {{custo_inacao_total}} por mês
```
*Margem, não faturamento — o que sobra depois de lente, armação e royalty.*

### Dobra 4 — Por que contratar mais gente não resolve
Três pessoas novas em Tijucas **não respondem às 21h**, **não lembram do 5º toque no dia 15** e **não fazem aniversário de {{base_total}} clientes**. O buraco não é de braço: é de **janela** e de **disciplina**. Contratar aumenta custo fixo e não fecha nenhum dos três nós.
*(Tom: nunca desqualificar a equipe. O argumento é sobre a física do turno, não sobre esforço.)*

### Dobra 5 — O Fio Contínuo
**Nó 1 · Primeira Resposta** — ninguém chega e fica sem resposta, em nenhum horário.
**Nó 2 · Malha de Recontato** — os 6 toques que sua planilha prevê acontecem, com corte automático em quem responde.
**Nó 3 · Retorno da Base** — quem já comprou volta: ciclo de troca, aniversário, pós-venda.

> **O fio só é contínuo se os três nós existirem.** Resolver só o primeiro é acelerar um funil que continua furado no meio e no fim.

### Dobra 6 — Etapa 1 · Recepção Contínua
Escopo por nó + a tabela de marcos D0 → D+60 (copiar de `../OFERTA-CAROLINA-2026-08-28.md` §3.1 e §3.2).

**O que eu me comprometo a medir, e você a cobrar:**

| Métrica | Hoje | Em 30 dias |
|---|---|---|
| Tempo de 1ª resposta | {{tmr}} | **< 2 min em 90% dos leads** |
| Cobertura de 1º contato | {{cobertura_hoje}}% | **≥ 95%** |
| Toques executados | {{toques_reais}} de 6 | **6 de 6, com corte na resposta** |

**Garantia de execução:** entrega minha marcada que não sair na data, por culpa minha, **você não paga aquele mês**.

### Dobra 7 — Quando a Etapa 2 entra
A Etapa 2 é a operação inteira num lugar só: cada loja vê o que é dela, você e o {{socio}} veem tudo, com contas a pagar, a receber, fluxo de caixa e DRE por loja e da rede somada.

**Ela não abre por vontade minha. Abre por número** — os quatro, medidos por 14 dias corridos dentro dos 60:
1. tempo mediano de 1ª resposta < 2 min em ≥ 90% dos leads
2. cobertura de 1º contato ≥ 95%
3. malha de 6 toques executada em ≥ 90% dos não convertidos
4. **margem recuperada ≥ a mensalidade da Etapa 1**

**Se não bater, não te proponho a Etapa 2. Eu conserto a Etapa 1.**
**Preço já fechado desde hoje:** {{setup_B}} + {{mrr_B}}/mês, **com {{credito_migracao}} do que você já pagou abatido**. O mensal da Etapa 2 **substitui** o da Etapa 1 — não soma.

### Dobra 8 — A conta
| | Premissa que muda | Vendas recuperadas/mês | Breakeven | Payback |
|---|---|---|---|---|
| **Conservador** | {{premissa_cons}} | {{vendas_cons}} | {{be_cons}} | {{pb_cons}} |
| **Provável** | {{premissa_prov}} | {{vendas_prov}} | {{be_prov}} | {{pb_prov}} |
| **Otimista** | {{premissa_otim}} | {{vendas_otim}} | {{be_otim}} | {{pb_otim}} |

*O conservador é o cenário em que a hipótese central não se confirma — não é o provável menos um pouco.*
**Breakeven da Etapa 1: {{breakeven_A}} vendas a mais no mês. Payback: {{payback_A}} dias.**

### Dobra 9 — De que isso depende
| Depende de | Quem | Se não acontecer |
|---|---|---|
| A equipe abrir o dossiê e responder o lead que a IA entrega | Carolina | conversão sai da conta; ficam tempo de resposta e cobertura |
| Número de WhatsApp de cada loja liberado | Carolina | a data de go-live desloca |
| Relatório mensal da agência acessível | Carolina / agência | CAC por loja sai do painel |
| Base exportável com data de compra e nascimento | Carolina | Nó 3 sai desta etapa |
| A IVS não bloquear integração | franqueador | integração vira leitura manual; escopo e prazo mudam |
| Aprovação de voz, oferta e teto de desconto | Carolina + {{socio}} | o agente não sobe |

### Dobra 10 — O que eu não prometo
- **Não prometo aumento de vendas.** Prometo tempo de resposta, cobertura de contato e visibilidade — medidos, sem interpretação.
- **Não substituo sua equipe.** A IA recepciona e entrega o contexto; **quem fecha continua sendo gente.**
- **Não mexo no seu tráfego.** A agência de vocês está fazendo o trabalho dela; meu terreno começa quando o lead chega.
- **Não toco em grau nem em receita.** É dado de saúde, fica no sistema da ótica — a IA agenda o exame e passa a bola. *(Não é detalhe: é a diferença entre estar dentro e fora da LGPD.)*
- **Não troco o sistema da franquia** sem autorização dela.

### Dobra 11 — Como se paga
| Porta | Setup | Mensal |
|---|---|---|
| **À vista** | {{setup_avista}} *(−10%)* | {{mrr}} |
| **Padrão** | 50% na assinatura + 50% no go-live | {{mrr}}, a partir do go-live |
| **Estendida** | 3× de {{parcela}} | {{mrr}}, a partir do go-live |

Compromisso mínimo de **3 meses** — não por fidelidade, mas porque **três meses é o tempo de o dado existir**: o primeiro mês gera o número, o segundo corrige em cima dele, o terceiro mostra a faixa.
Faixa incluída: até {{teto_conversas}} conversas iniciadas por mês, por loja. Acima disso, {{preco_excedente}} por conversa ou upgrade de faixa.

### Dobra 12 — Próximo passo
{{validade}} · **{{proximo_passo}}, {{data_proximo_passo}}.**

---

## 3. Empacotamento

| Etapa | Formato | Regra |
|---|---|---|
| Trabalho | **`.md`** | é onde a proposta vive e se revisa |
| Envio | HTML standalone + **PDF** | `90-templates/pdf-continuum/build-pdf.py --in … --out … --capa capa.json`. **Nunca escrever CSS novo por documento** |
| Copy | voz do Victor | `10-skills/voz-victor.skill.md` v2.0 + gate anti-slop do `copywriter-senior-continuum` (módulo 04) |

---

## 4. Checklist de saída *(bloco interno — apagar antes de gerar o PDF)*

- [ ] Zero `{{placeholder}}`
- [ ] Todo número marcado `[dado dele]` / `[dado nosso]` / `[benchmark]` / `[hipótese]` na versão de trabalho
- [ ] **Nenhuma menção a hora, R$/h ou horas nossas** — varrer o arquivo (`ANCORAGEM` Âncora 7)
- [ ] Breakeven sobre **margem**, nunca sobre ticket
- [ ] Cenário conservador aceitável para ela
- [ ] Preço só a partir da dobra 8
- [ ] Preço da Etapa 2 publicado na dobra 7, com o crédito de migração
- [ ] Gate da dobra 7 em faixa e janela, não em adjetivo
- [ ] Cada linha da dobra 9 com o "se falhar"
- [ ] Fronteira da dobra 10 escrita, não suavizada
- [ ] Números idênticos aos da folha interna
- [ ] Próximo passo com data, nunca "me avisa"
- [ ] Gate anti-slop rodado; pivô **E · Mas · Por isso** apontável por linha
