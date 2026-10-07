# AUDITORIA — thegoldentemple.io em produção

> **Data:** 25/09/2026 · **Auditado por:** Claude, em papel de CEO · **Modo:** AUDITORIA (falha + correção + decisão)
> **Método:** navegador real (desktop 1024 e mobile 375), leitura do DOM renderizado, requisição das 27 rotas e de 7 URLs de controle, inspeção de rede e console.
> **O que está no ar:** o pacote L7 do Astra (`execução Codex/site-2026-09/_entrega/`), **sem os três ajustes pré-upload** de `ENTREGA-SITE-2026-09-25.md` §7.2.

---

## 1. VEREDITO

**A casa está de pé; a copy tem cinco erros visíveis ao público, e três deles são nossos.**

A parte técnica passa em tudo o que foi medido. **O que reprova são fatos**: um marcador de rascunho exposto e quatro afirmações que contradizem decisões já registradas. Tudo é texto e nenhum item exige refazer design. 🔴 **Enquanto não forem corrigidos, o link não vai para a Prana.** A página que ela vai abrir primeiro é a home, e o primeiro erro aparece logo abaixo dos depoimentos das alunas dela.

---

## 2. 🔴 P0 — visível agora, indexável, e contradiz decisão registrada

| # | Onde | O que está no ar | Por que está errado | Origem |
|---|---|---|---|---|
| **1** | home PT, EN e ES, logo abaixo dos 4 depoimentos | **`[COPY PENDENTE]`** · `[COPY PENDING]` · `[TEXTO PENDIENTE]` | marcador de rascunho publicado. O pacote avisava (`LEIA-ANTES-DE-PUBLICAR` item 1) | contradição §8 × §12 **do nosso briefing**; resolvida em `DEC-2026-09-25-001` e não aplicada antes do upload |
| **2** | Mentoria PT e ES: selo do hero, eyebrow, abertura da oferta, FAQ e meta description (**6 ocorrências por idioma**) | ***"12 encontros"*** | modelo revogado. O vigente é **biblioteca gravada + encontros a cada 14 dias + entrada contínua** (`DEC-2026-08-11-002`). A mesma tela diz *"12 encontros"* no título e *"a cada 14 dias · ciclo contínuo"* na caixa ao lado. **E a versão EN já não fala em 12: cada idioma diz uma coisa** | 🔴 **nossa.** A copy canônica trazia o número do modelo antigo (`EXTRACAO-MENTORIA-27-07.md` l. 12) e o briefing mandou mantê-la *"literal, zero edição"* |
| **3** | Mentoria, FAQ — duas respostas | *"serão apresentados antes da abertura do **checkout**"* · *"confirmada após a aprovação do pagamento no **checkout**"* | compra direta, revogada em 19/08 (`DEC-2026-08-19-001`). A entrada é por conversa | canônica antiga, sinalizada pelo Codex (`REGISTRO-2026-09-21` item 4) e não corrigida |
| **4** | Visão Uterina, bloco de investimento | ***"Sessão individual e online"*** · sem duração | ela confirmou por escrito em 20/09: **online ou presencial, 1h30** (`DEC-2026-09-20-001`) | 🔴 **nossa**, frase escrita em 19/09 |
| **5** | Curso PT, EN e ES | **R$ 97** visível (2× por página) | preço em revisão: ela falou em ~R$ 297 e o Despertar nunca foi vendido. Decisão: **ocultar até ela confirmar** (`DEC-2026-09-25-001`) | ajuste pré-upload não aplicado |

---

## 3. 🟡 P1 — não é fato errado, mas é visível e custa confiança

| # | Onde | O quê | Correção |
|---|---|---|---|
| **6** | home e Visão Uterina, avatares dos 4 depoimentos | 🔴 **são os recortes que eu descartei em 19/09.** O rosto sai fora do centro e o círculo mostra mais pétala que pessoa, pior em Natália e Taynah. **Não consegui apagá-los da `_biblioteca/` e não os marquei como descartados, então o Astra usou.** Erro nosso | **remover os avatares.** Nome + citação sustentam a prova; foto mal recortada de cliente real enfraquece. Refazer só com recorte manual |
| **7** | Visão Uterina, CTA do topo | WhatsApp pré-preenchido: *"quero saber **o valor** e os horários"* — com R$ 333 na mesma página | *"Vim pela página da Visão Uterina e quero agendar minha sessão."* (já usado no CTA de baixo) |
| **8** | Visão Uterina | *"R$333"* e *"R$ 333"* na mesma página | padronizar **R$ 333** |

---

## 4. ⚪ P2 — infraestrutura, fazer esta semana

| # | O quê | Correção |
|---|---|---|
| **9** | 404 é a página padrão da Hostinger, **em inglês** | `404.html` na identidade do site, com os três caminhos (Templo, Visão Uterina, Mentoria) + `ErrorDocument 404 /404.html` no `.htaccess` |
| **10** | `www.thegoldentemple.io` serve o site em vez de redirecionar | 301 de `www` para o domínio raiz. O canonical evita dano de busca, mas o link compartilhado fica duplicado |
| **11** | `og:image` é o selo em WebP **transparente** | no WhatsApp e no Instagram a prévia pode sair com fundo preto. Gerar **1200×630 JPG**, selo sobre marfim |
| **12** | `/masterclass/` e demais caminhos antigos dão 404 | **se algum link divulgado (bio, carrossel, Linktree) aponta para a página antiga**, 301 para `/visao-uterina/` (`DEC-2026-09-02-002`). ⬜ Victor confere onde os links antigos circulam |

---

## 5. ✅ O QUE PASSA — medido, não presumido

| Item | Resultado |
|---|---|
| 27 rotas | **200 nas 27** · barra final redireciona |
| `hreflang` + `x-default` | recíproco na home, conferido |
| `sitemap.xml` · `robots.txt` | 27 URLs, domínio correto, robots permissivo |
| HTTPS | forçado (`http://www` → `https://www`) |
| Console no carregamento | **zero erros** · nenhuma requisição 404 da página |
| Mobile 375 | **sem estouro horizontal** · hero da Visão Uterina íntegro |
| Tipografia | H1 em **Fraunces 650** · Bodoni ausente |
| Hero 2.5D | inicializa na primeira interação · desliga com movimento reduzido |
| Som | botão presente, **desligado por padrão** |
| Revelação por rolagem | funciona com roda do mouse **e** com clique em âncora (`#oferta`) |
| Mentoria | **sem preço** · política de cancelamento **oculta** · 2 CTAs para `wa.me/5548984248922` |
| Visão Uterina | **R$ 333** · 4 depoimentos com nome · 5 CTAs WhatsApp |
| Curso | **7 passagens nomeadas** · zero *"Passagem"* genérico · estágio 1 (WhatsApp) ativo |
| Vocabulário proibido | *"tantra"*, *"empoderamento"*, *"psicóloga"* — **ausentes** da Mentoria |

---

## 6. O QUE ISSO MUDA NA ENTREGA

**O site já está no ar.** A mensagem de `ENTREGA-SITE-2026-09-25.md` §7.3 muda em dois pontos:

| Bloco | Antes | Agora |
|---|---|---|
| **1** | *"[link] — senha: [x]"* | **link aberto, sem senha** |
| **4** | *"Se não tiver nada que você queira mudar, eu subo na segunda."* | 🔴 **sai.** No lugar: *"Se tiver algo que você queira mudar, me fala e eu ajusto."* |

🔴 **E a ordem é inegociável: corrigir os cinco P0, subir de novo, conferir, e só então mandar o link.** Ela vai ler o site inteiro e procurar o que está errado. Se o primeiro erro que ela encontrar for um `[COPY PENDENTE]` embaixo dos depoimentos das alunas dela, **isso confirma exatamente a expectativa que se queria desarmar.**

---

## 7. CONTRATO DE CORREÇÃO — para o Astra

> 🔴 **SUPERADO NO MESMO DIA.** Fonte vigente: **`ITERACAO-SITE-2026-09-25.md`**, que acrescenta a infraestrutura (404, `.htaccess`, imagem de prévia), a reauditoria e a ordem de envio. O texto abaixo fica como registro; **não executar a partir daqui.**

> Destino: `clientes/PRANA KA/execução Codex/site-2026-09/` (§0 do `AGENTS.md`). Refazer `_entrega/`, manifesto e zip ao final.

**Objeto:** corrigir os itens 1–8 nas 27 páginas, sem alterar layout, ordem de dobra ou qualquer texto fora da lista.

| # | Ação exata |
|---|---|
| 1 | home PT/EN/ES: trocar o marcador pelo **vídeo da Carol** (`youtube.com/watch?v=3NbO7HBGbkU`), embed `youtube-nocookie.com` com `loading="lazy"`, legenda *"Carol"*. Autorização: `DEC-2026-09-25-001` |
| 2 | Mentoria PT/ES/EN: **remover toda menção a "12 encontros"**, inclusive selo do hero e meta description. Selo do hero passa a **"a cada 14 dias"**. Onde a frase precisar de número, usar ***"encontros a cada 14 dias"*** |
| 3 | Mentoria FAQ, as duas respostas: trocar a referência a checkout por ***"A entrada começa numa conversa com a Prana. Depois dela, você recebe o acesso à plataforma e o caminho dos oito Portais do Ventre."*** (mesmo sentido do `postPurchaseSteps` vigente) |
| 4 | Visão Uterina PT/EN/ES: ***"Sessão individual de 1h30, online ou presencial, conduzida por Prana Ka."*** |
| 5 | Curso PT/EN/ES: **ocultar o preço**, mantendo o CTA de WhatsApp. Não apagar: `hidden` no bloco, para reativar com uma linha |
| 6 | depoimentos: **remover os avatares** na home e na Visão Uterina. Manter nome e citação |
| 7 | Visão Uterina, CTA do topo: mensagem pré-preenchida ***"Olá, Prana! Vim pela página da Visão Uterina e quero agendar minha sessão."*** |
| 8 | padronizar ***R$ 333*** |

**Gate de fecho:** zero ocorrências de `PENDENTE|PENDING|PENDIENTE|12 encontros|12 meetings|12 encuentros|checkout|R$ 97` no texto renderizado das 27 páginas · Lighthouse de novo nas páginas alteradas · diff limpo fora dos 8 itens.

🔴 **As traduções EN/ES dos itens 2–4 são transcriação:** marcar `<!-- REVISAR: transcriação -->`, como no L6.

---

**Base:** navegação ao vivo em 25/09/2026 · `REGISTRO-2026-09-21.md` · `DECISOES.md` DEC-2026-08-11-002, DEC-2026-08-19-001, DEC-2026-09-20-001, DEC-2026-09-25-001 · `ENTREGA-SITE-2026-09-25.md`
