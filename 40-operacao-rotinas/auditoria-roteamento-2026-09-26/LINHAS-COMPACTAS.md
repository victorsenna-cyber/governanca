# LINHAS COMPACTAS — a migração do roteador, pronta para a onda 5

> **Tipo:** registro *(foi o blueprint da reescrita; ✅ EXECUTADO em 26/09 — a fonte ativa agora é `00-core/roteador/ARVORE-*.md`)* · **Data:** 26/09/2026
> **Origem:** propostas dos 5 auditores independentes sobre `ROTEADOR-v1-SNAPSHOT.md`, **revisadas pelo CEO** — árvore reatribuída em R02, R12, R21, R35, R36 e R40; vetos alinhados à tabela do `METODO-GATE-DE-CONGRUENCIA.md` §3.
> **Estado das guardas:** órfãos migrados (G1) e fatos vencidos corrigidos (G2) **antes** destas linhas existirem. **Nenhuma linha abaixo perde regra: o que saiu da célula está no arquivo que ela carrega.**
> **Formato:** `sinais | carga na ordem do processo, com o tipo | veto`.

---

## NEGÓCIO — 10

| R | Sinais | Carga | Veto |
|---|---|---|---|
| 05 | ICP, oferta, posicionamento, modelo de negócio, abrir/fechar nicho | `c-level/CEO` *(persona)* → `ICP.md` · `oferta.md` *(política)* | — |
| 06 | pipeline, vendas, fechamento, forecast, receita previsível | `c-level/CRO` → `30-comercial/` | — |
| 07 | prospecção fria, abordagem, script de WhatsApp, follow-up, qualificação | `ABORDAGEM-FRIA` *(método)* + `prospeccao-sites/` + voz-victor | cena de espelho sem fonte do nosso ICP |
| 08 | inbound, SDR estruturado | `SALESFORCE-INBOUND` *(framework)* + `c-level/CRO` | — |
| 09 | caixa, margem, DRE, runway, precificação | `c-level/CFO` → `POLITICAS-DE-DECISAO` *(política)* | abaixo do piso sem exceção escrita |
| 35 | resposta direta, branding × venda, 40/40/20, DFY, "já está escalado?", qual promessa, qual oferta | `DIRECT-RESPONSE` *(framework — §2-bis escala, §4 DFY)* | promessa/oferta sem referência **escalada** · DFY refeito por cliente a preço de produto |
| 45 | resultado, meta, plano estratégico, diagnóstica, oferta bem formulada, reenquadre | `geracao-de-resultados.skill` → `GERACAO-DE-RESULTADOS` *(framework)* | resultado no negativo ou sem evidência |
| 48 | contratar, delegar, "não tenho hora", capacidade estourada, avaliar candidato | `GATE-DE-CONTRATACAO` *(política)* + `POLITICAS` §4-bis | recusar venda por teto de horas |
| N1 | Mapa da Ordem, diagnóstico pago, G0 de quem já fatura (ICP A) | `DIAGNOSTICO-DE-OPERACAO` *(método)* → `diagnostico-operacao/` *(blueprint)* → `POLITICAS` | Mapa vendido ao ICP B |
| N2 | construir do zero (ICP B), G0 de quem não fatura | `ALICERCE` *(método)* | fora dos 4 pilares · 2º cliente simultâneo |

## CONTA — 5

| R | Sinais | Carga | Veto |
|---|---|---|---|
| 37 | cliente novo, conta nova, "por onde começo", ordem das etapas | `TRILHO-DE-CONTA-NOVA` *(trilho)* → `conta-nova/` *(blueprint)* → `clientes/<c>/PAINEL.md` | pendência sem "o que destrava" · pedido ao cliente com lacuna de estrutura |
| 20 | "a conta não anda", pilares, coerência, "para quem é mesmo?", antes de página ou VSL | `TESTE-DE-PILARES` *(gate)* → `clientes/<c>/PILARES.md` | 🔴 **P1 ou P4 reprovando bloqueia ESCRITA** |
| 21 | "pergunto ou decido?", cliente escolhendo versão, mudança de copy pedida, campo vazio no brief | `ALCADA-DE-ESTRUTURA` *(política — REGRA Nº 0, sempre carregada no §8)* | estrutura devolvida como pergunta |
| 02 | repo para o cliente, cérebro da operação, kernel para a equipe dele | `DIRECT-RESPONSE` §4.2 → `repo-cliente/` *(blueprint)* + `oferta.md` §7-bis | framework/método nosso no repo dele · sem as 3 condições · como concessão de preço |
| 49 | cliente nominal, entrega específica de um cliente | `clientes/<c>/AGENTS.md` + `CLAUDE.md` + kernel local · **lista viva: a pasta e o `STATUS`** | — |

## LEITURA — 7

| R | Sinais | Carga | Veto |
|---|---|---|---|
| 41 | transcript de **call nossa**, gravação de reunião, "o que saiu da reunião" | `DESTILACAO-DE-CALLS` *(método)* | citação sem timestamp · propagação fora da tarefa · 🔴 **peça de terceiro aqui = R42** |
| 42 | VSL/podcast/peça **de terceiro**, "analisa essa VSL", modelar estrutura, contar dose | `BENCHMARKING` Fases B/C → `DESTILACAO-DE-VSL` *(método)* → `benchmark-vsl/` *(blueprint)* | eixo 9 fora do grau `R` · colher cena como grau `D` |
| 25 | benchmarking, "o que o mercado faz", referência de nicho, swipe file | `BENCHMARKING` *(método)* + `swipe-file/` | referência sem estado de escala |
| 26 | anúncio de concorrente, "achei essa peça boa", mercado saturado, comprador orgulhoso da competência | skill de copy **módulo 08** + biblioteca de anúncios | copiar o degrau em vez de medir e subir |
| 22 | léxico do público, "como o ICP fala", cena de espelho, montar `lexico-icp/` | `ARQUEOLOGIA-DE-ICP` *(método)* → `lexico-icp/` *(blueprint)* | grau `I` em bloco de espelho |
| 44 | voz de **quem assina**, perfil linguístico, skill de voz | `extracao-linguagem.skill` (MEL) | inferir a voz de quem OUVE pelo MEL |
| N4 | "por que o perfil não converte", leitura de conteúdo em 60s | `MATRIZ-LEITURA-CONTEUDO` *(framework, fluxo §6)* | ⚠️ fonte duplicada com DIAGNOSTICO §5.4 |

## ESCRITA — 13 · 🔴 pré-condição: CONTA passou (PILARES sem P1/P4 + léxico com fonte `D`)

| R | Sinais | Carga | Veto |
|---|---|---|---|
| 10 | proposta comercial, orçamento, cotação, renovação, reajuste, "quanto cobrar" | **NEGÓCIO antes** → `ANCORAGEM-DE-PROPOSTA` *(método: 7 âncoras, 6 gates)* → circuito §6.3 → anti-slop | âncora não preenchida nem declarada · **sem bloco de onboarding** |
| 33 | página de vendas, landing, dobras, CRO | circuito §6.3, entrada pelo `gerador-web-designer` | sem brief, nada avança |
| 40 | direção de arte, tela, tokens, acessibilidade | `ui-ux-designer` — **etapas 2 e 4 do circuito §6.3** | direção genérica |
| 39 | VSL, funil de VSL, público frio, perpétuo | **LEITURA antes** (3 refs escaladas) → `FUNIL-DE-VSL` *(método)* → circuito §6.3 | pilares, caixa ou ativos mínimos em aberto |
| 15 | anúncio de resposta direta (quiz, VSL, página, conversa), CTA com valor | `CONSTRUCAO-DE-CRIATIVOS-DR` *(método)* + `PONTOS-LOGICOS` + skill de copy + léxico (+ tráfego §4 se mídia) | não abre circuito de página salvo destino a criar |
| 16 | empilhar ganchos, abertura composta, "quantos hooks tem" | `EMPILHAMENTO-DE-HOOKS` *(método)* + skill 03–04 | dividir a frase em três linhas não é empilhar |
| 17 | lateralizar, "mais versões do que vende", renovar criativo **validado** | `LATERALIZACAO-DE-CRIATIVOS` *(método)* + tráfego §4.2/§7.3 | sem base com resultado = exploração |
| 19 | roteiro de vídeo curto, Reels, carrossel, "não sei o que postar" | skill módulo 06 (§11.1-bis sentimento) + voz + léxico | identificação sem procedência |
| 28 | conteúdo, narrativa, linha editorial | `heads/head-conteudo` *(persona)* → skill módulo 06 | — |
| 23 | pontos lógicos, "o argumento não fecha", cadeia | `PONTOS-LOGICOS` *(framework, §8)* → `MECANISMO-E-ONE-BELIEF` (destino) | elo que não derruba o seguinte · conclusão escrita |
| 38 | nomear mecanismo, apelido, one belief, batizar oferta | `MECANISMO-E-ONE-BELIEF` *(método)* | apelido sem mecanismo · apelido variado |
| 24 | estrutura invisível, elementos da copy, modelar × copiar | `ESTRUTURA-INVISIVEL` *(framework)* → skill módulo 09 | texto transposto · modelar sequência em degrau 3 |
| N3 | pivô, "onde a peça vira", E · Mas · Por isso | `PIVO-DE-CONVERSAO` *(framework)* → skill passe 3 | pivô não apontável por linha |

## OPERAÇÃO — 12

| R | Sinais | Carga | Veto |
|---|---|---|---|
| 14 | gestão de tráfego de cliente: mídia, campanha, otimização, CPA | `TRAFEGO-PAGO` *(método)* + `gestao-trafego.skill` + `trafego-clientes/<c>/` | criativo sem hipótese escrita |
| 18 | hook rate alto sem venda, queda de conversão, fadiga | `TRAFEGO-PAGO` §7.4/§4.4 — **diagnóstico de mídia primeiro** | presumir que a causa é o gancho |
| 27 | tráfego nosso, canais, demanda | `heads/head-trafego` | — |
| 43 | PDF de qualquer artefato | `pdf-noturno/README` §3-bis — **classe antes do gerador** → `pdf-noturno` \| `pdf-continuum` | emoji em PDF · CSS por documento · PDF do que não sai da casa |
| 46 | "não estou conseguindo ver", fluxograma, diagrama | `CAMADA-DE-VER` *(framework)* + `COMPLIANCE-DE-OUTPUT` | decisão sem diagrama que abre o documento |
| 47 | prazo, cronograma, "cabe na semana?" | `ESTIMATIVA-DE-CARGA` *(framework)* | hora nossa em documento que sai da casa |
| 12 | arquitetura, automação, IA, dados, segurança | `c-level/CTO` | — |
| 13 | processo, entrega, SLA | `c-level/COO` · 🔴 **"capacidade estourada" → R48** | — |
| 29 · 30 · 31 · 32 | cobrança · retenção/churn · ativação/kickoff · infra/VPS/n8n | `heads/head-financeiro` · `head-customer-success` · `head-onboarding-orquestrado` · `head-ti-cybersec` | — |

## CASA — 5

| R | Sinais | Carga | Veto |
|---|---|---|---|
| 01 | como o repo funciona, onde fica X, organograma, mapa | `MAPA-DO-REPO` *(índice)* | — (não é fonte de regra) |
| 03 | método ou framework?, taxonomia, onde este arquivo mora | `TAXONOMIA-DE-ARTEFATOS` *(framework, §4.2 o PROCESSO)* | artefato sem `Tipo:` · etapa do processo pulada |
| 04 | propaguei tudo?, REGRA Nº 1, AGENTS sincronizado? | `ferramentas/verificar-propagacao.py` *(gate)* | resultado ≠ ✅ |
| 34 | o que o Codex fez, pacote isolado, **estado de conta que parece velho** | `STATUS-CODEX.md` **primeiro** → `RITO-INTEGRACAO-CODEX` | pacote isolado tratado como estado |
| 36 | isso bate com os métodos?, congruência, carreguei método demais? | `GATE-DE-CONGRUENCIA` *(gate)* + `COMPLIANCE-DE-OUTPUT` | contradição resolvida em silêncio |

## JURÍDICO — 1

| R | Sinais | Carga | Veto |
|---|---|---|---|
| 11 | contrato, cláusula, **formalização/assinatura**, aditivo, disputa, LGPD, societário | `POLITICAS-JURIDICAS` *(política)* + `CLO` → blue-team (conflito) · contratos (gerar) | nada sem instrumento escrito · **proposta ainda não assinada = R10** |

---

**Contagem: 53 = 49 originais + 4 pontos cegos (N1–N4). Nenhuma linha removida — todas realocadas.**
