# RITUAIS.md — MANUTENÇÃO DO CIRCUITO

> STATUS: VIGENTE · rotina operacional

## Abertura de sessão

1. ler o kernel raiz;
2. ler `STATUS.md`;
3. ler as três entradas mais recentes do diário;
4. identificar a task/gate vigente;
5. classificar área e modo;
6. selecionar uma fonte e uma capacidade dominantes;
7. declarar escrita, aceite, writeback e rollback.

## Durante a execução

- manter o escopo em arquivos explicitamente autorizados;
- registrar divergências sem escolher silenciosamente;
- verificar antes/depois em proporção ao risco;
- não propagar decisão automaticamente;
- interromper se a autoridade necessária mudar.

## Fechamento de sessão

1. comparar execução com contrato;
2. listar arquivos criados, alterados, copiados ou movidos;
3. provar o que permaneceu intocado quando houver referência read-only;
4. registrar decisão e origem, quando existir;
5. atualizar fila;
6. atualizar status somente com evidência datada;
7. anexar verificação e rollback ao diário/handoff;
8. parar no gate contratado.

## Rito semanal de sanidade

Executar somente quando houver task de manutenção:

- verificar links ativos dos documentos raiz;
- identificar duas fontes vigentes para o mesmo contrato;
- revisar fila aberta e decisões sem propagação;
- revisar status sem data recente;
- comparar réplica ao manifesto sem alterar a origem;
- confirmar que históricos não voltaram ao roteamento ativo;
- registrar resultado no diário.

## Gate de migração futura

Antes de qualquer onda física: resolver origem/destino absolutos, comparar hash com o baseline, confirmar que ambos estão dentro de Guilherme, mover apenas por caminho literal, recalcular hash e registrar rollback. Falha interrompe a onda inteira.

