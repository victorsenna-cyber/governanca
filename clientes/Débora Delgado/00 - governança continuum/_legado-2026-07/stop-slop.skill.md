# SKILL — Stop-Slop (Humanização de Copy)

> Remove os sinais de que um texto foi escrito por IA ("AI tells") e devolve ritmo e voz humana.
> Aplica-se a TODA copy que sai da Continuum: prospecção, vendas, conteúdo, propostas, marketing, e-mail.
> Calibrada à nossa voz e adaptada por canal. Base: `stop-slop` (hardikpandya) + `humanizer` (blader/Wikipedia "Signs of AI writing").

## Função no sistema
Garantir que nenhuma copy soe robótica, genérica ou "polida demais". Texto com cara de IA reduz resposta na prospecção, quebra confiança na venda e enfraquece a marca. Esta skill é um **gate de compliance de output** para qualquer texto voltado ao cliente.

## Quando carregar
Sempre que o pedido for **escrever ou revisar copy** voltada a humano: scripts de WhatsApp, mensagens de venda, propostas, posts, e-mails, narrativas. Cruza com `head-conteudo` e a frente comercial.

## Princípio central
> O cliente sente o robô antes de ler o argumento. Humanizar não é enfeitar — é **tirar o excesso** e devolver ritmo de gente.

Não é aplicar uma blocklist cega. É julgamento: cortar o que é tell, **preservar** o que é humano.

---

## O que cortar (AI tells)

**Frases-tell:**
- Aberturas de pigarro: "vamos lá", "antes de mais nada", "é importante notar que", "olha, a verdade é que".
- Bajulação/servilismo: "Ótima pergunta!", "Com certeza!", "Você está certíssimo".
- Fechamentos genéricos otimistas: "o futuro é promissor", "rumo à excelência", "tempos empolgantes".
- Meta-comentário: "espero que ajude", "quer que eu detalhe?", "sem mais delongas".

**Padrões estruturais:**
- **Regra de três forçada:** "inovação, inspiração e resultados" — quando não há motivo real para serem três.
- **Contraste binário batido:** "não é só X, é Y" / "não se trata de X, e sim de Y".
- **Falsos ranges:** "de X a Y" onde X e Y não estão numa escala real.
- **Variação elegante:** trocar sinônimo a cada frase só para não repetir (a empresa → o negócio → a operação → a marca).
- **Aforismo vazio:** "X é a linguagem de Y", "X é a moeda de Z".
- **Hedging excessivo:** "poderia possivelmente talvez" → diga a coisa.

**Tells de estilo:**
- **Travessão (—): cortar.** É o tell nº1. Trocar por ponto, vírgula, dois-pontos ou parênteses. (Vale também para ` -- `.)
- Negrito mecânico em cada termo.
- Title Case em títulos (usar caixa normal).
- Aspas curvas (usar retas).

**Ritmo (o tell mais sutil):**
- IA escreve tudo no mesmo comprimento. Humano varia: frase curta. Depois uma mais longa, que demora um pouco a chegar onde quer chegar. Misturar.

---

## O que preservar (sinais humanos — NÃO cortar)

- Detalhe específico e difícil de inventar (um nome, um valor exato, uma referência local).
- Sentimento ambíguo, dúvida honesta ("acho que funciona, mas me incomoda algo aqui").
- Opinião que a gente consegue defender.
- Aside/parêntese genuíno, autocorreção.
- Uma frase curta isolada para dar ênfase (só vira tell quando vêm várias seguidas, forçando drama).

> Regra de ouro do falso-positivo: **um tell isolado não é nada.** É o cluster que denuncia (travessão + regra de três + "vibrante" + conclusão genérica = confissão).

---

## Calibração por canal (IMPORTANTE)

A régua não é cega — adapta-se ao canal:

| Canal | Emoji | Tom | Frase |
|---|---|---|---|
| **WhatsApp (prospecção/venda)** | 1–2 por mensagem, OK (humaniza) | coloquial, direto, áudio quando der | muito curta, 1 ideia |
| **Proposta / e-mail comercial** | evitar | profissional-humano | média, varia |
| **Post / conteúdo** | conforme linha editorial | autoral, com opinião | varia muito |
| **Documento de governança** | não | neutro e claro | direto |

> No WhatsApp, emoji e "oi, tudo bem?" **não são slop** — são código humano do canal. Não aplicar a régua de artigo Wikipedia ao WhatsApp.

---

## Voz Continuum (default quando não há amostra)
Direta, sem rodeio, sem bajulação. Confiante mas não arrogante. Linguagem em "nós". Reconhece o que não sabe. Frase que respira. Sem jargão de consultoria vazio. Quando houver amostra de texto nosso aprovado, **espelhar a amostra** (comprimento de frase, vocabulário, pontuação) em vez do default.

## KPIs / Score (1–10 por dimensão)
| Dimensão | Pergunta |
|---|---|
| Diretividade | É afirmação ou anúncio do que vai dizer? |
| Ritmo | Varia ou é metrônomo? |
| Confiança | Respeita a inteligência de quem lê? |
| Autenticidade | Soa humano? |
| Densidade | Tem algo cortável? |

**Abaixo de 35/50 → revisar.** Para WhatsApp, priorizar Autenticidade e Diretividade.

## Fluxo de trabalho (loop)
1. Rascunho.
2. Auditar: *"o que ainda soa como IA aqui?"* — listar os tells restantes.
3. Reescrever final. Antes de entregar: varrer por travessão (—) e por regra de três. Qualquer hit = não terminou.

## Regras de decisão
humanizar sem descaracterizar a voz · adaptar a régua ao canal · preservar detalhe e opinião · cortar excesso, não substância · não transformar todo texto curto em "drama staccato".

## Handoffs
← `head-conteudo` (toda copy de marca) · ← frente comercial (`30-comercial/prospeccao-sites/`) · → `00-core/COMPLIANCE-DE-OUTPUT.md` (vira critério de saída de copy) · base metodológica em `70-metodologias-chave/` (PNL/linguagem) + repositórios stop-slop/humanizer.

## Entregáveis típicos
copy revisada + lista de tells removidos + score · checklist de humanização por canal · calibração de voz a partir de amostra.

---
*Base externa: `github.com/hardikpandya/stop-slop`, `github.com/blader/humanizer` (Wikipedia "Signs of AI writing"). Base interna: `70-metodologias-chave/[Coaching com PNL]`, `05 - Marketing/linha editorial`.*
