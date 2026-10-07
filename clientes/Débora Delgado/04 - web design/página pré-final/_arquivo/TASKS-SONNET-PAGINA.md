# TASKS — Iteração cirúrgica do index DEPLOYADO (executor: Sonnet)

> **Arquivo-alvo (único):** `04 - web design/página pré-final/index deployado/index.html`
> **NÃO tocar** em `04 - web design/build/index.html` (fora de vigor — decisão Victor 09/07).
> **Protocolo:** abrir lendo `CLAUDE.md` (raiz) + as 3 últimas entradas do `DIARIO-DE-BORDO.md`. Fechar registrando entrada no diário. Fonte das mudanças: `AUDITORIA-FEEDBACK-DEBORA.md` §2b + §3 (mesma pasta).

## CONTRATO (endurecido — violar qualquer item = abortar e registrar no diário)

1. **Só as substituições listadas abaixo, com as strings exatas.** Nenhuma outra linha muda.
2. **PROIBIDO tocar:** bloco `<style>`, bloco `<script>`, constantes de lote (`LOTE1_FIM`/`LOTE2_FIM`), hrefs de checkout PagTrust, pixel/`fbq`, estrutura de `<section>`, classes, atributos `data-reveal`, SVGs.
3. **PROIBIDO** reescrever copy além do especificado, "melhorar" frases vizinhas, mexer em espaçamento/indentação fora das linhas editadas.
4. Decisão fora deste contrato = **não decidir**; registrar como bloqueio no diário e parar a task (as demais podem seguir).
5. Ao final, rodar o **gate de verificação** (abaixo). Qualquer hit fora do esperado = reverter a task que causou.

---

## FASE 1 — Executar agora (vetos e erros já batidos pela Débora, 09/07)

### T1 · Typo "problem" (linha ~857)
- DE: `"Temo descobrir que o problem não está na empresa."`
- PARA: `"Temo descobrir que o problema não está na empresa."`

### T2 · Typo "in você" (linha ~945)
- DE: `quanto do que você faz toca o que é natural in você, e quanto é adaptação.`
- PARA: `quanto do que você faz toca o que é natural em você, e quanto é adaptação.`

### T3 · Idiom trocado (linha ~1059)
- DE: `O plano de 6 meses que você monta no Dia 3 para reatar as rédeas do seu eixo.`
- PARA: `O plano de 6 meses que você monta no Dia 3 para voltar ao seu eixo.`

### T4 · Remover card "licença interna" (veto Débora, áudio 1) — linha ~844
Remover o `<li>` inteiro:
```
      <li>A sensação de pedir uma licença interna antes de cada decisão que já era sua.</li>
```
Ficam 3 cards de sintoma (todos aprovados por ela). Depois de remover: conferir no browser que a grade da seção renderiza bem com 3 itens (desktop e ~514px). Se quebrar visualmente, NÃO mexer no CSS: registrar como bloqueio.

### T5 · Remover frase "energia que não volta com férias" (veto Débora, áudio 1) — linhas ~877-880
Remover o `<p>` inteiro:
```
      <p>
        E há um juro mais silencioso: cada mês liderando de um jeito que não é o seu consome
        uma energia que não volta com férias.
      </p>
```
**Não substituir por copy nova** (copy substituta depende de aprovação; a seção funciona sem a frase: o parágrafo anterior fecha no "custo invisível apresenta a conta" e a pergunta seguinte assume). Ela vetou as DUAS metades da frase ("jeito que não é o seu" = não claro · "férias" = cara de IA).

### T6 · Eneagrama não é a única ferramenta (pedido dela, áudio 1) — linha ~907-908
- DE: `Como você funciona: história, talentos, sua forma natural de gerar valor. Pela
          leitura do eneagrama (pista, nunca rótulo).`
- PARA: `Como você funciona: história, talentos, sua forma natural de gerar valor. À luz
          do eneagrama, uma das lentes do método (pista, nunca rótulo).`

### T7 · Remover promessa do pilar 2 (veto Débora: "isso aqui no workshop não tem") — linha ~910
Remover a linha inteira:
```
        <span class="out">Você sai daqui lendo o time sem projetar o seu padrão nele.</span>
```
O `<span class="out">` do pilar 1 (l.~904, "enxergando sua força real") **FICA** — esse o workshop entrega. O card "As pessoas" permanece com título + parágrafo, sem a linha de saída.

### T8 · Remover promessa do pilar 3 (veto Débora: "também no workshop a gente não faz isso") — linha ~916
Remover a linha inteira:
```
        <span class="out">Você sai daqui separando o que é seu do que é do sistema.</span>
```
Mesma regra do T7. Após T7+T8: conferir no browser que os 3 cards continuam alinhados (alturas diferentes são aceitáveis; se quebrar layout, NÃO mexer no CSS — registrar bloqueio).

### T9 · Remover "e do time" do entregável do caderno (promete o pilar 2) — seção "O que está incluído"
- DE: `Material exclusivo para mapear suas dinâmicas pessoais e do time.`
- PARA: `Material exclusivo para mapear suas dinâmicas pessoais.`

## FASE 2 — BLOQUEADA (não executar; depende de martelo dos 3 pilares + copy aprovada pela Débora)

Registrar como pendente, não tocar:
- **H2 do hero** ("O que falta não é mais técnica: é reconhecer os padrões…") + itálico ("você aprende a interpretar esses padrões") — TROCA CONFIRMADA (Victor 09/07), aguarda copy nova aprovada (especificidade + língua do lead).
- **Reenquadramento da seção TRES** (título l.894 + cards 2/3) — o método não é o workshop; rota (a) workshop refeito ou (b) TRES = mapa da mentoria. Aguarda martelo.
- FAQ "a leitura dos três sistemas ao mesmo tempo…" (l.1105) — reescrever (vende os 3 sistemas como experiência do evento); precisa de resposta substituta aprovada.
- FAQ "existem padrões operando em você…" — tradução de "padrões".
- "Mas técnica não alcança padrão" — tradução.
- Quote "Não sei mais se estou cansado…" + frase-espelho anterior — reescrita junto com ICP.
- Bio "conduz líderes na leitura dos três sistemas" (l.1075) — explicitar que é o trabalho de mentoria (ambíguo hoje).

## GATE DE VERIFICAÇÃO (rodar após a Fase 1)

```bash
cd "04 - web design/página pré-final/index deployado"
grep -c "licença interna" index.html        # esperado: 0
grep -c "não volta com férias" index.html   # esperado: 0
grep -c "o problem " index.html             # esperado: 0
grep -c "natural in você" index.html        # esperado: 0
grep -c "reatar" index.html                 # esperado: 0
grep -c "À luz" index.html                  # esperado: 1
grep -ac "sai daqui" index.html             # esperado: 1 (só o pilar 1)
grep -ac "e do time" index.html             # esperado: 0
grep -c "system-card" index.html            # esperado: inalterado (3 cards ficam)
grep -ci "pagtrust" index.html              # esperado: 5 (inalterado)
grep -c "fbq" index.html                    # esperado: inalterado vs. antes
grep -c "<section" index.html               # esperado: inalterado vs. antes
grep -ci "desenho" index.html               # esperado: 0
```
+ abrir no browser: sem erro de console, sem overflow horizontal, seção de sintomas ok com 3 cards.

## SAÍDA

1. Diff resumido (task → linha → antes/depois) registrado no `DIARIO-DE-BORDO.md`.
2. Avisar: o arquivo local editado NÃO republica sozinho — **Victor sobe a versão nova** no host (aprovação humana obrigatória antes de publicar, CLAUDE.md §0b).
