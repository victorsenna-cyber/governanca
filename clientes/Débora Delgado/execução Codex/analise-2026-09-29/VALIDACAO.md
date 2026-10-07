# Validação — 29/09/2026

- Destinos de escrita: somente `clientes/Débora Delgado/execução Codex/analise-2026-09-29/` e acréscimo no índice `execução Codex/STATUS-CODEX.md` da Governança.
- 25 arquivos-fonte conferidos por SHA-256 contra FONTES-SHA256.json: **zero divergências** ao fechar. Incluem dez áudios, dez transcrições, PDF e quatro fontes de estado/contexto.
- Dez transcrições existentes lidas integralmente; consolidado gerado mecanicamente. Nenhuma retranscrição nem revisão auditiva realizada. Dois áudios de 12h13 presentes nos prints não localizados.
- Oito páginas do PDF renderizadas e inspecionadas visualmente em dois painéis de quatro páginas. Extração textual com falhas de acentuação; imagens usadas para conferência. Renderizador avisou substituição de fontes; não se observou corte ou sobreposição relevante nos painéis. Não foi produzido PDF novo.
- Três prints preservados no pacote e conferidos contra os arquivos temporários originais.
- Análise contém **30 pontos C** e **6 pontos L**, conferidos por contagem dos registros. Interpretações e recomendações separadas das evidências.
- Índice geral contém **uma entrada** para este pacote. Linhas anteriores não foram reescritas.
- Auditoria de copy aplicada à congruência, evidência, escopo e condições, sem reescrever o documento da cliente. Não se apresenta essa leitura como revisão independente de terceiros.
- `python -X utf8 -B 40-operacao-rotinas/ferramentas/verificar-propagacao.py`: execução final em 29/09 às 16h31, código de saída 0, resultado **✅ nada a propagar**. Árvores, referências e sincronia AGENTS/CLAUDE aprovadas. Uma tentativa anterior falhou somente ao imprimir o símbolo de resultado em cp1252; a execução UTF-8 concluiu normalmente.
- O verificador valida a estrutura geral da Governança, **não promove este pacote**. Atualizações canônicas seguem pendentes do rito de integração.
- Não houve envio à cliente/Jane, aceite comercial, alteração de preço, publicação, ativação de tráfego, atualização de campanhas ou modificação dos originais.

## Inventário do pacote

- ANALISE-E-DESTILACAO.md — análise, evidências e auditoria.
- PROPAGACAO-2026-09-29.md — adendos por destino com natureza e gates.
- VALIDACAO.md — este registro.
- FONTES-SHA256.json — integridade das fontes.
- TRANSCRICOES-CONSOLIDADAS.md — corpus textual preservado.
- METRICAS-VOZ.json — contagens mecânicas sobre os cinco áudios de Victor.
- PDF-TEXTO-EXTRAIDO.md — extração auxiliar, não autoridade sobre grafia visual.
- pdf-pagina-1.png a pdf-pagina-8.png; contato-1.png e contato-2.png — renderização de inspeção.
- print-1.png a print-3.png — capturas fornecidas.
- preparar.py — script de preparação rastreável; não reexecutar sem considerar sobrescrita do baseline e derivados.
