# O QUE PRECISAMOS DA PRANA — folha de call · 11/08/2026, 15h

> **Janela: ~1h30** (ela tem compromisso às 16h35). **Não cabe passar item por item.**
> Cada campo abaixo foi verificado no código dos bundles em 10/08/2026, não recuperado de memória.
> Regra: **campo sem resposta continua `null` e a página continua fail-closed.** Não inventamos preço, prazo, garantia nem credencial.

---

## AS TRÊS QUE VALEM A CALL INTEIRA

Se sair só isto, a call foi um sucesso. Se sair tudo menos isto, a call foi conversa.

| # | Pergunta | Por quê |
|---:|---|---|
| **1** | **Quanto custa a Mentoria — valor e parcelamento?** | a página **está no ar e não consegue receber dinheiro** sem esse número. É a oferta de maior ticket do pacote |
| **2** | **Qual o link de pagamento do Curso?** (InfinitePay) | um campo. Preenchido, o Curso publica e vende sozinho a R$ 97 |
| **3** | **Dia 19 de agosto, quarta-feira — que horas?** | a página no ar hoje diz "sábado, 8 de agosto, 9h30", com checkout ativo |

**Formulação sugerida para a 1:** *"a sua página da mentoria já está no ar e funciona. A única coisa que falta para ela conseguir receber é um número. Qual é?"*

---

## 1. MENTORIA — no ar, fail-closed

`OFFER_CONFIG` tem 9 campos obrigatórios. Enquanto qualquer um for `null`, `offerIsReady = false` e **a página não vende por construção**.

**Três já estão respondidos** por DEC de 27/07/2026 — só confirmar em voz alta:

| Campo | O que já temos | Ação |
|---|---|---|
| `meetingSchedule` | encontros a cada 14 dias, **quartas, 19h** | confirmar |
| `cohortStart` | **entrada a qualquer momento** (assinatura contínua) | confirmar a formulação |
| `enrollmentDeadline` | **sem fechamento** — entrada perene | confirmar a formulação |

**Seis faltam de verdade:**

| # | Campo | Pergunta na voz dela |
|---:|---|---|
| 1 | `price` | quanto custa? |
| 2 | `installments` | parcela em quantas vezes? |
| 3 | `capacity` | quantas mulheres cabem por ciclo? *(vale como escassez real; se não houver limite, dizemos que não há)* |
| 4 | `checkoutUrl` | **PagTrust ou InfinitePay** — e o link |
| 5 | `refundOrCancellationPolicy` | se ela quiser sair no meio, como funciona? |
| 6 | `postPurchaseSteps` | pagou — o que acontece em seguida, e em quanto tempo? |

**Decisão de arquitetura que precede tudo isto (P-ME-13):**

> **A Visão Uterina paga a R$ 300 entra como porta da Mentoria?** Se sim, a página deixa de ser página de compra e vira página de agendamento — muda CTA e dobra final.
> **Nossa recomendação, fechada:** sim para a sessão paga, **e** a Masterclass continua existindo para alimentá-la. Uma hora por prospect não escala e não sobrevive a uma semana lunar. E os R$ 300 se chamam **crédito**, nunca desconto.

**Campos opcionais, não bloqueiam:** `metaPixelId`, `campaignOfferFelinas`.

---

## 2. CURSO — construído, não publicado, seis gates

`checkoutUrl` está vazio e os CTAs são fail-closed.

| Gate | O que falta | Bloqueia? |
|---|---|---|
| **GATE-05** | **URL oficial do checkout** | 🔴 **é o único que impede vender** |
| GATE-01 | confirmar **R$ 97** | 🔴 preço visível, ainda não aprovado para publicar |
| GATE-02 | **nome, ordem e tema das sete meditações** | 🟡 hoje há sete marcadores neutros na página |
| GATE-03 | **plataforma, forma e duração do acesso** | 🟡 item omitido da lista; FAQ depende disso |
| GATE-04 | **garantia ou devolução** — existe? qual? | 🟡 nenhuma promessa inserida |
| GATE-06 | **fluxo pós-compra** | 🟡 nenhuma promessa de entrega inserida |

**Sobre a proposta dela de vender por conversa no WhatsApp:** o que ela quer evitar é plataforma e taxa — e o **link InfinitePay já resolve isso**, direto no botão, sem conversa no meio. R$ 97 é ticket de impulso, e impulso não sobrevive a "me chama no direct". A conversa é o formato certo para a Mentoria e para a Visão Uterina, não para o Curso — e é exatamente a hora dela que ela disse querer preservar.

---

## 3. MASTERCLASS — no ar, anunciando data que não existe

| # | O que precisamos | Estado |
|---:|---|---|
| 1 | **dia, data e horário** — 19/08, quarta, que horas? | a página diz "Sábado, 8 de agosto, 9h30" em 15 pontos |
| 2 | **âncora narrativa: o Lionsgate é 08/08 e terá passado no dia 19** | reancorar nos **eclipses de agosto** (que ela já prometeu no card) ou reposicionar como **colheita** do que o portal abriu — decisão dela |
| 3 | **a mulher que comprou na sexta à noite foi avisada?** | única pendência da conta com dinheiro de terceiro já recebido |
| 4 | **"psicóloga" pode ir para a página?** CRP ativo hoje? | ela autorizou por escrito em 31/07; o gate é regulatório, não editorial |
| 5 | **fluxo pós-pagamento** — como a inscrita recebe o link? | já existe pagante sem fluxo definido |

**Pergunta 2 na voz dela:** *"o Lionsgate abre em 8/8 e a vivência agora é dia 19. A gente ancora nos eclipses, que ainda estão à frente, ou posiciona como a colheita do que o portal abriu?"* — **é também a resposta ao "algo ainda não pegou"** que ela levantou duas vezes.

---

## 4. PÁGINA-MÃE — construída, não publicada

`js/config.js` tem três campos vazios hoje:

| Campo | Precisa |
|---|---|
| `links.felinas` | **URL pública da Masterclass** — a página está no ar e nós não temos a URL escrita em lugar nenhum |
| `links.instagram` | @ oficial |
| `links.contact` | WhatsApp ou e-mail de contato |

*(`links.curso` e `links.mentoria` já apontam para `thegoldentemple.io` — o `/curso` só responde quando publicarmos.)*

**Decisão de escopo (P-PM-07, P-PM-08):** o áudio dela pede hub completo — YouTube, Spotify, fotos, singles, DJ sets, círculos das vozes da deusa, espetáculos, e um "código" por frente. **É ampliação sobre o pacote de 4 páginas.**

**Como conduzir, na ordem:** reconhecer a visão → mostrar que **"Templo Dourado como escola" + "Templo Dourado mentoria" já é a arquitetura construída**, ou seja, ela e nós chegamos no mesmo desenho → então separar o que é pacote do que é novo. **Nunca abrir com "isso é fora do escopo".**

**Nossa posição sobre a ordem:** o hub é o ativo que a operação vai usar por anos — e é por isso mesmo que ele não vem antes da Mentoria vender. Vitrine da escola depois da primeira matrícula paga.

---

## PLACAR DA CALL

Marque ao vivo. **Sete respostas fecham o pacote.**

- [ ] preço + parcelamento da Mentoria
- [ ] plataforma + link de checkout da Mentoria
- [ ] link InfinitePay do Curso
- [ ] horário do dia 19
- [ ] âncora narrativa (eclipses ou colheita)
- [ ] capacidade, cancelamento e pós-compra da Mentoria
- [ ] as sete meditações + acesso + garantia do Curso

**Se o tempo apertar, sacrifique nesta ordem:** escopo do hub → Curso (gates 02, 03, 04) → página-mãe. **Nunca sacrifique:** preço, link e data.

---

**Base:** `STATUS.md` §§0-pré, 4, 5 · `PLANO-ALTERACOES-2026-08-10.md` · `REGISTRO-INTERACAO-2026-08-10.md` · verificação direta em `mentoria/script.js`, `curso/js/main.js`, `curso/HANDOFF.md`, `the-golden-temple-v2/js/config.js`
