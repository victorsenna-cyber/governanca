# ANTI-AI-SLOP.md — Checklist para a Página de Vendas

> Objetivo: a landing precisa parecer **feita por estúdio premium**, não "gerada por IA".
> Amarrada à identidade da Débora (`BRAND-BRIEF.md`) e à qualidade técnica das
> `referências/`. Use como gate antes de entregar.

---

## A. O que EVITAR (cara de IA / slop)

| Anti-padrão | Por quê mata o premium |
|---|---|
| **Gradiente roxo/azul/violeta genérico** (o "AI purple/pink") | Assinatura nº 1 de página gerada por IA. A paleta é musgo/areia/petróleo/dourado — terrosa, não neon. |
| **Glow neon, shadow saturada, "vibrant gradient"** | Conflita com o tom sóbrio/terroso. Brilho só no dourado, fino. |
| **Ícones lucide/3D soltos** sem propósito (um por feature, decorativos) | Vira "template de curso". Usar geometria fina da marca, numeração editorial, ou nada. |
| **Glassmorphism gratuito** (cards de vidro borrado por toda parte) | Efeito sem função. Profundidade só onde há hierarquia (ex.: card de oferta). |
| **Espaçamento uniforme, tudo centralizado** | Ritmo morto. Falta hierarquia → cara de gerador. |
| **Hero centralizado clichê** (título centro + subtítulo + 2 botões coloridos) | É o layout default de IA. Preferir composição assimétrica editorial. |
| **Emojis** como ícone ou no texto | Proibido pela marca (anti-infantil) e pela voz. |
| **Stock-AI / render brilhante / pessoas genéricas sorrindo** | Use a identidade real da Débora (fingerprint, geometria, foto real dela). |
| **Texto vago / hype** ("transforme sua vida", "destrave", "resultado garantido") | Quebra a voz da Débora e a confiança do líder. |
| **Contador regressivo falso / escassez fabricada** | A escassez é **real** (lotes, ~20 vagas, datas de agosto). Nunca inventar urgência. |
| **Fontes arredondadas/fofas, script, muitos pesos** | Marca pede sans sóbria, caixa-alta com tracking largo nos títulos. |
| **Bullets e negrito por todo lado** em texto de leitura | A voz pede leitura corrida; formatar com parcimônia. |
| **Dourado como grande área chapada** | Dourado é o brilho, não a base. Só linha/acento/CTA refinado. |

---

## B. O que FAZER (premium de estúdio)

| Princípio | Como aplicar | Ref. de técnica |
|---|---|---|
| **Grid intencional, composição assimétrica calma** | Layout editorial; quebrar a simetria de template; muito respiro (areia domina). | Cinematic Hero |
| **Hierarquia tipográfica forte** | Título caixa-alta + tracking largo (petróleo), corpo legível com entrelinha generosa, escala clara H1→H3→corpo. | BRAND-BRIEF tipografia |
| **Dourado disciplinado como acento raro** | Linhas finas, fingerprint, sublinhado de palavra-chave, borda do CTA. Nunca preencher áreas. | BRAND-BRIEF paleta |
| **Micro-interações sutis** | Reveal suave no scroll (IntersectionObserver), hover com transição 150–300ms, parallax leve do mouse no hero (desktop). Tudo respeitando `prefers-reduced-motion`. | Cinematic Hero, Agents Plan |
| **Profundidade material onde há hierarquia** | Card de oferta com sombra física/realista (não glass genérico), botão tátil com estados hover/active. | Cinematic Hero (`premium-depth-card`, `btn-modern-*`) |
| **Fundo vivo mas discreto** | Gradiente animado lento em canvas/CSS nas cores da Débora + grain sutil (alpha ~10–15). Atmosfera, não espetáculo. | Shader Background, Noise effect |
| **Geometria sagrada como detalhe fino** | Icosaedro/sólidos platônicos em linha fina dourada, fingerprint-labirinto, folha/onda com parcimônia. Detalhe, nunca enchimento. | BRAND-BRIEF elementos |
| **Fotografia/identidade real da Débora** | Foto dela na seção "quem conduz"; assinatura visual coerente. | 05 - design |
| **Copy específica e de discernimento** | Frases do `ICP-LIDER.md` ("Você lidera bem os outros. E a si mesmo?", "Padrão, não destino"). Reconhecimento, não promessa. | debora-voice |
| **Escassez real e transparente** | Mostrar lote vigente, vagas e datas verdadeiras. Honestidade reforça o premium. | OFERTA-CANONICA |

---

## C. Gate final (passar antes de entregar)

- [ ] Zero gradiente roxo/azul/neon; paleta = musgo/areia/petróleo/dourado.
- [ ] Dourado aparece só como acento fino (linhas/fingerprint/CTA), nunca área chapada.
- [ ] Nenhum emoji; nenhum ícone decorativo sem propósito.
- [ ] Hero não é o clichê centralizado; composição tem hierarquia e respiro.
- [ ] Tipografia: título caixa-alta + tracking largo; corpo legível; escala clara.
- [ ] Animações sutis; `prefers-reduced-motion` desliga parallax e grain animado.
- [ ] Profundidade/sombra só onde há hierarquia (card de oferta, CTA) — sem glass solto.
- [ ] Fundo vivo discreto (canvas/CSS) em tom da paleta + grain sutil.
- [ ] Copy passa no teste da `debora-voice` (sem hype/promessa absoluta/NR-1 no centro).
- [ ] Escassez é real (lotes/vagas/datas), sem contador falso.
- [ ] Contraste AA, foco visível, teclado no seletor de turma e no FAQ.
- [ ] Responsivo 375/768/1024/1440; mobile impecável (hero + seletor de turma).

## Regra de pontuação (HARD RULE)
**Zero travessões (— / –) em qualquer texto da página/criativo/anúncio.** Sinal claro de "AI slop". Trocar por vírgula, ponto, dois-pontos ou parênteses. Hífen de palavra composta (bem-estar) é permitido. Validar com busca por travessão antes de entregar qualquer copy.
