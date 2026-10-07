# TASKS — Refino da Landing V2 (Codex)

> Origem: auditoria da V1 (copy, design, tensão). Estas são **alterações endurecidas**,
> priorizadas por impacto. Não é sugestão: é o que fazer. Voz: `debora-voice`. Regra
> dura: **zero travessões** (— / –). Tudo claro/terroso, premium, anti-AI-slop.
> Trabalhar numa **CÓPIA** (ver PROMPT-CODEX), sem alterar os arquivos de contexto/copy
> originais.

---

## P0 — HERO: H1 = PROMESSA DE PLENITUDE (o ponto mais crítico)
**Insight de posicionamento:** o ICP já lidera bem. NÃO tratar como quebrado/perdido. A
H1 anterior ("Você lidera todo mundo, menos você") era dor/estado atual e soava
acusatória. A promessa é ir **do bom ao pleno** (completar, não consertar): o líder
competente que sente que falta o "tchan" (inteireza, congruência, potência plena).

- **H1 = promessa de plenitude (aspiracional, curta, reconhece que ele já é bom).** Usar A:
  - **A (recomendada):** `Lidere com tudo o que você é.`
  - B (antes → depois): `Do bom líder ao líder inteiro.`
  - C (reconhece explícito): `Você já lidera bem. Que tal liderar inteiro?`
- **Subhead = reconhece competência + promessa + mecanismo:**
  `Você já lidera bem. Falta liderar sem se trair, na sua melhor versão. Em três dias,
  você reconhece o padrão que ainda te segura, solta o que te impede de agir e volta
  inteiro, com um plano que é seu.`
- Manter as 4 miniaturas (agosto, 2h/encontro, ao vivo, no Zoom) e o CTA.
- Efeito: promessa aspiracional que instiga ("como assim tudo o que sou?") sem ofender
  quem já é competente. H1 curta resolve o problema visual das 3 linhas em Fraunces.

---

## P1 — TENSÃO (maior alavanca de conversão; hoje a página é serena demais)
A página é bonita mas "sã demais": falta a corrente que move o leitor ao CTA. Tensão
serena (não hype), na voz da Débora. Adicionar/ajustar:

### 1.1 Intensificar a dor (seção de reconhecimento)
Deixar a dor "doer" mais antes de resolver. Menos educada, mais crua (como a fala dela).
Adicionar 1-2 frases de custo emocional real, ex.:
> "Você entrega, entrega, e volta pra casa sem sobrar nada de você. Vira automático:
> mais uma meta, mais um ciclo, e a sensação de que você foi ficando pra trás de si mesmo."

### 1.2 Novo bloco: "O que custa continuar assim" (custo da inação)
Inserir antes da oferta. Tensão nasce do contraste ganho × perda. Na voz dela:
> **O custo de adiar isso não aparece na agenda.**
> Ele aparece quando você percebe que passou mais um ano liderando no piloto automático,
> gerando resultado por fora e se apagando por dentro. Desalinhamento não estoura: ele
> corrói devagar. Quanto mais tempo no automático, mais fundo o padrão se enraíza.

### 1.3 Prova / autoridade (hoje só um depoimento pálido)
Adicionar um bloco de credibilidade da Débora, **sem inventar números**. Usar
`{{CREDENCIAIS_DEBORA}}` como placeholder e sugerir estrutura:
> Engenheira de formação, anos em liderança e cultura organizacional, com certificações
> em cultura e método próprio que une eneagrama, Desenho Humano e transformação de padrões.
Reforçar o depoimento (deixar mais legível, ver P2). Se houver mais depoimentos: usar 2-3.

### 1.4 Escassez real por DATA (alavanca que a página não usa)
Como os lotes viram por data, transformar isso em tensão legítima (não falsa urgência):
> **O preço acompanha o calendário, não o estoque.** Quanto mais perto do workshop, mais
> alto o lote. Hoje está no {{LOTE_ATUAL}}. A próxima virada é em {{DATA_VIRADA}}.
Mostrar visualmente qual lote está ativo e quando vira.

### 1.5 Fechar o loop no CTA final
O CTA final deve retomar o antes → depois do hero, dando sensação de jornada completa:
> Você abriu esta página liderando todo mundo, menos você. Pode fechar diferente.
> Reconheça o seu padrão, e volte a liderar a partir de quem você é.

---

## P2 — DESIGN (subir de "bom" para "premium minimalista")
- **Botão liquid-glass de verdade:** hoje lê como retângulo grafite chapado. Adicionar
  o **highlight especular** (linha de luz curva no topo, via pseudo-elemento), **borda
  dourada fina** e sombra em camadas. É o detalhe que mais falta. Hover: specular desliza.
- **Eneagrama no hero:** hoje está solto e quase invisível no canto. Ou trazer como marca
  d'água atrás do título (bem sutil, intencional), ou remover. Não deixar "resíduo".
- **Equilíbrio do vazio à direita:** seções 2/3/4 têm texto à esquerda e vazio grande à
  direita. Adicionar âncora visual (numeral grande em Fraunces, hairline dourada, ou o
  eneagrama) para a assimetria virar intencional, não acidental.
- **Cards da oferta (sobre musgo):** rechecar contraste AA do texto claro sobre musgo;
  deixar evidente o **lote vigente AGORA** (o ativo por data, ex.: "lote atual") com
  elevação/borda dourada. **Não usar "mais escolhido" / "mais popular":** os lotes viram
  por TEMPO, não por escolha/estoque. Os outros lotes aparecem como "já encerrado" (o
  anterior) e "próximo, a partir de {{DATA_VIRADA}}" (o seguinte).
- **Depoimento:** hoje pálido demais, quase some. Dar mais presença (borda, aspas em
  Fraunces grande, leve elevação).

---

## P3 — COPY (ajustes finos)
- H1 encurtada (ver P0). Remover repetição de "desejo genuíno" (aparecia em H1 + H2).
- **Variar os CTAs** (hoje "Quero minha vaga" repete 3x): hero `Quero minha vaga` · meio
  `Garantir minha vaga` · final `Começar por mim`.
- Revisar viúvas/órfãs nos parágrafos; eyebrows com tracking consistente.

---

## Checagem final (rodar antes de entregar)
- [ ] Zero travessões (buscar — e –).
- [ ] Contraste AA em todos os textos sobre cor (inclusive cards no musgo e botão).
- [ ] H1 nova aplicada; CTAs variados; sem repetição de "desejo genuíno".
- [ ] Blocos de tensão adicionados (custo da inação, prova, escassez por data, loop no CTA).
- [ ] Botão liquid-glass com specular + borda dourada.
- [ ] Placeholders {{...}} para o que não é definido (nada inventado).
- [ ] Build sem erro; responsivo; `prefers-reduced-motion` respeitado.
