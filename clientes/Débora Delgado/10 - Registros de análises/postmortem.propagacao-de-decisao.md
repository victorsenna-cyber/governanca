# Postmortem — propagação incompleta de decisão (detectado 16/07)

> **O erro, em uma frase:** a decisão de 14/07 (promessa nova + workshop refeito) atualizou a página e a oferta, mas **8 docs fundamentais continuaram operando com narrativas de 1 a 3 gerações atrás** (copy-anuncios em 29/06; PLANO-CRIATIVOS em 30/06; skills de voz/funil sem os vetos de 14/07; PAGINA-EXPLICADA mapeando uma versão morta da página). Detectado só por auditoria manual em 16/07 (`RELATORIO-INTEGRIDADE-REPO-2026-07-16.md`).

## Linha do tempo do erro

| Data | O que mudou | O que foi propagado | O que ficou para trás |
|---|---|---|---|
| 30/06 | Promessa "do bom ao pleno" + H1 | copy-landing, tasks | copy-anuncios (29/06) já ficou |
| 09-10/07 | Vetos de léxico + remoções | página, criativos v2, debora-voice | copy-anuncios, PLANO-CRIATIVOS |
| 14/07 | **Promessa eficiência+paz + workshop refeito + vetos novos** | index-v3, OFERTA, criativos v3→v4 | PLANO-CRIATIVOS, copy-anuncios, funil-debora, debora-voice (vetos), ROTEIROS-VIDEO, PAGINA-EXPLICADA, BRIEFING, CLAUDE/PROJECT raiz, **cadernos do workshop** |

## Causa-raiz (5 porquês)

1. Docs desatualizados sobreviveram → porque a propagação da decisão foi **parcial** (só os artefatos que estavam na mão do executor naquele dia).
2. Foi parcial → porque **nenhuma decisão declara seus dependentes**: a linha do DECISOES diz o quê mudou, não **onde** a mudança bate. Propagar dependia de memória.
3. Dependia de memória → porque **os artefatos não declaram o próprio status**: ao abrir `copy-anuncios.md`, nada diz que ele é de 29/06 e foi superado; parece vigente.
4. Nada diz → porque o repo cresceu por camadas (v1→v2→v3) **sem rito de superação**: criar a versão nova nunca obrigou a marcar a antiga.
5. Sem rito → porque a governança definiu **precedência** (DECISOES > OFERTA > resto) mas não a **mecânica de atualização do resto**. Precedência resolve conflito quando alguém compara dois docs; não impede que alguém use o doc errado sem comparar.

**Agravante:** docs derivados (funil-debora "espelha OFERTA", PAGINA-EXPLICADA "mapeia a página") não carimbam a data da última sincronização com a fonte — divergência silenciosa por construção.

## O que já mitigava (e por isso o dano foi contido)

Diário de bordo (a auditoria reconstruiu o estado em minutos) · precedência DECISOES>OFERTA (ninguém publicou material velho: o gate humano segurou) · `_arquivo/` já em uso parcial.

## Correção estrutural

Protocolo novo: `GOVERNANCA-REPO.md` (raiz) — status obrigatório por arquivo, coluna "propaga para" no DECISOES, rito de superação, léxico morto com varredura, gate de fechamento de sessão. Este postmortem é o "porquê"; o protocolo é o "como". Regra de operação vigente (Victor 16/07): iterações são sinalizadas na fila, não executadas automaticamente — o protocolo garante que a fila seja **gerada por construção**, não por auditoria heroica.

## Lição p/ o template de clientes

O custo real não foi retrabalho de copy: foi **risco de venda incongruente** (item mais grave da auditoria: cadernos do workshop antigos = produto entregue ≠ produto vendido). Em qualquer cliente novo, a mecânica de propagação entra no D1 do setup, junto com DECISOES e diário — não depois do primeiro incidente.
