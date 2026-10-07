# ROADMAP.md — Sprint de Lançamento (7 dias)

**Meta:** subir campanha de tráfego pago em até **7 dias**, com tudo criado, rodando e
plugado na estrutura. Ver `PROJECT.md` (visão) e `CLAUDE.md` (como trabalhar).
**Início:** 25/06/2026 · **D-Day (campanha no ar):** D+7

---

## Definição de "pronto" (o que precisa existir em D+7)

1. Contas de anúncio configuradas (Meta: BM, pixel/CAPI, página, formas de pagamento)
2. Página de vendas (landing + checkout) publicada e plugada no funil
3. Funil montado: anúncio → landing → checkout → grupo WhatsApp → (workshop)
4. Copy aprovada (landing, anúncios, mensagens do grupo)
5. Criativos iniciais prontos (3–5 variações)
6. Guia de criação de conteúdo/criativos para a Débora (hooks, corpo, CTAs)
7. Campanha estruturada e publicada (sob aprovação do Victor)

---

## Frentes em paralelo

- **A. Técnico/Infra** — contas, pixel, domínio, integrações (Continuum)
- **B. Copy & Oferta** — landing, anúncios, grupo, guia para Débora (Continuum)
- **C. Web/Página** — landing + checkout em HTML único (Continuum, skill `ui-ux-pro-max`)
- **D. Criativos** — variações iniciais + guia de produção (Continuum + Débora)

---

## Dia a dia

### D1 — Fundação
- Fechar oferta canônica e promessa do workshop (PROJECT.md §5/§8)
- **[A]** Auditar acessos: Meta BM, Wix/domínio, pagamento, pixel
- **[B]** Esqueleto da copy da landing (estrutura de blocos)
- **Saída:** oferta congelada + checklist técnico em `03 - tráfego pago`

### D2 — Copy & estrutura técnica
- **[B]** Copy completa da landing (hero, dores, oferta, lotes, FAQ, CTA)
- **[A]** Configurar pixel/CAPI + eventos (PageView, InitiateCheckout, Purchase)
- **Saída:** `copy-landing.md` em `04 - web design` + pixel ativo

### D3 — Página no ar (v1)
- **[C]** Landing + checkout em HTML único (`ui-ux-pro-max`), oferta em lotes
- **[A]** Plugar checkout (link de pagamento) + redirect para grupo WhatsApp
- **Saída:** `landing-workshop.html` em `04 - web design` (rascunho publicável)

### D4 — Criativos & guia para a Débora
- **[D]** 3–5 criativos iniciais (estáticos/carrossel) — ângulos: propósito + gancho NR-1
- **[B]** **Guia de conteúdo/criativos para a Débora**: hooks, corpo, CTAs, do/don't
- **Saída:** `guia-criativos-debora.md` + criativos em `03 - tráfego pago`

### D5 — Montagem da campanha
- **[A]** Estrutura no Meta: campanha → conjuntos (públicos a testar) → anúncios
- **[B]** Variações de copy de anúncio (3–5) casadas com os criativos
- **Saída:** campanha em rascunho + `copy-anuncios.md` em `03 - tráfego pago`

### D6 — Integração & QA
- Teste ponta a ponta: clique no anúncio → landing → checkout → grupo → confirmação
- Conferir pixel disparando, links, mobile, lotes/preços corretos
- **Saída:** checklist de QA preenchido; ajustes aplicados

### D7 — Go-live
- Aprovação final do Victor (e revisão da Débora no que for voz/conteúdo)
- **Publicar campanha** + ativar grupo WhatsApp
- **Saída:** campanha no ar; painel de acompanhamento definido

---

## Dependências e bloqueios

- Promessa do workshop e nome/identidade **(Débora)** travam copy e criativos → resolver D1
- Domínio/hospedagem e pagamento **(infra)** travam a página → resolver até D3
- Datas das turmas **(Débora)** travam o checkout → confirmar até D3

## Regras de segurança (CLAUDE.md §1.6)
- Nada vai ao ar sem **aprovação humana**: páginas, campanha, mensagens, orçamento.
- Tráfego: nunca subir/pausar/alterar verba sem o Victor confirmar.

## Saída esperada ao fim do sprint
```
Campanha: no ar / em revisão
Página: URL
Funil: anúncio → landing → checkout → grupo → workshop
Pendências: [se houver]
```
