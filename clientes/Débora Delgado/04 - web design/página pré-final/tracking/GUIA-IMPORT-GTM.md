# GUIA — importar o container de tracking no GTM (GTM-W6VQGXQC)

> Arquivo: `gtm-container-import.json`. Monta a stack pixel-browser lendo os eventos do dataLayer da `index-v2` (view_offer/lead/initiate_checkout) + PageView, todos com `event_id` (dedup pronta p/ o CAPI Gateway da fase 2). Executor: **Victor** (é a conta dele; import + publicação = aprovação humana).

## O que o import cria
- **Variáveis:** `Const - Pixel ID` (4060021607461178) · `DLV - event_id` · `DLV - email` · `DLV - phone` · `DLV - turma` · `DLV - lote`.
- **Gatilhos:** `CE - view_offer` · `CE - lead` · `CE - initiate_checkout` (Custom Event) — substituem os de "Click | pagtrust".
- **Tags (Custom HTML):** `Meta Pixel - Base (PageView)` (All Pages) · `Meta Pixel - ViewContent` · `Meta Pixel - Lead` · `Meta Pixel - InitiateCheckout` — cada evento com `{ eventID: {{DLV - event_id}} }` (dedup).

## Passos (GTM → Admin)
1. **Admin → Importar contêiner.**
2. Escolher o arquivo `gtm-container-import.json`.
3. **Espaço de trabalho:** escolher o workspace "API WEB - Débora" (ou criar um novo p/ revisar isolado).
4. **Opção de mesclagem:** escolher **"Mesclar" → "Renomear conflitos"** (NÃO "Substituir") — assim nada existente é apagado; os novos entram ao lado, e você limpa os antigos manualmente no passo 6.
5. **Visualizar / Confirmar:** revisar o resumo do merge (deve mostrar 6 variáveis, 3 gatilhos, 4 tags novas). Confirmar.
6. **Limpeza dos artefatos da página antiga** (fazer depois do import, à mão):
   - Desativar/excluir as tags `Meta Pixel | InitiateCheckout | Clique Checkout` e `Meta Pixel | InitiateCheckout | PagTrust` (disparavam em clique de link pagtrust — não existe mais).
   - Desativar/excluir os gatilhos `Click | Checkout` e `Click | Checkout PagTrust`.
   - A tag `Meta Pixel` (All Pages) antiga: **manter só uma** base de PageView. Se a importada `Meta Pixel - Base (PageView)` duplicar a existente, desativar uma das duas (não pode haver 2 PageView).
   - `Meta Ads`, `Facebook CAPI Tag`, `Event ID - Único`: podem ficar (inertes) — serão usados na fase 2 (CAPI Gateway).

## Verificação (antes de publicar)
1. **GTM → Visualizar (Tag Assistant)** apontando pra `deboradelgado.space` (depois de subir o HTML) ou pro preview local.
2. Abrir a página → deve disparar **PageView 1×**.
3. Rolar até a oferta → **ViewContent** (evento `view_offer`), com `event_id`.
4. Abrir popup, escolher turma, enviar → **Lead** + **InitiateCheckout**, cada um com `event_id`.
5. **Events Manager → Testar eventos:** confirmar PageView/ViewContent/Lead/InitiateCheckout chegando, sem duplicação.
6. Conferir que os gatilhos de clique-pagtrust **não** disparam mais.

## Publicar
GTM → **Enviar** → nomear a versão (ex.: "Seu Eixo — pixel via dataLayer + event_id"). **Publicação é sua** (Victor).

## Nota sobre o ID do gatilho All Pages
No JSON, a tag base usa `firingTriggerId: 2147479553` (ID padrão do "All Pages" nativo). Se o seu container usar outro ID pro All Pages, o import pode reclamar — nesse caso, após importar, **abrir a tag `Meta Pixel - Base` e reatribuir o acionamento p/ "All Pages"** manualmente (1 clique). O resto (gatilhos CE) é autocontido no JSON.

## Fase 2 — CAPI Gateway grátis (quando escalar verba)
- Events Manager → Configurações do pixel → **Conversions API → Gateway** (setup grátis 2026, server-side, sem servidor próprio, sem token no código).
- Como o `event_id` já vai em todos os eventos, o Gateway **deduplica automaticamente** com o pixel-browser. **Zero mudança no HTML ou nas tags.**
- Token CAPI: gerido pelo Gateway/Meta — não vai pro GTM nem pro código (evita exposição).
