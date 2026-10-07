# Integração dos métodos de criativos — handoff para Claude

> Elaborado em 18/09/2026 · Status: plano de integração, não executado.
> Pedido: criar os métodos em isolamento; o Claude fará a revisão e promoção posteriormente.
> Raiz de todos os caminhos canônicos abaixo: `C:/Users/zioni/Organizacional/01 - Continuum/00 - Local/01 - Governança/`.
> Pasta deste pacote: `900-criação-implementação-victor/criativos/execução Codex/`.

> Revisão de arquitetura em 18/09/2026: o pacote passa a ter três métodos. Empilhamento de Hooks é procedimento próprio e central no conteúdo F2; lateralização é uma de suas aplicações. Esta revisão substitui a recomendação inicial de mantê-lo apenas como técnica subordinada.

## 1. Pacote e destinos

| Arquivo entregue nesta pasta | Destino canônico proposto | Papel |
|---|---|---|
| `METODO-CONSTRUCAO-DE-CRIATIVOS-DR.md` | `100-métodos/METODO-CONSTRUCAO-DE-CRIATIVOS-DR.md` | Construção de anúncio por função dos elementos |
| `METODO-EMPILHAMENTO-DE-HOOKS.md` | `100-métodos/METODO-EMPILHAMENTO-DE-HOOKS.md` | Arquitetura de aberturas com entradas sucessivas de atenção |
| `METODO-LATERALIZACAO-DE-CRIATIVOS.md` | `100-métodos/METODO-LATERALIZACAO-DE-CRIATIVOS.md` | Iteração sobre base documentada e aprendizagem de componentes |
| `INTEGRACAO-E-ROTEAMENTOS-PARA-CLAUDE.md` | Documento de trabalho; não precisa virar método | Plano de promoção, alterações e verificações |

Os métodos são propostas operacionais completas. Sua promoção estabelece uso no sistema; não transforma os relatos de Felipe Nonino em resultados validados por nós. Preservar autoria, distinção fonte/extensão e limites de evidência.

## 2. Arquitetura e autoridade

```text
Direct Response — princípios
  ├─ Construção de Criativos DR — roteiro e correspondência com destino
  │    ├─ Estrutura Invisível — funções e sequência
  │    ├─ Pontos Lógicos — argumento de mecanismo
  │    └─ Skill de copy — escrita, voz, procedência e revisão
  ├─ Empilhamento de Hooks — arquitetura de abertura; usado por Construção e Lateralização
  └─ Lateralização — hipótese, componentes e aprendizagem
       └─ Tráfego Pago + plano da conta — teste, verba e decisão de mídia
```

Benchmarking fornece referências; arqueologia de ICP fornece a fala do público. Um não substitui o outro. Funil de VSL governa a VSL e seu funil, não é porta obrigatória para todo anúncio. O circuito de página continua sendo a entrada quando o pedido inclui construir uma página.

**Propriedade das regras:**

- Princípios e prova: Direct Response.
- Estrutura de anúncio deste modelo: Construção de Criativos DR.
- Arquitetura da abertura composta, ordem e função dos hooks: Empilhamento de Hooks.
- Parentesco, hipótese e classificação da variação: Lateralização.
- Proporção 70/30, critérios de vencedor, gasto e escala: Tráfego Pago e plano da conta.
- Voz, banco de léxico, revisão e anti-slop: skill de copy e fontes do cliente.
- Fatos comerciais: fontes canônicas do cliente; lacunas não são preenchidas pela modelagem.
- Roteamento de arquivos da Governança: kernel do projeto; não embutir caminhos específicos nas skills portáteis.

## 3. Roteador proposto para o kernel — texto para integração

Na seção §6 do `CLAUDE.md`, inserir ou consolidar as linhas abaixo. Usar caminhos completos relativos à Governança para eliminar ambiguidade com ponteiros antigos.

| Sinal do pedido | Carregar / decidir |
|---|---|
| Anúncio DR, criativo para quiz/VSL/página/WhatsApp, gancho de conteúdo, mecanismo do problema/solução em anúncio, CTA com valor | `100-métodos/METODO-CONSTRUCAO-DE-CRIATIVOS-DR.md` + skill de copy + voz e léxico do cliente. Para mídia: também matriz §4 e gates do `100-métodos/METODO-TRAFEGO-PAGO.md`. Pontos Lógicos no bloco de mecanismo. |
| Empilhar hooks/ganchos, combinar entradas, construir abertura composta, auditar sequência de hooks | `100-métodos/METODO-EMPILHAMENTO-DE-HOOKS.md` + skill de copy + fontes de público e voz. Peça nova não exige vencedor; derivação de base vencedora chama também Lateralização. Auditoria consulta fontes e contagens sem produzir copy automaticamente. |
| Lateralizar anúncio, variações de vencedor, reaproveitar gancho de uma base, renovar criativo validado | `100-métodos/METODO-LATERALIZACAO-DE-CRIATIVOS.md` + evidência da base + plano da conta + Tráfego Pago. Nova redação também passa por Construção de Criativos DR quando esse modelo for aplicável e pela skill de copy. Sem vencedor, reclassificar como exploração. |
| Anúncio retém mas não vende, hook rate alto sem resultado, queda de conversão ou fadiga | Diagnóstico de Tráfego Pago primeiro, com dados do funil. Acionar lateralização somente se houver hipótese pertinente sobre componente e base elegível. Não presumir que gancho é a causa. |
| Reels orgânico, conteúdo educativo, carrossel editorial ou linha editorial | Manter módulo 06 da skill, voz e léxico. Os três métodos não entram automaticamente por conter a palavra “criativo”. |
| Analisar anúncio de concorrente | Benchmarking + módulos pertinentes da skill, inclusive 08 quando acionado. Usar Construção para marcar elementos se aplicável. Referência externa não vira vencedor da nossa conta. |

### 3.1 Árvore de copy — §6.1

Acrescentar um item específico, evitando absorver conteúdo orgânico:

> **Criativo de resposta direta:** classificar ato de conversão e destino; aplicar `100-métodos/METODO-CONSTRUCAO-DE-CRIATIVOS-DR.md` quando o modelo servir ao anúncio. Carregar skill de copy, módulos 00, 01, 02, 03 e 04; adicionar 06 para execução em vídeo, 08 quando o gatilho de reenquadre ocorrer, voz e banco de léxico do cliente. Mecanismo chama Pontos Lógicos. Abertura composta chama `100-métodos/METODO-EMPILHAMENTO-DE-HOOKS.md`, inclusive em peça nova. Derivação de vencedor chama também `100-métodos/METODO-LATERALIZACAO-DE-CRIATIVOS.md`. A matriz deve distinguir conceito novo de variação de execução.

Preservar os vetos de procedência, alçada de estrutura e pilares aplicáveis. Não exigir o circuito inteiro de página quando só o anúncio está sendo produzido; acioná-lo se o destino precisar ser criado ou reestruturado.

### 3.2 CLAUDE.md e AGENTS.md

Ambos os arquivos físicos foram localizados e contêm roteadores semelhantes neste snapshot. O texto de governança também declara separação de papéis entre decisor e executor. **Antes da promoção, Claude deve resolver qual kernel governa cada agente no estado vigente.**

Proposta: colocar o roteamento de decisão em `CLAUDE.md`; se `AGENTS.md` continuar contendo o roteador por decisão vigente, alinhar apenas as entradas pertinentes. Se for contrato exclusivo de execução, apontar para o contrato aprovado e os métodos necessários, sem copiar toda a autoridade de decisão. Não sincronizar os dois arquivos integralmente. Preservar literalmente o isolamento de escrita do Codex.

## 4. Pontos de integração por arquivo

Os títulos/seções abaixo são âncoras verificadas no snapshot. Reconfirmar antes de editar, pois números de linha podem mudar.

| Destino | Onde | Alteração proposta |
|---|---|---|
| `100-métodos/METODO-CONSTRUCAO-DE-CRIATIVOS-DR.md` | §4.1-bis, passo 6, ficha e gate | Promover versão 1.1 deste pacote; chamar Empilhamento para abertura composta, sem exigir vencedor. |
| `100-métodos/METODO-LATERALIZACAO-DE-CRIATIVOS.md` | §6 | Promover versão 1.2 deste pacote; manter somente aplicação do método próprio a uma base documentada. |
| `100-métodos/METODO-DIRECT-RESPONSE.md` | §0, tabela dos métodos; conexão com os galhos | Acrescentar os três procedimentos e seus papéis. Usar data real de promoção, preservando data de elaboração; não repetir princípios nem estatísticas. |
| `100-métodos/METODO-TRAFEGO-PAGO.md` | §4.1 Matriz de criativos | Acrescentar ID da base, tipo de teste, componente e hipótese. Separar captura inicial de gancho completo. Conceitos distintos e versões do mesmo conceito têm contagens separadas. |
| Mesmo arquivo | §4.2 Regra de portfólio 70/30 | Preservar como fonte única da proporção; vincular o novo método de lateralização. Esclarecer produção versus verba e conta sem vencedor. |
| Mesmo arquivo | §4.3 Produção e compliance | Apontar à skill atual e ao método de construção; preservar voz do cliente e nomenclatura. Substituir referências legadas de copy somente nesse trecho pertinente. |
| Mesmo arquivo | §4.4 Fadiga e reposição | Lateralização como possível rota de reposição após diagnóstico; não declarar que qualquer troca superficial resolve fadiga. |
| Mesmo arquivo | §7.3 Regras de decisão | Encaminhar vencedor elegível à lateralização. Não alterar limiares, janelas ou verbas como efeito colateral desta integração. |
| `10-skills/gestao-trafego.skill.md` | Regra 4 | Atualizar resumo da produção e distinguir exploração/iteração. Corrigir ponteiro para copy atual. Referenciar o método completo como autoridade de mídia; roteamento específico fica no kernel. |
| `10-skills/copywriter-senior-continuum/referencias/03-escrita-e-formatos.md` | Hooks; Corpo; CTA; Anúncios (tráfego frio) | Introduzir captura versus gancho completo e seção genérica de empilhamento: grupo de hooks, elementos internos, ordem, expectativas abertas e passagem ao corpo; usar o método próprio como fonte de integração. Introduzir CTA com entrega real e prova com atribuição correta. Delimitar “corpo curto” ao formato curto. Diferenciar teste de conceito e teste de componente. |
| `10-skills/copywriter-senior-continuum/referencias/06-conteudo-e-roteiro.md` | §11.3 e gate §11.6 | Manter conflito antes de contexto; permitir mesmo pivô em iteração declarada, exigindo hipótese e referência de base. Não tratar como ângulo novo. Preservar a regra de ângulos distintos para rodadas de exploração. |
| `10-skills/copywriter-senior-continuum/SKILL.md` | Entregáveis típicos / contrato de entrada e saída | Acrescentar possibilidade de roteiro marcado por função e ficha de variação com evidência da base. Não duplicar o roteador de arquivos da Governança na skill portátil. |
| `100-métodos/METODO-FUNIL-DE-VSL.md` | §8.2 Ordem de otimização | Acrescentar ponte para diagnóstico do anúncio, construção e lateralização quando o gargalo estiver na aquisição. Manter o método da VSL como autoridade do vídeo de destino. |
| `100-métodos/METODO-ESTRUTURA-INVISIVEL.md` | Conexões ou aplicação por formato | Opcional: apontar o anúncio de seis funções como aplicação, atribuindo a fonte e sem torná-lo sequência universal. |
| `100-métodos/METODO-PONTOS-LOGICOS.md` | Conexões ou aplicação por formato | Opcional: apontar uso no mecanismo do anúncio; não transportar número fixo de elos da VSL. |
| `100-métodos/METODO-BENCHMARKING.md` | Sem alteração obrigatória | Consumido como dependência. Referência de terceiros não passa a ser prova própria pela promoção deste pacote. |

## 5. Conflitos que precisam ser resolvidos na mesma promoção

### A. “Teste real é variar o pivô” × lateralização

Ocorrência: módulo 06, §11.3; regra de variar pivô no módulo 03; exigência de ângulo diferente no gate §11.6.

Texto substitutivo proposto para a regra geral:

> **Teste de conceito altera o ângulo/pivô; teste de execução preserva o conceito e altera um componente com hipótese explícita. Ambos podem gerar aprendizado, mas não são contados como a mesma coisa. Variação sem hipótese é produção sem pergunta definida.**

No gate, trocar a exigência incondicional de ângulo distinto por:

> **Tipo de rodada declarado: exploração exige conceitos distintos; lateralização exige base documentada, componente identificado e hipótese. Variações do mesmo pivô não contam como novos ângulos.**

### B. “Corpo curto” × gancho de conteúdo

Ocorrência: módulo 03, Anúncios (tráfego frio).

Proposta:

> **Anúncio curto comprime o argumento. Anúncio com gancho de conteúdo pode desenvolver a entrada e os mecanismos quando isso serve à ação e ao destino. A duração é uma decisão de formato e uma hipótese de teste; o roteiro deve justificar cada trecho e preservar a progressão.**

### C. “Primeiros três segundos” × gancho completo

Ocorrência: Tráfego Pago §4.1 e orientações de abertura da skill.

Proposta:

> **Os primeiros segundos cumprem a captura inicial. O gancho completo sustenta interesse até o corpo, podendo ultrapassar essa abertura. Medir captura e avanço quando disponíveis, sem converter três segundos ou um minuto em duração obrigatória.**

Isso preserva “conflito antes de contexto”; não autoriza introduções longas sem função.

### D. Skill portátil × método da Governança

Incorporar distinções genéricas nos módulos da skill. Manter os caminhos locais, condições de carga e associação entre métodos no kernel. Evitar uma skill que só funciona neste repositório.

### E. 70/30 e fontes divergentes

Há regra 70/30 vigente em Tráfego Pago. Não criar outra autoridade nos novos arquivos. Outros resumos de mídia possuem diferenças de diagnóstico e referências antigas: conferir o método vigente e o plano, sem promover uma revisão ampla de thresholds ou alegações de plataforma como parte deste pacote.

## 6. Fonte instalável e cópias de skills

Existe `900-criação-implementação-victor/copywriter-senior-continuum/`, além da versão em `10-skills/`. O kernel descreve a primeira como fonte instalável.

Durante a promoção, Claude deve comparar as versões e definir a fonte de distribuição. Se alterar conceitos genéricos nos módulos 03/06 ou no contrato da skill, atualizar a origem de distribuição escolhida para impedir regressão em instalação futura. Não sobrescrever uma versão por outra sem comparação. Reempacotar ZIP apenas se esse for o procedimento de distribuição vigente; não editar backups históricos.

Não há autorização neste pacote para instalar skills em diretórios globais, atualizar plugins, sincronizar cópias ou publicar campanhas.

## 7. Ordem de promoção sugerida

1. Ler os três métodos e conferir F1/F2; manter distinções de autoria e evidência.
2. Comparar o estado atual dos destinos e verificar se já existem arquivos homônimos.
3. Criar ou integrar os métodos nos destinos canônicos, registrando data real de promoção e mantendo histórico da proposta.
4. Resolver os conflitos A–D nos módulos e na matriz de criativos; uma simples inclusão no roteador é insuficiente.
5. Integrar conexões obrigatórias em Direct Response, Tráfego Pago e skill de mídia; adicionar a ponte da VSL.
6. Atualizar o roteador de decisão e a árvore de copy, respeitando o papel vigente de cada kernel.
7. Alinhar a fonte instalável da skill conforme a decisão de distribuição, sem sincronização cega.
8. Executar os cenários de validação abaixo.
9. Registrar a promoção conforme o rito vigente, citando arquivos alterados, decisões e pendências. Registro sugerido: integração dos três procedimentos; não declarar eficácia comercial validada.

## 8. Validação de roteamento após promoção

| Pedido de teste | Resultado esperado |
|---|---|
| “Crie um anúncio para um quiz” | Construção + copy + fatos/voz/léxico + matriz se mídia. CTA promete apenas a entrega real do quiz. |
| “Faça um Reels educativo” | Módulo 06 e fontes do cliente; não obrigar mecanismos, depoimento e dois CTAs de venda. |
| “Faça variações deste anúncio que vende” | Lateralização; pedir/localizar evidência da base; mesmo pivô permitido; hipótese por versão. |
| “O hook rate está alto, mas não vende” | Diagnóstico do funil; não rotular base como vencedora nem concluir que basta empilhar. |
| “Conta nova: use 70% de vencedores” | Declarar ausência de base; exploração, sem fingir histórico e sem converter proporção em verba. |
| “Empilhe três ganchos desconectados” | Método de Empilhamento: conferir funções e compatibilidade com o corpo; três não é regra universal. |
| “Crie uma abertura empilhada para uma peça nova” | Empilhamento + skill e fontes; ausência de vencedor não bloqueia construção. |
| “Audite os hooks desse vídeo” | Marcar grupos, elementos, palavras, ponte e reganchos; não duplicar contagens nem confundir CTAs ensinados com os executados. |
| “Crie a página e o anúncio” | Circuito de página para destino; método de construção para anúncio, com correspondência entre ambos. |
| “Este concorrente tem um anúncio bonito; vamos lateralizar” | Benchmarking e evidência; não confundir referência externa com vencedor da conta. |
| “Escreva o mecanismo sem prova e depois arrumamos” | Bloqueio da afirmação sem evidência; alçada de estrutura não autoriza inventar fato. |

Gate final: links e destinos resolvem; não há regra que proíba toda iteração de mesmo pivô; 70/30 tem uma fonte; bloqueios de procedência permanecem; nenhuma proposta foi marcada como validação comercial.

## 9. Histórico de procedência — arquivo (2), em 18/09/2026

> Registro histórico anterior à revisão de arquitetura do §11; versões e decisão de não criar terceiro método abaixo foram superadas pelo pedido explícito do usuário de dar ao empilhamento um método próprio.

O usuário acrescentou `900-criação-implementação-victor/criativos/Video by felipenonino (2).txt`. Leitura integral, comparação byte a byte e SHA-256 confirmaram que é cópia exata de `Video by felipenonino.txt` (F2): 2.992 bytes; hash `367B350EB68377AA4A79BDAEF358BF9A0B71F25DA140F209D52B91B971F21D6B`.

**Destino adequado:** Método de Lateralização, atualizado para versão 1.1, §2.1. Seus ensinamentos já estavam integrados nos §§3–8. A revisão acrescenta identificação da cópia, mapa de cobertura e ponte para a auditoria estrutural V1. O método de construção permanece na versão 1.0; não há conteúdo novo que exija alterar sua estrutura.

**Roteamento:** preservado o de lateralizar, reaproveitar gancho e empilhar ganchos (§3 deste handoff). Não criar um terceiro método nem uma rota para o sufixo do nome do arquivo. Na promoção, preservar F2 como identificação do conteúdo e listar `(2).txt` como cópia; não contar duas referências ou duas validações independentes.

**Validação desta revisão:** conteúdo integral comparado; identidade dos bytes e dos hashes confirmada; cobertura dos ensinamentos conferida nos pontos indicados. Somente o método de lateralização e este handoff foram alterados dentro de `execução Codex`; fontes, auditoria anterior e métodos canônicos preservados.

## 10. Registro da criação inicial do pacote

**Fontes utilizadas:** F1 e F2 na íntegra; análise anterior solicitada pelo usuário; kernels e contexto de governança; trechos pertinentes de Direct Response, Tráfego Pago, Benchmarking, Estrutura Invisível, Pontos Lógicos, Funil de VSL, skill de gestão de tráfego e skill de copy, especialmente módulos 03 e 06.

**Arquivos criados:** os três arquivos deste pacote. Nenhuma cópia integral de fonte foi necessária. Nenhum arquivo canônico foi alterado; nenhum registro em STATUS/DECISOES foi promovido.

**Verificação de conteúdo:** separação entre ensino da fonte e extensões nossas; destinos e âncoras de integração identificados; conflitos de mesmo pivô, duração e 70/30 tratados; fichas, gates, critérios de inconclusão e roteamento de orgânico versus pago incluídos.

**Verificação de execução realizada:** três arquivos presentes, UTF-8 estrito válido, sem marcadores de patch e com caminhos absolutos contidos na pasta literal `execução Codex`. Destinos canônicos propostos ainda inexistentes na conferência. Data local confirmada em 18/09/2026 (America/Sao_Paulo). Hashes SHA-256 das fontes lidas: F1 `61B7B20BBCFD82B8EE909CEE10D9A933DAEB120E292D670792D5FB11B3179A0F`; F2 `367B350EB68377AA4A79BDAEF358BF9A0B71F25DA140F209D52B91B971F21D6B`. Hashes identificam o snapshot; não constituem comparação com baseline anterior. Essa conferência é de artefatos e não valida desempenho comercial dos métodos.

## 11. Revisão de arquitetura — centralidade do empilhamento, em 18/09/2026

Por correção explícita do usuário, o ensinamento central de F2 recebeu método próprio: `METODO-EMPILHAMENTO-DE-HOOKS.md` v1.0. A duplicação do arquivo (2) continua verdadeira, mas não justificava reduzir a importância do procedimento ensinado. Não há nova fonte independente; há melhor sistematização da mesma fonte.

**Arquivos atuais para promoção:** Empilhamento v1.0; Construção v1.1; Lateralização v1.2. Os novos roteamentos e a matriz deste documento já refletem essa arquitetura. Os registros de criação inicial permanecem como histórico, não como inventário atual.

**Validações para Claude:** pedido de empilhamento deve chegar ao método próprio sem passar obrigatoriamente por Lateralização; peça nova não exige vencedor; teste sobre vencedor chama ambos; contagens de hooks e elementos não se sobrepõem; 7/20/36 palavras descrevem a referência, não uma fórmula normativa; adicionar o terceiro método ao inventário de Direct Response.

**Escopo desta revisão:** criado um método e alterados os dois métodos consumidores e este handoff, todos sob `execução Codex`. Fontes TXT, auditoria anterior e arquivos canônicos permanecem preservados. Conferir existência, UTF-8, referências cruzadas e versões antes da promoção; nenhuma eficácia comercial foi validada nesta elaboração.