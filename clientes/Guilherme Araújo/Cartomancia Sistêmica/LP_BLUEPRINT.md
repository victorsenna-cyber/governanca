# LP_BLUEPRINT.md
Versão: 1.0 | Criado: 2026-05-24
Produto: Introdução à Cartomância Sistêmica
Checkout: checkout.pagtrust.com.br/ckd26cd640?funnel=fnedeb4f4d
VSL: youtube.com/embed/eKRW1JwOLL8

---

## Design System — Referência Rápida

```
CORES
  bg-deep:       #070C09  — fundo principal
  bg-base:       #0C1410  — seções alternadas
  bg-card:       #111A14  — cards e destaques internos
  gold-primary:  #C9A961  — headlines, CTAs, destaques
  text-primary:  #F2EBDA  — corpo de texto
  text-muted:    #8A9E8E  — secundário, labels
  border-subtle: #1E2E20  — bordas e divisores

TIPOGRAFIA
  Display:   Cormorant Garamond | weight 400–600 | 48–72px desktop / 32–44px mobile
  Headline:  Cormorant Garamond | weight 400 | 32–48px desktop / 24–36px mobile
  Body:      Manrope | weight 400 | 16–18px | line-height 1.7
  Label:     Manrope | weight 500 | 12–13px | letter-spacing 0.12em | uppercase
  CTA:       Manrope | weight 600 | 15–16px | uppercase | letter-spacing 0.1em

ESPAÇAMENTO (base 8px)
  xs:  8px  | sm: 16px | md: 24px | lg: 40px | xl: 64px | 2xl: 96px | 3xl: 128px

MOTION
  Regra: fade-up apenas | duration: 400ms | easing: ease-out | delay máximo: 200ms
  Proibido: zoom / slide horizontal / flip / parallax / bounce / qualquer distração

CONTAINER
  Max-width: 720px (copy) | 960px (grid) | Padding lateral mobile: 20px
```

---

## Arquitetura Emocional — Progressão por Seção

```
[1] Navbar        → presença silenciosa — não distrai
[2] Hero          → ATENÇÃO — para o scroll, cria tensão
[3] Reconhecimento → IDENTIFICAÇÃO — "isso fala de mim"
[4] Reframe       → NOMEAÇÃO DA DOR + CLAREZA — "entendi o que está errado"
[5] VSL           → EXPANSÃO — vê o método em funcionamento
[6] Método        → ESTRUTURA — dá forma ao desejo
[7] Transformação → CONFIANÇA via prova — outros saíram do teto
[8] Autoridade    → CONFIANÇA via fonte — quem ensina isso
[9] Currículo     → CONCRETUDE — o que exatamente vou aprender
[10] Oferta       → DESEJO COERENTE — o valor se torna visível
[11] Garantia     → SEGURANÇA — remove risco da decisão
[12] FAQ          → OBJEÇÃO — desobstrui a decisão
[13] CTA Final    → DECISÃO — convite natural
[14] Footer       → FECHAMENTO — presença, não pressão
```

---

## SEÇÃO 1 — Navbar

**Objetivo emocional:** Presença sem distração. Sinaliza autoridade sem competir com a mensagem.

**Função psicológica:** Âncora visual. Confirma que o usuário chegou ao lugar certo sem interromper a leitura.

**Estado emocional esperado:** Neutralidade — atenção disponível para o Hero.

**Hierarquia visual:**
- Logo/nome Guilherme Araújo à esquerda (Cormorant, gold-primary, 16px)
- CTA único à direita: "Acessar agora" → âncora para #oferta
- Sem menu, sem links de navegação, sem submenu

**Estrutura mobile-first:**
```
[GUILHERME ARAÚJO]                    [ACESSAR AGORA →]
```
- Altura: 56px mobile / 64px desktop
- bg-deep com border-bottom 1px border-subtle
- Sticky: sim — mantém CTA sempre acessível
- Logo: texto puro (sem imagem), Cormorant Garamond

**Densidade:** Mínima. Dois elementos apenas.

**CTA:** "Acessar agora" — destino: #oferta

**Elementos obrigatórios:**
- Nome/marca à esquerda
- CTA único à direita linkando para #oferta
- Sticky scroll

**Elementos proibidos:**
- Menu hamburguer com links internos
- Múltiplos CTAs
- Logo de instituição ou parceiro
- Redes sociais
- Qualquer elemento que desvie o olhar do Hero

---

## SEÇÃO 2 — Hero

**Objetivo emocional:** Parar o scroll. Criar tensão imediata entre o estado atual do ICP e um reframe que ainda não foi entregue.

**Função psicológica:** Ativação — o ICP se reconhece na situação descrita antes de entender a solução. A headline nomeia o estado sem nomear a dor diretamente.

**Estado emocional esperado:** Atenção ativada + tensão produtiva ("isso fala de mim, preciso continuar lendo").

**Hierarquia visual:**
```
[LABEL]         ← Manrope, uppercase, gold-primary, 12px, letter-spacing 0.12em
[HEADLINE]      ← Cormorant, 52–64px desktop / 36–44px mobile, text-primary
[SUBHEADLINE]   ← Manrope, 17–18px, text-muted, max-width 560px
[CTA PRIMÁRIO]  ← botão gold-primary
[PROVA SOCIAL MÍNIMA] ← 1 linha, Manrope 13px, text-muted
```

**Estrutura mobile-first:**
```
MOBILE:
  [label]
  [headline — 2–3 linhas]
  [subheadline — 2–3 linhas]
  [CTA]
  [prova mínima]

DESKTOP:
  max-width 720px centralizado
  mesmo layout, escalado para 64px headline
```

**Densidade:** Alta em impacto, baixa em elementos. Máximo 5 elementos visuais.

**Padding:** pt-3xl pb-2xl (96px topo, 64px base)

**CTA:** "Quero acessar o método" → destino: #oferta

**Placeholders de copy:**
```
LABEL:
  "Para cartomantes, terapeutas e consteladores"

HEADLINE (opção A — teto invisível):
  "Você tem dom. Falta o método que transforma dom em atendimento estruturado."

HEADLINE (opção B — reframe direto):
  "Anos de prática, clientes que não voltam, agenda que não cresce.
  Isso não é falta de dom."

HEADLINE (opção C — estado + tensão):
  "Você lê cartas há anos. Mas ainda não sabe como transformar uma sessão em um processo que o cliente compreende e valoriza."

SUBHEADLINE:
  "Introdução à Cartomância Sistêmica é o método que conecta sua intuição a uma estrutura que o cliente reconhece, confia e indica."

PROVA MÍNIMA:
  "Mais de [N] profissionais já acessaram o método"
  ou: "Acesso imediato · 9 aulas · R$97"
```

**Elementos obrigatórios:**
- Label de qualificação de ICP
- Headline em Cormorant com tensão real (sem promessa de resultado inflada)
- Subheadline em Manrope curta e direta
- CTA único
- Nenhuma imagem de produto

**Elementos proibidos:**
- Foto de Guilherme (reservada para Seção 8)
- VSL aqui (reservada para Seção 5)
- Bullet points
- Contagem regressiva / timer
- Selos, badges, estrelas
- Qualquer menção a preço aqui
- "Clique aqui"
- Gradiente chamativo ou animação de entrada complexa

---

## SEÇÃO 3 — Reconhecimento

**Objetivo emocional:** Criar identificação profunda. O ICP sente que a LP foi escrita para ele especificamente.

**Função psicológica:** Espelhamento situacional — nomear com precisão o estado vivido sem julgamento. A pessoa lê e pensa "exatamente isso". Reduz ceticismo, abre receptividade.

**Estado emocional esperado:** Identificação + alívio inicial ("finalmente alguém nomeou o que eu sinto").

**Hierarquia visual:**
```
[HEADLINE DE TRANSIÇÃO]   ← Cormorant, 36–44px, text-primary
[BLOCO DE SITUAÇÕES]      ← 4–5 itens em lista com marcador sutil
[FECHAMENTO EMPÁTICO]     ← Manrope, 17px, text-primary, max-width 580px
```

**Estrutura mobile-first:**
```
MOBILE:
  [headline]
  [lista vertical — 1 item por linha — sem ícone ou bullet visível]
  [fechamento — parágrafo]

DESKTOP:
  mesmo layout, max-width 680px centralizado
```

**Densidade:** Média. Texto respirado, sem compressão. Cada situação em linha própria com espaço entre elas.

**Fundo:** bg-base (#0C1410) — alternância de bg-deep do Hero

**Padding:** py-2xl (96px vertical)

**CTA:** Nenhum nesta seção. A função é emocional, não conversional.

**Placeholders de copy:**
```
HEADLINE:
  "Você está neste exato ponto?"

LISTA DE SITUAÇÕES (escolher 4–5):
  — Atende há anos, mas cada sessão parece começar do zero
  — Clientes saem satisfeitos, mas não voltam nem indicam
  — Cobra um valor que não reflete o que você entrega
  — Sabe mais do que explica, mas não sabe como estruturar
  — Tem domínio da leitura, mas sente que o cliente não percebe o valor completo
  — Quer crescer, mas não sabe o que precisa mudar
  — Já tentou criar método próprio, mas sem referência sistêmica

FECHAMENTO EMPÁTICO:
  "Isso não é falta de talento. Não é falta de vocação.
  É falta de um sistema que conecte o que você sabe com o que o cliente precisa receber."
```

**Elementos obrigatórios:**
- Headline que endereça diretamente o ICP (cartomantes, terapeutas, consteladores)
- Lista de situações reconhecíveis — máximo 5 itens
- Parágrafo de fechamento empático sem solução ainda (a solução vem no Reframe)
- Linguagem contextual (não "você está ansioso" — "você está neste ponto?")

**Elementos proibidos:**
- Solução antes do reconhecimento estar completo
- Tom de diagnóstico clínico
- Tom de culpa ou crítica
- Ícones decorativos ou emojis
- Múltiplas colunas
- CTA aqui
- Bullet points com check-mark

---

## SEÇÃO 4 — Reframe Central

**Objetivo emocional:** Nomear a causa raiz do teto invisível com precisão cirúrgica. Liberação — o problema é externo, não do ser.

**Função psicológica:** Deslocamento da culpa interna para causa estrutural solucionável. "Não é você. É a ausência de um sistema." Cria esperança racional e abre desejo de ação.

**Estado emocional esperado:** Clareza + alívio profundo + curiosidade sobre a solução ("então tem uma saída").

**Hierarquia visual:**
```
[HEADLINE REFRAME]     ← Cormorant, 44–56px, gold-primary
[CORPO DO REFRAME]     ← Manrope, 17–18px, text-primary, máx. 3 parágrafos curtos
[FRASE DE ANCORAGEM]   ← Cormorant itálico, 24–28px, text-muted, centralizado
```

**Estrutura mobile-first:**
```
MOBILE:
  [headline — 2–3 linhas, gold-primary]
  [parágrafo 1]
  [parágrafo 2]
  [parágrafo 3]
  [frase de ancoragem — itálico, centralizado]

DESKTOP:
  max-width 660px centralizado
  headline até 56px
```

**Densidade:** Baixa. Muito espaço em branco. Cada parágrafo curto (3–5 linhas máximo).

**Fundo:** bg-deep — retorno ao fundo principal após bg-base do Reconhecimento

**Padding:** py-3xl (128px vertical) — a seção mais "respirada" da LP

**CTA:** Nenhum. A tensão criada aqui é resolvida pelo VSL na seção seguinte.

**Placeholders de copy:**
```
HEADLINE:
  "Não é falta de dom.
  É falta de estrutura sistêmica."

PARÁGRAFO 1:
  "Cartomantes, terapeutas e consteladores com anos de prática acumulam conhecimento real. Mas conhecimento sem sistema não se converte em atendimento que o cliente compreende, valoriza e indica."

PARÁGRAFO 2:
  "O teto que você sente não é espiritual. Não é limitação de talento. É a ausência de um modelo que conecta o que você sabe com o que o cliente precisa receber — de forma clara, reconhecível e repetível."

PARÁGRAFO 3:
  "Quando você tem estrutura, o atendimento muda de algo que depende de você estar em dia para algo que funciona de forma consistente — e que o cliente percebe como profissional."

FRASE DE ANCORAGEM:
  "A intuição não precisa de validação. Ela precisa de método."
```

**Elementos obrigatórios:**
- Headline em gold-primary — o momento de maior clareza visual da LP
- Reframe claro: o problema é estrutural, não interno
- Frase de ancoragem em itálico Cormorant
- Espaço generoso — não comprimir esta seção

**Elementos proibidos:**
- Solução antes do reframe estar completo
- Promessa de resultado financeiro aqui
- CTA aqui
- Listas ou bullets
- Qualquer imagem ou ícone
- Fundo alternado (manter bg-deep para contrastar com o que vem antes e depois)

---

## SEÇÃO 5 — VSL

**Objetivo emocional:** Expansão — o ICP vê o método em funcionamento. Gera desejo de acessar o que está sendo demonstrado.

**Função psicológica:** Prova de conceito antes da apresentação formal do currículo. O vídeo não vende — ele demonstra que existe algo real. Reduz resistência intelectual e ativa desejo emocional.

**Estado emocional esperado:** Interesse ativado + desejo nascente ("quero entender como isso funciona na prática").

**Hierarquia visual:**
```
[LABEL]           ← Manrope, uppercase, gold-primary, 12px
[HEADLINE]        ← Cormorant, 32–40px, text-primary
[PLAYER VSL]      ← 16:9, max-width 720px, border-radius 4px
[LEGENDA BREVE]   ← Manrope, 14px, text-muted, centralizado, abaixo do player
```

**Estrutura mobile-first:**
```
MOBILE:
  [label]
  [headline — 2 linhas]
  [player — 100% largura, 16:9]
  [legenda]

DESKTOP:
  max-width 720px centralizado
  player com shadow sutil (0 8px 40px rgba(0,0,0,0.4))
```

**Densidade:** Baixa. O vídeo é o elemento central. Nada compete com ele.

**Fundo:** bg-base — alternância visual

**Padding:** pt-2xl pb-3xl (64px topo, 96px base — mais espaço embaixo para respirar antes do Método)

**CTA:** Nenhum nesta seção. O CTA vem após o Método.

**Código do player:**
```html
<div class="vsl-wrapper">
  <iframe
    src="https://www.youtube.com/embed/eKRW1JwOLL8"
    title="Introdução à Cartomância Sistêmica"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

<style>
.vsl-wrapper {
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.vsl-wrapper iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border-radius: 4px;
}
</style>
```

**Placeholders de copy:**
```
LABEL:
  "O método em prática"

HEADLINE:
  "Assista antes de decidir"

LEGENDA:
  "Uma demonstração real de como a Cartomância Sistêmica estrutura o atendimento."
```

**Elementos obrigatórios:**
- Player responsivo 16:9
- Autoplay desabilitado (respeita escolha do usuário)
- Label acima do player
- Headline curta — não explicar o vídeo, convidar para assistir

**Elementos proibidos:**
- Thumbnail customizada com texto grafado
- Botão play personalizado animado
- Timer de "assista até o final"
- Qualquer elemento que distraia do player
- CTA logo abaixo do player (a distância é intencional)

---

## SEÇÃO 6 — Método

**Objetivo emocional:** Dar forma estrutural ao desejo. O ICP entende o que é o método antes de ver o currículo.

**Função psicológica:** Clareza racional após expansão emocional do VSL. Apresenta o sistema como algo concreto, não abstrato. Reduz risco percebido ao nomear o que existe.

**Estado emocional esperado:** Compreensão + confiança crescente ("eu entendo o que é isso e faz sentido para mim").

**Hierarquia visual:**
```
[LABEL]            ← Manrope, uppercase, gold-primary, 12px
[HEADLINE]         ← Cormorant, 36–44px, text-primary
[DESCRIÇÃO BREVE]  ← Manrope, 17px, text-primary, max-width 600px
[3 PILARES]        ← cards horizontais (desktop) / empilhados (mobile)
  Cada pilar:
    [ícone mínimo ou número]
    [nome do pilar] ← Cormorant, 22px
    [descrição]     ← Manrope, 15px, text-muted
```

**Estrutura mobile-first:**
```
MOBILE:
  [label]
  [headline]
  [descrição]
  [pilar 1 — card vertical]
  [pilar 2 — card vertical]
  [pilar 3 — card vertical]

DESKTOP:
  [label + headline + descrição — centrado, max-width 640px]
  [3 cards em linha — max-width 960px]
```

**Densidade:** Média. Os cards precisam respirar. Não sobrecarregar com detalhes.

**Fundo:** bg-deep

**Padding:** py-2xl (96px)

**CTA:** Nenhum nesta seção.

**Placeholders de copy:**
```
LABEL:
  "O que é Cartomância Sistêmica"

HEADLINE:
  "Um método. Não uma técnica isolada."

DESCRIÇÃO:
  "Cartomância Sistêmica é a integração entre leitura intuitiva, estrutura de atendimento e linguagem que o cliente compreende — sem perder profundidade."

PILAR 1:
  Nome: "Leitura com estrutura"
  Descrição: "O dom não muda. O que muda é como você organiza e entrega o que percebe."

PILAR 2:
  Nome: "Linguagem que conecta"
  Descrição: "Não é traduzir. É criar um diálogo que o cliente consegue receber, processar e aplicar."

PILAR 3:
  Nome: "Processo repetível"
  Descrição: "Uma sessão que funciona uma vez não é método. Método é o que funciona toda vez."
```

**Elementos obrigatórios:**
- Label de contexto
- Headline que distingue método de técnica
- 3 pilares com nome curto + descrição breve
- Cards com fundo bg-card e borda border-subtle

**Elementos proibidos:**
- Mais de 3 pilares aqui (currículo detalhado vem depois)
- Ícones decorativos complexos
- Número de aulas ou preço aqui (reservado para Oferta)
- CTA aqui

---

## SEÇÃO 7 — Transformação / Provas

**Objetivo emocional:** Construir confiança via evidência real. Outros com perfil semelhante saíram do teto invisível.

**Função psicológica:** Prova social qualificada — o ICP não quer ver qualquer resultado, quer ver resultado de pessoas parecidas com ele. Reduz a crença de "funciona para outros, mas não para mim".

**Estado emocional esperado:** Confiança + desejo amplificado ("se funcionou para quem é como eu, pode funcionar para mim").

**Hierarquia visual:**
```
[LABEL]                ← Manrope, uppercase, gold-primary, 12px
[HEADLINE]             ← Cormorant, 36–44px, text-primary
[CARDS DE DEPOIMENTO]  ← 3 depoimentos prioritários
  Cada card:
    [aspas decorativas]  ← Cormorant, 40px, gold-primary, opacity 0.4
    [texto]              ← Manrope, 16px, text-primary, itálico
    [nome]               ← Manrope, 13px, text-muted, uppercase
    [qualificação]       ← Manrope, 12px, text-muted (ex: "Terapeuta, 7 anos de prática")
```

**Estrutura mobile-first:**
```
MOBILE:
  [label]
  [headline]
  [card 1]
  [card 2]
  [card 3]

DESKTOP:
  [label + headline — centrado]
  [3 cards em linha — max-width 960px]
  ou: [2 cards + 1 destaque maior]
```

**Densidade:** Média. Cada depoimento em card próprio com espaço interno generoso.

**Fundo:** bg-base

**Padding:** py-2xl (96px)

**CTA:** Nenhum nesta seção.

**Depoimentos existentes (da LP atual):**
```
Ana Carolina — terapeuta
Renata Melo
Marcos Tavares
Fernanda Lins
```

**Regras de seleção:**
- Priorizar depoimentos que mencionam mudança de atendimento ou percepção de clientes
- Evitar depoimentos que mencionam resultado financeiro específico
- Priorizar quem tem qualificação compatível com ICP (anos de prática, área similar)

**Placeholders de copy:**
```
LABEL:
  "O que muda com o método"

HEADLINE:
  "Profissionais com trajetória como a sua."
```

**Elementos obrigatórios:**
- Mínimo 3 depoimentos
- Qualificação real de cada pessoa (profissão + anos de prática quando disponível)
- Aspas visuais em Cormorant como elemento estético

**Elementos proibidos:**
- Estrelas de avaliação (5 estrelas — elemento e-commerce, não consultoria)
- Avatares genéricos ou fotos de banco de imagem
- Depoimentos sem nome ou com nome genérico
- Resultado financeiro específico ("ganhei R$X")
- Depoimentos muito curtos (menos de 2 linhas não provam nada)

---

## SEÇÃO 8 — Autoridade (Guilherme)

**Objetivo emocional:** Construir confiança via fonte. Quem está ensinando isso e por quê ele pode ensinar.

**Função psicológica:** Reduzir ceticismo sobre a credibilidade do método. O ICP precisa confiar em quem está por trás antes de confiar no produto.

**Estado emocional esperado:** Respeito + identificação com a trajetória ("ele construiu isso de verdade").

**Hierarquia visual:**
```
[FOTO GUILHERME]     ← max-width 200px mobile / 280px desktop, border-radius 2px
[LABEL]              ← Manrope, uppercase, gold-primary, 12px
[NOME]               ← Cormorant, 40–48px, text-primary
[QUALIFICAÇÃO]       ← Manrope, 15px, text-muted
[CORPO BIOGRÁFICO]   ← Manrope, 17px, text-primary, max-width 580px
[PROVAS DE AUTHORITY] ← lista discreta de credenciais reais
```

**Estrutura mobile-first:**
```
MOBILE:
  [foto — centralizada]
  [label]
  [nome]
  [qualificação]
  [corpo — parágrafos]
  [credenciais — lista]

DESKTOP:
  [foto — esquerda] | [label + nome + qualificação + corpo + credenciais — direita]
  grid 2 colunas, gap 64px, max-width 960px
```

**Densidade:** Média-baixa. A foto e o nome são elementos âncora. O texto de corpo deve ser conciso.

**Fundo:** bg-deep

**Padding:** py-2xl (96px)

**CTA:** Nenhum nesta seção.

**Placeholders de copy:**
```
LABEL:
  "Quem ensina"

NOME:
  "Guilherme Araújo"

QUALIFICAÇÃO:
  "[título real — cartomante sistêmico / terapeuta / especialidade real]"

CORPO (manter conciso — máx. 3 parágrafos):
  Parágrafo 1: trajetória real — como chegou à Cartomância Sistêmica
  Parágrafo 2: o que construiu — experiência prática com clientes reais
  Parágrafo 3: por que criou este método — o problema que ele mesmo viveu e resolveu

CREDENCIAIS (lista discreta, máx. 4 itens):
  — [N] anos de prática em Cartomância
  — [N] clientes atendidos com método sistêmico
  — [título ou formação real]
  — [reconhecimento ou contexto relevante]
```

**Elementos obrigatórios:**
- Foto real de Guilherme (não ícone, não ilustração)
- Nome completo em Cormorant
- Qualificação real — não inventar credenciais
- Tom de trajetória, não de currículo acadêmico

**Elementos proibidos:**
- Fotos com cenário artificial ou corporativo genérico
- Lista de graduações e certificados (isso não qualifica na mente do ICP desta área)
- Tom arrogante ou de superioridade
- "Guru", "mentor", "coach" sem contexto real
- Mais de 4 itens nas credenciais

---

## SEÇÃO 9 — Currículo (9 Aulas)

**Objetivo emocional:** Concretude — o ICP entende exatamente o que vai aprender e vê valor antes de ver o preço.

**Função psicológica:** Ancoragem de valor racional após a jornada emocional. O detalhe do currículo transforma o desejo em intenção de compra clara.

**Estado emocional esperado:** Antecipação + percepção de valor ("isso é mais do que eu esperava por esse preço").

**Hierarquia visual:**
```
[LABEL]          ← Manrope, uppercase, gold-primary, 12px
[HEADLINE]       ← Cormorant, 36–44px, text-primary
[DESCRIÇÃO]      ← Manrope, 16px, text-muted
[LISTA DE AULAS] ← 9 itens em lista vertical
  Cada aula:
    [número]      ← Manrope, 11px, gold-primary, uppercase — "AULA 01"
    [título]      ← Cormorant, 22–26px, text-primary
    [descrição]   ← Manrope, 14px, text-muted — 1–2 linhas
    [separador]   ← border-bottom 1px border-subtle
```

**Estrutura mobile-first:**
```
MOBILE:
  [label]
  [headline]
  [descrição]
  [aula 01]
  [aula 02]
  ...
  [aula 09]

DESKTOP:
  [label + headline + descrição — max-width 640px, centrado]
  [lista de aulas — max-width 720px, centrado]
```

**Densidade:** Alta em informação, controlada em visual. A lista deve ser espaçada (py-md entre aulas) mas não congestionada.

**Fundo:** bg-base

**Padding:** py-2xl (96px)

**CTA:** "Quero acessar as 9 aulas" ao final da lista → destino: #oferta

**Placeholders de copy (substituir com conteúdo real das aulas):**
```
LABEL:
  "O que você vai aprender"

HEADLINE:
  "9 aulas. Um método completo."

DESCRIÇÃO:
  "Acesso imediato. Vá no seu ritmo."

AULAS (estrutura — preencher com conteúdo real):
  AULA 01 — [Título da Aula 1]
             [O que o aluno aprende ou o resultado desta aula]

  AULA 02 — [Título da Aula 2]
             [Descrição]

  AULA 03 — [Título da Aula 3]
             [Descrição]

  AULA 04 — [Título da Aula 4]
             [Descrição]

  AULA 05 — [Título da Aula 5]
             [Descrição]

  AULA 06 — [Título da Aula 6]
             [Descrição]

  AULA 07 — [Título da Aula 7]
             [Descrição]

  AULA 08 — [Título da Aula 8]
             [Descrição]

  AULA 09 — [Título da Aula 9]
             [Descrição]
```

**Elementos obrigatórios:**
- Numeração visual de cada aula (AULA 01 etc. em gold-primary)
- Título da aula em Cormorant
- Descrição curta em Manrope — o que o aluno aprende, não o que o vídeo "fala sobre"
- CTA ao final da lista

**Elementos proibidos:**
- Ícones de play ou vídeo decorativos
- Colunas (lista linear é mais clara para currículo)
- Preview de thumbnail ou screenshot de vídeo
- Duração das aulas (pode criar ansiedade ou diminuir percepção)
- Qualquer menção ao preço aqui (reservado para a seção seguinte)

---

## SEÇÃO 10 — Oferta

**Objetivo emocional:** Tornar o valor visível antes de revelar o preço. O ICP percebe que R$97 é pouco diante do que recebe.

**Função psicológica:** Ancoragem de valor + redução de atrito de preço. O preço só aparece após o sumário do que está incluído.

**Estado emocional esperado:** Desejo coerente + decisão emergindo ("por esse valor, quero agora").

**Hierarquia visual:**
```
[LABEL]           ← Manrope, uppercase, gold-primary, 12px
[HEADLINE]        ← Cormorant, 36–44px, text-primary
[CARD DE OFERTA]  ← bg-card, border 1px border-subtle, border-radius 4px, padding lg
  [O QUE ESTÁ INCLUÍDO]  ← lista com marcador gold-primary
  [SEPARADOR]
  [PREÇO]         ← Cormorant, 56–64px, gold-primary
  [CONDIÇÃO]      ← Manrope, 14px, text-muted ("acesso imediato · pagamento único")
  [CTA PRINCIPAL] ← botão gold-primary, full-width mobile
  [SEGURANÇA]     ← Manrope, 12px, text-muted ("pagamento seguro · 7 dias de garantia")
```

**Estrutura mobile-first:**
```
MOBILE:
  [label]
  [headline]
  [card — full width]
    [incluído — lista]
    [preço]
    [condição]
    [CTA]
    [segurança]

DESKTOP:
  [label + headline — centrado]
  [card — max-width 560px, centrado]
```

**Densidade:** Alta. Este é o ponto de decisão — tudo deve estar visível sem scroll.

**Fundo:** bg-deep

**Padding:** py-2xl (96px)

**ID da seção:** `id="oferta"` — destino de todos os CTAs acima

**CTA:** "Acessar agora por R$97" → `checkout.pagtrust.com.br/ckd26cd640?funnel=fnedeb4f4d`

**Placeholders de copy:**
```
LABEL:
  "Acesso imediato"

HEADLINE:
  "Introdução à Cartomância Sistêmica"

INCLUÍDO (lista — máx. 6 itens):
  ✦ 9 aulas em vídeo — método completo
  ✦ Acesso imediato após o pagamento
  ✦ Sem mensalidade — pagamento único
  ✦ Acesso por [período — verificar plataforma]
  ✦ [bônus se existir]
  ✦ [material de apoio se existir]

PREÇO:
  "R$97"

CONDIÇÃO:
  "pagamento único · acesso imediato"

CTA:
  "Acessar agora por R$97"

SEGURANÇA:
  "Pagamento 100% seguro · Garantia de 7 dias"
```

**Elementos obrigatórios:**
- `id="oferta"` no elemento âncora
- Lista do que está incluído antes do preço
- Preço em Cormorant gold-primary — elemento de maior destaque visual nesta seção
- CTA com o preço no botão
- Linha de segurança abaixo do botão
- URL de checkout correta: `checkout.pagtrust.com.br/ckd26cd640?funnel=fnedeb4f4d`

**Elementos proibidos:**
- Preço riscado (preço "de" / preço "por" — cria desconfiança)
- Timer de contagem regressiva falso
- "Últimas vagas" se não for verdade
- Múltiplos planos ou opções de preço aqui
- Parcelamento se não estiver configurado no checkout

---

## SEÇÃO 11 — Garantia

**Objetivo emocional:** Remover o risco percebido da decisão. O ICP entende que pode decidir sem medo de errar.

**Função psicológica:** Inversão de risco — transfere o risco do comprador para o vendedor. Elimina a última resistência emocional antes da decisão.

**Estado emocional esperado:** Segurança + permissão interna para decidir ("não tenho nada a perder").

**Hierarquia visual:**
```
[ÍCONE DE GARANTIA]  ← elemento visual simples — escudo ou similar, gold-primary, 40px
[HEADLINE]           ← Cormorant, 32–40px, text-primary
[CORPO]              ← Manrope, 16–17px, text-primary, max-width 560px
[CTA SECUNDÁRIO]     ← botão outline (borda gold-primary, fundo transparente)
```

**Estrutura mobile-first:**
```
MOBILE:
  [ícone — centralizado]
  [headline]
  [corpo — 2 parágrafos curtos]
  [CTA]

DESKTOP:
  max-width 640px centralizado
  mesmo layout
```

**Densidade:** Baixa. Seção curta, sem distrações.

**Fundo:** bg-base

**Padding:** py-xl (64px) — seção mais compacta

**CTA:** "Quero acessar com garantia" → `checkout.pagtrust.com.br/ckd26cd640?funnel=fnedeb4f4d`

**Placeholders de copy:**
```
HEADLINE:
  "7 dias de garantia incondicional"

PARÁGRAFO 1:
  "Se por qualquer motivo você sentir que o método não é para você, basta pedir o reembolso em até 7 dias após a compra. Devolução integral, sem perguntas, sem burocracia."

PARÁGRAFO 2:
  "Você pode acessar, assistir e decidir com calma. O risco é nosso."

CTA:
  "Quero acessar com garantia"
```

**Elementos obrigatórios:**
- Prazo claro: "7 dias"
- Tom de tranquilidade — não tom jurídico
- CTA que reforça segurança (palavra "garantia" no botão)
- Sem letras miúdas ou asteriscos

**Elementos proibidos:**
- Linguagem jurídica ou burocrática
- Limitações escondidas
- CTA agressivo aqui ("não perca" etc.)
- Ícone complexo ou animado

---

## SEÇÃO 12 — FAQ

**Objetivo emocional:** Desobstruir objeções restantes. O ICP encontra resposta para o que ainda travava a decisão.

**Função psicológica:** Antecipação e dissolução de resistências racionais. FAQs bem escolhidos não apenas respondem — validam a decisão de comprar.

**Estado emocional esperado:** Clareza final + remoção de incerteza ("entendi tudo, agora posso decidir").

**Hierarquia visual:**
```
[LABEL]           ← Manrope, uppercase, gold-primary, 12px
[HEADLINE]        ← Cormorant, 32–40px, text-primary
[ACCORDION]       ← 6–8 perguntas em accordion
  Cada item:
    [pergunta]    ← Manrope, 16px, weight 500, text-primary — clicável
    [resposta]    ← Manrope, 15px, text-muted — expansível
    [separador]   ← border-bottom 1px border-subtle
```

**Estrutura mobile-first:**
```
MOBILE:
  [label]
  [headline]
  [accordion — full width]
    [item 1]
    [item 2]
    ...
    [item 8]

DESKTOP:
  max-width 720px centralizado
  mesmo layout — accordion é sempre linear
```

**Densidade:** Controlada. O accordion evita sobrecarga visual.

**Fundo:** bg-deep

**Padding:** py-2xl (96px)

**CTA:** Nenhum nesta seção.

**Perguntas recomendadas (selecionar 6–8):**
```
1. "Para quem é este curso?"
   → Cartomantes, terapeutas, consteladores e profissionais de autoconhecimento com prática existente que querem estruturar seu atendimento.

2. "Preciso ter experiência prévia com Cartomância?"
   → Sim. Este é um curso de método sistêmico, não de introdução à Cartomância. Você já precisa conhecer o básico das cartas.

3. "Como funciona o acesso?"
   → Após o pagamento, você recebe acesso imediato às 9 aulas. Assiste no seu ritmo, sem prazo fixo.

4. "E se eu não gostar?"
   → Você tem 7 dias de garantia incondicional. Peça o reembolso e devolvemos 100% do valor, sem perguntas.

5. "É ao vivo ou gravado?"
   → Gravado. Você acessa quando e quantas vezes quiser.

6. "Em quanto tempo vejo resultado?"
   → Depende de como você aplica. O método pode ser aplicado já na primeira sessão após o curso. O resultado real vem com prática consistente.

7. "É diferente de outros cursos de Cartomância?"
   → Sim. O foco não é aprender a ler as cartas, mas estruturar o atendimento de forma sistêmica — como você conduz, organiza e comunica o que percebe.

8. "Posso parcelar?"
   → [Verificar opções reais no checkout antes de publicar]
```

**Elementos obrigatórios:**
- Accordion com abertura/fechamento por clique
- Primeira pergunta fechada — não abrir todas por padrão
- Respostas concisas e honestas (não evasivas)
- Pergunta sobre garantia inclusa
- Pergunta sobre para quem é (qualificação) inclusa

**Elementos proibidos:**
- FAQs genéricos que poderiam ser de qualquer produto
- Respostas longas demais (mais de 4 linhas)
- Tom defensivo ou burocrático
- Promessas de resultado específico nas respostas

---

## SEÇÃO 13 — CTA Final

**Objetivo emocional:** Convite natural para quem chegou até aqui. Não pressão — clareza de que a decisão está disponível.

**Função psicológica:** Fechamento da jornada emocional. O ICP que leu até o final está pronto — o CTA final é o próximo passo lógico, não um empurrão.

**Estado emocional esperado:** Decisão natural ("é agora").

**Hierarquia visual:**
```
[HEADLINE]        ← Cormorant, 40–52px, text-primary, max-width 640px
[SUBHEADLINE]     ← Manrope, 17px, text-muted, max-width 520px
[CTA PRINCIPAL]   ← botão gold-primary, grande
[CONDIÇÃO]        ← Manrope, 13px, text-muted ("acesso imediato · garantia de 7 dias")
```

**Estrutura mobile-first:**
```
MOBILE:
  [headline — centralizado]
  [subheadline — centralizado]
  [CTA — full width]
  [condição — centralizado]

DESKTOP:
  max-width 640px centralizado
  mesmo layout
```

**Densidade:** Mínima. Apenas o essencial para a decisão.

**Fundo:** bg-base com elemento visual sutil (linha decorativa gold-primary, opacidade baixa)

**Padding:** py-3xl (128px) — seção mais generosa após FAQ

**CTA:** "Acessar o método agora" → `checkout.pagtrust.com.br/ckd26cd640?funnel=fnedeb4f4d`

**Placeholders de copy:**
```
HEADLINE:
  "O método existe.
  A decisão é sua."

SUBHEADLINE:
  "Introdução à Cartomância Sistêmica — R$97 · 9 aulas · acesso imediato."

CTA:
  "Acessar o método agora"

CONDIÇÃO:
  "Acesso imediato após o pagamento · Garantia incondicional de 7 dias"
```

**Elementos obrigatórios:**
- Headline que não pressiona — convida
- Preço visível perto do CTA (aqui é reforço, não surpresa)
- Condição de garantia sob o botão
- CTA único

**Elementos proibidos:**
- "Última chance" ou urgência artificial
- Timer
- Segundo CTA diferente (ex: WhatsApp aqui — confunde)
- Repetição longa do currículo
- Qualquer elemento que "feie" a seção de fechamento

---

## SEÇÃO 14 — Footer

**Objetivo emocional:** Fechamento limpo. Sinaliza profissionalismo sem adicionar ruído após a decisão.

**Função psicológica:** Encerramento da experiência. O footer não vende — ele confirma que a LP tem estrutura real por trás.

**Estado emocional esperado:** Confiança silenciosa ("isso foi construído com cuidado").

**Hierarquia visual:**
```
[NOME/MARCA]        ← Cormorant, 16px, text-muted
[LINKS LEGAIS]      ← Manrope, 12px, text-muted | Privacidade · Termos
[COPYRIGHT]         ← Manrope, 11px, text-muted
[BLOCO FORMAÇÃO]    ← separado visualmente, texto menor — para quem quer formação completa
```

**Estrutura mobile-first:**
```
MOBILE:
  [nome/marca — centralizado]
  [links legais — centralizado]
  [copyright]
  [--- separador ---]
  [bloco formação completa]

DESKTOP:
  [nome | links legais | copyright — horizontal]
  [--- separador ---]
  [bloco formação completa]
```

**Densidade:** Mínima.

**Fundo:** bg-deep

**Padding:** py-xl (64px)

**Bloco Formação Completa (discreto — não competir com oferta principal):**
```
[label discreta]  "Quer a formação completa?"
[texto]           "Conheça a Conselheira da Corte — formação de 4 meses."
[link]            → forms.gle/E4b74kMgPzkym1TG7
```

**Placeholders de copy:**
```
NOME/MARCA:
  "Guilherme Araújo"

LINKS LEGAIS:
  "Política de Privacidade · Termos de Uso"

COPYRIGHT:
  "© 2026 Guilherme Araújo. Todos os direitos reservados."

BLOCO FORMAÇÃO:
  "Quer a formação completa em Cartomância Sistêmica?"
  "Conheça a Conselheira da Corte →" [link para formulário]
```

**Elementos obrigatórios:**
- Nome ou marca do produtor
- Links de política de privacidade e termos (obrigação legal)
- Copyright
- Bloco de Formação Completa discreto (não competir com CTA principal)

**Elementos proibidos:**
- Redes sociais no footer (desviam o usuário da LP)
- Menu de navegação
- CTA de alta visibilidade aqui (o CTA final já foi feito na seção anterior)
- Qualquer elemento que reabra dúvida após a decisão

---

## Fluxo de CTAs — Resumo

| Seção | CTA | Destino |
|---|---|---|
| Navbar | "Acessar agora" | #oferta |
| Hero | "Quero acessar o método" | #oferta |
| Currículo (fim) | "Quero acessar as 9 aulas" | #oferta |
| Oferta | "Acessar agora por R$97" | checkout |
| Garantia | "Quero acessar com garantia" | checkout |
| CTA Final | "Acessar o método agora" | checkout |
| Footer (discreto) | "Conheça a Conselheira da Corte →" | formulário |

**Checkout:** `checkout.pagtrust.com.br/ckd26cd640?funnel=fnedeb4f4d`
**Formação:** `forms.gle/E4b74kMgPzkym1TG7`

---

## Pendências antes de HTML

| Item | Status | Ação necessária |
|---|---|---|
| Títulos reais das 9 aulas | PENDENTE | Confirmar com Guilherme |
| Foto de Guilherme | PENDENTE | Selecionar imagem para Seção 8 |
| Qualificação exata de Guilherme | PENDENTE | Confirmar formação e anos de prática |
| Depoimentos completos | PENDENTE | Recuperar texto dos 4–5 depoimentos da LP atual |
| Opções de parcelamento | PENDENTE | Verificar configuração no checkout |
| Período de acesso à plataforma | PENDENTE | Confirmar (vitalício, 1 ano, etc.) |
| Política de privacidade e termos | PENDENTE | Criar ou linkar existente |
| Pixel — eventos de conversão | PENDENTE | ViewContent, InitiateCheckout, Purchase |
| Número de alunos para prova mínima | PENDENTE | Verificar dado real |

---

## Próximo passo

**LP_COPY_v1.md** — copy completo por seção com todas as pendências acima preenchidas.

Após: `index v1.0.html` — construção HTML mobile-first completa.
