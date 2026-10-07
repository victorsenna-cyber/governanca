# Tese visual e spec de implementação

> **Página:** inglês e oratória bilíngue para brasileiros  
> **Direção:** Editorial de presença  
> **Fase:** execução sobre a copy aprovada  
> **Data:** 30/07/2026  
> **Regra dura:** o design não reescreve a copy, não muda a ordem D0–D10 e não desloca o clímax da D8.
>
> **Revisão do hero:** a composição `voice-orbit` de D1 foi reprovada após auditoria visual. A hipótese posterior de retrato no hero também foi superada por decisão humana: a fotografia de Jéssica ficará na dobra sobre ela. Para o hero, prevalece `08-HERO-TIPOGRAFICO-IMPLEMENTADO.md`. As demais dobras e regras deste documento permanecem válidas.

## 1. Tese visual

A página transforma a metáfora “voltar o olhar para a conversa” em uma composição editorial sóbria. O grid de 76 px organiza todo o percurso como uma folha de trabalho; as superfícies alternam branco e off-white para criar ritmo sem converter a página em catálogo. O rubi fechado aparece uma única vez, na oferta, para que o pico visual coincida com o pico de decisão.

Sem fotografia real em alta resolução e autorizada, a primeira versão não simula um retrato. A âncora do hero será uma composição gráfica autoral de órbitas, linha de voz e ponto de presença. Ela representa o olhar que deixa de fugir e volta ao centro da conversa. Na seção de origem do método, caderno, gravação e fala serão representados por uma composição editorial abstrata, não por uma pessoa sintética.

### O que torna a direção reconhecível

- grid contínuo de 76 px, herdado como linguagem estrutural da referência da Débora;
- grandes chamadas em Fraunces, com corpo em Inter;
- linhas de leitura, margens amplas e números editoriais em vez de mosaico de cards;
- rubi `#6E1830` reservado para a D8;
- ouro `#C6A56C` usado como fio, borda e foco, nunca como preenchimento dominante;
- raios apenas de 8, 10 e 13 px;
- uma âncora gráfica de voz e olhar repetida com parcimônia no hero, na virada e no fecho.

### O que a página nunca faz

- luxo genérico preto e dourado;
- rosa infantil, neon ou gradiente decorativo excessivo;
- cards repetidos para cada item de conteúdo;
- fotografia de banco ou rosto sintético apresentado como Jéssica;
- selo “mais escolhido”, escassez, preço riscado ou recomendação automática de plano;
- cantos quadrados ou raios acima da escala aprovada.

## 2. Plano de conteúdo

| Bloco | Trabalho visual | Relação com a decisão |
|---|---|---|
| D0 | marca tipográfica e uma âncora para a oferta | reduz navegação de fuga |
| D1 | cartaz editorial assimétrico com âncora gráfica | entrega oferta, público, ganho e próximo passo |
| D2 | cena corporal + sintomas em pauta vertical | reconhecimento sem dramatização |
| D3 | faixa editorial mais densa, com pergunta isolada | torna visível o custo de adiar |
| D4 | sequência numerada em cinco movimentos | demonstra o mecanismo |
| D5 | inventário em linhas, não em cards | torna a entrega escaneável |
| D6 | narrativa em duas colunas + registro gráfico | sustenta origem e autoridade sem prova visual inventada |
| D7 | duas colunas de qualificação, com fecho central | aumenta autonomia e ajuste |
| D8 | dobra rubi inteira + card de vidro esfumaçado e borda dourada | clímax único; organiza a conversa antes dos planos |
| D9 | acordeão nativo | resolve atrito residual |
| D10 | fecho central e retorno da órbita ao ponto | conclui a metáfora e repete a ação |

## 3. Tese de interação

Há três movimentos intencionais:

1. **Entrada do hero:** três grupos entram na ordem de leitura em até 900 ms. O conteúdo já nasce no primeiro paint; JavaScript apenas acrescenta movimento.
2. **Retorno do olhar:** a âncora gráfica do hero recebe profundidade mínima por ponteiro e rolagem. A função é reforçar a metáfora, não criar espetáculo.
3. **Linha de decisão:** ao alcançar a D8, o traço dourado do card se torna nítido uma vez. A função é marcar o clímax.

Revelações de rolagem usam deslocamento máximo de 16 px e duração entre 480 e 620 ms. `prefers-reduced-motion` remove o movimento decorativo sem esconder conteúdo.

## 4. Tokens

### Cor

| Token | Valor | Uso |
|---|---|---|
| `--paper` | `#FCFBF8` | superfície branca |
| `--offwhite` | `#F4F0E8` | superfície alternada |
| `--ink` | `#231F20` | texto principal |
| `--ink-muted` | `#5F5558` | texto secundário |
| `--ruby` | `#6E1830` | superfície exclusiva da D8 |
| `--ruby-deep` | `#2D0C19` | vidro da oferta e áreas de apoio |
| `--gold` | `#C6A56C` | borda, foco, fios e numeração |
| `--grid-light` | `rgba(35,31,32,.075)` | grid nas superfícies claras |
| `--grid-gold` | `rgba(198,165,108,.10)` | grid da oferta |

### Tipografia

- display: Fraunces, Georgia, serif;
- corpo: Inter, system-ui, sans-serif;
- H1: `clamp(3rem, 7.2vw, 6.75rem)`;
- H2: `clamp(2.15rem, 4.7vw, 4.65rem)`;
- lead: `clamp(1.08rem, 1.6vw, 1.3rem)`;
- corpo: `clamp(1rem, 1.1vw, 1.075rem)`;
- microcopy: `0.82rem`;
- linha de leitura: 40 rem; wrap: 70 rem.

### Espaço, grade e forma

- grid visual: 76 px;
- espaçamento base: 4 px;
- escala de raio: 8, 10 e 13 px;
- alvo mínimo: 44 × 44 px;
- seções: entre 72 e 144 px conforme a voltagem;
- bordas: 1 px; foco: 3 px.

## 5. Spec por bloco

### D0 · Barra superior

**Intenção:** moldura e orientação.  
**Composição:** marca à esquerda; âncora discreta à direita.  
**Superfície:** papel com grid.  
**Estados:** link em repouso, sobre, foco e ativo.  
**Mobile:** marca abreviada visualmente sem remover o nome acessível.  
**Acessibilidade:** `header` e `nav`; link real para `#oferta`.

### D1 · Hero

**Intenção:** resolução 2 → 4.  
**Composição:** cartaz full-bleed; texto em 7 colunas, âncora gráfica em 5.  
**Superfície:** papel com grid e halo claro restrito à leitura.  
**Tipografia:** H1 no maior degrau claro; destaque apenas por itálico/cor em “confiança e coragem”.  
**Componentes:** CTA primário, microcopy, lista curta de formato.  
**Mobile:** gráfico sobe atrás/ao lado do final do título sem competir; CTA quase integral.  
**Movimento:** entrada em três grupos; profundidade mínima no gráfico.  
**Acessibilidade:** um único `h1`; CTA é botão porque abre diálogo; gráfico decorativo.

### D2 · Espelho

**Intenção:** identificação 4 → 6.  
**Composição:** leitura assimétrica; texto de cena e sintomas em pauta lateral.  
**Superfície:** off-white com grid.  
**Mobile:** uma coluna; sintomas mantêm separação por fios.  
**Acessibilidade:** lista semântica; nenhuma informação depende de cor.

### D3 · Custo

**Intenção:** perda 6 → 8.  
**Composição:** bloco curto e denso; pergunta em serif itálica isolada.  
**Superfície:** papel; borda rubi lateral de 3 px, sem fundo escuro.  
**Mobile:** mesma ordem, sem altura fixa.  
**Movimento:** uma revelação de bloco.

### D4 · Virada

**Intenção:** alívio e demonstração 8 → 6.  
**Composição:** cabeçalho amplo + cinco movimentos em sequência vertical alternada.  
**Superfície:** papel claro; linha de voz contínua como guia.  
**Componentes:** passos numerados, nota de integridade, CTA secundário de mesma ação.  
**Mobile:** número e conteúdo empilhados, sem linha atravessando o texto.  
**Acessibilidade:** lista ordenada; nota explícita, foco do CTA visível.

### D5 · Pilha

**Intenção:** resolução por desejo 6 → 7.  
**Composição:** título em coluna estreita e inventário de entrega em duas colunas de linhas editoriais.  
**Superfície:** off-white.  
**Mobile:** uma coluna, mesma ordem da copy.  
**Acessibilidade:** lista semântica; títulos `h3`.

### D6 · Origem e prova

**Intenção:** segurança 7.  
**Composição:** narrativa em coluna de leitura + composição gráfica de caderno/voz; prova anonimizada em linha editorial separada.  
**Superfície:** papel com grid.  
**Mobile:** narrativa antes do gráfico; o gráfico é decorativo.  
**Integridade:** nenhuma foto, nome ou certificação visual inventada. A linha de certificação continua bloqueada para publicação até conferência.

### D7 · Qualificação

**Intenção:** identificação honesta 7 → 7,5.  
**Composição:** duas colunas com títulos; fecho ocupando a largura total.  
**Superfície:** off-white.  
**Mobile:** “é para você” antes de “talvez ainda não”; marcadores diferem por forma e texto, não só por cor.

### D8 · Oferta

**Intenção:** decisão 7,5 → 9,5.  
**Composição:** seção rubi full-bleed; título antes do card. Dentro do card: conversa de diagnóstico como porta principal, referências de investimento em grupos e uma única ação no fim.  
**Superfície:** rubi com grid dourado; card `rgba(45,12,25,.78)`, borda ouro, raio 13 px.  
**Tipografia:** preço com algarismos tabulares; títulos claros; ouro apenas em rótulos e fios.  
**Componentes:** tabela individual, dois formatos alternativos, CTA primário, microcopy de autonomia.  
**Estados:** CTA repouso/sobre/foco/ativo/carregando/erro; não há estado recomendado de plano.  
**Mobile:** conversa continua antes dos preços; tabela vira quatro linhas empilhadas; formatos compartilhados permanecem abaixo; CTA ocupa a largura.  
**Movimento:** linha de borda ganha nitidez uma vez ao entrar; nada pulsa.  
**Acessibilidade:** tabela semântica no desktop e legível no mobile; contraste AA; foco ouro; nenhum preço depende da cor.

### D9 · FAQ

**Intenção:** reduzir atrito 9,5 → 6.  
**Composição:** perguntas em coluna de leitura larga.  
**Superfície:** papel com grid.  
**Componente:** `details/summary` nativo, fechado por padrão.  
**Estados:** repouso, sobre, foco, aberto.  
**Mobile:** alvo da linha inteira com mínimo de 56 px.  
**Acessibilidade:** pergunta completa no `summary`; indicador aberto/fechado não depende de cor.

### D10 · Fecho

**Intenção:** resolução 6 → 8.  
**Composição:** central, com largura de leitura e órbita retornando ao ponto.  
**Superfície:** off-white com grid.  
**Componentes:** CTA primário e microcopy.  
**Mobile:** CTA quase integral; conteúdo sem altura fixa.  
**Movimento:** revelação única da linha de fecho.

## 6. Componentes

### CTA de conversa

- **Função:** abrir a captura curta; não usar para navegação interna.
- **Variantes:** clara sobre papel; ouro sobre rubi.
- **Estados:** repouso; sobre por elevação de 2 px; foco com anel de 3 px; ativo com retorno imediato; carregando com largura preservada; erro explicado no diálogo.
- **Tokens:** `--ruby`, `--gold`, `--paper`, `--r-10`, `--shadow-action`.
- **Acessibilidade:** `button`; alvo mínimo de 44 px; nome acessível idêntico à copy.

### Captura curta

- **Função:** recolher o mínimo de contexto antes do WhatsApp.
- **Campos:** primeiro nome, WhatsApp, objetivo principal, consentimento.
- **Estados:** repouso, foco, preenchido, erro por campo, enviando, sucesso e falha de integração.
- **Acessibilidade:** `dialog` modal com título associado, foco inicial, armadilha de foco, `Esc`, retorno ao acionador, rótulos sempre visíveis e erro ligado por `aria-describedby`.
- **Gate:** sem número final ou endpoint, a prévia local não envia e não redireciona; informa o estado técnico sem fingir conversão.

## 7. Contraste previsto

| Elemento | Frente | Fundo | Razão | Exigido | Estado |
|---|---|---:|---:|---:|---|
| corpo claro | `#231F20` | `#FCFBF8` | 15,75:1 | 4,5:1 | passa |
| secundário claro | `#5F5558` | `#FCFBF8` | 6,93:1 | 4,5:1 | passa |
| corpo na oferta | `#FCFBF8` | `#6E1830` | 10,77:1 | 4,5:1 | passa |
| ouro na oferta | `#C6A56C` | `#6E1830` | 4,90:1 | 4,5:1 | passa |
| rótulo CTA claro | `#FCFBF8` | `#6E1830` | 10,77:1 | 4,5:1 | passa |
| borda/foco ouro | `#C6A56C` | `#6E1830` | 4,90:1 | 3:1 | passa |

## 8. Gates externos preservados

- novo número corporativo da Jéssica;
- endpoint `/exec` e escrita real na planilha;
- foto real em boa resolução, se aprovada para uso;
- documento da certificação antes de publicar a afirmação;
- aprovação humana da copy e do design;
- políticas de matrícula, cancelamento e reagendamento, se forem entrar na página.
