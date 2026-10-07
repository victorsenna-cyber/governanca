# TESTES DE ROTEAMENTO — GATE 2

> STATUS: VIGENTE · evidência de teste
> Executado em: 2026-07-19T00:56:47-03:00
> Resultado: 9/9 PASS

O contrato da task menciona oito cenários, mas a tabela do §4.3 possui nove linhas. Para evitar omissão, as nove foram testadas.

## Cenários

| ID | Pedido | Caminho legado resolvido | Capacidade/controle resolvido | Writeback | Resultado |
|---|---|---|---|---|---|
| R01 | decisão de produto/preço/promessa | `CONTEXTO_NEGOCIO_GUILHERME.md` + `Ecossistema Guilherme Araújo.md` | contrato de decisão + estado `A VALIDAR` | `DECISOES.md` | PASS |
| R02 | copy/conteúdo | `Cartomancia Sistêmica/` ou fonte/oferta explicitada | `copywriting-fable5` + `stop-slop`; overlay de voz somente validado | artefato contratado + diário | PASS |
| R03 | peça-mestra | fontes da oferta explicitada | capacidades de copy + `copywriting-avancado` | artefato + auditoria | PASS |
| R04 | página | `Páginas de vendas/` ou `páginas script de vendas/` | método + skill de página | área original durante transição | PASS |
| R05 | criativo de mídia | `CRIATIVOS/` + `01 - Criativos/` | método de tráfego | área original durante transição | PASS |
| R06 | gestão Meta Ads | `meta-ads/` + `URLs ADS.txt` | método + skill de tráfego; estado atual `A VALIDAR` | diagnóstico/ação proposta | PASS |
| R07 | dashboard/dados | `00 - Governança/index.html` | classificação como dashboard, não política | futuro `08 - dados e dashboards/` | PASS |
| R08 | operação/task | documentos raiz + `09 - operação/` | task, status, decisões e compliance | diário + fila + handoff | PASS |
| R09 | fonte bruta | aulas, PDFs, mapas, insights e provas pelo manifesto | extração/síntese sem editar a origem | síntese assinada | PASS |

## Integridade

| Teste | Resultado |
|---|---|
| entradas do baseline percorridas | 227 |
| diretórios legados preservados | 39/39 |
| arquivos legados não substituídos com hash idêntico | 187/187 |
| kernel substituído dentro do contrato | 1/1; original preservado |
| referências externas iguais ao baseline | 18/18 |
| arquivos da réplica iguais à origem | 14/14 |
| documentos centrais obrigatórios presentes | 18/18 |
| movimentos de pastas operacionais | 0 |
| alterações externas | 0 |

## Hashes de recuperação

- kernel v3 arquivado: `78335B97639AD26C08677D771EAD56E8A5BF767050CE96C1C1845BC5C9790357`;
- backup anterior arquivado: `CF2E6D594A4B050791E91D9E06A41FD7BD5528BF94945E951B8F459EBFE7D09D`;
- kernel v4 de transição antes do writeback final: `4314AECAFCC8132B282D1102FC64939BFFB14AB88AFB8B8C6AC8639A6B14DBBB`.

O hash do kernel v4 pode mudar quando a própria governança for iterada; o arquivo v3 arquivado é a âncora de rollback da fase.

