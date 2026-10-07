# CHECKPOINT DE LANÇAMENTO — Workshop "Carreira Alinhada"

Lista viva de ações. Marque `[x]` ao concluir. Atualizado: 30/06/2026.
Convenção: **(C)** = Continuum/Victor · **(D)** = Débora · **(CC)** = Claude Code.
Ver `SPRINT-WORKSHOP.md` (plano) · `OFERTA-CANONICA.md` (oferta) · `DECISOES.md` (log).

---

## Fase 0 — Fundação  ✅ concluída
- [x] (C) Corrigir PROJECT.md ao contrato v0.2
- [x] (C) Congelar oferta canônica (OFERTA-CANONICA.md)
- [x] (C) Estrutura de pastas (03/04/05/09)
- [x] (C) Skills debora-voice e funil-debora
- [x] (C) Docs essenciais: BRAND-BRIEF, ICP-LIDER, DECISOES
- [x] (C) Orientações Claude Code (design-system + web design)
- [x] (C) Perfil + Mapa de comunicação da Débora (PDF)

## Fase 1 — Copy  ✅ produzida, aguarda aprovação
- [x] (C) Copy da landing (copy-landing.md, v2 auditada na voz dela)
- [x] (C) Copy dos anúncios (copy-anuncios.md, 5 ângulos)
- [ ] (D) Escolher H1/promessa do hero (3 opções na copy)
- [ ] (D) Confirmar nome do workshop
- [ ] (D) Validar bio (seção "quem conduz") + gancho NR-1
- [ ] (D) Aprovar copy (SLA 3 dias úteis)

## Fase 2 — Acesso e infra técnica
- [ ] (C) **Login no Claude Code via terminal** (conta correta) ← AÇÃO ATUAL
- [ ] (C) Reenviar/confirmar acesso coproprietário ao Wix (convite expira em 29 dias)
- [ ] (C) Domínio + hospedagem (Wix) conferidos
- [ ] (C) Conta de anúncios Meta (BM, página, pagamento)
- [ ] (C) Google Cloud / API configurado (cartão do Victor)
- [ ] (C) PagTrust: confirmar order bump (curso eneagrama) separado

## Fase 3 — Design System  (Claude Code) ← FAZER ANTES DA LANDING
- [ ] (D) Enviar referências/cores do Slack (opcional; BRAND-BRIEF já tem direção)
- [ ] (C) Claude Design → "Create using Claude Code (BEST FIDELITY)" → conectar a pasta
- [ ] (CC) Rodar prompt `05 - design/design-system/PROMPT-CLAUDE-CODE-DESIGN-SYSTEM.md`
- [ ] (CC) Gerar tokens + componentes (a partir do BRAND-BRIEF)
- [ ] (CC) Recriar eneagrama em SVG (coordenadas validadas) + digital-labirinto
- [ ] (C) Revisar e aprovar tokens/styleguide

## Fase 4 — Landing + Checkout  (Claude Code) — ARQUITETURA: Next.js/Vercel
- [ ] (CC) Construir landing em **Next.js** (ui-ux-pro-max + design system + refs como código)
- [ ] (CC) Hero: H1 promessa (antes→depois) + H2 mecanismo único (falas literais da Débora)
- [ ] (CC) Seletor de turma na inscrição → checkout do lote/turma
- [ ] (C) Deploy na **Vercel** + integrar ao Wix por **subdomínio/URL** (iframe = plano B)
- [ ] (C) Plugar link PagTrust + redirect grupo WhatsApp por turma
- [ ] (D) Aprovar página (via URL de preview Vercel)

## Fase 5 — Criativos + Guia
- [ ] (CC/C) 3–5 criativos iniciais (Claude Design, sobre design system)
- [ ] (C) guia-criativos-debora.md (hooks, corpo, CTAs, do/don't)
- [ ] (D) Produzir criativos próprios a partir do guia

## Fase 6 — Tráfego + Tracking
- [ ] (C) Confirmar MCPs (Meta Ads, 21st.dev, PagTrust)
- [ ] (C) Pixel/CAPI + GTM/GA4 + eventos (PageView, InitiateCheckout, Purchase) + UTMs
- [ ] (C) Estrutura de campanha (campanha → conjuntos/públicos → anúncios) em rascunho
- [ ] (D) Confirmar verba de mídia mínima (≥90 dias contínuos — condiciona garantia)

## Fase 7 — QA + Go-live
- [ ] (C) Teste ponta a ponta: anúncio → landing → checkout → grupo → confirmação
- [ ] (C) Conferir pixel, mobile, lotes/preços, datas
- [ ] (D) Revisão final (voz/conteúdo)
- [ ] (C) **Aprovação do Victor** + publicar campanha
- [ ] (C) Ativar grupos de WhatsApp por turma
- [ ] (C) Painel de acompanhamento + scheduled diário ativo

---

## Gargalo (caminho crítico)
**Promessa + nome (Fase 1, Débora)** destrava copy final, página e criativos. Estratégia
acordada: construir a estrutura mesmo assim (a página "pede" a decisão e a torna concreta).

## Pendências de manutenção
- [ ] Apagar pasta `05 - design/_tmp_refs/` (rascunhos temporários)
- [ ] Salvar imagens do eneagrama em `05 - design/referencias-eneagrama/` (se quiser arquivar)
