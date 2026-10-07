# TASK (Codex) — Dashboard v2

> Ler antes: `PLANO-DASHBOARD-V2.md`, `SPEC-ENGAJAMENTO-POR-DOBRA.md`, `APPS-SCRIPT-ECOSSISTEMA-V3.md`, `FASE-ADS-META-API.md`.
> Arquivos vivos: `painel/index-light.html` (dash claro atual), Apps Script no Google (código em ECOSSISTEMA-V3), `index deployado/index-v2.html` (página).
> Regra: implementar como **cópias/aditivos**. Não quebrar popup/pixel/lote/prefill. Preservar lógica de dados existente. Tratar toda fonte nova como opcional (placeholder se ausente).

## 1. Apps Script (nova versão da MESMA implantação — URL não muda)
- Novas abas: `Funil`, `Engajamento` (+ `Ads` p/ fase Meta).
- `doPost`: rotear `data.tipo` → `'funil'` (pageview/view_offer/cta_click, grava `Funil`), `'engaj'` (grava `Engajamento`, ver SPEC), além de lead/webhook já existentes. Todos com `sid` (session_id) + UTMs quando houver.
- `doGet(?report=funnel&from=YYYY-MM-DD&to=YYYY-MM-DD)`:
  - **Filtrar TODAS as abas por `timestamp` no range `from..to`** antes de agregar (se ausente, tudo).
  - Agregar e retornar, além do que já retorna:
    - `funilVendas`: array ordenado [impressoes, cliques, pageview, viewcontent, cta_click, lead, initiate_checkout, purchase] com `{etapa, n, convDaAnterior}`. impressoes/cliques vêm de `ads` (null até fase Meta).
    - `heatDobra`: por dobra `{dobra, sessoes, pct, tempoMedio}` (de `Engajamento`).
    - `heatCheckout`: `{entrou: <PIX+IC>, comprou: <APPROVED>, abandono}` (de `Vendas`).
    - `ads`: bloco opcional (ver FASE-ADS-META-API) — se `Ads` vazia, `ads:null`.
- Meta (deixar PRONTO, comentado/inativo): função `fetchMetaAds_()` que lê token+ad_account de `PropertiesService.getScriptProperties()` (`META_TOKEN`, `META_AD_ACCOUNT`), chama Graph API insights (spend/impressions/clicks/campaign_name), grava aba `Ads`. Trigger diário. **Sem token = não roda, dash mostra "—".**

## 2. Página `index-v2.html` (aditivo, não tocar popup/pixel/lote)
- Adicionar beacons (sendBeacon, mesmo endpoint) no load: `{tipo:'funil', ev:'pageview', sid, utms}`; em `view_offer`: `{tipo:'funil', ev:'view_offer', sid}`; em cada CTA que abre popup: `{tipo:'funil', ev:'cta_click', sid}`.
- Adicionar observer de dobra da `SPEC-ENGAJAMENTO-POR-DOBRA.md` (`tipo:'engaj'`).

## 3. Dashboard (cópia a partir de `index-light.html`, tema claro)
- **Seletor de período (global, topo):** presets **Hoje · 7d · 30d · Tudo** + **data específica** + **range (de/até)**. Ao mudar, refaz `fetch` com `&from&to`; guarda escolha em `localStorage`. TODOS os cards respeitam.
- **Card Funil de vendas:** funil vertical 8 linhas (impressão→purchase), contagem + % de conversão entre etapas, gargalo destacado. impressão/clique = "—" se `ads:null`.
- **Card Heatmap por dobra:** faixa vertical, 1 barra por dobra colorida por intensidade (quente=muito lida → frio), % retenção + tempo médio ao lado; ao fim, bloco checkout (entrou→comprou + % abandono). Paleta clara do dash.
- Cards já existentes (KPIs, receita/produto, UTM, ciclo de vida, abandono) mantidos e passam a respeitar o período.
- `d.ads` liga topo do funil + KPIs Investimento/CAC/ROAS/CPL quando presente.

## Gate
- [ ] Período filtra todos os cards; presets + data + range funcionam.
- [ ] Funil: nenhuma etapa maior que a anterior; % fecham.
- [ ] Heatmap por dobra colore por intensidade; checkout mostra entrou→comprou.
- [ ] `ads:null` → topo do funil e KPIs de ad = "—", sem erro.
- [ ] Página: beacons não afetam popup/pixel/lote/prefill; original preservado.
- [ ] Apps Script: nova versão da mesma implantação, URL `/exec` inalterada.

## Entrega
Dash: `painel/index-light-v2.html` (cópia, não sobrescrever o atual até aprovação). Apps Script: código completo pronto p/ colar. Registrar no `DIARIO-DE-BORDO.md`.

---
### Onde o Victor adiciona a API Meta depois (1 lugar)
Apps Script → Configurações do projeto → **Propriedades do script**: `META_TOKEN` (system user token, `ads_read`) e `META_AD_ACCOUNT` (`act_<id>`). Ativar o trigger diário de `fetchMetaAds_`. Nada muda no dash nem na página.
