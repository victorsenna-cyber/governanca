# CHECKPOINT D — CRIAÇÃO DOS ANÚNCIOS
Timestamp: 2026-05-23 | Status: CONCLUÍDO COM PENDÊNCIA CRÍTICA

## Anúncios criados
| # | Nome | ID | Creative ID | Status |
|---|---|---|---|---|
| 1 | AD\|CARTA-JULGAMENTO\|REELS\|VIDEO\|VER-MAIS\|20260523 | 120249799560100210 | 1297480015784881 | PAUSED |
| 2 | AD\|ATRACAO-ICP\|POST\|IMAGEM\|SAIBA-MAIS\|20260523 | 120249799561800210 | 951208507694438 | PAUSED |

## IDs acumulados
```
CONTA:              605257748612701
CAMPANHA_PAUSADA:   120247026774610210
CAMPANHA_NOVA:      120249799506730210
CONJUNTO:           120249799507690210
ANUNCIO_1:          120249799560100210  (REELS - Carta do Julgamento)
ANUNCIO_2:          120249799561800210  (Post Atração ICP)
CREATIVE_1:         1297480015784881
CREATIVE_2:         951208507694438
PIXEL:              1259363302489132
PÁGINA:             103620069213113
```

---

## ALERTA CRÍTICO — URL DE DESTINO

A ferramenta de leitura de criativos (`ads_get_creatives`) não está disponível para esta conta via API.

Os criativos foram duplicados dos anúncios originais. O destino atual dos criativos é o **perfil do Instagram**, não a LP.

**Antes de ativar a campanha, o URL de destino deve ser atualizado para:**
```
https://professorguilhermearaujo.com.br
```

### Como corrigir no Ads Manager

**Anúncio 1 — REELS:**
1. Acessar: Ads Manager → Anúncios → `AD|CARTA-JULGAMENTO|REELS|VIDEO|VER-MAIS|20260523`
2. Clicar em Editar
3. Em "URL do site" ou "Destino", substituir pelo link da LP + UTMs:
```
https://professorguilhermearaujo.com.br?utm_source=facebook&utm_medium=paid_social&utm_campaign=GA_TOFU_CS_TRAFEGO-LP_20260523&utm_content=AD_CARTA-JULGAMENTO_REELS_VIDEO_VER-MAIS_20260523&utm_term=AS_CS_INT-ESPIRITUALIDADE_BR_23-55_AUTO_20260523
```

**Anúncio 2 — POST:**
1. Acessar: Ads Manager → Anúncios → `AD|ATRACAO-ICP|POST|IMAGEM|SAIBA-MAIS|20260523`
2. Clicar em Editar
3. Em "URL do site" ou "Destino", substituir pelo link da LP + UTMs:
```
https://professorguilhermearaujo.com.br?utm_source=facebook&utm_medium=paid_social&utm_campaign=GA_TOFU_CS_TRAFEGO-LP_20260523&utm_content=AD_ATRACAO-ICP_POST_IMAGEM_SAIBA-MAIS_20260523&utm_term=AS_CS_INT-ESPIRITUALIDADE_BR_23-55_AUTO_20260523
```

---

## STATUS DA ESTRUTURA

| Nível | Nome | ID | Status |
|---|---|---|---|
| Campanha antiga | META_TRÁF_PERFIL... | 120247026774610210 | PAUSED |
| Campanha nova | GA\|TOFU\|CS\|TRAFEGO-LP... | 120249799506730210 | PAUSED |
| Conjunto | AS\|CS\|INT-ESPIRITUALIDADE... | 120249799507690210 | PAUSED |
| Anúncio 1 | AD\|CARTA-JULGAMENTO... | 120249799560100210 | PAUSED |
| Anúncio 2 | AD\|ATRACAO-ICP... | 120249799561800210 | PAUSED |

---

## PRÓXIMA ETAPA
ETAPA E — Ativação (bloqueada até URL ser corrigida)

NÃO ativar antes de confirmar que os dois anúncios apontam para a LP.
