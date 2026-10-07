# CHECKPOINT MONITORAMENTO META ADS
**Data/Hora:** 2026-05-30 03:53 (automático)
**Auditor:** Claude (tarefa agendada)

---

## CAMPANHA ATIVA

| Campo | Valor |
|---|---|
| Nome | GA\|TOFU\|CS\|TRAFEGO-LP\|META\|20260523 |
| ID | 120249799506730210 |
| Objetivo | LINK_CLICKS |
| Status | ATIVA |

---

## CONJUNTO ATIVO

| Campo | Valor |
|---|---|
| Nome | AS\|CS\|INT-ESPIRITUALIDADE\|BR\|23-55\|AUTO\|20260523 |
| ID | 120249799507690210 |
| Budget diário | R$25,00/dia |
| Status | ATIVO |

---

## ANÚNCIOS ATIVOS (3)

| Nome | ID | Status |
|---|---|---|
| AD\|CARTOMANCIA-SISTÊMICA\|CARROSSEL\|SAIBA-MAIS\|28/05/2026 | 120250277806370210 | ATIVO |
| AD\|CARTA-JULGAMENTO\|REELS\|VIDEO\|VER-MAIS\|20260523 | 120249799560100210 | ATIVO |
| AD\|ATRACAO-ICP\|POST\|IMAGEM\|SAIBA-MAIS\|20260523 | 120249799561800210 | ATIVO |

> ⚠️ NOVO ANÚNCIO DETECTADO: AD|CARTOMANCIA-SISTÊMICA|CARROSSEL|SAIBA-MAIS|28/05/2026 — não constava no contexto anterior. Entrou em veiculação em 28/05/2026.

---

## MÉTRICAS DO DIA (2026-05-30 — dados parciais, cedo)

| Métrica | Campanha |
|---|---|
| Gasto hoje | R$0,00 (ainda sem gasto registrado — horário muito cedo) |
| Impressões | 4 |
| Alcance | 3 |
| Frequência | 1,33 |
| CTR link | 0,00% |
| CPC link | N/D |
| CPM | R$0,00 |

> ℹ️ Dados do dia praticamente zerados às 03h53. Normal para este horário.

---

## MÉTRICAS ACUMULADAS — ÚLTIMOS 7 DIAS (23/05 a 29/05)

### Campanha total

| Métrica | Valor |
|---|---|
| Gasto total | R$147,91 |
| Impressões | 22.687 |
| Alcance | 16.150 |
| Frequência | 1,40 |
| CTR link | 17,36% |
| CPC link | R$0,04 |
| CPM | R$6,52 |
| Cliques no link | 2.664 |
| LPV (Landing Page Views) | 1.659 |
| ViewContent | 21 |
| InitiateCheckout | 1 |
| Purchase | Não disponível (pixel não configurado) |
| CPL (custo por LPV) | ~R$0,089 |

### Por anúncio (últimos 7 dias)

| Anúncio | Gasto | Impressões | CTR | CPC | Cliques |
|---|---|---|---|---|---|
| CARTA-JULGAMENTO (Reels/Vídeo) | R$120,78 | 19.079 | 19,70% | R$0,03 | 2.534 |
| ATRACAO-ICP (Imagem/Feed) | R$21,87 | 2.622 | 5,95% | R$0,14 | 104 |
| CARTOMANCIA-SISTÊMICA (Carrossel) | R$5,26 | 986 | 2,54% | R$0,21 | 26 |

---

## BUDGET ATIVO TOTAL

| Conjunto | Budget diário |
|---|---|
| AS\|CS\|INT-ESPIRITUALIDADE\|BR\|23-55\|AUTO\|20260523 | R$25,00/dia |
| **TOTAL ATIVO** | **R$25,00/dia** |

✅ Dentro do limite máximo permitido de R$25/dia.

---

## DIAGNÓSTICO

### Pontos positivos
- CTR link global de 17,36% é excelente para TOFU frio
- CPC de R$0,04 é muito baixo — custo por clique eficiente
- CPM de R$6,52 — entrega barata e saudável
- Frequência de 1,40 — sem saturação de público
- LPV de 1.659 com CPL de ~R$0,09 — pixel recebendo volume

### Pontos de atenção
- **Anúncio vencedor claro:** CARTA-JULGAMENTO (Reels) concentra 81,6% do gasto e 95% dos cliques
- **Carrossel novo (CARTOMANCIA-SISTÊMICA)** com CTR de apenas 2,54% — muito abaixo do padrão da campanha
- ~~ViewContent/InitiateCheckout/Purchase não configurados~~ ✅ CONFIRMADO ATIVO pelo usuário em 30/05
- **EMQ 6.1/10** — PageView e ViewContent com "atualização recomendada" (sem email/phone hasheado)
- URL final dos anúncios: **ainda não confirmada via API** (limitação conhecida do MCP)

---

## ALERTAS

| Alerta | Severidade | Ação |
|---|---|---|
| ~~Pixel sem eventos de conversão~~ | ✅ RESOLVIDO | Todos os eventos ativos e disparando (confirmado 30/05) |
| Carrossel novo com CTR baixo (2,54%) | 🟡 ATENÇÃO | Monitorar por mais 48h — avaliar corte em 31/05 |
| URL final dos anúncios não verificada via API | 🟡 ATENÇÃO | Verificar no Ads Manager manualmente |
| EMQ 6.1/10 com atualização recomendada | 🟡 ATENÇÃO | Adicionar email/phone hasheado via CAPI |

---

## PENDENTES DE APROVAÇÃO

1. ~~**Configurar eventos de conversão na LP**~~ ✅ RESOLVIDO
2. **Verificar URL final** dos 3 anúncios no Ads Manager — confirmar que apontam para `professorguilhermearaujo.com.br`
3. **Avaliar corte do anúncio CARROSSEL** após 48-72h se CTR não melhorar

---

## PRÓXIMA CHECAGEM

Próxima checagem automática: conforme agendamento do sistema.
Recomendação: verificar dados novamente após 08h00 quando o gasto do dia estiver registrado.
