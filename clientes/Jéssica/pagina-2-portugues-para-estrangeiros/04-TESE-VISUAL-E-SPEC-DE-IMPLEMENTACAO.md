# Tese visual e spec de implementação

> **Página:** português brasileiro para estrangeiros
> **Direção:** Editorial de conversação
> **Fase:** direção antes da copy + execução sobre texto aprovado
> **Data:** 03/08/2026
> **Regra:** o design não altera a ordem D0–D10, não reescreve a copy e reserva o contraste máximo para D8.

## 1. Visual thesis

**Uma página editorial quente, com papel claro, fotografia real e uma linha contínua de conversa que aproxima Jéssica da vida cotidiana do aluno sem recorrer a bandeiras, turismo ou iconografia genérica.**

É uma peça irmã da Página 1, mas não uma duplicação. Preserva rubi, dourado contido, papel, serifas e sobriedade. Troca o cartaz tipográfico puro por uma primeira dobra guiada por fotografia real e por um gesto gráfico próprio: a **linha de conversa**, um fio rubi que atravessa a página, muda de direção nos pivôs e se torna dourado apenas no clímax.

## 2. Content plan

1. **Hero:** vida em construção no Brasil, entrega concreta e uma foto real dominante.
2. **Support:** cena de conversa, custo de depender de tradução e virada para prática ao vivo.
3. **Detail:** método, o que está incluído, rosto da professora, depoimentos contextualizados e qualificação.
4. **Final CTA:** ritmo, preço publicável, captura local segura, FAQ e fecho.

## 3. Interaction thesis

1. **Entrada do hero:** texto e fotografia chegam em dois tempos, em até 800 ms; o conteúdo já nasce visível e nenhuma ação espera JavaScript.
2. **Linha de conversa:** um traço fino acompanha o progresso da leitura e muda de rubi para dourado ao entrar em D8. Serve como orientação e assinatura, não como decoração pulsante.
3. **Mudança de idioma:** troca na mesma URL, com transição curta de opacidade, foco preservado e anúncio em `aria-live`.

Hover, foco, abertura de FAQ e diálogo completam a interação. `prefers-reduced-motion` remove deslocamento e deixa somente mudança instantânea ou opacidade curta.

## 4. Cinco decisões de direção

1. **Quem chega:** pessoa estrangeira, quase sempre no celular, que compara uma relação de aprendizado ao vivo e pode estar cansada de estudar sozinha.
2. **Sensação comprada:** proximidade adulta.
3. **Extremo:** editorial de presença humana, com fotografia ampla, texto curto e estrutura de publicação impressa.
4. **Nunca faz:** bandeira do Brasil como tema, cartão-postal de Florianópolis, verde-amarelo, colagem turística, rosa infantil, luxo preto e dourado, cards repetidos, app mockup, gradiente neon, ícone por benefício.
5. **Elemento memorável:** a linha de conversa que conecta o primeiro olhar ao botão final.

### Teste do concorrente

Sem marca e sem texto, a combinação de retrato real da professora, rubi concentrado, linha contínua e diagramação editorial ainda é reconhecível. Um curso genérico de idioma não poderia assinar a peça sem parecer estar usando a identidade da Jéssica.

## 5. Fotografia

### Hero

- arquivo de origem: `contexto/fotos/WhatsApp Image 2026-08-02 at 19.43.30.jpeg`;
- enquadramento vertical com Jéssica e laptop;
- uso em plano dominante, do centro para a direita;
- gradiente de papel protege a coluna de texto;
- o rosto permanece visível no primeiro viewport;
- `object-position` calibrado separadamente no celular.

### Fundadora

- arquivo de origem: `contexto/fotos/WhatsApp Image 2026-08-02 at 19.43.310.jpeg`;
- retrato em blazer rubi;
- uso em D6, com recorte quase quadrado;
- nenhuma pele recebe filtro de cor artificial.

### Depoimentos

Os prints não entram no bundle nesta fase. A página usa texto anonimizado, com a nota explícita de que veio de alunos de inglês e foi traduzido do português.

## 6. Tokens

### 6.1 Cor

| Token semântico | Valor | Uso |
|---|---|---|
| `--surface-paper` | `#FBF8F3` | fundo dominante |
| `--surface-warm` | `#F1EAE1` | alternância e respiro |
| `--surface-ink` | `#1D191A` | faixa de custo e rodapé |
| `--surface-ruby` | `#6E1830` | clímax D8 |
| `--text-strong` | `#201B1C` | corpo principal |
| `--text-muted` | `#64585B` | texto secundário |
| `--text-inverse` | `#FFF9F3` | texto sobre superfícies densas |
| `--brand-ruby` | `#6E1830` | ação e assinatura |
| `--brand-ruby-dark` | `#4B1021` | hover e profundidade |
| `--brand-gold` | `#D4B06A` | foco e fio no clímax |
| `--border-soft` | `rgba(32,27,28,.16)` | divisórias |
| `--grid-soft` | `rgba(32,27,28,.055)` | malha de papel |
| `--focus-ring` | `#D4B06A` | foco sobre rubi/ink |

Dominância: papel e quente ocupam mais de 85% da página; rubi aparece em ação e D8; dourado fica abaixo de 5% da área.

### 6.2 Tipografia

- display: `Newsreader`, Georgia, serif;
- corpo: `Manrope`, Arial, sans-serif;
- H1: `clamp(3.2rem, 7.1vw, 7.1rem)`;
- H2: `clamp(2.3rem, 4.8vw, 4.8rem)`;
- H3: `clamp(1.3rem, 2vw, 1.75rem)`;
- lead: `clamp(1.08rem, 1.5vw, 1.28rem)`;
- corpo: `clamp(1rem, 1.05vw, 1.075rem)`;
- microcopy: `0.84rem`;
- números: variante tabular;
- largura de leitura: 42 rem;
- largura ampla: 78 rem.

### 6.3 Espaço, grade e forma

- base: 4 px;
- escala: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128;
- grade: 12 colunas desktop, 4 colunas mobile;
- grid visual: 76 px;
- raios: 0, 8, 10 e 13 px;
- borda: 1 px;
- anel de foco: 3 px + afastamento de 3 px;
- alvo de toque: mínimo 44 × 44 px;
- seção: 72 a 144 px conforme voltagem.

### 6.4 Elevação

| Token | Função |
|---|---|
| `--shadow-photo` | separar fotografia do papel sem aparência de card |
| `--shadow-dialog` | modal |
| `--shadow-action` | hover do CTA, deslocamento máximo de 2 px |

A tela nunca mostra mais de dois níveis ao mesmo tempo.

## 7. Limites medidos de copy

| Elemento | Limite EN | Limite PT-BR |
|---|---:|---:|
| sobretítulo | 64 | 72 |
| H1 | 68 | 76 |
| subtítulo do hero | 190 | 210 |
| H2 | 70 | 78 |
| título de item | 42 | 48 |
| item de lista | 120 | 138 |
| botão principal | 34 | 30 |
| microcopy | 150 | 170 |
| pergunta de FAQ | 88 | 98 |

Quebras serão conferidas em 375, 390, 768 e 1440 px nos dois idiomas. A versão em português pode ocupar uma linha a mais no corpo, mas o H1 permanece em no máximo três linhas no celular.

## 8. Spec por bloco

### D0 · topbar

- **Intenção:** orientação sem criar saída lateral.
- **Composição:** marca à esquerda; âncora de oferta e alternador de idioma à direita.
- **Superfície:** papel translúcido com borda inferior.
- **Estados:** repouso, sobre, foco e pressionado.
- **Mobile:** esconder a âncora de oferta; manter marca e idioma.
- **Acessibilidade:** `header`, `nav`, grupo de botões com `aria-label` e `aria-pressed`.

### D1 · hero

- **Intenção:** resolução 2 -> 4.
- **Composição:** full-bleed assimétrica; copy em 7 colunas, imagem real em 5.
- **Superfície:** papel com grid e gradiente protetor.
- **Tipografia:** H1 no maior degrau; apenas “life”/“vida” em itálico rubi.
- **Componentes:** CTA, microcopy e três sinais de formato.
- **Mobile:** imagem vira plano inferior direito; texto permanece legível e CTA cabe no primeiro viewport.
- **Movimento:** entrada em dois grupos; sem esconder conteúdo.
- **Acessibilidade:** um `h1`; imagem com alt contextual; botão real.

### D2 · espelho

- **Intenção:** identificação 4 -> 6.
- **Composição:** frase ampla à esquerda; cena e sintomas em coluna pautada.
- **Superfície:** warm.
- **Mobile:** uma coluna; primeira cena antes da lista.
- **Acessibilidade:** lista semântica, sem depender de cor.

### D3 · custo

- **Intenção:** resolução por perda 6 -> 8.
- **Composição:** faixa escura curta, texto de leitura e pergunta grande.
- **Superfície:** ink; ainda não usar o rubi do clímax.
- **Mobile:** sem altura fixa.
- **Movimento:** linha de conversa muda de direção, sem parallax.

### D4 · virada e método

- **Intenção:** alívio com direção 8 -> 6.
- **Composição:** título amplo + cinco movimentos em sequência numerada, sem cards.
- **Superfície:** papel com linha de conversa.
- **Componentes:** lista ordenada e CTA secundário.
- **Mobile:** número sobre título; não atravessar texto com a linha.
- **Integridade:** chamar de princípios da abordagem, não protocolo científico.

### D5 · entrega

- **Intenção:** desejo tangível 6 -> 7.
- **Composição:** título estreito + inventário em linhas editoriais.
- **Superfície:** warm.
- **Mobile:** uma coluna.
- **Acessibilidade:** lista e títulos reais.

### D6 · professora e prova

- **Intenção:** segurança 7 -> 7,5.
- **Composição:** retrato real em 5 colunas, narrativa em 7; três depoimentos em sequência abaixo.
- **Superfície:** papel.
- **Integridade:** nota visível diferencia prova da forma de ensinar de prova do produto novo.
- **Mobile:** retrato antes da narrativa; citações sem carrossel.

### D7 · qualificação

- **Intenção:** identificação honesta 7,5 -> 7.
- **Composição:** duas colunas abertas, separadas por filete, sem caixas.
- **Superfície:** warm.
- **Mobile:** “serve” antes de “talvez não”.
- **Acessibilidade:** símbolos acompanhados de texto; nenhuma cor carrega significado sozinha.

### D8 · oferta

- **Intenção:** decisão 7 -> 9,5.
- **Composição:** faixa rubi full-bleed; ritmo semanal e preço avulso em linhas; CTA central.
- **Superfície:** rubi com grid dourado sutil; sem vidro repetido da Página 1.
- **Tipografia:** preço tabular em display; ouro apenas em rótulo e foco.
- **Mobile:** opções empilhadas, preço antes do CTA, sem tabela horizontal.
- **Integridade:** não exibir valores divergentes nem selo de recomendação.

### D9 · FAQ

- **Intenção:** segurança 9,5 -> 6.
- **Composição:** uma coluna larga de `details/summary`.
- **Superfície:** papel.
- **Estados:** fechado, sobre, foco e aberto.
- **Acessibilidade:** linha inteira acionável, alvo mínimo 56 px.

### D10 · fecho

- **Intenção:** resolução 6 -> 8.
- **Composição:** central, amplo, com a linha de conversa terminando no CTA.
- **Superfície:** warm.
- **Mobile:** CTA quase integral.
- **Movimento:** final curto da linha; removido em movimento reduzido.

## 9. Componentes e estados

### CTA de conversa

- `button`, nunca `div` clicável;
- variantes papel e rubi;
- repouso, sobre, foco, ativo, carregando e erro;
- largura preservada no carregamento;
- mesmo verbo em todas as portas.

### Alternador de idioma

- dois botões compactos: English e Português;
- não navegar, não recarregar e não mudar o foco;
- estado atual em `aria-pressed` e contraste de forma, não só cor;
- toda mudança anunciada em região viva.

### Captura curta

- `dialog` nativo;
- título e descrição associados;
- rótulos sempre visíveis;
- validação ao sair do campo ou enviar;
- erro em texto e com `aria-describedby`;
- `Esc`, clique no backdrop, foco preso e retorno ao acionador;
- sucesso de prévia informa claramente que nada foi enviado.

### FAQ

- `details/summary` nativo;
- pergunta inteira clicável;
- indicador em texto/forma;
- informação essencial permanece fora do acordeão.

## 10. Contraste previsto

| Elemento | Frente | Fundo | Exigência |
|---|---|---|---:|
| corpo claro | `#201B1C` | `#FBF8F3` | 4,5:1 |
| texto secundário | `#64585B` | `#FBF8F3` | 4,5:1 |
| corpo escuro | `#FFF9F3` | `#1D191A` | 4,5:1 |
| corpo no clímax | `#FFF9F3` | `#6E1830` | 4,5:1 |
| CTA rubi | `#FFF9F3` | `#6E1830` | 4,5:1 |
| foco dourado no rubi | `#D4B06A` | `#6E1830` | 3:1 |

As razões serão medidas no QA e anexadas ao gate. Par que não passar será corrigido no token, não no elemento isolado.

## 11. Performance e segurança

- duas imagens locais apenas, dimensionadas e com `width`/`height`;
- hero usa `fetchpriority="high"`; fundadora usa lazy loading;
- fontes com `display=swap` e fallback local;
- zero biblioteca JavaScript;
- conteúdo integral visível sem JS em inglês;
- nenhum fetch, pixel, endpoint, número de WhatsApp ou dado sensível no bundle;
- formulário guarda dados apenas na memória da página atual e os descarta ao recarregar;
- imagens originais permanecem preservadas em `contexto/`.

## 12. Veredito da direção

**PASSA para copy e execução local.** A direção tem uma ideia dominante, usa fotografia real, diferencia a Página 2 sem romper a marca e deixa o clímax para a oferta.
