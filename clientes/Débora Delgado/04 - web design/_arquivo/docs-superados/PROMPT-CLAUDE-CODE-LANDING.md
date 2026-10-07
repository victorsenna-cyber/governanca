# Prompt para o Claude Code — Landing do Workshop (Next.js na Vercel)

> ARQUITETURA ATUALIZADA (30/06): a landing NÃO é mais HTML único para Wix. Vai ser um
> **projeto Next.js deployado na Vercel**, integrado ao Wix por **subdomínio/URL** (ex.:
> `carreira.dominiodadebora.com`) ou, em último caso, iframe. Isso destrava React real,
> o design system em componentes e as referências premium como código.
>
> Pré-requisito: o **design system** já deve estar pronto (mesma conta, pasta
> `../05 - design/design-system`). A landing consome os tokens/componentes dele.
>
> Como usar: terminal na pasta `04 - web design` (ou numa subpasta `landing/`), conta
> certa, `claude`, cole o bloco ===.

===

Você vai construir a landing de vendas do Workshop "Carreira Alinhada" da Débora como um
**projeto Next.js (App Router) para deploy na Vercel**, usando a skill **ui-ux-pro-max** e
a skill de copy. Leia todo o contexto antes de codar.

## Contexto obrigatório (leia primeiro)
1. `./PROJECT.md` — objetivo, ICP, estrutura das seções.
2. `./copy-landing.md` — a copy aprovada. **O HERO é o mais importante:** H1 = promessa
   (antes → depois) + H2 = mecanismo único, ambos das falas literais da Débora. Use as
   opções marcadas; não invente promessa nova.
3. `./ANTI-AI-SLOP.md` — o que evitar. REGRA DURA: zero travessões.
4. `./REFERENCIAS-MAP.md` e `./referências/` — referências premium. Agora que é React,
   pode usar as ÚTEIS como componentes de verdade (não só inspiração):
   **Cinematic Hero (GSAP), Shader Background, Dynamic Waveform, Noise** — recoloridos
   para a paleta da Débora, com muita contenção. IGNORE as de chat/SaaS (AI Chat, Bolt
   Chat, Agents Plan): não têm relação com landing.
5. `../05 - design/design-system/` — CONSUMA os tokens e componentes já criados
   (design-tokens, botão liquid-glass, cards, eneagrama, digital-labirinto). Não recriar.
6. `../05 - design/design-system/BRAND-BRIEF.md` — paleta, tipografia (Fraunces+Inter),
   camada premium (fundo blueprint claro, grid, botão liquid-glass, minimalismo).
7. `../01 - contexto/ICP-LIDER.md` — público (líder) e dores.
8. `../07 - skills/debora-voice/SKILL.md` — voz (não reescreva a copy; respeite o tom).

## Stack e entrega
- **Next.js (App Router) + TypeScript + Tailwind**, pronto para deploy na Vercel.
- Reutilizar o design system (tokens + componentes). Se ele estiver noutro pacote/pasta,
  importar ou copiar os tokens/componentes necessários, mantendo coerência total.
- Animações reais: GSAP/ScrollTrigger para reveal on scroll; shader/waveform só em UM
  ponto-âncora, monocromático e lento; noise/grão como textura sutil global.
- Responsivo, mobile-first, acessível (contraste AA), performático (lazy-load do que é pesado).

## Identidade (do BRAND-BRIEF, não inventar)
- Paleta terrosa: sálvia #7A9E89, areia #F1EDE4, petróleo #2E3D45, dourado #B89B72,
  terracota #C08552. Fundo "blueprint claro" (quase-branco quente + gradiente sutil + grid).
- Tipografia: **Fraunces** (títulos, serifada editorial) + **Inter** (corpo).
- Botão **liquid-glass** (grafite/chumbo com vidro, highlight especular, borda dourada fina).
- Eneagrama (coordenadas validadas no BRAND-BRIEF) só na seção do método. Digital-labirinto
  como marca. Minimalismo premium: muito respiro, hairlines douradas, numeração de seção elegante.
- Tom: sóbrio, premium, terroso, editorial. Anti-infantil, anti-AI-slop. O "wow" vem da
  elegância calma (tipografia + espaço + eneagrama), não do excesso de movimento.

## Estrutura das seções (seguir PROJECT.md e copy-landing.md)
Hero (H1 promessa antes→depois + H2 mecanismo + 4 miniaturas: agosto, 2h/encontro, ao
vivo, no Zoom) → reconhecimento da dor (abre com a cena "imagina a reunião...") → os 3
dias do método (com o eneagrama; nomes dos dias da Débora) → para quem é → quem conduz →
oferta em lotes → o que vem depois (mentoria) → FAQ → CTA final.

## Oferta / lotes (ATENÇÃO, mudou)
Lotes viram **por DATA**, não por vagas nem entregável: mais distante do workshop = R$ 97;
mais próximo = R$ 257 (ver `../03 - tráfego pago/OFERTA-CANONICA.md`). Todos entregam o
mesmo workshop; muda só o preço por antecipação. Datas de virada = placeholder.

## Placeholders (não inventar; usar variáveis de ambiente ou constantes marcadas)
{{NOME_FINAL}}, {{LINK_CHECKOUT_PAGTRUST}} por lote, {{DATAS_TURMAS}}, {{DATAS_VIRADA_LOTE}},
{{LINK_GRUPO_WHATSAPP}} por turma, {{BIO_DEBORA}}, {{PRECO_ORDER_BUMP}}, {{NOME_MECANISMO}}
(o método, a nomear).

## Regras inegociáveis
- **Zero travessões** (— / –). Validar por busca antes de finalizar.
- Não escrever copy de venda nova: usar `copy-landing.md`. Microcopy funcional pode, na voz dela.
- Contraste AA. Sem localStorage para dados sensíveis.
- Preparar para tracking (Pixel/CAPI, GA4, GTM, UTMs) via componentes/script no layout,
  mas sem chaves reais (placeholders).
- Seletor de turma na inscrição leva ao checkout da turma escolhida (placeholder por ora).

## Entregáveis
1. Projeto Next.js rodável localmente e deployável na Vercel (`README.md` com passos de deploy).
2. Um `VERCEL-WIX-DEPLOY.md`: como deployar na Vercel e integrar no Wix por subdomínio/URL
   (preferido) ou iframe; onde entram Pixel/CAPI; lista de placeholders a preencher.
3. Checagem final: zero travessões, AA, build sem erro, e todos os {{placeholders}} listados.

Comece lendo o contexto e me apresentando, em até 6 linhas: o plano de seções, quais
referências (das úteis) vai usar em cada ponto, e como vai consumir o design system. Só
depois construa.

===

## Notas para o Victor (fora do prompt)
- Confirme que o design system está pronto antes de rodar isto (a landing depende dele).
- Faça login na conta certa.
- Deploy: crie o projeto na Vercel (grátis), conecte o repositório, e depois aponte um
  subdomínio do domínio Wix para a Vercel (registro CNAME). Iframe é plano B.
- Quando ele terminar, traga a URL de preview da Vercel que eu reviso a página inteira
  (copy, voz, anti-AI-slop, premium) antes de publicar.
