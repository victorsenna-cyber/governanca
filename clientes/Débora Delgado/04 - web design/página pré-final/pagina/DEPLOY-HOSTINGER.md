# DEPLOY — index-v2.html na Hostinger (domínio deboradelgado.space)

> Decisão 11/07: página do workshop servida como **página estática cheia** no domínio dedicado **`deboradelgado.space`** (registrado na Hostinger do Victor). Vercel Hobby proíbe uso comercial; Wix não serve `.html` cheio; Cloudflare Pages grátis seria plano B. Hostinger vence: já paga, sem termo comercial, domínio no mesmo painel (zero novela de DNS). Alçada: **Victor** (hospedagem/publicação).

---

## Pré-requisito: o domínio precisa estar num plano de hospedagem

Comprar o domínio `deboradelgado.space` **não** dá hospedagem sozinho — domínio é o endereço, hospedagem é onde o arquivo mora. Duas situações:

- **Se o Victor já tem um plano de hospedagem Hostinger** (o do domínio pessoal): dá pra **adicionar `deboradelgado.space` como site adicional** no mesmo plano (planos Premium/Business permitem múltiplos sites) → hpanel → Sites → Adicionar site → apontar o domínio. Custo adicional: zero.
- **Se não tem plano de hospedagem** (só registrou o domínio): aí precisa de um plano de hospedagem (o mais barato serve — é HTML estático). Ou usar **Cloudflare Pages grátis** só pra esta página, mantendo o domínio na Hostinger e apontando por CNAME (plano B do `DEPLOY-WIX.md`).

> Confirmar isto primeiro. O resto do guia assume que `deboradelgado.space` está num plano de hospedagem Hostinger.

---

## Passos (Victor, hPanel da Hostinger)

1. **Garantir o domínio no plano:** hPanel → Sites → o site `deboradelgado.space` (adicionar se preciso). Aguardar o SSL/HTTPS ser emitido (a Hostinger faz automático; pode levar alguns minutos).
2. **Subir o arquivo:** hPanel → **Gerenciador de Arquivos** (File Manager) → pasta **`public_html`** do `deboradelgado.space` → **Upload** do `index-v2.html` → **renomear para `index.html`** (assim abre na raiz do domínio, sem `/index-v2.html` na URL).
   - Se houver arquivo padrão da Hostinger (`default.php`/`index.html` de "em construção"), apagar/substituir.
3. **HTTPS obrigatório:** confirmar que `https://deboradelgado.space` abre com cadeado. Em hPanel → Segurança → SSL, forçar HTTPS se houver a opção. Checkout e pixel exigem HTTPS.
4. **Testar** (gate abaixo) em `https://deboradelgado.space` antes de rodar tráfego.

> Não precisa mexer no WordPress do domínio pessoal do Victor — `deboradelgado.space` é outro site.

---

## Pixel / GTM — decisão registrada (não duplicar)

- A página usa **o pixel Meta base direto** (ID `4060021607461178`), já colado no `<head>` do `index-v2.html`. Ele faz `init` + `PageView`, e os eventos `ViewContent`/`Lead`/`InitiateCheckout` disparam do próprio JS via `window.fbq`. **Auto-suficiente.**
- **NÃO colar o GTM (`GTM-W6VQGXQC`) nesta página.** Se o GTM também disparar o mesmo pixel, o `PageView` (e possivelmente os outros) conta 2×. O GTM segue no Wix/institucional; nesta página, só o pixel base.
- Na Hostinger não carrega nada do Wix → sem risco de dupla contagem por aqui. A regra é só: **não adicionar o GTM aqui depois.**

---

## Gate de teste (em https://deboradelgado.space, antes do tráfego)

- [ ] Abre em HTTPS (cadeado), sem erro de console, sem overflow horizontal (desktop + 375px).
- [ ] CTA da oferta e sticky **abrem o popup**; fecha por X/backdrop/Esc.
- [ ] Submit do popup: grava linha na aba `Leads` da planilha **e** redireciona ao checkout **com `&name=&email=` preenchidos**.
- [ ] Trocar a turma → cai no `ck…` certo (fds ≠ semana).
- [ ] Abrir com `?utm_source=teste&utm_campaign=teste` → UTMs aparecem na URL do checkout e na planilha.
- [ ] Eventos `PageView` / `ViewContent` / `Lead` / `InitiateCheckout` disparando (Meta Pixel Helper) — **PageView uma vez só**.
- [ ] Compra-teste ponta a ponta → Purchase na PagTrust + obrigado-page com grupo de WhatsApp da turma certa.

---

## Resumo para o Victor

| Item | Situação |
|---|---|
| Domínio da página | `deboradelgado.space` (dedicado, Hostinger) |
| Hospedagem | plano Hostinger existente (adicionar site) **ou** plano novo barato / Cloudflare Pages grátis se não houver plano |
| Como subir | File Manager → `public_html` → `index.html` |
| Pixel | pixel base no `<head>` (já feito); **não** colar GTM aqui |
| Apps Script / prefill / UTM | funcionam sem ajuste (página cheia) |
| HTTPS | automático Hostinger — confirmar cadeado antes do tráfego |

> Nada ao ar sem Victor (host + publicação). Copy V2 segue com Débora, em paralelo.

---

## Decisão 11/07 — página de vendas = estática em public_html (não WordPress)
A `index-v2.html` (página de vendas) vai como **arquivo estático `index.html` em `public_html`** da Hostinger — MESMO método do dashboard. Motivo: landing de conversão precisa carregar rápido (<3s mobile) e o JS (popup/dataLayer/virada de lote) roda limpo, sem conflito com CSS/JS do tema WordPress nem peso extra (jQuery/plugins).
- **WordPress FUNCIONA** para essa página (via template em branco + HTML custom), mas com risco de conflito de estilo do tema e página mais lenta. Por isso: estática.
- ⚠️ **Evitar página duplicada:** se a versão WordPress também estiver publicada, ela compete com a estática (conteúdo duplicado p/ SEO, risco de pixel/GTM contando 2× em URLs diferentes, confusão de manutenção). **Definir 1 URL canônica (a estática) e despublicar/redirecionar a versão WP.** O tráfego pago aponta só para a estática.
- Dashboard segue em `/dashboard`. Se a landing for a raiz do domínio, os dois convivem (raiz = venda, /dashboard = painel).

## Fazer a landing virar a HOME (raiz), mantendo o WordPress inerte (decisão Victor 11/07)
O WP não é usado agora, mas fica instalado p/ uso futuro. Passos p/ a landing assumir `deboradelgado.space`:
1. **Backup do `.htaccess`** da raiz (copiar o conteúdo antes de mexer).
2. **Renomear o `index.php`** do WordPress na raiz `public_html/` → `index.php.bak` (desliga a home do WP sem apagar; reversível). Necessário porque o `.htaccess` do WP reescreve a home p/ o index.php e ignoraria o index.html.
3. **Subir `index.html`** (a index-v2 renomeada) em `public_html/`.
4. **Se ainda abrir o WP:** adicionar no TOPO do `.htaccess` → `DirectoryIndex index.html index.php`.
5. Testar `deboradelgado.space` em **aba anônima** (evita cache da home antiga).
- WP continua acessível em `/wp-admin`; p/ usar o WP depois, reativar ou servir em subcaminho. Nada é apagado.
- ⚠️ Não misturar: tráfego pago aponta só p/ a raiz (a landing). Se sobrar página WP de vendas publicada, despublicar (conteúdo duplicado + risco de pixel 2×).
