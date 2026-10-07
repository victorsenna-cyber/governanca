# Plano de iteração — 12/08/2026

> **Gatilho:** destilação da call de 11/08 (`DESTILACAO-CALL-2026-08-11.md`, IDs J-01 a J-38) + WhatsApp corporativo recebido
> **Régua:** ordenado por **quanto dinheiro destrava**, não por esforço
> **Prazo firme no meio disso:** página do evento em **18/08**

---

## 🔴 P0 — Verificar antes de qualquer outra coisa

### 1. O WhatsApp está com 12 dígitos. Celular brasileiro precisa de 13.

**Número informado:** `+55 31 8301-5499` → `553183015499` (**12 dígitos**)
**Formato exigido pelo `wa.me`:** `55` + DDD (2) + **9 dígitos** = **13**

| Leitura | Valor |
|---|---|
| DDD | 31 (Belo Horizonte) |
| Assinante informado | `8301-5499` — **8 dígitos** |
| Padrão de celular MG pós-2016 | `9XXXX-XXXX` — 9 dígitos, sempre iniciando em 9 |
| **Número provável completo** | **`31 98301-5499`** → `5531983015499` |

**Onde isso já está publicado:**

| Arquivo | Linha |
|---|---|
| `pagina-1-.../site/script.js` | `whatsappNumber: "553183015499"` |
| `pagina-1-.../site/index.html` | `href="https://wa.me/553183015499?text=..."` |
| `pagina-2-.../site/script.js` | `const whatsappNumber = "553183015499"` |
| `pagina-2-.../site/index.html` | `href="https://wa.me/553183015499?text=..."` |

**Por que é P0:** um `wa.me` com número inválido não dá erro visível no site. Abre o WhatsApp e mostra "número de telefone compartilhado por link inválido". **O CTA das duas páginas leva a lugar nenhum, e ninguém descobre até alguém reclamar.** É a falha mais barata de corrigir e a mais cara de não notar.

**Ação, 2 minutos:** abrir `https://wa.me/5531983015499` no navegador. Se abrir a conversa com ela, o 9 estava faltando e é isso. Se não, perguntar o número completo a ela.

*(Nota: o número anterior registrado, `553173420800`, tinha o mesmo problema. Não é erro novo, é o mesmo erro repetido.)*

---

### 2. As duas páginas ainda carregam estado de prévia

**Página 1** — `site/script.js`:
```js
isPreview: true,
leadsEndpoint: "",
```
O CTA de WhatsApp funciona, mas **o formulário não persiste nada**. Lead preenchido é lead perdido.

**Página 2** — pior, porque é texto visível ao público:

| Texto no ar | Onde |
|---|---|
| *"Local preview. No data is sent."* | rodapé |
| *"In this local preview, nothing is stored or sent."* | intro do formulário |
| *"I understand this local preview does not send my information."* | consentimento |
| *"Identities withheld in this preview."* | crédito dos depoimentos |

Um estrangeiro que chega pelo Google lê **"local preview"** quatro vezes. Isso não é bug técnico, é dano de credibilidade — e a página 2 é justamente a que vai receber tráfego de busca, de gente que não conhece a Jéssica.

**Ação:** com o número validado, tirar as duas do modo prévia. A página 1 ainda precisa do endpoint do Apps Script para o formulário; **a página 2 não precisa de nada além de trocar os textos.**

---

## 🟡 P1 — A entrega de 18/08

**A página do evento pode começar agora.** O brief está fechado (`vivencia-presencial/BRIEF-PAGINA-EVENTO.md`, zero lacunas críticas) e a destilação entregou toda a matéria-prima.

| Etapa do circuito | Estado | Depende de |
|---|---|---|
| 1 · Física (gerador) | ✅ brief fechado | — |
| 2 · Direção visual | ⬜ **pode começar** | nada |
| 3 · Copy | ⬜ **pode começar** | §2, §4, §5 da destilação |
| 4 · Execução visual | ⬜ | logo (ela envia) |
| 5 · Gate | ⬜ | data e campos variáveis |

**O que a destilação entregou de novo para a copy, e que o brief anterior não tinha:**

- a tese com **citação literal e timestamp** (J-13, §5.1) — vira a dobra de quebra de crença
- o roteiro em **nove blocos com a razão de cada um** (J-10 a J-18) — vira a dobra "o que acontece"
- o **motivo pessoal dela** (J-29) — vira a dobra "por que eu criei isso", que a página não tinha
- a **prova anônima** do aluno de TI (J-30) — resolve a dobra de prova, que estava vazia

---

## 🟢 P2 — O que a destilação revelou e ainda não virou artefato

### 2.1 A tese dela não está no método documentado

`METODO-EMOTIONAL-SPEAKING.md` tem cinco dimensões e seis crenças operantes. **Não tem "inglês é um processo intuitivo"** — que ela chama de bordão e usa há anos.

Isso é uma lacuna no arquivo que descreve o método dela. **Adicionar como crença operante**, com a citação de [00:56:03].

### 2.2 `OFERTA.md` não tem a esteira nova

Lapidação e Circle existem em `vivencia-presencial/ARQUITETURA-DE-PRODUTO-LADIES-FLUENCY.md` e **não aparecem no arquivo de oferta da conta**. Quem abrir `OFERTA.md` vê só aulas.

### 2.3 `ICP.md` descreve o público das aulas, não o do evento

São recortes diferentes: o das aulas é "mulheres 25+, viagem, corporativo"; o do evento é "empresárias de Floripa do campo terapêutico". **Vale uma seção nova, não uma reescrita.**

### 2.4 O limite de escopo das "modificações inclusas por 1 ano"

Vendido em 11/08 sem limite escrito (`DESTILACAO-CALL-2026-08-11.md` §12.3). **Alteração de campo entra. Redesenho, dobra nova ou copy nova não entram.** Escrever antes que a primeira edição peça "só uma mudança na estrutura".

---

## 🔵 P3 — O que ainda depende dela

### Já cobrado, aguardando

| Item | Estado |
|---|---|
| Data do evento | *"entre hoje e amanhã"* |
| Logo em PNG | *"mando já já"* |
| Aprovar ajuste do reembolso | proposto |
| Aprovar redação do filtro de entrada | a mostrar |

### Ainda não perguntado — e são as que mais importam

| Pergunta | Por que importa |
|---|---|
| **Quantos alunos você vai desligar, e quanto isso é de receita por mês?** | J-27. Ela está cortando receita antes de a nova existir. **Sem esse número não dá para dimensionar o vale** nem saber se o evento de outubro chega a tempo |
| **Os 3 reels por semana estão acontecendo?** | é o Motor 1 do plano, não foi mencionado em 1h21 de call |
| **As páginas geraram alguma conversa desde 06/08?** | se não geraram, o problema pode ser o número inválido (P0.1) |
| **O endpoint do Apps Script** | último item que trava o formulário da página 1 |

---

## Sequência recomendada para hoje

| # | Ação | Tempo | Destrava |
|:--:|---|---|---|
| 1 | Testar `wa.me/5531983015499` | 2 min | **as duas páginas** |
| 2 | Corrigir o número nos 4 arquivos e redeploy | 15 min | idem |
| 3 | Tirar os textos de prévia da página 2 | 20 min | credibilidade da página que recebe tráfego frio |
| 4 | Mandar no grupo: reembolso ajustado + redação do filtro + as 4 perguntas do P3 | 10 min | o vale de receita, e o estado real do Motor 1 |
| 5 | Começar direção visual e copy da página do evento | resto do dia | entrega de 18/08 |

**O que não fazer hoje:** vender qualquer coisa nova. Foram quatro entregas em 26 dias.

---

**Fontes:** `DESTILACAO-CALL-2026-08-11.md` · `STATUS.md` §0 · `DECISOES.md` · `vivencia-presencial/BRIEF-PAGINA-EVENTO.md` · inspeção do código das duas páginas em 12/08
