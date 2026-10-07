# MODELO ECONÔMICO — Renata Betta · Assessoria Completa com tráfego pago

> **Tipo:** folha interna de proposta (camada 2) · **Criado em:** 2026-08-21 · **Dono:** Victor
> **Método:** `100-métodos/METODO-ANCORAGEM-DE-PROPOSTA.md` (7 âncoras, 3 gates, 5 condições de recusa) + `METODO-TRAFEGO-PAGO.md` (§1 gate de entrada, §2.2 matemática reversa, §2.3 estágios) · números que decidem: `POLITICAS-DE-DECISAO.md` §§4-5.
> **Fatos:** `DESTILACAO-CALL-2026-08-21.md` (IDs C-xx) · **Estado:** `STATUS.md` · **Decisões:** `DECISOES.md`
> **Modelo executável:** `MODELO-RENATA.xlsx` (parâmetros abertos) · script: `modelo.py`
> **⚠️ ESTA FOLHA NÃO VAI AO CLIENTE.** A folha dela omite a Âncora 7 inteira. Os números do lado dela são idênticos nas duas.

---

> # 🔴 CORREÇÃO DE 22/08/2026 — LEIA ANTES DE USAR §1, §4 E §7
>
> **Os números de gap de agenda desta folha estão ERRADOS e foram substituídos.** Não use "88 sessões contra 55", "38 leads sem destino" nem "R$ 17.170/mês que a agenda recusa". Correção completa e as três causas em **DEC-RB-18** (`DECISOES.md`).
>
> **O que vale a partir de agora:**
>
> | | |
> |---|---:|
> | Sessões/mês que os números dela produzem | **65 a 88 · centro 76** (não 88) |
> | Horas de atendimento | **133 a 152h/mês** |
> | Por dia útil | **6 a 7 horas, só atendendo** |
> | Capacidade declarada por ela | 43 a 78 sessões/mês |
> | **Faturamento implícito** | **~R$ 39.652/mês** (faixa R$ 33k a R$ 46k), **não R$ 28.617** |
>
> **As faixas de demanda e capacidade se sobrepõem, então o gap pode ser zero.** O teto não se prova por aritmética: prova-se pelas três frases dela — *"eu não tenho tempo"*, *"não coloco mais pessoas porque o desgaste"*, e **"eu não quero trazer mais demanda para o meu giro"**.
>
> **Âncora 4 (custo da inação) troca de número:** deixa de ser "R$ 17.170 recusados" e passa a ser **o faturamento tem teto nas horas, e as horas têm teto no desgaste**. O gate de recusa nº 2 continua não ativando.

---

## VEREDITO

**PROPOR.** Nenhuma das 5 condições de recusa está ativa. Duas ressalvas, ambas de execução nossa:

| | |
|---|---|
| **Produto** | Assessoria Completa com tráfego pago |
| **Preço** | **R$ 4.500/mês × 6 meses = R$ 27.000.** Sem setup, sem desconto. Mês 1 pago antes do kickoff |
| **Verba de mídia** | **dela, à parte.** Piso R$ 2.000/mês · alvo R$ 3.000/mês |
| **Breakeven dela** | **2 vendas de mentoria/mês** com a alavanca de preço rodando |
| **Payback** | **mês 2** no conservador · **mês 1** no provável |
| **Nosso valor-hora** | **R$ 269/h** a 100h de escopo travado ✓ (piso R$ 250) |
| ⚠️ **Ressalva 1** | **+10h no contrato já fura o piso.** Escopo travado não é preferência, é condição de viabilidade |
| ⚠️ **Ressalva 2** | **3 meses não fecha a R$ 4.500** (R$ 225/h). Se for 3 meses, o preço é R$ 5.000/mês |

---

## 1. O PROBLEMA, EM NÚMEROS

> Legenda de fonte, em todo o documento: **[D]** dado dela na call · **[M]** derivado do modelo · **[H]** hipótese a validar.

### 1.1 A conta que não fecha

| Entrada | Valor | Fonte |
|---|---|---|
| Leads/mês | 100 | [D] C-05 |
| Lead → consulta | 27,5% | [D] C-06 |
| Consulta → tratamento | 55% | [D] C-07 |
| Consulta | R$ 290 | [D] C-02 |
| Tratamento | R$ 2.500 · 4 encontros · 2,5 meses | [D] C-03, C-04 |
| Capacidade | 2,5 atendimentos/dia × 22 dias = **55 sessões/mês** | [D] C-32 · [M] |

**O funil, se a agenda fosse infinita:** 27,5 consultas e 15,1 tratamentos/mês → **88 sessões/mês** de demanda.
**A agenda comporta 55.**

### 1.2 O que a agenda de fato absorve

Resolvendo pela capacidade: **9,5 tratamentos/mês · 17,2 consultas/mês · 62 dos 100 leads.**

| | |
|---|---|
| **Leads sem destino** | **38 por mês** [M] |
| **Receita estimada hoje** | **R$ 28.617/mês** [M] |
| Receita teórica do funil | R$ 45.788/mês [M] |
| **Diferença** | **R$ 17.170/mês que o funil produz e a agenda recusa** [M] |

> ⚠️ **A linha "R$ 28.617" é MODELO, não dado.** O faturamento realizado não foi perguntado na call (C-58). **Validar antes de mostrar qualquer número a ela.** Se o realizado for muito diferente, o modelo inteiro se recalibra em `MODELO-RENATA.xlsx`.

### 1.3 A frase que isso autoriza

> **Você não bate a meta todo mês porque a demanda dá exatamente para ela. Você bate porque a agenda enche antes.**

**A mentoria em grupo não é produto novo. É o destino do excedente que já chega e já foi pago por outra pessoa.**

---

## 2. O QUE VENDEMOS, E O QUE FICA DE FORA

### 2.1 Dentro

| Frente | Entrega |
|---|---|
| **Alicerce** | ICP escrito · oferta da mentoria (formato, preço, promessa) · narrativa central · nome fixo do mecanismo (C-19) |
| **Conversão** | roteiro da call de vendas, formalizando a ferramenta que já converte (C-17) · **1** página |
| **Aquisição** | campanha digital nova, fora do raio de 50 km · 6-10 criativos · tracking |
| **Operação** | gestão da campanha · criativos de reposição · call quinzenal · relatório mensal |

### 2.2 Fora, e nomeado como fora

- **O tráfego local que já roda.** ⭐ Fica com o fornecedor atual. Ele funciona, já é pago, e a conta é deles (C-08). **Não cobramos por gerir o que já funciona, e isso resolve o conflito de C-59 sem ela precisar romper com ninguém.**
- VSL · área de membros · múltiplas páginas · funil de e-mail · produção de conteúdo orgânico · gestão do Instagram.

**Cada item desta lista que entrar depois é aditivo com preço**, não cortesia. É o que impede o anti-padrão Débora de se repetir (C-61).

---

## 3. AS TRÊS ALAVANCAS

### ⭐ Alavanca 1 — PREÇO do presencial. Semana 2. Custo zero.

**A alavanca mais rápida não é vender mais. É cobrar mais pelo que já vende.** E ela já quer fazer isso: *"eu vou dobrar o valor... porque eu quero gerar escassez de tempo no meu tempo"* (C-27, C-28). Só está esperando o grupo existir para justificar.

| Cenário | Preço | Perda de volume | Ganho de margem/mês | Agenda liberada |
|---|---:|---:|---:|---:|
| Conservador | R$ 3.500 (+40%) | 20% | **+R$ 2.694** | 11 sessões |
| Provável | R$ 5.000 (+100%) | 40% | **+R$ 4.490** | 22 sessões |
| Otimista | R$ 5.000 (+100%) | 30% | **+R$ 8.980** | 16,5 sessões |

**O ponto que faz esta alavanca ser gratuita:** o volume que ela perde é volume que ela **não conseguia atender de qualquer forma**. Perder 20% de uma agenda saturada não custa receita, custa fila. **E a agenda liberada é exatamente o espaço onde o grupo cabe.**

**Não depende de nós, de tráfego, de página nem de verba.** Entra no mês 1.

### Alavanca 2 — MENTORIA absorve o excedente

38 leads/mês sem destino. Margem por venda a R$ 2.500 com 90%: **R$ 2.250**.

| Cenário | Conversão lead → mentoria | Vendas/mês | Margem/mês |
|---|---:|---:|---:|
| Conservador | 5,0% | 1,9 | R$ 4.219 |
| Provável | 7,5% | 2,8 | R$ 6.328 |
| Otimista | 12,5% | 4,7 | R$ 10.547 |

> **`n=0` na conversão do funil digital de mentoria.** Referência interna, e é só referência: o funil presencial dela converte lead→consulta a 27,5% e consulta→tratamento a 55%, ou 15% composto. **5% para um produto novo em canal novo é deliberadamente pessimista.**

### ⭐ Alavanca 3 — A BASE JÁ ATENDIDA. É a que estava faltando.

**A bio dela declara "+500 pessoas ajudadas" [H] e o assunto não apareceu uma única vez em 36 minutos** — nem por ela, nem por nós.

**É a lista mais quente que existe para uma mentoria em grupo:** pessoas que já pagaram, já tiveram resultado, e já confiam. **Custo de mídia para falar com elas: zero.**

| Cenário | Conversão em 90 dias | Vendas | Margem total |
|---|---:|---:|---:|
| Conservador | 1% | 5 | R$ 11.250 |
| Provável | 2% | 10 | R$ 22.500 |
| Otimista | 4% | 20 | R$ 45.000 |

**É a régua-mãe aplicada** (`CLAUDE.md` §9): caixa agora → prova → construção → escala. **Falar com quem já comprou vem antes de comprar mídia para quem nunca ouviu falar dela.**

⚠️ **É alavanca de uma vez só.** A base não se regenera nessa taxa: modelada concentrada nos meses 1 a 3 e zerada depois. **E os 500 são da bio, não verificados.** Validar o número real de contatos ativos.

---

## 4. ÂNCORA 1 — BREAKEVEN

### Dela

**Sem nenhuma alavanca de preço:**

| Desembolso mensal | Vendas de mentoria necessárias (ticket 2.500) | (ticket 3.000) |
|---|---:|---:|
| R$ 4.500 + R$ 2.000 de verba = R$ 6.500 | 2,9 | 2,4 |
| R$ 4.500 + R$ 3.000 de verba = R$ 7.500 | 3,3 | 2,8 |
| R$ 4.500 + R$ 5.000 de verba = R$ 9.500 | 4,2 | 3,5 |

**Com a alavanca de preço rodando (a conservadora, +40%):**

| Desembolso | Custo residual | **Vendas necessárias** |
|---|---:|---:|
| R$ 6.500 | R$ 3.806 | **1,7** |
| R$ 7.500 | R$ 4.806 | **2,1** |
| R$ 9.500 | R$ 6.806 | **3,0** |

> ⭐ **O breakeven é 2 vendas de mentoria por mês. Ela já fechou 16, na unha, sem tráfego, sem página e sem oferta escrita** (C-11).

**Régua de sanidade dos 30%:** o volume atual do produto-alvo é zero — cinco meses sem vender mentoria (C-14). Formalmente cai no caso especial do §4 do método. **Justificativa escrita, como a régua exige: existe histórico de 16 vendas com o mesmo ticket. É retomada, não estreia.**

### Nosso (não vai ao cliente)

**100h em 6 meses.** Prejuízo a partir de 108h. Detalhe na Âncora 7.

---

## 5. ÂNCORA 2 — PAYBACK

> **Ela definiu o critério sozinha:** *"dependendo do valor, ele teria que começar a entrar o dinheiro pra se pagar"* (C-63). **Não é objeção. É régua. E o modelo responde a ela antes de ser feita.**

### Cenário CONSERVADOR — verba R$ 2.000 · desembolso R$ 6.500/mês

| Mês | Saída | Preço | Mentoria | Base | Entrada | Acum. saída | Acum. entrada | **Saldo** |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 6.500 | 2.694 | 0 | 2.250 | 4.944 | 6.500 | 4.944 | −1.556 |
| 2 | 6.500 | 2.694 | 2.109 | 4.500 | 9.304 | 13.000 | 14.248 | **+1.248** |
| 3 | 6.500 | 2.694 | 4.219 | 4.500 | 11.413 | 19.500 | 25.661 | +6.161 |
| 4 | 6.500 | 2.694 | 4.219 | 0 | 6.913 | 26.000 | 32.573 | +6.573 |
| 5 | 6.500 | 2.694 | 4.219 | 0 | 6.913 | 32.500 | 39.486 | +6.986 |
| 6 | 6.500 | 2.694 | 4.219 | 0 | 6.913 | 39.000 | 46.399 | **+7.399** |

**Payback: mês 2. ROI sobre desembolso em 6 meses: 19%.**

### Cenário PROVÁVEL — verba R$ 3.000 · desembolso R$ 7.500/mês

| Mês | Entrada | Acum. saída | Acum. entrada | **Saldo** |
|---:|---:|---:|---:|---:|
| 1 | 8.990 | 7.500 | 8.990 | **+1.490** |
| 2 | 16.654 | 15.000 | 25.645 | +10.645 |
| 3 | 19.818 | 22.500 | 45.463 | +22.963 |
| 6 | 10.818 | 45.000 | 77.918 | **+32.918** |

**Payback: mês 1. ROI: 73%.**

### Cenário OTIMISTA — verba R$ 3.000

**Payback: mês 1. Saldo em 6 meses: +R$ 101.344. ROI: 225%.**

### Payback do esforço dela (o que a proposta não pode ignorar)

Fora do desembolso, ela precisa: **decidir o preço novo · gravar criativos · fazer as calls de venda · atender o grupo (1 horário/semana).** O restante é nosso. **O grupo consome um horário por semana, não um horário por aluno** — é o que torna a alavanca 2 compatível com a agenda dela.

---

## 6. ÂNCORA 3 — CURVA DE GERAÇÕES E QUANDO ESCALAR

| G | Quando | O que é | Objetivo | Gate para avançar |
|---|---|---|---|---|
| **G0** | semanas 1-2 | baseline medido + **preço ajustado** | **caixa no mês 1**, custo zero | números na mão |
| **G1** | mês 1 | oferta escrita, 1 página, campanha no ar | **gerar dado, não lucro** | CPL medido + 30-50 eventos/semana |
| **G2** | mês 2-3 | oferta corrigida sobre o dado real de G1 | **atingir breakeven** | CPA ≤ alvo em 1 combinação criativo+página, 2 semanas |
| **G3** | mês 4-5 | CPA estável dentro da faixa | **permitir escala** | 2 meses de CPA na faixa |
| **G4** | mês 6+ | verba sobe mantendo CPA | **multiplicar** | — |

**A regra de escala, e ela é dura: verba só sobe em G3.** Subir verba em G1 ou G2 é comprar aprendizado sujo. `METODO-TRAFEGO-PAGO` §2.3.

**Probabilidade de avanço G1→G2: `n=0`.** Não temos dado do funil digital de mentoria dela. **`n=0` escrito assim é mais forte que um percentual inventado — e a G1 existe exatamente para produzir esse número.**

> **A promessa que esta âncora autoriza, e é a única que se sustenta:** *em 30 dias você tem o número que hoje não existe; em 60, o funil corrigido sobre ele; em 90, a faixa que permite decidir se vale subir verba.* **Não "você vai vender X".**

### Matemática reversa do tráfego (`METODO-TRAFEGO-PAGO` §2.2)

| | |
|---|---:|
| Lucro por venda de mentoria | R$ 2.250 |
| **CPA máximo** (30% do lucro, padrão) | **R$ 675** |
| CPA máximo (50%, se LTV comprovado) | R$ 1.125 |

| Conversão lead→venda | CPL máximo (30%) | (50%) |
|---:|---:|---:|
| 5,0% | R$ 33,75 | R$ 56,25 |
| 7,5% | R$ 50,62 | R$ 84,38 |
| 12,5% | R$ 84,38 | R$ 140,62 |

**Piso de eventos:** otimizar para **lead/conversa**, nunca para a compra da mentoria — o evento de compra não atinge volume. Alvo de 30-50 eventos/semana. A um CPL de R$ 25 [H], isso é **R$ 3.000 a R$ 5.000/mês**.

⚠️ **Verba abaixo de R$ 2.000/mês valida mensagem, não escala.** `METODO-TRAFEGO-PAGO` §5.3 obriga a dizer isso **por escrito** na proposta.

---

## 7. ÂNCORA 4 — CUSTO DA INAÇÃO

**R$ 17.170/mês** [M]: a diferença entre o que o funil dela produz e o que a agenda absorve. **38 leads por mês que ela paga para atrair e não tem onde colocar.**

E o custo continua depois: **cinco meses sem vender mentoria** (C-14) enquanto a máquina de leads seguiu rodando e cobrando.

**Gate de recusa:** custo da inação (R$ 17.170/mês) contra preço (R$ 6.500-7.500/mês) → **2,3× a 2,6×**. Gate não ativa.

---

## 8. ÂNCORA 5 — CONDIÇÕES DE VALIDADE

> **Cada uma carrega o que acontece se falhar.** Nenhuma é "precisamos disso".

| Condição | Dono | Prazo | O que quebra |
|---|---|---|---|
| **Faturamento realizado** (jul e ago) | Renata | antes da proposta final | **sem ele o modelo inteiro é hipótese.** Números recalibram |
| **Decisão do preço novo do presencial** | Renata | semana 1 | a alavanca 1 não entra, e o breakeven sobe de 2 para 3,3 vendas/mês |
| **Quem é dono da conta de anúncios, do pixel e dos públicos** | Renata | antes do kickoff | ou disputamos a conta do fornecedor atual, ou construímos sobre ativo de terceiro (C-59) |
| **Verba de mídia mínima R$ 2.000/mês** | Renata | mês 1 | abaixo disso a campanha valida mensagem e não escala. Projeção deixa de valer |
| **Formato e preço da mentoria decididos** | Renata | semana 2 | sem produto definido não há página, copy nem campanha. Tudo desloca |
| **Lista real de contatos da base** | Renata | semana 1 | a alavanca 3 some, e o payback vai do mês 2 para o mês 4 no conservador |
| **Gravação de criativos** | Renata | quinzenal | fadiga de criativo derruba CPA a partir da 4ª semana |
| **Aprovação de copy e página** | Renata | 48h por peça | cada 48h de atraso desloca a entrada da campanha no mesmo tanto |
| ⚠️ **Os 14 e 21 dias ditos na call (C-52)** | Victor | — | **contados a partir do kickoff e condicionados às condições acima.** Sem isso, é compromisso sem data de origem, e é o padrão que queimou a conta Bárbara |

---

## 9. ÂNCORA 6 — TRÊS CENÁRIOS

| | Conservador | Provável | Otimista |
|---|---|---|---|
| **Premissa que muda** | preço +40%, conversão de mentoria a 5%, base a 1% | preço +100%, mentoria a 7,5%, base a 2% | preço +100% com perda menor, mentoria a 12,5%, base a 4% |
| Verba | R$ 2.000 | R$ 3.000 | R$ 3.000 |
| Desembolso/mês | R$ 6.500 | R$ 7.500 | R$ 7.500 |
| **Payback** | **mês 2** | **mês 1** | **mês 1** |
| Saldo em 6 meses | **+R$ 7.399** | +R$ 32.918 | +R$ 101.344 |
| ROI | 19% | 73% | 225% |
| **Faturamento no mês 6** | R$ 35.144 | R$ 38.381 | R$ 48.294 |
| vs. hoje (R$ 28.617) | **+R$ 6.527** | +R$ 9.764 | +R$ 19.677 |
| Sessões/mês ocupadas | 44 de 55 | 33 de 55 | 38 de 55 |

### ✅ O conservador é aceitável

**Ela sai positiva em R$ 7.399, com payback no mês 2, e com a agenda mais vazia do que hoje** — 44 sessões contra 55, porque o preço maior comprou de volta o tempo dela. **Que era o pedido original.**

**O conservador não é o provável menos um pouco.** É o cenário em que a hipótese central — de que o excedente de leads converte em mentoria — quase não se confirma (5%), e mesmo assim as outras duas alavancas sustentam a conta.

---

## 10. ÂNCORA 7 — VIABILIDADE NOSSA ⚠️ (NÃO VAI AO CLIENTE)

### Orçamento de horas

**Mês 1 — construção: 33h**
ICP + oferta + narrativa 8h · roteiro da call 3h · página 8h · criativos 6h · campanha e tracking 5h · onboarding 3h

**Meses 2-6 — operação: 13,5h/mês**
gestão de campanha 5h · criativos novos 3,5h · call quinzenal + relatório 3h · ajustes 2h

| | 6 meses | 3 meses |
|---|---:|---:|
| Horas totais | **100h** (16,8h/mês) | 60h (20h/mês) |
| Receita | R$ 27.000 | R$ 13.500 |
| **Valor-hora** | **R$ 269/h** ✓ | **R$ 225/h** ✗ |
| Teto de horas para o piso | 108h | 54h |
| Folga | **8h** | **−6h** |

### 🔴 Os dois achados internos

**1. A folga é de 8 horas em 6 meses.**

| Horas extras | Total | Valor-hora | |
|---:|---:|---:|---|
| +0h | 100h | R$ 269 | ✓ |
| **+10h** | 110h | **R$ 244** | ✗ **fura o piso** |
| +20h | 120h | R$ 224 | ✗ |
| +40h | 140h | R$ 192 | ✗ |

**Escopo travado não é preferência de método. É a condição de viabilidade desta conta.** Uma página a mais, um VSL "rápido", um mês de conteúdo "de bônus" — qualquer um deles derruba a proposta abaixo do piso e ativa a condição de recusa nº 5.

**2. Três meses não fecha a R$ 4.500.** O mês 1 de construção dilui em menos meses e o valor-hora cai a R$ 225. **Se ela pedir 3 meses, o preço é R$ 5.000/mês (R$ 15.000), não R$ 4.500.** E vale dizer o motivo real, que é honesto e é forte: **três meses compram G1 e metade de G2 — a geração que, por definição, ainda não devolve.**

### Demais réguas

| Régua | Limite | Posição | |
|---|---|---|---|
| Margem de contribuição | ≥ 70% | ~95% (custo é hora + ferramenta) | ✓ |
| Desconto | ≤ 10%, só setup, nunca MRR | **zero** | ✓ |
| Escopo vs. faixa de produto | anti-padrão Débora | Completa a preço de Completa | ✓ |
| **Capacidade** | teto 70%, máx. 3 onboardings | 13,5h/mês, pico de 33h no M1 | 🔴 **GATE NÃO RODADO** |

🔴 **Nakielly precisa validar capacidade antes de qualquer número sair** (`POLITICAS` §1: os dois gates, sempre).

---

## 10-bis. ESTRUTURA DE PREÇO E PAGAMENTO ⚠️ (só as portas vão ao cliente)

> **Régua nova, permanente, alcance de carteira inteira (22/08/2026, alçada Victor):**
> **serviço por hora nunca é mostrado a cliente.** Preço se decide por **capacidade geradora de riqueza** — quanto o ativo construído faz o cliente ganhar, e em quanto tempo.
> **O piso de R$ 250/h não morre: muda de função.** Deixa de ser método de precificação e passa a ser **checagem interna de viabilidade** (Âncora 7). Uma coisa é como o preço se decide. Outra é como se verifica se ele não quebra a operação. A primeira olha para o cliente, a segunda olha para nós, e a segunda **nunca sai daqui**.

### 10-bis.1 A base

**R$ 27.000 · 6 meses · escopo travado.** Este é o único número que existe. As três portas são formas de pagar o mesmo contrato.

| Porta | O que ela paga | Total bruto | Líquido nosso | Checagem a 100h |
|---|---|---:|---:|---:|
| **1 · Pix à vista** | pagamento único, 5% off | R$ 25.650 | R$ 25.650 | R$ 256,50/h ✓ |
| **2 · Cartão 12x** | 12 × R$ 2.565 | R$ 30.780 | **depende do modelo de taxa, ver 10-bis.2** | — |
| **3 · Entrada + mensal** | R$ 6.000 + R$ 3.500 × 6 | R$ 27.000 | R$ 27.000 | R$ 270/h ✓ |

**🟡 Achado da porta 1.** Os 5% de desconto à vista **cortam a folga de horas de 8h para 2,6h** (teto passa de 108h para 102,6h). Não fura o piso, mas apaga a margem de erro. **Se ela escolher Pix, o escopo trava com dureza dobrada.** O desconto passa na régua (`POLITICAS`: ≤10%, e este é desconto financeiro por antecipação, não desconto por volume).

### 10-bis.2 🔴 A pergunta que precisa ser respondida antes de a porta 2 ir à mesa

Existem dois modelos de taxa de cartão no mercado, e eles produzem números diferentes a partir do mesmo "14%":

| Modelo | Como funciona | Bruto a cobrar | Parcela | Líquido nosso |
|---|---|---:|---:|---:|
| **Coeficiente de parcelamento** (comprador paga os juros) | o valor é remarcado, a operadora repassa o cheio | R$ 30.780 | R$ 2.565 | **R$ 27.000** ✓ |
| **Taxa deduzida do bruto** (o padrão de gateway) | 14% saem do que entra | R$ 30.780 | R$ 2.565 | **R$ 26.470,80** ✗ |

**No segundo modelo, R$ 2.565 sub-recupera R$ 529,20.** A correção não é multiplicar por 1,14, é dividir por 0,86:

```
bruto = líquido ÷ (1 − taxa)
27.000 ÷ 0,86 = R$ 31.395,35  →  12 × R$ 2.616,28  (arredondar para 12 × R$ 2.620)
```

**O mesmo vale para o 18x a 29%, e ali o buraco é maior:**

| | Coeficiente | Taxa deduzida |
|---|---:|---:|
| Bruto | R$ 34.830 | R$ 38.028,17 |
| Parcela | R$ 1.935 | R$ 2.112,68 |
| Diferença por parcela | — | **+R$ 177,68** |

🔴 **Pendência: confirmar com a operadora qual dos dois modelos vale, antes de a porta 2 ser dita em voz alta.** A taxa de 14% é `[H]`, não `[D]`. Se for taxa deduzida, os artifacts precisam de um número novo.

**A régua que não muda:** taxa é sempre repassada, nunca absorvida (`POLITICAS`). O precedente da conta é aritmético: absorver 29% sobre R$ 27.000 custaria **R$ 7.830** e levaria a operação a R$ 191/h, quase 25% abaixo do piso. Taxa absorvida sai de algum lugar, e o lugar costuma ser a entrega.

### 10-bis.3 Por que a entrada da porta 3 existe (e não é taxa de adesão)

O argumento **para dentro** é descasamento entre carga e recebimento. **Para fora, o argumento é o ativo**, e ele é verdadeiro pelos dois lados.

| | Carga do mês 1 | Recebido no mês 1 | Descasamento |
|---|---:|---:|---|
| Mensal liso a R$ 4.500 | 33% do trabalho | 16,7% do contrato | **−16,5 pontos** |
| **Com entrada de R$ 6.000** | 33% do trabalho | **35,2%** (R$ 9.500) | **+2,2 pontos** ✓ |

**O mês 1 é o único que entrega uma coisa que não existia:** oferta escrita, nome do mecanismo, narrativa, página, funil, campanha no ar. Os cinco seguintes operam, medem e corrigem o que ele construiu. **A entrada compra a construção, a mensalidade compra a operação.** É a mesma frase para os dois públicos, o que é o teste de que ela é honesta.

### 10-bis.4 O ciclo 2 é onde mora o desconto, não o contrato longo

| | Ciclo 1 (M1-M6) | Ciclo 2 (M7-M12) |
|---|---:|---:|
| Construção | 33h | ~9h `[H]` (funil da fase 3) |
| Operação | 67h | 81h |
| **Total** | **100h** | **~90h** `[H]` |
| Teto de horas para o piso a R$ 27.000 | 108h | 108h |
| **Espaço de desconto** | zero | **até R$ 4.500 (16,7%)** |

**Recomendação: renovação a R$ 24.300 (10% off).** Dá R$ 270/h a 90h ✓ e **10% é exatamente o teto da régua de desconto**, o que faz o número passar sem exceção registrada.

**Por que isso importa agora:** o desconto de renovação é honesto porque o ciclo 2 **não repete a construção**. Desconto no contrato de 12 meses assinado hoje é desconto sobre trabalho que ainda nem foi orçado. São coisas diferentes com a mesma cara.

### 10-bis.5 🔴 O contrato de 12 meses a R$ 4.200 é mais apertado do que parece

R$ 4.200 × 12 = **R$ 50.400.** Teto de horas para o piso: **201,6h.**

| Linha | Horas |
|---|---:|
| Construção do mês 1 | 33h |
| Operação, 11 meses × 13,5h | 148,5h |
| **Subtotal** | **181,5h** |
| **Folga para construir as fases 3 e 4 inteiras** | **20,1h** |

**Vinte horas para arquitetar um produto de escala e um funil novo é pouco.** O artifact promete "as quatro fases inteiras, incluindo o produto de escala e o funil que substitui a call individual" — e isso é construção, não operação.

**Três saídas, e uma delas precisa ser escolhida antes de os 12 meses irem à mesa:**

1. **Travar o escopo das fases 3-4 em 20h** e escrever o que fica de fora. Honesto, mas magro.
2. **Subir para R$ 4.400/mês (R$ 52.800).** Teto de 211,2h, folga de 29,7h.
3. **Não vender 12 meses hoje.** Vender 6 + renovação a R$ 24.300, que soma **R$ 51.300** e chega no mesmo lugar sem prometer fase 4 antes de a fase 2 existir.

**A 3 é a que está alinhada com o que ele já decidiu** ("6 meses como principal, 12 como alternativa possível", "mais viável, talvez, fazer de 6 em 6") **e com a régua do ciclo 2.** A diferença entre a 3 e o contrato de 12 meses a R$ 4.200 é de R$ 900 no total, e a 3 não compra risco de escopo.

### 10-bis.6 O que sai desta seção e vai ao cliente

**Vai:** as três portas com os números · a alternativa de 12 meses · a garantia de execução · a frase da entrada como construção.
**Não vai, nunca:** horas, valor-hora, piso, folga, líquido, margem, modelo de taxa, e a tabela do 10-bis.5.

---

## 11. OS 3 GATES DE SAÍDA

**Gate A — procedência.** ✓ Todo número marcado [D], [M] ou [H]. **O que for [M] ou [H] é apresentado a ela como estimativa com a premissa à vista, nunca como fato dela.**

**Gate B — a fronteira do que NÃO se promete.** Escrita, e vai na proposta:

> Não prometemos faturamento, número de vendas, alcance nem seguidor. **Prometemos:** a estrutura construída e no ar nos prazos acordados, a campanha gerando dado medido, e a decisão de escala tomada com número em vez de intuição. **Os cenários deste documento são projeções sobre premissas nomeadas, e cada uma delas está escrita ao lado do número.** A execução do que depende dela é dela; a projeção deixa de valer se as condições da §8 falharem.

**Sem garantia de resultado.** Vedada nesta conta (DEC-RB-06). **Nota de tentação, e por isso fica escrito:** o critério dela (*"tem que se pagar"*) convida a oferecer garantia. **A resposta correta não é garantir: é o breakeven de 2 vendas para quem já fez 16.**

**Gate C — via declarada. VIA DE CAIXA.** A alavanca 1 gera caixa no mês 1 sem construção nenhuma. A alavanca 3 gera caixa sem mídia. **Só a alavanca 2 depende de construção, e ela é a terceira na ordem — não a primeira.**

---

## 12. AS 5 CONDIÇÕES DE RECUSA

| # | Condição | Estado |
|---|---|---|
| 1 | Breakeven exige > 30% de aumento sobre o volume atual | **não ativa** — 2 vendas/mês contra 16 já feitas; justificativa escrita (§4) |
| 2 | Custo da inação < preço | **não ativa** — R$ 17.170 contra R$ 6.500-7.500 |
| 3 | Cenário conservador machuca | **não ativa** — payback no mês 2, +R$ 7.399, agenda mais leve |
| 4 | Não temos capacidade | 🔴 **A VERIFICAR** — gate da Nakielly não rodado |
| 5 | Só fecha violando nossa régua | **não ativa a 6 meses** (R$ 269/h) · **ATIVA a 3 meses** (R$ 225/h) |

---

## 13. O QUE FALTA ANTES DE O NÚMERO SAIR

| # | O que | Dono | Quando |
|---|---|---|---|
| 1 | 🔴 **Faturamento realizado de julho e agosto** | Renata | primeira pergunta de amanhã |
| 2 | 🔴 **Gate de capacidade** | Nakielly | antes da call |
| 3 | 🔴 **Quantos contatos reais tem a base** (os "+500") | Renata | amanhã |
| 4 | Verba de mídia atual e de quem é a conta | Renata | amanhã |
| 5 | Ticket da mentoria: R$ 2.500 ou R$ 3.000 | Victor + Renata | na call |
| 6 | Traduzir esta folha na **folha dela** (omite a Âncora 7 inteira) | Victor | antes das 16h |

**Se o faturamento vier muito diferente de R$ 28.617, recalibrar em `MODELO-RENATA.xlsx` antes de mostrar qualquer cenário.** Um número errado apresentado com confiança custa mais que um número faltando apresentado com honestidade.

---

*Criado 21/08/2026, após a destilação da call do mesmo dia. Todas as 7 âncoras preenchidas, 3 gates fechados, 5 condições de recusa verificadas. Duas ressalvas internas registradas: a folga de horas é de 8h em 6 meses, e o contrato de 3 meses não fecha o piso. Três âncoras dependem de números que só a call de amanhã fecha, e estão marcadas como faltantes, não estimadas em silêncio.*
