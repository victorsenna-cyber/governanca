# Validação da destilação de 30 de setembro de 2026

> STATUS: HISTÓRICO · registro isolado de verificação

## Resultado

- Fonte TXT lida integralmente, do primeiro ao último bloco. Extensão MD solicitada não encontrada; homônimo TXT utilizado, sem renomear ou editar o original.
- 1.173 blocos reconhecidos pelo script, zero bloco descartado. Agrupamento consecutivo em 615 turnos; ordem e texto preservados. Verificação mecânica de contagem de palavras antes/depois aprovada.
- 68 pontos C com IDs sequenciais. **68 de 68 citações localizadas literalmente no bloco do timestamp informado**, após correção do parser de validação para não confundir dois-pontos no corpo com separador do falante. Não foi necessário alterar a fonte ou as citações.
- Nove registros L de auditoria textual da nossa fala. Dez turnos mais longos relidos; métricas calculadas sobre 5.336 palavras nossas. Validação automática de literalidade refere-se aos pontos C; L e quadros narrativos foram conferidos por leitura.
- SHA-256 da fonte antes/depois: `efb01f33171201c93c5238b0e66a5d56ae650ae5bb4d60f592469b631f679767`. **Original intacto.**
- Uma entrada para o pacote no índice geral `execução Codex/STATUS-CODEX.md`. Nenhuma linha histórica substituída.
- `python -X utf8 -B 40-operacao-rotinas/ferramentas/verificar-propagacao.py`: resultado **✅ nada a propagar**, execução de 30/09/2026. Esse gate confere roteamento e referências gerais, não promove o conteúdo da conta.

## Gates editoriais

Índice por destino, fatos versus leituras, compromissos com donos, decisões versus possibilidades, descartes, ausências e tom/conduta presentes. Adendos de estado, decisões, diário, produto, léxico e vozes disponíveis em PROPAGACAO.md. Conteúdo de crença ou relato sobre terceiros não foi apresentado como comprovação científica nem autorização de divulgação. Datas inferidas foram rotuladas; nenhum novo prazo foi inventado.

## Limites

Não houve audição, revisão de diarização ou conferência de tela da reunião. ASR contém ruído e nomes incertos. Citações são literais do TXT, não certificação do áudio. Não houve atualização dos canônicos, edição de curso, criação de quiz/teste, roteiro, contato, publicação, ativação de mídia ou compra/download de referências.

A propagação está completa **na área isolada**, com fila e destinos explícitos. A integração canônica exigida pelo método permanece sujeita à regra de isolamento e ao rito da casa; não afirmar que os originais receberam estes registros.

## Arquivos produzidos

- DESTILACAO-CALL-2026-09-30.md — documento principal e auditoria da fala.
- PONTOS-DE-EVIDENCIA.md e PONTOS.json — 68 registros rastreáveis.
- TRANSCRIPT-LIMPO.md — agrupamento mecânico sem correção lexical.
- DEZ-TURNOS-VICTOR.md e METRICAS-VOZ.json — corpus e contagens da auditoria.
- PROPAGACAO.md — adendos por destino e fila operacional proposta.
- FONTES-E-PREPARACAO.json, VALIDACAO.json e VALIDACAO.md — integridade e testes.
- preparar.py e validar.py — preparação e conferência reproduzíveis. Reexecutar preparar.py sobrescreve derivados/baseline; preservar resultados antes de nova rodada.

Todos sob `clientes/Débora Delgado/execução Codex/call-2026-09-30/`. Única escrita fora desse pacote: entrada no índice geral, também sob `execução Codex`.
