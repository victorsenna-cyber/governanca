# CORREÇÃO — The Golden Temple V2 · spec de implementação

> **Para:** Codex (implementação)
> **Origem:** `AUDITORIA-GOLDEN-TEMPLE-V2-2026-08-03.md` (16 achados) + ordem humana de 03/08/2026
> **Artefato:** `04 - web design/the-golden-temple-v2/`
> **Copy a implementar:** `COPY-GOLDEN-TEMPLE-V2.md` (arquivo separado, bloco a bloco)
> **Classe de ação:** PRODUÇÃO LOCAL. Nenhum deploy, domínio, Pixel ou checkout autorizado por este documento.

---

## 0. O que muda e o que não muda

| Área | Decisão |
|---|---|
| **Hero (D1)** | **CONGELADO.** Ordem humana de 03/08/2026. Não alterar markup, copy, canvas, orbe, Flor da Vida, `hero-scene.js`, tipografia nem CTA. O SHA-256 registrado no HANDOFF deve continuar válido |
| Copy de D2 a D9 | **reescrita integral**, conforme `COPY-GOLDEN-TEMPLE-V2.md` |
| Estrutura de dobras | mantida na ordem atual. Nenhuma dobra entra ou sai |
| D6 Caminhos | **destinos reais** + jornada visível dentro de cada caminho |
| Clímax visual | **move para D6** |
| Tokens | 26 cores soltas migram para `:root` |
| `config.js` | URLs reais de Mentoria e Curso |
| Medição | permanece desligada até autorização |

---

## 1. Destinos (F-01, F-03, F-05 · P0 e P1)

`js/config.js` passa a:

```js
window.SITE_CONFIG = Object.freeze({
  links: {
    curso: "https://thegoldentemple.io/curso",
    mentoria: "https://thegoldentemple.io/mentoria",
    felinas: "",
    instagram: "",
    contact: ""
  },
  analytics: {
    enabled: false,
    metaPixelId: ""
  },
  debug: false
});
```

**Três mudanças de comportamento:**

1. **A chave `despertar` passa a se chamar `curso`.** Atualizar `data-config-link`, `data-config-link-template`, `data-config-pending`, `data-experience` e `data-route` correspondentes, no HTML e em `main.js`. Motivo: "despertar" é o nome do produto, "curso" é o papel na arquitetura. A URL confirmada usa `/curso`.
2. **Rota relativa eliminada.** `../mentoria/index.html` sai. Entra a URL absoluta. O bundle passa a poder ser publicado isolado.
3. **O fallback de placeholder some da vitrine.** Com as duas URLs preenchidas, `data-config-pending` nunca renderiza. **Manter o mecanismo no código** (é a proteção correta contra link vazio) e garantir que `hidden` seja aplicado quando o link existir.

**Portal sazonal (F-02 · P0 em aberto).** `links.felinas` continua vazio porque a Masterclass ainda não tem URL pública. O slot fica pronto: no minuto em que a URL existir, preencher a chave revela o portal sem tocar em código. **Este é o único P0 da auditoria que permanece aberto depois desta correção**, e ele não depende de implementação: depende de publicar a Masterclass.

---

## 2. Arquitetura e clímax (A-01, A-02 · P1)

### 2.1 Clímax único em D6

Hoje o `CREATIVE-DIRECTION.md` declara clímax em D7 (Prana) e D9 (selamento). São dois, portanto não há nenhum, e nenhum coincide com a decisão.

**Correção de direção, sem valores:**

- **D6 sobe para contraste máximo.** É a única dobra da página onde acontece uma escolha. Ela precisa ser a mais escura, a mais densa ou a mais luminosa da página, uma coisa só, e diferente de todas as outras.
- **D7 e D9 baixam para contraste médio.** Mantêm presença e perdem o pico. O retrato da Prana continua tratado; o campo de partículas do selamento continua, com intensidade reduzida.
- **A escolha de qual eixo carrega o pico (luz, densidade ou inversão) é do designer.** Esta spec fixa a posição do pico, não o valor.

Atualizar `CREATIVE-DIRECTION.md` na mesma tarefa: a curva declarada precisa dizer clímax único em D6.

### 2.2 Qualificação de público

A auditoria pede qualificação na primeira dobra. O hero está congelado por ordem humana, então **a qualificação entra no topo de D2**, que é a primeira coisa depois do hero.

**Desvio declarado:** A-02 corrigido em D2 e não em D1, por congelamento do hero em 03/08/2026. Registrar no `CREATIVE-DIRECTION.md`.

D8 continua existindo com função diferente: D2 diz para quem é, D8 diz para quem não é.

---

## 3. As jornadas em D6 (ordem humana de 03/08/2026)

> "o templo dourado nada mais é do que um caminho iniciático, portanto, precisa conter claramente as jornadas disponíveis"

Consequência estrutural: **cada caminho em D6 deixa de ser um card de produto e passa a mostrar a própria jornada.** Não é lista de entregáveis. É a sequência de passagens que a pessoa atravessa.

Cada um dos dois blocos de D6 recebe, na ordem:

1. papel na escola (uma linha: por onde essa jornada serve);
2. **os passos da jornada, numerados**, com o nome de cada passagem;
3. forma de participação (o que é, ritmo, o que vem com);
4. CTA para a página própria.

A copy dos passos está em `COPY-GOLDEN-TEMPLE-V2.md` §D6. Marcação semântica: `<ol>` para a jornada, porque a ordem é informação. Cada passo é `<li>` com nome e uma linha.

**Regra de peso:** o card da Mentoria continua `experience--primary`. Os dois estão vivos agora, então a diferença de peso passa a refletir profundidade, não disponibilidade (U-02).

---

## 4. Tokens (U-01 · P1)

`css/styles.css` tem 39 valores hexadecimais, 13 em `:root`. Migrar os 26 restantes.

Procedimento: varrer os hex fora de `:root`, agrupar por função (não por valor), nomear pela função e substituir. Valores idênticos usados com funções diferentes viram tokens diferentes. Valores próximos com a mesma função colapsam num token só, e o colapso é registrado no HANDOFF.

Nenhuma mudança visual perceptível é esperada. Se alguma aparecer, ela é o achado, não o efeito colateral.

---

## 5. O que NÃO fazer

- não alterar o hero, em nenhum aspecto;
- não editar a copy entregue para caber no layout: se não couber, devolver o bloco com a contagem real (anti-padrão 32 da ui-ux);
- não inventar depoimento, número, credencial, preço ou escassez;
- não publicar "psicóloga" na bio sem confirmação de CRP ativo (DEC-2026-08-03-003);
- não ligar `analytics.enabled`;
- não preencher `links.felinas`, `instagram` ou `contact` por suposição;
- não tocar em `04 - web design/the-golden-temple/` (V1 preservada).

---

## 6. Validação exigida na entrega

- `html-validate` e `node --check` limpos;
- um H1, IDs sem duplicação;
- zero overflow horizontal em 390, 768, 1024, 1100 e 1440 px;
- hero idêntico ao aprovado, conferido por SHA-256 em `index.html` (bloco do hero), `hero-scene.js`, `hero-orb.svg`;
- as duas URLs abrem, e `data-config-pending` não renderiza em nenhuma delas;
- clímax único em D6, verificado apertando os olhos: uma dobra salta, as outras não;
- teclado percorrido, foco visível, `prefers-reduced-motion` sem perda de informação;
- contagem de hex fora de `:root` igual a zero;
- conteúdo essencial disponível sem JavaScript;
- `CREATIVE-DIRECTION.md` e `HANDOFF.md` atualizados com clímax único, desvio de qualificação declarado e o colapso de tokens.

---

## 7. Achados que esta correção fecha

| ID | Achado | Fechado por |
|---|---|---|
| F-01 | funil sem terminal | §1 |
| F-03 | placeholder na vitrine | §1 |
| F-05 | rota relativa | §1 |
| A-01 | clímax duplo e deslocado | §2.1 |
| A-02 | qualificação tardia | §2.2 (com desvio declarado) |
| A-03 | D2 e D5 redundantes | copy §D5 |
| A-04 | teste dos 5 segundos | copy §D2 |
| C-01 | listagem sem pivô | copy, pivô por dobra |
| C-02 | voz da direção no lugar da voz dela | copy |
| C-03 | contraste binário três vezes | copy, uma só ocorrência |
| C-04 | frases-âncora sem uso | copy |
| U-01 | tokens soltos | §4 |
| U-02 | card morto competindo | §3 |
| A-00 | classificação não escrita | §8 |

**Permanecem abertos:** F-02 (Masterclass sem URL) e F-04 (medição desligada por decisão).

---

## 8. Classificação, escrita (A-00)

```
TICKET:            não se aplica (a página não vende)
MODELO:            hub de escola iniciática
ATO DE CONVERSÃO:  roteamento para a jornada certa
                   -> destino: 2 páginas de venda próprias, URLs absolutas
TEMPERATURA:       morna (base da Prana) e fria (busca e indicação)
CONSCIÊNCIA:       consciente do problema, familiaridade variável com o universo dela
COMPRIMENTO:       9 dobras
CTA:               verbo único "Encontrar meu caminho" nas dobras de navegação;
                   nas dobras de escolha, o verbo é o da jornada
DESVIOS DECLARADOS:
   1. duas ofertas na mesma página: é hub, a coexistência é a função
   2. qualificação em D2 e não em D1: hero congelado por ordem humana
   3. verbo do CTA herdado do hero congelado, para não quebrar a unidade
```

---

**Base:** `AUDITORIA-GOLDEN-TEMPLE-V2-2026-08-03.md` · `10-skills/gerador-web-designer-senior-continuum` · `10-skills/ui-ux-designer-senior-continuum` · `10-skills/copywriter-senior-continuum` · `voz-prana.skill.md` · `CLAUDE.md` §§6.3 e 9
