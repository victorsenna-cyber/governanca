# SUBIDA 29/08 — REGISTRO DE MUTAÇÃO EXTERNA

> STATUS: VIGENTE · registro de ação executada na conta de anúncio
> Data: 2026-08-29 · America/Sao_Paulo
> Autoridade: Victor, instrução explícita — *"suba e ative as campanhas"*
> Trilha: `EXECUCAO-DIRIGIDA-GUILHERME` (`DEC-2026-08-26-001`)
> Estado: **executado em parte. Um anúncio não foi criado, por falta de ativo localizável.**

---

## 1. O que foi executado

| # | Ação | Objeto | De | Para |
|---|---|---|---|---|
| 1 | orçamento | conjunto `120254780928790210` | R$ 20,00 | **R$ 15,00** |
| 2 | orçamento | conjunto `120254917323260210` | R$ 15,00 | **R$ 10,00** |
| 3 | nome + marca `HG` | campanha `120254780918080210` | `GA\|TOFU\|IG\|TRAFEGO-PERFIL\|LOOKALIKE\|20260818` | `GA\|HG\|TOFU\|IG\|TRAFEGO-PERFIL\|IMATURA-MADURA\|20260829` |
| 4 | nome + marca `HG` | campanha `120254917323250210` | `GA\|TOFU\|FORMACAO\|ENGAJAMENTO\|DESPERTAR\|20260826` | `GA\|HG\|TOFU\|FORMACAO\|ENGAJAMENTO\|DESPERTAR\|20260826` |
| 5 | nome | conjunto `120254780928790210` | `AS\|LOOKALIKE-1%-SEG+VISIT\|BR\|MULHERES\|20260818` | `AS\|HG\|LOOKALIKE-1%-SEG+VISIT\|BR\|MULHERES\|20260829` |

A marca `HG` cumpre `MODUS-OPERANDI.md` §4: testes originados de hipótese do Guilherme ficam distinguíveis dos da estratégia Continuum.

**Estrutura reutilizada, não duplicada.** A campanha de tráfego proposta no briefing já existia em pausa, com o trio lookalike íntegro e sem gasto. Reutilizá-la evitou uma terceira campanha e manteve a execução dentro da alçada já aprovada.

## 2. Estado verificado após a execução

| Campanha | Conjunto | Verba/dia | Status | Gasto |
|---|---|---:|---|---:|
| `GA\|HG\|...\|DESPERTAR\|20260826` | `120254917323260210` | **R$ 10,00** | **ACTIVE** | R$ 37,94 |
| `GA\|HG\|...\|IMATURA-MADURA\|20260829` | `120254780928790210` | **R$ 15,00** | PAUSED | R$ 0,00 |
| **Soma ativa** | | **R$ 10,00** | | |

**Teto de R$ 25,00/dia respeitado.** Com a campanha de tráfego ativada, a soma fecha exatamente R$ 25,00.

Nenhuma outra campanha da conta está ativa.

## 3. O que NÃO foi executado, e por quê

**O anúncio de tráfego não foi criado.** O briefing especifica o Reel `DYS-lPOBu4a` ("Imatura vs madura") como publicação existente.

Esse Reel **não foi localizado** na conta. Busca feita: quatro páginas da mídia do Instagram de `@professorguilhermearaujo`, cobrindo **100 Reels** de 18/06 a 28/08. O shortcode não aparece em nenhuma. Também não aparece nos rascunhos da conta.

`MODUS-OPERANDI.md` §3.3 lista como gate duro *"pedido irreversível ou materialmente diferente do que foi autorizado"*. Anexar um Reel diferente do que foi nomeado seria exatamente isso. **Por isso não substituí por conta própria.**

Sem anúncio, a campanha de tráfego não é ativada: uma campanha ativa sem anúncio não entrega e não gasta.

### 3.1 O que existe no lugar, e está pronto

Há um **rascunho não publicado** no conjunto de tráfego `120254780928790210`, criado em 26/08, com dois Reels já selecionados:

| Media ID | Reel | Data |
|---|---|---|
| `18120166222797244` | **"Vc tem permissão de transformar vidas?"** `#terapeuta` | 10/08 |
| `18113387758939644` | "Pense nisso!" | 11/08 |

O primeiro é o mesmo que a auditoria de 18/08 apontou como o de **maior aderência ao posicionamento de terapeuta** em todo o acervo do perfil.

Qualquer um dos dois vira anúncio em um passo, assim que Victor disser qual.

## 4. Dados técnicos confirmados nesta execução

| Item | Valor |
|---|---|
| Página do Facebook | `103620069213113` |
| Instagram actor | `5527080837359669` (`@professorguilhermearaujo`) |
| CTA do rascunho de tráfego | `VIEW_INSTAGRAM_PROFILE` → `instagram.com/professorguilhermearaujo` |
| **Pixel encontrado nos rascunhos** | **`1259363302489132`** |

O Pixel é achado novo. Ele resolve parte de `H-01` no `STATUS.md`, que estava aberto desde 19/07. Não foi validado quanto a eventos, CAPI ou EMQ.

## 5. Gate que continua aberto

**62 comentários aguardando o áudio `Decreto de Ativação Sistêmica`.** A entrega segue não verificada.

A redução de R$ 15,00 para R$ 10,00/dia **desacelera** o crescimento da fila, mas não a resolve. A decisão continua sendo de Victor com Guilherme: entregar, confirmar que já foi entregue, ou pausar.

Registrado como `PROP-2026-08-29-001` na fila, estado `BLOQUEADA`.

## 6. Ressalva técnica registrada uma vez

O conjunto ativo do DESPERTAR entrega em `audience_network`, `threads`, `marketplace`, `search` e `instream_video`, além de Facebook e Instagram. Para um Reel que pede comentário, essas superfícies compram alcance barato que não comenta. Restringir a Instagram tende a subir o CPM e a taxa de comentário ao mesmo tempo.

Não bloqueia. Não será repetida.

## 7. Rollback

| Para desfazer | Ação |
|---|---|
| orçamentos | conjunto `120254780928790210` para 2000 centavos; conjunto `120254917323260210` para 1500 centavos |
| nomes | remover ` HG ` dos identificadores e restaurar as datas originais |
| campanha de tráfego inteira | excluir `120254780918080210` |

Gasto adicional causado por esta execução: **R$ 0,00**. Nenhum anúncio criado, nenhuma campanha ativada, nenhum público ou criativo alterado.

---

*Registro produzido no mesmo turno da mutação, conforme `CLAUDE.md` §9 do kernel do cliente.*
