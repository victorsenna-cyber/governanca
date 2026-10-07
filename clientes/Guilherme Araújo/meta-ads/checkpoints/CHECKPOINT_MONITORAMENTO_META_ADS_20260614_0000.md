# CHECKPOINT MONITORAMENTO META ADS
**Data/hora:** 2026-06-14 00:00  
**Período analisado:** 07/06 a 13/06/2026 (últimos 7 dias)

---

## MUDANÇA ESTRUTURAL DETECTADA

⚠️ A campanha TOFU (`GA|TOFU|CS|TRAFEGO-LP|META|20260523`) está **PAUSADA**.

Uma nova campanha MOFU está agora **ATIVA**:

| Campo | Valor |
|---|---|
| Campanha | GA\|MOFU\|CS\|CONVERSAS-WPP\|META\|20260603 |
| ID | 120250974253260210 |
| Objetivo | Conversas WhatsApp |
| Budget | R$25,00/dia |
| Status | ✅ ATIVA |

---

## CAMPANHA ATIVA — MOFU CONVERSAS WPP

### Conjunto ativo
| Campo | Valor |
|---|---|
| Nome | AS\|CS\|MULHERES\|BR\|25-45\|AUTO\|20260603 — Cópia |
| Status | ATIVO |
| Budget | No adset (campanha nível) |

### Anúncios ativos
| Anúncio | Status | Gasto (7d) | Impressões | CTR | CPC | CPM | Cliques | Freq |
|---|---|---|---|---|---|---|---|---|
| AD\|PROCURA-SE-CICLOS\|IMAGEM\|STORY\|SAIBA-MAIS | ATIVO | R$53,03 | 1.208 | 2,24% | R$1,96 | R$43,90 | 27 | 1,39 |
| AD\|PROCURA-SE-CONSTELADORES\|IMAGEM\|FEED\|SAIBA-MAIS | ATIVO | R$31,67 | 559 | 1,61% | R$3,52 | R$56,65 | 9 | 2,13 |

### Totais campanha MOFU (7 dias)
| Métrica | Valor |
|---|---|
| Gasto total | R$84,70 |
| Impressões | 1.767 |
| Alcance | 1.059 |
| Cliques | 36 |
| CTR link | 2,04% |
| CPC link | R$2,35 |
| CPM | R$47,93 |
| Frequência | 1,67 |

---

## ANÁLISE DOS ANÚNCIOS

### STORY (vencedor relativo)
- Gasto: R$53,03 — maior alocação automática ✅
- CTR: 2,24% — melhor entre os dois
- CPC: R$1,96 — mais eficiente
- CPM: R$43,90 — menor custo de entrega
- Freq: 1,39 — saudável

### FEED
- Gasto: R$31,67
- CTR: 1,61% — abaixo do STORY
- CPC: R$3,52 — quase 2x mais caro
- CPM: R$56,65 — mais caro para entregar
- Freq: 2,13 — já acima de 2, atenção

---

## BUDGET ATIVO TOTAL

| Campanha | Budget/dia | Status |
|---|---|---|
| GA\|MOFU\|CS\|CONVERSAS-WPP\|META\|20260603 | R$25,00 | ATIVA |
| **TOTAL ATIVO** | **R$25,00** | ✅ Dentro do limite |

---

## DIAGNÓSTICO

1. **Transição TOFU → MOFU executada** — conta migrou de tráfego LP para conversas WPP. Mudança estratégica correta dado volume de ViewContent acumulado (4,1k).
2. **CPM alto (R$47,93)** — objetivo de conversas WPP tem CPM naturalmente mais alto que tráfego. Normal para este objetivo.
3. **CTR geral 2,04%** — razoável para MOFU conversas, mas depende da qualidade das conversas iniciadas (dado não disponível via API).
4. **FEED com freq 2,13** — monitorar. Se não trouxer conversas, candidato a pausar.
5. **Dados de conversas WhatsApp (messaging_conversation_started_7d)** — não disponível via API nesta consulta. Necessita verificação manual no Ads Manager.

---

## RISCO

- **Sem dados de conversas iniciadas via API** — não é possível confirmar CPL real. Checar no Ads Manager manualmente.
- **FEED com CPC alto (R$3,52) e freq crescendo** — se não converter em conversa, pausar e realocar budget para STORY.
- **Nenhuma campanha BOFU/RMKT ativa** — audiência ViewContent (4,1k) ainda não sendo retargetada.

---

## AÇÕES RECOMENDADAS

| Ação | Prioridade | Tipo |
|---|---|---|
| Verificar conversas WPP iniciadas no Ads Manager | ALTA | PENDENTE DE APROVAÇÃO (manual) |
| Se FEED sem conversas após 7 dias → pausar | MÉDIA | PENDENTE DE APROVAÇÃO |
| Planejar campanha BOFU/RMKT usando ViewContent 4,1k | ALTA | PENDENTE DE APROVAÇÃO |
| Atualizar 00_CONTEXTO_GERAL_META_ADS.md com nova campanha MOFU | ALTA | Operacional |

---

## STATUS GERAL

✅ Budget dentro do limite (R$25/dia)  
✅ 1 campanha ativa, 2 anúncios ativos  
⚠️ Dados de conversas WPP não disponíveis via API  
⚠️ FEED com frequência acima de 2  
