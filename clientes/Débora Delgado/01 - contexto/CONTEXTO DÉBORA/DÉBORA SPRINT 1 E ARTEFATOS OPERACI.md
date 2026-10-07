# DÉBORA: SPRINT 1 E ARTEFATOS OPERACIONAIS

## Função deste arquivo

Este arquivo orienta a criação dos artefatos operacionais da Sprint 1 da Débora Delgado.

Usar este documento para criar, revisar ou expandir:

- frameworks operacionais
- artefatos HTML
- matriz de ICP
- arquitetura de oferta
- funil de consciência
- protocolo comercial
- sistema de conteúdo
- cockpit da sprint

---

## Contexto da Sprint 1

A Débora já fechou a assessoria com a Continuum.

A call de kickoff já aconteceu.

Agora a fase é execução.

A Sprint 1 existe para transformar profundidade em clareza operacional.

O foco não é criar apresentação.

O foco é criar infraestrutura empresarial para uso diário.

---

## Objetivo da Sprint 1

Criar 6 artefatos operacionais que ajudem Débora a:

- pensar com mais clareza
- decidir com menos ambiguidade
- classificar leads
- reconhecer ICP e anti-ICP
- estruturar a oferta da mentoria
- organizar produtos de entrada
- conduzir qualificação comercial
- orientar conteúdo
- acompanhar evolução da sprint
- reduzir carga operacional

---

## First Value da Sprint 1

O first value é:

Matriz de ICP + Consciência + Prontidão.

Essa matriz deve permitir que Débora decida:

- quem está pronto para a mentoria principal
- quem precisa amadurecer
- quem deve ir para produto inicial
- quem não é aderente agora
- qual próxima ação tomar em cada caso

---

## Gargalo dominante

O gargalo dominante é a falta de critério objetivo para decidir:

- quem é ICP
- quem é anti-ICP
- quem está pronto
- quem está apenas interessado
- quem precisa ser nutrido
- quem não deve entrar na mentoria
- qual produto ou experiência oferecer antes da mentoria

Sem esse critério, Débora tende a operar por feeling.

Isso aumenta risco de:

- venda desalinhada
- carga operacional excessiva
- clientes resistentes
- comunicação ampla demais
- oferta pouco nítida
- baixa previsibilidade
- desgaste na entrega

---

## Maior alavanca

A maior alavanca é transformar a profundidade da Débora em frameworks operacionais.

Ou seja:

- sair de conceitos soltos
- criar critérios de decisão
- organizar níveis de consciência
- definir encaminhamentos
- separar mentoria principal de produtos iniciais
- criar linguagem simples para algo profundo
- reduzir dependência do improviso

---

## Natureza dos artefatos

Os artefatos devem ser frameworks.

Não chamar de:

- apresentação
- manual
- apostila
- ebook
- cartilha
- material de apoio

Chamar de:

- sistema
- framework
- blueprint
- matriz
- protocolo
- cockpit
- arquitetura
- régua
- score
- mapa operacional

---

## Função dos artefatos

Cada artefato deve responder:

1. Para que existe?
2. Quando usar?
3. Quem usa?
4. Qual input precisa?
5. Qual decisão permite tomar?
6. Qual output entrega?
7. Qual KPI acompanha?
8. Qual risco reduz?
9. Qual próxima ação ativa?

---

## Requisito técnico dos artefatos HTML

Cada artefato deve ser 1 arquivo HTML completo e autônomo.

Obrigatório:

- HTML completo
- CSS interno em `<style>`
- JS interno em `<script>`, apenas se necessário
- wrapper único `.debora-artifact`
- CSS escopado dentro de `.debora-artifact`
- nenhuma dependência externa obrigatória
- nenhum arquivo `/assets`
- nenhum CSS externo
- nenhum JS externo
- nenhum framework
- sem React
- sem Tailwind CDN
- sem bibliotecas pesadas
- responsivo
- pronto para colar no WordPress via bloco HTML personalizado

---

## Regras para WordPress

Cada artefato precisa funcionar quando colado no WordPress.

Regras:

- não estilizar `body`
- não estilizar `html`
- não estilizar `a` globalmente
- não estilizar `button` globalmente
- não usar reset global agressivo
- não depender de imagens externas
- não depender de fontes externas
- não depender de arquivos locais
- não criar conflito com o tema do WordPress
- usar classes escopadas dentro de `.debora-artifact`

---

## Padrão visual

Estética desejada:

- premium
- executiva
- minimalista
- operacional
- sofisticada
- SaaS enterprise
- consultoria estratégica
- alta clareza visual

Evitar:

- visual de landing page
- visual de aula
- visual de apresentação
- visual decorativo
- excesso de blocos grandes
- excesso de texto corrido
- elementos sem função operacional

Priorizar:

- cards de decisão
- tabelas
- matrizes
- scores
- checklists
- blocos de risco
- blocos de próxima ação
- régua de consciência
- status operacional
- campos visuais simulados
- bloco "se acontecer X, faça Y"

---

## Estrutura obrigatória em todos os artefatos

Cada artefato deve conter:

1. Cabeçalho operacional
2. Decisão executiva
3. Navegação interna simples
4. Governança operacional
5. Contexto do problema
6. Estrutura principal do framework
7. Matriz, régua, score, checklist ou protocolo
8. Exemplos práticos
9. Erros comuns
10. Bloco "se acontecer X, faça Y"
11. Alertas de risco
12. Próxima ação
13. KPI associado
14. Critério de aprovação
15. Rodapé com versão

---

## Governança obrigatória

Cada artefato deve incluir uma área de governança com:

- nome do artefato
- sprint
- status
- owner Continuum
- owner Débora
- entrada necessária
- output esperado
- decisão que permite tomar
- frequência de uso
- KPI associado
- risco se não usar
- critério de aprovação
- próxima revisão

---

## Os 6 artefatos da Sprint 1

Criar estes arquivos:

```txt
01-sistema-icp-prontidao.html
02-arquitetura-oferta-mentoria.html
03-funil-consciencia-produto-inicial.html
04-protocolo-qualificacao-comercial.html
05-sistema-conteudo-posicionamento.html
06-cockpit-operacional-sprint.html