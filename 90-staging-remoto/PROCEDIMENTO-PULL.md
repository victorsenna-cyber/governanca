# PROCEDIMENTO DE PULL — trazer o remoto sem quebrar o local

> **Aberto:** 14/08/2026 · **Motivo:** integrar a iteração de Onboarding Orquestrado feita pelo Claude Code no GitHub
> **Estado:** 🔴 **bloqueado no acesso** — **Victor roda `puxar-do-github.ps1` (§3-bis); a IA analisa e integra a partir do staging.**
> **Regra nº 1 (Victor, 14/08/2026): nada que já foi construído neste repo é deletado. A integração é aditiva.** Contrato completo na §4.

## Por que a IA não consegue puxar sozinha

Três caminhos testados em 14/08/2026, os três fechados:

| Caminho | Resultado |
|---|---|
| `git clone` / `git fetch` | ❌ `could not read Username` — **repo privado**, e o ambiente da IA não tem credencial do GitHub |
| `web_fetch` na API do GitHub | ❌ repo privado, sem resposta |
| Claude in Chrome | ❌ nenhum navegador conectado (`list_connected_browsers` → vazio) |

**A credencial do GitHub está na máquina do Victor, não no ambiente onde a IA roda comandos.** Não há como contornar isso do lado da IA — e token colado em chat ou arquivo não é opção.

---

## 0. O diagnóstico que precisa ser lido antes de rodar qualquer comando

| Fato | Valor | Implicação |
|---|---|---|
| Último `fetch` do remoto | **27/07/2026** | o local não vê o remoto há 18 dias |
| Último commit local | **27/07/2026** (`4fdb046`) | idem |
| Arquivos **não commitados** no local | **133** (36 modificados · 95 novos · 2 apagados) | **a rede de proteção do git não existe hoje** |

**A consequência que decide o procedimento:** todo o trabalho de 27/07 a 14/08 está **fora do git** — método de ancoragem de proposta, destilação de calls, check diário, filas, registros da casa e do distrato, Prana de agosto, Jéssica, Guilherme, Danilo, Carolina. O remoto **não conhece nada disso**.

Isso significa que **o Claude Code iterou uma versão do repo congelada em 27/07.** A integração não é "puxar o que falta": é **reconciliar duas linhas que divergiram por 18 dias**.

> `CLAUDE.md` §7 já avisava: *"este repositório não tem histórico de git ativo: enquanto isso for verdade, `_legado/` é a única rede contra sobrescrita."* Hoje isso está literalmente verdadeiro, e é o maior risco desta operação.

**⚠️ NÃO rodar `git pull` nem `git merge` antes do passo 1.** Um merge com 133 arquivos sujos no working tree pode sobrescrever trabalho que não está em lugar nenhum.

---

## 1. PRIMEIRO — proteger o local (independe da integração)

Rodar no terminal do Windows, dentro de `01 - Governança`:

```powershell
git add -A
git commit -m "Estado local 27/07 a 14/08: ancoragem de proposta, destilacao de calls, check diario, casa nova, distrato, Prana/Jessica/Guilherme/Danilo"
```

**Isto é o item nº 1 mesmo que a integração seja adiada.** Enquanto os 133 arquivos estiverem fora do git, qualquer operação de merge é apostada.

Conferir que ficou limpo:

```powershell
git status --porcelain    # deve não retornar nada
```

---

## 2. Trazer o remoto SEM tocar no working tree

```powershell
git fetch origin
```

`fetch` **não altera nenhum arquivo** — só baixa os objetos e move `origin/main`. É seguro com working tree limpo ou sujo.

### O que o Claude Code fez (leitura, sem integrar)

```powershell
# commits que existem no remoto e não aqui
git log --oneline HEAD..origin/main

# alcance da mudança, arquivo por arquivo
git diff --stat HEAD origin/main

# só o que toca onboarding
git diff --stat HEAD origin/main -- "*onboarding*" "*ONBOARDING*"

# arquivos criados no remoto que não existem aqui
git diff --name-status HEAD origin/main | Select-String "^A"
```

---

## 3. Extrair para staging (o que foi pedido: puxar sem integrar)

Traz a árvore remota para `90-staging-remoto/remoto/` **sem tocar em nada do repo vivo**:

```powershell
mkdir -Force "90-staging-remoto\remoto"
git archive origin/main | tar -x -C "90-staging-remoto\remoto"
```

A partir daí a comparação é entre duas pastas, e **nenhum arquivo vivo foi alterado**. A IA lê `90-staging-remoto/remoto/` e entrega o diff analisado.

**Alternativa mais limpa, se preferir** — worktree isolado, fora da pasta de governança:

```powershell
git worktree add ..\_remoto-main origin/main
```

---

## 3-bis. Atalho: rodar o script pronto

Tudo dos passos 1 a 3 está em **`90-staging-remoto\puxar-do-github.ps1`**. Botão direito → *Executar com PowerShell*, ou:

```powershell
powershell -ExecutionPolicy Bypass -File "90-staging-remoto\puxar-do-github.ps1"
```

Ele commita o local, faz fetch, extrai para `remoto/` e escreve `RELATORIO.txt`. **Não faz merge, pull, rebase, checkout nem delete.** A única coisa que ele apaga é a própria pasta de staging, antes de reextrair.

Se `origin/main` vier igual ao HEAD local, o script avisa: significa que o Claude Code commitou em **outra branch** — ele lista as branches remotas para você escolher.

---

## 4. Só então: integrar — **contrato aditivo (regra nº 1 do Victor, 14/08/2026)**

> **NADA do que já foi construído neste repo é deletado, sobrescrito ou substituído.** A integração é **aditiva por definição**. Esta regra tem precedência sobre qualquer conveniência de organização.

| Situação | O que se faz | O que **não** se faz |
|---|---|---|
| Arquivo existe **só no remoto** | copia direto para o lugar certo do repo | — |
| Arquivo existe **nos dois** e o remoto tem conteúdo novo | o conteúdo novo entra como **seção adicional**, marcada com origem e data | ❌ sobrescrever o arquivo local |
| Os dois divergem **no mesmo fato** | as duas versões ficam, com a divergência **nomeada em texto** e a decisão marcada como pendente | ❌ escolher uma e apagar a outra |
| Remoto **removeu** algo que existe aqui | ignora a remoção | ❌ deletar |
| Remoto tem versão **mais pobre** do que já evoluiu aqui | preserva o local, registra o que o remoto trazia | ❌ regredir |

**Sobre `_legado/`:** o rito do `CLAUDE.md` §7.1 (conteúdo íntegro para `_legado/` + ponteiro + linha no README + roteamento) continua valendo para **substituição deliberada**. Nesta integração **não há substituição**, então `_legado/` só é acionado se o Victor pedir explicitamente, caso a caso.

**Ainda valem:** método novo em `100-métodos/` exige linha no roteador do `CLAUDE.md` §6 e no mapa §7 · toda divergência de fato é sinalizada, nunca silenciada · registro do que entrou e do que ficou de fora vai para o `STATUS.md`.

---

## 5. Limpeza

`90-staging-remoto/` é **temporário**. Depois da integração: apagar a pasta e registrar no `STATUS.md` o que entrou, o que ficou de fora e por quê.

---

*Nota de segurança: não colar Personal Access Token em chat, arquivo ou prompt. Os comandos acima rodam na máquina do Victor, onde a credencial do GitHub já está configurada.*
