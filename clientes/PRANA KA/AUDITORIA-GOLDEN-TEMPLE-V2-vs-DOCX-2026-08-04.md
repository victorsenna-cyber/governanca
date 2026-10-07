# AUDITORIA — The Golden Temple V2 contra a bíblia de marca

> **Artefato:** `04 - web design/the-golden-temple-v2/`, estado de 04/08/2026 (pós-correção)
> **Fonte de marca:** `O TEMPLO DOURADO/TEXTOS/O TEMPLO DOURADO SITE.docx` (610 parágrafos, 6.586 palavras, 6 tabelas)
> **Réguas:** `gerador-web-designer-senior-continuum` · `ui-ux-designer-senior-continuum` · `copywriter-senior-continuum` · `voz-prana.skill.md`
> **Auditado em:** 04/08/2026 · America/Sao_Paulo

**Nota de estatuto da fonte.** O docx é material assistido e editado. Pela `voz-prana.skill.md`, ele é **referência de marca, não evidência de voz falada**. Portanto: o que ele define como mecanismo, inimigo, arquétipo, valor e ontologia **é fato de marca e cobra fidelidade**. O que ele traz como prosa não é obrigatoriamente o registro público da página.

---

## 0. Veredito

**A página está fiel ao tom da marca e ausente da substância da marca.**

A correção de 04/08/2026 fechou o que a auditoria anterior apontou: o funil tem terminal, o clímax é único e está na decisão, os tokens fecharam, a copy ganhou pivô e a voz dela voltou. Isso está verificado abaixo.

O que esta auditoria acrescenta é outra coisa. Medida contra a bíblia de marca, a página **removeu o conflito central do Templo Dourado**. O docx constrói uma jornada de heroína com vilão nomeado, mecanismo nomeado e um território declarado como sexualidade sagrada. A página entrega a jornada sem vilão, cita o mecanismo sem explicá-lo e substitui o território por "psicologia profunda e espiritualidade encarnada".

O docx é explícito sobre o risco disso:

> *"O Templo Dourado não é uma marca de bem-estar. É um movimento disruptivo e regenerativo."*

Hoje a página lê como marca de bem-estar sofisticada. Não por erro de execução: por subtração de conteúdo.

**Isto não é trabalho para esta semana.** A página-mãe está congelada até 09/08/2026 por DEC-2026-08-03-001, e nada aqui gera receita antes da Masterclass. Este documento é backlog datado, não fila.

---

## 1. O que a correção de 04/08/2026 fechou (verificado no código)

| ID anterior | Estado | Evidência |
|---|---|---|
| F-01 funil sem terminal | **FECHADO** | `config.js` com `curso` e `mentoria` em URL absoluta |
| F-03 placeholder na vitrine | **FECHADO** | as duas chaves preenchidas; `data-config-pending` não renderiza |
| F-05 rota relativa | **FECHADO** | `../mentoria/index.html` eliminado |
| U-01 tokens soltos | **FECHADO** | 38 hexadecimais no arquivo, **38 dentro de `:root`** |
| A-01 clímax duplo | **FECHADO** | D6 é a única dobra escura: `obsidian → obsidian-soft → ruby-dark`. D7 e D9 baixaram para campo claro |
| C-01 listagem sem pivô | **FECHADO** | pivô por dobra implantado |
| C-02 voz | **PARCIAL** | conectores, frases-âncora e selamento entraram. Ver §2.4 |
| A-03 D2 e D5 redundantes | **PARCIAL** | o texto diferenciou. A causa estrutural continua, ver §2.7 |
| F-02 Masterclass oculta | **ABERTO** | `links.felinas: ""`. Único P0 remanescente, e não é de implementação |
| F-04 medição | **ABERTO por decisão** | `analytics.enabled: false` |

**Um resíduo novo (H-01 · P2):** a seção D6 carrega `class="experiences section-ivory"` no HTML, e `.section-ivory` define fundo claro. `.experiences` sobrescreve com o gradiente escuro. A classe promete o contrário do que a seção é. Não quebra nada hoje; confunde manutenção amanhã.

---

## 2. Fidelidade ao docx

### 2.1 O inimigo não existe na página `[D-01 · P1]`

O docx dedica quatro blocos e duas tabelas inteiras a construir o antagonista, e é explícito sobre a necessidade dele:

> *"Todo mito precisa de uma sombra com nome. Aqui está o vilão do Templo Dourado: **O Guardião do Véu**."*

Ele vem com táticas tabeladas: a Vergonha, a Performance, a Crítica à Expressão Feminina, o Silêncio, a Ilusão do Príncipe, a Desconexão. E com a mentira que cada uma conta.

**Contagem na página:** "Poder Distorcido" 0 ocorrências. "Guardião do Véu" 0 ocorrências.

Há uma instrução literal no docx que a página cumpriu pela metade:

> *"A IDEIA NÃO É FALAR SERPENTE CAÍDA NA COPY, mas trazer 'poder distorcido' como símbolo disso."*

A página removeu o que devia remover e **não colocou o que devia colocar**. Sobrou o vazio.

**Consequência estrutural:** D3 nomeia um sofrimento ("Não existe mulher fria. Existe mulher que aprendeu a se calar") sem nomear a causa. A frase inteira do docx continua:

> *"Não existe mulher fria. Existe mulher que aprendeu a se calar. **O Guardião do Véu tem nome, e hoje você o desmascara.**"*

A página cortou justamente a metade que dá inimigo à dor. Sem antagonista, a página não tem contra o que lutar, e por isso lê gentil onde a marca se declara feroz.

**Direção de correção:** o docx traz pronta uma tabela de duas colunas, Poder Distorcido contra Poder Sagrado, com seis pares. É uma dobra de contraste inteira, escrita, esperando para ser usada.

### 2.2 O mecanismo é citado, nunca explicado `[D-02 · P1]`

"A Iniciação Dourada" aparece **uma vez**, dentro do card da Mentoria, como se fosse característica de produto. No docx ela é a frase-manifesto do mecanismo único da escola:

> *"A Iniciação Dourada: o caminho de retorno ao poder que nasce do ventre, onde a sexualidade deixa de ser sedução para o outro e se torna a fonte sagrada do teu poder soberano."*

E a versão curta, marcada no docx como destinada a bio, headline e abertura:

> *"Não te ensino a seduzir. Te reconduzo à tua própria fonte."*

**Contagem:** "seduzir" 0 ocorrências na página.

O campo 4 do brief do gerador é *mecanismo: o caminho em 3 a 5 passos e o nome próprio*. A página tem o nome próprio do método (S.E.R.) e não tem o nome próprio do mecanismo. São coisas diferentes: S.E.R. é como se faz, Iniciação Dourada é o que acontece.

### 2.3 O território foi trocado `[D-03 · P1]`

**Contagem na página:** sexualidade 0 · yoni 0 · êxtase 0 · serpente 0 · soberania 0 · coroação 0 · exílio 0. Prazer 4, dos quais parte é o nome do produto. Ventre 4.

O docx define o campo com clareza:

> *"devolve ao feminino o que foi roubado: o corpo como sagrado, o prazer como portal, a arte como prece."*

E nomeia o ativo que ninguém copia:

> *"Sua coragem, de unir o sagrado e o sensual sem pedir desculpa."*

A página fala de corpo, presença e travessia. Fala pouco de prazer e nada de sexualidade. **A coragem declarada como diferencial é exatamente o que a página não exerce.**

**Onde está a fronteira legítima:** a `voz-prana.skill.md` registra decisão dela de não usar "tantra" como rótulo de capa, para não ser lida como "só coisa sexual". Isso é red line válida e a página respeita corretamente. **Mas evitar o rótulo não é o mesmo que remover o assunto.** O docx traduz o assunto sem o rótulo o tempo inteiro: "prazer como presença", "o ventre como portal", "sexualidade sagrada", "poder que nasce do ventre".

**Decisão que precisa ser tomada por humano, não por auditoria:** ou a página assume o território com a linguagem que o docx já oferece, ou registra por escrito que a página-mãe é a camada mais pública do funil e que o território aparece só depois do clique. Hoje não há registro: parece omissão, não escolha.

### 2.4 A personalidade perdeu metade `[D-04 · P2]`

Docx, personalidade declarada: **Selvagem · Sagrada · Sensual · Poética · Feroz · Viva**.

A página entrega Sagrada, Poética e Acolhedora. Selvagem, Sensual e Feroz não aparecem em lugar nenhum do texto.

Isso conversa com a red line 7 da voz dela: *"Não infantiliza nem só suaviza, doce E feroz; sem o corte selvagem não é ela."*

O único momento com corte é D8, e ele veio atenuado: *"Como a Prana costuma dizer: se tu quer que a tua vida fique igual, não chega perto."* A atribuição em terceira pessoa amortece a frase. No docx ela é dita na primeira pessoa, sem amortecedor.

### 2.5 Os 4 registros de voz, com 1 em uso `[D-05 · P2]`

O docx tabela quatro registros e quando usar cada um:

| Registro | Quando | Na página |
|---|---|---|
| Poético-Devocional | manifestos, rituais, aberturas | **dominante, quase exclusivo** |
| Sábio-Ancestral | conteúdo de profundidade | **ausente**: nenhuma linhagem citada |
| Acolhedor-Selvagem | stories, comunidade, partilhas | **ausente** |
| Estratégico-Visionário | vendas, posicionamento, CTA | presente nos CTAs |

Uma página de 9 dobras no mesmo registro é o equivalente textual da curva plana. As dobras de método e de dimensões pedem o Sábio-Ancestral, que é onde a marca prova profundidade em vez de afirmá-la.

### 2.6 A entrega de cada passo existe no docx e não foi usada `[D-06 · P1]`

O docx define cada um dos 5 passos com **Fundamento · Pergunta-guia · Entrega**:

| Passo | Entrega, no docx |
|---|---|
| Aterrar | sair da dissociação, criar solo seguro para a jornada |
| Compreender | clareza mental, o inconsciente tornado consciente |
| Alquimizar | libertação vibracional, campo energético renovado |
| Ressoar | expressão autêntica, criatividade destravada |
| Corporificar | The Art of Living Devotion |

A página traz nome, descrição e pergunta-guia. **"Entrega" aparece 0 vezes.**

Isso é diretamente o que a auditoria anterior chamou de A-04, teste dos 5 segundos incompleto no item "o que ganha". **A resposta estava escrita no docx desde sempre.** Cinco linhas de ganho concreto, prontas, não usadas.

### 2.7 A página separa o que o docx unifica `[D-07 · P1]`

Este é o achado estrutural, e é a causa real da redundância que a auditoria anterior tratou como problema de texto.

O docx apresenta uma **estrutura dupla**: 3 Pilares atravessados por 4 Dimensões. E entrega o mapa de amarração:

```
ATERRAR      → Corpo    → Espiritualidade Encarnada
COMPREENDER  → Mente    → Psicologia Profunda
ALQUIMIZAR   → Energia  → Multidimensional
RESSOAR      → Voz/Arte → Expressão Artística
CORPORIFICAR → Vida     → Soberania & Liderança
```

**Cada passo tem uma dimensão como fundamento.** São o mesmo eixo visto de dois ângulos.

A página os separa em duas dobras distantes: D4 traz os passos, D5 traz as dimensões, e nenhuma das duas diz que uma é o fundamento da outra. Por isso as duas soam repetitivas: são a mesma informação apresentada duas vezes sem o fio que as liga.

**Direção de correção:** a correção certa não é cortar D5. É amarrar cada passo à sua dimensão, como o docx faz, e devolver a D5 uma função própria. E há uma pista: o docx dá cinco linhas nesse mapa, incluindo **Soberania & Liderança**, que a página não lista entre as dimensões.

### 2.8 Ontologia visual: 2 de 10 símbolos `[D-08 · P2]`

Docx, identidade visual: **Dourado e Rubi Vinho · Serpente NAJA · Rosas · Lótus · Velvet Gold · ANKH · Nagas Wings · Ventre · Sol e Lua · SRI YANTRA · Vesica Pisces · Flor da Vida**.

Bundle: `flower-of-life.svg`, `vesica-piscis.svg`, `hero-orb.svg`.

Dois dos símbolos declarados estão presentes, e são os dois mais genéricos da lista. Flor da Vida e Vesica Piscis aparecem em qualquer marca de espiritualidade. **Naja, rosa e ankh são os que ninguém mais tem**, e são os que faltam. É o inverso do anti-padrão 20 da ui-ux: o elemento de marca não virou o prato, sumiu da cozinha.

**A paleta, ao contrário, está correta.** Rubi tem 8 usos contra 37 do ouro, e está reservado para os dois momentos de tensão: o gradiente do custo em D3 e o clímax de D6. Isso é uso maduro de paleta bicolor, e merece registro como acerto.

### 2.9 Missão, visão e essência ausentes `[D-09 · P2]`

O docx traz, prontas:

- **Missão:** *"Guiar mulheres e seres sensíveis do exílio de si ao templo vivo da própria soberania."*
- **Visão:** ser referência em templo de sabedoria feminina encarnada do novo mundo.
- **Essência:** Zensual. E: *"Ouro que nasce do amor."*

Nenhuma aparece. A missão em particular é a melhor frase disponível para a dobra da casa: ela diz de onde a pessoa sai e aonde chega, em uma linha, com as palavras da marca. A página usa no lugar dela uma construção autoral que diz menos.

---

## 3. Gates re-rodados no estado atual

| Gate | Antes (03/08/2026) | Agora | Nota |
|---|---:|---:|---|
| Visual (ui-ux) | 42/60 | **48/60** | clímax e consistência subiram; ontologia visual segura a Intenção |
| Copy | 34/60 | **44/60** | Tensão de 3 para 8; Autenticidade limitada pela ausência do território |
| Publicação (gerador) | reprovado | **reprovado por F-02** | único P0: Masterclass sem URL |

**Brief do gerador, campos ainda incompletos:** campo 4 (mecanismo, ver D-02), campo 5 (inventário de provas: a página segue sem prova de terceiro, o que é correto enquanto não houver autorização) e campo 9 (destino do clique: as URLs existem, o que acontece nos 5 minutos seguintes continua indefinido).

---

## 4. Consolidado

| ID | Achado | Sev. | Fonte da correção |
|---|---|---|---|
| F-02 | Masterclass sem URL no portal sazonal | **P0** | publicar a Masterclass |
| D-01 | o inimigo nomeado não existe na página | P1 | docx, tabelas 1 e 2 |
| D-02 | mecanismo citado, nunca explicado | P1 | docx §Mecanismo único |
| D-03 | território sensual removido sem decisão registrada | P1 | decisão humana necessária |
| D-06 | a entrega de cada passo existe no docx e não foi usada | P1 | docx §5 passos |
| D-07 | passos e dimensões separados; o docx os unifica | P1 | docx §Espiral do S.E.R. |
| D-04 | personalidade sem selvagem, sensual e feroz | P2 | docx §Personalidade |
| D-05 | 1 dos 4 registros de voz em uso | P2 | docx, tabela 4 |
| D-08 | 2 de 10 símbolos da ontologia | P2 | docx §Identidade visual |
| D-09 | missão, visão e essência ausentes | P2 | docx §Golden Circle |
| H-01 | `section-ivory` numa seção escura | P2 | higiene de código |
| F-04 | medição desligada | P1 por decisão | autorização |

---

## 5. Ordem de correção, a partir de 09/08/2026

| # | O que | Por que primeiro |
|---:|---|---|
| 1 | **decidir o território** (D-03) | é decisão humana e condiciona tudo abaixo. Assumir o campo, ou registrar por escrito que a página-mãe é a camada pública e o território vem depois do clique |
| 2 | nomear o inimigo (D-01) | devolve conflito à página. A tabela do docx já é uma dobra pronta |
| 3 | explicar o mecanismo (D-02) | dá nome próprio ao que a escola faz, além do nome do método |
| 4 | amarrar passos e dimensões (D-07) e trazer a entrega (D-06) | resolve a redundância pela raiz e responde "o que eu ganho" |
| 5 | missão do docx na dobra da casa (D-09) | troca texto autoral por texto de marca, que diz mais |
| 6 | registro Sábio-Ancestral em uma dobra (D-05) e corte selvagem em D8 (D-04) | devolve as duas metades que faltam da personalidade |
| 7 | ontologia visual (D-08) e higiene (H-01) | acabamento |

**Nada disso entra antes de 09/08/2026.** Até lá a página-mãe segue congelada e a fila é a Masterclass.

---

## 6. O que não é defeito, e fica registrado como acerto

- **Ausência de "tantra" e de "serpente caída":** cumprimento correto de duas red lines, uma da skill de voz e outra escrita no próprio docx.
- **Paleta:** rubi reservado para custo e clímax é uso maduro de bicromia, não subutilização.
- **Ausência de prova de terceiro:** correta enquanto não houver depoimento autorizado. Buraco declarado vale mais que prova fabricada.
- **Felinas fora da página:** correto. O docx as coloca na Fase 4, Reinar e Celebrar, e a página-mãe não é o lugar delas.
- **As 4 fases da Mentoria:** conferidas contra o docx, batem uma a uma, inclusive os oito Portais do Ventre na fase 2.
- **Frases canônicas em uso:** "Você não vem aprender, você vem recordar", "Não existe mulher fria...", "Eu guio não porque sei tudo...", "Assim é, assim pulsa, assim desperta". Todas conferidas no docx, todas literais.

---

**Base:** `O TEMPLO DOURADO SITE.docx` · `AUDITORIA-GOLDEN-TEMPLE-V2-2026-08-03.md` · `CORRECAO-GOLDEN-TEMPLE-V2.md` · `COPY-GOLDEN-TEMPLE-V2.md` · `voz-prana.skill.md` · `CLAUDE.md` §§6.3 e 9
