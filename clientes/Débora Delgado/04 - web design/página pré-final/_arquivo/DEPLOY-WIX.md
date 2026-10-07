# DEPLOY — index-v2.html com domínio no Wix

> Decisão 11/07: servir o `index-v2.html` como **página estática cheia** em host externo (Vercel/Netlify/Cloudflare Pages) e apontar o domínio gerenciado no Wix pra lá. Preserva popup, redirect com prefill, UTM e pixel **sem remendo de iframe**. Alçada de execução: **Victor** (host/DNS/publicação).

---

## Por que NÃO usar o Wix como servidor do HTML

O Wix é site builder fechado: **não hospeda um `.html` avulso como página cheia.** Os únicos jeitos de "colocar HTML no Wix" são (a) embed em iframe (sandbox, quebra popup/redirect/UTM/pixel — exige 3 remendos) ou (b) reconstruir no Velo. Nenhum serve o arquivo como está. Por isso: **host externo + domínio via Wix.**

## Fato que define o método de DNS

**O Wix não permite trocar os nameservers do domínio.** Consequência:
- Dá pra **apontar** (editar registros A/CNAME no painel do Wix) para um host externo. ✅ É o caminho.
- **Não** dá pra delegar nameserver (o que a Vercel sugere no apex). No domínio raiz, usa-se **A + CNAME** pelo fluxo "Conectar a um site externo" do Wix.
- Propagação de DNS: **até 48h** (normalmente bem menos). Planejar antes da campanha.

---

## Caminho recomendado (Cloudflare Pages ou Netlify — melhor no apex)

Cloudflare Pages e Netlify lidam melhor com domínio-raiz via A/ALIAS/CNAME-flattening do que a Vercel (que prefere nameserver). Passos genéricos:

1. **Publicar o HTML** (Victor):
   - Criar projeto no host (Netlify/Cloudflare Pages), subir `index-v2.html` como `index.html` na raiz do deploy (arrastar a pasta serve). Sai um domínio provisório (ex.: `seu-eixo.pages.dev`) — **testar tudo aí primeiro** (ver Gate abaixo).
2. **Pegar os registros DNS** que o host pede (A record + CNAME, ou CNAME de `www`).
3. **No painel do Wix** → Domínios → o domínio → **Editar DNS / Conectar a um site externo** → adicionar os registros A (Host) e CNAME (Aliases) que o host passou. Referência Wix: "Connecting a Wix Domain to an External Site".
4. **Subdomínio (alternativa mais segura):** se não quiser mexer no domínio-raiz agora, usar um subdomínio (ex.: `workshop.deboradelgado.com.br` ou `seueixo.deboradelgado.com.br`) via CNAME — fluxo "Connecting a Subdomain to an External Resource". **Menos risco** (não derruba o site atual do Wix se algo der errado) e ótimo pra página de campanha.
5. **Aguardar propagação** (até 48h) e validar no domínio final.

> **HTTPS:** Netlify/Cloudflare emitem certificado SSL automático pro domínio conectado. Confirmar que o cadeado aparece antes de rodar tráfego (checkout e pixel exigem HTTPS).

---

## O que reconferir DEPOIS de trocar de host (não pode esquecer)

1. **Pixel / GTM (crítico).** O pixel está via GTM instalado no Wix (decisão 09/07). Na página servida por host externo, **o GTM/pixel do Wix não carrega sozinho** — o container do GTM precisa estar **no `<head>` do `index-v2.html`** (ou o pixel base direto). Sem isso, `window.fbq` não existe e os `track('Lead')`/`track('InitiateCheckout')`/`ViewContent` **não disparam** (o código tem guard, então não quebra — só não mede).
   - Ação: colar o snippet do GTM (ou Pixel base) no `<head>` do HTML antes de subir, e reverificar eventos no Events Manager (EMQ).
2. **PagTrust.** O checkout é domínio externo (PagTrust) — independe de onde a página está. O pixel do lado da PagTrust (Purchase) já está configurado (09/07) e **não muda**.
3. **UTM passthrough.** Em página cheia funciona direto (o código lê `location.search` da própria aba). ✅ Nada a fazer.
4. **Links internos/âncoras** (`#oferta`): funcionam igual em página cheia. ✅

---

## Gate de teste (rodar no domínio provisório do host ANTES de apontar o Wix)

- [ ] Página abre em HTTPS, sem erro de console, sem overflow horizontal (desktop + 375px).
- [ ] CTA da oferta e sticky **abrem o popup**; fecha por X/backdrop/Esc.
- [ ] Submit do popup: grava linha na aba `Leads` da planilha (Apps Script no ar) **e** redireciona ao checkout **com `&name=&email=` preenchidos**.
- [ ] Trocar a turma → cai no `ck…` certo (fds ≠ semana).
- [ ] Abrir a página com `?utm_source=teste&utm_campaign=teste` → as UTMs aparecem na URL do checkout e na planilha.
- [ ] Eventos `ViewContent` / `Lead` / `InitiateCheckout` disparando (Meta Pixel Helper) — **só depois de colar o GTM/pixel no `<head>`**.
- [ ] Compra-teste ponta a ponta (chega em Purchase na PagTrust, obrigado-page com grupo de WhatsApp da turma certa).

---

## Resumo da decisão para o Victor

| Item | Situação |
|---|---|
| Servir HTML como página cheia | Host externo (Netlify/Cloudflare Pages), **não** Wix como servidor |
| Domínio | Fica no Wix; **apontar via A/CNAME** (nameserver não é editável no Wix) |
| Recomendação de menor risco | Subdomínio (ex.: `workshop.deboradelgado.com.br`) via CNAME |
| Pixel/GTM | **Colar no `<head>` do HTML** e reverificar — não vem de graça do Wix nesse cenário |
| Apps Script / prefill / UTM | Funcionam sem ajuste em página cheia |
| Prazo | Propagação DNS até 48h — fazer antes da janela de campanha |

> Nada disso vai ao ar sem o Victor (host + DNS + publicação). Copy V2 segue aguardando Débora, em paralelo.
