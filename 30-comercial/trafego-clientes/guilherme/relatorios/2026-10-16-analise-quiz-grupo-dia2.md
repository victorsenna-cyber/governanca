# Análise · 16/10/2026, ~13h · dia 2 da campanha do quiz do grupo

> Fonte: conector Meta (CA 01 `605257748612701`), anúncios ativos de 14/10 a 16/10, e Pixel `1259363302489132` de 15/10 0h a 16/10 13h. Regra do plano: não mexer antes de 18/10 0h (72h).

## Campanhas

| Campanha | Gasto | Resultado | Custo | Leitura |
|---|---|---|---|---|
| `GA|HG|TOFU|LEADS|QUIZ-GRUPO-CONSELHO|20261015` (R$ 20/dia) | R$ 41,23 | 4 cadastros (Lead) | **R$ 10,31** | acima do alvo de R$ 8, dentro do teto de R$ 24 |
| `GA|HG|TOFU|TRAFEGO|PERFIL-IG|REEL-DZu9VpARUsE|20261014` (R$ 12/dia) | R$ 22,98 | 560 visitas ao perfil | **R$ 0,04** | CTR 12,2%, frequência 1,02. Sem ajuste |

## Anúncios do quiz (a Meta concentrou a verba em dois)

| Anúncio | Gasto | Impr. | CTR | Cliques | Cadastros | Custo/cad. |
|---|---|---|---|---|---|---|
| MOLDURA · terapeuta | 22,45 | 746 | 2,14% | 12 | 2 | 11,23 |
| RETRATO · gratuita | 14,17 | 404 | **6,19%** | 21 | 2 | **7,09** |
| LISO · texto | 1,95 | 74 | 2,70% | 2 | 0 | — |
| RICO · grade | 1,58 | 64 | 4,69% | 3 | 0 | — |
| SPOILER · horóscopo | 0,97 | 41 | 0% | 0 | 0 | — |
| RODA · signos | 0,09 | 4 | — | 0 | 0 | — |
| WHATSAPP · convite | 0,02 | 1 | — | 0 | 0 | — |

Nenhuma regra de pausa disparou: nenhum anúncio com R$ 24 gastos sem cadastro, nenhum com 2 mil impressões.

## Funil no Pixel (todas as origens, inclusive testes)

| Evento | Contagem | Passagem |
|---|---|---|
| PageView | 86 | — |
| QuizStart (1ª resposta) | 22 | **26%** da capa |
| QuizResult | 14 | 64% de quem começou |
| Lead (cadastro) | 12 | 86% de quem viu o resultado |
| JoinGroup | 8 | 67% de quem se cadastrou |

Todos os eventos vêm em número par, hora a hora. A página tem um único `fbq('init')` (conferido ao vivo), então é provável que a contagem da API de estatísticas venha dobrada. As proporções não mudam com isso.

## Diagnóstico

**O gargalo é a capa do quiz: 74% saem sem responder a primeira pergunta.** Do começo ao cadastro o quiz converte bem (55%). Os anúncios entregam clique barato (R$ 0,67 a R$ 1,87).

**Causa provável: a capa não confirma a promessa do anúncio.** O anúncio diz "Grupo gratuito durante outubro"; a capa dizia "Responda e descubra o seu nível de Permissão" e só falava em terapeutas e mentoras, embora a primeira pergunta ofereça Cartomante. O grupo só aparecia na última tela.

**Conta:** se a capa passar de 26% para 40% de início, mantidas as outras passagens, o custo por cadastro cai de ~R$ 10 para ~R$ 6,70, abaixo do alvo, sem mexer em anúncio nem no aprendizado.

## Ações

1. **Capa v5 (preparada, não publicada):** faixa "GRUPO CONSELHO DO CIGANO, GRATUITO EM OUTUBRO: RESPONDA E RECEBA O CONVITE"; subtítulo com "terapeutas, mentoras e cartomantes"; `quiz_versao` = `1.1-capa-grupo`. Texto vindo do convite do Gui (mesma exceção declarada dos 7 anúncios). Pacote `permissao-mentoras-v5.zip`, que já inclui o beacon da v4.
2. **Campanhas:** nada muda antes de 18/10 0h. A mudança na página não reinicia o aprendizado.
3. **18/10:** reler. Comparar a passagem capa→início antes e depois da v5 (`quiz_versao` na planilha). Aplicar as regras de pausa do plano §4.
