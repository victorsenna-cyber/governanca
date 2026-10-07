# TASK EXECUTOR — Montagem da campanha (100% PAUSADA) · Seu Eixo · agosto/26

> STATUS: VIGENTE · fonte (contrato de montagem da campanha) · criado 18/07 (Fable 5, planejamento)
> Deriva de: `MATEMATICA-REVERSA-LANCAMENTO.md` (16/07) · `PLANO-DE-MIDIA.md` · `CALENDARIO-LOTES.md` · `criativos/COPY-CRIATIVOS-ESTATICOS.md` v4 · `00 - governança continuum/METODO-TRAFEGO-PAGO.md` §§4-7.
> Propaga p/: `campanha/estrutura-campanhas.md` (executor cria) · `LOG-DECISOES.md` (registro da montagem) · `PLANO-DE-MIDIA.md` §2 (quando Victor assinar A/B).
> **Executor previsto:** Sonnet (Claude Code) com MCP Meta Ads. **Autorização de montagem pausada:** pedido do Victor em 18/07 + parecer da MATEMATICA §5 (16/07). **Ativação NÃO faz parte desta task.**

---

## 0. Missão e limites (ler antes de qualquer chamada de API)

**Missão:** montar a estrutura completa da campanha na conta da Débora, com TUDO em `PAUSED`, pronta para o Victor ativar em 3 cliques quando os gates humanos fecharem.

**Proibições absolutas (violar = falha da task):**
1. Nenhum objeto criado com status ativo. Campanha, conjuntos e anúncios nascem `PAUSED`.
2. Nenhuma alteração em billing, limite de gasto, pixel/dataset, domínio ou nas 5 campanhas legado (ignorá-las).
3. Nenhuma copy nova. Primary text, headline e botão são EXATOS da COPY v4 (§3 abaixo). Divergência encontrada → parar e registrar, não "melhorar".
4. Nenhuma decisão de verba, preço, público além do especificado, ou data. Dúvida = parar e registrar em `LOG-DECISOES.md`, nunca improvisar.
5. Usar SOMENTE os ativos da Débora: BM `2917036641953421` · CA `379430536736935`. **Nunca** usar pixel/contas de terceiros que aparecem no login (ex.: "Pixel Exponencial", business `terapeutaguilhermearaujo`).

**Leitura mínima obrigatória (nada além disto):** este doc → `copy-anuncios.md` (v2 — campos Meta prontos, peça a peça) → `criativos/COPY-CRIATIVOS-ESTATICOS.md` (v4, fonte — usar na conferência 🔍 do §5; divergência entre os dois → v4 prevalece, parar e registrar) → `CALENDARIO-LOTES.md` (datas) → `MATEMATICA-REVERSA-LANCAMENTO.md` §§2-3 (cenários/fases) → `LOG-DECISOES.md` (regras já registradas). Não abrir transcrições, `06 - Claude/`, `_arquivo/`, cadernos.

**Fallback:** se a API recusar criação (verificação do BM pendente — CNPJ da Débora), não insistir: gerar `campanha/ESTRUTURA-MANUAL-GERENCIADOR.md` com o passo a passo clique a clique desta mesma estrutura para o Victor montar à mão, e registrar o bloqueio.

---

## 1. Pré-condições

**Para MONTAR (esta task):** nenhuma pendência externa — o repo basta. Rodar já.

**Para ATIVAR (fora desta task — gates do humano, listar no relatório final):**
1. ✅ **Página v3 PUBLICADA em 18/07** (`deboradelgado.space` verificada: H1 novo, message match com E1 ok, narrativa sem termo vetado). ⚠️ Ressalva aberta: 1 "talentos" residual no card 1 do TRES (fix de 1 palavra sinalizado, decisão Victor) · aprovação formal da Débora do pacote segue o SLA (3 dias úteis/tácita).
2. Criativos v4 aprovados pela Débora (mesmo pacote) + E4 refeito + cards 🔍 conferidos (§5).
3. Matemática reversa assinada (Victor decide cenário A/B; verba por escrito da Débora se B).
4. Verificação do BM concluída.

---

## 2. Parâmetros por cenário (Victor assina; default de montagem = A)

| Parâmetro | **A · R$ 2.000 (verba confirmada)** | **B · R$ 3.500 (se aprovado)** |
|---|---|---|
| Orçamento diário (CBO) | **R$ 60/dia** | **R$ 105/dia** |
| Conjuntos | 1 (broad) | 2 (broad + retarget, retarget nasce pausado e só entra na F2) |
| Regime de decisão | método §5.3: prazos de kill/scale **dobrados** | thresholds padrão §7.3 |

**Regra de montagem:** se no momento da execução a assinatura A/B não existir, montar com os valores do **cenário A** (única verba confirmada em contrato) e registrar. Ajuste de orçamento em campanha pausada não reseta aprendizado; a troca para B, se assinada, é 1 edição antes de ativar.

---

## 3. Estrutura a criar (Meta Ads)

### 3.0 Verificações prévias (leitura, antes de criar qualquer coisa)
1. Confirmar CA `379430536736935` ativa e acessível.
2. Identificar o **dataset/pixel próprio** vinculado à CA (criado em jul/26; eventos PageView/InitiateCheckout/Purchase verdes com dedupe pixel+CAPI). Registrar o ID no `estrutura-campanhas.md`. Se houver mais de um candidato ou nenhum → parar e registrar.
3. Identificar a Página do Facebook + conta Instagram da Débora vinculadas à CA (`ads_get_ad_account_pages` / `ads_get_ig_accounts`). Ambíguo → parar e registrar.
4. Confirmar que as 5 campanhas legado seguem pausadas; não tocá-las.

### 3.1 Campanha
- **Nome:** `debora-meta-vendas-workshop-ago26`
- Objetivo: **Vendas** (OUTCOME_SALES) · **CBO** com orçamento diário do cenário (§2) · status `PAUSED`.
- Compra: leilão. Sem A/B test, sem verba vitalícia.

### 3.2 Conjunto 1 — `broad-br` (F1, o único ativo no cenário A)
- Otimização: **InitiateCheckout** (decisão 08/07, LOG-DECISOES) · janela de atribuição **7d clique / 1d visualização** (método §6.5 — não mudar depois).
- Público: **broad Brasil, 18+, sem recorte de interesse**. Recorte etário SÓ se houver confirmação da Débora registrada em DECISOES (hoje não há → não aplicar).
- Posicionamentos: Advantage+ (automáticos).
- Destino: `https://deboradelgado.space/` (com UTMs do §4).
- Status `PAUSED`.

### 3.3 Conjunto 2 — `retarget-quente` (SÓ montar se cenário B assinado)
- Mesma otimização/janela. Públicos personalizados a criar: engajamento IG+FB 180d · visitantes do site 30d (pixel próprio). Exclusão: compradores (Purchase).
- Criativos: CN3 e CN4 (retarget da escada). Nasce `PAUSED` e assim permanece até a F2 (29/07) — a entrada dele é decisão de gestão registrada no LOG, não automática.

### 3.4 Anúncios F1 (7 peças, todas `PAUSED`, no conjunto `broad-br`)

Copy EXATA (primary text · headline · botão · URL/UTM): **`copy-anuncios.md` v2** (folha de montagem, derivada da COPY v4). Artes: caminhos indicados na própria folha (`criativos/ESTÁTICOS/` e `criativos/CARROSSÉIS/<peça>/`).

| # | Nome do anúncio (= slug v4) | Formato | Arte |
|---|---|---|---|
| 1 | `debora-eficiencia-estatico-h1-v2` | estático | E1 ✅ |
| 2 | `debora-custo-estatico-h1-v1` | estático | E2 ✅ |
| 3 | `debora-raiz-estatico-h1-v1` | estático | E3 ✅ |
| 4 | `debora-sistemas-carrossel-h2-v2` | carrossel 5 cards | C1 (cards 2-5 🔍 → §5) |
| 5 | `debora-paz-carrossel-h1-v2` | carrossel 4 cards | C2 (cards 2-4 🔍 → §5) |
| 6 | `debora-cn1-ruminacao-carrossel-v1` | carrossel 5 cards | CN1 ✅ |
| 7 | `debora-cn2-causa-carrossel-v1` | carrossel 5 cards | CN2 (cards 2-4 🔍 → §5) |

**NÃO montar agora:** E4 (arte com erro "R$ 97,0"; versões por lote entram na F2, 72h antes da virada de 28/07) · CN3/CN4 (F2) · CN5 (versão por lote, F3) · E5 (arquivada em 16/07, PNG já movido p/ `criativos/_arquivo/`) · vídeos (roteiros desatualizados, iteração em sessão própria).

### 3.5 Registro obrigatório
Criar `campanha/estrutura-campanhas.md` com: IDs de campanha/conjuntos/anúncios/criativos · dataset ID · página/IG usados · data/hora · status (tudo PAUSED) · cenário aplicado. Sem esse arquivo, a montagem não conta como feita.

---

## 4. UTMs (lei — método §6.3)

Em TODOS os anúncios, URL final:
```
https://deboradelgado.space/?utm_source=meta&utm_medium=paid&utm_campaign=debora-meta-vendas-workshop-ago26&utm_content=[slug-do-anuncio]
```
`utm_content` = nome exato do anúncio (§3.4). Sem variação, sem campos extras.

---

## 5. Conferência dos 10 cards 🔍 (parte desta task)

Antes de subir as artes, conferir visualmente os cards marcados 🔍 na COPY v4 (C1: 2-5 · C2: 2-4 · CN2: 2-4 · CN3: 2 e 4 · CN4: 2-4 · CN5: 2-4) contra o texto do doc. Regra: **arte diverge → NÃO sobe; registrar a divergência peça a peça** (a iteração da arte é do Victor). Se a arte estiver melhor que o doc, transcrever a melhoria para a v4 e registrar. CN5 confere mas não monta (§3.4).

---

## 6. Checklist de tracking (verificar e REPORTAR — não corrigir nada)

1. Eventos PageView / InitiateCheckout / Purchase chegando no dataset com dedupe pixel+CAPI.
2. EMQ ≥ 7 no evento de otimização (IC).
3. Domínio `deboradelgado.space` verificado no BM.
4. Fonte de verdade fora da plataforma viva: planilha de leads (Apps Script) + PagTrust.
5. Cap de gasto mensal da conta configurado = verba do cenário (se não estiver: **sinalizar p/ Victor**, não configurar).

Qualquer item vermelho → relatório, não conserto. Tracking é gate de ATIVAÇÃO, não de montagem.

---

## 7. Gate de saída da montagem (tudo ✓ ou a task não fecha)

- [ ] Campanha + conjunto(s) + 7 anúncios criados, todos `PAUSED`, nomenclatura exata.
- [ ] Copy conferida 1:1 com a v4 (zero adaptação).
- [ ] UTMs conforme §4 em todos os anúncios.
- [ ] Preview de cada anúncio gerado e conferido (texto sobre imagem legível, link certo).
- [ ] `campanha/estrutura-campanhas.md` criado com todos os IDs.
- [ ] Conferência 🔍 (§5) feita e registrada.
- [ ] Checklist §6 rodado e reportado.
- [ ] Linha no `LOG-DECISOES.md` (montagem pausada: o quê, por quê, resultado esperado) + entrada no `DIARIO-DE-BORDO.md` (raiz).
- [ ] Relatório final: o que está pronto · gates de ativação pendentes (§1) · nenhuma pendência inventada.

---

## 8. Contexto de gestão (NÃO executar nesta task — o mês completo está em `PLANO-FUNIL-LANCAMENTO.md`)

- **F1 Aprendizado (16-28/07 · lote R$ 97):** roda o conjunto broad com as 7 peças. Não mexer nas primeiras 72h. 1 mudança estrutural por vez.
- **F2 Validação (29/07-07/08 · R$ 197):** kill 3×CPA (prazos dobrados no cenário A) · entra E4-L2 72h antes da virada (25/07) · cenário B: ativa retarget.
- **F3 Colheita (08-18/08 · R$ 257):** E4-L3 + CN5 · frio só nos 2-3 vencedores.
- CPA teto: **R$ 75 (IC)**. Escala: +20%/48-72h no vencedor. Cadência de decisão ter/sex, registrada no LOG.
- Ativação, kill, scale e verba: **sempre Victor**. Executores leem dados e propõem.
