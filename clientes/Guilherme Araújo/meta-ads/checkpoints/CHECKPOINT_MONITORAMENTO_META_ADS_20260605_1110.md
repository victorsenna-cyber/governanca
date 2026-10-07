# CHECKPOINT MONITORAMENTO META ADS
**Data/hora:** 2026-06-05 11:10  
**Conta:** CA 01 | ID: 605257748612701 | terapeutaguilhermearaujo  
**Período analisado:** 29/05 a 04/06/2026 (últimos 7 dias)

---

## STATUS GERAL DA CONTA

| Item | Status |
|---|---|
| Campanhas ativas (rodando) | **0** |
| Campanhas pausadas | 9 |
| Budget ativo total | **R$0/dia** |
| Gasto hoje | R$0 |
| Conta com pagamento | ✅ Ativo |

---

## MUDANÇA CRÍTICA DETECTADA

### Campanha TOFU pausada
A campanha `GA|TOFU|CS|TRAFEGO-LP|META|20260523` (ID: 120249799506730210) está **PAUSED**.  
Na última checagem (contexto 30/05), estava ativa com R$25/dia.  
**Os 3 anúncios estão com `effective_status: CAMPAIGN_PAUSED`** — ativos individualmente mas travados pela campanha.

### 3 novas campanhas MOFU criadas e já pausadas (03/06)
| ID | Nome | Objetivo | Budget |
|---|---|---|---|
| 120250974253260210 | GA\|MOFU\|CS\|CONVERSAS-WPP\|META\|20260603 | OUTCOME_ENGAGEMENT | R$25/dia |
| 120250973705550210 | GA\|MOFU\|CS\|CONVERSAS-WPP\|META\|20260603 | LINK_CLICKS | R$25/dia |
| 120250973177980210 | GA\|MOFU\|CS\|CONVERSAS-WPP\|META\|20260603 | OUTCOME_ENGAGEMENT | R$25/dia |

Todas pausadas, sem impressões, sem gasto. Foram criadas em 03/06 e nunca veicularam.  
2 anúncios encontrados na campanha ENGAGEMENT (ID: 120250974253260210):
- `AD|PROCURA-SE-CONSTELADORES|IMAGEM|FEED|SAIBA-MAIS|20260603` — PAUSED
- `AD|PROCURA-SE-CICLOS|IMAGEM|STORY|SAIBA-MAIS|20260603` — PAUSED

---

## PERFORMANCE ÚLTIMOS 7 DIAS — CAMPANHA TOFU (29/05 a 04/06)

### Campanha consolidada
| Métrica | Valor |
|---|---|
| Gasto | R$153,28 |
| Impressões | 23.240 |
| Alcance | 17.212 |
| Frequência | 1,35 |
| CPM | R$6,60 |
| CTR (geral) | 15,28% |
| CPC | R$0,04 |
| Cliques totais | 3.550 |
| Link clicks | 2.597 |
| CPC link | R$0,06 |

### Por anúncio (7 dias)
| Anúncio | Gasto | Impressões | CTR | CPC | Link Clicks | Status |
|---|---|---|---|---|---|---|
| AD\|CARTA-JULGAMENTO\|REELS\|VIDEO\|VER-MAIS | R$130,86 | 20.306 | 16,80% | R$0,04 | 2.496 | CAMPAIGN_PAUSED |
| AD\|ATRACAO-ICP\|POST\|IMAGEM\|SAIBA-MAIS | R$17,04 | 1.884 | 5,94% | R$0,15 | 73 | CAMPAIGN_PAUSED |
| AD\|CARTOMANCIA-SISTÊMICA\|CARROSSEL\|SAIBA-MAIS | R$5,38 | 1.050 | 2,57% | R$0,20 | 28 | CAMPAIGN_PAUSED |

---

## DIAGNÓSTICO

1. **Conta sem veiculação ativa.** Nenhuma campanha rodando hoje. Gasto = R$0.
2. **TOFU pausada manualmente** entre 30/05 e 05/06. Motivo desconhecido — pode ser pausa estratégica para transição para MOFU, ou pendência de revisão.
3. **MOFU criada mas não ativada.** 3 campanhas MOFU foram estruturadas em 03/06 com objetivo de conversas no WhatsApp, porém permanecem pausadas. Há 3 variantes de objetivo/estrutura (2x ENGAGEMENT + 1x LINK_CLICKS) — indica processo de decisão ainda em aberto.
4. **Carrossel fraco confirmado.** CTR 2,57% — abaixo do limiar de corte (5%) definido no contexto. Com a campanha pausada, o corte ficou pendente.
5. **Reels vencedor mantém performance.** CTR 16,80% e CPC R$0,04 — referência para novos criativos.

---

## RISCO

| Risco | Nível |
|---|---|
| Conta sem veiculação — sem geração de tráfego, leads ou pipeline | 🔴 ALTO |
| 3 campanhas MOFU duplicadas com nomes idênticos — risco de confusão operacional | 🟡 MÉDIO |
| Pixel sem eventos recentes (sem veiculação) — pode perder aprendizado | 🟡 MÉDIO |
| Budget: nenhuma campanha acima de R$25/dia — regra respeitada | ✅ OK |

---

## AÇÕES RECOMENDADAS (PENDENTES DE APROVAÇÃO)

1. **PENDENTE DE APROVAÇÃO** — Confirmar qual das 3 campanhas MOFU deve ser ativada (ou se todas são testes para decidir objetivo). Recomendação: manter apenas 1, objetivo OUTCOME_ENGAGEMENT com otimização para mensagens.
2. **PENDENTE DE APROVAÇÃO** — Decidir se TOFU volta a rodar simultaneamente com MOFU ou fica pausada durante fase de conversas.
3. **PENDENTE DE APROVAÇÃO** — Pausar/arquivar as 2 campanhas MOFU excedentes (IDs 120250973705550210 e 120250973177980210) para evitar confusão operacional.
4. **PENDENTE DE APROVAÇÃO** — Cortar carrossel (AD|CARTOMANCIA-SISTÊMICA) se TOFU for reativada, conforme critério definido (CTR < 5%).

---

## PRÓXIMA CHECAGEM
Próximo monitoramento automático conforme schedule configurado.
