# MODELO DE EQUILÍBRIO DE AGENDA — Renata Betta

> **🔴 22/08/2026 — a base de 55 slots/mês é o CENTRO de uma faixa, não um fato.** A capacidade declarada por ela vai de **43 a 78 sessões/mês** (2 a 3 por dia, 5 a 6 dias). Os 55 seguem servindo como caso central para as taxas de câmbio deste modelo, **mas nenhum número daqui vai a cliente como se fosse medido.** Ver DEC-RB-18.

> **Tipo:** modelo operacional (camada 2) · **Criado em:** 2026-08-21 · **Dono:** Victor
> **Origem:** ponto levantado pelo Victor em 21/08/2026 — *"a mudança dinâmica deve ser balanceada em termos de agenda e receita: se x mentorias, então y atendimentos presenciais. Se x calls de vendas retornam y, então o cálculo precisa estar em dia."*
> **Estado:** 🟡 **estrutura fechada, calibração fina depois do fechamento da Assessoria.** Três premissas ainda são `[H]`.
> **Fatos:** `DESTILACAO-CALL-2026-08-21.md` · **Modelo financeiro:** `MODELO-ECONOMICO-2026-08-21.md` · **Script:** `equilibrio.py`

---

## 🔴 0. A CORREÇÃO QUE ESTE DOCUMENTO FAZ

**O modelo entregue em 21/08 (`escada.py`, `PLANO-DE-SUCESSO-RENATA.md`) não contava as calls de venda como consumo de agenda. Contando, ele quebra.**

A pergunta do Victor estava certa, e ela derruba três números que já estavam escritos:

| Cenário | O plano dizia | Com a call de venda dentro | |
|---|---:|---:|---|
| Conservador | 44 de 55 slots | **52 de 55 (94%)** | agenda continua cheia |
| Provável | 33 de 55 | **43 de 55 (77%)** | ainda folga, mas menos |
| **Otimista** | 38 de 55 | **56 de 55 (102%)** | 🔴 **inviável** |

**O cenário otimista, do jeito que estava modelado, não cabe na agenda dela.** Vender mais mentoria por call 1-a-1 estoura o tempo antes de estourar o caixa.

**E é um achado, não só um erro:** o modelo agora mostra **onde o gargalo se desloca**, que é a informação mais valiosa de toda a escada. Ver §3.

---

## 1. A UNIDADE: o slot, e por que ele é a régua certa

**Slot = um horário de atendimento dela.** Média de ~1,75h (ela atende de 1h30 a 2h, C-32).
**Capacidade: 2,5 atendimentos/dia × 22 dias = 55 slots/mês.**

A unidade importa porque ela põe coisas diferentes na mesma balança: um atendimento individual, um encontro de grupo e uma call de venda são todos **tempo dela**, e é o tempo dela que está esgotado.

---

## 2. ⭐ O CUSTO REAL DE UM TRATAMENTO SÃO 5,8 SLOTS, NÃO 4

**É o número menos óbvio do modelo inteiro, e é o que explica por que a agenda enche antes da conta fechar.**

Um tratamento tem 4 encontros. Mas para fechar **um** tratamento ela precisa fazer **1,82 consultas**, porque só 55% das consultas convertem (C-07). A consulta que não fecha também consumiu um horário.

```
custo de 1 tratamento = 4 encontros  +  1 ÷ 0,55 consultas
                      = 4           +  1,82
                      = 5,82 slots
```

**Quem conta 4 subestima a própria agenda em 45%.** É por isso que ela sente que "não tem braço" mesmo com a conta parecendo caber.

### O custo de um horário de grupo

**4 slots por mês** (1 encontro por semana), **atendendo até 12 pessoas** `[M, parâmetro]`.

O custo **não muda** com o número de alunos. É a única linha do modelo em que isso acontece, e é a razão de a escada existir.

### ⭐ A taxa de câmbio

> **Um tratamento individual a menos libera 5,82 slots, que compram 1,45 horários de grupo por mês.**
> Ou, ao contrário: **um horário de grupo por semana custa 0,69 de um tratamento individual.**

**Um tratamento individual atende 1 pessoa. 1,45 horários de grupo atendem até 17.**

---

## 3. ⭐ ONDE O GARGALO SE DESLOCA (o achado)

A call de venda 1-a-1 também consome agenda. A 30% de conversão `[H]`, cada venda exige 3,3 calls.

| Vendas de mentoria/mês | Calls necessárias | Slots em call | Slots em grupo | Total | Sobra p/ presencial |
|---:|---:|---:|---:|---:|---:|
| 3 | 10 | 6,0 | 4 | 10,0 | 45,0 |
| 5 | 17 | 10,0 | 8 | 18,0 | 37,0 |
| 10 | 33 | 20,0 | 12 | 32,0 | 23,0 |
| 14 | 47 | 28,0 | 16 | 44,0 | 11,0 |
| **18** | **60** | **36,0** | **20** | **56,0** | **🔴 −1,0** |

> **A partir de cerca de 14 vendas por mês, vender consome mais agenda do que entregar.**
> **O teto sai do atendimento e vai para a venda.**

**A mentoria em grupo resolve o gargalo da entrega e cria o gargalo da venda.** Isso não é falha do plano: é a próxima parede, e ela precisa estar no mapa desde o começo, senão a fase 3 trava sem ninguém entender por quê.

---

## 4. A SAÍDA: o mecanismo de venda também precisa escalar

| Modo | 3 vendas | 10 vendas | 18 vendas | Natureza |
|---|---:|---:|---:|---|
| Call 1-a-1 | 6,0 slots | 20,0 | 36,0 | conversão alta, **custo cresce com o volume** |
| **Workshop mensal** | **2,5** | **2,5** | **2,5** | **custo fixo, independe do volume** |
| Página / VSL | 0 | 0 | 0 | zero tempo dela, conversão menor, exige volume |

> ⭐ **O workshop é a call de vendas em grupo.** Ele faz com a venda exatamente o que a mentoria fez com a entrega: **muitas pessoas no mesmo horário.**
> Para 10 vendas: **2,5 slots via workshop contra 20 slots via call. Oito vezes mais barato em tempo.**

**E ela já provou que sabe fazer:** 48 pessoas pagantes em um workshop, há dois anos, sem estrutura e sem saber que era um workshop (C-24).

### 🔴 A decisão de sequência que isto força

**O workshop sai da fase 3 e sobe para a fase 1-2.** Não é enfeite de escala: é a peça que torna o cenário otimista possível.

| Cenário | Vendendo por call 1-a-1 | Vendendo por workshop |
|---|---:|---:|
| Conservador | 52 de 55 (94%) | **50 de 55 (92%)** |
| Provável | 43 de 55 (77%) | **40 de 55 (72%)** |
| **Otimista** | **56 de 55 (102%) 🔴** | **49 de 55 (89%) ✓** |

**Sem o workshop, o sucesso do plano é o que quebra o plano.**

---

## 5. TABELA DE EQUILÍBRIO (a que o Victor pediu)

Para cada volume de mentoria: o que sobra de agenda, e **qual preço o presencial precisa ter** para a receita total bater cada alvo.

| Mentorias/mês | Ativos | Horários/sem | Slots grupo | Slots call | Slots livres | Tratamentos possíveis | Receita mentoria | Preço p/ manter | p/ +20% | p/ +50% |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 | 0,0 | 55,0 | 9,5 | 0 | 2.500 | 3.105 | 4.014 |
| 1 | 3 | 1 | 4 | 2,0 | 49,0 | 8,4 | 2.500 | 2.574 | 3.253 | 4.273 |
| 2 | 6 | 1 | 4 | 4,0 | 47,0 | 8,1 | 5.000 | 2.396 | 3.105 | 4.168 |
| **3** | 9 | 1 | 4 | 6,0 | 45,0 | 7,7 | 7.500 | **2.203** | 2.943 | 4.053 |
| **5** | 15 | 2 | 8 | 10,0 | 37,0 | 6,4 | 12.500 | **2.007** | 2.907 | 4.257 |
| 8 | 24 | 2 | 8 | 16,0 | 31,0 | 5,3 | 20.000 | 1.090 | 2.164 | 3.776 |
| 10 | 30 | 3 | 12 | 20,0 | 23,0 | 4,0 | 25.000 | 388 | 1.836 | 4.007 |
| 14 | 42 | 4 | 16 | 28,0 | 11,0 | 1,9 | 35.000 | — | — | 3.665 |
| 18 | 54 | 5 | 20 | 36,0 | −1,0 | 0,0 | 45.000 | — | — | — |

*Receita base de referência: R$ 28.617/mês. Vendas por call 1-a-1 a 30% de conversão.*

### As três leituras que a tabela dá

1. **A partir de 8 vendas/mês o presencial vira sobremesa.** A coluna "preço para manter" despenca porque a mentoria já sustenta a receita sozinha. **A decisão de preço do individual deixa de ser financeira e vira posicionamento.**
2. **Entre 3 e 5 vendas/mês está a zona confortável do primeiro semestre.** Cabe na agenda, sustenta o preço do individual em faixa alta, e não exige mecanismo de venda novo.
3. **Acima de 10, a linha do preço "para manter" fica irreal** (R$ 388) porque a conta já fecha sem o presencial. É o sinal de que a operação mudou de natureza.

---

## 6. AS REGRAS DE EQUILÍBRIO (o que vira rotina na Assessoria)

Estas viram check mensal, com número, não sensação:

| # | Regra | Gatilho |
|---|---|---|
| **R1** | Slots totais ≤ 47 (85% de 55) | acima disso, ou sobe preço do individual, ou reduz volume de call |
| **R2** | Cada +1,45 horário de grupo/mês exige −1 tratamento individual | é a taxa de câmbio do §2 |
| **R3** | Preço do individual acompanha a tabela do §5 | quando a mentoria sobe de faixa, o individual sobe junto |
| **R4** | Slots em call de venda ≤ 20% do total | passou disso, o mecanismo de venda precisa escalar (§4) |
| **R5** | Preço por encontro do individual ≥ 2× o do grupo | protege a escada. Ver `NARRATIVA-DO-GRUPO.md` §4 |

---

## 7. O QUE FALTA CALIBRAR (depois do fechamento)

**Três premissas hoje são `[H]` e cada uma move o modelo inteiro:**

| # | Premissa | Hoje | Como medir | Impacto se errada |
|---|---|---|---|---|
| 1 | **Conversão da call de venda da mentoria** | 30% `[H]` | as 10 primeiras calls | move o §3 inteiro. A 50%, o gargalo da venda some até ~25 vendas/mês |
| 2 | **Pessoas por horário de grupo** | 12 `[M]` | decisão dela sobre tamanho de turma | 20 por horário reduz slots de grupo em 40% |
| 3 | **Duração real do slot** | 1,75h `[M]` | 2 semanas de agenda registrada | se a média real for 2h, a capacidade cai de 55 para 48 |

**Também a calibrar:** duração da call de venda (0,6 slot `[M]`) · se venda para a base precisa de call ou fecha por mensagem · se o workshop consome mais que 2,5 slots com preparação.

**Instrumento:** as regras R1 a R5 viram uma aba no `MODELO-RENATA.xlsx` no primeiro mês da Assessoria, alimentada pelo registro real de agenda dela.

---

## 8. O QUE MUDA NOS DOCUMENTOS JÁ ESCRITOS

| Documento | O que corrigir |
|---|---|
| `PLANO-DE-SUCESSO-RENATA.md` e o artifact | linha "sessões ocupadas" dos três cenários · a escada passa a mostrar o workshop na fase 1-2 |
| `MODELO-ECONOMICO-2026-08-21.md` | §13 ganha o custo da venda. **A economia não muda: breakeven, payback e cenários financeiros seguem válidos**, porque a correção é de tempo, não de dinheiro |
| `escada.py` | substituído por `equilibrio.py` |

**A economia da proposta não se altera.** O breakeven de 2,1 vendas/mês, o payback no mês 2 e os saldos dos três cenários continuam de pé: a correção é de **agenda**, e agenda não entra no fluxo de caixa. O que muda é a promessa de alívio de tempo, que precisava ser mais honesta.

---

*Criado 21/08/2026 a partir do ponto levantado pelo Victor. Estrutura fechada; três premissas declaradas como hipótese e com instrumento de medição definido. Calibração fina no primeiro mês da Assessoria.*
