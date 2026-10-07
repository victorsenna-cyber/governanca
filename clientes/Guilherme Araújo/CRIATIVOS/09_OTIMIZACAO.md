# 09_OTIMIZACAO.md
Versão: 1.0 | Criado: 2026-05-24

---

## Princípio de otimização

Não pausar por ansiedade. Pausar por dado.

Antes de qualquer corte, verificar se o problema está no criativo, no hook, na transição para a LP ou na própria LP. Diagnóstico antes de decisão.

---

## Sinais de fadiga criativa

Um criativo em fadiga apresenta:
- CPM crescendo sem aumento de CTR
- Frequência acima de 3 para o mesmo público
- CTR link caindo progressivamente (>20% de queda em 3 dias)
- Comentários negativos ou irônicos aumentando
- Queda de LPV mesmo com CTR estável

**Ação:** pausar o criativo. Não o ângulo. Testar nova execução do mesmo ângulo com hook diferente.

---

## Sinais de desalinhamento criativo → LP

O criativo performa (CTR bom) mas a LP não converte (LPV baixo ou tempo na página baixo):
- Visitante chegou em estado emocional diferente do que a LP assume
- H1 da LP contradiz o estado emocional do hook
- Promessa do criativo não está espelhada no hero da LP

**Ação:** não pausar o criativo. Auditar o H1 e o hero da LP. Verificar alinhamento entre o estado emocional do hook e a abertura da página.

---

## Sinais de desalinhamento LP → checkout

LPV bom (visitante permanece na LP) mas sem conversão:
- Prova social insuficiente ou genérica
- Preço não está contextualizado como acessível
- Ausência de ponte emocional antes do bloco de preço
- Garantia não está destacada na seção de oferta

**Ação:** auditar a LP — seção de depoimentos, bloco de oferta, garantia. Não pausar campanha.

---

## Quando trocar o hook

Trocar o hook quando:
- CTR link abaixo de 2% após 5 dias e R$40+ gasto
- Thumbstop muito baixo (dado disponível no Ads Manager como retenção de vídeo)
- Comentários ignoram a proposta e respondem ao aspecto visual apenas
- Hook gera engajamento mas não clique (curiosidade vazia)

**Manter o ângulo** ao trocar o hook. O ângulo define a dor explorada. O hook define a porta de entrada. São variáveis separadas.

---

## Quando trocar o formato

Trocar o formato quando:
- CTR bom mas custo por LPV alto (formato não qualifica o clique)
- Reels sem retenção após 15s (dado de retenção de vídeo)
- Estático sem CTR link acima de 1% após 5 dias
- Carrossel com swipe rate baixo (menos de 40% chegando ao slide 3)

**Testar o formato alternativo com o mesmo hook e ângulo** — não mudar as três variáveis ao mesmo tempo.

---

## Quando trocar o ângulo

Trocar o ângulo quando:
- Múltiplos hooks testados no mesmo ângulo não passam de 2% CTR
- Comentários mostram confusão ou desinteresse consistente
- LPV e permanência na página muito baixos em múltiplas execuções
- Audiência do ângulo está saturada (CPM muito alto, frequência alta)

**Não descartar o ângulo definitivamente** — pode funcionar em outra fase do funil ou para outra audiência.

---

## Critérios de escala

Escalar quando:
- CTR link acima de 3% por mais de 5 dias consecutivos
- LPV rate acima de 50%
- CPC link abaixo de R$0,80
- Frequência ainda abaixo de 2,5 para o público ativo
- Comentários qualitativos positivos (ICP se identificando no texto dos comentários)

**Como escalar:** aumentar budget em 20% a cada 2–3 dias. Nunca dobrar de uma vez — reinicia a fase de aprendizado do algoritmo.

---

## Critérios de pausa definitiva

Pausar definitivamente quando:
- Gasto total acima de R$100 no ângulo sem nenhuma LPV qualificada
- CTR link consistentemente abaixo de 1% com múltiplos hooks testados
- Comentários mostram público completamente fora do ICP
- Frequência acima de 4 com queda de resultado

---

## Ciclo de otimização semanal

```
Segunda: checar CTR link, CPM, frequência e LPV
          → identificar criativos abaixo de benchmark

Quarta:   avaliar comentários e salvamentos
          → identificar sinais qualitativos

Sexta:    decisão de manter / iterar / pausar / escalar
          → registrar no 07_TESTES.md e 10_BACKLOG_CRIATIVOS.md
```

---

## Evolução em 7 / 14 / 30 dias

**7 dias:**
- Dados de CTR e LPV por criativo
- Identificar ângulo com melhor entrada
- Decisão: manter, iterar hook ou pausar

**14 dias:**
- Dados de frequência e fadiga
- Identificar formato vencedor
- Decisão: escalar formato, criar variação ou pausar

**30 dias:**
- Dados de custo por LPV e tendência de CPM
- Avaliar se há audiência suficiente para RMKT
- Decisão: expandir público, criar MOFU ou aguardar eventos de pixel

---

## Dependência crítica

Toda otimização de BOFU e RMKT depende de eventos de conversão no pixel.

Enquanto o pixel tiver somente PageView configurado:
- Otimização por Purchase é impossível
- Criação de audiência de visitantes (para RMKT) só é eficaz após 500+ PageViews únicos
- Migração para OUTCOME_SALES fica bloqueada

**Ação pendente prioritária:** configurar ViewContent, InitiateCheckout e Purchase na LP.
