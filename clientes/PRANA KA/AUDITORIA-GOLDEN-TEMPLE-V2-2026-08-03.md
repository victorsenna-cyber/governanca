# AUDITORIA — The Golden Temple V2

> **Artefato:** `04 - web design/the-golden-temple-v2/` (index.html 431 linhas, styles.css 2.614, motion.css 252, main.js 331, hero-scene.js 316, config.js 14)
> **Auditado em:** 03/08/2026 · America/Sao_Paulo
> **Réguas:** `gerador-web-designer-senior-continuum` (00, 02, 06) · `ui-ux-designer-senior-continuum` (07) · `copywriter-senior-continuum` (04) · `voz-prana.skill.md`
> **Nota de fonte:** `METODO-PAGINA-DE-VENDAS.md` é ponteiro desde 26/07/2026. A régua ativa é o circuito de três skills (`CLAUDE.md` §6.3). Auditoria de página existente roda as etapas 1 e 5.

---

## 0. Veredito

**NÃO PUBLICAR.** Não por qualidade de execução — a execução é boa. Por ausência de destino.

**A página tem 5 CTAs e nenhum caminho até o pagamento.**

E há um achado que pesa mais que qualquer nota de gate: esta página foi construída em 03/08/2026, a cinco dias da Masterclass, enquanto a página que efetivamente vende segue não publicada e a cliente já está gastando dinheiro em divulgação sem destino. **A página-mãe ainda esconde a Masterclass** (`seasonal-portal` com `hidden` e link vazio) — o único ativo do projeto que tem prazo, checkout configurado e demanda já convocada.

Contra a régua-mãe do `CLAUDE.md` §9 — *qual dinheiro gera, em quantos dias, em quantos passos até o pagamento* — esta página responde: **R$ 0 · sem data · infinitos passos.**

---

## 1. Classificação que faltava (etapa 1 do circuito)

O `CREATIVE-DIRECTION.md` traz diagnóstico de copy, mas **não traz a classificação nos 4 eixos**. Sem ela, os papéis seguintes trabalham sem restrição. Preenchida agora, a posteriori:

```
TICKET:            não se aplica — a página não vende
MODELO:            hub institucional de escola
ATO DE CONVERSÃO:  ROTEAMENTO INTERNO -> não previsto no eixo 3 da skill
TEMPERATURA:       morna (base da Prana) e fria (busca/indicação)
CONSCIÊNCIA:       problema, com familiaridade variável com o universo dela
COMPRIMENTO:       9 dobras — dentro da faixa de morno/ticket médio
DESVIO DA ORDEM CANÔNICA: duas ofertas na mesma dobra (D6)
   -> motivo escrito: é hub, não página de vendas. Desvio legítimo e declarado.
```

**Consequência da classificação:** três itens do gate de página de vendas **não se aplicam** e não contam como defeito — preço na página, escassez real e pilha de valor antes do preço. O anti-padrão 16 do gerador ("duas ofertas na mesma página") também não se aplica: aqui a coexistência é a função.

**O que continua se aplicando integralmente:** teste dos 5 segundos, qualificação na primeira dobra, cadência de CTA, clímax único coincidindo com a decisão, mapa de quitação, atrito, integridade e o gate de copy.

**Achado de método (A-00 · P1):** a classificação não foi escrita antes da construção. Está no gate de entrada do gerador: *"Classificação nos 4 eixos, escrita."* Reprova a entrada, não o artefato.

---

## 2. Continuidade do funil — o eixo que decide

Contagem literal dos passos, do hero ao dinheiro:

| # | Elemento | Destino real | Avança? |
|---:|---|---|---|
| 1 | CTA header "Encontrar meu caminho" | `#caminhos` | não — rola a tela |
| 2 | CTA hero (D1) | `#caminhos` | não — rola a tela |
| 3 | CTA método (D4) | `#caminhos` | não — rola a tela |
| 4 | CTA Prana (D7) | `#caminhos` | não — rola a tela |
| 5 | CTA selamento (D9) | `#caminhos` | não — rola a tela |
| 6 | Card Despertar (D6) | `links.despertar: ""` → *"Página de entrada em preparação"* | **beco sem saída** |
| 7 | Card Mentoria (D6) | `../mentoria/index.html` — rota **local**, e a Mentoria tem `OFFER_CONFIG` com 9 campos obrigatórios em `null` | **abre página sem preço e sem checkout** |
| 8 | Portal sazonal (Masterclass) | `links.felinas: ""` + `hidden` | **invisível** |

**Leitura:** os cinco CTAs são o mesmo CTA. Todos apontam para a mesma âncora interna, e essa âncora oferece duas portas — uma fechada com aviso e outra que abre numa página que não consegue cobrar. A Masterclass, que é o único caminho de pagamento configurado do projeto, está oculta por decisão de arquitetura.

**F-01 · P0 — funil sem terminal.** Nenhum dos oito elementos interativos leva a um checkout. A página é um roteador que roteia para dentro de si mesma.

**F-02 · P0 — a oferta com prazo está escondida.** A Masterclass tem data em 5 dias, checkout PagTrust testado e divulgação ativa da cliente desde 02/08/2026. Na página-mãe ela não existe. Quem chegar aqui pela divulgação dela não encontra o que foi anunciado.

**F-03 · P1 — 50% da vitrine é placeholder.** *"Página de entrada em preparação"* é texto de obra aparecendo para o visitante. Melhor que link quebrado, e ainda assim é o gate de integridade do gerador (*"Zero placeholder visível"*) e o anti-padrão 31 da ui-ux.

**F-04 · P1 — medição codificada e desligada.** `main.js` implementa `view_dN`, `cta_click_*` e `path_select_*` com os nomes exatos do módulo 7.1. `config.js` traz `analytics.enabled: false`. A instrumentação está certa e não coleta nada.

**F-05 · P2 — rota relativa.** `../mentoria/index.html` quebra se o bundle for publicado isolado. Reconhecido no HANDOFF.

---

## 3. Arquitetura

**Ordem das dobras:** D1 hero · D2 a casa · D3 o chamado (custo) · D4 método · D5 dimensões · D5b corporificar · D6 caminhos · D7 Prana · D8 dedicação · D9 selamento.

**O que está certo:**
- a dobra de custo (D3) existe, tem peso e carrega o único pivô real da página;
- o fecho ecoa a abertura, uma oitava acima: *"O sagrado volta a habitar o corpo"* → *"Se o teu corpo reconheceu, a morada já existe"*;
- nenhum trecho de 2 telas ou mais sem CTA;
- a curva declarada no `CREATIVE-DIRECTION.md` põe o pico (9) em D6, na decisão. Correto no papel.

**A-01 · P1 — clímax duplo e deslocado.** O `CREATIVE-DIRECTION.md` declara: *"clímax de contraste na seção da Prana e no selamento"*. Dois. O gate visual, passe 4, é explícito: *"Se há mais de um, não há nenhum"*, e o único precisa coincidir com o momento de decisão. O pico visual está em D7 e D9; a decisão está em D6. **A curva emocional e a curva visual estão descoladas.**

**A-02 · P1 — qualificação chega na oitava dobra.** O sobretítulo do hero (*"Escola iniciática de saberes femininos"*) qualifica o **que**, não o **para quem**. O "para quem é e para quem não é" está em D8, penúltima dobra. Para tráfego morno funciona; para frio, a pessoa decide se fica muito antes disso.

**A-03 · P2 — D2 e D5 dizem a mesma coisa.** D2: *"A escola reúne psicologia profunda, espiritualidade encarnada, saberes do ventre e expressão artística num mesmo caminho."* D5: *"O Templo não separa o que a vida reuniu. Corpo, consciência, energia e expressão participam do mesmo processo."* Mesma ideia, vocabulário trocado. Uma das duas é corte de 20%.

**A-04 · P2 — teste dos 5 segundos, parcial.** O que é: sim. Próximo passo: sim. Para quem: não. O que ganha: *"O sagrado volta a habitar o corpo"* é imagem, não ganho reconhecível por quem chega de fora.

---

## 4. UI/UX — gate visual

| Dimensão | Nota | Observação |
|---|---:|---|
| Intenção | 8 | direção declarada e reconhecível; passa no teste do concorrente |
| Hierarquia | 7 | boa, mas os dois cards de D6 têm peso quase igual sendo que um está morto |
| Clímax | **4** | dois clímax, nenhum na decisão (A-01) |
| Consistência | **6** | 26 valores de cor fora do sistema (U-01) |
| Acessibilidade | 9 | skip-link, foco visível, `prefers-reduced-motion`, um H1, `alt` correto em decorativas e retrato |
| Acabamento | 8 | composição editorial, espaçamento e alinhamento sólidos |
| **Total** | **42/60** | limite exato de aprovação. Passa raspando |

**U-01 · P1 — sistema com furo.** `styles.css` tem **39 valores hexadecimais**, dos quais **13 em `:root`**. Sobram 26 cores soltas espalhadas pelo arquivo (`#f6ebc4`, `#ecc86f`, `#c9892b`, `#120d0d` e outras). Anti-padrão de sistema nº 5. Sistema com furo não é sistema, é sugestão.

**U-02 · P2 — os dois caminhos competem visualmente.** `experience--primary` diferencia a Mentoria, mas o card do Despertar ocupa peso quase igual carregando um aviso de indisponibilidade. O olho gasta atenção num item que não pode ser escolhido.

**O que está bem resolvido e merece registro:** a decisão de não gerar CTA quebrado quando o link está vazio (template + fallback) é a solução correta para o problema errado. Resolve elegantemente a consequência de uma lacuna que não deveria existir na hora de publicar.

---

## 5. Copy — gate anti-slop e voz

| Dimensão | Nota | Observação |
|---|---:|---|
| Diretividade | 6 | afirma, mas quase sempre no abstrato |
| Ritmo | 7 | boa variação de frase, prosa que respira |
| Confiança | 8 | não subestima quem lê |
| Autenticidade | 5 | soa humano; não soa Prana (C-02) |
| Densidade | 5 | D2 e D5 redundantes; há 20% para cortar |
| Tensão | **3** | um pivô só, na D3. Seis dobras de acúmulo depois dele |
| **Total** | **34/60** | abaixo de 42. **Tensão 3 reprova sozinha** |

**C-01 · P0 do gate de copy — listagem sem pivô.** É o tell estrutural mais caro da régua, e está por toda parte. A página é construída em séries paralelas de 3 e 4 elementos:

> "psicologia profunda, arte e espiritualidade encarnada" · "presença, voz e vida" · "corpo, ordem e ritmo" · "consciência, movimento, voz e lugar" · "corpo, voz, gesto e direção" · "Corpo, consciência, energia e expressão" · "Voz, canto, dança e imagem" · "sacerdotisa do ventre e da voz, artista, compositora e doula de passagem" · "sensíveis, criativas, inteiras demais"

Nove ocorrências. Isso é simetria perfeita de itens (anti-padrão 17 do gerador) somada a regra de três forçada e adjetivos em fila (gate anti-slop). **É a assinatura de máquina mais forte da página**, e não aparece em varredura de palavra — só em leitura de arco.

*Teste aplicado:* trocando D2 e D5 de lugar, nada quebra. Não há pivô entre elas.

**C-02 · P1 — a voz é a da direção criativa, não a da Prana.** Rodando o gate da `voz-prana.skill.md`:

| Item do gate | Resultado |
|---|---|
| conectores dela (*então, assim, tipo, e aí, sabe*), ≥1 por seção | **zero na página inteira** |
| abertura cinestésica | ✅ *"O sagrado volta a habitar o corpo"* |
| tratamento "tu"/"você" misturado | ✅ *"o teu corpo"*, *"no teu ritmo"* |
| CTA em convite-iniciático + selamento | ❌ *"Encontrar meu caminho"* é neutro. Ela diria *"quero atravessar o portal"* |
| selamento no fecho | ❌ D9 fecha em *"Habitá-la é o próximo gesto"*. Falta o *selado* — que é onde a voz dela é mais reconhecível |
| frases-âncora dela | **1 de 10 usadas**, e alterada: *"Eu guio não porque sei tudo. Eu guio porque vivo o caminho."* |
| vocabulário-assinatura | *campo* aparece 1× (corpus: 24×); *tesão*, *delícia*, *soberania*, *coroação*, *transmissão*, *ativação*, *frequência*: zero |
| red lines | ✅ sem tantra, seduzir, coach, mindset, melhor versão, serpente caída |

A régua diz: *"Três frases da peça lidas em voz alta precisam ser indistinguíveis da amostra."* Não passam. A página está numa versão editorial-premium da Prana — mais próxima de manifesto de marca de luxo do que da mulher que fala *"bah"*, *"que delícia"*, *"selado, selado, selado"*.

Isso pode ser decisão consciente de registro público. Se for, precisa estar **escrita** no `CREATIVE-DIRECTION.md` como desvio deliberado, com o motivo. Hoje não está: parece deriva, não escolha.

**C-03 · P2 — contraste binário virou tique.** Três ocorrências de "não é X, é Y": *"Não é um produto. É a casa…"* · *"O destino não é permanecer dentro de um curso. É habitar…"* · *"dedicação não é cobrança. É presença."* Uma é traço de estilo. Três é cadência de máquina.

**C-04 · P2 — título inventado onde havia título encontrado.** *"O Templo não está fora. É a tua alma habitando o corpo."* é bonito e não está no corpus dela. As dez frases-âncora do arquivo de voz — escritas por ela — estão sem uso. Título encontrado vence título inventado.

---

## 6. Consolidado

| ID | Achado | Eixo | Sev. |
|---|---|---|---|
| F-01 | funil sem terminal: 8 elementos, zero checkout | funil | **P0** |
| F-02 | Masterclass oculta na semana em que ela é divulgada | funil | **P0** |
| C-01 | listagem sem pivô; 9 séries paralelas; Tensão 3/10 | copy | **P0 (gate de copy)** |
| A-00 | classificação dos 4 eixos não foi escrita antes da construção | método | P1 |
| A-01 | clímax duplo, e nenhum coincide com a decisão | arquitetura | P1 |
| A-02 | qualificação de público só na dobra 8 | arquitetura | P1 |
| C-02 | voz da direção criativa no lugar da voz da Prana | copy | P1 |
| F-03 | placeholder visível em 50% da vitrine | integridade | P1 |
| F-04 | medição codificada e desligada | medição | P1 |
| U-01 | 26 valores de cor fora do sistema | design | P1 |
| A-03 | D2 e D5 redundantes | arquitetura | P2 |
| A-04 | teste dos 5 segundos incompleto | arquitetura | P2 |
| C-03 | contraste binário três vezes | copy | P2 |
| C-04 | frases-âncora dela sem uso | copy | P2 |
| U-02 | card morto competindo com card vivo | design | P2 |
| F-05 | rota relativa da Mentoria | técnico | P2 |

**Gate do gerador:** REPROVADO na entrada (classificação ausente) e na integridade (placeholder, medição desligada, destino do clique vazio).
**Gate da ui-ux:** 42/60 — aprovado no limite.
**Gate da copy:** 34/60 com Tensão 3 — REPROVADO.

---

## 7. Ordem de correção — e a decisão de fila

**Antes de qualquer correção desta página, uma pergunta de prioridade:** com 5 dias até 08/08/2026, corrigir a página-mãe não gera um real. A página que gera está pronta e não publicada.

**Recomendação de CEO: congelar esta página até 09/08/2026** e usar as próximas 48h em publicar a Masterclass. A única exceção que vale fazer agora é F-02, porque custa cinco minutos e conserta um erro que está acontecendo hoje.

| Quando | O que | Custo |
|---|---|---|
| **Agora** | preencher `links.felinas` com a URL da Masterclass e revelar o portal sazonal (F-02) | 5 min, depois que a Masterclass tiver URL |
| A partir de 09/08/2026 | reescrita de copy contra C-01 e C-02: um pivô por dobra, séries paralelas quebradas, frases-âncora dela no lugar das inventadas | meio dia |
| A partir de 09/08/2026 | clímax único movido para D6 (A-01) e qualificação promovida para o hero (A-02) | meio dia |
| A partir de 09/08/2026 | tokens: 26 cores soltas para `:root` (U-01) | 1h |
| Na publicação | ligar `analytics.enabled`, URL do Curso, URL pública da Mentoria (F-03, F-04, F-05) | depende de insumo |

---

## 8. O que esta auditoria não faz

Não altera nenhum arquivo da página. Auditor devolve defeito localizado com a direção da correção; só o redator altera copy e só o designer altera pixel (`ui-ux` §7.3, `copywriter` §esquadrão). Nada aqui é redesenho.

---

**Base:** `10-skills/gerador-web-designer-senior-continuum/referencias/{00,02,06}` · `10-skills/ui-ux-designer-senior-continuum/referencias/07` · `10-skills/copywriter-senior-continuum/referencias/04` · `voz-prana.skill.md` · `CLAUDE.md` §§6.3 e 9 · `STATUS.md` local
