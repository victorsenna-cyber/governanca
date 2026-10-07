# 07_TESTES.md
Versão: 1.0 | Criado: 2026-05-24

---

## Princípio de testes

Nunca testar tudo ao mesmo tempo. Isolamento é a única forma de aprender o que funciona.

Uma variável por teste. Prazo mínimo por teste. Critério de corte definido antes de lançar.

---

## Ordem de teste (sequência obrigatória)

```
1. Ângulo     — qual dor ressoa mais
2. Formato    — qual veículo performa melhor com o ângulo vencedor
3. Hook       — qual abertura converte mais no formato vencedor
4. CTA        — qual convite gera mais clique qualificado
5. Visual     — refinamento de estética e paleta
6. Oferta     — percepção de valor e preço (só após 1–4 validados)
```

---

## Fase 1 — Teste de Ângulo

**Objetivo:** descobrir qual dor ressoa mais no ICP

**Setup:**
- 3 criativos com formato igual, ângulos diferentes
- Criativo A: Ângulo 1 (Teto Invisível) — reconhecimento
- Criativo B: Ângulo 3 (Insegurança Silenciosa) — vulnerabilidade
- Criativo C: Ângulo 2 (Descrever vs. Ler) — reframe
- Budget: R$8,33/dia por criativo (R$25 total)
- Prazo: 7 dias
- Variável testada: ângulo (dor explorada)
- Variável constante: formato (Reels texto), hook estrutura, CTA

**Critério de vitória:** CTR link + qualidade de LPV (tempo na página, scroll depth)

---

## Fase 2 — Teste de Formato

**Objetivo:** descobrir qual formato performa melhor com o ângulo vencedor

**Setup:**
- 3 variações do ângulo vencedor
- Formato A: Reels câmera direta
- Formato B: Reels texto animado
- Formato C: Estático
- Mesmo hook, mesmo ângulo — só muda o formato
- Budget: R$8,33/dia por variação
- Prazo: 7 dias

**Critério de vitória:** CTR link + custo por LPV

---

## Fase 3 — Teste de Hook

**Objetivo:** descobrir qual abertura gera mais identificação e clique

**Setup:**
- 3 hooks diferentes para o mesmo ângulo e formato vencedores
- Hook A: reconhecimento direto
- Hook B: vulnerabilidade confissão
- Hook C: contraintuitivo/reframe
- Budget: R$8,33/dia por hook
- Prazo: 5 dias

**Critério de vitória:** thumbstop rate (primeiros 3s) + CTR link

---

## Fase 4 — Teste de CTA

**Objetivo:** descobrir qual convite gera mais clique qualificado

**Setup:**
- 2 variações do CTA na estrutura que performou melhor
- CTA A: convite suave sem preço explícito
- CTA B: continuidade com preço e garantia visíveis
- Budget: R$12,50/dia por variação
- Prazo: 5 dias

**Critério de vitória:** CPC + taxa de LPV → Purchase (quando pixel tiver eventos)

---

## Registro obrigatório de cada teste

| Campo | Conteúdo |
|---|---|
| Hipótese | O que você acredita que vai acontecer |
| Criativo testado | Nome e ID do criativo |
| Variável isolada | O que muda em relação ao controle |
| Período | Data início → data fim |
| Budget | R$ total investido |
| Métrica principal | CTR / LPV / Purchase / CPA |
| Resultado | Número real vs. benchmark |
| Decisão | Escalar / pausar / iterar / descartar |

---

## Benchmarks do nicho

| Métrica | Benchmark mínimo | Meta |
|---|---|---|
| CTR link | 2% | 3–5% |
| LPV rate | 40% dos cliques | 60%+ |
| CPC link | < R$1,50 | < R$0,80 |
| CPM | Monitorar tendência | — |

---

## Regras de corte

**CTR link abaixo de 2% em 5 dias:**
→ Revisar hook (não descartar o ângulo inteiro)
→ Testar mesmo ângulo com hook diferente

**CTR bom + LPV baixo:**
→ Problema na transição hook → LP
→ Verificar se o H1 da LP recebe o estado emocional do hook
→ Não é problema do criativo — é problema de alinhamento

**LPV bom + sem conversão:**
→ Problema na LP — prova social, oferta, estrutura ou CTA da página
→ Não pausar o criativo — auditar a LP primeiro

**Comentários mostram dúvida recorrente:**
→ Criar criativo de objeção específica
→ Registrar a objeção no backlog de criativos

**Criativo gera curiosidade mas não clique:**
→ Ajustar intencionalidade comercial do CTA
→ Testar CTA mais explícito com o mesmo ângulo

---

## Lógica de aprendizado acumulado

Cada teste gera uma hipótese validada ou descartada. Registrar sempre.

```
Hipóteses validadas → entram no sistema de criativos ativos
Hipóteses descartadas → entram no log de aprendizado
Padrões emergentes → alimentam o 09_OTIMIZACAO.md
```

---

## Sequência operacional com R$25/dia

```
Semana 1–2: Fase 1 (3 ângulos simultâneos, R$25/dia)
Semana 3:   Avaliar ângulo vencedor
Semana 4–5: Fase 2 (3 formatos, R$25/dia)
Semana 6:   Avaliar formato vencedor
Semana 7–8: Fase 3 (3 hooks, R$25/dia)
Semana 9:   Avaliar hook vencedor
Semana 10:  Fase 4 (2 CTAs, R$25/dia)
```

**Observação:** com R$25/dia, os testes têm volume limitado. Priorizar qualidade do dado sobre velocidade. CTR qualificado vale mais que volume de clique.
