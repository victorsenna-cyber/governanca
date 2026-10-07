# CHECKPOINT MONITORAMENTO META ADS
Data/hora: 2026-06-04 / verificar hora exata
Gerado por: Tarefa agendada meta-ads-ga-check

---

## STATUS GERAL

| Campo | Valor |
|---|---|
| Conta | CA 01 (605257748612701) |
| Budget ativo | R$25/dia |
| Gasto hoje | R$0 (campanha pausada) |
| Status campanha | ⚠️ PAUSADA |

---

## ALERTA CRÍTICO

**A campanha GA|TOFU|CS|TRAFEGO-LP|META|20260523 (ID: 120249799506730210) está PAUSADA.**

Todos os anúncios apresentam `effective_status: CAMPAIGN_PAUSED`.
Os anúncios em si estão ACTIVE, mas a campanha-pai está pausada.
**Nenhum anúncio está veiculando hoje.**

PENDENTE DE APROVAÇÃO: Reativar campanha (não executado automaticamente).

---

## MÉTRICAS — ÚLTIMOS 7 DIAS (28/05 a 03/06)

### Conjunto: AS|CS|INT-ESPIRITUALIDADE|BR|23-55|AUTO|20260523
| Métrica | Valor |
|---|---|
| Gasto | R$170,08 |
| Impressões | 25.704 |
| Alcance | 18.364 |
| CPM | R$6,62 |
| CTR | 15,87% |
| CPC | R$0,04 |
| Cliques | 4.078 |
| Frequência | 1,40 |

### Por anúncio (7 dias)
| Anúncio | Gasto | CTR | CPC | Cliques | Link Clicks | Status |
|---|---|---|---|---|---|---|
| Reels (vencedor) | R$147,57 | 17,30% | R$0,04 | 3.938 | 2.863 | ✅ VENCEDOR |
| Imagem | R$17,13 | 5,98% | R$0,15 | 113 | 74 | 🟡 OK |
| Carrossel | R$5,38 | 2,56% | R$0,20 | 27 | 28 | ⚠️ Baixo |

---

## DIAGNÓSTICO

1. **Campanha pausada** — causa desconhecida. Pode ter sido pausada manualmente ou por limite de gasto atingido. Verificar no Ads Manager.
2. **Reels continua sendo vencedor absoluto** — CTR 17,30%, CPC R$0,04. Excelente desempenho nos 7 dias.
3. **Carrossel abaixo do esperado** — CTR 2,56% após ~7 dias. Pendente avaliação de corte (era previsto avaliar em 31/05).
4. **Budget dentro do limite** — R$25/dia, dentro da regra operacional.

---

## RISCO

- **Alto**: Campanha pausada = zero veiculação, zero tráfego para LP, pixel sem dados novos.
- **Médio**: Carrossel consumindo budget com CTR baixo (se campanha for reativada).

---

## AÇÕES RECOMENDADAS

1. **PENDENTE DE APROVAÇÃO**: Verificar motivo da pausa no Ads Manager e reativar campanha se não houver motivo crítico.
2. **PENDENTE DE APROVAÇÃO**: Avaliar pausa do carrossel (CTR 2,56% após 7+ dias, CPC R$0,20).
3. Confirmar URL de destino dos 3 anúncios no Ads Manager (pendência do contexto anterior).
4. Avaliar migração para OUTCOME_SALES com pixel treinado.

---

## LIMITAÇÕES DE API

- LPV, ViewContent, InitiateCheckout, Purchase não disponíveis nesta chamada (requerem consulta ao pixel separada)
- Dados de hoje: R$0 gasto (campanha pausada antes de qualquer veiculação hoje)

---

## PRÓXIMA CHECAGEM

Próximo monitoramento agendado conforme schedule configurado.
