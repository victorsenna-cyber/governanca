# 07 - SKILLS — CAPACIDADES GERAIS

> STATUS: VIGENTE · política da área; nenhuma skill local implementada na Fase 2

Este diretório receberá somente capacidades reutilizáveis. O que varia por cliente deve ficar em fontes ou overlays locais, não em clones do método.

## Contrato futuro de uma skill

```text
capacidade geral
  + esquema de entradas
  + ponteiros para overlays locais
  + contrato da tarefa
  = execução contextualizada sem tornar a skill exclusiva
```

### Capacidade geral

- nome orientado à função, não ao cliente;
- processo, critérios, gates e formato de saída reutilizáveis;
- nenhuma oferta, preço, ID, campanha, voz ou decisão embutida;
- pode apontar para um schema de overlay, mas não duplicar o conteúdo.

### Overlay local

- identidade/voz: fonte futura em `01 - contexto/`;
- produto/método: fonte futura em `02 - produtos e método/`;
- oferta/funil: fonte futura em `03 - ofertas e funis/`;
- estado operacional: `STATUS.md` e fonte datada da área;
- decisão: `DECISOES.md`.

## Regra de proveniência

Um mecanismo útil observado em Governança ou em outro cliente pode ser generalizado se o novo contrato remover fatos, nomes, ativos e decisões exclusivos. A proveniência metodológica pode ser registrada; o conteúdo do cliente de origem não é copiado.

## Estado desta fase

As 14 cópias em `00 - governança continuum/` são referência imutável. Nenhuma skill foi adaptada, renomeada ou criada aqui, porque a Fase 2 autoriza arquitetura e roteamento, não iteração de conteúdo/capacidade.

