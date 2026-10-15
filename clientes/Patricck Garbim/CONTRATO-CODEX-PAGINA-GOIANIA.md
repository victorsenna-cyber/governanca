> 🔴 **SUPERADO em 10/10/2026 (DEC-PG-21):** Victor decidiu que a construção é feita pelo Claude nesta sessão, sem Codex. Arquivo mantido como registro; a página vive em `site/goiania/index.html`.

# CONTRATO DE EXECUTOR — Página Goiânia · orientaacolhimento.com.br

> **Tipo:** contrato (template `90-templates/CONTRATO-EXECUTOR.md`) · **Escrito em:** 09/10/2026 · **Por:** Claude (CEO) · **Dono da decisão:** Victor
> **Campo vazio vira pergunta ao dono, nunca invenção.**

---

## 1. Objeto

**O que existe no fim, em uma frase:**
A página `/goiania/` do orientaacolhimento.com.br implementada em HTML/CSS/JS estático, responsiva em 390/768/1440, **pronta para homologação com `noindex` — sem publicar.**

**O que NÃO é o objeto:**
- não é escrever, encurtar ou reordenar copy — ela vem travada;
- não é publicar, apontar DNS, mexer no Cloudflare de produção nem no site atual (ele indexa e gera internação; **não pode cair**);
- não é instalar pixel, Google Ads, Meta Pixel ou qualquer script de terceiro;
- não é criar formulário: a conversão é só o botão de WhatsApp;
- não é buscar foto em banco de imagens.

---

## 2. Fontes — máximo 5

| # | Arquivo | Para quê | Ler inteiro? |
|---|---|---|---|
| 1 | `clientes/Patricck Garbim/COPY-PAGINA-GOIANIA.md` | a copy, bloco a bloco (B0–B12) + Anexo A (curva, botões, direção) | sim — **ignorar o Anexo B** (reserva, não construir) |
| 2 | este contrato | tokens, limites, stack, gate | sim |
| 3 | `clientes/Patricck Garbim/DECISOES.md` | só **DEC-PG-05 item 1** (proteção anti-robô: o que pode e a linha) e **DEC-PG-07** (nenhum dado de saúde) | só esses dois |

---

## 3. Insumos travados (usar literalmente, não interpretar)

| Insumo | Onde está | Estado |
|---|---|---|
| **Copy final, bloco a bloco** | fonte 1, B0–B12 | ✅ travada — **literal, zero edição**. Texto entre `⟨ ⟩` é nota de construção, **não vai para a tela**. |
| **Marcadores `[[ FALTA … ]]`** | fonte 1 | renderizar como **caixa tracejada amarela** com o texto do marcador visível, para homologação. Onde houver "Texto provisório" logo abaixo do marcador, renderizar o provisório e a caixa acima dele. |
| **Tokens** | abaixo | ✅ |
| **Limites de caracteres** | abaixo | ✅ |
| **Assets** | foto do Patricck (B5): **não existe** · **nenhuma foto, nome ou lista de unidade** (DEC-PG-19) · **nenhum vídeo** | placeholder cinza com a dimensão escrita |
| **Stack** | HTML + CSS + JS puro, sem framework, sem CDN externo, fonte do sistema ou uma fonte self-hosted (woff2) | ✅ |

### 3.1 Tokens — direção: clara, calma, de casa (Anexo A da copy)
| Token | Valor |
|---|---|
| fundo | `#FAF7F2` (creme) · seção alternada `#F1ECE3` |
| texto | `#2B2A28` · secundário `#5C5852` |
| destaque / botão | verde-WhatsApp sóbrio `#1F7A55`, texto branco · hover `#18603F` |
| linha / borda | `#DDD5C8` |
| caixa `[[ FALTA ]]` | borda 2px tracejada `#C9A227`, fundo `#FFF8DC` |
| **proibido** | vermelho, preto de fundo, sirene, contagem regressiva, "URGENTE", 0800 |
| tipografia | uma família sem serifa legível (ex.: Inter self-hosted ou `system-ui`) · corpo **18px** no celular, 19–20px no desktop · altura de linha 1.6 · H1 32px celular / 48px desktop |
| raio | 12px em cartões, 999px em botões |
| largura de texto | máx. 680px de coluna de leitura |
| espaçamento | escala 8px (8/16/24/40/64/96) |

### 3.2 Limites e layout por bloco
| Bloco | Layout | Limite |
|---|---|---|
| B0 | faixa fina no topo, texto pequeno, 1 linha no desktop, até 2 no celular | — |
| B1 | H1 + subtítulo + botão + microtexto; **sem imagem de fundo**; acima da dobra em 390×844 | H1 ≤ 110 caracteres (atual: 103) |
| B2 | texto corrido, coluna estreita | — |
| B3 | texto corrido; a última frase em destaque de peso (semibold), sem caixa | — |
| B4 | **clímax** — 3 cartões numerados (empilhados no celular, 3 colunas no desktop) | — |
| B5 | foto (placeholder 4:5) + texto | — |
| B6 | 4 passos numerados em linha do tempo vertical + botão | — |
| B7 | lista com ícones simples em SVG inline (traço, sem cor de alarme) | — |
| B8 | 3 cartões lado a lado (empilhados no celular) + texto + botão | — |
| B9 | **suprimida na v1** — não renderizar | — |
| B10 | acordeão acessível (`<details>/<summary>`) | — |
| B11 | faixa de fechamento centralizada + botão | — |
| B12 | rodapé com o texto literal; 192 e 188 como `tel:` | — |
| botão fixo | no celular, barra fixa inferior com o botão "Conversar com o Patricck no WhatsApp", aparece depois de rolar a B1 | — |

### 3.3 WhatsApp e proteção (DEC-PG-05 item 1)
- **O número não aparece no HTML.** Todos os botões apontam para `/ir/whatsapp` (ou equivalente), que **numa etapa nossa** vira uma rota protegida por Turnstile e redireciona para `wa.me/<número>?text=Vim%20pela%20p%C3%A1gina%20de%20Goi%C3%A2nia`. **Nesta entrega:** a rota é um stub que mostra "rota de WhatsApp — configurar no deploy". Documentar no README onde trocar.
- **Não bloquear nem tratar diferente nenhum robô** no código da página. Googlebot/AdsBot e bots verificados veem a mesma página que a família. Filtragem de robô é configuração do Cloudflare, feita por nós — fora deste contrato.
- Evento de clique: um `data-event="whatsapp_click"` em cada botão, sem script de terceiro.

### 3.4 SEO de homologação
`<meta name="robots" content="noindex, nofollow">` **obrigatório** nesta entrega. `<title>`: "Internação masculina em Goiânia — visite antes de decidir | Orienta Acolhimento". `<meta description>`: subtítulo do B1 truncado em 155 caracteres. HTML semântico (um H1, H2 por bloco). Sem dados estruturados de clínica (não somos clínica — B12).

**Se a copy não couber no espaço:** devolver o bloco com a contagem de caracteres e o excedente. **Não reescrever, não encurtar, não trocar palavra.**

---

## 4. Saída e gate

**Onde entregar:** `clientes/Patricck Garbim/execução Codex/pagina-goiania/` (§0 do `AGENTS.md`: escrita só em `execução Codex/`) + uma linha no `STATUS-CODEX.md` da conta (criar se não existir).
**Formato:** `index.html` + `styles.css` + `main.js` (opcional) + `assets/` + `README.md` de até 10 linhas (como abrir, onde trocar a rota do WhatsApp, onde remover o `noindex`).

**Gate — o executor roda e declara item a item, antes de dizer que terminou:**
- [ ] Renderiza sem erro de console em 390 / 768 / 1440
- [ ] Copy idêntica à fonte travada (diff do texto visível contra B0–B12 limpo; notas `⟨ ⟩` ausentes da tela)
- [ ] Todo `[[ FALTA ]]` visível como caixa amarela **e listado** em PENDÊNCIAS
- [ ] Lighthouse mobile ≥ 90 em performance, acessibilidade e boas práticas (SEO não se mede: `noindex` é proposital)
- [ ] `noindex` presente · nenhum pixel, analytics de terceiro, formulário, domínio ou DNS ativado
- [ ] Número de WhatsApp ausente do HTML; todos os botões apontam para a rota stub
- [ ] Contraste AA em todo texto e botão; acordeão operável por teclado
- [ ] Nenhuma cor vermelha, nenhuma contagem, nenhum 0800

---

## 5. 🔴 Proibido decidir — devolver em vez de resolver

Além da lista permanente do `AGENTS.md` §3:
- faltou asset → placeholder cinza com a dimensão escrita; **nunca** imagem de banco, nunca foto gerada de pessoa;
- bloco que não faz sentido visualmente → entregar como está e apontar no fecho;
- **ordem dos blocos é travada** — não reordenar, não fundir, não cortar;
- não construir o Anexo B (INSS) nem nenhuma menção a INSS, benefício ou previdência;
- não escrever nada em `STATUS.md`, `DECISOES.md` ou `PAINEL.md` da conta.

---

## 6. Fecho obrigatório do executor

```
ARQUIVOS ALTERADOS
- caminho — o que mudou (1 linha)

GATE
- item a item, com resultado real (não "deve funcionar")

TRAVEI EM
- toda parada por falta de contrato, com a pergunta exata

PENDÊNCIAS
- cada [[ FALTA ]] e cada placeholder, com o bloco
```

---

## 7. Metadados

| | |
|---|---|
| **Tarefa** | página Goiânia (lisa) — homologação |
| **Executor** | Codex |
| **Dono da decisão** | Victor |
| **Contrato escrito por** | Claude (CEO) em 09/10/2026 |
| **Etapa do circuito** | 4 · execução visual (etapas 1–2 comprimidas no Anexo A da copy e no §3 deste contrato) |
| **Revisão cruzada por** | Claude, no rito de integração (`40-operacao-rotinas/RITO-INTEGRACAO-CODEX.md`) — antes de qualquer deploy |
| **Prazo** | até 16/10/2026 |
| **Publicação** | 🔴 só depois do portão de escrita (léxico `D` + inventário de Goiânia) e da troca dos `[[ FALTA ]]` — decisão Victor |
