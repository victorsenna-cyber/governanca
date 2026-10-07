# Carrosséis de campanha — Guilherme Araújo

Produção local concluída em 2026-08-18 para os seis carrosséis liberados pelo briefing aprovado.

Direção visual revisada por Victor na mesma data: todos os grafismos abstratos foram removidos. A versão vigente usa uma grade calculada de 6 colunas por 8 linhas, com módulos de 148 x 144 px dentro da área segura de 888 x 1152 px.

## Entregaveis

| ID | Nível de consciência | Função no funil | Estado |
|---|---|---|---|
| C01 | inconsciente | reconhecimento: cuidar e sustentar | final local |
| C02 | inconsciente | reconhecimento: lacuna de formação | final local |
| C03 | consciente do problema | reconhecimento: profundidade versus continuidade | final local |
| C04 | consciente da solução | tráfego: formatos de trabalho | final local |
| C05 | consciente da solução | tráfego: três movimentos da jornada | final local |
| C06 | consciente da solução | tráfego: venda sem romper o cuidado | final local |
| C07 | consciente do produto | mecanismo do Mapeamento | bloqueado pelos três eixos do Mapeamento |
| C08 | mais consciente | comentário `MAPA` e presente na DM | bloqueado até existir o Mapa Breve entregável |

Cada conjunto final contém oito cards PNG em `1080 x 1350 px` e uma prancha de contato. A visão consolidada está em `exports/visao-geral-C01-C06.png`.

## Estrutura

- `source/index.html`: fonte visual e copy exata dos 48 cards.
- `source/render.mjs`: renderizador e gerador das pranchas de contato.
- `source/assets/guilherme-original.jpeg`: cópia operacional da fotografia real fornecida pelo cliente.
- `exports/C01` a `exports/C06`: PNGs finais e pranchas por conjunto.
- `exports/visao-geral-C01-C06.png`: visão geral dos seis carrosséis.

## Reprodução

No PowerShell, a partir desta pasta:

```powershell
$node = 'C:\Users\zioni\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
$env:NODE_PATH = 'C:\Users\zioni\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules'
& $node '.\source\render.mjs'
```

Também é possível renderizar conjuntos específicos, por exemplo:

```powershell
& $node '.\source\render.mjs' C03 C06
```

## Validação

- 48 de 48 cards exportados.
- Todos os cards validados como PNG de `1080 x 1350 px`.
- Revisão visual feita nas seis pranchas, em cards densos e no enquadramento da fotografia real.
- Ausência de SVG, linha livre, arco, círculo, textura ou geometria decorativa no render vigente.
- Nenhuma campanha, verba, publicação ou integração externa foi ativada.

## Fontes decisórias

- `../BRIEFING-CARROSSEIS-POR-CONSCIENCIA-2026-08-18.md`
- `../../06 - mídia paga/BRIEFING-CAMPANHAS-FUNIL-INSTAGRAM-2026-08-18.md`
- `../post Pesquisa Terapêuta/AUDITORIA-E-ITERACAO-2026-08-18.md`
