# LOCAL.md — Continuum como Repositório Único de Verdades (2 Máquinas)

> Documento explicativo de infraestrutura. Não é política de decisão nem substitui o `CLAUDE.md` raiz — descreve **como** o conhecimento de `01 - Governança` passa a operar em duas instâncias físicas (dois computadores), com dois canais de sincronização possíveis.
> Status: proposta inicial, várias decisões ainda em aberto (marcadas com ✏️).

---

## 1. Contexto

`01 - Governança` já rege dois tipos de projeto sob os mesmos princípios e políticas do `CLAUDE.md` raiz:

- **Projetos próprios** — ex.: `25 - Multi Agentes VPS` (Continuum OS, sistema multiagente autohospedado).
- **Projetos de terceiros/clientes** — ex.: `clientes/Débora Delgado` (contexto, contrato, workshop, tráfego, design) e o recorte decisório em `30-comercial/trafego-clientes/debora` (briefing, plano de mídia, log de decisões). A cópia anterior em `04 - Onboarding/Operação/Débora Delgado` é legado de leitura.

Hoje esse conhecimento existe **em um único computador**. Não há hoje um mecanismo formal para que uma segunda máquina tenha o mesmo estado, em tempo real, com um papel de execução.

## 2. Objetivo

Criar **um repositório único de verdades** — sobre projetos próprios e projetos de terceiros — acessível a partir de **duas instâncias/dois computadores**, cada uma rodando sua própria sessão (Cowork/Claude Code), operando em papéis complementares:

- **Máquina A — implementação.** Roda um Cowork que lê `01 - Governança` + o projeto em questão, diagnostica, decide e **implementa tasks** (documentação, artefatos, código, próximos passos).
- **Máquina B — execução.** Tem acesso imediato ao que a Máquina A produziu e **executa** (ex.: rodar comando na VPS, aplicar migration, dar sequência a um deploy, continuar uma conversa com um cliente).

O requisito central é **latência mínima** entre "A implementou" e "B enxerga e executa" — daí a preferência por pasta de rede em vez de ciclo git completo.

## 3. Duas vias de sincronização (não são mutuamente exclusivas)

### 3.1 GitHub (nuvem, versionado) — canal secundário / rede de segurança

Já existe infraestrutura pronta para isso, hoje subutilizada para este fim específico:

- Repositório privado `victorsenna-cyber/continuum` já documenta exatamente este cenário (dois notebooks, fluxo `git pull` → trabalho → `git add/commit/push`), incluindo um guia (`SETUP-SERVIDOR-GIT.md`) com opção de servidor Git na própria rede local (Gitea, pasta SMB com repo bare, ou SSH).
- `12 - Github/` guarda hoje clones/exports de outros repositórios do ecossistema (Continuum AI Systems, Continuum Financeiro OS, Open Design) — não é o mesmo repositório do item acima, mas mostra que o hábito de versionar no GitHub já existe.
- `25 - Multi Agentes VPS/.git` é um repositório git **próprio do projeto** (código-fonte, migrations, testes) — tem ciclo de vida e finalidade diferentes do "repo de verdades" de governança. Não confundir os dois: um versiona código de produto, o outro versiona conhecimento/decisão/tarefas.

**Vantagens:** histórico completo, reversível, funciona fora da rede local, sobrevive a falha de uma das máquinas.
**Limitação para este caso de uso:** exige disciplina de pull/push manual — quebra o cenário "A implementa, B já vê e executa" enquanto alguém não rodar `git pull`.

### 3.2 Pasta local compartilhada por rede (SMB) — canal escolhido como principal

Decisão registrada nesta conversa: **para o fluxo de "uma máquina implementa, a outra executa imediatamente", a pasta compartilhada por rede é a via mais viável**, mesmo com o risco de corrupção entre as duas máquinas assumido conscientemente.

- Tecnicamente equivale à **Opção B** do `SETUP-SERVIDOR-GIT.md` do repo `continuum` (pasta SMB com repositório bare) — mas pode também ser usada **sem git nenhum por trás**, como puro compartilhamento de arquivos (`\\IP-DO-SERVIDOR\GitRepos` ou similar), o que é a leitura mais literal do pedido: acesso imediato, sem etapa de commit.
- ✏️ **A decidir:** se o compartilhamento SMB vai ter um `git init --bare` por trás (histórico + rollback, exige commit/push mesmo que só localmente) ou vai ser puramente uma pasta espelhada (zero fricção, zero histórico automático).

**Vantagem:** acesso instantâneo — Máquina B lê o arquivo que a Máquina A acabou de salvar, sem etapa intermediária.
**Risco assumido:** duas máquinas escrevendo o mesmo arquivo ao mesmo tempo → corrupção, sobrescrita silenciosa, sem o mecanismo de aviso que o Git dá em um `pull` conflitante.

## 4. Papéis das máquinas

| | Máquina A (implementação) | Máquina B (execução) |
|---|---|---|
| Ferramenta | Cowork | ✏️ a definir (Claude Code? sessão dedicada?) |
| Ação típica | Diagnostica, escreve doc/task/artefato, atualiza estado | Lê o que foi produzido, executa (deploy, comando, próxima etapa operacional) |
| Escreve em | Pasta de rede (+ eventualmente push pro GitHub) | Pode escrever de volta (status de execução, log) — ✏️ definir se B também escreve ou só lê+executa |
| Papel equivalente no projeto 25 | Análogo ao planejador/auditor (Claude Opus/Fable) | Análogo ao executor (Codex / Claude Code sob override) |

O modelo de "duas streams que não tocam o domínio uma da outra" já usado em `25 - Multi Agentes VPS` (partição por domínio de arquivo, fronteira dura, handoff explícito quando uma precisa da área da outra) é o precedente direto para este repositório de verdades — vale reaproveitar a mesma lógica em vez de inventar uma nova.

## 5. Estrutura proposta do repositório de verdades

```
01 - Governança/                     ← raiz de governança (regras, papel de CEO, roteador de skills)
├── CLAUDE.md                        ← autoritativo, já existe
├── STATUS.md                        ← estado vivo da empresa, já existe
├── local.md                         ← este arquivo
├── 00-core/ · 10-skills/ · 100-métodos/ · 30-comercial/ · 40-operacao-rotinas/ · 60-planos/  ← já existem
│
├── [própria: 25 - Multi Agentes VPS]       ← projeto próprio regido por esta governança
│   └── (repo git interno próprio — código, migrations, testes)
│
└── clientes/<cliente>/                    ← projetos de terceiros dentro desta governança
    └── ex.: Débora Delgado (contexto, contrato, workshop, tráfego, design)
        + recorte operacional em 30-comercial/trafego-clientes/<cliente>/
```

✅ **Decisão executada em 20/07/2026:** o contexto operacional de clientes passa a viver fisicamente em `clientes/<cliente>/` dentro desta Governança. As pastas anteriores permanecem preservadas como leitura/legado; não há sincronização de volta nem exclusão automática.

## 6. Regras para mitigar risco de corrupção (pasta de rede)

Adaptado das regras já usadas no repo `continuum` e no fluxo de streams do projeto 25:

1. **Sempre puxar/olhar o estado mais recente antes de começar** a mexer em algo, mesmo sem git — checar timestamp do arquivo.
2. **Nunca as duas máquinas editando o mesmo arquivo ao mesmo tempo.** Dividir por domínio (ex.: A só mexe em tasks/docs, B só mexe em logs de execução) — mesma lógica de partição de `25 - Multi Agentes VPS` §Fronteiras.
3. ✏️ **Convenção de "em uso"** — considerar um arquivo simples de lock (ex.: `_LOCK-<arquivo>.txt` com nome de quem está editando) para sinalizar visualmente que algo está em edição, já que a pasta de rede não avisa conflito como o Git faz no `pull`.
4. **Rede de segurança assíncrona:** mesmo usando a pasta como canal principal, considerar um push periódico (diário? por task concluída?) para o GitHub como backup versionado — não bloqueia o fluxo imediato, mas dá reversibilidade se algo corromper.
5. Se aparecer divergência ou arquivo estranho, reportar antes de sobrescrever — não presumir qual versão é a certa.

## 7. O que entra e o que fica de fora do canal de rede

- **Entra (leve, texto, precisa de acesso imediato):** `.md` de governança, tasks, decisões, status, checkpoints, handoffs.
- ✏️ **Avaliar caso a caso (pesado ou sensível):** gravações de call (`.mp4`), contratos assinados (`.docx`/`.pdf`), zips de repositório em `29 - Repositórios/` — provavelmente ficam fora do canal de sincronização imediata e continuam só no computador/pasta onde já estão.

## 8. Pendências abertas (resumo)

- [ ] Definir se a Máquina B roda Claude Code, outro Cowork, ou outra ferramenta.
- [ ] Definir protocolo técnico do compartilhamento (SMB nativo do Windows, nome de máquina vs. IP fixo, permissões).
- [ ] Definir se a pasta compartilhada tem um `git init --bare` por trás ou é puramente espelhada.
- [ ] Definir se os projetos (25, 04/Débora) entram fisicamente na árvore sincronizada ou ficam fora com só um ponteiro em `01 - Governança`.
- [ ] Definir cadência do backup assíncrono para o GitHub (rede de segurança).
- [ ] Definir mecanismo de sinalização de "arquivo em edição" para reduzir risco de corrupção.

---

**Referências internas:** `CLAUDE.md` (papel e políticas desta pasta) · `STATUS.md` (estado vivo) · repositório GitHub `victorsenna-cyber/continuum` (`PROJETO.md` e `SETUP-SERVIDOR-GIT.md`, já cobrem o setup técnico de sincronização entre 2 PCs) · `25 - Multi Agentes VPS/CLAUDE.md` (precedente do modelo de streams paralelas com fronteira por domínio de arquivo).
