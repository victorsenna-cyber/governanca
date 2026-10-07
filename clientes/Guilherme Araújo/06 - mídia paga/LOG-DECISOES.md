# LOG-DECISOES.md — DECISÕES DE MÍDIA

> STATUS: VIGENTE · log append-only de decisões de gestão de tráfego
> Aberto em: 2026-09-04 · America/Sao_Paulo
> Exigido por `METODO-TRAFEGO-PAGO.md` §7.3: *"toda decisão dessas é registrada em `LOG-DECISOES.md`"*
> Conta: `605257748612701`

---

## Contrato deste log

Registra **decisão de mídia**, não decisão de negócio. Decisão de negócio vai para `DECISOES.md`; mutação executada vai para `06 - mídia paga/SUBIDA-*.md`.

Cada linha informa: **data · o quê · por quê · resultado esperado · resultado observado.**

O log é o que transforma gestão em método. Sem ele, cada ciclo recomeça do zero e o aprendizado entre clientes não existe.

**Regra de ouro:** decisão tomada e não registrada é decisão perdida. Registrar no mesmo dia.

---

## Decisões

| # | Data | O quê | Por quê | Resultado esperado | Resultado observado |
|---|---|---|---|---|---|
| `LD-001` | 2026-08-18 | criar campanha de tráfego ao perfil em pausa, com `PROFILE_VISIT` e trio lookalike | replicar o conjunto de melhor custo por seguidor já registrado na conta | custo por seguidor perto de R$ 1,87 | **não medido** — campanha nunca ativada, segue sem anúncio |
| `LD-002` | 2026-08-18 | Advantage+ Audience **desligado** no conjunto lookalike | o conjunto vencedor histórico rodava desligado; ligar dissolve o lookalike | preservar a precisão do público | não medido |
| `LD-003` | 2026-08-18 | **não** replicar as restrições de iPhone e Wi-Fi do conjunto vencedor | eram experimento de lance, não a causa do resultado, e estreitam um público já pequeno | mais alcance sem perder precisão | não medido |
| `LD-004` | 2026-08-18 | métrica primária da campanha de tráfego passa a ser **custo por seguidor**, não custo por visita | no histórico da conta a visita variou 1,6x e o custo por seguidor variou 6x | premiar o conjunto certo | pendente |
| `LD-005` | 2026-08-29 | reutilizar a campanha de 18/08 em vez de criar uma terceira de tráfego | evitar duplicação e manter a execução dentro da alçada já aprovada | zero campanha nova | cumprido |
| `LD-006` | 2026-08-29 | orçamentos para R$ 15 (tráfego) e R$ 10 (DESPERTAR) | fechar exatamente o teto de R$ 25/dia | soma ativa controlada | cumprido |
| `LD-007` | 2026-08-29 | marca `HG` no nome das campanhas de hipótese do Guilherme | `MODUS-OPERANDI.md` §4 — separar hipótese dele da estratégia Continuum | leitura futura preservada | cumprido |
| `LD-008` | 2026-08-29 | **não** trocar o Reel nomeado no briefing por outro | trocar criativo nomeado é gate duro de `MODUS-OPERANDI.md` §3.3 | decisão devolvida a Victor | pendente |
| `LD-009` | 2026-09-04 | classificar `DESPERTAR` como **camada de topo**, não de meio-fundo | roda em público frio e amplo; a função no funil é criar público, não converter | leitura correta da métrica primária | — |
| `LD-010` | 2026-09-04 | onda 1 concentra **os R$ 25 no topo**, camadas 2 e 3 em pausa | o público morno tem 1.100 a 1.300 pessoas, abaixo do piso de entrega; não há o que retargetar | público de engajamento acima de 5.000 em 2 a 3 semanas | pendente |
| `LD-011` | 2026-09-04 | palavra-chave da camada 2 é **`PERMISSÃO`**, não `MAPA` | Guilherme diagnosticou o mercado como saturado de "ganhe um diagnóstico, ganhe um mapeamento" [00:48:44]; `PERMISSÃO` é o mecanismo dele e ninguém mais pode assinar | custo por conversa qualificada menor que no frio | pendente |
| `LD-012` | 2026-09-04 | entrega da camada 2 são **três perguntas em texto**, não um material produzido | entregável hoje, sem depender de áudio, PDF ou automação; e as perguntas **são** a aplicação | zero fila de promessa não cumprida | pendente |
| `LD-013` | 2026-09-05 | criar a campanha da camada 2 (`120255058867030210`) em pausa, com R$ 8/dia e só Instagram | a estrutura pode nascer pronta sem gastar; e nasce já com `LD-R01` aplicada, sem pagar reset de aprendizado | zero gasto, zero espera quando a arte ficar pronta | cumprido |
| `LD-014` | 2026-09-05 | incluir o público **Vídeo View 50%** (4.600–5.400) no conjunto da camada 2 | apareceu na conta em 04/09 e não constava do inventário do plano; 50% de vídeo assistido é sinal de atenção mais forte que engajamento genérico | gatilho da onda 2 essencialmente cumprido | pendente |
| `LD-015` | 2026-09-05 | **não** subir o topo de R$ 10 para R$ 25 · revoga `LD-010` e `LD-R04` | marginal dos últimos 4 dias em R$ 1,13 por comentário contra teto de R$ 0,80, com CPM idêntico ao do pico (R$ 3,24) — é fadiga de criativo, não leilão | evitar comprar 2,5x mais volume no pior ponto da curva | decisão devolvida a Victor |
| `LD-016` | 2026-09-05 | a alavanca do topo passa a ser **rotação de criativo** (`LD-R02`), não verba | CTR caiu 36% com CPM parado e frequência em 1,05: o que acabou foi a resposta à peça, não a eficiência da compra | custo por comentário de volta abaixo de R$ 0,80 | pendente |
| `LD-018` | 2026-09-05 | ativar campanha e conjunto da camada 2 **ainda sem anúncio**, a pedido de Victor | ativação de estrutura sem anúncio não entrega nem gasta; é reversível e custa R$ 0,00 | zero gasto hoje | cumprido · `delivery: inactive`, `substatus: no_ads` |
| `LD-019` | 2026-09-05 | registrar que a camada 2 virou **gatilho armado** | com a estrutura ativa, o primeiro anúncio criado ali dispara R$ 8,00/dia sem nova decisão | ninguém é surpreendido por gasto | **atenção permanente** |
| `LD-017` | 2026-09-05 | executar `LD-R01` (posicionamento só Instagram no topo) **junto** com a troca de criativo, nunca separado | editar posicionamento reseta o aprendizado, hoje em `SUCCESS`; junto com a troca, o reset acontece uma vez só | um reset em vez de dois | pendente |

---

## Decisões recomendadas e ainda não tomadas

| # | Recomendação | Bloqueada por | Desde |
|---|---|---|---|
| `LD-R01` | restringir posicionamentos do topo a Instagram | **escolha do criativo novo** — fazer junto com a troca, por `LD-017` | 29/08 |
| `LD-R02` | **rotacionar o criativo do topo — virou urgente** | escolha do Reel, gate de criativo `MODUS-OPERANDI.md` §3.3 | 04/09 |
| `LD-R03` | criar os demais públicos de vídeo (25/75/95%) | — · o de **50%** já existe desde 04/09, com 4.600–5.400 | 04/09 |
| ~~`LD-R04`~~ | ~~subir o topo de R$ 10 para R$ 25~~ | **revogada por `LD-015` em 05/09** — a premissa de custo caiu | 04/09 |

---

## Gate aberto que atravessa tudo

**Comentários acumulados desde 26/08 aguardando o áudio "Decreto de Ativação Sistêmica".** Eram 62 em 29/08. Em **05/09 são 139** — mais que o dobro em sete dias.

Gate duro de `MODUS-OPERANDI.md` §3.3. Enquanto estiver aberto, nenhum aumento de verba no topo executa: multiplicaria uma promessa que ainda não é cumprida.

**Este gate agora é o primeiro item da sequência**, à frente da rotação de criativo. Trocar a peça sem entregar o que a peça anterior prometeu só troca a fila de lugar.

---

## Aprendizados candidatos a virar regra

`METODO-TRAFEGO-PAGO.md` §10 pede 3 aprendizados por ciclo mensal, e muda o default do método quando 3 clientes convergem no mesmo número.

| # | Aprendizado | Evidência | Status |
|---|---|---|---|
| `AP-01` | engajamento barato **não** vira seguidor sozinho | campanha de 29/07: R$ 168,13, 25.556 engajamentos a R$ 0,01, **zero** seguidores | 1 cliente |
| `AP-02` | lookalike bate interesse por larga margem em custo por seguidor | R$ 1,87 no lookalike contra R$ 2,94 a R$ 11,06 no interesse, mesma conta | 1 cliente |
| `AP-03` | mecânica de participação supera declaração em CTR | `ESCOLHA1CARTA` 5,85% e `A-CARTA-DO-JULGAMENTO` 12,67% contra 2,00% do talking head | 1 cliente |
| `AP-04` | custo por comentário de R$ 0,61 em nicho terapêutico com criativo de identidade | `DESPERTAR`, CPM R$ 3,29, CTR 7,75% | 1 cliente |
| `AP-05` | **criativo de identidade satura em torno de 8 a 10 dias em público amplo**, mesmo com frequência abaixo de 1,1 | `DESPERTAR`: R$ 0,50 por comentário em 27–29/08 contra R$ 1,13 em 01–04/09, **CPM idêntico de R$ 3,24** nos dois blocos | 1 cliente |
| `AP-06` | **a média acumulada esconde a fadiga; só a marginal a mostra** | mesma peça: média de R$ 0,73 ainda dentro do teto de R$ 0,80 enquanto a marginal já estava 41% acima | 1 cliente |

Nenhum vira default do método com um cliente só. Ficam registrados aguardando convergência.

---

*Append-only. Entradas antigas não são reescritas; correção entra como linha nova referenciando a anterior.*
