# GOVERNANÇA DO REPO — status, propagação e superação (v1 · 16/07)

> **Por quê:** postmortem em `10 - Registros de análises/postmortem.propagacao-de-decisao.md` (decisão de 14/07 não propagou p/ 8 docs fundamentais). **Este protocolo é candidato a template Continuum** (`01 - Governança`) para todo repo de cliente.
> Complementa (não substitui) o CLAUDE.md §0a/0b: precedência continua DECISOES > OFERTA-CANONICA > resto; diário continua obrigatório. Aqui entra a MECÂNICA que faltava.

## 1. Status obrigatório em todo doc operacional

Todo `.md` de trabalho (copy, plano, spec, skill, briefing) abre com UMA destas linhas, logo abaixo do título:

```
> STATUS: VIGENTE · fonte                         ← canônico; outros derivam dele
> STATUS: VIGENTE · derivado de [X] · sync DD/MM  ← espelho; a data denuncia dessincronização
> STATUS: HISTÓRICO · não editar                  ← registro (transcrições, análises, postmortems, logs)
> STATUS: SUPERADO por [X] em DD/MM · não usar    ← morto; primeira linha do arquivo
```

Regras: arquivo sem STATUS = tratar como suspeito (conferir contra DECISOES antes de usar). Executor que abrir doc SUPERADO ou derivado com sync anterior à última decisão relevante: **não usa; registra no diário e segue pela fonte.**

## 2. Propagação: toda decisão declara onde bate

Linha nova no `DECISOES.md` ganha, dentro da célula da decisão, o campo **"Propaga p/:"** com a lista de artefatos afetados (usar o §5 abaixo para não esquecer nenhum). A sessão que registra a decisão **sinaliza** as propagações (regra 16/07 — não implementa automaticamente); cada propagação executada é marcada na fila com ✓ e data.

Fila de propagação vigente = a mais recente entre: linha "auditoria/fila" no DECISOES · `RELATORIO-INTEGRIDADE-*.md` mais novo.

## 3. Rito de superação (nunca dois vigentes)

Criar vN+1 de qualquer artefato obriga, **na mesma sessão**: (a) marcar vN com `STATUS: SUPERADO por vN+1`; (b) atualizar quem aponta para vN (ou sinalizar na fila); (c) registrar no diário. Arquivo superado que estorva navegação vai para `_arquivo/` da pasta — nunca deletar.

## 4. Léxico morto (gate de varredura)

Termos que NÃO podem aparecer em material novo deste projeto (varrer antes de fechar qualquer peça; a lista cresce por decisão, nunca encolhe sem decisão):

| Termo morto | Desde | Substituto vigente |
|---|---|---|
| "Carreira Alinhada" | 08/07 | "Eixo" |
| "Seu Eixo" | 17/07 | "Eixo" (Débora tirou o "Seu" — nome final do workshop) |
| "Desenho Humano" (comunicação) | 08/07 | — (ferramenta interna, não comunicada) |
| "padrão/padrões" em headline/CTA/hook | 09/07 | tradução do léxico (`debora-voice`) |
| "licença interna" · "energia que não volta com férias" | 09/07 | — (vetadas) |
| "Lidere com tudo o que você é" + família "inteiro/inteireza/do bom ao pleno" | 14/07 | "Lidere com eficiência pelo domínio das relações. Sem perder a própria vida." + eficiência/paz |
| roadmap reverso · mapa do bloqueio · metas filtradas | 14/07 | entregáveis novos (Mapa dos Três Sistemas etc.) |
| "talentos" (soa assessment) | 14/07 | "maestria" / "aquilo que você faz melhor sem esforço" |
| "Será que eu quero continuar sendo líder?" · "Todo mundo espera alguma coisa de mim..." | 14/07 | 2 frases de espelho aprovadas (DECISOES 14/07) |
| NR-1 em página/criativos/narrativa | 16/07 | — (frente futura LinkedIn/empresas) |
| "do jeito dele/dela" · "cada um entrega do jeito dele" (sem amarra ao resultado pedido) · "extrair" (das pessoas) · "performance" | 02/10 | "o mesmo resultado, explicado no idioma dele" · "menos esforço, mais resultado" · "eficiência" (`PROMESSA-CASCATA-2026-10-02.md` §5) |

Comando de varredura (bash, na raiz): `grep -riE "carreira alinhada|seu eixo|tudo o que você é|líder inteiro|inteireza|roadmap reverso|mapa do bloqueio|etas filtradas|mapa de talentos|NR-?1" [arquivo-novo]` → esperado: 0. (Atenção: "Eixo" sozinho é vigente; só "Seu Eixo" é morto.)

## 5. Mapa de dependências (o grafo que a propagação consulta)

| FONTE (muda aqui...) | ...propaga para |
|---|---|
| `DECISOES.md` | tudo abaixo |
| `03/OFERTA-CANONICA.md` (promessa, preços, escada, arco 3 dias) | página (index vigente) · `07/funil-debora` · `03/criativos/*` · `03/PLANO-CRIATIVOS` · `03/BRIEFING` · PAGINA-EXPLICADA · scripts/e-mails · **cadernos do workshop (02)** |
| Léxico/vetos da Débora | `07/debora-voice` (fonte do léxico) → toda copy nova |
| `04/LINKS CHECKOUTS` + `03/CALENDARIO-LOTES` | página (constantes/popup) · E4 e CN5 (artes por lote) · PLANO-DE-MIDIA |
| Página vigente (`index deployado/` publicado) | PAGINA-EXPLICADA · ESTRUTURA extraída · message match dos criativos (E1/CN2) |
| `05/direção visual` | artes de criativos · página · cadernos diagramados |
| Workshop real (roteiro/cadernos 02) | promessas da página e criativos (a lição do TRES: **nunca prometer o que o 02 não entrega**) |

## 6. Gate de fechamento de sessão (soma-se ao diário)

- [ ] Decisão nova → linha no DECISOES **com "Propaga p/:"** preenchido.
- [ ] Artefato novo → linha STATUS no topo.
- [ ] Versão nova → anterior marcada SUPERADO (§3).
- [ ] Peça de copy nova → varredura do léxico morto (§4) = 0 hits.
- [ ] Fila de propagação atualizada (✓ no que executou; novo item no que sinalizou).

## 7. Para virar template de cliente (setup D1)

No bootstrap de repo novo: criar `DECISOES.md` (com coluna Propaga p/) · `DIARIO-DE-BORDO.md` · `GOVERNANCA-REPO.md` (este, com léxico morto vazio) · `OFERTA-CANONICA.md` · mapa de pastas 00-10 do CLAUDE.md local · skills de voz/funil do cliente com header `derivado de` + sync. O léxico morto nasce vazio e é alimentado pelos vetos do cliente desde a primeira call.

---
*Pendente (sinalizado, não implementado — regra 16/07): aplicar headers de STATUS nos docs existentes (itens 9-13 do RELATORIO-INTEGRIDADE) · adicionar ponteiro no CLAUDE.md §0a · promover este protocolo à Governança canônica (alçada Victor).*
