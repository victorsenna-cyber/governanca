# DIREÇÃO VISUAL V2 — página Seu Eixo (Fable 5, 08/07 noite)

> **Substitui**, para a página, as anotações de cor por dobra do `PLANO-PAGINA-SEU-EIXO.md` e o uso literal das 6 paletas da `DIRECAO-DESIGN-CODEX.md`. Copy, dobras, curva de voltagem e engenharia (constantes, pixel, checkouts) do build atual **permanecem** — isto é re-skin, não rebuild.

## 1. Diagnóstico (por que parece júnior)

1. **25 hexes distintos no arquivo** (censo real do build; a iteração do Code Assist manteve os mesmos 25). Premium usa ≤ 4 cores + tints. A direção do Codex é boa como *sistema* de marca, mas aplicada à risca numa página vira catálogo de paleta: cada dobra ganhou um fundo diferente e a senoide virou carnaval.
2. **Senoide implementada com matiz, não com peso.** O método (§2.4) pede alternância de *tratamento* (liso → textura → faixa → liso) e UM clímax; o build trocou de cor a cada dobra, então nenhuma dobra pesa mais que outra: o clímax da oferta morre.
3. **Tipografia tímida.** Páginas de alto padrão em 2026 entregam o "premium" pela tipografia (display serif grande, itálico como acento raro, padding vertical 120-160px), não pela cor. O build distribui títulos médios uniformes.
4. **Causa-raiz de processo:** o plano (meu) prescreveu cor por dobra antes da skill de UI entrar; a ui-ux-pro-max executou algemada ao contrato errado. Correção de governança: plano de página prescreve **voltagem e intenção**, direção visual prescreve **como** — em documento próprio (este).

## 2. A regra V2 (travada)

**4 cores funcionais. Nada além delas:**

| Papel | Hex | Uso |
|---|---|---|
| **Papel** | `#FAF8F3` | fundo de ~90% da página (variação permitida: tint `#F4F0E7` em cards/faixas, MESMA família) |
| **Petróleo** | `#223036` (texto) / `#2E3D45` (estrutura) | todo texto, linhas de grid, e o ÚNICO bloco invertido (D8) |
| **Dourado** | `#B89B72` | acento raro: fio de 1px, numeração, palavra itálica marcada, borda do lote vigente. Nunca fundo, nunca parágrafo |
| **Musgo profundo** | `#3E5A4B` | UM uso na página inteira: o detalhe da dobra do método (D4) — linha, ícone ou eyebrow. Não fundo de seção |

- **Barro queimado `#9A4A3A`:** só como cor de TEXTO/linha da pergunta-tensionadora da D3. Sem fundo, sem caixa colorida.
- **Proibido:** qualquer outro hex; fundo colorido por seção; névoa verde/palha/linho/terracota como superfícies (viram tints de papel ou somem).

**Senoide agora é peso, não matiz:** picos (D1, D8, D10) = display Fraunces 88-120px desktop, assimetria, respiro 140-160px; vales = tipografia de leitura, simetria, 100-120px de padding. Densidade tensiona (D3 mais denso, entrelinha menor), espaço alivia (D4). **Clímax único:** D8 é o só bloco escuro (petróleo profundo, texto papel, borda dourada no lote vigente) — o olho precisa levar um susto de contraste ali e em nenhum outro lugar.

**Tipografia carrega o premium:** Fraunces opsz alto nos títulos; *itálico Fraunces como acento em UMA palavra-chave por seção-pico* ("inteiro", "eixo"); Inter no corpo (16-18px, entrelinha 1.6); eyebrows caixa alta tracking largo petróleo. Grid lines de 1px em rgba(petróleo, .08) como textura, no lugar de trocas de fundo.

**Referência de mercado (pesquisa 08/07):** páginas premium 2026 = paleta contida (≤4 cores), serif editorial grande com itálico de acento, seções que respiram 100-180px, tipografia fazendo o trabalho da cor. Nada de liquid-glass/vídeo aqui (marca de discernimento, mobile < 3s).

## 2b. Adendos do Victor (08/07 noite — vigentes)

**Estilo "truncado sofisticado" (anti-monotonia e anti-textão):**
- Regra dura: **máx. ~4 linhas de prosa contínua por bloco** sem um elemento escaneável (card, número, citação, respiro).
- **D2 reestruturada:** cena em 2-3 linhas grandes → 4 sintomas como **cards elevados** (sombra `0 8px 30px rgba(34,48,54,.06)`, borda 1px rgba(petróleo,.08)) → frase-fecho isolada em display. Depósito visual antes do custo de leitura (a D2 estava sacando: 4→1 na voltagem real).
- Elevação por sombra em cards ao longo da página (D2, D2b, D5). **Backdrop-blur só em 2 lugares:** sticky CTA mobile e card do lote vigente. Vidro em tudo = template.

**D8 — Oferta (o 9,5 de verdade):**
- **Fundo da dobra permanece claro; TODA a oferta vive dentro de UM card escuro** (petróleo `#223036`, cantos generosos, sombra profunda `0 24px 80px rgba(34,48,54,.35)`, borda dourada 1px) — moldura de decisão, não ambiente escuro.
- Dentro do card escuro, **os lotes são cards claros** (papel/areia): **lote vigente ~30-40% maior**, elevado, borda dourada, preço em Fraunces display grande, selo "lote atual · até 28/07"; lotes futuros **menores e apagados** (opacidade ~.55, sem sombra), empilhados compactos.
- **CTA:** botão grande (mín. 56-64px de altura, largura total do card no mobile), dourado sobre o escuro ganha exceção ÚNICA: fundo do botão pode ser dourado `#B89B72` com texto petróleo profundo (o único preenchimento dourado da página) OU grafite com borda dourada dupla + especular; escolher no screenshot o que pesa mais. Microcopy de reembolso colada embaixo.
- **Mobile:** lote vigente PRIMEIRO, futuros como linhas compactas (não cards inteiros) → CTA visível com um scroll curto dentro do card.

## 3. Execução (decidido)

- **Executor: Claude Code, iterando o build atual** — a engenharia (constantes de lote, pixel guard, checkouts, semântica) está boa; jogar fora seria desperdício. Loop obrigatório: aplicar V2 → screenshot desktop + 375px → comparar contra §2 → repetir. Mínimo 3 ciclos antes de mostrar.
- **Claude Design: não** para a página (geraria mockup bonito órfão da engenharia; portar = retrabalho). Pode ser usado depois, opcionalmente, só para explorar variações do HERO como referência visual.
- **Codex audita** o resultado contra este arquivo + gate Parte 5 (inclui: censo de hex ≤ 6 contando tints; `grep -io "#[0-9a-f]\{6\}" build/index.html | sort -u | wc -l`).

## 4. Prompt de iteração (colar no Code)

```
Leia 04 - web design/DIRECAO-VISUAL-V2.md (§2, §2b e §3) e aplique ao build/index.html
existente. É re-skin: não toque em copy, estrutura de dobras, constantes, pixel ou
checkouts. Reduza a página às 4 cores funcionais (censo ≤ 6 hex contando tints),
senoide por peso tipográfico/densidade/respiro (não por matiz), estilo truncado
sofisticado (§2b: máx. 4 linhas de prosa por bloco, D2 em cards elevados), e o clímax
único é o CARD escuro da oferta (§2b D8: lotes claros dentro, vigente maior, CTA
destacado, mobile compacto). Itere com screenshot (desktop + 375px) no mínimo 3 ciclos.
Registre no DIARIO-DE-BORDO.md. Gate: §2/§2b/§3.
```
