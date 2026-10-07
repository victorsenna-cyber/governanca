# 13_WORKFLOW_ITERACAO.md
Versão: 1.0 | Criado: 2026-05-24

---

## Princípio de iteração

Iterar é mudar uma variável com hipótese clara. Não é refazer tudo.

Toda iteração parte de um dado, gera uma hipótese e define o que será testado. Sem dado, sem iteração.

---

## Quando MANTER o criativo

Manter quando:
- CTR link acima de 2% e estável
- LPV rate acima de 40%
- Frequência abaixo de 2,5
- Comentários mostram ICP se identificando
- Nenhum sinal de fadiga após 5+ dias

**Ação:** não tocar. Registrar como ativo e monitorar na cadência semanal.

---

## Quando ITERAR o criativo

Iterar quando:
- CTR link abaixo de 2% após 5 dias com R$40+ gasto
- Thumbstop fraco (retenção abaixo de 20% aos 3s)
- Comentários ignoram a proposta (respondem só ao visual)
- Hook gera curiosidade mas não clique
- CTR bom mas LPV baixo (problema de alinhamento criativo → LP)

**O que iterar primeiro:** sempre o hook. Só depois o CTA, o formato ou o ângulo.

---

## Quando PAUSAR o criativo

Pausar quando:
- CTR link abaixo de 1% com múltiplos hooks testados no mesmo ângulo
- Gasto acima de R$100 no ângulo sem nenhuma LPV qualificada
- Comentários mostram público fora do ICP
- Frequência acima de 4 com queda de resultado
- Criativo em fadiga confirmada (ver 09_OTIMIZACAO.md)

**Ação:** pausar o criativo, não o ângulo. Registrar aprendizado. O ângulo pode retornar em outra fase do funil ou com outro formato.

---

## Quando criar NOVA VERSÃO

Criar nova versão (v2, v3...) quando:
- Hook foi testado e não performou — manter ângulo, trocar abertura
- Formato foi testado — criar versão em formato diferente com mesmo ângulo e hook
- CTA foi testado — criar versão com CTA alternativo após ângulo validado
- Criativo pausado por fadiga — reativar com execução nova do mesmo ângulo

**Regra:** nunca mudar mais de uma variável entre versões. Uma variável por iteração.

---

## Sistema de versionamento por aprendizado

**Nomenclatura:**
```
CR-001_v1 → versão original
CR-001_v2 → hook iterado (mesma estrutura, abertura diferente)
CR-001_v3 → CTA iterado (mesmo hook, CTA diferente)
CR-001_v2_formato_estatico → teste de formato com v2 de hook
```

**Registro obrigatório a cada versão:**

| Campo | Conteúdo |
|---|---|
| ID da versão | CR-001_v2 |
| Variável alterada | Hook — de R1 para R2 |
| Motivo da iteração | CTR 1,2% após 7 dias, hook não gerava thumbstop |
| Hipótese da nova versão | Hook de vulnerabilidade terá maior thumbstop para este ICP |
| Data de criação | |
| Data de ativação | |
| KPI de validação | CTR link + thumbstop rate |
| Resultado | |
| Decisão | Escalar / pausar / iterar novamente |

---

## Como transformar dado em nova hipótese

**Dado → Diagnóstico → Hipótese → Iteração**

| Dado observado | Diagnóstico | Hipótese | Iteração |
|---|---|---|---|
| CTR baixo + thumbstop baixo | Hook não para o scroll | Hook diferente terá mais impacto | Trocar abertura, manter ângulo |
| CTR ok + LPV baixo | Criativo promete algo diferente do que a LP entrega | Alinhar estado emocional do hook com H1 da LP | Ajustar hook ou reportar para auditoria de LP |
| LPV ok + sem conversão | Problema na LP (prova, preço, CTA) | Não é problema do criativo | Não pausar — auditar LP |
| Comentários com dúvida recorrente | Objeção não tratada no criativo | Criativo específico de objeção | Criar novo criativo de objeção (registrar no backlog) |
| Curiosidade sem clique | CTA sem intencionalidade comercial | CTA mais explícito no mesmo ângulo | Iterar CTA, manter estrutura |
| Público fora do ICP nos comentários | Ângulo muito amplo ou segmentação fraca | Reformular hook para qualificar melhor | Trocar hook com qualificação implícita do ICP |

---

## Rotina pós-teste (dia 7 de cada criativo)

**Passo 1 — Coletar dados:**
- CTR link
- LPV rate (cliques → PageViews)
- CPC link
- CPM e frequência
- Retenção de vídeo (se disponível)
- Comentários qualitativos (salvar prints dos relevantes)
- Salvamentos e compartilhamentos

**Passo 2 — Diagnosticar:**
- Qual variável causou o resultado?
- O problema está no hook, na estrutura, no CTA ou na transição para LP?
- Há padrão nos comentários?

**Passo 3 — Decidir:**
- MANTER / ESCALAR / ITERAR / PAUSAR
- Se iterar: qual variável? Qual hipótese?

**Passo 4 — Registrar:**
- Atualizar 10_BACKLOG_CRIATIVOS.md (status + resultado)
- Criar nova versão se necessário
- Registrar no log diário (meta-ads/logs/YYYY-MM-DD.md)
- Atualizar log de aprendizados (seção abaixo)

---

## Log de aprendizados acumulados

Registrar aqui a cada ciclo de teste concluído.

**Formato de registro:**

```
DATA: 2026-MM-DD
CRIATIVO: CR-001_v1
RESULTADO: CTR 1,4% — abaixo do benchmark
DIAGNÓSTICO: Hook R1 não gerou thumbstop suficiente para o ICP
APRENDIZADO: Hooks de reconhecimento precisam de especificidade maior — "anos" é vago demais para este público
HIPÓTESE GERADA: Hook com nomeação de situação específica (ex: cliente à sua frente sem saber o que dizer) terá thumbstop maior
PRÓXIMA VERSÃO: CR-001_v2 com Hook R3
```

---

## Cadência de iteração

| Prazo | Ação |
|---|---|
| Dias 1–3 | Verificar entrega e CPM — não tomar decisão ainda |
| Dias 3–5 | Verificar CTR e comentários iniciais |
| Dia 7 | Decisão formal: manter / iterar / pausar |
| Após iteração ativada | Aguardar 5 dias antes de nova decisão |
| Após 2 iterações sem resultado | Pausar o ângulo — registrar aprendizado |

**Regra:** nunca tomar decisão antes do dia 5 com menos de R$30 gasto.

---

## O que não fazer ao iterar

- Mudar duas variáveis ao mesmo tempo (invalida o aprendizado)
- Pausar por ansiedade antes do prazo mínimo
- Refazer o criativo inteiro sem hipótese específica
- Criar nova versão sem registrar o motivo
- Ignorar comentários como fonte de dado qualitativo
- Iterar sem atualizar o 10_BACKLOG_CRIATIVOS.md
