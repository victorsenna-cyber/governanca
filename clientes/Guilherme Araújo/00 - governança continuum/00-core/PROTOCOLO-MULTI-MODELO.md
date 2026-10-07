# PROTOCOLO MULTI-MODELO — quem executa o quê, com que contexto

> **Tipo:** política (camada 2) · **Criado:** 2026-07-08 (Fable 5) · Vale para TODOS os projetos.
> Princípio: **inteligência cara decide e trava; inteligência barata executa contrato.** Um modelo executor nunca decide o que um método já decidiu; se o contrato não cobre, ele PARA e registra a dúvida no log do projeto, nunca improvisa.

## 1. Roteamento por ferramenta

| Ferramenta | Usar para | Nunca usar para |
|---|---|---|
| **Fable 5 (Cowork)** — escasso, até dia 12 | decisões novas · métodos e skills · auditoria de peça-mestra · desbloqueio quando executor travar · calibração semanal | builds, volume de copy, edição mecânica, ler pastas grandes |
| **Claude Code (Sonnet/plugins)** | build da página e código · iteração visual com preview · scripts (tratamento de foto, automações) | decidir oferta/preço/copy de venda (vem do plano) |
| **Codex** | refinos de código em paralelo ao Code · direções técnicas de design (já provou: DIRECAO-DESIGN-CODEX) · revisão cruzada do que o Code produziu | peças de copy sem as skills carregadas |
| **ChatGPT Business** | geração/edição de imagem (criativos estáticos a partir da copy pronta + direção de design) · variações de volume sobre matriz travada | qualquer coisa canônica (métodos, decisões, oferta) |
| **Code Assist (grátis)** | edição mecânica: propagar data/preço, renomear, formatar, mover arquivo, checklist | qualquer escolha com 2 opções válidas |

**Revisão cruzada barata:** o que um executor cria, outro executor audita contra o contrato (ex.: Code constrói página → Codex roda o gate Parte 5 do método). Fable só entra se os dois divergirem.

## 2. Anatomia de contrato (o que todo executor recebe)

Toda tarefa delegada aponta, nesta ordem: (1) **arquivo-contrato** (plano/método específico, ex.: `PLANO-PAGINA-SEU-EIXO.md`), (2) **fontes canônicas** (DECISOES/OFERTA do projeto), (3) **skills a carregar** (máx. 3), (4) **saída esperada + gate**, (5) **o que é proibido decidir**. Prompt curto que aponta > prompt longo que explica. Se o executor precisa de mais de 5 arquivos, o contrato está mal feito: voltar ao Fable.

## 3. Regra de diretório (economia de contexto)

Padrão obrigatório em toda pasta de projeto:

1. **`CLAUDE.md` da pasta = mapa de carga**: tabela "tipo de tarefa → arquivos mínimos". Executor lê o CLAUDE.md e SÓ os arquivos da linha.
2. **`_arquivo/` em toda pasta**: o que é histórico sai da raiz. Raiz limpa = contexto barato. Nada em `_arquivo/` é fonte.
3. **Camada de decisão separada de camada de asset**: markdown leve (decisões, planos, logs) em pastas que os modelos leem; binários pesados (vídeo, pptx, node_modules, transcrição íntegra) em pastas marcadas **"não ler — abrir só se for o objeto da tarefa"**.
4. **Transcrições e fontes brutas nunca se releem**: minerar 1 vez → `SINTESE-*.md` assinada → executores leem só a síntese.
5. **Precedência declarada no topo de cada CLAUDE.md** (o que vence em conflito), para o executor não "resolver" divergência sozinho.

## 4. Ciclo de operação semanal

Fable (ou o modelo mais forte disponível): 30 min/semana — lê `STATUS.md` + logs de decisões dos projetos ativos → atualiza contratos → fila de tarefas com ferramenta dona. Executores: consomem a fila. Tudo que executor aprende (CPA real, criativo vencedor, bug) entra no log do projeto, nunca solto em chat.

---
*Regra-mãe: processo antes de ferramenta; contrato antes de execução; log antes de memória. Se este protocolo conflitar com um método-raiz, o método vence.*
