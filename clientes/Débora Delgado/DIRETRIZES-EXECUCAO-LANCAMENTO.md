# DIRETRIZES DE EXECUÇÃO — Lançamento Seu Eixo (travado pelo Fable 5, 08/07)

> Fila de execução com dono-ferramenta por tarefa (`../../00-core/PROTOCOLO-MULTI-MODELO.md`, na Governança-pai). Executores seguem o contrato de cada linha; **dúvida = parar e registrar em `DECISOES.md` (projeto) ou `LOG-DECISOES.md` (tráfego)**, nunca improvisar. Janela: campanha no ar até 15/07 · L1 vira 28/07 · turmas 14-15/08 e 19-21/08.

## Fila (ordem de dependência)

| # | Tarefa | Ferramenta | Contrato | Gate de saída |
|---|---|---|---|---|
| 1 | Tratar foto (insta, única disponível — assume como principal) + banner D6 | **Claude Code** (script Python, determinístico) ou ChatGPT Images se o script falhar em qualidade | `05 - design/fotos/PLANO-FOTO-DEBORA.md` | preview aprovado por Victor + Débora → `04 - web design/build/assets/` |
| 2 | Build da página (index.html único) | **Claude Code** + ui-ux-pro-max (atualizada) | `04 - web design/PROMPT-CLAUDE-CODE-SEU-EIXO.md` → `PLANO-PAGINA-SEU-EIXO.md` | gate Parte 5 do método + mobile real |
| 3 | Auditoria cruzada da página | **Codex** | mesmo plano + `METODO-PAGINA-DE-VENDAS.md` Parte 5 + apêndice anti-padrões | lista falha→correção; divergência entre Code e Codex → Fable |
| 4 | Pixel/CAPI + eventos + domínio verificado | **Claude Code** (MCP Meta) — **aprovação Victor antes de criar** | plano da página §0 + `STATUS-CONTA-ANUNCIOS.md` | eventos verdes no Events Manager, EMQ ≥ 7 |
| 5 | Deploy + checkout PagTrust + grupos WhatsApp por turma + teste ponta a ponta | **Claude Code** + Victor manual | `landing-v4/VERCEL-WIX-DEPLOY.md` (referência) | compra-teste completa |
| 6 | Criativos estáticos (7 peças) | **ChatGPT Images** e/ou Claude Design (testar os dois, escolher por qualidade) | copy EXATA de `03 - tráfego pago/criativos/COPY-CRIATIVOS-ESTATICOS.md` + `05 - design/DIRECAO-DESIGN-CODEX.md` (checklist §16) | aprovação Débora (imagem dela/marca) + Victor |
| 7 | Vídeos V1-V4 | **Débora grava** | `criativos/ROTEIROS-VIDEO-DEBORA.md` (hook e CTA literais) | Victor confere hook nos 3s |
| 8 | Subir campanha | **Victor** no gerenciador (Code/MCP só leitura no D1) | `METODO-TRAFEGO-PAGO.md` §5.3 (1 campanha · 1 conjunto · broad · InitiateCheckout) + `CALENDARIO-LOTES.md` | checklist de subida do `estrutura-campanhas.md` (template) |
| 9 | Rotina de gestão (diária 10min · ter/sex decisões · semanal funil) | **Claude Code/Codex** leem dados (MCP) e propõem; **Victor** decide kill/scale | método §7.3 (regras) — prazos DOBRADOS se verba < R$ 100/dia | toda decisão em `LOG-DECISOES.md` |
| 10 | Iteração da página pós-dados | **Code** executa 1 teste/vez | método páginas Parte 6 (ordem: D1 → oferta → prova → CTAs) | hipótese escrita antes de mudar |

## O que NENHUM executor decide sozinho (só Victor, ou Fable até dia 12)
Preço/lote/datas · promessa e H1 · escopo do workshop (**Desenho Humano: REMOVIDO da comunicação, decisão 08/07 — nenhuma peça cita**; EFT fora até Débora confirmar) · criação/alteração em conta de anúncios e verba · publicar qualquer coisa · mudar método ou skill da governança · TRES vs "Raiz em Ação" (Débora).

## Pendências humanas abertas (bloqueiam a fila onde indicado)
Verba mensal da Débora por escrito (bloqueia #8) · aprovação para criar pixel (bloqueia #4) · martelo TRES/"Raiz em Ação" (bloqueia texto final da D4 em #2 — build usa TRES e marca comentário) · relatos de prova p/ D6 (não bloqueia: v1 sai com autoridade de percurso) · confirmação grupo × individual no pitch (bloqueia material do Dia 3 do workshop, não a página).

## Economia de contexto (executores, leiam isto)
Cada pasta tem CLAUDE.md com a tabela "tarefa → arquivos mínimos": obedecer. **Não abrir:** `01 - contexto/Eneagrama/`, transcrições íntegras (usar `SINTESE-*.md`), `06 - Claude/`, `_arquivo/`, cadernos .pptx (salvo se forem o objeto). Fontes canônicas em 3 arquivos: `DECISOES.md` > `OFERTA-CANONICA.md` > plano da tarefa.
