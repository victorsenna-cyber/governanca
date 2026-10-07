# CHECKPOINT — Monitoramento Meta Ads
**Data/Hora:** 2026-05-25 | ~11:30
**Gerado por:** Tarefa agendada meta-ads-ga-check

---

## CAMPANHA ATIVA

| Campo | Valor |
|---|---|
| Nome | GA\|TOFU\|CS\|TRAFEGO-LP\|META\|20260523 |
| ID | 120249799506730210 |
| Status | ATIVO |
| Objetivo | LINK_CLICKS (OUTCOME_TRAFFIC) |
| Budget diário (conjunto) | R$25,00/dia |

---

## MÉTRICAS DO DIA (25/05/2026)

| Métrica | Valor |
|---|---|
| Gasto hoje | R$6,96 |
| Impressões | 1.046 |
| Alcance | 963 |
| Frequência | 1,09 |
| Cliques totais | 174 |
| CTR total | 16,63% |
| Link clicks | 126 |
| CPC | R$0,04 |
| CPM | R$6,65 |
| LPV / ViewContent | Não disponível (pixel sem ViewContent configurado) |
| InitiateCheckout | Não disponível |
| Purchase | Não disponível |

---

## CONJUNTO ATIVO

| Campo | Valor |
|---|---|
| Nome | AS\|CS\|INT-ESPIRITUALIDADE\|BR\|23-55\|AUTO\|20260523 |
| ID | 120249799507690210 |
| Status | ATIVO — Entrega ativa |
| Budget diário | R$25,00 |

---

## ANÚNCIOS ATIVOS

| Anúncio | Status | Gasto | CTR | CPC | Link Clicks |
|---|---|---|---|---|---|
| AD\|CARTA-JULGAMENTO\|REELS\|VIDEO\|VER-MAIS\|20260523 | ATIVO | R$6,96 | 16,63% | R$0,04 | 126 |
| AD\|ATRACAO-ICP\|POST\|IMAGEM\|SAIBA-MAIS\|20260523 | ATIVO | Sem dados hoje | — | — | — |

> Observação: O anúncio de imagem (POST_ATRAÇÃO_ICP) não registrou impressões hoje. Todo o gasto está concentrado no Reels (CARTA-JULGAMENTO).

---

## VERIFICAÇÕES DE COMPLIANCE

| Verificação | Resultado |
|---|---|
| Budget ativo total | R$25,00/dia — DENTRO DO LIMITE |
| Campanhas com budget ativo > R$25/dia | Nenhuma |
| Campanha de perfil pausada | Confirmado (META_TRÁF_PERFIL_ABO_21/04/2026_V1 = PAUSADA) |
| Alertas ou rejeições | Nenhum identificado via API |

---

## DIAGNÓSTICO

**Reels (CARTA-JULGAMENTO):** Desempenho excepcional. CTR de 16,63% e CPC de R$0,04 são métricas muito acima da média de mercado para tráfego. Frequência de 1,09 — sem saturação de público. Gasto de R$6,96 com o dia ainda em andamento — ritmo compatível com budget de R$25/dia.

**Imagem (ATRAÇÃO-ICP):** Zero impressões hoje. Pode ser concorrência interna de leilão com o Reels (que performa melhor), ou pode ter havido entrega desigual pela Meta. Não é alerta crítico neste estágio.

**Pixel:** Somente PageView configurado. LPV, ViewContent, InitiateCheckout e Purchase indisponíveis — limita futura migração para campanha de conversão.

---

## RISCO

| Risco | Nível | Detalhe |
|---|---|---|
| Pixel sem eventos | MÉDIO | Sem ViewContent/Purchase, não é possível migrar para OUTCOME_SALES |
| Anúncio imagem sem entrega | BAIXO | Pode ser distribuição natural da Meta em fase inicial |
| URL de destino não verificada via API | MÉDIO | PENDENTE DE APROVAÇÃO — verificar no Ads Manager se os 2 anúncios apontam para professorguilhermearaujo.com.br |

---

## AÇÕES RECOMENDADAS

1. **Manter campanha ativa** — métricas excelentes, sem necessidade de intervenção
2. **PENDENTE DE APROVAÇÃO:** Verificar URL de destino dos 2 anúncios no Ads Manager (não verificável via API)
3. **PENDENTE DE APROVAÇÃO:** Configurar ViewContent e InitiateCheckout no pixel da LP para habilitar futura campanha de conversão

---

## CAMPANHAS PAUSADAS CONFIRMADAS

| Nome | Status |
|---|---|
| META_TRÁF_PERFIL_ABO_21/04/2026_V1 | PAUSADA |
| META_CONV_MI5D_COLD_ABO_03/04/2026_V1 | PAUSADA |
| CHUVA DE LEADS — Cópia | PAUSADA |
| FORMAÇÃO | PAUSADA |
| [CONSULTORIA] — Cópia | PAUSADA |

---

**Próxima checagem:** Agendada automaticamente pela tarefa recorrente.
