# 02 · DIREÇÃO VISUAL · Página da VSL · Eneagrama para Líderes

> STATUS: **fonte · etapa 2 do circuito de página** (`00-core/roteador/ARVORE-ESCRITA.md` §6) · 16/10/2026 · skill `10-skills/ui-ux-designer-senior-continuum/` em **modo DIREÇÃO** (módulos 00, 01, 02, 03, 04, 05; papéis diretor de arte e designer de sistema, em modo sequencial) · entrada: `01-FISICA.md` (esqueleto V0 a V6, curva, §6 briefing visual por bloco).
> **Esta etapa não escreve copy e não muda a ordem das dobras.** Entrega a direção declarada, os tokens, a grade e a tabela de **limite de caracteres por bloco** (§8) que a etapa 3 herda. Não desenha tela (isso é a etapa 4, modo execução, depois da copy aprovada).
> **Regra da skill que governa em conflito:** acessibilidade e legibilidade > identidade da marca > direção escolhida > gosto. Nenhum valor abaixo foi escolhido sem par de contraste conferido (§9).

---

## 0. Decisão de identidade: qual paleta vale (a etapa 1 deixou comigo)

**Vale a identidade do site novo da Débora (`04 - web design/novo funil + páginas/site.css`): papel quente, verde-musgo, argila, Fraunces + Inter.** A paleta da `DIRECAO-VISUAL-V2.md` (papel frio `#FAF8F3`, petróleo, dourado) fica **aposentada para esta página**. A **disciplina** da V2 fica: poucas cores, senoide por peso e não por matiz, um único clímax escuro.

| Por que o site novo e não a V2 | Fato |
|---|---|
| A página mora em `deboradelgado.space/lideres/` e o comprador atravessa o site e a plataforma | o site novo é a cara atual; a V2 foi escrita para a página *Seu Eixo* (workshop, nome morto desde 17/07, workshop encerrado em 08/10) |
| O item 3 da pilha, *Luz e Sombra da sua Liderança*, **é** a página `luzsombra.html` do site novo; os itens 2 e 4 vivem nas páginas `p-*.html` | o produto entrega a identidade do site; uma landing em outra paleta anuncia uma coisa e entrega outra (atrito de confiança) |
| A foto tratada (`debora-d6.webp`) foi corrigida para papel quente e verde-musgo (`05 - design/fotos/PLANO-FOTO-DEBORA.md`) | casa com a paleta nova sem retrabalho |

**O que é herdado do site novo:** `#F6F1EA` (papel), `#FFFDF9` (card), `#2F5245` (verde-escuro de título), `#3F6B57` (verde de marca), `#A86B52` → **escurecido** para `#8A4B2F` (o `#A86B52` do site dá 4,0:1 com texto branco e reprova AA em texto pequeno), Fraunces + Inter.
**O que é retirado do site novo, e por quê:** o card verde em gradiente como hero (vira template e ocupa o lugar do clímax) · o octaedro de 300 px a 7% de opacidade como fundo (teste de remoção: se tirar, nada cai; é decoração) · botões em pílula e cartões de raio 28 (raio fora de escala) · `--salvia` e `--dir` (segunda e terceira cor de apoio) · o fundo com degradê terminando em pêssego (diluiria o amanhecer, §2.5).
**O que é retirado da V2:** petróleo, dourado, musgo-profundo e barro como cores · backdrop-blur no sticky.

---

## 1. Os dois estados da página e o que isso exige do visual

Do `01-FISICA.md`: **antes do pitch** só V0, V1 e rodapé; **depois do pitch** (ou na volta de quem já ouviu) V2 a V6 + sticky + link do topo aparecem **abaixo do player, sem mover nada acima dele** (zero CLS). O visual precisa funcionar nos dois estados, e o salto de um para o outro **é** o clímax: a página passa de calma (papel, verde, uma voz) para decisão (a superfície escura, o calor, o maior número, o maior botão).

---

## 2. Direção de arte declarada

### 2.1 As cinco perguntas

1. **Quem usa e em que estado chega?** Líder (gestor, dono, quem direciona pessoas), 35 a 55 anos, vindo de anúncio no Instagram/Facebook, **no celular, 360 a 430 px, entre uma tarefa e outra**, cansado do "combinado que não acontece" (`[DD-LEX-04, D]`). Consciente do problema, não da solução. Cético. Vai assistir 20 minutos **se** a página não o apressar nem o enfeitar.
2. **Que sensação a marca compra?** **Discernimento sereno** (tom de marca da etapa 1). Não carisma, não urgência, não acolhimento terapêutico. Uma sensação dominante: *"alguém sensata está me mostrando algo com calma"*.
3. **Qual o extremo?** **Contenção.** Papel, tinta e verde por 90% da página; a superfície escura e o calor aparecem **uma vez**, na oferta. Direção morna seria cor distribuída por igual (V2 diagnosticou exatamente isso: 25 hexes, senoide por matiz, clímax morto).
4. **O que esta marca nunca faz?** Lista em §2.4.
5. **Elemento memorável (um só): *a oferta amanhece*.** A página inteira é papel frio-quente e verde. Só na oferta aparece o **calor** (um clarão âmbar atrás do cartão escuro, o botão âmbar, o selo âmbar). Âmbar não existe em nenhum outro pixel da página. A pessoa, ao descrever a página a alguém, diz: "ficou tudo calmo e, na hora da oferta, acendeu". Vem do "CTA com brilho de amanhecer" do site (`.cta-wrap::before`), reduzido a um uso.

### 2.2 Linha do catálogo: **EDITORIAL**, adaptada à marca

Serifa de display com contraste e itálico raro no título, sans de leitura no corpo, fundo de papel, tinta quase preta, **um** acento, colunas na largura de leitura, filete fino como divisória, movimento discreto. **Serve** porque o público decide por autoridade e discernimento e a página tem de sustentar 20 minutos de atenção sem competir. **Trai** quando o produto é impulso: o ticket é R$ 297 (baixo) e a página é de resposta direta. Mitigação declarada: o editorial fica na tipografia, na cor e na margem; **a mecânica é de VSL** (play como objeto dominante, oferta revelada no pitch, botão grande, garantia colada). Duas linhas rejeitadas: *Minimalismo refinado* (a página não tem depoimento, logo, nem contador, E12; vazio sem prova lê como desconfiança) e *Energia de varejo* (contraria o tom, e a escassez é por data com motivo, não por pressão).

**Fonte, a decisão tipográfica declarada.** Display **Fraunces** (serifa de contraste e opsz variável: no título grande ela ganha traço fino e caráter, no tamanho pequeno ganha robustez). Leitura **Inter**. Inter é a "família neutra" que a lista de veto (§0.5 item 1 da skill) manda justificar: **motivo**: continuidade com o site e a plataforma, cobertura completa de pt-BR, legibilidade a 14 a 17 px em tela pequena, números tabulares. A assinatura tipográfica está em Fraunces, não em Inter.

### 2.3 Teste do concorrente e teste do esqueleto

- **Concorrente:** um curso de Eneagrama concorrente usa roxo/dourado, mandala, céu estrelado ou preto e dourado. Nenhum assinaria papel quente + verde-musgo + serifa editorial + um único clarão âmbar na oferta. **Passa.**
- **Esqueleto (sem marca e sem texto):** sobra uma página de papel com margem larga, um objeto de vídeo dominante, uma faixa escura com um brilho quente atrás, filetes finos e numerais em serifa. É reconhecível. **Passa.**
- **Lista de veto, 10 itens:** (1) família neutra sem motivo: motivo declarado em §2.2 · (2) gradiente roxo/azul: não há · (3) mesmo raio em tudo: escala 0/6/12/24 com função, §3.6 · (4) ícone por item: nenhum · (5) sombra igual em tudo: três níveis com função, §3.7 · (6) fundo chapado do topo ao rodapé: tratamentos A, B e clímax, §4.4 · (7) ilustração de gente/imagem sintética: só a foto real tratada · (8) vidro: proibido · (9) seis cores em pesos iguais: 4 famílias, dominância declarada, §3.1 · (10) direção que evapora após a primeira tela: tudo vem de tokens e o âmbar só é **gasto** na oferta. **Nenhum item presente.**

### 2.4 O que esta página NUNCA faz (visual)

1. **Fundo escuro em qualquer lugar fora de V2.** (O player é *objeto*, não superfície: moldura clara, sem faixa escura em volta; §5.)
2. **Âmbar fora de V2.** Nem em link, nem em selo, nem em hover de outro bloco.
3. Segundo acento (salvia, ciano, dourado, roxo). Vermelho (queima o vocabulário de erro).
4. Pílula (`border-radius: 999px`) e qualquer raio fora da escala.
5. Ícone por item, ícone de "garantia/escudo", medalha, selo redondo, parede de selos, emoji, check-verde-por-item.
6. Vidro, `backdrop-filter`, blur de fundo, glassmorphism.
7. Contagem regressiva, barra de vagas, pulso, tremor, "pisca-pisca" (E9: escassez é por data dita por extenso).
8. Preço riscado, "de/por", selo "mais escolhido" (E8, componente de oferta §3.5 da skill).
9. Aspas decorativas gigantes, cartão de depoimento, avatar redondo com estrelas, logo de cliente (E12).
10. Foto de banco, ilustração vetorial de gente, render, imagem sintética apresentada como real.
11. Texto em caixa alta fora de rótulo curto (eyebrow, tag). Título e frase nunca em caixa alta.
12. Animação de texto, parallax, revelação por rolagem, autoplay, rolagem automática, carrossel.
13. Octaedro como fundo. Permitido apenas como selo de 22 px no rodapé.
14. Texto centralizado em V3, V4 e V5 (centralizado só em V6 e no estado de clímax mobile; §4.4).

### 2.5 Tradução da intenção emocional de cada bloco em recurso visual (tabela de cruzamento, `00-direcao-de-arte.md` §0.6)

| Bloco | Voltagem | Intenção (etapa 1) | Recurso visual dominante | Armadilha evitada |
|---|---|---|---|---|
| V0 | — | a página não oferece saída antes da aula | barra de 48 px, só o nome em Fraunces 600, sem link | menu, redes |
| V1 | 3 → 5 | reconhecimento + curiosidade | **escala** (título em display) + **espaço** isolando o player; densidade média, assimétrico à esquerda | ilustrar o que é cena; título curto demais que vira slogan |
| V2 | **9,5** | decisão | **o único contraste máximo**: superfície verde-profunda, texto papel, preço no degrau `--txt-preco`, botão âmbar, clarão âmbar atrás; 96 a 128 px de respiro isolando | dois clímax; alarme visual |
| V3 | 8 | alívio com direção | superfície **B** (papel denso + grão), 4 cartões escaneáveis, **datas como o elemento mais concreto** (numerais Fraunces 700 em ladrilhos) | ícone por item; render genérico do curso |
| V4 | 8,5 | identificação / segurança | **rosto real** (foto tratada), assimétrico (foto + coluna de critérios), número legível (cinco anos, sessenta pessoas) | parede de selos; foto fria |
| V5 | 6,5 | segurança, vale técnico | densidade baixa, **acordeão sem caixa** (filete + linha inteira clicável), simétrico, superfície B | cartão por pergunta (peso demais para resíduo) |
| V6 | 8 | identificação + resolução | **centralizado**, display-menor em itálico raro, botão primário, respiro; o único "amém" | repetir o recurso do clímax (escuro) |

**Ritmo de fundos (herdado da etapa 1 e travado aqui):** V1 **A** (papel liso) · V2 **clímax** · V3 **B** · V4 **A** · V5 **B** · V6 **A** · rodapé **B**. **A** = `--sup-base` liso. **B** = `--sup-densa` + grão de papel (§3.8). Clímax = `--sup-invertida`.

---

## 3. Tokens

> Duas camadas. **Primitivos** (`--p-*`) existem só para definir a semântica; **telas, spec e código usam apenas os semânticos.** Valor solto fora de token reprova o elemento (passe de sistema). Todo par de texto sobre fundo foi conferido **antes** de virar token (§9).

### 3.1 Cor

**Dominância:** papel (A + B) ≈ 90% da área · verde-escuro/tinta como texto e estrutura · verde-profundo só no clímax (~8% da página) · **âmbar < 3% da área, só em V2**.

| Primitivo | Hex | Papel na direção |
|---|---|---|
| `--p-papel-100` | `#FFFDF9` | cartão, chip, superfície elevada |
| `--p-papel-200` | `#F6F1EA` | fundo da página (tratamento A) |
| `--p-papel-300` | `#EDE4D7` | tratamento B (V3, V5, rodapé) |
| `--p-tinta-900` | `#2E2924` | texto forte |
| `--p-tinta-600` | `#5B5046` | texto médio (nunca abaixo disto: o `--soft` `#6F6459` do site rende 4,9:1 em papel e 4,3:1 em B) |
| `--p-verde-600` | `#3F6B57` | traço decorativo, numeral, marcador (≥ 3:1 em papel e cartão) |
| `--p-verde-700` | `#2F5245` | título, link, foco, borda do botão secundário |
| `--p-verde-900` | `#1E3A2F` | **superfície do clímax** |
| `--p-argila-700` | `#8A4B2F` | **ação** em superfície clara |
| `--p-ambar-300` | `#EBB07C` | **ação** e acento sobre o clímax (só V2) |

**Semânticos (usar estes):**

| Token | Valor | Uso |
|---|---|---|
| `--sup-base` | `--p-papel-200` | fundo A |
| `--sup-elevada` | `--p-papel-100` | cartão, chip, sticky, acordeão aberto |
| `--sup-densa` | `--p-papel-300` | fundo B |
| `--sup-invertida` | `--p-verde-900` | **cartão do clímax (V2)** e nada mais |
| `--txt-forte` | `--p-tinta-900` | corpo, títulos de leitura |
| `--txt-medio` | `--p-tinta-600` | microcopy, nota, rodapé, legenda do chip |
| `--txt-titulo` | `--p-verde-700` | títulos de bloco, nomes de item, links |
| `--txt-sobre-inverso` | `--p-papel-200` | texto sobre o clímax |
| `--txt-medio-sobre-inverso` | `rgba(246,241,234,.78)` ≈ `#C6C9C1` | microcopy e garantia sobre o clímax |
| `--cor-marca` | `--p-verde-700` | foco, link, borda de secundário |
| `--cor-marca-suave` | `--p-verde-600` | traço e numeral decorativos |
| `--cor-acao` | `--p-argila-700` | botão primário em superfície clara (V3 porta 2 secundária é contorno; V6, sticky) |
| `--cor-acao-sobre` | `color-mix(in srgb, #8A4B2F 88%, #2E2924)` ≈ `#7F472E` | hover/ativo do primário claro |
| `--cor-acento` | `--p-ambar-300` | **só V2**: botão, tag "turma fundadora", filete do preço, clarão |
| `--cor-acento-sobre` | `color-mix(in srgb, #EBB07C 88%, #FFFDF9)` ≈ `#EDB98B` | hover/ativo do primário do clímax |
| `--borda-sutil` | `rgba(46,41,36,.14)` ≈ `#DAD5CE` | filete decorativo (não carrega informação) |
| `--borda-forte` | `--p-verde-700` | contorno do botão secundário, anel do foco |
| `--borda-inversa` | `rgba(246,241,234,.24)` | filete interno do clímax |
| `--foco` | `--p-verde-700` | anel de foco em superfície clara |
| `--foco-inverso` | `--p-ambar-300` | anel de foco no clímax |

**Sinal:** não há `--sinal-*`. A página não tem formulário; o único erro é o do player (§5.5) e usa texto + borda lateral em `--cor-acao`, nunca vermelho.
**Censo:** 10 hexes primitivos, 4 famílias (papel, tinta, verde, quente). Gate: `grep -io "#[0-9a-f]\{6\}" index.html | sort -u | wc -l` → **≤ 12** (10 + 2 derivados do `color-mix`, caso o build resolva em hex).
**Regra do acento:** o âmbar pertence à ação. O botão âmbar de V2 e o clarão são os únicos usos grandes. Nenhum outro elemento de V2 compete em âmbar (a tag e o filete do preço são finos, ≤ 1% da área do cartão).

### 3.2 Tipografia

**Carregar (Google Fonts, `display=swap`, `preconnect`):**
`https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,600&family=Inter:wght@400;600&display=swap`
**Dois pesos por família:** Fraunces 600 (títulos) e 700 (só preço e numeral de data), mais 600 itálico (uso raro, §3.2.2); Inter 400 e 600. `font-optical-sizing: auto` (opsz acompanha o tamanho). Pilha de reserva: `Fraunces, Georgia, serif` e `Inter, system-ui, sans-serif`. `font-display: swap` e o título no tamanho do reserva não pode estourar o limite de §8 (os limites foram medidos com as fontes reais; Georgia é ~6% mais larga, daí a folga de 5 a 8% em cada limite).
**Números:** `font-variant-numeric: lining-nums` em tudo; `tabular-nums` em Inter onde há coluna (datas, parcela). O preço é um só valor estático em Fraunces 700 (sem coluna, sem comparação).

**Escala por função** (razão ≈ 1,2 no mobile e ≈ 1,25 no desktop nos degraus de leitura; **preço, data e display são exceções declaradas de clímax e de abertura**).

| Token | Família e peso | Mobile 360–767 | Desktop ≥ 1024 (768–1023: usa mobile, exceto o `--txt-display` em 40) | Altura de linha | Onde |
|---|---|---|---|---|---|
| `--txt-micro` | Inter 400/600 | 14 | 14 | 1,45 | microcopy sob player e botão, chip, tag, sticky |
| `--txt-corpo-p` | Inter 400 | 15 | 15 | 1,5 | credencial sob player, garantia, rodapé, nota |
| `--txt-corpo` | Inter 400 (600 em pergunta e botão) | 17 | 18 | 1,6 | leitura padrão, pilha, descrição, critérios, resposta |
| `--txt-corpo-g` | Inter 400 | 20 | 22 | 1,5 | parcela, convite do fecho, primeiro parágrafo |
| `--txt-titulo-p` | Fraunces 600 | 20 | 22 | 1,25 | nome de item (V3), tile de data (nome do dia) |
| `--txt-titulo` | Fraunces 600 | 24 | 34 | 1,2 | título de bloco, nome do produto (V2), eco do fecho (V6), estado encerrado |
| `--txt-display` | Fraunces 600 | **30** | **48** | 1,1 | **título de V1** (só ele) |
| `--txt-data` | Fraunces 700 | 40 | 48 | 1,0 | numeral do dia nos ladrilhos de V3 |
| `--txt-preco` | Fraunces 700 | **72** | **112** | 1,0 | **o preço de V2**, o maior corpo de texto da página |
| `--txt-eyebrow` | Inter 600, caixa alta, entreletra `+0,08em` | 14 | 14 | 1,3 | sobretítulo de V1, tag de V2, rótulo de bloco |
| `--txt-botao` | Inter 600 | 17 | 18 | 1,2 | rótulo do botão (sticky: 16) |

Regras: corpo de leitura ≥ 17 no celular (nunca 16 ou menos no texto de decisão; 15 só em nota e credencial); entreletra `-0,01em` só no display; largura de coluna de leitura ≤ 680 (≈ 72 caracteres a 18 px); itálico Fraunces 600 só em **um trecho por pico** (V1: o trecho da promessa; V6: o segundo caminho), nunca em parágrafo. Nenhum texto menor que 14 px em lugar nenhum.

### 3.3 Espaçamento (base 4)

`--e-1` 4 · `--e-2` 8 · `--e-3` 12 · `--e-4` 16 · `--e-5` 24 · `--e-6` 32 · `--e-7` 48 · `--e-8` 64 · `--e-9` 96 · `--e-10` 128.
**Proximidade é significado:** título → parágrafo `--e-3`; parágrafo → próximo título `--e-6`. Espaço **dentro** de componente usa `--e-1` a `--e-5`; espaço **entre blocos** usa `--e-7` a `--e-10`. Nada fora da escala.

| Bloco | Padding vertical mobile | Padding vertical desktop |
|---|---|---|
| V0 | altura fixa 48 | 56 |
| V1 | topo `--e-5`, base `--e-7` | topo `--e-7`, base `--e-8` |
| V2 | `--e-9` topo, `--e-8` base (o clarão precisa de ar) | `--e-10` e `--e-9` |
| V3, V4, V5 | `--e-8` | `--e-9` |
| V6 | `--e-9` | `--e-10` |
| Rodapé | `--e-7`, base **88** (`--e-8` + safe-area) para o sticky nunca cobrir link | `--e-7` |

### 3.4 Grade e larguras

| | Mobile < 768 | Tablet 768–1023 | Desktop ≥ 1024 |
|---|---|---|---|
| Colunas | **4** | 8 | **12** |
| Medianiz (entre colunas) | `--e-3` (12) | `--e-4` (16) | `--e-5` (24) |
| Margem lateral | `--e-4`+4 = **20** em 360–430 (**margem de 20; é o único valor fora da escala, e é por contagem de pixel de tela: 360 − 2×20 = 320 de conteúdo, base de todas as medições de §8; declarado como `--m-lateral`**) | `--e-6` (32) | centralizado |
| Largura de conteúdo | **320** (360), 350 (390), 390 (430) | até 704 | `--larg-bloco` 1120 |

`--larg-leitura` **680** (V3 texto, V5, V6, rodapé) · `--larg-titulo` **880** (título de V1) · `--larg-player` **960** (player de V1) · `--larg-bloco` **1120** · cartão do clímax desktop **1040**.
**Cartões e acordeão mobile usam padding interno `--e-4` (16) dentro dos 320**, ficando 288 de texto (as larguras de §8 já descontam isso). **O cartão do clímax mobile sangra para `--e-3` (12) de cada lado (336 de largura)**, com padding `--e-5` (24): 288 de texto também. O ganho de 16 px é o que cabe os itens da pilha em 2 linhas.

### 3.5 Forma (raio)

Escala de **quatro degraus**, cada um com função; nada fora dela.

| Token | Valor | Função |
|---|---|---|
| `--r-0` | 0 | player no mobile (sangra), filete, acordeão, foto de V4 no mobile |
| `--r-1` | 6 | chip, tag, tile de data |
| `--r-2` | 12 | botão, cartão de item, player ≥ 768, foto de V4 ≥ 768, sticky (topo) |
| `--r-3` | 24 | **cartão do clímax e só ele** (o único canto mais generoso da página) |

### 3.6 Borda

`--bw-1` 1 (filete, cartão) · `--bw-2` 2 (botão secundário, estado aberto do acordeão) · `--bw-3` 3 (anel de foco). Bordas em lugar de sombra sempre que o elemento está em superfície B (cartão sobre B tem filete + `--elev-0`).

### 3.7 Elevação (três níveis, função declarada; no máximo dois convivem na tela)

| Token | Valor | Função |
|---|---|---|
| `--elev-0` | nenhuma | repouso sobre B (cartão com filete `--borda-sutil`) |
| `--elev-1` | `0 1px 2px rgba(46,41,36,.06), 0 6px 20px rgba(46,41,36,.07)` | cartão sobre A, player ≥ 768, ladrilho de data |
| `--elev-2` | `0 24px 64px -16px rgba(30,58,47,.45)` | **só o cartão do clímax**; mais o clarão (§3.9) |
| `--elev-sticky` | `0 -6px 20px rgba(46,41,36,.12)` | só a barra fixa (sombra para cima) |

### 3.8 Textura do fundo B

Grão de papel, estático, sem custo de rede: SVG inline em data-URI, `feTurbulence baseFrequency=.8 numOctaves=2`, aplicado em `--sup-densa` com `opacity .05`, `background-size 160px`. **Sem imagem externa.** Se o build resolver mal, o B degrada para cor chapada `--sup-densa` (sem perda de função).
Exemplo de valor (para o build): `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2'/></filter><rect width='160' height='160' filter='url(%23n)' opacity='.05'/></svg>")`.

### 3.9 O clarão (o elemento memorável, em token)

`--clarao`: `radial-gradient(ellipse at 50% 0%, rgba(235,176,124,.42) 0%, rgba(235,176,124,0) 68%)` posicionado **atrás** do cartão do clímax, 120% da largura dele, 280 px de altura no mobile e 420 no desktop, `pointer-events: none`, **estático** (sem animação). Existe **só** dentro de `#oferta`. Sobre `--sup-base` o clarão é decoração pura: nenhum texto fica em cima dele.

### 3.10 Movimento (tokens)

`--dur-toque` 100ms · `--dur-micro` 150ms · `--dur-estado` 250ms. Curva única `cubic-bezier(.2,.7,.2,1)` (sai rápido, chega suave). Nada acima de 250 ms na página. Detalhe em §10.

---

## 4. Grade, composição e altura por bloco

### 4.1 V0 · Barra superior
Altura 48, fundo `--sup-base`, filete inferior `--borda-sutil`. Esquerda: nome em Fraunces 600 18 `--txt-titulo`, **sem link antes do pitch**. Direita, **só depois do pitch**: link-âncora para `#oferta`, Inter 600 `--txt-corpo-p`, área de toque 44 × 44, sublinhado sempre (não depender de cor). Não é fixa (o sticky inferior faz o papel de barra permanente).

### 4.2 V1 · Primeira dobra (A · assimétrico à esquerda · 90–100vh no desktop)
- **Mobile (360 × 667 / 360 × 740 úteis ≈ 590):** coluna única, alinhada à esquerda. Ordem: sobretítulo (`--txt-eyebrow`, `--txt-titulo`) → **título** (`--txt-display` 30/1,1) → **player sangrando** de borda a borda (360 × 202, `--r-0`) → microcopy → credencial. Orçamento medido (3 linhas de título): V0 48 + `--e-5` 24 + eyebrow 18 + `--e-2` 8 + título 3×33 = 99 + `--e-4` 16 = **213 px até o topo do player; o botão de play (centro) fica em 213 + 101 = 314 px**; a base do player em 415; microcopy e credencial até ~505. **Cabe em 590 com folga de 85 px.** Com 4 linhas de título (teto de §8) o play fica em 347 e a credencial termina em ~540: ainda cabe. **O play cabe na primeira tela em 360 × 640.**
- **Desktop ≥ 1024:** coluna de 960 alinhada à esquerda dentro do container de 1120 (assimetria dos picos: o título **não** é centralizado). Título `--txt-display` 48 em até 880. Player `--larg-player` com largura `min(100%, 960px, calc((100svh - 300px) * 16 / 9))`, mínimo 640, para que o play e a primeira linha de credencial apareçam em 1366 × 768. `--r-2`, `--elev-1`.
- **Funil A (`?f=a`):** mesma composição; só o texto muda e **respeita os mesmos limites de §8**.

### 4.3 V2 · Oferta (o clímax)
Ver §6.

### 4.4 V3 a V6

**V3 · O que você recebe + os quatro encontros (B · médio · 70–90vh)**
- Mobile: eyebrow + título de bloco, depois **os 4 itens em uma coluna** (cartão `--sup-elevada`, filete `--borda-sutil`, `--r-2`, padding `--e-4`, `--elev-0`). Dentro de cada cartão: tag do passo (`--txt-eyebrow`, `--txt-titulo`) → nome (`--txt-titulo-p`) → descrição (`--txt-corpo`). Depois o **calendário: 4 ladrilhos 2 × 2** (150 × ~104 cada, `--r-1`, `--sup-elevada`, `--elev-1`): numeral do dia em `--txt-data` (`--txt-titulo` de cor), mês e dia da semana + horário em `--txt-micro`. Depois texto "o que acontece" e "quem não puder ir" (`--txt-corpo`, 320). Fecha com a porta 2 (botão secundário, contorno `--borda-forte` 2 px, texto `--txt-titulo`, **sem preenchimento**, largura total, altura 48).
- Desktop: itens em **2 × 2** (cada um com 6 colunas), calendário em **4 ladrilhos numa linha** logo abaixo, **datas como o elemento mais concreto**: os numerais pesam mais que os títulos dos itens; porta 2 alinhada à esquerda, largura automática.
- A data de corte (16/12) **continua visível** em V3: no primeiro ladrilho, o numeral `16` recebe o filete inferior de 2 px em `--cor-marca-suave` (marca de "é a primeira, e é onde a entrada fecha", **não** âmbar). Número é informação; cor não é o único sinal (o rótulo escrito carrega o fato).

**V4 · Quem conduz + para quem é (A · médio · assimétrico · 60–80vh)**
- Mobile: foto em **1:1** no topo, **sangrando** a 360 × 360 (`--r-0`, como o player; ≥ 768 ganha `--r-2`), depois credencial (`--txt-corpo`), razão pessoal, depois **"É para você se"** (3 itens) e **"Talvez ainda não seja, se"** (2 itens) em listas de **marcador tipográfico** (traço de 12 × 2 px em `--cor-marca-suave`, sem ícone).
- Desktop: **5 colunas de foto (≈ 440 × 550, 4:5) à esquerda + 7 colunas de texto à direita** (assimetria de pico; o rosto que ele já ouviu por 20 min na posição de entrada). Os dois grupos de critérios lado a lado só se couberem em ≥ 1024 (cada um em 3 colunas); senão empilhados.
- A foto: `05 - design/fotos/debora-d6.webp` (1000 px) e `debora-d6@2x.webp` (1600 px) com `srcset`, `width`/`height` declarados, `loading="lazy"` (está abaixo da dobra). **Tem de passar por aprovação da Débora** (`PLANO-FOTO-DEBORA.md`, "Pendente").
- O **filete vertical** de 2 px em `--cor-marca-suave` separa foto e texto no desktop (traço editorial; teste de remoção: se tirar, o bloco continua).

**V5 · Objeções (B · baixo · simétrico · 60–90vh)**
Uma coluna de `--larg-leitura`, **oito `<details>` fechados**, sem cartão: cada item é uma linha com filete inferior `--borda-sutil`, a linha **inteira** é o alvo (≥ 56 de altura, §7.2). Pergunta em `--txt-corpo` Inter 600 `--txt-forte`; resposta em `--txt-corpo` `--txt-forte`. Estado aberto: o `+` vira `−` **e** a linha ganha filete esquerdo de 2 px `--cor-marca-suave` (dois sinais, nenhum só de cor). Eyebrow + título de bloco opcionais, alinhados à esquerda.

**V6 · Fecho (A · médio-alto · centralizado · 50–70vh)**
O **único bloco centralizado** da página. Eco da promessa em `--txt-titulo` (24/34) com **um** trecho em Fraunces 600 itálico; convite em `--txt-corpo` (mobile) e `--txt-corpo-g` (desktop), 2 a 3 linhas; **botão primário** `--cor-acao` largura total no mobile (288, alvo 56) e 360 no desktop; lembrete em `--txt-micro` `--txt-medio` logo abaixo (R$ 297 ou 12×, 12 meses, 7 dias, entrada fecha em 16/12). Sem cartão, sem fundo diferente: o contraste é o espaço (`--e-9`).

### 4.5 Rodapé (B)
Identificação legal, suporte, termos, privacidade: `--txt-corpo-p` `--txt-medio`, filete superior, centralizado no mobile e à esquerda no desktop. Selo do octaedro 22 px em `--cor-marca-suave` opcional. **Nenhum link para fora do domínio além de termos e privacidade (E16).** Base com padding de 88 para o sticky.

---

## 5. O player

### 5.1 Moldura
Proporção **16:9**, `width` e `height` declarados (nenhum deslocamento de layout). **Mobile:** sangra a 360, `--r-0`, sem sombra, filete `--borda-sutil` embaixo. **≥ 768:** `--r-2`, `--elev-1`, borda `--bw-1` em `--borda-sutil`, `overflow: hidden`. A moldura é **clara** (nada escuro em volta; a única superfície escura da página é o cartão de V2). O player é *objeto*, e o poster é uma foto, não uma faixa.

### 5.2 Capa (poster)
Frame do vídeo final, com o rosto dela **no terço direito** e olhando para a câmera (o poster atual `debora-d6.webp` mostra o padrão: olhar direto, sorriso contido, blusa escura, planta verde, fundo claro). Mesmo tratamento da foto de V4 (véu de papel 3%, sombras para tinta, verdes para musgo, grão 2%) para o conjunto ficar da mesma família. **Sem texto sobreposto** (o título está a 16 px acima e é o par de mensagem do anúncio, E7: duplicar na capa é redundância). **Sem scrim** (o chip tem fundo sólido). WebP ≤ 60 KB em 720 px e ≤ 110 KB em 1440 px, `srcset`. Poster provisório enquanto o frame final não existe (`[[ FALTA #11 ]]`): crop 16:9 de `debora-d6.webp`.

### 5.3 Botão de play
Círculo de **72 px** (mobile e desktop; alvo ≥ 44), centrado, preenchimento `--sup-elevada`, triângulo em `--txt-titulo` (`#2F5245`, 7,7:1 sobre o círculo), sombra `--elev-1`. **Sem anel âmbar, sem pulso, sem animação de chamada** (âmbar é de V2; pulso é proibido). É `<button>` com nome acessível.

### 5.4 Chip de duração e legenda
Chip no canto inferior esquerdo, margem `--e-3`: `--sup-elevada` a 96%, `--r-1`, padding `4 × 10`, `--txt-micro` Inter 600 `--txt-forte` (14,2:1). Conteúdo: duração + "com legendas" (a duração real depende de `[[ FALTA #4 ]]`). **Legendas do vídeo:** obrigatórias; estilo no provedor: Inter 600, 18 mobile / 22 desktop, branco sobre faixa preta a 75% (10,98:1), no máximo 2 linhas, na base do quadro acima da barra de controle. A cor da faixa preta é do sistema de legenda (não é superfície da página).

### 5.5 Estados do player (matriz)

| Estado | O que muda |
|---|---|
| Repouso | poster, play 72, chip |
| Sobre (ponteiro) | play cresce a 1,04 e o poster ganha `brightness(1.03)`, `--dur-micro`; não empurra layout |
| Foco | **anel duplo:** 3 px `--sup-elevada` por dentro + 3 px `--foco` por fora; no mobile (sangrando) o anel fica **por dentro** da borda (`inset`) |
| Ativo | play a 0,96 em `--dur-toque`; o vídeo inicia **no clique** (nunca autoplay; autoplay mudo é hipótese de teste P2, não padrão, E5) |
| Carregando | o triângulo vira um spinner de 28 px `--txt-titulo` dentro dos mesmos 72; largura preservada; `aria-busy="true"` |
| Erro | o poster **permanece**; uma faixa **abaixo** (não sobre) o poster, `--sup-elevada`, borda lateral de 3 px `--cor-acao`, texto `--txt-corpo` + botão secundário "tentar de novo" (alvo 48). Mensagem ≤ 70 caracteres (§8) |
| Desabilitado / vazio | não se aplicam: sem arquivo de vídeo o `CHECKOUT_URL`/gate já bloqueia a publicação (E15, P0) |

---

## 6. O clímax visual (V2 · oferta · `#oferta`)

### 6.1 Princípio
**Um clímax. Um clímax só.** O olho precisa entender que as coisas ficaram sérias **no segundo em que a Débora diz "o botão está aqui embaixo"**. Por isso a revelação (a) entra **inteira e de uma vez**, (b) traz **os cinco recursos juntos pela primeira vez** (superfície invertida, degrau `--txt-preco`, âmbar, respiro isolador, maior botão) e (c) **nenhum desses recursos foi gasto antes** na página.

### 6.2 Construção (mobile 360)

```
[espaço --e-9 sobre --sup-base, com o --clarao (âmbar) subindo atrás do cartão]
┌ cartão --sup-invertida · --r-3 · --elev-2 · 336 de largura · padding --e-5 ──┐
│ tag (caixa alta, âmbar)  .......................... "TURMA FUNDADORA"    │
│ nome do produto (--txt-titulo, --txt-sobre-inverso) .. 2 linhas          │
│ filete --borda-inversa                                                   │
│ pilha: 6 linhas (4 itens + encontros + acesso), --txt-corpo, marcador    │
│        tipográfico em âmbar (traço 10 × 2), sem ícone                    │
│ filete                                                                   │
│ âncora (--txt-corpo, --txt-medio-sobre-inverso), SEM riscado             │
│                                                                          │
│ R$ 297        <- --txt-preco 72 / Fraunces 700 / --txt-sobre-inverso     │
│ ou em até 12× no cartão   <- --txt-corpo-g                               │
│ filete de 2 × 48 px âmbar sob o preço (o único traço âmbar de tipografia)│
│                                                                          │
│ escassez com motivo (--txt-corpo)                                        │
│ [  BOTÃO  ]  largura total (288), altura 64, --cor-acento, texto         │
│              --p-verde-900                                               │
│ garantia COLADA ao botão (--txt-corpo-p, --txt-medio-sobre-inverso)      │
└──────────────────────────────────────────────────────────────────────────┘
[espaço --e-8]
```

- **Ordem fixa** (etapa 1): recapitulação → âncora → preço → escassez → botão → garantia. **Nada se reordena no mobile.**
- **Peso visual:** o preço é o **maior número** (72 contra 30 do título de V1) e o botão é o **maior botão** (altura 64 contra 48/56 dos demais). Largura medida do preço: "R$ 297" a 72 px Fraunces 700 = **237 px** (cabe nos 288 do cartão); a 112 px no desktop = **347 px**.
- **Preço:** "R$" em 40% do tamanho, alinhado ao topo (como moeda), "297" no degrau inteiro; sem efeito por cima (sem sombra de texto, sem degradê). `--txt-sobre-inverso` 10,98:1.
- **Botão:** preenchimento `--cor-acento` `#EBB07C`, texto `--p-verde-900` (6,5:1), `--r-2`, 64 de altura, `--txt-botao` 17. Foco: anel `--foco-inverso` 3 px com offset 3 (6,5:1 contra o cartão). Hover/ativo: `--cor-acento-sobre`.
- **Garantia colada:** `--e-2` (8) abaixo do botão, não no rodapé do cartão. Legível: `--txt-corpo-p` 15, `--txt-medio-sobre-inverso` (7,4:1).
- **Moldura de decisão, não ambiente escuro:** o fundo da seção continua **claro** (`--sup-base`); o escuro é **o cartão** (herdado da V2 §2b). Isso mantém a página inteira clara e o cartão como o único objeto escuro.

### 6.3 Construção (desktop ≥ 1024)
Cartão de **1040 de largura**, `--r-3`, padding `--e-7`, **duas colunas** (12 colunas de grade, medianiz 24): **esquerda, 7 colunas**: tag, nome do produto, pilha; **direita, 5 colunas**, separadas por filete vertical `--borda-inversa`: âncora, **preço (`--txt-preco` 112, 347 px de largura, cabe em 5 colunas ≈ 410)**, parcela, escassez, botão (largura total da coluna, altura 64), garantia. **A ordem de leitura esquerda→direita, cima→baixo preserva a ordem de etapa 1.** Altura alvo 100–130vh (inclui o respiro de `--e-10` em cima e `--e-9` embaixo). Leitura em Z: tag (alto-esquerda) → preço (alto-direita) → botão (baixo-direita).

### 6.4 O que muda entre antes e depois da revelação
- **Antes (estado 1):** `#oferta` e V3 a V6 **não ocupam espaço** (nem `visibility:hidden` reservando altura, que deixaria um vazio). A página termina em V1 + rodapé.
- **Revelação:** o contêiner de V2 a V6 muda de `hidden` para visível, **entra inteiro de uma vez**; o único movimento permitido é um fade de **opacidade 0 → 1 em 250 ms** no contêiner (nenhum translate: nada se desloca; nada acima do player muda). Com `prefers-reduced-motion: reduce`: **instantâneo**. Sem rolagem automática (E2). O clarão já nasce pintado, não anima.
- **Mobile, na revelação:** a **microcopy sob o player** (expectativa de duração e som; §8) sai do fluxo para V2 subir ~48 px (ela já cumpriu a função), a credencial fica. **O sticky surge no mesmo instante** (§7.3).
- **Sem JavaScript (E4):** o estado revelado é o **padrão do HTML** (a ocultação só existe por classe aplicada via JS). O clarão e o cartão são CSS puro.

### 6.5 Estado "turma fundadora encerrada" (E10)
Troca o cartão do clímax por um cartão **claro**: `--sup-elevada`, `--r-2`, filete `--borda-sutil`, `--elev-0`, **sem clarão, sem âmbar, sem botão, sem sticky**. Título (`--txt-titulo`, `--txt-titulo` de cor) + uma frase (`--txt-corpo`). V3 (que promete encontros) e a pilha **não renderizam** (a decisão sobre o resto da página é do build conforme E10; o visual só garante que **o estado não imita um clímax**: sem escuro, sem calor).

---

## 7. Componentes e estados

### 7.1 Botão primário (um por tela)
Tamanhos: **grande** (V2: 64 de altura, largura total do cartão), **padrão** (V6: 56; sticky: 48), `--r-2`, `--txt-botao`. Verbo único em toda a página (a escolha é da etapa 3; aqui só o comprimento, §8).

| Estado | Superfície clara (V6, sticky) | No clímax (V2) |
|---|---|---|
| Repouso | fundo `--cor-acao`, texto `--sup-elevada` (6,6:1) | fundo `--cor-acento`, texto `--p-verde-900` (6,5:1) |
| Sobre | fundo `--cor-acao-sobre` (7,3:1), sombra interna de 1 px; **não muda tamanho** | fundo `--cor-acento-sobre` (7,0:1) |
| Foco | anel 3 px `--foco` offset 3 | anel 3 px `--foco-inverso` offset 3 |
| Ativo | `translateY(1px)`, `--dur-toque` | idem |
| Desabilitado | não existe no primário: se o `CHECKOUT_URL` estiver vazio o gate reprova (E15), nunca se publica botão morto | idem |
| Carregando (entre o clique e o redirect de 200 ms do pixel) | rótulo preservado, spinner de 16 px à esquerda, `aria-busy`, `pointer-events:none`; **largura preservada** | idem |
| Erro / vazio | não se aplicam (não há campo) | idem |

**Botão secundário (porta 2 de V3, "tentar de novo" do player):** transparente, borda `--bw-2` `--borda-forte`, texto `--txt-titulo`, altura 48. Sobre: fundo `--sup-elevada`. Nunca compete em peso com o primário da tela.

### 7.2 Acordeão (`<details>`)
Fechado por padrão. Linha inteira clicável (`summary` com altura ≥ 56, `padding 16`), chevron/`+` no lado direito (3:1), sem animação de altura. Aberto distinguível sem cor (troca `+`→`−` **e** filete lateral). Resposta em `--txt-corpo`, padding `--e-3`/`--e-4`. Foco no `summary`: anel `--foco` 3 px offset 2.

### 7.3 Sticky CTA (mobile, só depois do pitch)
Barra fixa na base: altura **64 + safe-area**, `--sup-elevada`, filete superior `--borda-sutil`, `--elev-sticky`, `--r-2` nos cantos superiores. Layout: **coluna de texto 168** (linha 1: produto, `--txt-micro` 600, 163 px de largura real do nome; linha 2: "R$ 297 ou 12×" `--txt-micro`) + **botão 140 × 48** (`--cor-acao`, texto 16/600, rótulo ≤ 12 caracteres, §8) com `--e-3` entre eles. **Sem blur.** Some enquanto o botão de V2 está visível na tela (um primário por tela; IntersectionObserver) e volta quando sai. Reserva `scroll-padding-bottom: 80px` e `padding-bottom: 88` no rodapé para que nem o foco nem o último link fiquem escondidos pela barra.

### 7.4 Ladrilho de data (V3)
`--sup-elevada`, `--r-1`, `--elev-1`, 150 × ~104 (mobile) / ~250 × 120 (desktop). Numeral `--txt-data` `--txt-titulo`; mês + dia da semana + horário em `--txt-micro` `--txt-medio` (tabular). Não é interativo (sem hover, sem foco).

### 7.5 Tag e eyebrow
`--txt-eyebrow`, `--r-1` só se tiver fundo. Tag do clímax: texto `--cor-acento` sem fundo (6,5:1 sobre `--sup-invertida`). Eyebrow de bloco em `--txt-titulo`.

---

## 8. LIMITES DE CARACTERES (o que a etapa 3 herda)

> **Como foram medidos (não estimados).** Larguras reais das fontes que a página carrega (arquivos do Google Fonts, `Fraunces[opsz,wght]` e `Inter[opsz,wght]`; Fraunces com `opsz` igual ao tamanho em px, Inter em `opsz` 14 como o CSS de §3.2 carrega) medidas em Python/PIL (`getlength`). Quebra de linha gananciosa (a do navegador) sobre **6.489 palavras de texto real em pt-BR** do próprio `01-FISICA.md`; para cada limite L, todas as janelas de texto de até L caracteres; **L é o maior comprimento em que ≥ 95% das janelas cabem no número de linhas indicado**. O **limite duro** abaixo é esse L **arredondado para baixo em 5 a 8%** (folga para Georgia de reserva, itálico, negrito e frases com muitas palavras longas). Conta-se **caracteres com espaços, sem marcação**; "12×" são 3, "R$ 297" são 6, "16/12" são 5.
> **Medido em 360 px de tela (conteúdo 320), o pior caso do público.** Os limites desktop são **maiores** em todos os elementos e por isso **não são o gargalo**: valem os de baixo. Em 390 e 430 sobra margem (conteúdo 350 e 390).
> **Regra:** texto acima do limite duro **reprova o bloco no gate**. **Cortar a fonte para caber é proibido** (quem desenha não reescreve; quem escreve não reduz a escala). A correção é na copy.
> **Conferência obrigatória na etapa 4:** aparelho real de 360 px (a skill exige) e a janela de 320 px de conteúdo, mesmo que a medição tenha dado folga.

### V0 · Barra superior
| Elemento | Estilo | Largura de medição | Linhas | **Limite duro** | Alvo |
|---|---|---|---|---|---|
| Link-âncora (só pós-pitch) | Inter 600 15 | 140 | 1 | **14** | ≤ 10 |

### V1 · Primeira dobra
| Elemento | Estilo | Largura | Linhas | **Limite duro** | Alvo |
|---|---|---|---|---|---|
| Sobretítulo | eyebrow, caixa alta, +0,08em | 320 | 1 | **30** | ≤ 26 |
| **Título (cena + promessa, E7)** | Fraunces 600 30, lh 1,1 | 320 | 3 (alvo) / 4 (teto) | **teto 70** (4 linhas em 360, 3 linhas em 430) | **alvo ≤ 52** (3 linhas em 360) |
| Microcopy sob o player | Inter 400 14 | 320 | 2 | **80** | ≤ 60 |
| Linha de credencial | Inter 400 15 | 320 | 2 (mobile) / 1 (desktop) | **76** | ≤ 70 |
| Chip do player (duração + legendas) | Inter 600 14 | 260 | 1 | **32** | ≤ 28 |
| Mensagem de erro do player | Inter 400 17 | 288 | 2 | **70** | ≤ 60 |
| Texto alternativo do poster e da foto de V4 | — | — | — | **100** | ≤ 90 |

> **Declaração obrigatória sobre o título de V1.** A skill pede título de abertura em **no máximo 3 linhas no celular**; o limite por linha em 30 px é 54 caracteres. A etapa 1 exige cena **e** promessa num só título. **Alvo ≤ 52 (3 linhas, dentro da regra da skill). Teto 70 (4 linhas em 360)** é **concessão consciente** com custo: o título pesa mais e empurra o play 33 px, que ainda cabe (§4.2, play em 347 de 590 úteis). **Acima de 70 reprova**, porque a 5ª linha move o play para fora da primeira tela. A etapa 3 deve **tentar 52 primeiro** e só usar a faixa de 53 a 70 se cena e promessa, **juntas**, provarem não caber (a decisão fica documentada no `03-COPY`). O mesmo limite vale para a variante do funil A (`?f=a`).

### V2 · Oferta (cartão do clímax)
| Elemento | Estilo | Largura | Linhas | **Limite duro** | Alvo |
|---|---|---|---|---|---|
| Tag "turma fundadora" | eyebrow, caixa alta | 288 | 1 | **26** | ≤ 20 |
| Nome do produto | Fraunces 600 24 | 288 | 2 | **38** | "Eneagrama para Líderes" = 22 |
| **Item da pilha** (cada um dos 6) | Inter 400 17 | 260 | 2 mobile / 1 desktop | **50** | ≤ 42 |
| Âncora | Inter 400 17 | 288 | 3 | **84** | ≤ 70 |
| Parcela ("ou em até 12× …") | Inter 400 20 | 288 | 1 | **24** | ≤ 24 |
| Escassez com motivo | Inter 400 17 | 288 | 3 | **84** | ≤ 70 |
| **Rótulo do botão** | Inter 600 17 | 256 | **1 sempre** | **26** | ≤ 22 |
| Garantia (colada ao botão) | Inter 400 15 | 288 | 4 | **128** | ≤ 110 |
| Preço | Fraunces 700 72/112 | 288 / 410 | 1 | **"R$ 297" fixo (6)** | — |

### V3 · O que você recebe + os quatro encontros
| Elemento | Estilo | Largura | Linhas | **Limite duro** | Alvo |
|---|---|---|---|---|---|
| Eyebrow de bloco | eyebrow | 320 | 1 | **30** | ≤ 24 |
| Título de bloco | Fraunces 600 24 (34 desktop) | 320 | 2 | **44** | ≤ 36 |
| Tag do passo | eyebrow | 288 | 1 | **26** | "passo 2, 3 e 4" |
| **Nome do item** (cada um dos 4) | Fraunces 600 20 | 288 | 2 | **46** | ≤ 38 |
| **Descrição do item** | Inter 400 17 | 288 | 3 | **84** | ≤ 70 (1 a 2 linhas é o desejável) |
| Ladrilho de data: dia da semana + horário | Inter 400 14, tabular | 120 | 1 | **14** | "quarta · 19h30" = 14 |
| "O que acontece num encontro" | Inter 400 17 | 320 | 3 | **98** | ≤ 90 |
| "Quem não puder ir" | Inter 400 17 | 320 | 3 | **98** | ≤ 90 |
| Botão secundário (porta 2) | Inter 600 17 | 288 | 1 | **28** | ≤ 24 |

### V4 · Quem conduz + para quem é
| Elemento | Estilo | Largura | Linhas | **Limite duro** | Alvo |
|---|---|---|---|---|---|
| Título de bloco (opcional) | Fraunces 600 24 | 320 | 2 | **44** | ≤ 36 |
| Credencial (2 a 3 linhas) | Inter 400 17 | 320 | 3 | **98** | ≤ 90 |
| Razão pessoal (1 linha desktop / 3 mobile) | Inter 400 17 | 320 | 3 | **98** | ≤ 90 |
| **Critério "é para você se"** (cada um dos 3) | Inter 400 17 | 292 | 2 | **58** | ≤ 52 |
| **Critério "talvez ainda não seja, se"** (cada um dos 2) | Inter 400 17 | 292 | 2 | **58** | ≤ 52 |

### V5 · Objeções (acordeão, 8 itens)
| Elemento | Estilo | Largura | Linhas | **Limite duro** | Alvo |
|---|---|---|---|---|---|
| Eyebrow / título de bloco | eyebrow / Fraunces 24 | 320 | 1 / 2 | **30 / 44** | — |
| **Pergunta** | Inter 600 17 | 256 | 2 mobile / 1 desktop | **50** | ≤ 44 |
| **Resposta** | Inter 400 17 | 288 | 9 mobile / 5 desktop | **260** | **≤ 200** (resposta é resíduo; passou de 200, ou o essencial está escondido atrás do acordeão, ou a prova está no vídeo) |

### V6 · Fecho
| Elemento | Estilo | Largura | Linhas | **Limite duro** | Alvo |
|---|---|---|---|---|---|
| **Eco da promessa** (os dois caminhos) | Fraunces 600 24 (34 desktop) | 320 | 3 / 4 | **86** (4 linhas mobile, 3 desktop) | **≤ 66** (3 linhas) |
| Convite sereno | Inter 400 17 (20 desktop) | 320 | 3 | **98** | ≤ 90 |
| **Rótulo do botão** | Inter 600 17 | 288 | **1 sempre** | **26** | = o da V2 |
| Lembrete (R$ 297 ou 12× · 12 meses · 7 dias · fecha 16/12) | Inter 400 14 | 320 | 2 | **80** | ≤ 80 (é lista de fatos; pode usar separadores) |

### Sticky e rodapé e estado encerrado
| Elemento | Estilo | Largura | Linhas | **Limite duro** |
|---|---|---|---|---|
| **Rótulo do botão do sticky** (mesmo verbo das 4 portas, forma curta) | Inter 600 16 | 116 | 1 | **12** |
| Sticky, linha 1 (produto) | Inter 600 14 | 168 | 1 | "Eneagrama para Líderes" fixo (163 px, cabe) |
| Sticky, linha 2 (preço e parcela) | Inter 400 14 | 168 | 1 | **22** ("R$ 297 ou 12×" = 14) |
| Rodapé (cada bloco de texto) | Inter 400 15 | 320 | 4 | **150** |
| Estado encerrado: título | Fraunces 600 24 | 320 | 2 | **44** |
| Estado encerrado: texto | Inter 400 17 | 320 | 3 | **98** |

**Consequência para o verbo único (Lei 7 da etapa 1): o verbo do botão tem de existir em forma de até 12 caracteres (sticky) e em forma de até 26 (V2, V3, V6).** Por exemplo, uma forma curta e uma forma longa do mesmo verbo. A etapa 3 escolhe o verbo; esta etapa só trava o comprimento.

---

## 9. Acessibilidade (WCAG 2.1 AA como restrição de projeto)

### 9.1 Tabela de contraste (anexo obrigatório; razões calculadas, WCAG 2.x)

| Elemento | Frente | Fundo | Razão | Exigido | Passa |
|---|---|---|---|---|---|
| Texto de corpo | `#2E2924` | `#F6F1EA` | **12,8** | 4,5 | sim |
| Corpo sobre cartão | `#2E2924` | `#FFFDF9` | **14,2** | 4,5 | sim |
| Corpo sobre B | `#2E2924` | `#EDE4D7` | **11,4** | 4,5 | sim |
| Texto secundário / microcopy | `#5B5046` | `#F6F1EA` | **7,0** | 4,5 | sim |
| Microcopy sobre B | `#5B5046` | `#EDE4D7` | **6,2** | 4,5 | sim |
| Título e link | `#2F5245` | `#F6F1EA` | **7,7** | 4,5 | sim |
| Título sobre B | `#2F5245` | `#EDE4D7` | **6,9** | 4,5 | sim |
| Numeral/traço decorativo | `#3F6B57` | `#F6F1EA` | **5,4** | 3 | sim |
| Rótulo do botão primário (claro) | `#FFFDF9` | `#8A4B2F` | **6,6** | 4,5 | sim |
| Primário claro, hover | `#FFFDF9` | `#7F472E` | **7,3** | 4,5 | sim |
| Ação como texto/ícone sobre papel | `#8A4B2F` | `#F6F1EA` | **6,0** | 3 | sim |
| Texto sobre o clímax | `#F6F1EA` | `#1E3A2F` | **11,0** | 4,5 | sim |
| Microcopy/garantia sobre o clímax | `rgba(246,241,234,.78)` ≈ `#C6C9C1` | `#1E3A2F` | **7,4** | 4,5 | sim |
| Tag âmbar sobre o clímax | `#EBB07C` | `#1E3A2F` | **6,5** | 4,5 | sim |
| Rótulo do botão do clímax | `#1E3A2F` | `#EBB07C` | **6,5** | 4,5 | sim |
| Botão âmbar contra o cartão (limite do componente) | `#EBB07C` | `#1E3A2F` | **6,5** | 3 | sim |
| Cartão do clímax contra a página | `#1E3A2F` | `#F6F1EA` | **11,0** | 3 | sim |
| Contorno do botão secundário | `#2F5245` | `#F6F1EA` | **7,7** | 3 | sim |
| Anel de foco (claro) | `#2F5245` | `#F6F1EA` / `#EDE4D7` | **7,7 / 6,9** | 3 | sim |
| Anel de foco (clímax) | `#EBB07C` | `#1E3A2F` | **6,5** | 3 | sim |
| Triângulo do play | `#2F5245` | `#FFFDF9` | **7,9** | 3 | sim |
| Legenda do vídeo | `#FFFFFF` | faixa `#000` 75% | **≈ 11** | 4,5 | sim |
| Chip de duração | `#2E2924` | `#FFFDF9` | **14,2** | 4,5 | sim |
| **Reprovados e retirados:** `--soft` do site `#6F6459` sobre B (4,3) · `#A86B52` do site com texto branco (4,0) · âmbar sobre papel como texto (1,7) | | | | | **fora do sistema** |

### 9.2 Alvos, foco, teclado, zoom
- **Alvo de toque ≥ 44 × 44** com folga ≥ 8 entre vizinhos: play 72 · botão de V2 64 · botão de V6 56 · sticky 48 (+ 8 de margem) · linha do acordeão ≥ 56 · link do topo 44 · botão secundário 48.
- **Foco visível sempre:** anel 3 px (`--foco` / `--foco-inverso`) com offset 2 a 3, **nunca `outline: none` sem substituto**. O sticky não pode cobrir o elemento focado (`scroll-padding-bottom`, WCAG 2.4.11).
- **Teclado:** ordem de foco segue a visual (V0 → player → [pós-pitch] link, botão de V2, itens, porta 2, acordeão, botão de V6, rodapé); o acordeão é `<details>` nativo; o player é `<button>`; sem armadilha de foco.
- **Zoom 200%:** nenhum bloco usa altura fixa em px para texto; o clímax e a grade reflowam em 1 coluna; o título de V1 pode crescer para 4 linhas sem perder o play da primeira tela em 360 px (teto de §8 já considera isto: a 200% o layout vira o de 180 px de conteúdo, e o título sobe para 5 a 6 linhas, aceito porque é o comportamento do navegador sob ampliação, não da direção).
- **Cor nunca é o único sinal:** estado do acordeão (`+`/`−` + filete), data de corte (rótulo escrito + filete), erro do player (texto + borda + botão).
- **Movimento:** `prefers-reduced-motion: reduce` desliga o fade de 250 ms e qualquer escala de hover; o conteúdo continua lá.
- **Semântica:** um `h1` (título de V1); `h2` por bloco; `h3` por item/ladrilho quando houver; `<details>` com `<summary>`; botão para o checkout é `<a>` com o rótulo da ação (é navegação), o play e o "tentar de novo" são `<button>`; `lang="pt-BR"`; texto alternativo da foto descreve a pessoa, não promete.
- **Teste em aparelho real, ao sol, é parte do gate da etapa 5.** A paleta foi desenhada para sobreviver a isso (menor razão de texto: 6,2).

---

## 10. Movimento e performance

- **Movimento com função ou nenhum.** Existem só quatro: (1) **o fade de 250 ms da revelação de V2** (dá peso ao clímax, uma vez), (2) hover de 150 ms (botão e play), (3) resposta ao toque de 100 ms, (4) troca `+`/`−` do acordeão (instantânea). **Nenhum** movimento no caminho crítico do valor, **nenhuma** revelação por rolagem, **nenhum** efeito de entrada de página. O **gesto assinado** é o amanhecer da oferta (a revelação).
- **O valor nasce no primeiro paint:** título, player (poster) e credencial são HTML estático; a revelação só **mostra** o que já estava no documento (E4).
- **Orçamento:** primeira tela < 3 s em 4G comum. Poster em WebP com `srcset` e dimensões declaradas (sem CLS); player carrega **no clique**; **duas famílias, cinco arquivos de fonte no máximo** (Fraunces 600/700/600 itálico + Inter 400/600) com `display=swap` e `preconnect`; **sem biblioteca**, **sem imagem decorativa**, grão do B em SVG inline; script externo só o do pixel (E13) e o do provedor do player, ambos depois do primeiro paint; o poster é a única imagem acima da dobra.
- **Zero CLS no player:** `aspect-ratio: 16/9`, `width` e `height` no poster, e o bloco revelado só cresce **abaixo** do que já estava.

---

## 11. Gate de direção (passes da skill aplicáveis nesta etapa)

| Passe | Veredito desta etapa | Evidência |
|---|---|---|
| 1 · Direção | **passa** | §2: declarada, reconhecível, teste do concorrente e do esqueleto, lista de veto sem ocorrência |
| 2 · Sistema | **passa** | §3: 10 hexes primitivos, tudo semântico, par de contraste conferido antes do token (§9.1), escalas de espaço, raio, elevação, tipo |
| 4 · Clímax (planejado) | **passa no desenho** | §6: um único clímax, e **todos** os recursos de contraste (escuro, âmbar, degrau de preço, respiro) são gastos **só aqui**. Verificação em tela real é da etapa 4/5 |
| 6 · Acessibilidade (planejada) | **passa no desenho** | §9: todos os pares ≥ AA; alvo, foco, teclado, zoom, movimento reduzido |
| 3, 5, 7, 8, 9 | **ficam para a etapa 4 (modo execução) e para o juiz da etapa 5** | hierarquia sobre texto real, matriz de estados no código, aparelho real, performance medida, integridade sem placeholder |

### 11.1 Desvios e riscos que quem herda precisa saber
1. **Título de V1 acima de 52 caracteres usa 4 linhas no 360** (teto 70, §8). É um desvio declarado da regra de 3 linhas da skill, em troca de caber cena + promessa. Se a etapa 3 entregar > 70, **não se reduz a fonte**: a copy volta.
2. **`--m-lateral` 20 px está fora da escala de 4/8** por decisão de contagem de pixel (320 de conteúdo em 360). Único valor fora da escala; declarado.
3. **Foto de V4 e poster ainda dependem da aprovação da Débora** (`PLANO-FOTO-DEBORA.md`) e do frame final do vídeo (`[[ FALTA #4 e #11 ]]`). O visual está desenhado para o poster provisório.
4. **Os limites foram medidos com a fonte real em arquivo, não no navegador.** Folga de 5 a 8% embutida; **conferir em aparelho de 360 px na etapa 4** (a skill exige aparelho real).
5. **O número de itens da pilha (6 linhas) e dos itens de V3 (4) está travado pela etapa 1** (D26, D27, D30); o visual não suporta item a mais sem estourar a altura-alvo de 100–130vh.
6. **O `[[ FALTA ]]` do horário dos 4 encontros** entra no ladrilho de data; o limite de 14 caracteres de §8 já comporta "quarta · 19h30". Se o horário for faixa ("19h às 20h30"), o limite estoura (13 + prefixo): quem fecha o fato avisa a etapa 3.
7. **O sticky exige que o rótulo do botão exista em até 12 caracteres.** Se o verbo escolhido não encurtar sem perder o sentido, a alternativa é o sticky mostrar só o preço + "ver oferta" (que é âncora, não compra); decisão da etapa 3 com o CEO.

---

## 12. Próximo passo e dono

| Passo | Dono |
|---|---|
| **Etapa 3 · copy por bloco** dentro dos limites de §8 e dos vetos de `01-FISICA.md` §9; verbo do botão com forma curta (≤ 12) e longa (≤ 26) | CEO → `copywriter-senior-continuum` + `debora-voice` + `lexico-icp/` |
| Etapa 4 · build em `04 - web design/eneagrama-para-lideres/index.html` (modo execução da skill de UI, sobre a copy aprovada); aparelho real de 360 px; relatório de contraste final | CEO → executor |
| Etapa 5 · gate dos 8 passes + checklist de mídia do juiz §9 (b); conferir os limites de §8 renderizados | CEO, papel do juiz |
| Aprovação da foto/poster pela Débora; frame final do vídeo | Victor |
