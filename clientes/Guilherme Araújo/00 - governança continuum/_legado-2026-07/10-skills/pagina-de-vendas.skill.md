# SKILL — Página de Vendas (Arquitetura, Tensão e Conversão)

> Constrói e audita páginas cujo objetivo real é VENDER (workshop, curso, mentoria,
> serviço, SaaS). Versão operacional do `METODO-PAGINA-DE-VENDAS.md` (raiz da governança),
> que é a fonte completa: carregar o método inteiro em builds e auditorias profundas;
> esta skill basta para revisões, wireframes de copy e decisões de estrutura.

## Função no sistema
Garantir que toda página de vendas da Continuum (nossa ou de cliente) saia com a mesma
engenharia: estrutura canônica de dobras, curva de tensão projetada, valor antes do preço,
prova vizinha da promessa e escassez apenas real. Página bonita que não vende é custo com
verniz; esta skill é o gate entre "no ar" e "vendendo".

## Quando carregar
Sempre que o pedido envolver **criar, reescrever ou auditar** landing/página de vendas,
estrutura de oferta na página, ordem de seções, CRO de página ou copy de dobra. Cruza
obrigatoriamente com `stop-slop.skill.md` (toda copy) e, quando a página é de cliente,
com a voz da marca do cliente (skill própria, ex.: `debora-voice`).

## Princípio central
> **Venda = tensão suficiente x crença apontada para o CTA > atrito no momento da decisão.**
> Toda dobra deposita ou saca atenção. A página responde às perguntas do cérebro na ordem
> em que ele as faz; nem antes, nem depois.

---

## As 12 Leis (régua rápida de auditoria)

1. **Circuito:** cada dobra trabalha tensão, crença e atrito. Qual das três este bloco move?
2. **Pergunta:** todo bloco responde a uma das 12 perguntas do leitor. Se não responde, sai.
3. **5 segundos:** primeira dobra entrega o que é, para quem, o que ganha e o próximo passo,
   sem scroll e sem depender de animação/JS.
4. **Degrau:** antes da solução, o custo de continuar igual. Dor espelhada sem custo não converte.
5. **Valor antes do preço:** pilha tangível ("você sai com") antes do número.
6. **Prova vizinha:** toda promessa forte tem prova a até uma dobra de distância.
7. **Deserto:** nunca 2+ telas sem CTA; a porta vai até o pico de desejo.
8. **Clímax coincidente:** o pico de contraste visual coincide com a oferta (ou o fecho).
9. **Escassez real:** urgência só verdadeira e com motivo. Timer falso é proibido.
10. **Gate:** nada no ar com placeholder, sem checklist e sem aprovação humana.
11. **Brief:** nenhuma dobra se escreve sem o brief de entrada completo (9 campos, método
    §5.1). Campo vazio vira pergunta ao dono da oferta, nunca invenção.
12. **Débito de crença:** toda alegação abre débito que só prova quita. Saldo ≥ 0 na
    entrada da D8, senão é carrinho abandonado projetado.

## As dobras canônicas (ordem padrão)

| # | Dobra | Responde | Obrigatório |
|---|---|---|---|
| D1 | Hero | é pra mim? o que é? o que ganho? | eyebrow de pertencimento + H1 estado + subhead (reconhece+promete+como) + CTA + microcopy de risco/preço |
| D2 | Espelho | por que me importar? | UMA cena concreta + padrão nomeado + 3-5 sintomas irmãos; nunca acusar |
| D3 | Custo de continuar | por que agora? | juros do problema, sereno, fecha com pergunta reflexiva |
| D4 | Virada / mecanismo | por que nada funcionou? como funciona? | ponte que invalida tentativas + mecanismo com NOME + 3-5 passos |
| D5 | Pilha de valor | o que exatamente recebo? | 4-7 entregáveis tangíveis, sem bônus inflado |
| D6 | Prova | quem é você? funciona pra mim? | hierarquia: resultado com número > depoimento específico > demonstração > autoridade > social genérica; foto REAL |
| D7 | Qualificação | é pra gente como eu? | "é para você se" + **"talvez ainda não seja, se"** (honesta) |
| D8 | Oferta | quanto custa? vale? e se der errado? | recap de valor -> preço ancorado -> escassez com motivo -> CTA -> risk reversal COLADO no CTA |
| D9 | FAQ | resíduo de objeções | 5-8 perguntas na voz cética do cliente; incluir tempo, "já tentei", risco e a objeção identitária |
| D10 | Fecho | o que faço agora? | eco do H1 uma oitava acima + CTA; nunca argumento novo |

Modulações por temperatura de tráfego, consciência (Schwartz) e ticket: ver método completo.

## A curva de tensão (cadência)

Voltagem alvo por dobra: D1 sobe 2->4 · D2 4->6 · D3 6->9 (pico do custo) · D4 alivia COM
direção 9->6 · D5-D7 seguram 6-7,5 (desejo + segurança) · D8 9,5 (clímax de decisão E de
contraste visual) · D9 vale técnico · D10 re-sobe 8.

Regras de cadência: nunca dois alívios seguidos · nunca dois picos seguidos · degrau antes
da virada · tensão nunca a zero · UM clímax visual só · CTA em todo pico · fecho ecoa o hero.

## Elementos (mínimos)

- **CTA:** primeira pessoa, específico ("Quero minha vaga"), mesmo verbo do início ao fim,
  microcopy que desarma a última objeção embaixo do botão.
- **Preço:** ancoragem honesta (parcela, custo do problema, lote por TEMPO com vigente
  aceso). Proibido preço riscado falso e "mais escolhido" em lote temporal.
- **Ícones:** um sistema só, com função de escaneabilidade; nunca emoji, nunca 1 ícone
  decorativo por feature. **Imagens:** rosto humano real; nunca stock/IA genérica.
- **Mobile:** dobra re-hierarquizada, CTA no primeiro scroll, lote vigente primeiro na pilha.
- **Performance:** valor da dobra no primeiro paint; animação 150-700ms com função;
  reduced-motion respeitado.

## Gate mínimo antes de publicar
Teste dos 5 segundos com alguém de fora · D3 existe · pilha antes do preço · prova vizinha ·
sem deserto de CTA · clímax na oferta · risk reversal no CTA · zero placeholder · mobile em
aparelho real · AA · cruzou stop-slop · aprovação humana registrada.

## Regras de decisão
estrutura canônica por padrão, desvio só com motivo escrito · clareza cobra menos que
criatividade · escassez real ou nenhuma · prova fraca move "quem conduz" para depois da
oferta · uma decisão por bloco · o esqueleto é invariante, a voz é da marca.

## Linha de produção (ordem de escrita — método Parte 5)
brief de entrada (9 campos) → oferta primeiro (D8+D5) → mapa de quitação promessa→prova →
mecanismo (D4) → espelho e custo (D2+D3) → FAQ → **hero por último** (o H1 é destilado,
não rascunho) → passe de voz + stop-slop → design sobre o wireframe → gate. A mecânica da
D8 modula por tipo de oferta (evento · done-for-you · assinatura · ticket alto → método §4.4).

## Handoffs
← `head-trafego` (message match anúncio-dobra) · ← `head-conteudo` (narrativa/voz) ·
→ `stop-slop.skill.md` (gate de toda copy) · → `voz-victor.skill.md` ou skill de voz do
cliente · base: `METODO-PAGINA-DE-VENDAS.md` (raiz) + `70-metodologias-chave/` (Ofertas
Hormozi, Dotcom Secrets, Spin Selling).

## Entregáveis típicos
wireframe de copy dobra a dobra · auditoria com achados P0/P1/P2 + curva de tensão mapeada ·
plano quick wins vs alto impacto vs testes A/B · checklist de gate preenchido.

---
*Fonte completa: `01 - Governança/METODO-PAGINA-DE-VENDAS.md` (v2.0, 18/07/2026). Origem:
auditoria da landing Carreira Alinhada (Fable 5); v2.0 adicionou leis 11–12, extrato de
crença, brief de entrada e linha de produção. Este arquivo evolui junto com o método.*
