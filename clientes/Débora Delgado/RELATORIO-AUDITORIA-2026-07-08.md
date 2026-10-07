# RELATÓRIO DE AUDITORIA — Projeto Débora Delgado · 08/07/2026

> Auditoria executiva (modo AUDITORIA): falha + correção + decisão. Base: `DECISOES.md`, `OFERTA-CANONICA.md`, `CHECKPOINT-LANCAMENTO.md`, `STATUS-CONTA-ANUNCIOS.md`, iteração de copy "Seu Eixo" (02 - workshop/.../Iteração página de vendas) e método Continuum (`METODO-TRAFEGO-PAGO.md` + `METODO-PAGINA-DE-VENDAS.md`, governança).

## 1. Diagnóstico executivo

- **Problema central:** decisões já tomadas (30/06) e a iteração de copy da Débora ("Seu Eixo") não foram consolidadas nos artefatos canônicos — a operação tem 3 fontes divergindo (OFERTA-CANONICA diz "Carreira Alinhada"; copy-anuncios segue o posicionamento antigo em parte; a página nova diz "Seu Eixo" com H1 de dor que a decisão de 30/06 derrubou).
- **Gargalo dominante:** consolidação canônica + página refeita. Sem isso, criativo, campanha e tracking herdam divergência.
- **Maior alavanca:** registrar as decisões pendentes (nome, datas de lote, promessa) → refazer a página pelo método → destravar criativos e campanha em sequência.
- **O que NÃO será feito agora:** mentoria individual, LinkedIn/B2B, automações de mídia, order bump refinado — nada disso antes da página + campanha no ar.

## 2. Auditoria da iteração de copy "Seu Eixo" (falha → correção)

| # | Falha | Regra violada | Correção |
|---|---|---|---|
| 2.1 | **H1 "Mudou a empresa. O peso ficou."** = dor/estado atual | Decisão 30/06: H1 = promessa de plenitude ("Lidere com tudo o que você é" / "do bom ao pleno") | Hero reescrito com promessa; a dor desce para a seção 01 como custo da incongruência, nunca como identidade do lead |
| 2.2 | Tom "você está quebrado" em trechos (peso, vazio, medo) como fio condutor | Decisão 30/06: ICP **já lidera bem**; completar, não consertar | Reframe: espelhar custo sem diagnosticar defeito. Manter os acertos que a própria copy já tem ("Você é um líder experiente... as pessoas confiam em você") |
| 2.3 | **Nome "Seu Eixo"** e método **"Raiz em Ação"** usados sem registro | Governança do projeto: DECISOES + OFERTA-CANONICA prevalecem | Se Débora bateu o martelo → registrar em `DECISOES.md` e atualizar `OFERTA-CANONICA.md`; senão, tratar como proposta |
| 2.4 | **Datas de virada de lote** (19/07 · 20/07–02/08 · 03/08) aparecem na página, mas DECISOES diz "a definir" | Log de decisões | Confirmar com Débora e registrar. Atenção: lote 1 termina 19/07 — a página precisa estar no ar antes, ou as datas mudam |
| 2.5 | Entregas novas na página (Desenho Humano, EFT/"liberação ao vivo", IKIGAI, metas por neurociência) sem verificação contra os cadernos do workshop | Promessa = entrega (regra permanente) | Validar com Débora que os 3 dias entregam exatamente isso; ajustar página ou caderno |
| 2.6 | "Trava emocional se solta" / linguagem quase-terapêutica | Compliance Meta (atributos pessoais/saúde) — página tolera, anúncio não | Na página: ok com moderação. Nos criativos: proibido; usar linguagem de discernimento |
| 2.7 | Sem seção de prova social | Checklist de página p/ mídia (método tráfego §3.4) | Inserir provas reais (mentorias/atendimentos anteriores) mesmo que poucas; qualidade > volume |
| 2.8 | CTAs variados ("Garantir minha vaga", "Quero minha vaga", "Quero fazer esse caminho") | 1 CTA dominante | Padronizar o botão; variações só em texto de apoio |
| 2.9 | Auditoria fina de copy (fable5 + stop-slop + voz) ainda não passada | Árvore de copy §6.1 (governança) | Passa na reescrita da página — não retrabalhar a copy atual duas vezes |

**Veredito:** a iteração da Débora tem material bom (seção 02 "o que o líder nunca diz", estrutura de 3 dias, FAQ) — aproveitar como matéria-prima. Mas a página **precisa ser refeita** pelo `METODO-PAGINA-DE-VENDAS.md`, com o hero corrigido e as pendências 2.3–2.5 registradas antes.

## 3. Pendências técnicas (bloqueiam campanha — gates do método de tráfego)

| Gate | Estado | Ação |
|---|---|---|
| Página aprovada p/ mídia | ❌ a refazer (§2) | reescrever via método + design system |
| **Pixel/Dataset próprio** | ❌ inexistente (BM `2917036641953421` / CA `379430536736935` saudáveis, porém dormentes) | criar pixel + CAPI, instalar na landing/checkout, eventos PageView→InitiateCheckout→Purchase, verificar domínio — **aprovação Victor** |
| Matemática reversa assinada | ❌ não existe | ticket R$ 97-257 + escada (mentoria R$ 4k) → CPA máx, CPL máx, verba mínima — ver workspace de tráfego |
| **Verba de mídia confirmada** (Débora, ≥ 90 dias — condiciona garantia 1,5x) | ❌ pendente | fechar valor mensal por escrito |
| Estrutura de campanha | ❌ rascunho pendente | 1 campanha, 1 conjunto (verba pequena), 8-12 criativos — `PLANO-CRIATIVOS.md` |
| Checkout PagTrust + grupos WhatsApp por turma | ❌ pendente | plugar e testar ponta a ponta |

## 4. Gaps de governança do projeto (endurecimento p/ execução por qualquer modelo)

1. **CLAUDE.md do cliente desatualizado:** roteia copy/tráfego para skills genéricas de marketing e não conhece os métodos Continuum (`METODO-TRAFEGO-PAGO`, `METODO-PAGINA-DE-VENDAS`, árvore de copy). Corrigido em 08/07 (ver §6).
2. **Cadeia de precedência não explícita** no projeto: agora declarada — `DECISOES.md` > `OFERTA-CANONICA.md` > artefatos; métodos Continuum governam o *como*.
3. **Sem workspace de tráfego na governança:** criado `30-comercial/trafego-clientes/debora/` (camada de decisão; assets continuam aqui na operacional).
4. **Divergência de fee registrada:** contrato Débora (R$ 2.000/mês, escopo de agência) é anti-padrão documentado em `POLITICAS-DE-DECISAO.md` §5 — cumprir até o fim, não repetir.
5. **CHECKPOINT-LANCAMENTO** com marcos vencidos (D-Day D+7 de 25/06 passou) — recalendarizar contra 14/08 (workshop). Caminho crítico real: decisões da Débora (nome/promessa/datas de lote) → página → pixel → campanha.

## 5. Sequência de execução (ordem, sem paralelismo falso)

1. **Victor/Débora (hoje):** confirmar nome "Seu Eixo", datas de virada de lote, promessa final e verba de mídia → registrar em `DECISOES.md` → atualizar `OFERTA-CANONICA.md`.
2. **Continuum:** refazer página (método página + design system + copy auditada fable5/stop-slop/debora-voice) → aprovação Débora (SLA 3 dias úteis).
3. **Continuum:** pixel + CAPI + eventos + UTMs (aprovação Victor) → teste ponta a ponta com checkout.
4. **Continuum:** produzir criativos do `PLANO-CRIATIVOS.md` (lote 1: 8-12) → aprovação.
5. **Subir campanha** (estrutura verba pequena, método §5.3) → rotina de gestão §7 + `LOG-DECISOES` de tráfego.

**Validação financeira:** destrava a garantia contratual (1,5x) e a receita do lançamento — maior alavanca de resultado do contrato; reduz desperdício (nada de criativo/verba sobre página divergente); melhora caixa da Débora e nossa prova de caso para vender Assessoria a preço correto.
