# NOTAS — LP "A Primeira Jornada" (Degrau 1, R$47)

Arquivo único: `index.html`. Design system editorial dark reaproveitado de `../../Páginas de vendas`.
Copy fiel a `../07_COPY_PAGINAS.md` (seção A). Produto e preço travados: **A Primeira Jornada · R$47**.

## ⚠️ PLACEHOLDERS — preencher antes de publicar
1. **URL de checkout** — constante única `CHECKOUT_URL` no `<script>` (hoje:
   `https://CONFIGURAR-CHECKOUT-A-PRIMEIRA-JORNADA`). Trocar por 1 valor atualiza TODOS os CTAs.
   Precisa de checkout criado para este produto (não reaproveitar o da Cartomância).
2. **Order bump** — configurar no checkout (Roteiros & Templates +R$27, ver `../03_ESTEIRA_E_OFERTAS.md`).
3. **Upsell pós-compra** — "Constelador que Vende" (CV, R$397). Página/oferta a construir (Degrau 2).
4. **Pixel/GTM** — usa Pixel `1259363302489132` e `GTM-5KFCDH6N` do ecossistema. CONFIRMAR com Guilherme
   se quer pixel/conta de eventos próprios para esta esteira (eventos já vêm com content_name
   "A Primeira Jornada" e value 47, então não polui — mas confirmar).
5. **Links legais** (footer) — Política de Privacidade / Termos (href="#" hoje).

## Lições de performance/LPV aplicadas (da otimização da LP Cartomância)
- Arquivo **estático puro** — publicar FORA do WordPress/Elementor (não embutir em widget). Foi o que
  derrubava a LPV da outra LP. Servir como HTML estático (subpasta/subdomínio).
- **Headline (LCP) não inicia oculta** — só sub/CTA têm fade curto (escada termina ~0,28s).
- Fontes com `display=swap` + preconnect (texto renderiza imediato em fallback; não bloqueia LCP).
- Pixel inline cedo no `<head>`, sem depender do GTM.
- Sem frameworks/jQuery; vanilla JS.

## Acessibilidade
- Barra fixa (`#stickyBuy`): link recebe `tabindex="-1"` quando `aria-hidden` (corrige o achado do
  Lighthouse "descendentes focalizáveis dentro de aria-hidden").

## Prova social
- Sem depoimentos inventados (política). Prova = números do ecossistema (faixa de confiança) +
  autoridade do Guilherme + demonstração do método (3 movimentos). Coletar depoimentos reais de
  consteladores pós-entrega e adicionar uma seção depois (ver `../05_PROMESSA_E_ANGULOS.md`).

## Próximos degraus
- Checkout + order bump → Upsell CV (Degrau 2) → Downsell → Obrigado/onboarding (ver `../06_ARQUITETURA_FUNIL.md`).
