# CALENDÁRIO DE LOTES — Workshop "Seu Eixo" (nome confirmado 08/07)

> Calculado em 08/07/2026 pela lógica do `METODO-TRAFEGO-PAGO.md` (§2.3 estágios + §7.2 aprendizado). **Status: CONFIRMADO pelo Victor em 08/07** — registrado em `DECISOES.md`, propagado à `OFERTA-CANONICA.md` e ao plano da página.
> Âncoras fixas: turma fim de semana **14-15/08** · turma meio de semana **19-21/08** · campanha no ar **15/07** (premissa: página refeita + pixel verdes até 14/07; se atrasar, tudo desliza junto, ver §5).

## 1. A lógica do cálculo (por que datas, nestas datas)

O lote não é só precificação: cada lote corresponde a um **estágio da conta de anúncios** e a um **momento da curva natural de compra de evento**.

1. **Aprendizado precisa do lote barato.** A conta está zerada (pixel novo, sem histórico). O algoritmo sai da fase de aprendizado com volume de eventos (~50/semana no evento otimizado). R$ 97 é o ticket que maximiza conversões por real investido: é o lote que "compra" o sinal. Encurtar o Lote 1 encarece o aprendizado; ele precisa durar o ciclo completo de ~2 semanas.
2. **Elasticidade só se testa com CPA estável.** A virada para R$ 197 (+103%) deve acontecer **depois** que a campanha estabilizou, para conseguirmos ler o efeito do preço separado do efeito do aprendizado. Se virarmos o lote no meio do aprendizado, não saberemos o que causou a mudança de CPA.
3. **A última semana vende sozinha.** Em evento com data, a maior parte da compra acontece perto do prazo (o deadline faz o trabalho da urgência). É o momento de **maior intenção** e por isso carrega o **maior preço** (R$ 257): quem compra ali pagaria; o desconto ali seria desperdício.
4. **Cada virada é um pico fabricado.** O anúncio "sobe dia X" gera 48-72h de aceleração. Posicionamos as viradas nos pontos onde a curva natural de vendas tem vale (meio do funil), para achatá-lo.

## 2. Datas propostas

| Lote | Preço | Janela | Dias | Função na conta |
|---|---|---|---|---|
| **Lote 1** | R$ 97 | **15/07 → 28/07 (23h59)** | 14 | fase de **aprendizado**: volume de conversões barato, calibra pixel e valida criativos (4 ciclos de decisão ter/sex) |
| **Lote 2** | R$ 197 | **29/07 → 07/08 (23h59)** | 10 | fase de **validação/escala**: criativos vencedores + teste de elasticidade com CPA estável; virada de 28/07 injeta pico no vale do meio do funil |
| **Lote 3** | R$ 257 | **08/08 → 13/08** (turma FDS) · **até 18/08** (turma meio de semana) | 6-11 | fase de **colheita**: semana de pico natural, preço máximo, escassez legítima (turmas ~20) |

**Comunicação de virada (criativo A5 + stories da Débora + grupo/lista):** entra no ar **72h antes** de cada virada (25/07 e 05/08). Depois da virada, o lote anterior aparece como encerrado na página (tensão de antecipação real, regra da OFERTA-CANONICA).

## 3. Matemática de sustentação (premissas conservadoras, `a calibrar` com dados reais)

- Meta de inventário: 2 turmas × ~20 = **40 vagas**.
- Distribuição esperada com lotes por data: ~40% L1 (16) · ~30% L2 (12) · ~30% L3 (12) → receita workshop ≈ **R$ 7.000** (1.552 + 2.364 + 3.084). A receita do lançamento vem da **mentoria** (cada venda de R$ 4k > metade do workshop inteiro); o workshop é aquisição qualificada.
- **Evento de otimização: InitiateCheckout** (não Purchase). Com 40 vendas totais no mês, Purchase jamais atinge 50 eventos/semana; InitiateCheckout atinge com verba viável. Purchase fica como conversão registrada e meta real na fonte de verdade (PagTrust).
- Verba de referência para o L1 cumprir a função: **≥ R$ 150-250/dia** (10-15× um custo por InitiateCheckout estimado em R$ 15-20). Abaixo disso o aprendizado não fecha em 14 dias → regra §5.

## 4. Por que NÃO outras opções (decisões descartadas)

- **L1 mais curto (7 dias):** mataria o aprendizado no meio; CPA do L2 ficaria ilegível.
- **L3 mais longo/barato:** desconto na semana de maior intenção destrói margem sem gerar volume extra (quem compra na última semana compra pelo prazo, não pelo preço).
- **Lotes por vagas:** já descartado em 30/06 (decisão registrada); vagas não são verificáveis pelo lead e viram promessa frouxa.

## 5. Regras de contingência (registrar toda ativação no LOG-DECISOES)

| Gatilho | Ação |
|---|---|
| Campanha não sobe até 15/07 | janelas deslizam dia a dia; L3 comprime (mínimo 5 dias); datas na página via variável, nunca hardcoded |
| Aprendizado não concluído até 24/07 (verba baixa/CPA alto) | virada L1→L2 adia até **01/08** (máx.); L2 comprime para 7 dias; L3 mantém 08/08 |
| L1 vender ≥ 60% do inventário (24+ vagas) antes de 28/07 | antecipar virada em 48h (proteger margem); avaliar abrir 3ª turma antes de escalar verba |
| Turma meio de semana fraca até 11/08 | ativar transferência de turma (regra já aprovada na oferta) + realocar 100% da verba L3 para a turma forte |

---
*Cálculo: método Continuum §§2-7. Confirmando as datas → atualizar `OFERTA-CANONICA.md` §1, página (seção "A sua vaga") e `PLANO-CRIATIVOS.md` (placeholders A5).*
