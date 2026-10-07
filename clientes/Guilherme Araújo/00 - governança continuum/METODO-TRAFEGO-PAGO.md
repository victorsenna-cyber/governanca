# MÉTODO CONTINUUM — GESTÃO DE TRÁFEGO PAGO

> **Tipo:** método-raiz (camada 2 — política) · **Criado em:** 2026-07-08 · **Status:** vigente, pendente de calibração com 1º cliente
> Fonte única do método de tráfego. Skills que o carregam: `10-skills/gestao-trafego.skill.md` (execução) + `10-skills/heads/head-trafego.skill.md` (persona).
> Cadeia endurecida: **Projeto → Objetivo → Página → Criativo → Campanha → Tracking → Gestão → Relatório.** Nenhuma fase pula gate.
> Precificação, alçadas e capacidade: `00-core/POLITICAS-DE-DECISAO.md` prevalece. Estado por cliente: `30-comercial/trafego-clientes/<cliente>/`.

---

## 0. Princípios do método (a lógica de 2026)

A realidade dos leilões mudou. O método assume estes fatos e decide a partir deles:

1. **O criativo é a segmentação.** Os sistemas de entrega (Meta Andromeda, Google AI) leem o criativo para decidir a quem entregar. Criativo responde por ~56% do resultado — mais que público, verba e posicionamento somados. Segmentar por interesse detalhado é lutar contra o algoritmo.
2. **Consolidação > fragmentação.** Estruturas com muitas campanhas/conjuntos fatiam o sinal de conversão e matam o aprendizado. Contas consolidadas convertem ~15-17% mais. Regra: o mínimo de campanhas que a verba sustenta com dados densos.
3. **Sinal limpo é pré-requisito, não otimização.** Pixel sozinho está quebrado (ad blockers ~25-30%, iOS/ATT). Pixel + CAPI simultâneos e Event Match Quality ≥ 7 são gate de subida de campanha.
4. **Regras de decisão antes da campanha.** O que é "ganhou", "perdeu" e "escala" é definido por escrito ANTES de gastar o primeiro real. Gestão por sensação é a causa nº 1 de verba queimada.
5. **Matemática reversa do funil.** Toda meta nasce do unit economics do cliente (preço → margem → CPA máximo → verba mínima viável), nunca de benchmark genérico.
6. **Verba pequena tem física própria.** Cliente com verba abaixo do mínimo viável (§2.2) não roda estratégia de conta grande em miniatura — roda a estratégia de verba pequena (§5.3) ou não roda.
7. **Não tratar sintoma como causa.** CPA alto tem 5 causas possíveis — oferta, público-alvo implícito no criativo, criativo, página, tracking — e o diagnóstico segue essa ordem (§7.4). Trocar criativo quando o problema é oferta é atividade, não progresso.
8. **Processo antes de ferramenta.** Automação (regras automáticas, agentes, APIs) só depois do método rodando manualmente por ≥ 1 ciclo completo em ≥ 1 cliente.

---

## 1. GATE DE ENTRADA — o cliente pode entrar?

Nenhum contrato de tráfego é aceito sem passar pelos 5 critérios. Reprovou em 1 → não entra (ou entra condicionado, por alçada do Victor).

| # | Critério | Régua |
|---|---|---|
| G1 | **Oferta clara e vendável** | O cliente sabe o que vende, para quem e por quanto. Oferta confusa = primeiro consultoria de oferta, depois tráfego. |
| G2 | **Unit economics fecha** | Margem bruta do cliente por venda comporta um CAC realista (CPA máx ≥ CPA plausível do nicho). Se a conta não fecha no papel, não fecha no leilão. |
| G3 | **Verba mínima viável** | Verba mensal ≥ mínimo calculado em §2.2. Abaixo disso, tráfego vira loteria — recusar ou reenquadrar expectativa por escrito. |
| G4 | **Ativo de conversão existe ou será construído** | Página/WhatsApp/funil funcional. Sem destino decente, não sobe campanha (gate da Fase 3). |
| G5 | **Nossa capacidade e preço** | `POLITICAS-DE-DECISAO.md` §4 (régua de capacidade) e §5 (piso valor-hora R$ 250/h, margem ≥ 70%). Gestão de tráfego entra na escada como parte da **Assessoria Completa (R$ 4.500/mês)** ou módulo precificado à parte — nunca abaixo do piso (anti-padrão Débora registrado). |

**Saída do gate:** `BRIEFING.md` preenchido no workspace do cliente + decisão registrada (aceito / recusado / condicionado).

---

## 2. FASE 1-2 — PROJETO E OBJETIVO (a matemática antes da mídia)

### 2.1 Briefing obrigatório (inputs sem os quais não há plano)

Negócio e oferta (o que vende, ticket, margem bruta, LTV se recorrente) · público comprador real (quem paga, não quem curte) · concorrência direta e como anuncia (Biblioteca de Anúncios) · histórico de mídia (contas, campanhas, resultados, aprendizados) · ativos existentes (página, pixel, listas, criativos, provas sociais) · capacidade de atendimento do cliente (leads gerados precisam ser atendidos — gargalo pós-clique é responsabilidade mapeada) · restrições (compliance do nicho, políticas de anúncio).

### 2.2 Matemática reversa (feita no plano, revisada mensalmente)

Sequência obrigatória, registrada em `PLANO-DE-MIDIA.md`:

1. **Ticket médio × margem bruta = lucro por venda.**
2. **CPA máximo** = lucro por venda × fração aceitável (padrão: ≤ 30% do lucro por venda em aquisição direta; até 100% se LTV comprovado ≥ 3× ticket).
3. **Taxa de conversão da etapa** (página→lead, lead→venda) — usar dado real do cliente; sem dado, usar premissa conservadora e marcar `a calibrar`.
4. **CPL máximo** = CPA máx × conversão lead→venda.
5. **Verba mínima viável/dia** = 10-15× CPA alvo da campanha (referência de saída de aprendizado: ~50 conversões do evento otimizado/semana por conjunto). Se o evento de compra não atinge volume, otimizar para o evento anterior do funil que atinge.
6. **Meta numérica do mês**: verba → leads esperados → vendas esperadas → receita esperada → ROAS/custo por resultado alvo. **Sem essa linha assinada pelo cliente, campanha não sobe.**

### 2.3 Objetivo por estágio da conta

| Estágio | Duração típica | Objetivo | O que NÃO cobrar |
|---|---|---|---|
| **Aprendizado** | semanas 1-2 | sinal limpo + primeiras conversões + validar tracking | CPA no alvo (volatilidade é normal) |
| **Validação** | semanas 3-6 | CPA ≤ alvo em ≥ 1 combinação criativo+página estável | escala |
| **Escala** | mês 2+ | crescer verba mantendo CPA (regras §7.3) | eficiência máxima (escala custa CPM) |

Expectativa contratada com o cliente **por estágio** — protege a relação e o resultado.

---

## 3. FASE 3 — PÁGINA DE VENDAS/CAPTURA (gate estrutural)

- Toda página nova ou reformada segue **`METODO-PAGINA-DE-VENDAS.md`** (via `10-skills/pagina-de-vendas.skill.md`). Copy cruza a árvore de copy do `CLAUDE.md` §6.1.
- **Checklist de aprovação de página para mídia** (reprova em qualquer item → campanha não sobe):
  1. Promessa da página = promessa do anúncio (coerência de mensagem, message match literal no above the fold);
  2. 1 página = 1 oferta = 1 CTA dominante;
  3. Carregamento móvel < 3s (testar; tráfego pago é ~90% mobile);
  4. Prova social real presente;
  5. Formulário/CTA com o mínimo de fricção que a qualificação permite;
  6. Pixel + CAPI disparando os eventos certos na página (validar no Events Manager antes da verba);
  7. Captura de first-party data (e-mail/WhatsApp) em algum ponto do fluxo.
- **Destino WhatsApp** (comum no nosso ICP): mensagem de abertura pré-preenchida qualificadora + processo de atendimento definido (tempo de resposta ≤ 15 min em horário comercial é meta contratada com o cliente) + registro de origem do lead.

---

## 4. FASE 4 — CRIATIVOS (o alvo é a segmentação)

### 4.1 Matriz de criativos (obrigatória antes de produzir)

Preencher `matriz-criativos.md` cruzando:

- **Ângulos** (mín. 4 por oferta): dor · desejo/aspiração · prova/case · objeção invertida · urgência legítima · custo de não agir · comparação com alternativa.
- **Formatos** (mín. 3): imagem estática · vídeo curto (talking head/UGC-like) · carrossel · vídeo demonstração.
- **Hooks** (mín. 3 por ângulo): os primeiros 3s/primeira linha decidem. Testar hooks é mais barato que testar conceitos.

**Volume mínimo de lançamento: 8-12 criativos genuinamente distintos** (ângulo diferente ≠ cor diferente — o sistema fingerprinta o criativo; variação superficial é lida como duplicata e compete consigo mesma).

### 4.2 Regra de portfólio 70/30

Cada rodada de criativos: ~70% iterações de vencedores (novos hooks/formatos sobre ângulo validado) + ~30% conceitos novos de risco real. Só iterar = teto caindo; só experimentar = conta instável.

### 4.3 Produção e compliance

- Copy de criativo: `copywriting-fable5.skill.md` + `stop-slop.skill.md` + voz do cliente (skill de voz se existir; senão, amostras no briefing). **Nunca** `voz-victor` para cliente.
- Conformidade com políticas de anúncio do canal ANTES de subir (nicho sensível → checar políticas específicas; reprovação em série machuca a conta).
- **Nomenclatura padrão:** `[cliente]-[ângulo]-[formato]-[hook]-[versão]` (ex.: `debora-dor-video-h1-v2`). Sem nomenclatura, não há leitura de dados.

### 4.4 Fadiga e reposição

Sinal de fadiga: frequência > 3,5-4,0 **e** CTR caindo ≥ 20% vs. média própria. Ação: pausar criativo e repor da fila. **Fila de reposição: mín. 4 criativos prontos a cada início de mês.** Cadência de refresh: rodada nova a cada 2-4 semanas conforme verba.

---

## 5. FASE 5 — ESTRUTURA DE CAMPANHAS

### 5.1 Regra-mãe (qualquer canal)

**1 campanha por objetivo de conversão. O mínimo de subdivisões que a verba sustenta com dados densos.** Toda subdivisão precisa justificar-se por diferença real de oferta, funil ou economia — nunca por "organização".

### 5.2 Meta Ads (canal padrão do nosso ICP)

- **Estrutura:** 1 campanha por objetivo · 1-3 conjuntos no máximo · **6-20 criativos ativos por conjunto** · targeting broad ou Advantage+ (restrições mínimas: idade/região quando o negócio exige, ex.: local).
- **Não fazer:** empilhar lookalikes/interesses em conjuntos paralelos · duplicar criativos entre conjuntos concorrentes · mais de 3 conjuntos com verba < R$ 300/dia.
- **Teste → escala:** teste em estrutura própria com cap de verba (~50% do normal) e regras de kill (§7.3); vencedores migram/escalam na campanha principal (CBO). Exclusão mútua entre teste e principal quando possível.
- **Local/serviço:** raio geográfico + broad; formulário nativo ou WhatsApp como conversão; Customer Match/lista de clientes como sinal, não como jaula.

### 5.3 Verba pequena (< R$ 100/dia — realidade frequente do nosso ICP)

- **1 campanha, 1 conjunto, 6-10 criativos.** Zero fragmentação.
- Otimizar para o evento que gera ≥ 30-50 eventos/semana (lead/conversa, não compra, se necessário).
- Janela de decisão mais longa (dados escassos = decisões mais lentas, §7.3 com prazos dobrados).
- Expectativa contratada: verba pequena valida mensagem e gera fluxo, não escala. Dizer isso por escrito.

### 5.4 Google Ads (quando o nicho é demanda ativa)

- Verba < R$ 2.000/mês ou < 15 conversões/mês: **Search pura com correspondência controlada** (evitar PMax — IA sem dados queima verba em aprendizado).
- PMax só com ≥ 30 conversões/mês projetadas na campanha e feed/ativos decentes; asset groups por tema, não "tudo junto".
- Verba diária de referência: ≥ 10× CPA alvo (15-20× encurta aprendizado).

### 5.5 Nomenclatura de campanha (obrigatória)

`[cliente]-[canal]-[objetivo]-[funil]-[data]` · conjuntos: `[público/estrutura]` · anúncios: nomenclatura §4.3. Registrada em `estrutura-campanhas.md` do cliente.

---

## 6. FASE 6 — TRACKING (sem sinal, sem verba)

Checklist de subida — **tudo verde antes do primeiro real**:

1. **Pixel + CAPI simultâneos** (Meta) / tag + conversões aprimoradas (Google). EMQ alvo ≥ 7.
2. **Eventos do funil mapeados e testados** no Events Manager (PageView → Lead/Conversa → Compra, com dedupe pixel/CAPI).
3. **Convenção UTM documentada e travada** (padrão: `utm_source=meta|google · utm_medium=paid · utm_campaign=[nomenclatura §5.5] · utm_content=[criativo §4.3]`). Inconsistência de UTM fragmenta a leitura — convenção é lei.
4. **Fonte de verdade fora da plataforma:** planilha/CRM com leads por origem, custo, e resultado comercial (venda/não venda). A plataforma reporta o que ela vê; o caixa do cliente é o juiz.
5. **Atribuição definida por escrito** (janela padrão 7d clique/1d visualização) e mantida estável — mudar janela no meio invalida comparações.
6. Auditoria mensal do Events Manager (sinal degrada em silêncio).

---

## 7. FASE 7 — ROTINA DE GESTÃO (regras, não sensação)

### 7.1 Cadência

| Frequência | Ação | Tempo |
|---|---|---|
| **Diária** (dias úteis) | checagem de anomalia: gasto rodando? reprovações? CPA explodiu (> 2× alvo no dia)? | 10 min |
| **2×/semana** (ter/sex) | decisões kill/scale/manter pelas regras §7.3 + registrar em `LOG-DECISOES.md` | 30-45 min |
| **Semanal** | leitura de funil completo (plataforma + fonte de verdade), fila de criativos, ajuste de plano | 1h |
| **Mensal** | relatório ao cliente (Fase 8) + revisão da matemática §2.2 + auditoria de tracking | 2h |

### 7.2 Disciplina de aprendizado (o que NÃO fazer)

- **Não mexer nas primeiras 72h** de campanha/conjunto novo, salvo kill hard (§7.3).
- **Uma mudança estrutural por vez** — cada edição significativa (verba, otimização, criativo no conjunto) pode resetar aprendizado.
- Verba: **nunca variar mais de ±20% por 48-72h** no mesmo conjunto/campanha.

### 7.3 Regras de decisão (default — calibrar por cliente no plano)

| Situação | Regra | Ação |
|---|---|---|
| **Kill hard** (vale mesmo < 72h) | gastou 3× CPA alvo sem 1 conversão · CTR < 0,5% com ≥ 2.000 impressões · reprovado/limitado | pausar criativo/conjunto |
| **Kill normal** | CPA > 3× alvo por 3 dias corridos (após 72h) | pausar e diagnosticar (§7.4) |
| **Fadiga** | frequência > 3,5-4,0 + CTR −20% vs. média própria | pausar criativo, repor da fila |
| **Vencedor** | CPA ≤ alvo com ≥ 10 conversões acumuladas | iterar (70/30 §4.2) + candidato a escala |
| **Escala** | vencedor estável ≥ 7 dias | +20% de verba a cada 48-72h; monitorar CPA por 72h antes do próximo degrau |
| **Escala horizontal** | vertical saturou (CPA subiu 2 degraus seguidos) | novo criativo/ângulo/canal, não mais verba no mesmo lugar |
| **Verba pequena (§5.3)** | dados escassos | prazos das regras acima **dobrados** |

**Toda decisão dessas é registrada em `LOG-DECISOES.md` (data · o quê · por quê · resultado esperado).** O log é o que transforma gestão em método e alimenta o aprendizado entre clientes.

### 7.4 Ordem de diagnóstico (CPA alto — não tratar sintoma como causa)

1. **Tracking** — o dado é real? (Events Manager + fonte de verdade divergem?)
2. **Oferta** — CTR ok mas ninguém converte em lugar nenhum? O problema não é mídia.
3. **Página/atendimento** — clique caro converte mal? (CTR ok, conversão pós-clique baixa; ou leads bons não atendidos a tempo.)
4. **Criativo** — CTR baixo, frequência ok? Hook/ângulo fraco.
5. **Estrutura/leilão** — tudo acima ok e CPM explodiu? Sazonalidade, concorrência, consolidar estrutura.

### 7.5 Guardrails financeiros

- Cap de gasto mensal da conta = verba contratada (configurar na plataforma, não confiar em disciplina).
- Mudança de verba > 30% do plano mensal: aprovação do cliente por escrito.
- Nosso lado: CAC do cliente subindo 2 meses sem LTV acompanhar → tripwire `POLITICAS` §7 (rever oferta/canal antes de escalar verba).

---

## 8. FASE 8 — RELATÓRIO AO CLIENTE

- **Cadência:** mensal formal + resumo semanal curto (WhatsApp/e-mail, 5 linhas: gasto · resultado · próxima ação).
- **Estrutura do mensal:** (1) meta vs. realizado (a linha assinada em §2.2.6); (2) funil completo com custo por etapa; (3) o que aprendemos (criativos/ângulos vencedores e mortos); (4) decisões tomadas e por quê (extrato do log); (5) plano do próximo ciclo; (6) o que precisamos do cliente.
- **Métricas proibidas como manchete:** impressões, alcance, cliques soltos. Manchete é sempre resultado de negócio (leads qualificados, vendas, custo por resultado, receita).
- Números da plataforma **e** da fonte de verdade, lado a lado, com divergência explicada.
- Documento interno de governança não cruza stop-slop; **relatório de cliente cruza** (`stop-slop.skill.md` — é peça para humano).

---

## 9. COMPLIANCE DE SAÍDA E HANDOFFS

- Output de campanha/criativo/relatório passa por `00-core/COMPLIANCE-DE-OUTPUT.md`.
- **Handoffs:** ← CEO/CRO (oferta, posicionamento, preço) · → Head de Conteúdo (criativos, mensagem) · → Comercial do cliente (leads → atendimento; SLA de resposta é contratado) · → Head Financeiro (cobrança do fee + repasse de verba **sempre na conta do cliente**, nunca na nossa).
- **Verba do cliente roda em ativo do cliente** (BM/conta de anúncios própria, nós como parceiros/gestores). Protege o cliente, protege a nós e preserva o histórico dele.

---

## 10. EVOLUÇÃO DO MÉTODO

- Após cada ciclo mensal de cada cliente: 3 aprendizados registrados no `LOG-DECISOES.md` → candidatos a virar regra aqui.
- Thresholds do §7.3 são **defaults** — calibrados por cliente no `PLANO-DE-MIDIA.md`; quando 3+ clientes calibram o mesmo número, o default muda aqui (decisão registrada no rodapé).
- **Fase 2 (automação):** regras automáticas de plataforma, agentes de leitura via API (Windsor/Meta) e dashboards só entram após ≥ 1 cliente com 1 ciclo completo manual. Processo antes de ferramenta.

---

*Registro de mudanças: 2026-07-08 — criação (pesquisa de práticas 2025-26: consolidação pós-Andromeda, criativo-como-segmentação, Pixel+CAPI, regras de kill/escala; adaptado à nossa escala e ICP). Pendente: calibração com 1º cliente.*
