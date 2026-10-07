# CHECKPOINT MONITORAMENTO META ADS
**Data:** 2026-05-29
**Hora:** automático (scheduled task)
**Conta:** CA 01 — ID 605257748612701

---

## CAMPANHA ATIVA

| Campo | Valor |
|---|---|
| Nome | GA\|TOFU\|CS\|TRAFEGO-LP\|META\|20260523 |
| ID | 120249799506730210 |
| Status | ACTIVE |
| Budget diário | R$25/dia (no conjunto) |
| Gasto hoje | R$1,11 |
| Impressões | 197 |
| Alcance | 194 |
| CPM | R$5,63 |
| CTR | 1,52% |
| CPC | R$0,37 |
| Frequência | 1,02 |

---

## ANÚNCIOS ATIVOS

| Nome | Status | Impressões | CTR | CPC | Gasto | Cliques |
|---|---|---|---|---|---|---|
| AD\|CARTOMANCIA-SISTÊMICA\|CARROSSEL\|SAIBA-MAIS\|28/05/2026 | ACTIVE | 195 | 1,54% | R$0,37 | R$1,11 | 4 |
| AD\|CARTA-JULGAMENTO\|REELS\|VIDEO\|VER-MAIS\|20260523 | ACTIVE | 2 | — | — | R$0,00 | 0 |
| AD\|ATRACAO-ICP\|POST\|IMAGEM\|SAIBA-MAIS\|20260523 | ACTIVE | — | — | — | — | — |

---

## ERROS DETECTADOS

- Campanha pausada antiga `[CONSULTORIA] — Cópia` (ID: 120230929427200210) tem erro de processamento em um anúncio filho. **Não impacta campanha ativa.**

---

## DIAGNÓSTICO

- Campanha em fase inicial do dia (R$1,11 gasto de R$25 possível).
- Carrossel novo (28/05) está dominando entrega: 195 das 197 impressões e todos os 4 cliques.
- REELS e IMAGEM praticamente sem entrega hoje — provável otimização automática do algoritmo favorecendo carrossel.
- CTR de 1,52% está dentro do aceitável para TOFU frio.
- CPC de R$0,37 é muito eficiente.
- CPM de R$5,63 é baixo — boa penetração de audiência.
- Frequência 1,02 — sem saturação.
- Budget ativo total: R$25/dia — dentro do limite máximo permitido.

---

## RISCOS

- REELS e IMAGEM sem entrega relevante: se o carrossel parar de performar, não há backup testado hoje.
- LPV e ViewContent ainda não configurados no pixel — impossível medir qualidade do tráfego que chega na LP.
- URL de destino dos anúncios ainda não confirmada via Ads Manager (limitação da API).

---

## AÇÕES PENDENTES DE APROVAÇÃO

1. Confirmar URL de destino dos 3 anúncios diretamente no Ads Manager.
2. Configurar eventos ViewContent, InitiateCheckout e Purchase na LP.

---

## PRÓXIMA CHECAGEM
Próximo run automático do scheduled task.
