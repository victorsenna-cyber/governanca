# TASK (Codex) — redesign do dashboard com design system Modernize (tema claro)

> **Objetivo:** aplicar o design system do Modernize (tema claro, preferência da Débora) ao dashboard do funil, mantendo 100% da lógica de dados. **Fazer uma CÓPIA — não editar o original.**

## Arquivos
- **Origem (NÃO editar):** `04 - web design/página pré-final/painel/index.html` (dashboard atual, tema escuro).
- **Design system:** `04 - web design/página pré-final/dashboard/DESIGN-SYSTEM-MODERNIZE.md` (tokens já extraídos — cores, tipografia, padrões de card/tabela/gráfico).
- **Referência viva (opcional):** `04 - web design/referências/Modernize-Nextjs-Free-main.zip` — abrir `src/utils/theme/DefaultColors.tsx` e os componentes em `components/dashboard/*.tsx` (SalesOverview, YearlyBreakup, MonthlyEarnings, ProductPerformance, RecentTransactions) p/ ver o *look* dos cards/charts. É Next/MUI — **inspirar-se, recriar em CSS puro**, não portar React.
- **Saída (CRIAR):** `04 - web design/página pré-final/painel/index-light.html` (cópia redesenhada). O original `index.html` fica intacto p/ rollback.

## Contrato — o que NÃO pode mudar (lógica de dados)
Preservar exatamente, sem tocar:
- `var ENDPOINT` (URL do Apps Script) e `var SENHA` (deixar como está; Victor troca).
- Toda a função `load()` / `fetch(ENDPOINT+'?report=funnel')` e o `render(d)` — os **nomes de campo** que o render lê (`d.funil.leads/pix/vendas/conv`, `d.receita`, `d.ticket`, `d.refunds`, `d.porProduto[p].receita`, `d.porUtm[k].{lead,venda,receita}`, `d.cicloVida.{subCreated,subRenewed,subCancel,accessEnded}`, `d.abandono[]`).
- O gate de senha (sessionStorage), o auto-refresh (setInterval 60s), os `id=` dos elementos que o JS referencia (`kpis`, `funnel`, `chTurma`, `chLote`, `tblUtm`, `tblAband`, `abCount`, `updated`, `gate`, `app`, `pw`).
- Chart.js (mesma CDN). Pode trocar cores/opções dos gráficos, não a fonte dos dados.

## O que MUDAR (só visual)
1. **Tema claro** conforme `DESIGN-SYSTEM-MODERNIZE.md`: fundo `#F2F6FA`, cards brancos com sombra suave e `border-radius` ~12px, texto `#2A3547`/`#5A6A85`.
2. **Fonte** Plus Jakarta Sans (Google Fonts), títulos peso 600, labels de KPI em `grey.400` maiúsculo pequeno.
3. **KPIs** no estilo Modernize: número grande, label pequeno, cor semântica (vendas/receita/conversão = success `#13DEB9`; reembolsos = error `#FA896B`; leads = primary `#5D87FF`). Ícone/knob circular com `*.light` de fundo é bem-vindo.
4. **Gráficos** (Chart.js): paleta primary/success/warning; grid discreto `#EAEFF4`; barras arredondadas; sem bordas pesadas.
5. **Tabelas** (UTM, abandono): cabeçalho `grey.400` maiúsculo, linhas com `divider #e5eaef`, hover `#f6f9fc`.
6. **Funil**: barras com gradiente success; manter as 3 etapas (Leads → Pix → Vendas).
7. **Responsivo**: manter o grid; cards empilham no mobile. Header com título + botão Atualizar.

## Preparar para a camada de AD (Meta Marketing API) — futuro, deixar pronto
O dashboard deve **já ter o espaço** dos dados de ad, renderizando "—" ou "aguardando" enquanto a API não está ligada. Quando o App Meta ficar pronto, o gasto entra pelo MESMO endpoint (`?report=funnel` passa a incluir um bloco `ads`) — **sem refazer layout**.

Estruturar assim:
1. **KPIs extras** (linha de investimento, ocultável/"—" quando `d.ads` ausente):
   - **Investimento** (gasto total) · **CAC** (gasto ÷ vendas) · **ROAS** (receita ÷ gasto) · **CPL** (gasto ÷ leads).
   - Cores: investimento neutro (`primary`), ROAS positivo (`success` se ≥ meta), CAC (`warning`/`error` se alto).
2. **Seção "Aquisição paga" (card)** que cruza UTM×gasto: por campanha (`utm_campaign`) — gasto, leads, vendas, CAC, ROAS. Enquanto `d.ads` não existe, mostrar placeholder "Conecte o App Meta para ver custo por campanha".
3. O `render(d)` deve tratar `d.ads` como **opcional**: `var ads = d.ads || null;` e cada bloco de ad checa `if(ads){...} else {placeholder}`. Nunca quebrar se ausente.

Formato esperado do bloco `ads` (para o Codex programar o render agora, mesmo sem dados):
```json
"ads": {
  "spend_total": 0,
  "porCampanha": { "<utm_campaign>": { "spend": 0, "impressions": 0, "clicks": 0 } }
}
```
Cálculos no front: CAC = spend_total / vendas · ROAS = receita / spend_total · CPL = spend_total / leads · por campanha idem cruzando com `d.porUtm`/`d.porProduto`.

> **Não** implementar a chamada à API Meta agora (depende do App + token de sistema — fase própria). Só deixar o layout e o `render` prontos p/ receber `d.ads`.

## Gate de verificação (Codex roda antes de fechar)
- [ ] `index.html` original **inalterado** (diff vazio).
- [ ] `index-light.html` abre, passa o gate de senha, e ao `load()` renderiza os mesmos dados (testar apontando pro ENDPOINT real — deve mostrar as 2 vendas de teste, ou o estado atual).
- [ ] Todos os `id=` referenciados pelo JS existem no novo HTML (senão o render quebra).
- [ ] Sem erro de console; Chart.js desenha os 2 gráficos; tabelas populam.
- [ ] Tema claro coerente (contraste ≥4.5:1 no texto sobre fundo claro).
- [ ] Sem dependência externa além de Chart.js + Google Fonts.
- [ ] Blocos de ad (Investimento/CAC/ROAS/CPL + Aquisição paga) renderizam **placeholder** quando `d.ads` ausente, sem erro; e renderizam valores se `d.ads` presente.

## Entrega
- `index-light.html` na pasta `painel/`. Victor compara os dois no browser, escolhe, e sobe o escolhido como `index.html` em `deboradelgado.space/dashboard/`.
- Registrar no `DIARIO-DE-BORDO.md`.

## Nota
Débora prefere temas claros (confirmado). Este redesign é a versão que vai pra ela. Se o Modernize tiver um dark mode e quisermos manter os dois, o toggle é fase 2 — por ora, entregar o claro.
