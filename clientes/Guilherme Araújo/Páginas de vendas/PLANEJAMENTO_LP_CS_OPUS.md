# PLANEJAMENTO ESTRATÉGICO — LP INTRODUÇÃO À CARTOMÂNCIA SISTÊMICA
**Documento gerado em:** 2026-05-30
**Autor:** Opus 4.8 — arquitetura de LP low ticket escalável
**Status:** Planejamento. Nenhuma linha de código foi tocada.
**Produto:** Introdução à Cartomância Sistêmica · R$97 · acesso imediato
**Funil:** TOFU Meta Ads (Reels, frio, mobile) → LP → Checkout PagTrust → Upsell (outra página)
**Pixel ativo:** PageView, ViewContent, InitiateCheckout, AddPaymentInfo, Purchase
**Execução:** Opus 4.8 (estratégia E execução). A produção não é delegada a Sonnet — o padrão de acabamento exigido (Awwwards SOTD, não Elementor) exige julgamento estético na própria execução, não só no planejamento.

---

## TESE CENTRAL DO REPLANEJAMENTO

A versão atual é uma **LP de condução emocional de ticket alto** vestida com preço de ticket baixo.

Ela presume que o visitante vai ler do topo ao fim, absorver um arco de 8 estágios emocionais e só então decidir. Isso é correto para um produto de R$2.000 que exige justificativa interna. É **errado** para R$97 vindo de tráfego frio de Reels — onde a decisão acontece em segundos, no celular, com a paciência já consumida pelo vídeo que trouxe a pessoa até aqui.

O princípio que orienta este documento:

> **Em low ticket, a função da página não é convencer. É remover o atrito entre a intenção que o anúncio já criou e o clique de compra.**

O anúncio fez o pré-aquecimento. A LP não precisa repetir o trabalho do anúncio — precisa **confirmar, dar segurança e abrir o caminho mais curto possível para o checkout**, mantendo profundidade disponível para quem precisa, sem obrigá-la a ninguém.

**A correção NÃO é abrir mão do premium.** O instinto preguiçoso seria: "para converter em low ticket, deixa a página mais agressiva, mais barata, mais template". Isso é errado para este público. Cartomante/terapeuta/consteladora associa **barato visual a desconfiança** — uma LP que parece feita no Elementor mata a percepção de valor do método antes do preço aparecer. Aqui o premium **é** uma ferramenta de conversão, não um luxo concorrente dela.

Por isso o trade-off real não é "premium × conversão". É **"premium contemplativo lento × premium funcional rápido"**. A versão atual é premium contemplativo (silêncio editorial que pressupõe leitura demorada). O alvo é **premium funcional**: mesma sofisticação de tipografia, cor, grão e espaçamento — mas servindo a decisão rápida em vez de atrasá-la. Cada elemento de conversão adicionado (sticky bar, faixa de confiança, módulos expostos) é executado em padrão Awwwards, nunca como plugin utilitário. A seção 6 especifica como.

---

## 1. DIAGNÓSTICO DA VERSÃO ATUAL

### 1.1 O que está CORRETO e deve ser mantido

| Elemento | Por que mantém |
|---|---|
| Identidade visual (dark editorial, Cormorant + Jost, dourado âmbar) | Diferenciação real. Não parece template. Constrói confiança por sofisticação — relevante para um público que associa "barato" a "desconfiável". |
| Headline da hero ("Você lê cartas com profundidade. Mas ainda não tem um método que sustente isso.") | Identificação cirúrgica. É o melhor ativo da página. Não tocar. |
| Reframe "Não é falta de dom. É falta de estrutura sistêmica." | Remove a objeção de merecimento antes que ela se forme. Condução impecável. |
| Citação em destaque ("A intuição não precisa de validação. Ela precisa de método.") | Síntese memorável. Mantém. |
| Ancoragem R$250–R$500 por sessão vs R$97 | Faz o preço parecer inevitável. Apenas precisa aparecer **mais cedo**. |
| Linguagem da garantia ("sem perguntas, sem burocracia") | Reversão de risco correta. |
| Depoimentos com linha de resultado | Fecham arco. Só precisam encurtar para o ritmo low ticket. |
| Infra de tracking (Pixel + GTM no head, ViewContent disparando) | Base correta. Falta completar (ver 1.3). |
| Foco absoluto em um produto, sem links externos no corpo | Decisão estratégica certa. Preservar com rigor. |

### 1.2 O que está ERRADO para o objetivo de low ticket escalável

**E1 — A hero ocupa 100svh e não dá caminho de compra.**
No mobile (origem real do tráfego), a primeira tela é só headline + um botão que **rola a página** (`#oferta`) em vez de levar ao checkout. O decisor rápido — que o Reel já aqueceu — não tem onde comprar no topo. Ele precisa atravessar identificação + 4 parágrafos de dor + 10 módulos + depoimentos + autor antes de a oferta existir. Isso é arquitetura de ticket alto.
*Comportamento que isso causa:* abandono de quem já estava pronto, por excesso de fricção antes da primeira oportunidade de decisão.

**E2 — Os 10 módulos em accordion fechado.**
Dez itens é muito para R$97 — é densidade de currículo de formação, não de introdução. Pior: estão **colapsados**, exigindo 10 cliques para revelar o valor. Ninguém clica em 10 accordions. O visitante ou ignora (e não percebe valor) ou entra em modo analítico (e trava). Accordion fechado é lógica de "esconder a extensão para não assustar" — mas aqui a extensão É o valor, e esconder reduz a percepção dele.
*Comportamento que isso causa:* leitura em modo avaliação, fadiga de scroll, perda de impulso no meio da lista.

**E3 — Nenhum CTA persistente (sticky bar).**
Em low ticket mobile, a barra fixa de compra é o item de maior impacto de conversão que existe. A página não tem nenhum. Pior: a nav atual **se esconde ao rolar para baixo** (linhas 1481–1495), removendo o único caminho persistente para o checkout exatamente quando o visitante está descendo em direção à decisão.
*Comportamento que isso causa:* quando a vontade de comprar surge no meio da página, não há botão à mão; o impulso esfria antes do próximo CTA.

**E4 — O CTA da hero rola em vez de converter.**
"Ver o que está incluído" → `#oferta`. Para quem veio frio e curioso, faz sentido. Mas não há **nenhuma** alternativa de compra direta no topo para o decisor rápido. Em low ticket, hero deve servir os dois: o curioso (rola) E o pronto (compra). Hoje serve só o curioso.

**E5 — Arco emocional longo demais para o ticket.**
Identificação (4 momentos) + Dor (4 parágrafos) entregam um pré-venda de produto caro. Para R$97, isso é mais persuasão do que a decisão exige — e cada bloco extra antes da primeira chance de compra é uma chance de saída.

**E6 — Tracking incompleto.**
Só PageView + ViewContent disparam. **InitiateCheckout não está instrumentado** em nenhum dos ~7 CTAs. Sem isso é impossível medir qual bloco converte, calcular taxa LP→checkout, ou otimizar criativo por intenção. Buraco crítico de medição para uma operação que vai escalar em tráfego pago.

**E7 — Números de autoridade enterrados.**
"+800 alunos" e "+12 anos" só aparecem na seção do autor, lá embaixo. Em low ticket, prova agregada (números) é validador rápido e barato — deveria aparecer no topo, perto da primeira decisão.

### 1.3 O que está AUSENTE

- **Barra de compra fixa (sticky)** — desktop e mobile.
- **Oferta/preço ao alcance no topo** (visível ou a um clique de compra real).
- **Evento InitiateCheckout** em todos os CTAs (+ dataLayer push para o GTM).
- **Versão escaneável dos módulos** que não exija expandir accordion para ver valor.
- **Faixa de confiança no topo** (números: 800 alunos · 12 anos · garantia 7 dias).
- **Microcopy de reversão de risco junto ao primeiro CTA** (não só na oferta lá embaixo).

---

## 2. PRINCÍPIOS DE LP LOW TICKET ESCALÁVEL (aplicados a esta página)

### Velocidade de decisão
R$97 está na **zona de impulso qualificado**: abaixo do limiar em que o cérebro exige justificativa elaborada, acima do limiar de "compro sem pensar". A decisão-alvo acontece em **30 a 90 segundos**, em 1 a 2 telas de mobile.
**Como a página serve isso:** caminho de compra disponível desde a primeira tela (CTA direto ao checkout + preço visível); profundidade (módulos, autor, FAQ) existe *abaixo* para quem precisa de mais segurança, nunca *antes* da primeira chance de decidir.

### Fricção
**O que REDUZ fricção neste contexto:** sticky bar permanente; preço fora do botão mas visível ao lado; módulos escaneáveis sem clique; um único destino para todo CTA (o mesmo checkout); ausência total de links externos (já garantida); nav que **não some**.
**O que AUMENTA fricção (evitar):** accordion obrigatório para ver valor; hero que só rola; arco de leitura longo antes do primeiro CTA de compra; preço dentro do botão (ativa resistência do público a "comprar"); qualquer segundo destino (formulário, vídeo, outro produto).

### Arquitetura de scroll — onde o visitante deve estar emocionalmente
| Tela (mobile) | Bloco | Estado emocional alvo |
|---|---|---|
| 1 | Hero + faixa de confiança | "Isso é pra mim. E é acessível." (reconhecimento + segurança imediata) |
| 1–2 | Sticky bar aparece | "O caminho está sempre aqui." (segurança contínua) |
| 2 | Identificação (condensada) | "Ele descreveu exatamente o que eu vivo." (ressonância) |
| 3 | Reframe da dor | "Então não sou eu que falho — é estrutura que falta." (alívio + reposicionamento) |
| 4 | O que você recebe (módulos escaneáveis) | "É muito mais do que R$97 deveria entregar." (percepção de valor desproporcional) |
| 5 | Prova social + números | "Gente como eu fez e funcionou." (validação) |
| 5–6 | Quem ensina | "A fonte é legítima." (autoridade) |
| 6 | Oferta + garantia | "O risco é zero. Por que eu não faria isso?" (decisão) |
| 7 | Fechamento | "É o próximo passo natural." (resolução) |

### Densidade de informação
**Pouco demais:** esconder os 10 módulos atrás de cliques (valor invisível = não comprado).
**Muito demais:** 10 itens detalhados, cada um com parágrafo, todos abertos (sobrecarga, modo analítico).
**Equilíbrio certo:** agrupar os 10 módulos em **3 blocos/fases temáticas** (ex.: "A base sistêmica" · "A leitura em movimento" · "A prática do atendimento"), cada bloco listando seus módulos como linhas curtas e escaneáveis (título + uma linha), **visíveis por padrão**, sem accordion. O visitante percebe a extensão (= valor) em uma varredura de 4 segundos, sem clicar.

### Frequência de CTA
**Quantos:** caminho de compra a cada ~1,5 tela, mais o sticky permanente.
**Onde:** nav (persistente), hero, após o reframe da dor, dentro dos módulos, na oferta, na oferta/garantia, no fechamento + sticky bar.
**Linguagem progressiva (do frio ao decidido):**
1. Hero (curioso): *"Ver o que está incluído"* (rola) **+** *"Acessar agora"* (compra direta — sticky/nav)
2. Após dor (identidade): *"Quero estruturar meu atendimento"*
3. Módulos (impulso): *"Quero acessar as 10 aulas"*
4. Oferta (ação): *"Acessar a Introdução agora"*
5. Garantia (segurança): *"Entrar com garantia de 7 dias"*
6. Fechamento (decisão): *"Começar agora"*
7. Sticky (sempre): *"Acessar · R$97"*
**Regra:** nunca "Comprar". Preço fora do botão (exceto no sticky, onde o preço ancora a decisão final num espaço pequeno).

### Prova social — qual formato converte em low ticket
Em ticket alto, o depoimento longo e narrativo constrói confiança. Em **low ticket o que converte é prova rápida e escaneável**:
- **Número agregado no topo:** "+800 alunos · +12 anos" como faixa de confiança (validação instantânea, custo cognitivo zero).
- **Depoimento curto:** 1–2 frases + nome + cargo + cidade + a linha de resultado. Os 3 atuais funcionam — apenas **encurtar o corpo** (hoje têm 3 frases; reduzir para 2) para caber na varredura.
- Nome real + cargo + cidade > depoimento anônimo longo. Já está correto.
Formato vencedor aqui: **número grande no topo + 3 micro-depoimentos com rosto de credibilidade (nome/cargo/cidade)**.

### Ancoragem de preço — como tornar R$97 inevitável
A linha "R$250–R$500 por sessão vs R$97" é a âncora certa. Ajustes:
1. **Antecipar uma versão curta dela** para perto do topo (faixa ou subtítulo da hero): a pessoa precisa ter a referência de valor *antes* de cogitar o preço.
2. Na oferta, manter a âncora completa **imediatamente acima** do número, nunca abaixo.
3. Apresentar como matemática trivial: *"Menos do que uma única sessão. Pelo método que sustenta todas as próximas."*
4. Reforçar "pagamento único · acesso imediato" colado ao preço (remove a dúvida de recorrência/cobrança escondida — atrito clássico de low ticket).

### Garantia — posicionamento e linguagem
A garantia é o **removedor do último risco** e em low ticket ela é barata de oferecer e cara de omitir.
- **Posicionamento:** não só na caixa de oferta. Uma menção curta junto ao **primeiro CTA** (microcopy: *"7 dias de garantia. O risco é meu."*) e a versão completa na oferta.
- **Linguagem ideal:** transferir o risco explicitamente para o vendedor. "Você tem 7 dias. Se não fizer sentido, devolvo tudo — sem perguntas." Manter o tom atual, apenas trazê-la para mais perto da primeira decisão.

---

## 3. ARQUITETURA DE PERSUASÃO — BLOCO A BLOCO

> Para cada bloco: **Função emocional** (o que sentir ao terminar) · **Função racional** (o que compreender) · **Transição** (o que puxa para o próximo) · **Comprimento ideal** e por quê.

### B1 — HERO
- **Emocional:** "Isso é exatamente sobre mim — e está ao meu alcance."
- **Racional:** o que é (método de leitura sistêmica), para quem (cartomante/terapeuta/consteladora), quanto (R$97, acesso imediato, garantia).
- **Transição:** a faixa de confiança (números) + o gradiente inferior puxam o olho para baixo; o CTA "ver o que está incluído" oferece a rolagem; o CTA/sticky de compra atende quem já decidiu.
- **Comprimento:** **curto**. Headline + subheadline de uma linha + faixa de confiança + 1–2 CTAs. Reduzir a altura de 100svh para ~80svh para que a faixa de confiança e o início do próximo bloco apareçam (prova de que há mais, convite a rolar). *Por quê:* tela cheia sem nada além do título sinaliza "página longa de leitura" e não dá referência de valor/preço cedo.

### B2 — FAIXA DE CONFIANÇA (novo, integrado à hero ou logo abaixo)
- **Emocional:** "Tem lastro. Não é amador."
- **Racional:** +800 alunos · +12 anos · garantia de 7 dias.
- **Transição:** ancora segurança e libera o visitante para ler a identificação sem desconfiança de fundo.
- **Comprimento:** **mínimo** — uma linha horizontal de 3 itens. *Por quê:* validação de custo cognitivo zero antes do esforço de leitura.

### B3 — IDENTIFICAÇÃO
- **Emocional:** "Ele está descrevendo a minha sessão de ontem."
- **Racional:** os sintomas concretos (cliente sem palavras, atendimento do zero, oscilação por estado interno).
- **Transição:** o acúmulo de "sim, sim, sim" cria a pergunta implícita "por que isso acontece?" — respondida no próximo bloco.
- **Comprimento:** **médio, reduzido de 4 para 3 momentos.** *Por quê:* 3 já saturam o reconhecimento; o 4º ("cobra menos do que entrega") flerta com a promessa financeira que o CLAUDE.md restringe e alonga o pré-venda. Cortar acelera a chegada à decisão.

### B4 — NOMEAÇÃO DA DOR / REFRAME
- **Emocional:** "Não é falha minha. É uma peça que falta." (alívio + dignidade)
- **Racional:** percepção sem estrutura não se comunica nem se repete; o teto não é espiritual, é metodológico.
- **Transição:** a citação em destaque sela o reframe e o CTA ghost dá a primeira saída de identidade ("estruturar meu atendimento").
- **Comprimento:** **médio, reduzido de 4 para 3 parágrafos.** *Por quê:* o 4º parágrafo é reforço, não argumento novo. Em low ticket, reforço redundante custa impulso.

### B5 — O QUE VOCÊ RECEBE (módulos reformatados)
- **Emocional:** "Por R$97 eu recebo um sistema inteiro — isso é desproporcional a favor."
- **Racional:** o escopo completo das 10 aulas, agrupado em 3 fases legíveis.
- **Transição:** a percepção de valor desproporcional torna o preço (próximo bloco/oferta) um alívio, não um obstáculo; CTA intermediário captura quem já decidiu.
- **Comprimento:** **médio.** Escaneável, não expansível. *Por quê:* o valor precisa ser *visto*, não *desbloqueado*. Agrupar em 3 reduz a carga dos 10 itens soltos.

### B6 — PROVA SOCIAL
- **Emocional:** "Pessoas como eu fizeram e mudou o atendimento delas."
- **Racional:** resultados concretos e rastreáveis (a linha de resultado de cada depoimento).
- **Transição:** validação social baixa a guarda para a autoridade do criador a seguir.
- **Comprimento:** **curto.** 3 micro-depoimentos (2 frases + resultado). *Por quê:* prova em low ticket é confirmação rápida, não estudo de caso.

### B7 — QUEM ENSINA
- **Emocional:** "A fonte é legítima e original."
- **Racional:** método próprio, 12 anos, 800 alunos, formações.
- **Transição:** autoridade fecha as últimas dúvidas de "isso vale o método?" e entrega o visitante pronto para a oferta.
- **Comprimento:** **curto-médio.** *Por quê:* autoridade já foi antecipada na faixa de confiança; aqui basta confirmar com rosto + bio enxuta. Cortar 1 dos 2 parágrafos de bio.

### B8 — OFERTA
- **Emocional:** "O risco é zero e o valor é óbvio. Decisão fácil."
- **Racional:** o que está incluído, preço único, garantia, acesso imediato.
- **Transição:** a decisão se forma aqui; o fechamento apenas a sela emocionalmente.
- **Comprimento:** **médio.** Âncora (1 linha) + preço + bullets (5) + garantia + 1 CTA primário + 1 CTA garantia. *Por quê:* é o bloco onde densidade é justificada — toda a informação de compra concentrada num só lugar.

### B9 — FECHAMENTO
- **Emocional:** "É o próximo passo natural do que eu já sou."
- **Racional:** reafirma que não é começar do zero — é estruturar o que já existe.
- **Transição:** entrega ao CTA final / FAQ para quem ainda tem uma última dúvida.
- **Comprimento:** **curto.** *Por quê:* eco da hero, não novo argumento.

### B10 — FAQ
- **Emocional:** "Minha última objeção foi respondida com honestidade."
- **Racional:** acesso, baralho, experiência prévia, escopo ético, garantia.
- **Transição:** remove o último freio; sticky bar capta a conversão final.
- **Comprimento:** **médio.** 5–6 perguntas. *Por quê:* objeções residuais; quem chega aqui está perto e precisa de fechamento, não de leitura.

---

## 4. ESTRUTURA FINAL DA PÁGINA (ordem exata)

| # | Seção | Função | Comprimento | CTA | Texto do CTA | Tipo |
|---|---|---|---|---|---|---|
| — | **Nav (fixa, não some)** | Caminho persistente | Mínimo | **Sim** | "Acessar agora" | Inline/link dourado → checkout |
| 1 | **Hero** | Identificação + acesso | Curto (~80svh) | **Sim ×2** | "Ver o que está incluído" (rola) · "Acessar agora" (compra) | Primário (rola) + secundário ghost (checkout) |
| 2 | **Faixa de confiança** | Validação instantânea | Mínimo | Não | — | — |
| 3 | **Identificação** | Ressonância | Médio (3 momentos) | Não | — | — |
| 4 | **Nomeação da dor / reframe** | Alívio + reposicionamento | Médio (3 parágrafos) | **Sim** | "Quero estruturar meu atendimento" | Ghost → checkout |
| 5 | **O que você recebe (módulos em 3 blocos)** | Percepção de valor | Médio | **Sim** | "Quero acessar as 10 aulas →" | Primário → checkout |
| 6 | **Prova social** | Validação | Curto | Não | — | — |
| 7 | **Quem ensina** | Autoridade | Curto-médio | Não | — | — |
| 8 | **Oferta** | Decisão | Médio | **Sim ×2** | "Acessar a Introdução agora" · "Entrar com garantia de 7 dias" | Primário sólido + ghost → checkout |
| 9 | **Fechamento** | Resolução | Curto | **Sim** | "Começar agora" | Primário → checkout |
| 10 | **FAQ** | Remoção de objeção | Médio (5–6) | Não | — | — |
| 11 | **Footer** | Legal | Mínimo | Não | — | — |
| — | **Sticky buy bar (mobile + desktop)** | Conversão permanente | Mínimo | **Sim** | "Acessar · R$97" | Primário fixo → checkout |

**Total: 11 seções visíveis + nav + sticky bar.**

---

## 5. DIREÇÃO DE COPY (por bloco)

> Regra-mãe do CLAUDE.md: **não inventar nem alterar a copy aprovada.** A copy do `index.html` e das iterações é a base. Esta seção define **headline/tom/palavras a usar e evitar** para os blocos novos ou reformatados — sem reescrever o que já está validado.

### Hero (manter)
- **Headline:** "Você lê cartas com profundidade. Mas ainda não tem um método que sustente isso." *(não tocar)*
- **Tom:** narrativo-identificador.
- **Usar:** "método", "estrutura", "o que você percebe", "o que o cliente recebe".
- **Evitar:** "você está perdida", "você não consegue", qualquer afirmação direta sobre falha do leitor (regra de copy do CLAUDE.md).

### Faixa de confiança (novo)
- **Conteúdo:** "+800 alunos formados · +12 anos de prática · 7 dias de garantia". *(números já existentes na seção autor — apenas reposicionados, não inventados)*
- **Tom:** factual, seco.
- **Usar:** números, "garantia".
- **Evitar:** adjetivos ("incrível", "revolucionário"), promessa.

### Identificação (reduzir para 3)
- **Tom:** descritivo-empático.
- **Manter os 3 momentos mais fortes** (cliente sem palavras / atendimento do zero / oscilação por estado interno). Cortar o 4º ("cobra menos do que entrega").
- **Evitar:** o ângulo financeiro direto, que abre flanco para promessa de faturamento.

### Reframe da dor (reduzir para 3 parágrafos)
- **Headline:** "Não é falta de dom. É falta de estrutura sistêmica." *(não tocar)*
- **Tom:** reposicionador, digno.
- **Usar:** "estrutura", "método", "se repete de sessão para sessão", "não é espiritual, é metodológico".
- **Evitar:** "merecimento", "bloqueio", "trauma" como afirmação sobre o leitor.

### Módulos reformatados (3 blocos) — **maior trabalho de copy estrutural**
- **Título da seção (manter):** "10 aulas. Um método completo." + âncora emocional já existente.
- **Tom:** mapa de transformação, não índice.
- **Agrupamento sugerido (títulos novos, conteúdo dos módulos inalterado):**
  - **Bloco 1 — A base sistêmica** (módulos 00–03)
  - **Bloco 2 — A leitura em movimento** (módulos 04–07)
  - **Bloco 3 — A prática do atendimento** (módulos 08–09)
- **Formato:** cada módulo = título + a `modulo-sub` de uma linha já existente, visível sem clique.
- **Usar:** os subtítulos e descrições já escritos no HTML.
- **Evitar:** inventar novos benefícios ou prometer domínio garantido.

### Prova social (encurtar corpo)
- **Tom:** depoimento real, voz preservada.
- **Ação:** reduzir cada depoimento de 3 para 2 frases, **mantendo a linha de resultado** (já aprovada). Não alterar nomes, cargos, cidades.
- **Evitar:** adicionar resultado financeiro.

### Quem ensina (cortar 1 parágrafo)
- **Tom:** autoridade sem imposição.
- **Manter** credenciais e 1 parágrafo de bio (o que define o método como original).
- **Evitar:** superlativos de marketing.

### Oferta (antecipar âncora)
- **Tom:** direto, seguro.
- **Usar:** "pagamento único", "acesso imediato", "menos do que uma única sessão".
- **Evitar:** "promoção", "últimas vagas" (urgência artificial proibida pelo CLAUDE.md), preço dentro do botão principal.

### Sticky bar (novo)
- **Conteúdo:** "Introdução à Cartomância Sistêmica — R$97" + botão "Acessar".
- **Tom:** mínimo, funcional.
- **Evitar:** qualquer texto longo; é utilitário.

---

## 6. DECISÕES DE DESIGN ESTRUTURAL (decisão, não execução)

### Fundo escuro vs. ligeiramente mais claro (ritmo visual)
Manter o sistema atual de alternância `--bg` / `--bg-soft`, que já cria respiração. Decisão: **a oferta (B8) deve ter o maior contraste de profundidade** (caixa `--bg-card` sobre `--bg`) para sinalizar "aqui é o momento". A faixa de confiança usa fundo levemente mais claro para se destacar como bloco-validador rápido.

### Largura total vs. contida
- **Contida (`--max` 1100px / colunas estreitas):** todo texto de leitura (identificação, dor, módulos, FAQ) — linha de leitura curta acelera escaneabilidade.
- **Largura total:** apenas a **faixa de confiança** e a **sticky bar**, que devem cruzar a tela inteira para ler como "ambiente", não como "conteúdo".

### Tipografia grande vs. pequena
- **Grande (serif display):** headline da hero, reframe da dor, preço R$97. São os 3 picos de atenção — devem dominar visualmente.
- **Pequena/contida:** módulos (lista escaneável), FAQ, bullets da oferta. *Por quê:* densidade de informação exige fonte menor e mais densa para caber na varredura; reservar o tamanho grande para os momentos de decisão evita inflar o tempo de leitura.

### CTA: sólido vs. ghost vs. inline
- **Sólido dourado:** todo CTA de **compra direta de alto impulso** — hero (secundário de compra), módulos, oferta, fechamento, sticky. É o botão que "fecha".
- **Ghost:** CTAs de **identidade/baixo compromisso** — após a dor ("estruturar meu atendimento") e a garantia. Sinalizam passo, não pressão.
- **Inline (link dourado):** nav. Discreto mas sempre presente.
- **Decisão de conflito:** o CTA primário da hero ("ver o que está incluído") permanece sólido mesmo rolando, mas ganha um **par de compra direta** (ghost ou via sticky/nav) para servir o decisor rápido.

### Separadores visuais vs. fluxo contínuo
- **Separadores (linha dourada / borda):** entre blocos de função distinta (identificação → dor → módulos → prova). Ajudam o olho a perceber "novo argumento" e mantêm orientação no scroll.
- **Fluxo contínuo (sem separador):** dentro do reframe da dor (os 3 parágrafos devem ler como um pensamento só) e dentro de cada bloco de módulos.

### 6.1 Execução premium dos elementos de conversão (o que separa Awwwards de Elementor)

Cada adição de conversão tem uma versão "vibe codada" (proibida) e uma versão premium (obrigatória). Especificação por elemento:

**Sticky buy bar**
- ❌ Vibe codado: barra sólida full-width colada no rodapé, retângulo dourado gritante, texto grande, aparece de cara.
- ✅ Premium: barra com `backdrop-filter: blur` sobre fundo `rgba(13,11,10,0.7)`, **hairline dourada de 1px** no topo (não borda grossa), tipografia pequena (`--sans` 0.8rem), aparece só **depois de sair do hero** com transição `transform: translateY` + `opacity` em `cubic-bezier(0.4, 0, 0.2, 1)`. No **desktop**, considerar uma **pílula flutuante** discreta (canto inferior) em vez de barra cheia — menos intrusiva, mais editorial. Preço em creme, botão em dourado sólido compacto. Some suavemente quando a seção de oferta entra no viewport (não competir com o CTA principal).

**Faixa de confiança (números no topo)**
- ❌ Vibe codado: três caixas com ícones genéricos, bordas, fundo cinza, "badges" de plugin.
- ✅ Premium: linha horizontal única, **sem caixas**, três itens separados por divisor vertical hairline (`·` ou linha de 1px com opacidade 0.2). Números em `--serif` (Cormorant) com leve destaque dourado; rótulos em `--sans` minúsculo, `letter-spacing` largo, `text-transform: uppercase`, opacidade 0.6. Lê como rodapé de revista, não como selo de checkout.

**Módulos expostos em 3 blocos**
- ❌ Vibe codado: 10 cards iguais em grid, sombras, ícones, "saiba mais" — vira catálogo de e-commerce.
- ✅ Premium: três **movimentos** editoriais, cada um introduzido por um número grande em serif (`01 · A base sistêmica`) e uma linha de respiro. Dentro de cada movimento, os módulos são **linhas separadas por hairline** (reaproveitando o padrão `.modulo-item` atual, mas **sem o accordion fechado** — subtítulo visível por padrão). Número do módulo em dourado pequeno, nome em serif, descrição de uma linha em creme-dim. Zero cards, zero sombras, zero ícones decorativos. A extensão é percebida pela varredura vertical elegante, não por um grid pesado.
- *Acabamento opcional de alto nível:* hover na linha do módulo revela a descrição completa com transição de altura suave — mantém o minimalismo do estado de repouso e dá profundidade a quem interage, sem exigir clique.

**CTAs**
- ❌ Vibe codado: sombra drop forte, gradiente, border-radius alto, hover que "pula".
- ✅ Premium: manter o sistema atual (sólido dourado / ghost), `border-radius: 2px`, **transição de cor + `translateY(-1px)` sutil**. Adicionar refinamento: transição em `cubic-bezier` (não `ease` linear) e, opcionalmente, um leve deslocamento da seta `→` no hover do CTA dos módulos. Nada que distraia.

**Ritmo e microdetalhe (aplicar em toda a página)**
- **Escala tipográfica dramática:** o contraste entre headline serif gigante e corpo sans pequeno é o que cria a sensação editorial. Não achatar para "tudo médio".
- **Numeração de seção** discreta (`01 — Reconhecimento`, `02 — ...`) reforça a leitura de revista premium e ajuda orientação no scroll.
- **Hairlines em vez de bordas:** 1px com opacidade baixa (`--line` já faz isso) — preservar.
- **Grão + vinheta sutil:** o grain overlay atual fica. Considerar uma vinheta radial muito leve nas bordas para profundidade.
- **`prefers-reduced-motion`:** respeitar — acabamento premium inclui acessibilidade, não só estética.

### 6.2 Por que premium não é decoração aqui (justificativa de conversão)

O público desta página tem uma crença ativa sobre dinheiro e valor (documentada no CLAUDE.md do projeto). Uma página que parece cara comunica, antes de qualquer palavra: *"o método por trás disso também é sério"*. Isso **reduz a objeção de preço sem custo de copy** e sustenta o R$97 como "barato para o nível", não "barato porque é raso". Premium, neste contexto, é argumento de venda silencioso — por isso não se sacrifica.

---

## 7. HIPÓTESES DE CONVERSÃO (a testar pós-lançamento)

### H1 — Sticky buy bar aumenta a taxa LP→checkout
- **O que testar:** página com sticky bar permanente vs. sem (controle = versão atual sem sticky).
- **Por que:** o impulso de compra em low ticket surge em pontos imprevisíveis do scroll; sem caminho à mão, ele esfria. Hipótese: a barra captura intenções que hoje se perdem entre um CTA e outro.
- **Como medir:** taxa de **InitiateCheckout / PageView** nas duas versões; segmentar por device (efeito esperado maior no mobile). Rodar 14 dias ou até significância (mínimo ~100 InitiateCheckout por variante).

### H2 — Módulos escaneáveis (3 blocos abertos) convertem mais que accordion fechado
- **O que testar:** seção de módulos em 3 blocos visíveis vs. 10 accordions fechados (atual).
- **Por que:** o valor precisa ser percebido sem clique. Hipótese: tornar o escopo visível aumenta a percepção de valor desproporcional e a taxa de clique no CTA intermediário.
- **Como medir:** clique no CTA dentro/após a seção de módulos (evento dedicado no GTM por posição de CTA) + scroll depth até a oferta + InitiateCheckout. 14 dias.

### H3 — Preço/âncora visível no topo acelera a decisão
- **O que testar:** hero com âncora de valor curta + preço na faixa (variante) vs. hero atual com preço só na âncora discreta.
- **Por que:** dar a referência de valor antes do preço torna R$97 "barato por comparação" desde o início; hipótese: reduz abandono no topo e aumenta a chegada à oferta com a decisão já encaminhada.
- **Como medir:** scroll depth (% que chega à oferta), tempo até primeiro InitiateCheckout, taxa de conversão geral. Como o tráfego é frio de TOFU, segmentar por criativo de origem (UTM) para isolar efeito da página do efeito do anúncio. 14 dias.

> **Pré-requisito para todas as hipóteses:** instrumentar **InitiateCheckout** em cada CTA com `content_name`, `value: 97`, `currency: 'BRL'` e um identificador de posição (ex.: `cta_position: 'hero' | 'dor' | 'modulos' | 'oferta' | 'fechamento' | 'sticky'`) via dataLayer. Sem isso, nenhum teste é mensurável.

---

## SUMÁRIO EXECUTIVO

**Quantas seções a página terá:** 11 seções visíveis + nav fixa + sticky buy bar (vs. 9 seções atuais sem sticky). Acréscimos líquidos: faixa de confiança e sticky bar. Reduções de tamanho: identificação (4→3), dor (4→3 parágrafos), módulos (accordion → 3 blocos escaneáveis), depoimentos (3→2 frases), bio do autor (2→1 parágrafo).

**Quantos CTAs e onde:** 8 pontos de contato de compra — nav (persistente), hero (2: rolar + comprar), reframe da dor (ghost), módulos (primário), oferta (primário + garantia), fechamento (primário) e sticky bar (permanente). Todos apontam para o mesmo checkout PagTrust. Todos devem disparar InitiateCheckout com identificador de posição.

**A maior mudança em relação à versão atual:** **tornar a decisão de compra disponível cedo e permanente** — em vez de gated atrás de um arco emocional longo de ticket alto. Isso se materializa em três movimentos combinados: (1) sticky buy bar + nav que não some, (2) oferta/preço ao alcance desde o topo, (3) módulos visíveis em vez de escondidos em accordion. A página deixa de "convencer do zero" e passa a "confirmar e abrir caminho", que é a função correta de uma LP de R$97 alimentada por tráfego frio.

**Conflito resolvido (não é trade-off de soma zero):** o ajuste **não** sacrifica o premium pela conversão. Reduzir a hero, expor os módulos e adicionar a sticky bar são executados em padrão Awwwards — sticky com blur e hairline (ou pílula flutuante no desktop), módulos como movimentos editoriais sem cards, faixa de confiança que lê como rodapé de revista. O eixo real é **premium contemplativo lento → premium funcional rápido**: mesma sofisticação, agora a serviço da decisão em vez de atrasá-la. Premium, para este público, é argumento de venda silencioso — por isso se eleva, não se corta. Especificação completa na seção 6.1.

**O que o Opus 4.8 deve executar PRIMEIRO após aprovação (ordem por impacto/risco):**
1. **Instrumentar InitiateCheckout** em todos os CTAs via dataLayer (com `cta_position`). — Baixo risco, desbloqueia toda medição. **Pré-requisito de tudo.**
2. **Adicionar sticky buy bar premium** (blur + hairline / pílula no desktop) e **fazer a nav parar de se esconder** ao rolar. — Maior impacto de conversão, baixo risco.
3. **Surfacing da oferta no topo:** reduzir hero para ~80svh + faixa de confiança (números como rodapé editorial) + âncora de valor curta. — Alto impacto no topo do funil.
4. **Reformatar módulos** de accordion fechado para 3 movimentos editoriais escaneáveis. — Médio risco (mexe em estrutura/JS), alto impacto na percepção de valor.
5. **Enxugar copy** (identificação 3, dor 3, depoimentos 2 frases, bio 1 parágrafo) — sem inventar nada, apenas cortar. — Baixo risco.
6. **Passe de acabamento premium** (seção 6.1): numeração de seção, escala tipográfica dramática, easing em cubic-bezier, vinheta sutil, `prefers-reduced-motion`. — Último, sobre a estrutura já estável.

> Execução em Opus 4.8 do início ao fim. O padrão de acabamento exigido (não vibe codado) depende de julgamento estético contínuo na própria escrita do código — por isso a produção **não** é delegada a um modelo de execução em massa. Antes de qualquer decisão visual, passar pela skill `/ui-ux-pro-max` (CLAUDE.md). Nenhuma alteração no `index.html` antes da aprovação deste planejamento.
