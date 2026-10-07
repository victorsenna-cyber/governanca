# Prompt para Claude Code — Artefato HTML de Apresentação (Débora)

> STATUS: SUPERADO · one-shot de junho já executado (apresentação do plano) · NÃO USAR como fonte — contém nome/entregáveis mortos (Carreira Alinhada, roadmap reverso, Ikigai/EFT no Dia 2). Histórico.

Cole o bloco abaixo no Claude Code. Ele gera **um único arquivo HTML autocontido**
para apresentarmos o plano de lançamento à Débora.

---

## PROMPT

Você é designer de produto da Continuum AI Systems. Crie **um único arquivo HTML
autocontido** (`apresentacao-lancamento-debora.html`) para apresentar à Débora Delgado
o plano de lançamento do Workshop "Carreira Alinhada" e da primeira campanha de tráfego.

### Regras técnicas (obrigatórias)
- **Um arquivo só.** HTML + CSS + JS inline. **Zero dependências externas** (sem CDN,
  sem fontes externas, sem imagens externas — use SVG/CSS para ícones e formas).
- Compatível com WordPress/Wix (sem build, sem frameworks).
- **Dark mode + light mode** com toggle persistente na sessão (sem localStorage —
  use variável em memória/JS).
- Responsivo (mobile-first), navegação por âncoras/seções, transições suaves.
- Estética premium, sóbria e sofisticada — não "dashboard de projeto", e sim
  **infraestrutura de pensamento**. Cards, matrizes e tabelas como instrumentos.

### Voz e posicionamento (ler com atenção)
- Tom: claro, sofisticado, humano, estratégico. Verbos de **discernimento**
  (interpretar, reconhecer, orientar, preservar coerência) — **nunca** tom de task
  manager, sprint, status, owner, entregável.
- A apresentação fala COM a Débora, mostrando que a Continuum conduz a construção.
- **NR-1 = gancho/narrativa secundária**, nunca o centro.
- Princípios > crenças: vendemos transformação de consciência (perpétua).

### Conteúdo (seções do artefato)
1. **Capa** — "Carreira Alinhada · Plano de Lançamento" + subtítulo de uma linha sobre
   alinhamento antes de crescimento. Selo discreto "Estruturado por Continuum AI Systems".
2. **A visão** — workshop de 3 dias como porta de entrada de um funil de consciência
   (workshop → mentoria em grupo → individual). 3 cards curtos.
3. **O Workshop (3 dias)** — três cards:
   - Dia 1 "Quem sou eu quando estou no meu melhor" (eneagrama, talentos, Desenho Humano, dupla)
   - Dia 2 "O que me afasta de mim" (Ikigai, crenças, Mapa do Bloqueio, EFT ao vivo)
   - Dia 3 "O plano" (visualização 6 meses, roadmap reverso, metas com neurociência)
4. **A oferta** — tabela/escada: lotes por turma **R$ 97 → R$ 197 → R$ 257**,
   mentoria em grupo **R$ 4.000 / 3 meses** (vendida dentro do workshop), individual
   (3–4 vagas, processo seletivo, cashback), order bump (curso de eneagrama).
   Turmas de ~20 pessoas (escassez real). Formatos a testar (semana/fim de semana/noite).
5. **O funil** — diagrama em CSS/SVG: Anúncio → Página de vendas → Checkout →
   Grupo WhatsApp → Workshop → Mentoria. Sem libs externas.
6. **A campanha (7 dias)** — linha do tempo D1→D7 enxuta (uma frase por dia),
   destacando: contas/pixel, página, copy, criativos, guia para a Débora, go-live.
7. **O que precisamos da Débora** — lista curta e respeitosa: nome + identidade visual,
   promessa final, datas das turmas, depoimentos. (Sem linguagem de cobrança.)
8. **Fechamento** — frase de confiança no projeto + próximo marco (terça).

### Dados canônicos (use exatamente)
- Preços: R$ 97 (10 primeiras vagas) → R$ 197 → R$ 257, por turma.
- Mentoria em grupo: R$ 4.000, 3 meses, vendida no workshop.
- Individual: 3–4 vagas, processo seletivo + cashback.
- Turma: ~20 pessoas. Workshop: 3 dias, ~2h/dia.

### Saída
- Apenas o arquivo `apresentacao-lancamento-debora.html`.
- Rodapé discreto: "Débora Delgado · Carreira Alinhada · Estruturado por Continuum AI Systems".
- Ao final, responda só com: arquivo criado + resumo (até 5 linhas) + pendências.
```
