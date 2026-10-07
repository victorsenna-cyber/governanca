# Análise — trackear Purchase na obrigado-page (por fora da PagTrust)?

> STATUS: HISTÓRICO · não editar (análise 17/07). Decisão que derivar entra no DECISOES com "Propaga p/:".
> Pergunta do Victor: é viável trackear na obrigado se a PagTrust já pega o Purchase? Ganho vs. risco de duplicação, **sem remover** o tracking da PagTrust.

> **DECISÃO 17/07 (Victor): NÃO implementar tracking nas obrigado-pages agora.** As 2 páginas vão ao ar sem pixel de Purchase (Purchase segue só na PagTrust). Esta análise fica como **backlog de implementação futura** — quando/se voltar, seguir a Opção A do §3/§4 (Purchase rotulado, fora da otimização) e verificar a Opção B (event_id casado) com a PagTrust. Nada a fazer nos HTMLs por ora.

---

## 0. Como o Purchase é medido HOJE (setup real)

- Pixel Meta **base `4060021607461178`**, eventos custom via `fbq` direto (não GTM) — DECISOES 09/07 e 11/07.
- O **Purchase** dispara **na PagTrust** (pixel dela, no domínio de checkout `checkout.pagtrust.com.br`), client-side. A campanha otimiza em **InitiateCheckout** hoje (08/07).
- A obrigado-page é nossa (Hostinger), sem pixel de Purchase atualmente (decisão do plano).

Ponto que muda tudo na análise: **o Purchase da PagTrust é client-side (pixel), não CAPI server-side.** Isso é bom para a nossa mitigação (ver §3).

---

## 1. É viável? Sim. E o ganho é real.

Trackear o Purchase também na obrigado é viável e traz 3 ganhos concretos que a PagTrust não dá:

1. **`event_id` sob nosso controle.** Na PagTrust não controlamos o ID do evento nem os parâmetros. Na obrigado, nós definimos `eventID`, valor, moeda, `content_name`, e principalmente os **parâmetros de atribuição** (fbclic/`_fbp`/`_fbc`, UTMs) que já capturamos no lead. Purchase com atribuição limpa = a Meta aprende melhor quem compra.
2. **Fonte que nós auditamos.** Hoje, se o número de Purchase diverge, dependemos da caixa-preta da PagTrust. Um Purchase nosso é debugável no nosso código e no Events Manager (Test Events).
3. **Caminho para migrar a otimização de InitiateCheckout → Purchase** com sinal confiável, quando o volume permitir. É o evento que a Meta prefere para otimizar venda; ter um Purchase controlado destrava isso no futuro.

**Porém:** a obrigado-page **não** é um sinal de Purchase perfeito. Ela dispara no *carregamento da página de agradecimento*, que só acontece se a PagTrust **redirecionar** o comprador para ela. Se alguém fecha o checkout antes do redirect (mas o cartão passou), a PagTrust registra a venda e a obrigado **não** dispara. Ou seja: a obrigado tende a **subcontar** vs. a PagTrust. Por isso a regra é **somar controle, não substituir** — exatamente o que você pediu.

---

## 2. O risco: duplicação (e por que é gerenciável, não fatal)

Dois Purchase para a mesma venda (um da PagTrust, um da obrigado) inflam conversões e ROAS e envenenam o aprendizado da campanha. Mas a Meta tem um mecanismo nativo para isso: **deduplicação por `event_id`** (e, como reforço, por `fbp`+`event_name`+tempo).

A regra da Meta: **dois eventos com o mesmo `event_name` e o mesmo `event_id`, dentro de ~48h, são tratados como UM.** Ela mantém o primeiro que chega e descarta o segundo.

O problema: **dedup só funciona se os dois lados enviarem o MESMO `event_id`.** E aqui está o obstáculo real do nosso caso —

> **Não controlamos o `event_id` que a PagTrust envia.** Se a PagTrust gera um ID interno (ou nenhum), não temos como fazer o nosso Purchase "casar" com o dela. Sem ID comum, a dedup automática por `event_id` não pega, e sobra a dedup "fraca" da Meta (heurística por fbp+valor+janela), que é melhor que nada mas não é confiável.

Isso é o que torna a decisão **não trivial**. As opções de mitigação abaixo contornam isso.

---

## 3. Mitigações (da mais segura à mais arriscada)

### Opção A — Purchase na obrigado com `content_name` próprio, SEM competir com o da PagTrust *(recomendada p/ agora)*
Disparar na obrigado um Purchase (ou um evento custom `PurchaseConfirmado`) e **não** tentar deduplicar contra a PagTrust — em vez disso, **separar os dois na conta**:
- A PagTrust continua mandando o Purchase "oficial" (não mexemos).
- A obrigado manda um **evento custom nomeado** (ex.: `Purchase_Obrigado` ou um Purchase com `content_name: "obrigado-eixo"`).
- **A campanha continua otimizando pelo evento atual (InitiateCheckout hoje; Purchase da PagTrust quando migrar).** O evento da obrigado serve como **medição paralela / conferência**, não como evento de otimização.
- Resultado: **zero risco de inflar o Purchase de otimização** (são eventos com nome/rótulo distinto), e ganhamos um número nosso para auditar a PagTrust. Custo: não é "o" Purchase da campanha, é um espelho.

### Opção B — descobrir o `event_id` da PagTrust e casar os dois *(ideal técnico, depende da PagTrust)*
Se a PagTrust permitir **passar/definir um `event_id`** (algumas plataformas expõem isso, ou repassam um parâmetro do checkout para o Purchase), fazemos os dois lados usarem o **mesmo ID** (ex.: o ID do pedido). Aí a dedup nativa da Meta funciona 100%: os dois disparam, a Meta conta um. É o cenário perfeito — **mas exige confirmar na PagTrust** se dá para injetar/ler esse ID. **Pendência de verificação (Victor).**

### Opção C — trocar a otimização para o Purchase da obrigado e silenciar o da PagTrust *(NÃO recomendada / você já vetou remover a PagTrust)*
Fora de escopo: você pediu para não remover o tracking da PagTrust. Além disso a obrigado subcontaria (§1). Descartada.

---

## 4. Recomendação

**Fazer a Opção A agora + verificar a Opção B com a PagTrust.**

- **Agora (baixo risco):** adicionar na obrigado um Purchase **rotulado** (`content_name`/evento distinto) que NÃO é o evento de otimização. Ganhamos atribuição limpa e um número auditável; não corremos risco de inflar a campanha, porque a otimização não olha para ele.
- **Em paralelo (Victor):** perguntar/testar na PagTrust se dá para **definir o `event_id` do Purchase** (ou repassar o ID do pedido). Se sim → migramos para a Opção B (dedup nativa perfeita) e aí o Purchase da obrigado pode virar co-primário com o da PagTrust, deduplicado.
- **Só considerar Purchase de obrigado como evento de otimização** depois de: (a) `event_id` casado (Opção B) OU (b) validação no Events Manager (Test Events) de que a dedup heurística está segurando, por alguns dias de dados.

### Parâmetros mínimos do Purchase da obrigado (quando implementar)
- `value` e `currency` (BRL) — idealmente o valor real da venda, incluindo bump. Se a obrigado não recebe o valor por querystring, usar o valor do lote vigente como aproximação e sinalizar a limitação.
- `eventID` estável (ex.: derivado do e-mail+timestamp ou do ID de pedido, se a PagTrust repassar) — a chave de qualquer dedup futura.
- `content_name` distinto (Opção A) até o `event_id` casar.
- Ler `_fbp`/`_fbc`/UTMs (já capturados no fluxo de lead) e anexar.

---

## 5. Veredito de 1 linha

Viável e vale a pena **como camada de conferência/atribuição (Opção A) já**, sem risco de duplicação porque o evento fica rotulado e fora da otimização; **evoluir para dedup nativa (Opção B) depende de a PagTrust deixar definir o `event_id`** — verificação do Victor. Nunca remover o Purchase da PagTrust.

## 6. Pendências (Victor)
1. Verificar na PagTrust: dá para **definir/repassar o `event_id`** (ou o ID do pedido) para o Purchase? (destrava a Opção B.)
2. A obrigado recebe o **valor da venda** por querystring (com bump)? Se não, definir aproximação.
3. Se seguir a Opção A: escolher o rótulo do evento (`Purchase` com `content_name` próprio vs. custom `Purchase_Obrigado`) e validar no Events Manager > Test Events antes de confiar no número.
