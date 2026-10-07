# REGISTRO — promoção do trio de métodos de criativos

> **Tipo:** registro *(reclassificado 26/09/2026 por auditoria independente de leitura integral; antes: "registro de promoção")* · **Data:** 20/09/2026 · **Alçada:** Victor · **Executor da promoção:** Claude, papel de CEO
> **Pacote de origem:** `900-criação-implementação-victor/criativos/execução Codex/` (elaborado 18/09/2026 pelo Codex · GPT-6 Astra)
> **Fonte do ensinamento:** transcrições de Felipe Nonino, F1 e F2, em `900-criação-implementação-victor/criativos/`. `(2).txt` é cópia byte a byte de F2: **um caminho a mais para o mesmo conteúdo, nunca uma segunda evidência.**

---

## 1. O QUE ENTROU

| Método | Autoridade que ele passa a ter |
|---|---|
| `METODO-CONSTRUCAO-DE-CRIATIVOS-DR.md` | estrutura do anúncio DR: gancho de conteúdo → mecanismo do problema → mecanismo da solução → CTA com valor → prova → mesmo CTA reforçado |
| `METODO-EMPILHAMENTO-DE-HOOKS.md` | arquitetura da abertura composta: quais entradas, em que ordem, grupo × elemento, ponte para o corpo. **Vale para peça nova** |
| `METODO-LATERALIZACAO-DE-CRIATIVOS.md` | parentesco, hipótese e classificação da variação sobre base com resultado documentado |

**O que a promoção faz:** estabelece uso no sistema. **O que ela não faz:** validar desempenho comercial. As alegações de faturamento e escala da fonte continuam relatos do autor.

## 2. DECISÕES DE PROMOÇÃO — onde divergimos do plano do Codex

| # | Plano proposto | Decisão do CEO | Por quê |
|---:|---|---|---|
| 1 | "Resolver qual kernel governa cada agente antes de promover" | **Não se reabre.** A fronteira do §3 do `CLAUDE.md` (12/09/2026) já decide: `CLAUDE.md` governa quem decide, `AGENTS.md` quem executa | reabrir fronteira instituída para publicar método é inverter camada: estado não altera política |
| 2 | Roteador só no `CLAUDE.md`, alinhando o `AGENTS.md` "se pertinente" | **Três linhas curtas também no `AGENTS.md` §6** | quem executa criativo é o Codex. Método que o executor não acha, não existe |
| 3 | "Comparar as duas cópias da skill e decidir a fonte de distribuição" | **Não há decisão a tomar:** o §7 do kernel já manda editar em `900-…` e publicar em `10-skills/`. As duas cópias estavam **idênticas** (conferido por `cmp`) e receberam a mesma edição | criar uma decisão nova onde já existe regra é como se cria a segunda fonte que a regra existe para evitar |
| 4 | Status "instituído" | 🔴 **Vigente com verificação em caso real pendente** | `CLAUDE.md` §7.1, regra 4: gate novo não está publicado até rodar contra um caso real deste repositório. Três dos seis buracos da v3.1 da skill de copy tinham sido criados pela própria correção |
| 5 | Editar §4.1 a §4.4 e §7.3 do tráfego pago de forma ampla | **Edição cirúrgica**: campos da matriz, captura × gancho completo, 70/30 como fonte única, rota de fadiga e ponteiro de vencedor | nenhum limiar, janela ou verba foi tocado. Integração não é revisão de política de mídia |
| 6 | Registro sugerido em STATUS/DECISOES | **Este arquivo + atualização pontual no `STATUS.md`** | §11: se só existe na conversa com a IA, não existe |

## 3. CONFLITOS RESOLVIDOS (A–D do handoff)

| Conflito | Onde morava | Como ficou |
|---|---|---|
| **A · "teste real é variar o pivô" × lateralização** | skill, módulos 03 e 06, e gate §11.6 | **conceito altera o pivô; execução preserva o pivô e altera um componente com hipótese.** O gate deixou de exigir ângulo distinto de forma incondicional: exige **tipo de rodada declarado** |
| **B · "corpo curto" × gancho de conteúdo** | skill, módulo 03, anúncios de tráfego frio | corpo curto passa a ser régua **do formato curto**; anúncio com gancho de conteúdo pode desenvolver entrada e mecanismo quando isso serve à ação |
| **C · "primeiros três segundos" × gancho completo** | `METODO-TRAFEGO-PAGO.md` §4.1 e hooks da skill | **captura inicial × gancho completo.** Três segundos medem a captura, não fixam a duração. Gancho longo não autoriza introdução vazia |
| **D · skill portátil × método da Governança** | módulos 03 e 06 | as distinções entraram **genéricas**, sem caminho deste repo. O roteamento ficou no kernel |

## 3-bis. STATUS DE VIGÊNCIA — vale para o pacote inteiro, não só para os métodos

**Correção registrada em 20/09/2026 (Victor):** o ponto 4 da §2 falava só dos três métodos, e as edições dos módulos 03 e 06 da skill de copy tinham entrado como definitivas. **Não entram. A condição é a mesma para tudo o que esta promoção tocou.**

| | Em vigor para executar hoje | Vigente de vez |
|---|---|---|
| Os três métodos em `100-métodos/` | ✅ | ⏳ depois da verificação em caso real |
| Módulos 03 e 06 da skill (cópia publicada em `10-skills/`) | ✅ | ⏳ mesma verificação |
| `.zip` instalável da skill | 🔴 congelado de propósito | é o **marco** da passagem a definitivo |

**Por que assim, e não "vigente de vez" agora:** a estrutura precisa estar em vigor para a gente conseguir executar com ela — é rodando que se descobre o furo. O que não pode é a regra virar definitiva antes do primeiro uso real, e o `.zip` sair com um gate que ninguém testou. **Executar não exige congelar.**

Detalhe e o que a verificação pode derrubar: `900-criação-implementação-victor/VIGENCIA-PROVISORIA-SKILL-COPY-2026-09-20.md`.

---

## 4. ARQUIVOS ALTERADOS

`CLAUDE.md` (§6 quatro linhas novas · §6.1 item de anúncio DR · §7 mapa) · `AGENTS.md` (§6, três linhas) · `STATUS.md` (atualização pontual) · `100-métodos/METODO-TRAFEGO-PAGO.md` (§4.1, §4.2, §4.3, §4.4, §7.3) · `100-métodos/METODO-DIRECT-RESPONSE.md` (§6, mapa) · `100-métodos/METODO-FUNIL-DE-VSL.md` (§8.2) · `10-skills/gestao-trafego.skill.md` (regra 4) · `10-skills/copywriter-senior-continuum/referencias/03` e `06` + as cópias idênticas em `900-criação-implementação-victor/copywriter-senior-continuum/referencias/`.

As três cópias em `execução Codex/` receberam marca de promoção no topo e continuam como oficina.

## 5. PENDÊNCIAS ABERTAS

1. 🔴 **Verificação em caso real** — rodar o circuito inteiro (construção → empilhamento → gate) contra o funil DR da conta **Débora Delgado**, antes do primeiro real de mídia. Enquanto não rodar, os três ficam "vigentes com verificação pendente".
2. **`.zip` instalável da skill de copy: congelado de propósito** até a verificação passar (§3-bis). Regerar é o ato que marca a vigência definitiva dos módulos 03 e 06, e acontece na mesma tarefa em que o status dos três métodos mudar.
3. **Matriz de criativos das contas ativas** ainda não tem os campos novos (`ID da base`, `tipo de teste`, `componente`, `hipótese`). Aplicar na próxima rodada de cada conta, sem renomear campanha ou UTM já em veiculação.

## 6. VALIDAÇÃO DE ROTEAMENTO (rodada na promoção)

| Pedido | Rota que o repositório devolve hoje |
|---|---|
| "cria um anúncio para o quiz" | construção DR + skill + voz/léxico + matriz §4 |
| "faz um Reels educativo" | módulo 06 e fontes do cliente. O trio **não** entra |
| "faz variações desse anúncio que vende" | lateralização, com evidência da base. Mesmo pivô permitido, hipótese obrigatória |
| "o hook rate está alto e não vende" | diagnóstico de mídia (§7.4), não empilhamento |
| "conta nova, usa 70% de vencedores" | declara ausência de base e roda exploração |
| "cria uma abertura empilhada para uma peça nova" | empilhamento, sem exigir vencedor |
| "esse concorrente tem anúncio bonito, vamos lateralizar" | benchmarking. Referência de terceiro não é vencedor da nossa conta |

---
*Registrado em 20/09/2026. Promoção estabelece uso no sistema; desempenho comercial permanece não validado por nós.*
