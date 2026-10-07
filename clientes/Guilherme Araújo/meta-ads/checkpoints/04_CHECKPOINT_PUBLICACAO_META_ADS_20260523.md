# 04_CHECKPOINT_PUBLICACAO_META_ADS_20260523.md
Timestamp: 2026-05-23 | Status: AUDITORIA PÓS-ATIVAÇÃO CONCLUÍDA

---

## ESTADO VERIFICADO VIA API

### Campanha nova
| Campo | Valor |
|---|---|
| Nome | GA\|TOFU\|CS\|TRAFEGO-LP\|META\|20260523 |
| ID | 120249799506730210 |
| Status (API) | **PAUSED** |
| Effective status | PAUSED |
| Objetivo | OUTCOME_TRAFFIC (retorna como LINK_CLICKS na API — comportamento normal) |
| Delivery | off |
| Erros | Nenhum |

### Conjunto
| Campo | Valor |
|---|---|
| Nome | AS\|CS\|INT-ESPIRITUALIDADE\|BR\|23-55\|AUTO\|20260523 |
| ID | 120249799507690210 |
| Status (API) | **PAUSED** |
| Budget | R$25,00/dia — CORRETO |
| Otimização | LANDING_PAGE_VIEWS — CORRETO |
| Delivery | off |

### Anúncios
| ID | Nome | Status | Creative ID | Delivery |
|---|---|---|---|---|
| 120249799560100210 | AD\|CARTA-JULGAMENTO\|REELS\|VIDEO\|VER-MAIS\|20260523 | PAUSED | 1297480015784881 | off |
| 120249799561800210 | AD\|ATRACAO-ICP\|POST\|IMAGEM\|SAIBA-MAIS\|20260523 | PAUSED | 951208507694438 | off |

### Campanha antiga
| Campo | Valor |
|---|---|
| Nome | META_TRÁF_PERFIL_ABO_21/04/2026_V1 |
| ID | 120247026774610210 |
| Status | **PAUSED** — CONFIRMADO |
| Delivery | off |

---

## DISCREPÂNCIA DETECTADA

O usuário informou ativação manual via Ads Manager.
A API retorna status PAUSED para campanha, conjunto e anúncios.

### Causa mais provável
Cache de sincronização entre Ads Manager UI e a API de Marketing do Meta.
Esse delay é normal e pode levar de 2 a 10 minutos para refletir na API.

### Evidência complementar
O pixel não registrou novos PageViews além dos 11 disparados às 15h — antes da ativação manual declarada. Sem evidência de entrega ativa no momento da auditoria.

---

## VERIFICAÇÕES NÃO DISPONÍVEIS VIA API

| Item | Status | Motivo |
|---|---|---|
| URL final dos anúncios | NÃO VERIFICADO | ads_get_creatives indisponível para esta conta |
| CTA dos anúncios | NÃO VERIFICADO | ads_get_creatives indisponível para esta conta |
| Destino real do criativo | NÃO VERIFICADO | ads_get_creatives indisponível para esta conta |

---

## RISCO CRÍTICO ATIVO

Se a campanha está de fato ativa no Ads Manager, os criativos ainda apontam para o **perfil do Instagram**, não para a LP.

Isso significa:
- Tráfego sendo gerado para o perfil (objetivo errado)
- Pixel da LP não recebe eventos
- Budget sendo consumido sem entrega na LP

**Ação necessária imediata:** confirmar URL de destino dos 2 anúncios no Ads Manager antes de qualquer entrega significativa.

---

## ORÇAMENTO ATIVO TOTAL

| Campanha | Status | Budget |
|---|---|---|
| GA\|TOFU\|CS\|TRAFEGO-LP... (nova) | PAUSED (API) | R$25,00/dia |
| META_TRÁF_PERFIL... (antiga) | PAUSED | R$0 |
| **TOTAL ATIVO** | — | **R$25,00/dia máximo** |

Sem risco de ultrapassar o limite de R$25/dia.

---

## IDs FINAIS CONSOLIDADOS

```
CONTA:              605257748612701
CAMPANHA_PAUSADA:   120247026774610210  (tráfego perfil — PAUSED)
CAMPANHA_NOVA:      120249799506730210  (tráfego LP — PAUSED/verificar)
CONJUNTO:           120249799507690210  (R$25/dia — LANDING_PAGE_VIEWS)
ANUNCIO_1:          120249799560100210  (REELS — Carta do Julgamento)
ANUNCIO_2:          120249799561800210  (Post Atração ICP)
CREATIVE_1:         1297480015784881
CREATIVE_2:         951208507694438
PIXEL:              1259363302489132
PÁGINA:             103620069213113
```
