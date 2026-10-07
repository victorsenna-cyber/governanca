# Prompt para o Claude Code (Fable 5) — Landing V3 (reinvenção premium)

> Claude Code aberto no terminal, na pasta `04 - web design`, com **Fable 5**.
> Objetivo: uma V3 muito melhor, com liberdade criativa real. Cole o bloco entre ===.

===

Você vai criar uma **nova versão (V3)** da landing do Workshop "Carreira Alinhada" da
Débora. Não é refinar a anterior: é **reinventar** a execução visual e a experiência,
mirando uma página que pareça feita por um estúdio de design de primeira linha. Você tem
Fable 5 e liberdade criativa. Use-a.

## Passo 0 — Pasta nova, nada de alterar o que existe
- Crie uma pasta nova `./landing-v3/` (projeto Next.js + TypeScript + Tailwind).
- NÃO altere `./landing/`, `./landing-v2/` (se existir), nem nenhum arquivo `.md` desta
  pasta. Eles são referência e leitura. Você só escreve dentro de `./landing-v3/`.
- Pode reaproveitar tokens/ideias do design system, mas está LIVRE para evoluí-los.

## Leia para entender a ALMA (não para copiar layout)
1. `./copy-landing.md` — a copy e a estrutura de mensagem. O HERO manda: H1 = promessa de
   plenitude ("Lidere com tudo o que você é."), subhead reconhece que o líder já é bom.
2. `../01 - contexto/ICP-LIDER.md` — o ICP JÁ lidera bem; a promessa é do bom ao pleno,
   nunca tratar como quebrado.
3. `../07 - skills/debora-voice/SKILL.md` — a voz (discernimento, sem hype, sem travessão).
4. `../05 - design/design-system/BRAND-BRIEF.md` — paleta terrosa, Fraunces+Inter, espírito
   premium. Use como PONTO DE PARTIDA, não como gaiola.
5. `../03 - tráfego pago/OFERTA-CANONICA.md` — oferta, lotes por data.

## O que é INVIOLÁVEL (a alma, não muda)
- **Voz da Débora:** sóbria, sofisticada, discernimento, sem hype, sem promessa absoluta.
- **Promessa de plenitude:** ICP competente que busca inteireza/congruência. Nada de dor acusatória.
- **Conteúdo da copy:** use a mensagem de `copy-landing.md` (pode reorganizar a experiência,
  não inventar promessa/oferta nova).
- **Paleta terrosa e clima:** verde-sálvia, areia, petróleo, dourado, terracota. Claro,
  terroso, premium, adulto. Fundo claro (pode explorar profundidade, gradiente, luz).
- **Tipografia editorial:** serifada de display (Fraunces ou melhor equivalente) + sans limpa.
- **Zero travessões** (— / –). **Contraste AA.** **Anti-AI-slop.**
- **Eneagrama** como geometria do método (recriar em SVG, coordenadas no BRAND-BRIEF),
  monocromático. **Digital-labirinto** como marca.

## O que é LIVRE (reinvente)
- **Layout e composição:** não precisa seguir as referências antigas em `./referências/`
  nem o layout da V1. Proponha a melhor experiência.
- **Sistema de animação e movimento:** scroll storytelling, transições, revelação, parallax,
  micro-interações, o que servir à narrativa. Com bom gosto e performance.
- **Tratamento visual:** profundidade, luz, textura, grid, glass, o botão (liquid-glass ou
  algo melhor). Surpreenda, desde que permaneça sóbrio e terroso (não vire "tech dark").
- **Ritmo das seções, hierarquia, escala tipográfica dramática, uso do espaço.**
- **A metáfora visual condutora:** você pode ancorar a página numa ideia (o labirinto até o
  centro, o padrão que se revela, a onda/frequência, o mapa). Escolha uma e leve com coerência.

## Princípios de página premium (norte, não checklist)
- **Tensão serena** move o leitor: reconhecimento → o que custa continuar → o caminho →
  prova → escassez real (lotes por data) → convite. Sem pressão fabricada.
- **Menos, porém perfeito:** espaço em branco generoso, cada elemento com propósito.
- **Editorial, não "template de curso".** O "wow" vem da elegância e da tipografia, não do excesso.
- **Mobile-first**, rápido, acessível, `prefers-reduced-motion` respeitado.

## Placeholders (não inventar)
{{NOME_FINAL}}, {{LINK_CHECKOUT_PAGTRUST}}, {{DATAS_TURMAS}}, {{DATAS_VIRADA_LOTE}},
{{LINK_GRUPO_WHATSAPP}}, {{BIO_DEBORA}}, {{CREDENCIAIS_DEBORA}}, {{PRECO_ORDER_BUMP}},
{{NOME_MECANISMO}}.

## Entrega
1. Antes de codar, me apresente em até 8 linhas a **direção criativa da V3**: a metáfora
   condutora, o clima, como o hero se comporta, e 2-3 momentos de destaque da experiência.
   Espere meu OK.
2. Construa em `./landing-v3/`. `npm run build` sem erro.
3. Checagem: zero travessões, AA, voz/promessa corretas, placeholders.
4. Deploy na Vercel (`vercel` para preview; me passe a URL antes de `--prod`).
5. Reporte em até 6 linhas o que fez e a URL.

Comece pela direção criativa (passo 1). Não construa antes do meu OK.

===

## Notas para o Victor (fora do prompt)
- V3 é uma exploração paralela (não apaga a V1 nem a V2). Depois você compara e escolhe.
- Fable 5 tende a ir mais longe no visual; por isso pedi a direção criativa em 8 linhas
  ANTES de construir, para você aprovar o conceito e não gastar à toa.
- Quando ele mandar a direção criativa, me repassa que eu ajudo a avaliar antes do "vai".
- Guardrails mantidos: voz, promessa de plenitude, terroso, zero travessões, anti-slop.
  A liberdade é na execução visual, não na alma da marca.
