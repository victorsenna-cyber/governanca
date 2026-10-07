# 01_CHECKPOINT_AUDITORIA_META_ADS_20260523.md
Gerado em: 2026-05-23 | Status: COMPLETO

---

## CONTA

| Campo | Valor |
|---|---|
| Conta | CA 01 — ID: 605257748612701 |
| Business | terapeutaguilhermearaujo — ID: 507655071209387 |
| Pixel | Pixel Exponencial — ID: 1259363302489132 |
| Página | ID: 103620069213113 (nome não retornado pela API) |
| Moeda | BRL |
| Budget mínimo/dia | R$5,11 |
| Budget máximo definido | R$25,00/dia |

---

## CAMPANHAS ENCONTRADAS

### ATIVA
| ID | Nome | Objetivo | Budget diário ativo | Gasto 30d |
|---|---|---|---|---|
| 120247026774610210 | META_TRÁF_PERFIL_ABO_21/04/2026_V1 | LINK_CLICKS (perfil) | R$25/dia (ABO) | R$661,35 |

### PAUSADAS
| ID | Nome | Objetivo |
|---|---|---|
| 120246060897660210 | META_CONV_MI5D_COLD_ABO_03/04/2026_V1 | OUTCOME_SALES |
| 120232090328850210 | CHUVA DE LEADS — Cópia | OUTCOME_LEADS |
| 120231988742120210 | FORMAÇÃO | OUTCOME_LEADS |
| 120230929427200210 | [CONSULTORIA] — Cópia | OUTCOME_LEADS |

---

## ORÇAMENTO ATIVO ATUAL

| Conjunto | Budget/dia | Status |
|---|---|---|
| AUD_INT_ESPIRITUALIDADE_23-55_BR_V1 (ID: 120247026774590210) | R$15,00 | ATIVO |
| AUD_INT_ESPIRITUALIDADE_23-55_BR_V1 — Cópia (ID: 120248964604220210) | R$10,00 | ATIVO |
| **TOTAL ATIVO** | **R$25,00** | — |

---

## CONJUNTOS ENCONTRADOS (campanha ativa)

| ID | Nome | Status | Budget/dia | Objetivo | CTR | CPM | Frequência |
|---|---|---|---|---|---|---|---|
| 120247026774590210 | AUD_INT_ESPIRITUALIDADE_23-55_BR_V1 | ATIVO | R$15,00 | PROFILE_VISIT | 5,10% | R$11,21 | 1,37 |
| 120248964604220210 | AUD_INT_ESPIRITUALIDADE_23-55_BR_V1 — Cópia | ATIVO | R$10,00 | PROFILE_VISIT | 13,02% | R$14,69 | 1,39 |
| 120247442273200210 | AUD_INT_ESPIRITUALIDADE_23-55_BR_V1 — Cópia | PAUSADO | R$7,00 | PROFILE_VISIT | 2,10% | R$5,21 | 1,15 |

---

## ANÚNCIOS ENCONTRADOS (campanha ativa)

| ID | Nome | Status | Creative ID | CTR | CPM | Gasto |
|---|---|---|---|---|---|---|
| 120248964647690210 | REELS_A-CARTA-DO-JULGAMENTO_13/05/26 | **ATIVO** | 1297480015784881 | **13,02%** | R$14,69 | R$94,53 |
| 120247233271600210 | POST_ATRAÇÃO_ICP | **ATIVO** | 951208507694438 | 4,58% | R$12,26 | R$387,95 |
| 120247442273220210 | POST_ATRAÇÃO_ICP | INATIVO (conjunto pausado) | 970831315313433 | 2,90% | R$7,39 | R$7,64 |
| 120247442273210210 | CR_GUI_VÍDEO_01 | INATIVO (conjunto pausado) | 1647312963134091 | 2,00% | R$4,95 | R$41,49 |
| 120248030399220210 | CR_TRÁFEGO-PERFIL_01 | PAUSADO | 1307565761478704 | 6,32% | R$8,95 | R$127,25 |
| 120247026774600210 | CR_GUI_VÍDEO_01 | PAUSADO | 2336219390200697 | 2,36% | R$7,35 | R$2,49 |

---

## PIXEL / EVENTOS

| Item | Status |
|---|---|
| Pixel ativo | SIM |
| Último disparo browser | 2026-05-23 15:38 |
| Último disparo CAPI | 2026-05-23 15:44 |
| First-party cookie | Habilitado |
| EMQ | 6.1/10 |
| Match keys | ip_address 100%, user_agent 100%, fbp 100% |
| Match keys ausentes | email, phone, external_id |
| **Purchase** | **NÃO CONFIGURADO** |
| **Lead** | **NÃO CONFIGURADO** |
| **ViewContent** | **NÃO CONFIGURADO** |
| **InitiateCheckout** | **NÃO CONFIGURADO** |
| PageView (7 dias) | 13 disparos |

---

## ERROS

- Campanha `[CONSULTORIA] — Cópia`: erro de processamento em 1 anúncio (campanha já pausada — não bloqueia operação atual)
- Demais entidades: sem erros críticos

---

## PROBLEMAS ENCONTRADOS

1. **CRÍTICO:** Pixel sem eventos de conversão — impossível campanha de vendas otimizada
2. **MÉDIO:** EMQ 6.1 — missing email/phone/external_id via CAPI
3. **MÉDIO:** Volume de PageViews baixo (13/7d) — audiência de visitantes ainda não construível
4. **BAIXO:** Ferramentas de audiência customizada e upload de criativos indisponíveis via MCP para esta conta

---

## OPORTUNIDADES ENCONTRADAS

1. **REELS_A-CARTA-DO-JULGAMENTO com CTR 13.02%** — criativo com desempenho excepcional — reutilizar com destino LP
2. **Público INT_ESPIRITUALIDADE_23-55_BR validado** — interesse funcionando — reutilizar na nova campanha
3. **CAPI funcionando** — base técnica para escalar qualidade de sinal quando eventos forem configurados
4. **Campanha pausada OUTCOME_SALES (MI5D)** — mostra que a conta já rodou campanha de vendas — sem histórico de rejeição por objetivo

---

## MATURIDADE DA CONTA

| Dimensão | Avaliação |
|---|---|
| Histórico de gastos | Médio — R$661 em 30 dias (campanha de perfil) |
| Estrutura anterior | Básica mas funcional |
| Pixel | Instalado e ativo, porém sem eventos de conversão |
| Criativos | 2 ativos, 1 com CTR excepcional |
| Públicos | Interest-based validado |
| Conversão | Sem dados reais de compra ou lead |
| Rejeições | Nenhuma ativa |

**Maturidade geral: INICIAL-INTERMEDIÁRIA** — conta funcional, pixel parcialmente configurado, sem histórico de conversão.

---

## GARGALOS

1. Falta de eventos de conversão → limita objetivo da campanha a TRÁFEGO
2. Budget R$25/dia → estrutura deve ser mínima (1 conjunto)
3. Ferramentas de audiência indisponíveis via MCP → não é possível criar lookalikes ou públicos customizados agora
4. LP com tráfego muito baixo (13 PVs/7d) → pixel demorará para aprender
