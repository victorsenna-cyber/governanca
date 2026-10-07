# GUIA — importar as tags GA4 no GTM (2º import)

> Arquivo: `gtm-ga4-import.json`. Adiciona ao container `GTM-W6VQGXQC` as tags do GA4 `G-LWBCJQZB9M` para os eventos custom do popup. **Pré-requisito atendido:** as tags do Meta Pixel já foram importadas e publicadas (workspace /4).

## O que este import cria
- **GA4 - Config (G-LWBCJQZB9M)** — Google Tag base (All Pages). Se o GA4 já carrega no site por outra via (gtag direto), esta config no GTM é redundante mas inofensiva; melhor ter a base no GTM p/ os eventos funcionarem.
- **GA4 - Event - generate_lead** — dispara em `CE - lead` (submit do popup). Nome GA4-canônico de lead.
- **GA4 - Event - begin_checkout** — dispara em `CE - initiate_checkout`. Nome GA4-canônico de início de checkout.
- Reusa os gatilhos `CE - lead` e `CE - initiate_checkout` e as variáveis `DLV - turma` / `DLV - lote` já existentes (o JSON os inclui p/ o import resolver as referências).

> **PageView no GA4 não é criado** — o Enhanced Measurement do GA4 (`G-LWBCJQZB9M`) já captura page_view/scroll/cliques automaticamente. Só os 2 eventos custom entram aqui.

## Passos
1. **Admin → Importar contêiner** → selecionar `gtm-ga4-import.json`.
2. **Espaço de trabalho:** Atual.
3. **Opção:** **Combinar → "Substituir acionadores, tags e variáveis conflitantes"** (NÃO "Renomear" desta vez).
   - Por quê: os gatilhos `CE - lead`/`CE - initiate_checkout` e as variáveis `DLV - turma`/`DLV - lote` **já existem** (vieram do import do Meta). "Substituir" mantém 1 cópia; "Renomear" criaria `CE - lead 1` duplicado e as tags GA4 apontariam pro gatilho errado.
   - O preview deve mostrar: **3 tags adicionadas** (GA4 config + 2 eventos) e os gatilhos/variáveis como "sem alteração" ou "substituído" (idênticos).
4. **Confirmar.**

## Verificação (Visualizar / Tag Assistant)
- Abrir a página → GA4 Config dispara (All Pages).
- Submeter popup → `generate_lead` e `begin_checkout` disparam no GA4.
- GA4 → Tempo real / DebugView: ver `generate_lead` e `begin_checkout` chegando com params turma/lote.

## Marcar como conversão (opcional, no GA4)
GA4 → Admin → Eventos → marcar `generate_lead` e `begin_checkout` como **"Evento principal" (conversão)** para usar no Google Ads.

## Publicar
GTM → **Enviar** (Victor). Depois disto, o mesmo dataLayer alimenta **Meta Pixel + GA4** simultaneamente — uma fonte, dois destinos.
