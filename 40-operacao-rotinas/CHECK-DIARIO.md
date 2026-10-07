# CHECK DIÁRIO — protocolo da scheduled das 04h00

> **Tipo:** rotina (camada 3) · **Instituído:** 10/08/2026 · **Executor:** scheduled task `check-diario-continuum`
> **Função:** entregar, antes de o Victor acordar, **o que executar hoje para gerar receita** — e deixar **uma melhoria estrutural do repo já feita**.
> **Este arquivo é o manual da task.** O prompt da scheduled é um ponteiro para cá: editar o comportamento aqui, não lá.

---

## 1. Princípio

**O brief não descreve o estado. Ele nomeia o próximo passo com dono, hora e frase pronta.**

O diagnóstico vigente (`STATUS.md`, 10/08/2026) é que o gargalo dominante é **venda nova**, e que ele passou semanas *"sem dono e sem hora na agenda"*. Um brief que informa e não obriga reproduz o problema. Toda linha da saída responde: **o que eu faço, com quem, agora**.

**Régua de ordenação:** proximidade de caixa (`METODO-GERACAO-DE-RESULTADOS.md` §3-quater — contagem de passos até o pagamento). Conversa com base quente = 1 passo. Máquina de tráfego = 6 passos. **A fila do dia começa pelo de menos passos, sempre.**

---

## 2. Orçamento de tokens (regra dura)

O custo é o que torna esta rotina sustentável. **Estes limites são obrigatórios:**

| Regra | Limite |
|---|---|
| **`Read` em `STATUS.md`** | ❌ **PROIBIDO** — o arquivo tem ~19.500 tokens. Extrair por `bash` (§3.1) |
| Arquivos lidos por execução | **máximo 3**, e apenas os do §3 |
| Melhoria estrutural | **1 por dia · 1 arquivo tocado · edição pontual** |
| Tamanho da saída | **máximo 40 linhas** |
| Busca exploratória no repo | ❌ não fazer. Se algo não está nas fontes do §3, é lacuna e se **registra como lacuna** |

**Regra de parada:** se a melhoria do dia exigir ler um segundo arquivo grande, tomar decisão de política ou tocar número/preço/data pactuada — **não fazer**. Marcar o item como `[!] bloqueado: precisa de decisão humana` e passar ao próximo da fila.

---

## 3. Fontes (nesta ordem, nada além disto)

### 3.1 Estado — por `bash`, nunca por `Read`

```bash
cd "<repo>"
# snapshot executivo + metas + pipeline (§§1-3 do STATUS)
sed -n '10,55p' STATUS.md
# os 2 registros mais recentes
grep -n '^\*Registro:' STATUS.md | tail -2 | cut -d: -f1 | while read n; do sed -n "${n}p" STATUS.md | cut -c1-1200; done
```

### 3.2 Fila comercial — `40-operacao-rotinas/FILA-COMERCIAL.md`

Fonte de execução do dia. **Em conflito de fato com o `STATUS.md`, vale o `STATUS.md`** — a fila é derivada, não canônica.

### 3.3 Fila de melhorias — `40-operacao-rotinas/FILA-MELHORIAS-REPO.md`

Backlog pré-aprovado. **A melhoria do dia é o primeiro item `[ ]` da lista — não se delibera qual fazer.** É isso que mantém o custo baixo.

---

## 4. Saída — 6 blocos, nesta ordem

Escrever em `40-operacao-rotinas/rotinas/BRIEF-<AAAA-MM-DD>.md` **e** criar o evento no Google Calendar (§5).

```
1. O NÚMERO        caixa · obrigação mais próxima · dias até ela · MRR novo
2. AS 3 DE HOJE    3 ações comerciais, ordenadas por passos até o pagamento.
                   Cada uma: quem · qual canal · a frase de abertura pronta
3. ESPERANDO       o que está parado com terceiro há mais de 48h, com a data do último toque
4. BLOCO SAGRADO   a 1 tarefa 🔴 das 05h00 (uma só, a de maior alavanca)
5. MELHORIA        o que foi alterado no repo hoje, em 1 linha, com o arquivo
6. HOJE NÃO        o que fica de fora — e a razão (CLAUDE.md §4)
```

**Regras de escrita:**
- Ação sem **dono e frase de abertura** não entra no bloco 2. "Fazer follow-up da Bárbara" é ruído; *"Bárbara — WhatsApp — abrir com: ..."* é ação.
- **Follow-up parado há mais de 7 dias vira decisão, não lembrete:** cobrar com prazo ou aplicar qualificação negativa. Nunca um terceiro "só passando para lembrar".
- Se o dia tem obrigação financeira em ≤ 5 dias sem origem de recurso registrada, ela **abre o brief**, acima de tudo.
- Nada de elogio, resumo do que já foi feito, ou preâmbulo.
- **A última linha do arquivo é sempre o registro de entrega do Calendar** (`✅` ou `⚠️`), conforme §5.1. Brief sem essa linha está incompleto.

---

## 5. Notificação por Google Calendar

Criar **1 evento** no calendário principal, no dia corrente:

| Campo | Conteúdo |
|---|---|
| **Título** | `☀️ Brief — <ação nº1 do bloco 2, em até 6 palavras>` |
| **Horário** | 04h30–04h45 (abertura do dia, `GESTAO-DO-TEMPO.md` §1.1) |
| **Descrição** | os blocos 1, 2 e 5 em texto puro (o número, as 3 ações, a melhoria feita) |

**Se o conector do Google Calendar não estiver disponível:** não falhar a execução. Gravar o brief em arquivo normalmente e registrar no fim da saída: `⚠️ Calendar indisponível — brief só em arquivo`.

### 5.1 Registro obrigatório da entrega (instituído 22/08/2026)

**Nenhum brief sai sem declarar, por escrito, se o evento foi criado.** Sucesso e falha têm a mesma obrigação de linha — o silêncio é o que quebrou a rotina entre 15/08 e 21/08/2026: sete briefs seguidos sem evento no Calendar, sem uma única linha dizendo isso, e a falha só foi descoberta porque o Victor sentiu falta.

**Última linha de todo brief, sem exceção, uma das duas:**

```
✅ Calendar — evento criado em <AAAA-MM-DD> 04h30, calendário <id>
⚠️ Calendar NÃO entregue — <motivo literal do erro> · brief só em arquivo
```

**Regras:**

- **O motivo é o texto literal do erro**, não uma paráfrase. `Tool permission request failed: AbortError` e `conector desconectado` exigem correções diferentes, e paráfrase apaga a diferença.
- **A falha sobe para o chat, não só para o arquivo.** O passo 6 (resposta no chat, ≤10 linhas) abre com a linha `⚠️` quando houver falha — antes do número e das 3 ações. Brief que chega bonito e não chega na agenda é pior que brief que não chega: cria a impressão de rotina funcionando.
- **Falha em 2 execuções seguidas vira item de decisão**, não repetição: escrever no brief `🔴 Calendar falhou N dias seguidos — a notificação da rotina está morta, decidir canal` e seguir. A rotina não tenta consertar a permissão sozinha.
- **Causa conhecida (22/08/2026):** `create_event` é escrita e exige aprovação de permissão explícita; numa execução automática não há quem aprove, e o pedido morre por timeout. Leitura (`list_calendars`, `list_events`) é auto-aprovada — por isso o conector *parece* funcionar. **Correção: conceder "sempre permitir" ao `create_event` numa sessão interativa.** Enquanto isso não for feito, a linha `⚠️` é o comportamento esperado, não um bug novo.

---

## 6. Manutenção das filas

Ao final de cada execução, **sem deliberar**:

1. Marcar `[x]` no item de melhoria executado, com a data.
2. Se uma ação da `FILA-COMERCIAL.md` aparece concluída no `STATUS.md`, marcar `[x]`.
3. **Se a `FILA-MELHORIAS-REPO.md` tiver menos de 3 itens abertos**, escrever no brief: `⚠️ fila de melhorias acabando — repor no ritual de segunda`. **Não inventar itens novos** — repor é decisão humana.

---

## 7. O que esta rotina nunca faz

- Não altera preço, política, número pactuado, data acordada com cliente ou conteúdo de `00-core/`.
- Não envia mensagem a cliente, prospect ou terceiro.
- Não publica, não faz deploy, não mexe em conta de anúncio.
- Não cria item novo na fila de melhorias.
- Não reescreve seção inteira de arquivo — a melhoria do dia é **pontual por definição**.

---

*Base: `CLAUDE.md` §§4, 9, 11 · `GESTAO-DO-TEMPO.md` §§1.1, 3 · `RITUAIS.md` §2 · `METODO-GERACAO-DE-RESULTADOS.md` §3-quater.*
