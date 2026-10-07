# CONTRATO DE EXECUTOR — SITE THE GOLDEN TEMPLE

> **Template:** `90-templates/CONTRATO-EXECUTOR.md` · **Tarefa:** site completo, 3 idiomas
> **Executor:** Codex · GPT-6 Astra · **Dono da decisão:** Victor
> **Escrito por:** Claude, em papel de CEO, em 19/09/2026 · **Etapa do circuito:** 4 · execução visual

> 🔴 **Este é o único arquivo que você precisa receber para começar.** Ele aponta; o briefing explica. **Se você precisou ler o repositório inteiro para entender a tarefa, o contrato falhou — registre onde.**

---

## 1. Objeto

**O que existe no fim, em uma frase:**

> O site The Golden Temple como bundle estático multi-página em **PT / EN / ES**, com as três ofertas e as páginas institucionais, responsivo em 390 / 768 / 1440, pronto para upload por gerenciador de arquivos — **sem publicar nada**.

**O que NÃO é o objeto:**

- não é decidir preço, promessa, mecanismo, headline ou ordem de dobra — vêm travados
- não é publicar, apontar domínio, ativar checkout, pixel ou formulário
- não é escrever copy nova em português — a de PT está pronta e é literal
- não é decidir estética — está travada na §4 do briefing

---

## 2. Fontes — cinco, e o briefing é a primeira

| # | Arquivo | Para quê | Ler inteiro? |
|---|---|---|---|
| **1** | `clientes/PRANA KA/BRIEFING-SITE-PRANA-ASTRA-2026-09-19.md` | **a fonte-mãe.** Arquitetura, tokens, tipografia, biblioteca, mapa de páginas, gates, proibições | **sim — começando pela §0 e pela §12** |
| **2** | `clientes/PRANA KA/04 - web design/{mentoria,visao-uterina,curso}/` | **copy e comportamento literais** das três ofertas | só `index.html`, `styles.css` e o config de cada |
| **3** | `clientes/PRANA KA/COPY-GOLDEN-TEMPLE-V3.md` | copy de `/o-templo/` e `/metodo/` — 17 de 18 frases já verificadas contra o docx da marca | sim |
| **4** | `clientes/PRANA KA/04 - web design/_biblioteca/` | as 23 imagens, já em WebP | é pasta — copiar, não ler |
| **5** | `clientes/PRANA KA/ATIVOS-E-LINKS.md` | canais oficiais, WhatsApp, cores amostradas | §1 e §4 |

> 🔴 **Não abra uma sexta fonte por conta própria.** Se faltar informação, é buraco de contrato: registre em **TRAVEI EM** e siga com `[COPY PENDENTE]` visível.

---

## 3. Insumos travados — usar literalmente, não interpretar

| Insumo | Onde está | Estado |
|---|---|---|
| **Copy em PT das três ofertas** | fonte 2 | ✅ **travada — literal, zero edição** |
| **Copy de `/o-templo/` e `/metodo/`** | fonte 3 | ✅ travada |
| **O credo da home** | briefing §8.1 | ✅ **literal dela, 11/08/2026.** Manter "a sombra é mestra" |
| **Os 7 nomes das passagens** | briefing §7.4 | ✅ travados, com miniaturas |
| **Tokens** (cor, tipo, espaçamento) | briefing §4.1 | ✅ travados |
| **Tipografia** — nenhum display < 600 | briefing §4.2 | ✅ **travada. Bodoni Moda removida do projeto** |
| **Arquitetura de arquivos e rotas dos 3 idiomas** | briefing §3.2 | ✅ travada |
| **Ordem das dobras da home** | briefing §8 | ✅ travada |
| **Imagens** | fonte 4 | ✅ 23 peças, 3,4 MB, prontas |
| **Stack** | HTML/CSS/JS puro · sem build · sem framework · Lenis e GSAP por CDN · fontes self-hosted · caminhos root-relative | ✅ travado |

**Se a copy não couber no espaço:** devolva o bloco com a contagem de caracteres e o excedente. **Não reescreva, não encurte, não troque palavra.**

---

## 4. Saída e gate

**Onde entregar** — e isto é a §0 do `AGENTS.md`, não é preferência:

```
clientes/PRANA KA/execução Codex/site-2026-09/
```

Tudo dentro dessa pasta: o site, os registros, os scripts, os relatórios de validação, os temporários. **Nada fora.** `04 - web design/` é fonte somente de leitura.

**Formato:** a árvore completa da §3.2 do briefing + `REGISTRO-2026-09-XX.md` no fecho da §14 + linha nova em `execução Codex/STATUS-CODEX.md`.

**Gate — rode e declare item a item, com resultado real, antes de dizer que terminou.** A lista completa está na **§11 do briefing**, em quatro blocos. Os que reprovam com mais frequência:

- [ ] Renderiza sem erro de console em **390 / 768 / 1440**
- [ ] **Funciona com JavaScript desativado** — conteúdo, navegação e troca de idioma
- [ ] As **27 páginas** existem e nenhuma dá 404; `hreflang` recíproco com `x-default`
- [ ] **Elemento visual próprio em cada dobra** — zero dobras só-texto
- [ ] **Nenhum display abaixo de peso 600**; Bodoni Moda ausente do CSS, do preload e da pasta de fontes
- [ ] Contraste **AA** — conferir ouro sobre marfim, que é onde falha
- [ ] Copy em PT idêntica à fonte travada — **diff limpo**
- [ ] Nenhum link, pixel, checkout ou domínio ativado
- [ ] Lighthouse ≥ **90** nos quatro eixos, em mobile
- [ ] **Teste do olho de 3 segundos:** role rápido; se alguma tela parecer documento de texto, **reprova**

---

## 5. 🔴 Proibido decidir — devolver em vez de resolver

Além da lista permanente do `AGENTS.md` §3 e da **§12 do briefing**, nesta tarefa especificamente:

- **política de cancelamento, reembolso, transferência ou garantia não se inventa.** O bloco fica **oculto**, nunca preenchido — é cláusula com efeito jurídico em nome dela
- **preço:** R$ 333 na Visão Uterina e R$ 97 no Curso são os únicos da obra. **Mentoria não tem preço na página.** Home e institucionais não têm preço nenhum
- ⛔ **jamais usar a URL PagTrust da Masterclass como checkout do Curso.** Ela existe, responde HTTP 200, e mandaria a compradora para o produto errado
- **se faltar asset:** placeholder cinza com a dimensão escrita. **Nunca buscar imagem de banco**
- **ordem das dobras não se reordena**, mesmo que pareça melhor
- **se a copy travada parecer errada:** entregue como está e registre em **TRAVEI EM**
- **headline, promessa, CTA e bloco de oferta em EN/ES** são transcriação, não tradução: traduza preservando pivô, elemento e ordem, e **marque cada um com `<!-- REVISAR: transcriação -->`**
- **nome de produto e marca não se traduz** em nenhum idioma; **depoimento de cliente fica no original**, com tradução entre colchetes abaixo

---

## 6. Fecho obrigatório

```
ARQUIVOS PRODUZIDOS
- caminho — o que é (1 linha)

GATE
- item a item da §11 do briefing, com resultado real (não "deve funcionar")

TRAVEI EM
- toda parada por falta de contrato, com a pergunta exata
- "nenhuma" é resposta válida e rara

PENDÊNCIAS
- o que ficou como [COPY PENDENTE] ou placeholder, e por quê

BLOCOS MARCADOS PARA TRANSCRIAÇÃO
- arquivo + bloco, em EN e ES, que precisam da nossa revisão
```

---

## 7. Lotes — a tarefa é grande demais para um turno só

Entregue **em ordem**, e feche o registro a cada lote. **Um lote reprovado no gate não avança para o seguinte.**

| Lote | Entrega | Gate mínimo |
|---|---|---|
| **L1 · Fundação** | `tokens.css`, `base.css`, fontes, header, footer, as 27 pastas com `index.html` mínimo válido | 27 rotas sem 404 · `hreflang` recíproco · nenhum `../` |
| **L2 · Movimento** | `scroll.js`, `reveal.js`, `nav.js`, `i18n-switch.js` rodando em página vazia | funciona sem JS · `prefers-reduced-motion` desliga tudo |
| **L3 · Ofertas PT** | `/mentoria/`, `/visao-uterina/`, `/curso/` | diff de copy limpo · CTAs corretos · sem preço na Mentoria · política oculta |
| **L4 · Home PT** | `/index.html`, 10 dobras na ordem da §8, com o 2.5D | elemento por dobra · 2.5D degrada nas 4 condições · credo literal |
| **L5 · Institucionais PT** | `/o-templo/`, `/metodo/`, `/caminhos/`, `/arte/`, `/prana/` | copy da fonte 3 literal · card sem destino vira `[EM BREVE]`, não link |
| **L6 · EN e ES** | as 18 páginas | nome de produto intacto · depoimento no original · conversão marcada |
| **L7 · Fecho** | `sitemap.xml`, `robots.txt`, gates da §11 rodados e reportados | Lighthouse ≥ 90 · AA · console limpo |

> **Por que as ofertas vêm antes da home:** são as três que geram dinheiro. **Se o tempo acabar no L3, o que existe já converte.** A home é a mais bonita e a que menos vende.

---

## 8. Metadados

| | |
|---|---|
| **Tarefa** | Site The Golden Temple · PT/EN/ES · 27 páginas |
| **Executor** | Codex · GPT-6 Astra |
| **Dono da decisão** | Victor |
| **Contrato escrito por** | Claude, em papel de CEO, em 19/09/2026 |
| **Etapa do circuito** | 4 · execução visual (`CLAUDE.md` §6.3) |
| **Revisão cruzada por** | Claude, na promoção — **nunca o próprio executor** |
| **Rito de integração** | `40-operacao-rotinas/RITO-INTEGRACAO-CODEX.md`, gate de 5 itens |

---

*Regra-mãe: prompt curto que aponta vence prompt longo que explica.*
