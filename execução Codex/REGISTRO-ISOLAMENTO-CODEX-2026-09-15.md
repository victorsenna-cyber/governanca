# Registro de execução — isolamento das escritas do Codex

Verificado em: 2026-09-15T23:18:46-03:00.

## Ordem do usuário

Toda criação ou alteração feita pelo Codex deve ficar em pastas chamadas exatamente `execução Codex` ou em suas subpastas, com uma área própria por projeto. Os demais arquivos da Governança devem permanecer intactos e somente para leitura. O usuário autorizou expressamente a edição do AGENTS.md raiz para instituir essa regra.

## Implementação

- Adicionada a seção 0 ao AGENTS.md raiz, antes das demais regras, com precedência explícita para o limite de escrita do Codex.
- Definido o destino `<projeto>/execução Codex/`, a criar ou reutilizar antes da primeira escrita em cada projeto.
- Definido `Governança/execução Codex/` para trabalhos gerais.
- Exigida a cópia de qualquer fonte que precise de alteração para a área isolada, preservando o original.
- Incluídos registros, scripts, temporários, caches, logs, builds e artefatos no mesmo limite.
- Proibidas alteração, transferência, exclusão e integração automática nos originais fora da área isolada.
- Redirecionadas para registros isolados as obrigações de atualização de STATUS, DECISOES, diários e demais fontes canônicas.
- Limitada a exceção de edição do AGENTS.md raiz à instalação desta regra nesta tarefa.
- Criadas as pastas `execução Codex/` na raiz e `clientes/Débora Delgado/execução Codex/`. Para os demais projetos, a regra exige criar ou reutilizar a pasta ao iniciar trabalho com escrita.
- Mantida a pasta histórica `910 - execução Codex/` intacta, somente para leitura, sem renomeá-la.
- Criado este registro em `execução Codex/REGISTRO-ISOLAMENTO-CODEX-2026-09-15.md`.

## Gate executado

- PASSOU: o AGENTS.md atual corresponde exatamente ao anterior acrescido da seção 0; todo o restante foi preservado.
- PASSOU: CLAUDE.md intacto, SHA-256 `D9E4131E4C66A5F205A09A807C0624794D265BE8A7C6D3B89B2572A945032416`.
- PASSOU: AGENTS.md histórico intacto, SHA-256 `CAD267B66685FA74A15D3FA46B3A67E1081D492708A90E6D6F5B35E51A04D181`.
- PASSOU: as duas pastas de isolamento existem.
- SHA-256 do AGENTS.md atualizado: `E2ACF13F8CAC2C8C251412B9B737247BE76B5D956AC13C72FE92136579485E52`.

A primeira criação da pasta de Débora recebeu acesso negado. A criação foi concluída após execução com aprovação elevada; nenhum arquivo de conteúdo do projeto foi modificado.

Esta implementação estabelece instruções de conduta para o Codex. Não modifica permissões, atributos de arquivo ou ACLs do Windows. A única edição realizada fora das áreas de isolamento foi o AGENTS.md raiz, expressamente solicitado pelo usuário; este registro é novo e está na área permitida.
