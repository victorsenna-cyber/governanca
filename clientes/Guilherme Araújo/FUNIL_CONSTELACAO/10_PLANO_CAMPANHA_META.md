# 10 — PLANO DE CAMPANHA META ADS

> Toda criacao/publicacao/alteracao em Meta exige confirmacao (formato ACAO/IMPACTO/RISCO/REVERTER/CONFIRMAR). Este arquivo e o plano; nada e executado sem a palavra "executar".

## 1. ESTRUTURA DE CAMPANHAS (fase de validacao)

```
GA|TOFU|CONST|TRAFEGO-LP|META|YYYYMMDD
   └─ AS|CONST|FRIO-INTERESSES|BR|30-55|ADV+|YYYYMMDD
        └─ AD|T1|sessao-vs-jornada|REEL|SAIBA-MAIS|YYYYMMDD
        └─ AD|T2|aprendeu-constelar|REEL|SAIBA-MAIS|YYYYMMDD
        └─ AD|T4|profundidade|CARROSSEL|SAIBA-MAIS|YYYYMMDD

GA|MOFU|CONST|CONVERSAO-VC|META|YYYYMMDD   (otimizar ViewContent/Lead)
   └─ AS|CONST|MORNO-ENGAJADOS|BR|30-55|ADV+|YYYYMMDD
        └─ AD|M2|entre-sessoes|REEL|SAIBA-MAIS|YYYYMMDD
        └─ AD|M3|cs+av|REEL|SAIBA-MAIS|YYYYMMDD

GA|BOFU|CONST|CONVERSAO-PURCHASE|META|YYYYMMDD
   └─ AS|CONST|RMKT-VISITANTES-VSL|BR|30-55|—|YYYYMMDD
        └─ AD|R1|viu-vsl|ESTATICO|COMPRAR|YYYYMMDD
        └─ AD|R2|abandono-checkout|ESTATICO|COMPRAR|YYYYMMDD
```

Recomendacao de objetivo: comecar TOFU em **Trafego/Engajamento** para volume e dados de criativo; MOFU/BOFU em **Vendas (conversao)** otimizando ViewContent→Purchase conforme pixel amadurece. Avaliar Advantage+ Sales Campaign quando houver sinal de Purchase.

## 2. PUBLICOS
**Frio (TOFU):**
- Interesses: Constelacao Familiar, Bert Hellinger, Terapia Sistemica, Taro, Autoconhecimento, Terapias Integrativas, Empreendedorismo feminino.
- Aberto/ADV+ para deixar a maquina achar o perfil quando criativo nomeia bem a dor.

**Morno (MOFU/RMKT):**
- Engajamento IG/FB 365d, video-viewers 25–75% da VSL, visitantes LP 30/60/90d.

**Quente (BOFU/RMKT):**
- Abandono de checkout, lista CRM, compradores Introducao CS, lookalike de compradores (quando volume permitir).

## 3. ORCAMENTO (sugestao de validacao — ajustar a verba real do Guilherme)
- Fase teste (1–2 semanas): concentrar em TOFU para gerar dados de criativo + um conjunto MOFU.
- RMKT com verba menor e continua.
- Escalar somente vencedor com aumento gradual (regra do ecossistema). Confirmar valores antes de subir.

## 4. CRONOGRAMA DE LANCAMENTO
| Fase | Foco | Saida |
|---|---|---|
| Semana 0 | LP + VSL + pixel/eventos + criativos prontos | go-live tecnico |
| Semana 1 | TOFU teste de hooks/angulos | vencedores de criativo |
| Semana 2 | MOFU + RMKT; otimizar LP por dados | primeiras vendas |
| Semana 3+ | Escalar vencedores, novos angulos | previsibilidade |

## 5. REGRAS DE CORTE E ESCALA (heranca)
**Cortar:** gasto sem clique/checkout, CTR link muito baixo, frequencia alta com queda, criativo gera confusao.
**Escalar:** ViewContent/checkout consistentes, leads entendem a oferta, ha vendas/pipeline, criativo mantem resultado apos aumento gradual.
Nao pausar por ansiedade; auditar oferta→criativo→copy→publico→LP→checkout antes.

## 6. ROTINA OPERACIONAL (heranca)
- **Diario:** log `meta-ads/logs/YYYY-MM-DD.md` (gasto, cliques, ViewContent, checkout, vendas, alertas, criativo vencedor/fraco, hipotese, proxima acao).
- **Semanal:** relatorio (receita/pipeline, gasto, CPL/CPA, melhor/pior campanha, hipoteses validadas/descartadas, plano da semana).

## 7. DADOS OBRIGATORIOS EM AUDITORIA (heranca)
Periodo, campanha/conjunto/anuncio, objetivo, gasto, impressoes, alcance, CPM, CTR link, CPC link, ViewContent/Lead/checkout, CPA, frequencia, publico, posicionamento, criativo, copy, status de aprendizagem. Nao inferir performance sem dados.

## 8. PROXIMA ACAO ANTES DE PUBLICAR
1. Confirmar preco/oferta final com Guilherme.
2. Produzir LP + gravar VSL.
3. Configurar pixel + eventos (exige confirmacao).
4. Produzir criativos prioritarios (T1, T2, M2, M3, R1).
5. Apresentar estrutura de campanha no formato de confirmacao e aguardar "executar".
