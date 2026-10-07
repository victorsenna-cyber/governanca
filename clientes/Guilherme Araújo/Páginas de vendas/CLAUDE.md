# CLAUDE.md — Páginas de Vendas · Guilherme Araújo

## Projeto
Landing page de venda da Introdução à Cartomância Sistêmica.
Produto: curso online de R$97 para cartomantes, terapeutas e consteladores.
Checkout: https://checkout.pagtrust.com.br/ckd26cd640?funnel=fnedeb4f4d

---

## Arquivos neste diretório

- `index.html` — página de venda (arquivo único, arquitetura limpa)
- `ITERACOES_LP_CARTOMANCIA_SISTEMICA.md` — todas as iterações estruturais aprovadas
- `CLAUDE.md` — este arquivo

---

## Função da página

Página de venda única e exclusiva da Introdução à Cartomância Sistêmica (R$97).

**Não existe nenhum outro produto nesta página.**
- Sem menção à Formação Completa
- Sem vídeo de demonstração (VSL está em outra página, pós-compra)
- Sem links externos que tirem o visitante antes da compra
- Sem distrações — apenas condução emocional até a decisão

---

## Skill obrigatória

Usar o slash command `/ui-ux-pro-max` para toda criação e edição estética.
Esta skill possui 50+ estilos, 161 paletas de cor e 57 font pairings — usar antes de qualquer decisão visual.

Direção visual: **editorial luxury dark** — não vibe coded, não template.
Referência de qualidade: Awwwards SOTD, não Elementor.

---

## Direção estética obrigatória

### Tom visual
- Dark editorial premium — fundo escuro (quase preto, não preto puro)
- Tipografia serif italiana/editorial como display — não sans-serif genérica
- Paleta: escuro profundo + dourado/âmbar quente como acento único
- Grain overlay sutil para textura e profundidade
- Espaçamento generoso — respiração editorial
- Zero aparência de "vibe codado" ou template de WordPress

### Tipografia
- Display/headline: fonte serif com personalidade (ex: Playfair Display, Cormorant Garamond, DM Serif Display) — importar do Google Fonts
- Body: sans-serif refinada e legível (ex: DM Sans, Jost, Outfit)
- Nunca: Inter, Roboto, Arial, Open Sans

### Cor
- Background: #0D0B0A ou similar (escuro quente, não frio)
- Texto primário: #F5F0E8 (creme, não branco puro)
- Acento: #C9A96E ou similar (dourado âmbar)
- Nunca: gradiente roxo, azul elétrico, verde neon

### Motion
- Fade-in staggered no load (CSS animation-delay)
- Scroll reveal suave (Intersection Observer, sem biblioteca externa)
- Hover nos CTAs: transição de cor sutil + leve transform
- Nenhuma animação que distraia da leitura

### CTA
- Botão principal: sólido, acento dourado, texto escuro
- Botão secundário/scroll: outline ou ghost
- Nunca: sombra drop exagerada, gradiente no botão, borda radius excessivo

---

## Estrutura da página (ordem obrigatória)

```
1. HERO
   - Navbar minimalista: nome "Guilherme Araújo" à esquerda, CTA ghost à direita
   - Headline principal (serif grande)
   - Subheadline para quem é
   - CTA primário → scroll para oferta
   - Âncora discreta: "Acesso imediato · R$97 · Garantia de 7 dias"

2. IDENTIFICAÇÃO
   "Você já passou por algum desses momentos?"
   Lista em formato editorial (não bullet points genéricos)

3. NOMEAÇÃO DA DOR INVISÍVEL
   "Não é falta de dom. É falta de estrutura sistêmica."
   Citação em destaque: "A intuição não precisa de validação. Ela precisa de método."

4. MÓDULOS
   Âncora emocional antes da lista
   10 módulos em layout accordion ou grid elegante
   CTA intermediária entre módulo 05 e 06

5. DEPOIMENTOS
   3 depoimentos atuais com linha de resultado adicionada
   Layout editorial — não cards genéricos

6. QUEM ENSINA
   Guilherme Araújo — autoridade sem imposição
   Foto + credenciais

7. OFERTA
   Ancoragem de valor antes do preço
   R$97 — destaque tipográfico
   Bullets de entrega
   CTA principal → checkout
   Garantia 7 dias

8. FECHAMENTO
   Retomada da narrativa da hero
   CTA final

9. FAQ
   Accordion elegante
   Sem a pergunta sobre Formação Completa

10. RODAPÉ
    Mínimo: nome, links legais
```

---

## Regras de copy

- Toda copy já está definida — não inventar nem alterar conteúdo
- Seguir exatamente o arquivo ITERACOES_LP_CARTOMANCIA_SISTEMICA.md para os textos iterados
- CTAs conforme a iteração 3:
  - Hero scroll: "Ver o que está incluído"
  - Após dor: "Quero estruturar meu atendimento"
  - Oferta: "Acessar a Introdução agora"
  - Fechamento: "Começar agora"
  - Garantia: "Entrar com garantia de 7 dias"

---

## Regras técnicas

- Arquivo único: `index.html`
- Sem frameworks externos (sem Bootstrap, Tailwind, React)
- CSS inline no `<style>` ou em `<style>` separado dentro do mesmo arquivo
- JavaScript inline no `<script>` dentro do mesmo arquivo
- Google Fonts via `<link>` no `<head>`
- Sem jQuery — vanilla JS apenas
- Pixel Meta no `<head>`: ID 1259363302489132
- Google Tag Manager: GTM-5KFCDH6N
- Viewport responsivo — mobile first
- Todos os links de CTA apontam para: https://checkout.pagtrust.com.br/ckd26cd640?funnel=fnedeb4f4d

---

## O que NÃO fazer

- Não usar aparência de template Elementor/WordPress
- Não usar gradiente roxo ou azul
- Não usar Inter, Roboto ou fonts genéricas
- Não adicionar vídeo
- Não mencionar Formação Completa
- Não adicionar links externos no corpo da página
- Não criar múltiplos arquivos — tudo em index.html
- Não inventar copy — usar exatamente o que está definido
- Não usar bibliotecas de animação externas (GSAP, AOS, etc.)
