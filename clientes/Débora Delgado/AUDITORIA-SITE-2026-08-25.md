# AUDITORIA DO SITE "LIDERANÇA NA RAIZ" · 25/08/2026

> STATUS: VIGENTE · fonte
> **Objeto:** 16 páginas HTML + 3 assets, entregues por ela no grupo em 25/08 às 15h08, em `04 - web design/novo funil + páginas/`
> **Motivo declarado por ela:** *"Quer que eu te mande a pasta com todos os htmls? **Pq aí dá pra pegar separado pra fazer o tráfego**"* `15h07`
> **Objetivo declarado dela para o funil:** *"meu objetivo agora é conseguir várias pessoas pra preencher esse forms"* · *"e aí eu voltar a fazer a consultoria gratuita"* `11h17`
> **Auditoria estática (código), não visual.** QA de renderização em 390/768/1440 px continua pendente.

---

## 1. O QUE ESTÁ CERTO

- **16 páginas, arquitetura pública × membros funcionando.** `nav.js` troca o menu conforme o estado de login, com os 4 pilares na área logada (Maestria · Método Raiz · Liderança · Eneagrama).
- **✅ O formulário tem endpoint real:** envia para Google Apps Script (`AKfycbzCnrp5pZOrr…`), com Formspree como segunda via. **Os dados vão para planilha.** Fecha uma pendência de 04/08.
- **CTA consistente nas páginas públicas:** todas terminam em "Conversa gratuita" ou "Marcar minha conversa gratuita", apontando para `consultoria.html`.
- **Viewport presente em 15 das 16 páginas.**
- **H1 único** em 14 das 16.
- **As 3 páginas sem CTA de consultoria** (`eneagrama`, `maestria`, `metodo-raiz`) **são de membros — está correto.**

---

## 2. 🔴 P0 · BLOQUEIAM O TRÁFEGO

### P0-1 · Nenhuma das 16 páginas tem pixel ou analytics
Varredura por `gtag`, `fbq`, `dataLayer`, `pixel`, `analytics`: **zero ocorrências em todo o site.**

> **Não se roda tráfego pago sem isso.** ⚠️ **Correção de fato (27/08):** este parágrafo dizia que julho custou R$ 233 por tracking quebrado. **Está errado.** A refutação do Victor em 22/07 (`03 - tráfego pago/LOG-DECISOES.md`) estabeleceu que o **tracking estava validado end-to-end** e que o funil morria antes da medição: dashboard de 21/07 com **PageView 140 · ViewContent 14 · CTA 5 · Lead 0 · Checkout 0**. O pixel PagTrust não atribuído ao produto era falha real e foi corrigida, **mas não era a causa do zero**. A regra de ouro de testar end-to-end continua valendo como higiene; **a lição de julho, porém, é outra e é maior: a página recebeu 140 visitas e não gerou uma inscrição.** Subir tráfego para um site que não converte não é problema de instrumentação, é gasto em cima de um furo conhecido.

**Precisa antes de qualquer verba:** pixel do Meta em todas as páginas · evento de `Lead` no envio do formulário · CAPI se possível · teste end-to-end com evento chegando.

### P0-2 · `eneagrama.html` não tem viewport e pesa quase 1 MB
Sem `<meta viewport>`, **a página quebra em celular** — e é a peça mais rica do site.
Peso: **480 KB de HTML + 464 KB de `eneagrama-data.js` = ~944 KB numa página só.** Em 4G, isso é abandono antes de carregar.

### P0-3 · Senha da área de membros em texto claro no código
`membros.js` linha 8: `Senha atual: raiz2026`. E `nav.js` repete no cabeçalho.
O hash é djb2 rodando **no cliente**, e o estado fica em `localStorage`.

**Três consequências, e a terceira é a que custa:**
- qualquer pessoa que abra o código-fonte entra
- **senha única e compartilhada:** não há como saber quem acessou
- **não há revogação individual:** quem sair da mentoria continua entrando

**Para uma área de membros de produto de R$ 3.000 a 6.000, isso é passivo.** Não precisa virar sistema de login: um gate por link assinado, ou senha por turma com rotação, já resolve o essencial.

---

## 3. 🟡 P1 · CORRIGIR ANTES DE MOSTRAR

### P1-1 · Link quebrado
`membros.html` aponta para **`mapa.html`, que não existe na pasta.**

### P1-2 · O formulário foi de 20 para 22 perguntas
A auditoria de 18/08 recomendou **cortar para 12**, com a régua "ou qualifica ou municia". **Subiu duas.**
⚠️ **E o motivo é nosso: `ENTREGA-18-08_FEEDBACK-FORMULARIO.md` foi escrito e nunca enviado a ela.** É o quarto pedido de feedback dela em aberto. Ela seguiu construindo sem a informação.

### P1-3 · `servicos.html` tem 4 KB e nenhum preço
É a página mais magra do site e **é exatamente a que um comprador B2B abriria.** Nenhuma menção a valor, formato ou escopo.

### P1-4 · Não existe nenhuma página B2B
Todo o site fala com pessoa física, na língua dela — como a própria Débora identificou na call: *"a empresa vai falar sobre rotatividade, turnover, PDI, métricas organizacionais"*.
**E há um lead vivo esperando exatamente isso:** a gerente da Vale do Rio Doce pediu portfólio e não recebeu nada.

### P1-5 · H1 duplicado em `consultoria.html` e `quiz.html`

---

## 4. O QUE MUDOU NO DIA, FORA DO CÓDIGO

**⭐ Ela editou um vídeo de depoimentos com Claude.**
> *"Peguei uns depoimentos antigos e pedi pro Claude editar e fazer um vídeo.. haha olha como ficou"* `11h30` — vídeo de **1min51, HD**
> *"Esses depoimentos foi do primeiro curso que fiz"* · *"Tô juntando tudo pra colocar no site ou no insta"* · *"**Eu tinha esses vídeos no insta, não sei pq apaguei**"* `11h45`

**Consequência: existe prova social em vídeo, pronta, e ela já a tinha apagado uma vez.** Some com o depoimento pedido à Gabi (`B25-03`) e com os 3 vídeos de maestria de 19/08: **a conta passou de zero prova para quatro fontes em uma semana, e nenhuma está publicada.**

**Ela declarou o objetivo do funil em uma frase:**
> *"meu objetivo agora é **conseguir várias pessoas pra preencher esse forms**"* · *"e aí eu **voltar a fazer a consultoria gratuita**"* `11h17`

---

## 5. A ORDEM QUE EU RECOMENDO

**Antes de desenhar entrada de funil, três correções e um envio:**

| # | O quê | Por quê | Dono |
|---|---|---|---|
| 1 | **Pixel + evento de Lead + teste end-to-end** | sem isso o tráfego é cego, e a conta já pagou por isso uma vez | Victor |
| 2 | **Viewport e peso do `eneagrama.html`** | é a peça mais rica e hoje quebra em celular | Victor |
| 3 | **Gate de acesso da área de membros** | senha em texto claro, compartilhada, sem revogação | Victor |
| 4 | **Enviar o feedback do formulário** (escrito em 18/08, nunca enviado) | ela está construindo sem a informação, e o forms cresceu | Victor |

**Depois disso, e não antes:** `servicos.html` com oferta e preço · página B2B para destravar o lead da Vale · integração dos quatro ativos de prova.

---
*Auditoria estática em 25/08/2026. Nenhum arquivo alterado, nenhuma correção aplicada. Renderização visual em 390/768/1440 px pendente.*
