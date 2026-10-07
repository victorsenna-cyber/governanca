# ESTRUTURA DE CAMPANHAS — registro de IDs (montagem 16/07)

> STATUS: VIGENTE · fonte (registro de execução) · derivado de `TASK-EXECUTOR-MONTAGEM-CAMPANHA.md`
> Montagem PARCIAL — ver bloqueios abaixo. Nada ativado.

## Ativos usados
- **BM:** `2917036641953421` (Débora Delgado)
- **CA:** `379430536736935` ([DD] CA 01 - Backup)
- **Dataset/pixel:** `4060021607461178` ("Pixel Débora", ativo, eventos até 14/07 com dedupe pixel+CAPI). Candidato descartado: `852288894317029` ("CRM Dados") — nunca disparou, não é pixel de conversão.
- **Página do Facebook:** `108248871371731` — ⚠️ retornado pela API sem nome (`page_name: "(unknown)"`) e `leadgen_tos_accepted: false`. Confirmado pelo Victor como o candidato correto (única página vinculada à CA) apesar do nome vazio — **conferir no gerenciador antes de ativar**.
- **Conta Instagram:** não confirmada — `ads_get_ig_accounts` indisponível para esta CA (tool em rollout gradual da Meta). **Pendente.**
- **5 campanhas legado:** confirmadas `PAUSED`, não tocadas.

## Campanha
| Campo | Valor |
|---|---|
| Nome | `debora-meta-vendas-workshop-ago26` |
| ID | `120248977530950107` |
| Objetivo | OUTCOME_SALES |
| Compra | AUCTION |
| Orçamento | CBO, R$ 60,00/dia (6000 centavos) — cenário A |
| Bid strategy | LOWEST_COST_WITHOUT_CAP |
| Status | **PAUSED** |

## Conjunto broad-br — DIAGNÓSTICO FECHADO em 18/07 (causa: LOCALIZAÇÃO, não o evento)
`ads_create_ad_set` falhou repetidas vezes com `error_category: INTERNAL` genérico. **A causa NÃO era o InitiateCheckout** (que está ATIVO no pixel — 32 eventos, confirmado no gerenciador em 18/07). A causa é o **direcionamento por localização**: a Meta removeu as antigas opções de tipo de localização e deixou só **"Pessoas que moram ou estiveram recentemente neste local"**; o `geo_locations` montado pelo MCP trombava nessa regra nova e a API reportava como `INTERNAL`. Aviso correlato no gerenciador ao duplicar manualmente: **#1870194**.

**Como foi descoberto:** o Victor duplicou o ad_set de diagnóstico no gerenciador e só trocou o evento para "Iniciar finalização da compra" — funcionou (rascunho pronto pra publicar). Isso provou que o evento estava OK e isolou a localização como culpada.

**Diagnóstico por eliminação via MCP (registro):** targeting sem automation → INTERNAL · LANDING_PAGE_VIEWS → VALIDATION (incompatível c/ OUTCOME_SALES) · OFFSITE_CONVERSIONS sem promoted_object → VALIDATION (exige pixel) · pixel só → "invalid combination" · **pixel + PURCHASE → SUCESSO** (estrutura/pixel ok; o targeting da chamada é que trombava).

**Solução:** montagem manual do conjunto no gerenciador via `ESTRUTURA-MANUAL-GERENCIADOR.md` (re-adicionar o Brasil → pega o tipo único vigente). Regra incorporada ao `METODO-TRAFEGO-PAGO.md` §5.2 (réplica local; propagação à fonte canônica sinalizada). Estado atual: Victor já tem a cópia manual do conjunto em rascunho (`broad-br`) na conta.

## Conjunto retarget-quente (cenário B) — NÃO CRIADO
Bloqueado pela mesma falha do broad-br (não chegou a ser tentado).

## Anúncios F1 (7 peças) — ✅ CRIADOS (18/07, todos PAUSED)

Conjunto: `broad-br-vs` (ID `120249029701440107`, montado manualmente pelo Victor, IC + localização corrigida). Página `108248871371731`. Artes por `image_hash` (uploadadas na Biblioteca de Mídia, mapeadas por nome). Campanha autenticada (SMS resolvido) antes de criar.

| # | Anúncio | ID | Arte(s) |
|---|---|---|---|
| 1 | debora-eficiencia-estatico-h1-v2 | `120249030212460107` | E1-eficiencia |
| 2 | debora-custo-estatico-h1-v1 | `120249030214520107` | E2-custo |
| 3 | debora-raiz-estatico-h1-v1 | `120249030214900107` | E3-raiz |
| 4 | debora-sistemas-carrossel-h2-v2 | `120249030218120107` | C1 cards 01-05 |
| 5 | debora-paz-carrossel-h1-v2 | `120249030222280107` | C2 cards 01-04 |
| 6 | debora-cn1-ruminacao-carrossel-v1 | `120249030224250107` | CN1 cards 01-05 |
| 7 | debora-cn2-causa-carrossel-v1 | `120249030226780107` | CN2 cards 01-05 |

Copy 1:1 da `copy-anuncios.md` v2 · UTMs conforme §4 (utm_content = nome do anúncio) · botões: Inscreva-se (E1, E2, C2) / Saiba mais (E3, C1, CN1, CN2).

⚠️ PENDENTE (Victor, no gerenciador): conferência visual §5 (cards 🔍: C1 2-5, C2 2-4, CN2 2-4) + preview de cada anúncio (texto sobre imagem legível) + confirmar Instagram no seletor de cada anúncio (API de IG indisponível; anúncios criados só com page_id).

## Conferência 🔍 (§5) — NÃO EXECUTADA
Não chegou a esta etapa.

## Checklist de tracking (§6) — NÃO EXECUTADO
Não chegou a esta etapa. Pixel confirmado ativo (acima) é o único item verificado.

---

## Pendências para retomar
1. **Diagnosticar erro INTERNAL em `ads_create_ad_set`** — reprocessar em sessão nova, considerar simplificar `targeting`/`attribution_spec`/`promoted_object` um de cada vez para isolar o campo problemático, ou tentar novamente mais tarde (pode ser instabilidade transitória da API apesar de `is_retryable: false`).
2. **Confirmar conta Instagram** vinculada à CA `379430536736935` — via gerenciador manualmente, já que a API está indisponível.
3. Depois de 1-2: retomar do conjunto broad-br em diante (retarget-quente, 7 anúncios, conferência 🔍, checklist §6).

## Fallback (se o bloqueio persistir)
Se `ads_create_ad_set` continuar falhando em nova tentativa, gerar `ESTRUTURA-MANUAL-GERENCIADOR.md` com passo a passo clique a clique (conforme §0 do TASK-EXECUTOR) para o Victor montar o conjunto e os anúncios manualmente.
