# Quiz norte · v7 · correção dos dois defeitos do G5 e promoção

> **Data:** 16/10/2026 · **Quem:** Claude (CEO-orquestrador), por decisão do Victor de 16/10 (*"faça tudo sem parar até finalizar"*) · **Tipo:** registro de correção + promoção pelo `RITO-INTEGRACAO-CODEX.md`
> **Origem:** pacote `execução Codex/quiz-norte-v5-2026-10-03/quiz/` (v6, gate aprovado em 03/10) → **canônico:** `site/quiz/` (nesta pasta)

## 1. O que estava errado (G5, 08/10, `vsl/2026-10-02/G5-ABERTURA.md` §4, C3 e C4)

| # | Onde | Antes | Por que reprovava |
|---|---|---|---|
| C3 | I5, título (`app.js`) | *"Você lidera em uma língua. O seu time fala nove."* | usa *nove* como inventário do time e atribui uma língua a cada pessoa — fere a regra-mãe do apelido (`G1-APELIDO-HOMOLOGADO.md` §0.4) e o §3a (red line de certeza sobre personalidade) |
| C3 | T10, card 2 (`app.js`, `preview.html`) | *"As Nove Línguas: você lidera em uma língua, o seu time fala nove"* | idem |
| C4 | T10, card 4 (`app.js`, `preview.html`) | *"O que muda na sua maior alavanca: {área}"* | promete o que a aula não paga: a VSL é uma só e não trata cada área em separado (quebra de *message match*) |

## 2. Como ficou

| # | Depois | O que paga na VSL (roteiro v4.2) |
|---|---|---|
| C3 | I5: *"Mesmo pedido. Leituras diferentes."* | D14: *"Mesmo pedido. Mesma frase. Duas leituras diferentes."* |
| C3 | Card 2: *"As Nove Línguas: como explicar o mesmo resultado no idioma de quem vai executar"* | D22: *"O que muda é você saber explicar esse resultado no idioma de quem vai executar."* — apelido no sentido de direção (§0.4) |
| C4 | Card 4: *"O que fazer antes de cobrar de novo: perguntar o que travou"* | D21: *"você pergunta o que travou"* |

**O que ficou como estava, e por quê:** o corpo da I5 (*"…onde está a sua maior alavanca"*) é pago pela própria tela de resultado, que calcula a área de alavanca (`alavanca` no payload) · a I3 (*"A Débora chama isso de As Nove Línguas"*) não foi apontada pelo G5.

## 3. O que falta para o quiz ir ao ar (não é texto)

- ✅ `VSL_URL` (`app.js` l.3) = `https://deboradelgado.space/lideres/` (16/10). O quiz acrescenta `?origem=quiz&nivel=N&alavanca=dX`; a página trata `?origem=quiz` como funil A (título e vídeo do apêndice). **Só funciona depois que a página estiver publicada nesse caminho.**
- ✅ **UTMs repassadas (16/10):** o botão do resultado agora acrescenta `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` e `utm_term` da URL do quiz ao link da página — sem isto, a origem do anúncio se perdia no funil A (achado da etapa 4 da página). Sintaxe conferida com `node`.
- `LEADS_ENDPOINT` (`app.js` l.3): vazio por contrato (v5 §6); o Apps Script de leads não foi entregue no pacote (`apps-script/` vazio). Sem ele, o quiz roda, mas o lead não é gravado.
- **Publicação:** o quiz nunca foi ao ar. O registro *"Quiz no ar"* de 04/10 (`DIARIO-DE-BORDO.md`) descreve o pacote entregue, não um deploy: o `STATUS-CODEX.md` e os READMEs dizem *"sem publicação, endpoint, Pixel"*. Os caminhos são absolutos em `/quiz/`: sobe em `public_html/quiz/` da Hostinger de `deboradelgado.space`.
- Sem Pixel no quiz, por contrato.
