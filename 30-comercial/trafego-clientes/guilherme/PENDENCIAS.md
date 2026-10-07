# PENDÊNCIAS E RESTRIÇÕES DE DESENHO — Guilherme Araújo

> **Tipo:** estado (camada 3) · Aberto em 29/07/2026
> O que trava, o que espera decisão e — o mais importante — **a restrição de comportamento que muda o desenho do plano.**

---

## 1. Restrição de desenho: baixo engajamento do cliente com estratégia

**Fato registrado por Victor em 29/07/2026:** o Guilherme apresenta **baixo engajamento com estratégias**. Contexto possivelmente relacionado: ele trabalha (ou trabalhou) com o Jon e opera o Lifeness — atenção dividida entre frentes.

Isto não é crítica ao cliente. É **parâmetro de projeto**, e muda o plano de forma concreta:

| O que o plano fazia | O que passa a fazer |
|---|---|
| Fila de reposição com 4 Reels novos que **ele grava** | **Nós selecionamos** entre os Reels que ele já publica — ele posta ~1/dia ("Pense nisso!") de forma consistente. Produção orgânica dele é o estoque. Ask = zero. |
| Planilha de social selling **preenchida por ele** | Dashboard automático via webhook PagTrust (§3) + leitura de comentários/DM que nós puxamos da plataforma. Ask = zero. |
| Aprovação de copy de criativo | Não há copy nova: usamos publicação existente, com a legenda que ele mesmo escreveu. Ask = zero. |
| Relatório longo mensal | **Resumo semanal de 5 linhas** (gasto · comentários · custo · calls · próxima ação). Método §8 permite. |

**Regra que passa a valer para este cliente:** *qualquer parte do plano que dependa de ação recorrente do Guilherme é considerada ponto de falha até prova em contrário.* O que precisar dele é pedido **uma vez**, em bloco, e nunca em cadência.

**O que ainda depende dele, irredutivelmente:** (a) ofertas e pricing — solicitado, sem resposta; (b) responder as DMs — e isso ele faz rápido, confirmado; (c) meio de pagamento ativo na conta.

## 2. Bloqueio técnico da Meta: `instagram_media_id` não permitido

**Erro literal (29/07/2026, ao criar o anúncio):**

```
Instagram Media ID Not Allowed: You don't have permission
for using instagram_media_id yet.  (code 100 / subcode 2875108)
```

**O que isso significa:** o IG está liberado para leitura (conseguimos listar as mídias e resolver o Reel), mas **a conta não tem permissão para transformar publicação existente do Instagram em anúncio via API**. É gate da Meta sobre a conta/app, não erro de configuração nossa e não algo que eu resolva por chamada.

**Consequência:** campanha e os 2 conjuntos estão criados e corretos. **Falta somente o anúncio**, e ele precisa ser criado à mão.

**Passo manual (≈1 minuto, Victor):**

1. Ads Manager → conta `605257748612701` → campanha `GA|TOFU|VIVER-DE-TERAPIA|ENGAJAMENTO|META|20260729`
2. Conjunto `AS|VIVER-TERAPIA|FOCO-SC|25-65|20260729` → **Criar anúncio**
3. Em Configuração do anúncio, escolher **"Usar publicação existente"** → **Selecionar publicação** → aba Instagram → o Reel *"Comente aqui a sua escolha"* (28/07)
4. **Sem botão de call to action.** Melhorias padrão (Advantage+ creative): **desativar**
5. **DESMARCAR "Anúncios com vários anunciantes"** — vem marcado por padrão. A própria Meta avisa que *"o criativo do seu anúncio pode ser redimensionado ou cortado"*. Neste criativo o quadro é o produto: as 4 cartas numeradas precisam aparecer inteiras, senão a mecânica de comentar o número se perde. Cortar o frame é cortar a conversão.
6. **NÃO aceitar a sugestão de orçamento da Meta.** Ela oferece *"+66% de conversas iniciadas por R$ 43,00 a mais"* com botão "Aplicar agora". Ignorar: rompe o cap de R$ 600 do ciclo, viola a regra de nunca variar verba mais de ±20% (§7.2) e a promessa de +66% é estimativa da plataforma, não dado nosso. Escala se decide com o log, não com botão.
7. Nomear `AD|REEL-VIVER-TERAPIA-CARTAS|PUB-EXISTENTE|20260729` · deixar **PAUSADO**
8. Repetir o mesmo anúncio no conjunto `AS|VIVER-TERAPIA|BRASIL-AMPLO|25-65|20260729` (usar "Duplicar" e trocar o conjunto de destino)

**Confirmado em 29/07/2026:** Victor assumiu o passo manual e selecionou o post correto — `17986328897848935`, *"Comente aqui a sua escolha"*, 28/07/2026. O vídeo entrou em processamento na Meta (normal; não bloqueia montar o resto do anúncio).

**Alternativa, se o passo manual incomodar:** subir o vídeo como criativo novo por API (isso funciona — foi assim em junho). Custo da alternativa: os comentários vão para o anúncio e **não** acumulam no post orgânico, o que anula a prova social pública que é o ponto da campanha. **Não recomendado.**

**Para resolver de vez:** verificar em Configurações do Business Manager → Contas do Instagram se `@professorguilhermearaujo` está com permissão de anúncio concedida ao parceiro/app, e se o vínculo IG↔conta de anúncios está completo. Enquanto não estiver, todo anúncio de publicação existente será manual.

## 3. Dashboard PagTrust via webhook — pendência priorizada

**Ideia do Victor, 29/07/2026:** o Guilherme vende pela **PagTrust** e Victor **tem acesso**. Construir dashboard puxando dados por webhook para otimização e acompanhamento em tempo real.

**Por que isso importa mais do que parece:** hoje a campanha não tem fonte de verdade do funil pós-comentário, e a alternativa era pedir ao Guilherme para preencher planilha — que, pela restrição do §1, não vai acontecer. **O dashboard não é conforto: é a única forma realista de saber se a mídia gera dinheiro neste cliente.**

**Escopo proposto (a construir, não construído):**

| Camada | Conteúdo |
|---|---|
| Entrada | webhook PagTrust → venda, valor, produto, e-mail/telefone, data, UTM se houver |
| Cruzamento | venda × origem (comentário/DM/orgânico) × conjunto (SC ou Brasil) |
| Mídia | gasto, comentários, custo por comentário por conjunto (API Meta) |
| Saída | custo por venda real, receita do ciclo, ROAS real, comparativo SC vs. Brasil em **dinheiro**, não em comentário |

**Gate:** só entra depois do ciclo 1 rodando. Método §10 — *processo antes de ferramenta*: automação só após ≥ 1 ciclo manual completo. Registrar aqui para não virar improviso no meio da campanha.

**Precedente reutilizável:** o template de captação Débora (popup + Apps Script + dashboard) e o checkout PagTrust da Prana já resolveram partes disto. Não começar do zero.

## 4. Quadro de gates

| ID | Gate | Dono | Estado |
|---|---|---|---|
| ~~GATE-1~~ | Permissão do IG | Victor | ✅ resolvido 29/07 |
| ~~GATE-2~~ | Por que Floripa+RM | Guilherme | ✅ respondido 29/07 — astrocartografia; virou hipótese testável (`METAS.md` §5) |
| **GATE-3** | Fonte de verdade do funil | Victor | **substituído pelo dashboard PagTrust (§3)** — gate reaberto com solução melhor |
| ~~GATE-4~~ | Ofertas e pricing | Guilherme | ✅ **RECEBIDO 29/07/2026** — esteira completa em `METAS.md` §4.1. Camada de receita fechada |
| **GATE-9** | **Quantas Jornadas individuais simultâneas o Guilherme consegue atender?** | Guilherme | **escala de verba.** A Jornada é individual e trimestral: cada venda ocupa uma vaga por 3 meses. `CLAUDE.md` §8 — não vender sem capacidade de entrega. Se o teto for ~5, o cenário excelente satura a agenda dele no ciclo 1 e a campanha precisa migrar de objetivo (Grupo de Estudos, escalável, ou Desafio 28 dias em grupo) |
| **GATE-10** | Publicar os anúncios rascunho no Ads Manager | Victor | **a veiculação.** Campanha e conjuntos já `ACTIVE` com cap de R$ 600; sem anúncio publicado nada roda e nada gasta |
| **GATE-5** | Meta do ciclo assinada | Guilherme | `METAS.md` pronto para assinar (camada de mídia completa) |
| **GATE-6** | Pagamento ativo + cap de R$ 600 | Victor/Guilherme | **pendente — bloqueia ativação** |
| **GATE-8** | **Anúncio criado à mão** (§2) | Victor | **pendente — bloqueia ativação** |
| GATE-7 | Testar o Reel "comente MAPEAMENTO" | Guilherme | oportunidade, não bloqueio |

---
*Base: erro de API registrado em 29/07/2026 · decisões humanas de Victor em 29/07/2026 · `METODO-TRAFEGO-PAGO.md` §8 e §10.*
