# 00_CONTEXTO_GERAL_META_ADS.md
Atualizado em: 2026-08-26 | Versão: 2.2

> **Verificação parcial posterior — 26/08/2026:** sessão autenticada do Chrome acessou o portfólio `terapeutaguilhermearaujo` e a conta `CA 01`; área de campanhas e controle `Criar` disponíveis. Foram observadas 3 alterações em rascunho aguardando revisão/publicação. O conector nativo de Ads Manager do Codex não retornou contas acessíveis; a rota disponível é o Chrome. Nenhum rascunho foi aberto, descartado ou publicado. Pagamento, Pixel/eventos e identidades conectadas não foram revalidados nesta checagem; os estados abaixo datados de 30/05 permanecem históricos, não confirmação atual.

---

## VISÃO GERAL DA OPERAÇÃO

**Cliente:** Guilherme Araújo
**Business:** terapeutaguilhermearaujo (ID: 507655071209387)
**Conta de anúncios:** CA 01 (ID: 605257748612701)
**Moeda:** BRL
**MCP habilitado:** Sim
**Pagamento ativo:** Sim

---

## ESTADO ATUAL DA CONTA (2026-05-30)

### Campanha ativa
| Nome | ID | Objetivo | Budget | Status |
|---|---|---|---|---|
| GA\|TOFU\|CS\|TRAFEGO-LP\|META\|20260523 | 120249799506730210 | LINK_CLICKS | R$25/dia | ATIVA |

### Estrutura ativa
```
GA|TOFU|CS|TRAFEGO-LP|META|20260523  (120249799506730210)
  AS|CS|INT-ESPIRITUALIDADE|BR|23-55|AUTO|20260523  (120249799507690210)
    AD|CARTA-JULGAMENTO|REELS|VIDEO|VER-MAIS|20260523  (120249799560100210)  ← VENCEDOR
    AD|ATRACAO-ICP|POST|IMAGEM|SAIBA-MAIS|20260523  (120249799561800210)
    AD|CARTOMANCIA-SISTÊMICA|CARROSSEL|SAIBA-MAIS|28/05/2026  (120250277806370210)  ← novo 28/05
```

### Performance últimos 7 dias (23/05 a 29/05)
| Métrica | Campanha | Reels (vencedor) | Imagem | Carrossel (novo) |
|---|---|---|---|---|
| Gasto | R$147,91 | R$120,78 | R$21,87 | R$5,26 |
| CTR link | 17,36% | 19,70% | 5,95% | 2,54% |
| CPC link | R$0,04 | R$0,03 | R$0,14 | R$0,21 |
| CPM | R$6,52 | R$6,33 | R$8,34 | R$5,33 |
| Cliques | 2.664 | 2.534 | 104 | 26 |
| LPV | 1.659 | — | — | — |
| Frequência | 1,40 | 1,46 | 1,07 | 1,01 |

### Campanhas pausadas (histórico)
| Nome | ID | Objetivo |
|---|---|---|
| META_TRÁF_PERFIL_ABO_21/04/2026_V1 | 120247026774610210 | LINK_CLICKS (perfil) |
| META_CONV_MI5D_COLD_ABO_03/04/2026_V1 | 120246060897660210 | OUTCOME_SALES |
| CHUVA DE LEADS — Cópia | 120232090328850210 | OUTCOME_LEADS |
| FORMAÇÃO | 120231988742120210 | OUTCOME_LEADS |
| [CONSULTORIA] — Cópia | 120230929427200210 | OUTCOME_LEADS |

---

## OBJETIVO COMERCIAL

Gerar tráfego qualificado para a landing page da Cartomancia Sistêmica (professorguilhermearaujo.com.br), treinar o pixel com PageViews reais e construir audiência de visitantes para futura campanha de conversão.

---

## LIMITAÇÕES CONHECIDAS DA CONTA

| Limitação | Detalhe |
|---|---|
| Budget máximo ativo | R$25/dia |
| Pixel com evento de compra | SIM — Purchase ativo (1 evento registrado) |
| ads_get_creatives via MCP | Indisponível — URL dos criativos não verificável via API |
| ads_get_ad_images via MCP | Indisponível |
| ads_get_ad_videos via MCP | Indisponível |
| ads_get_ad_account_custom_audiences via MCP | Indisponível |
| Lead Gen TOS | Não aceita |

---

## PIXEL

| Campo | Valor |
|---|---|
| ID | 1259363302489132 |
| Nome | Pixel Exponencial |
| Status | Ativo |
| CAPI | Funcionando |
| Eventos configurados | PageView, ViewContent, InitiateCheckout, AddPaymentInfo, Purchase |
| EMQ | 6.1/10 (atualização recomendada — sem email/phone hasheado) |
| Eventos necessários | ✅ Todos configurados e disparando |
| Volumes recentes | PageView: 6,4k \| ViewContent: 4,1k \| InitiateCheckout: 30 \| AddPaymentInfo: 5 \| Purchase: 1 |

---

## PENDÊNCIAS CRÍTICAS

1. **URL dos criativos** — confirmar no Ads Manager que os 3 anúncios apontam para `professorguilhermearaujo.com.br` (não verificável via API)
2. ~~**Eventos de conversão**~~ ✅ RESOLVIDO em 2026-05-30 — PageView, ViewContent, InitiateCheckout, AddPaymentInfo e Purchase ativos e disparando
3. **EMQ** — adicionar email/phone hasheado via CAPI para elevar de 6.1 para 8+ (PageView e ViewContent com "atualização recomendada")
4. **Carrossel novo (28/05)** — CTR de 2,54% abaixo do padrão. Monitorar até ~31/05 e avaliar corte se não melhorar
5. **Próximo passo estratégico** — com pixel treinado e eventos configurados, avaliar migração para campanha OUTCOME_SALES

---

## ESTRUTURA DE NAMING CONVENTION

**Campanha:** `GA|FUNIL|PRODUTO|OBJETIVO|CANAL|YYYYMMDD`
**Conjunto:** `AS|PRODUTO|PUBLICO|GEO|IDADE|POSICIONAMENTO|YYYYMMDD`
**Anúncio:** `AD|ANGULO|CRIATIVO|FORMATO|CTA|YYYYMMDD`

---

## CRIATIVOS EM USO

| Creative ID | Nome | Formato | CTR (7d) | CPC (7d) | Status |
|---|---|---|---|---|---|
| 1297480015784881 | AD\|CARTA-JULGAMENTO\|REELS\|VIDEO\|VER-MAIS | Vídeo/Reels | 19,70% | R$0,03 | ✅ VENCEDOR — manter |
| 951208507694438 | AD\|ATRACAO-ICP\|POST\|IMAGEM\|SAIBA-MAIS | Imagem/Feed | 5,95% | R$0,14 | 🟡 OK — monitorar |
| — | AD\|CARTOMANCIA-SISTÊMICA\|CARROSSEL\|SAIBA-MAIS | Carrossel | 2,54% | R$0,21 | ⚠️ Baixo — avaliar corte em 31/05 |

---

## PRÓXIMOS PASSOS PRIORITÁRIOS

1. Verificar URL de destino dos 3 anúncios no Ads Manager (manual)
2. Elevar EMQ de 6.1 para 8+ — adicionar email/phone hasheado via CAPI
3. Avaliar corte do carrossel novo em 31/05 se CTR não subir acima de 5%
4. Planejar migração para OUTCOME_SALES — pixel está treinado e eventos configurados
5. Criar campanha BOFU/RMKT aproveitando audiência de ViewContent (4,1k) e visitantes da LP
