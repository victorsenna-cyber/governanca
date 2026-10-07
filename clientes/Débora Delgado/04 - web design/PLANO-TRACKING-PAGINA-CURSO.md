# Plano de tracking + dados — Página de vendas do Curso de Eneagrama

> STATUS: VIGENTE · fonte
> Responde: (1) pixel novo ou o mesmo? (2) Apps Script novo ou iterar o v4 + dashboard? Base: leitura real do `APPS-SCRIPT-ECOSSISTEMA-V4.gs` (556 linhas) + `APPS-SCRIPT-ECOSSISTEMA-V3.md` + setup de pixel (DECISOES 09/07, 11/07). Complementa `PLANO-PAGINA-CURSO-ENEAGRAMA.md`.

---

## Resposta 1 — Pixel: MESMO pixel do workshop, com identificação por conteúdo

**Não criar pixel novo.** Usar o **mesmo pixel base `4060021607461178`**, distinguindo a página do curso pelos **parâmetros do evento**, não por um pixel separado.

Motivos de fato:
- **Aprendizado e público:** um pixel só acumula sinal, públicos (visitantes, quem iniciou checkout) e lookalikes num lugar. Dois pixels fragmentam o aprendizado e não conversam — péssimo para retargetar quem viu a página do curso a partir de quem comprou o workshop, que é justamente a sinergia do funil.
- **Mesmo BM, mesma conta de anúncio, mesma pessoa (Débora).** Não há razão de isolamento (contas/clientes diferentes) que justifique um segundo pixel.
- **Distinção limpa por parâmetro:** os eventos da página do curso levam `content_name: 'curso-eneagrama'` (e `content_ids`/`content_type` se quiser). No Events Manager e nas campanhas você segmenta por esse parâmetro. Mesma técnica que a Meta recomenda para múltiplas páginas/produtos sob um pixel.

**Como fica na prática (página do curso):**
- `fbq('init', '4060021607461178')` (o mesmo do head da página do workshop; sem GTM, `fbq` direto — regra 11/07).
- `ViewContent` com `{content_name:'curso-eneagrama', value:57, currency:'BRL'}` no load.
- `InitiateCheckout` com o mesmo `content_name` no clique do CTA que vai ao checkout do curso.
- `Purchase` fica na PagTrust (não na página) — mesma decisão das obrigado (17/07): não trackear Purchase por fora agora; backlog em `ANALISE-TRACKING-OBRIGADO-PURCHASE.md`.

> Efeito colateral bom: como o Purchase do curso (inclusive comprado como order bump do workshop) já entra no webhook PagTrust → aba `Vendas` com `is_order_bump`/`parent_tx`, o **painel já vê a venda do curso** independentemente da página. A página só precisa medir topo de funil (viu, iniciou checkout).

---

## Resposta 2 — Apps Script: ITERAR o v4 (não criar novo). Dashboard: iterar o v3 para multi-página.

**Não criar Apps Script novo.** O v4 já é um ecossistema single-endpoint que faz tudo que a página do curso precisa; criar um segundo Web App duplicaria manutenção, token, planilha e triggers Meta sem ganho. **A iteração é pequena e cirúrgica.**

### O que o v4 JÁ faz (lido no código, não suposto)
- `doPost` recebe 3 tipos de payload leve: `funil` (aba `Funil`), `engaj` (aba `Engajamento`, com campo **`dobra`**+`sid` = matéria-prima do mapa de calor), e `lead` (aba `Leads`); mais o **webhook PagTrust** (aba `Vendas`, já com `is_order_bump` e `parent_tx` → **vendas de order bump já contabilizadas**; e aba `CicloVida` para assinatura/acesso).
- `buildHeatDobra_` monta o **mapa de calor por dobra**; `buildFunnel_` o funil; `fetchMetaAds_` puxa a Meta Marketing API (CAC/ROAS). O dashboard consome via `doGet?report=...`.

### O buraco (o que falta para multi-página)
As abas `Funil` e `Engajamento` **não têm o campo `page`** — hoje todo evento é assumido como sendo da página do workshop, e `ORDEM_DOBRAS` é fixa nas dobras do workshop (`D1 Hero`...`D10 Fecho`). Se a página do curso mandar `engaj` sem distinção, os dois mapas de calor se misturam.

### Iteração necessária (mínima e retrocompatível)

**A. Apps Script v4 → v4.1 (add dimensão `page`):**
1. Adicionar `page` aos headers `H_FUNIL` e `H_ENGAJ` (ex.: `page: 'workshop' | 'curso'`). `ensureHeaders_` já adiciona coluna nova sem quebrar linhas antigas (retrocompatível — evento sem `page` cai como `''`/legado = workshop).
2. `doPost`: gravar `data.page` nos ramos `funil` e `engaj`.
3. `buildHeatDobra_` e `buildFunnel_`: aceitar parâmetro/filtro `page` e usar a **ordem de dobras correta por página** (workshop = a atual; curso = `D1 Hero, D2 Espelho, D3 Custo, D4 Virada(mapa), D5 Pilha, D6 Prova, D7 Qualificação, D8 Oferta, D9 FAQ, D10 Fecho` do `PLANO-PAGINA-CURSO-ENEAGRAMA.md`). Guardar as duas ordens num mapa `ORDEM_DOBRAS_POR_PAGINA`.
4. `doGet`: aceitar `&page=curso|workshop` (default: workshop, para não quebrar o dashboard atual).
- **Vendas/order bump:** nada a mudar — a aba `Vendas` já separa por `produto`/`produto_id` e `is_order_bump`. Só garantir no dashboard um recorte "vendas do curso" (produto = Curso de Eneagrama) e "order bumps" (is_order_bump=true).

**B. Página do curso (instrumentação):** o build da página inclui o mesmo mini-SDK de tracking da página do workshop (dispara `funil`/`engaj` para o `LEADS_ENDPOINT` já publicado), com **`page:'curso'`** em todo evento e as dobras nomeadas conforme o plano do curso. `IntersectionObserver` marca a dobra vista (mesma técnica do index vigente).

**C. Dashboard v3 → v3.1 (multi-página + bumps):**
1. **Seletor de página** no topo (Workshop · Curso) que troca o `&page=` das chamadas `doGet`. Cada um mostra seu **mapa de calor por dobra** e seu funil.
2. **Bloco de order bumps:** card/tabela lendo a aba `Vendas` com `is_order_bump=true` (take rate do bump = bumps ÷ vendas do workshop; receita do bump). Já dá para montar com os dados que o webhook grava hoje.
3. Reaproveitar todo o resto (Meta Ads, ciclo de vida) — sem tocar.

### Por que iterar vence criar novo (resumo)
- 1 endpoint, 1 planilha, 1 token, 1 trigger Meta = 1 lugar de manutenção.
- Retrocompatível: coluna `page` nova não quebra dados/leituras antigas (default = workshop).
- O dashboard ganha os **dois mapas de calor + bumps** num seletor, exatamente o que o Victor pediu, sem reescrever a base.

---

## O que será necessário executar (checklist)

**Apps Script (executor, ~1 sessão):**
- [ ] Add `page` em `H_FUNIL`/`H_ENGAJ` + gravação no `doPost`.
- [ ] `ORDEM_DOBRAS_POR_PAGINA` (workshop atual + curso do plano).
- [ ] `buildHeatDobra_`/`buildFunnel_`/`doGet` aceitam `page` (default workshop).
- [ ] Publicar **nova versão do MESMO Web App** (URL `/exec` não muda → nada quebra na página do workshop).

**Página do curso (executor, junto do build):**
- [ ] `fbq init` pixel `4060021607461178` + `ViewContent`/`InitiateCheckout` com `content_name:'curso-eneagrama'`.
- [ ] Mini-SDK de `funil`/`engaj` com `page:'curso'` + dobras do plano + IntersectionObserver.
- [ ] `LEADS_ENDPOINT` = o mesmo já publicado (não criar outro).

**Dashboard v3.1 (executor/Codex, ~1 sessão):**
- [ ] Seletor Workshop/Curso → troca `&page=`.
- [ ] Mapa de calor por página + bloco de order bumps (is_order_bump).

**Pendências humanas (Victor):**
- [ ] Criar o **checkout avulso do Curso de Eneagrama** na PagTrust (a página precisa de destino de CTA; também destrava o resgate B4 das obrigado). Apontar o webhook desse produto para o MESMO endpoint.
- [ ] Confirmar preço de tabela R$ 297 (fecha a âncora).
- [ ] Débora: aprovar copy + foto/credenciais da página (D6).

---

## Veredito de 1 linha
Pixel: **mesmo** (`4060021607461178`), distinção por `content_name:'curso-eneagrama'`. Apps Script: **iterar o v4** (add dimensão `page`, retrocompatível) e o **dashboard v3** (seletor Workshop/Curso + mapa de calor por página + bloco de order bumps) — nada de endpoint/pixel/planilha novos. Purchase segue só na PagTrust (backlog de tracking próprio mantido).
