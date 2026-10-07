# Prompt para o Claude Code — Design System (Carreira Alinhada / Débora)

> ORDEM: rode ISTO antes da landing. A página consome os tokens deste design system.
>
> Como usar:
> 1. No Claude Design, escolha **"Create using Claude Code (BEST FIDELITY)"** e siga o
>    comando que ele mostrar para conectar esta pasta (`05 - design/design-system`).
> 2. Abra o terminal nesta pasta, logado na conta correta do Claude Code.
> 3. Rode `claude` e cole o bloco entre as linhas ===.

===

Você vai criar o **design system** da marca da Débora Delgado (workshop "Carreira
Alinhada") usando a skill **ui-ux-pro-max**. O objetivo é um sistema de componentes
React limpo, com tokens, que o Claude Design vai importar com alta fidelidade, e que a
landing page reutilizará depois. Leia todo o contexto antes de codar.

## Contexto obrigatório (leia primeiro)
1. `./BRAND-BRIEF.md` — paleta, tipografia, elementos gráficos, tom, do/don't, e a
   especificação completa do **eneagrama com coordenadas validadas** e da
   **digital-labirinto**. Esta é a fonte da verdade visual.
2. `./PROJECT.md` — o que o design system precisa entregar.
3. `./SCOPE.md` — limites do escopo.
4. `./CLAUDE.md` — regras de operação nesta pasta.
5. `../MAPA-COMUNICACAO-DEBORA.md` e `../../07 - skills/debora-voice/SKILL.md` — o tom
   da marca (sóbrio, premium, anti-infantil), caso precise nomear/descrever componentes.

## Paleta (do BRAND-BRIEF — NÃO inventar)
- Verde-sálvia/musgo `#7A9E89` (cor-assinatura, superfícies)
- Areia/off-white `#F1EDE4` (fundo dominante)
- Petróleo escuro `#2E3D45` (texto/títulos)
- Dourado `#B89B72` e terracota `#C08552` (acento, parcimônia)
Refine variações (hover, claro/escuro) e garanta contraste WCAG AA. Areia domina,
musgo estrutura, petróleo dá o texto, dourado pontua. Dourado nunca em grande área.

## O que entregar (tokens + componentes)
1. **Tokens** (design-tokens): cores (com escala/estados), tipografia (família, pesos,
   escala modular, tracking dos títulos em caixa-alta), espaçamento, raios, sombras
   sutis. Exportáveis (CSS variables + JSON).
2. **Tipografia**: títulos sans-serif caixa-alta com tracking largo (sóbria, editorial);
   corpo legível com entrelinha generosa. Escolha um par de fontes premium coerente
   (web-safe ou Google Fonts) e documente a escolha.
3. **Componentes base**: Botão/CTA (primário dourado refinado, secundário), Card,
   Seção/Container, bloco de Oferta/Lote, item de FAQ, Depoimento, Selo/miniatura
   (datas, ao vivo, no Zoom), navegação simples. Estados (hover/focus) e variações.
4. **Elementos gráficos como componentes SVG**:
   - **Eneagrama**: recriar do zero em SVG, monocromático (dourado ou petróleo),
     usando as COORDENADAS VALIDADAS do BRAND-BRIEF (9 no topo, triângulo 3-6-9, hexade
     1-4-2-8-5-7, 9 nós). Recolorível por token. NÃO usar as 9 cores dos tipos.
   - **Digital-labirinto** (marca primária): símbolo de impressão digital que sugere um
     labirinto/caminho ao centro, em traço dourado fino.
   - Geometria sagrada de apoio (linha fina) e textura orgânica (folha/onda) com muita parcimônia.
5. **Styleguide**: uma página que mostra tokens, tipografia, componentes e os SVGs
   aplicados, para revisão visual.

## Regras inegociáveis
- **Zero travessões** (— / –) em qualquer texto/rótulo. Use vírgula, ponto, dois-pontos
  ou parênteses.
- Tom **sóbrio, premium, anti-infantil, anti-AI-slop**: sem gradientes neon, sem emojis
  na arte, sem ícones 3D brilhantes, sem glow, sem simetria de template.
- Dourado é acento raro, não base. Muito respiro, composições calmas.
- Componentes sem dependências pesadas; pensados para depois virarem HTML/CSS vanilla
  embutível no Wix (a landing será autocontida).

## Passo a passo
1. Leia o contexto e me apresente, em até 6 linhas: a escolha de fontes, a estrutura de
   tokens e a lista de componentes que vai criar.
2. Após meu ok, gere tokens, componentes e os SVGs (eneagrama + digital-labirinto).
3. Monte o styleguide e rode uma checagem: contraste AA, zero travessões, eneagrama
   conferido contra as coordenadas do BRAND-BRIEF.
4. Garanta que o sistema está pronto para o Claude Design importar (BEST FIDELITY) e
   para a landing reutilizar os tokens.

===

## Notas para o Victor (fora do prompt)
- Faça login na conta correta antes de rodar `claude`.
- O Claude Design ("Create using Claude Code") deve gerar o comando que conecta esta
  pasta ao Design. Rode esse comando primeiro; depois cole o prompt acima.
- Quando terminar, traga o styleguide aqui que eu confiro contra o BRAND-BRIEF e o
  anti-AI-slop antes de partirmos para a landing.
- Sequência: **1) design system (aqui) → 2) landing** (prompt em `../../04 - web design/PROMPT-CLAUDE-CODE-LANDING.md`).
