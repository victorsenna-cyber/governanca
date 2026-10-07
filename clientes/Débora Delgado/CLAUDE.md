# CLAUDE.md — Operação Débora Delgado

Guia operacional para **planejar, construir e iterar** o Workshop **"Eixo"**
(nome final desde 17/07; "Carreira Alinhada" e "Seu Eixo" são nomes mortos — ver
léxico em `GOVERNANCA-REPO.md`) e seu funil. Leia junto com `PROJECT.md` (o quê e por quê).
Este arquivo diz **como trabalhar** e **o que carregar em cada requisição** — para
gastar menos contexto e acertar mais.

> **Repo operacional canônico:** este (`00 - Local/01 - Governança/clientes/Débora Delgado`).
> `00 - Local/clientes/Débora Delgado` e `04 - Onboarding/Operação/Débora Delgado`
> permanecem como origens preservadas/legado: leitura apenas, sem writeback ou espelhamento.

---

## 0. Regra de ouro de contexto (leia primeiro)

**Não leia a pasta inteira.** Cada requisição puxa só os arquivos da sua coluna na
tabela do §3. Antes de abrir qualquer arquivo, pergunte: *"isto está na lista mínima
desta tarefa?"* Se não, não abra.

- Arquivos grandes (PDFs, .pptx, transcrição íntegra) entram **só quando o conteúdo
  for o objeto da tarefa**. Para contexto rápido, use o resumo, não a íntegra.
- Defina o **subconjunto de pastas** logo no início (ex.: "esta tarefa vive em
  `02 - workshop` + `03 - tráfego pago`").
- Releia este CLAUDE.md e o PROJECT.md no começo de cada sessão; o resto é sob demanda.

---

## 0a. Fila de execução + protocolo de sessão (terminal)
1. **`DIRETRIZES-EXECUCAO-LANCAMENTO.md`** define quem (ferramenta) executa o quê, com que contrato e o que é proibido decidir. Executor: encontre sua tarefa lá antes de qualquer coisa.
2. **`DIARIO-DE-BORDO.md` é obrigatório:** toda sessão abre lendo as 3 últimas entradas e fecha registrando a sua (formato no topo do arquivo). Registrar A CADA passo relevante, não só no fim. Sessão sem entrada = trabalho perdido.

## 0c. Governança do repo — status, propagação e léxico morto (16/07)

**`GOVERNANCA-REPO.md` (raiz) é leitura obrigatória de abertura junto com este arquivo.** Resumo do que ele impõe: (1) todo doc operacional carrega linha `STATUS:` (fonte / derivado+sync / histórico / superado) — doc sem status ou superado NÃO se usa como fonte; (2) toda decisão nova no DECISOES declara **"Propaga p/:"** e a sessão sinaliza as propagações na fila (regra 16/07: sinalizar, não implementar automaticamente); (3) criar versão nova obriga marcar a anterior SUPERADA na mesma sessão; (4) toda copy nova passa pela varredura do **léxico morto** (§4 de lá) antes de fechar; (5) gate de fechamento de sessão (§6 de lá) soma-se ao diário. Origem: postmortem de 16/07 (`10 - Registros de análises/`).

## 0b. Governança Continuum (métodos que mandam aqui) — atualizado 08/07

Os métodos e skills da Continuum estão **replicados localmente em `00 - governança continuum/`**. A fonte canônica é a **Governança-pai desta árvore** (`../..`, isto é, `00 - Local/01 - Governança/`); as réplicas não se editam aqui — ver README de lá. Carregar o método da tarefa a partir da réplica local. Regras que nunca se contrariam:

- **Precedência de fato/decisão neste projeto:** `DECISOES.md` (mais recente vence) > `OFERTA-CANONICA.md` > qualquer outro artefato. Divergiu → atualiza o artefato, nunca o contrário.
- **Tráfego pago** → `00 - governança continuum/METODO-TRAFEGO-PAGO.md` + `gestao-trafego.skill.md`. Gates inegociáveis: matemática reversa assinada · página aprovada · Pixel+CAPI verdes · kill/scale por regra (3× CPA sem conversão = kill · +20%/48-72h = escala · 72h sem mexer) · toda decisão registrada em `03 - tráfego pago/LOG-DECISOES.md`. **Estado ativo de tráfego (BRIEFING · PLANO-DE-MIDIA · LOG-DECISOES) vive em `03 - tráfego pago/` desta pasta** — a Governança guarda só ponteiro.
- **Páginas** → `METODO-PAGINA-DE-VENDAS.md` + checklist de aprovação p/ mídia (message match, 1 CTA, mobile < 3s, prova social, pixel testado).
- **Toda copy p/ humano** → `copywriting-fable5` + `stop-slop` + `debora-voice` (skills locais em `07 - skills/`). **Nunca** voz do Victor em peça da Débora.
- **Posicionamento vigente (30/06):** ICP líder **que já lidera bem**; promessa = do bom ao pleno (completar, não consertar). Nenhuma peça diagnostica o lead como quebrado.
- Nada sobe (página, campanha, verba, mensagem) sem **aprovação humana** (Débora copy/página · Victor mídia/verba).

## 1. Princípios da operação

1. **Princípios, não crenças.** Vendemos transformação de consciência (perpétua), não
   táticas datadas. A estratégia muda; a essência não.
2. **Duas frentes em paralelo:** Conteúdo do Workshop (A) e Funil/Aquisição (B),
   convergindo em "2 turmas-piloto prontas".
3. **Construir + validar juntos**, não teoria isolada. Piloto barato, iteração semanal.
4. **Voz da Débora:** clara, sofisticada, humana, estratégica. Verbos de discernimento
   (interpretar, reconhecer, orientar, preservar coerência), não de task manager.
5. **NR-1 é gancho**, nunca o centro. Nada de "NR-1 para inglês ver".
6. **Aprovação humana** antes de publicar páginas, subir tráfego ou disparar mensagem.
7. 🔴 ⭐ **Não se interrompe o fluxo dela — direciona-se** *(25/09/2026, alçada Victor)*. Quando ela está produzindo com entusiasmo (gravando, criando), **não a seguramos, mesmo que parte do que produz possa não entrar na oferta** — o custo desse retrabalho é menor que o custo de quebrar o entusiasmo. **O nosso trabalho é outro: dar a direção certa e tornar a estratégia o mais fácil possível de COMPREENDER e ADOTAR** — diagrama antes de texto, o que ela já tem mostrado dentro da estrutura, o que muda em uma linha. **Frase-sinal do erro:** *"pare de gravar até…"*. Não confundir com a `REGRA Nº 0`: a estrutura continua sendo nossa; o que muda é o **modo** de levá-la — encaixe, não freio.
8. 🔴 ⭐ **Nenhuma promessa excede o que o instrumento entrega** *(25/09/2026, alçada Victor)*. Ela declara, sempre, que toda entrega dela tem de produzir resultado real — promessa acima disso é falsa **e ela sente.** **Aplicação que instituiu:** o quiz promete **"um norte" — uma primeira visão sobre o POSSÍVEL padrão pela ótica do Eneagrama** —, nunca *"descubra o seu tipo"*. **Vocabulário:** *um norte · primeira visão · como você está liderando* ✅ (*"possível padrão"* só em explicação, nunca em headline, CTA ou gancho — 02/10) · *você é tipo X · descubra o seu tipo · o teste mais preciso* ❌. **E não é só cautela:** o mecanismo dela (P2) diz que teste de comportamento engana — **um quiz que prometesse o tipo seria o teste que o nosso próprio mecanismo condena.** Registro: `REGISTRO-WHATSAPP-2026-09-25.md` §2.2.

---

## 2. Mapa de pastas (onde cada coisa vive)

| Pasta | Conteúdo | Quando entrar |
|---|---|---|
| `01 - contexto` | contrato, ESCOPO, CONTEXTO DÉBORA, calls, Notion, áudios | só para entender Débora/escopo |
| `02 - workshop` | cadernos, NR-1, manifesto, artefatos/blueprints | frente A (conteúdo) |
| `03 - tráfego pago` | campanhas, públicos, criativos de mídia | frente B (aquisição) |
| `04 - web design` | landing pages, checkout, grupo WhatsApp | frente B (web) |
| `05 - design` | identidade visual, cadernos diagramados, social | frentes A e B (visual) |
| `06 - Claude` | histórico Claude Code + Cowork | referência, raramente |
| `07 - skills` | skills locais (`debora-voice`, `funil-debora`, etc.) | toda copy p/ humano |
| `08 - artefatos` | blueprints, ICP, qualificação | frentes C/D |
| `09 - operação` | operação/execução do lançamento | operação |
| `10 - Registros de análises` | análises, postmortems, auditorias (STATUS: HISTÓRICO) | referência/decisão |

> **Governança na raiz:** `DECISOES.md` (precedência máxima) · `OFERTA-CANONICA.md` (em
> `03`) · `GOVERNANCA-REPO.md` · `DIARIO-DE-BORDO.md` · `DIRETRIZES-EXECUCAO-LANCAMENTO.md`.

---

## 3. O que usar em cada tipo de requisição

Para cada frente: **skill a invocar**, **arquivos mínimos** e **saída**. Carregue só o
que está na linha.

### A. COPY / CONTEÚDO (workshop, e-mails, posts, scripts)
- **Skill:** `marketing:draft-content` (posts, e-mail, landing copy) ·
  `marketing:email-sequence` (sequências) · `marketing:campaign-plan` (calendário)
- **Voz:** ver §1.4 + ler 1 caderno de exemplo em `02 - workshop` para calibrar tom.
- **Arquivos mínimos:** este CLAUDE.md + PROJECT.md §4–6 + o caderno/peça específica.
  **Não** abrir a transcrição íntegra para escrever copy.
- **Saída:** `.md` na pasta da frente (workshop → `02`, social → `05`).

### B. TRÁFEGO PAGO (Meta/Instagram)
- **Skill:** `marketing:campaign-plan` (estrutura de campanha) + `marketing:draft-content`
  (criativos/ângulos). Para conectar/medir contas, MCP de ads (Meta) sob aprovação.
- **Arquivos mínimos:** PROJECT.md §5–6 (oferta, lotes, público) + brief da campanha.
- **Saída:** plano de campanha + variações de criativo em `03 - tráfego pago`.
- **Regra:** nunca subir/pausar campanha ou mexer em orçamento sem o Victor confirmar.

### C. WEB / PÁGINAS (landing, checkout, WhatsApp)
- **Skill:** `ui-ux-pro-max` (sempre, para qualquer página/UI) — gera HTML/CSS único,
  sem dependências externas, compatível com WordPress/Wix.
- **Arquivos mínimos:** PROJECT.md §5 (oferta/preços) + copy já aprovada + paleta de
  `05 - design`. Reaproveitar UI já aprovada dos HTMLs em `02 - workshop/artefatos`.
- **Saída:** `.html` autocontido em `04 - web design`.

### D. COMERCIAL (qualificação, venda da mentoria, funil)
- **Skill:** `sales:create-an-asset` (one-pager/oferta) · `sales:draft-outreach`
  (abordagem) · blueprints em `02 - workshop/artefatos` (ICP, qualificação) como base.
- **Arquivos mínimos:** PROJECT.md §5 + blueprint de qualificação relevante.
- **Saída:** script/asset em `03 - tráfego pago` ou `02 - workshop` conforme o uso.

### E. DESIGN / IDENTIDADE VISUAL
- **Skill:** `canvas-design` (peças estáticas, capas, cadernos) · `theme-factory`
  (aplicar tema/paleta consistente) · `pptx` (diagramar cadernos do workshop).
- **Arquivos mínimos:** identidade aprovada em `05 - design` + a peça a produzir.
- **Saída:** ativo visual em `05 - design`.

### F. CADERNO DE EXERCÍCIOS / DOCUMENTOS DO WORKSHOP
- **Skill:** `pptx` (cadernos A4 já estão em .pptx) ou `docx` (documentos de texto).
- **Arquivos mínimos:** o caderno específico em `02 - workshop/Materiais pré workshop`.
- **Saída:** caderno atualizado na mesma pasta.

### G. PLANEJAMENTO / SPRINT / ITERAÇÃO
- **Skill:** nenhuma externa — usar a lista de tarefas (TaskCreate/TaskUpdate).
- **Arquivos mínimos:** PROJECT.md (visão) + este CLAUDE.md.
- **Saída:** plano/sprint em `.md` na raiz ou na pasta da frente.

---

## 4. Skills a CRIAR (específicas da Débora)

Quando uma rotina se repetir, criar skill própria com `skill-creator` para padronizar
voz e estrutura e **reduzir prompt repetido** (menos tokens, mais consistência):

1. **`debora-voice`** — guia de voz/tom da Débora (verbos, vocabulário, o que evitar).
   Carregada por qualquer tarefa de copy. *Prioridade alta.*
2. **`workshop-caderno`** — template e regras dos cadernos A4 (estrutura Boas-vindas +
   3 dias, missões, campos de escrita). *Alta.*
3. **`funil-debora`** — oferta canônica (lotes R$97/197/257, mentoria R$4k, cashback,
   order bump) para páginas e scripts não divergirem. *Alta.*
4. **`landing-debora`** — padrão de landing/checkout (UI aprovada + blocos de oferta).
   Depende de `ui-ux-pro-max`. *Média.*
5. **`copy-instagram-debora`** — ângulos e ganchos recorrentes (propósito, NR-1 como
   gancho secundário) para conteúdo de Instagram. *Média.*

Até existirem, usar as skills genéricas do §3 + ler este arquivo para a voz.

---

## 5. Fluxo padrão de uma tarefa

1. Identificar a **frente** (A–G) e abrir só os arquivos mínimos da linha.
2. Invocar a **skill** indicada.
3. Produzir na **pasta de saída** correta.
4. Marcar tarefas (TaskCreate/TaskUpdate) se forem 3+ passos.
5. Encerrar com: arquivos criados + resumo curto + pendências.

---

## 6. Saída esperada ao final de cada entrega

```
Arquivos: [lista]
Resumo: [até 5 linhas]
Pendências: [se houver]
```

Sem postâmbulo longo — Débora/Victor abrem os arquivos se quiserem detalhe.
