CLAUDE

## Projeto

Sprint 1 da assessoria Débora Delgado.

## Contexto

A Débora Delgado fechou assessoria com a Continuum AI Systems.

A call de kickoff já aconteceu.

Agora estamos em fase de execução.

O objetivo da Sprint 1 é criar infraestrutura operacional para clareza estratégica, qualificação, oferta, conteúdo e operação diária.

Meta macro:
validar uma máquina de receita previsível baseada em mentoria, com escalabilidade progressiva e menor carga operacional.

Meta financeira inicial:
R$20k/mês ou mais, com operação simplificada.

Gargalo dominante:
falta de clareza objetiva de ICP, prontidão, oferta validável e critério comercial.

Maior alavanca:
transformar profundidade em critério operacional.

First Value:
Débora conseguir decidir, sem peso emocional:
- quem entra na mentoria avançada
- quem precisa amadurecer
- quem deve ir para produto inicial
- quem não é aderente agora
- qual próxima ação tomar em cada caso

## Objetivo dos artefatos

Criar 6 artefatos HTML autônomos.

Cada artefato deve funcionar como uma página completa para WordPress, colável diretamente em bloco HTML personalizado.

O foco não é apresentação de reunião.

O foco é clareza operacional diária.

Os artefatos devem funcionar como infraestrutura empresarial da Débora.

Cada artefato deve permitir:
- consultar rapidamente
- tomar decisão
- classificar leads
- validar oferta
- operar conteúdo
- acompanhar evolução
- reduzir improviso
- reduzir carga operacional
- aumentar previsibilidade

## Regra técnica principal

Cada artefato deve ser 1 arquivo HTML completo e autônomo.

Cada arquivo deve conter:
- HTML completo
- CSS interno em `<style>`
- JS interno em `<script>`, apenas se necessário
- wrapper único `.debora-artifact`
- CSS totalmente escopado dentro de `.debora-artifact`
- nenhuma dependência externa obrigatória
- nenhum arquivo `/assets`
- nenhum CSS externo
- nenhum JS externo
- nenhum link relativo obrigatório
- nenhum framework
- sem React
- sem Tailwind CDN
- sem bibliotecas pesadas

O arquivo deve abrir sozinho no navegador e também funcionar quando colado no WordPress.

## Requisitos para WordPress

Cada página precisa ser segura para colagem direta.

Regras:
- não estilizar `body`, `html`, `a`, `button` globalmente
- não usar reset global agressivo
- não depender de assets externos
- não usar scripts complexos
- não criar layout que quebre o tema
- usar nomes de classes prefixados ou contidos dentro de `.debora-artifact`
- garantir responsividade mobile
- garantir contraste e legibilidade

## Arquivos HTML a criar

Criar estes 6 arquivos:

```txt
01-sistema-icp-prontidao.html
02-arquitetura-oferta-mentoria.html
03-funil-consciencia-produto-inicial.html
04-protocolo-qualificacao-comercial.html
05-sistema-conteudo-posicionamento.html
06-cockpit-operacional-sprint.html

Não criar index.

Não criar arquivos auxiliares.

Não criar pasta assets.

Natureza dos artefatos

Cada artefato deve ser um sistema operacional de uso diário, não uma peça estética.

Evitar:

aparência de apresentação
excesso de texto passivo
seções decorativas
copy de venda exagerada
visual de landing page
visual de aula
linguagem de apostila
linguagem terapêutica excessiva
diagnóstico clínico
promessa de cura
promessa de resultado garantido

Priorizar:

matrizes
scores
checklists
protocolos
decisões condicionais
campos simulados para preenchimento
blocos "se acontecer X, faça Y"
tabela de critérios
status operacional
alertas de risco
próxima ação
frequência de uso
KPI
critérios de aprovação
Padrão visual

Estética:

premium
executiva
minimalista
operacional
sofisticada
C-Level
SaaS enterprise
consultoria estratégica

Interface:

topo com decisão executiva
navegação interna curta
cards densos, mas legíveis
matrizes claras
tabelas práticas
checklists visuais
blocos de decisão destacados
bloco de risco operacional
bloco de próxima ação
bloco de governança
rodapé com versão

Paleta:

fundo claro sofisticado
preto suave
branco
cinza quente
azul profundo
areia ou dourado discreto para destaques

Não usar emojis.

Linguagem

Usar português do Brasil.

Tom:

estratégico
direto
humano
preciso
operacional

Usar termos:

nossa operação
nosso sistema
critério
decisão
prontidão
maturidade
delimitação
clareza
congruência
valor percebido
first value
próxima ação
risco operacional
score
status
validação

Não usar:

terapia como promessa central
cura
milagre
desbloqueio absoluto
transformação instantânea
qualquer pessoa
serve para todos
resultado garantido
linguagem espiritual como eixo comercial

Não chamar os artefatos de:

apostila
ebook
cartilha
material de apoio
apresentação

Chamar de:

sistema
framework
blueprint
matriz
cockpit
protocolo
régua
score
arquitetura
mapa operacional
Base conceitual da mentoria
Ponto A

Impacto sem congruência.

O mentorado entrega, é competente e gera impacto, mas:

paga alto custo emocional
vive identidade desalinhada
sente o corpo acusar
sofre nas relações
vive em manutenção
perdeu o próprio porquê
Ponto B

Impacto com congruência.

O mentorado aprende a:

reconhecer o impacto natural que já gera
parar de se adaptar ao que o drena
escolher onde e como contribuir
sustentar limites e direção
se posicionar
receber por coerência
Síntese da mentoria

A mentoria ajuda líderes a realinharem o impacto que já geram, para viver, liderar, trabalhar e receber sem se trair.

Promessa base

Impacto com congruência:
viver, liderar, trabalhar e receber sem se trair.

Dores centrais
Gera impacto, mas não sabe nomear o próprio impacto natural.
Gera muito impacto, mas não reconhece nem sustenta o valor dele.
Sabe que tem padrões limitantes, mas ainda é governado por eles.
Prioriza o impacto para fora e abandona a própria sustentação.
Tem uma rotina que sustenta entregas, mas não sustenta a própria vida.
Pilares da mentoria
Pilar 1: Automaestria

Não é mudar quem a pessoa é.
É parar de ser governada pelo que não percebe.

Trabalha:

padrão do Eneagrama
pensamentos recorrentes
emoções frequentes
emoções evitadas
dons e talentos
história pessoal
experiências de entusiasmo
interesses genuínos
valores fundamentais
sequência instintiva
antivalores
criança interior
diálogo interno
autoimagem
crenças herdadas
Pilar 2: Dinâmica dos Relacionamentos

A pessoa aprende a gerar impacto humano sem se trair.

Trabalha:

relações como espelho
julgamentos como informação interna
expectativas invisíveis
papéis ocupados nas relações
limites
comunicação
autorrespeito
respostas conscientes
Pilar 3: Química do Entusiasmo

Criar condições internas para energia vital circular.

Trabalha:

interesses genuínos
corpo como bússola
sistema nervoso regulado
entusiasmo verdadeiro
atividades que expandem
atividades que drenam
rotina que sustenta vida, decisão e presença
Conteúdos existentes da Débora
Crenças sobre trabalho

Temas:

trabalho não precisa ser sofrimento
trabalho é troca de valor
dinheiro é energia neutra de troca
valor depende de para quem se oferece
habilidades naturais, história e conhecimentos já geram valor
esforço não deve ser confundido com merecimento
tempo não vira dinheiro sem vontade, conhecimento e valor
Inconsciente e objetivos travados

Temas:

objetivos antigos não travam apenas por fatores externos
existe camada inconsciente por trás das escolhas
mecanismos de defesa protegem dores antigas
padrões são estratégias adaptativas
trazer o invisível para consciência permite novas escolhas
Encontro sobre padrões

Temas:

mentoria entrega caminho, processo e autonomia
padrões moldam a realidade
experiência não é igual a interpretação
mudar interpretação muda emoção, reação e experiência
objetivo da mentoria é automaestria, não dependência da mentora
Encontro sobre metas com prosperidade

Temas:

resultado temporário não sustenta mudança
mudança real exige novo padrão
foco no resultado ativa lente de escassez
foco no processo ativa lente de prosperidade
metas precisam de propósito, hábito e recompensa
ser para ter
Curso de personalidade

Estrutura:

introdução ao Eneagrama
identificação correta da personalidade
centros de inteligência
personalidades práticas
personalidades emocionais
personalidades racionais
comparações para quem está em dúvida
subtipos
arrependimentos por não trabalhar a personalidade
próximos passos de autoconhecimento
Mapa de Valor Autêntico

Elementos:

Ikigai
menu do entusiasmo
linha da vida
realizações e frustrações
competências
criança, adolescente e adulto
hábitos naturais
jogo do espelho
parceiros-chave
custos objetivos e subjetivos
antivalores
Estrutura obrigatória em todos os artefatos

Cada HTML deve conter:

Cabeçalho operacional
Decisão executiva do artefato
Navegação interna simples
Bloco de governança
Contexto do problema
Estrutura principal do sistema
Matriz, régua, score, checklist ou protocolo
Exemplos práticos
Erros comuns
Bloco "se acontecer X, faça Y"
Alertas de risco
Próxima ação
KPI associado
Critério de aprovação
Rodapé com versão
Governança obrigatória em todos os artefatos

Incluir tabela ou card com:

Artefato
Sprint
Status
Owner Continuum
Owner Débora
Entrada necessária
Output esperado
Decisão que permite tomar
Frequência de uso
KPI associado
Risco se não usar
Critério de aprovação
Próxima revisão
Artefato 1: Sistema de ICP e Prontidão

Arquivo:
01-sistema-icp-prontidao.html

Objetivo:
definir quem está pronto para a mentoria avançada.

Deve conter:

ICP avançado
anti-ICP
critérios de prontidão
critérios de resistência
matriz ICP + consciência + prontidão
score de prontidão resumido
exemplos de falas do lead
decisão recomendada por perfil
erro comum na classificação
próxima ação por classificação

Decisões:

entra na mentoria avançada
amadurece antes
vai para produto inicial
não aderente agora

KPI:
taxa de leads corretamente classificados.

Artefato 2: Arquitetura da Oferta e Mentoria

Arquivo:
02-arquitetura-oferta-mentoria.html

Objetivo:
transformar profundidade em oferta clara, vendável e coerente.

Deve conter:

narrativa central
promessa principal
promessa expandida
mapa de dores e transformações
pilares da mentoria
limites da promessa
o que não prometer
frases aprovadas
frases proibidas
teste de clareza da oferta
próxima ação de validação

KPI:
clareza da oferta aprovada.

Artefato 3: Funil de Consciência e Produto Inicial

Arquivo:
03-funil-consciencia-produto-inicial.html

Objetivo:
organizar o caminho de maturidade do lead antes da mentoria avançada.

Deve conter:

régua de consciência em 5 níveis
comportamento típico por nível
linguagem do lead por nível
conteúdo indicado por nível
oferta ou experiência indicada por nível
hipótese de produto inicial prioritário
mapa de evolução do lead
pontes entre conteúdo, produto inicial e mentoria
próxima ação para leads em cada nível

KPI:
percentual de leads que evoluem de interesse para prontidão.

Artefato 4: Protocolo de Qualificação Comercial

Arquivo:
04-protocolo-qualificacao-comercial.html

Objetivo:
operar conversas comerciais com critério e reduzir venda desalinhada.

Deve conter:

perguntas de qualificação por categoria
score completo de prontidão
pesos e faixas de decisão
scripts para aprovado
scripts para amadurecer antes
scripts para produto inicial
scripts para não aderente
checklist pré-call
checklist pós-call
decisão final de encaminhamento
registro operacional da call

KPI:
taxa de conversas qualificadas com aderência ao ICP.

Artefato 5: Sistema de Conteúdo e Posicionamento

Arquivo:
05-sistema-conteudo-posicionamento.html

Objetivo:
gerar demanda qualificada com comunicação alinhada ao ICP.

Deve conter:

posicionamento curto
bio curta
bio média
frase de autoridade
descrição da mentoria
CTA qualificado
ângulos de conteúdo por tema
temas por nível de consciência
conteúdos que filtram curiosos
conteúdos que atraem prontos
checklist de coerência de conteúdo
matriz conteúdo > intenção > próximo passo

KPI:
conversas iniciadas com aderência ao ICP.

Artefato 6: Cockpit Operacional da Sprint

Arquivo:
06-cockpit-operacional-sprint.html

Objetivo:
centralizar operação diária da Sprint 1.

Deve conter:

status dos 6 artefatos
checklist diário
backlog de decisões
próximos passos
KPIs da sprint
riscos ativos
alertas de sobrecarga
decisões pendentes da Débora
decisões pendentes da Continuum
cadência de revisão
quadro de ações por prioridade
definição de pronto para cada artefato

KPI:
percentual de entregáveis validados e aplicados.

Critérios de aprovação visual

Um artefato está visualmente aprovado quando:

parece ferramenta operacional premium
não parece slide
não parece landing page
não parece aula
permite consulta rápida
destaca a próxima decisão
reduz esforço cognitivo
funciona em mobile e desktop
pode ser colado no WordPress sem quebrar
Critérios de aprovação operacional

Um artefato está operacionalmente aprovado quando responde:

para que existe
quando usar
quem usa
qual input precisa
qual decisão permite
qual output entrega
qual KPI acompanha
qual risco reduz
qual próxima ação ativa
Execução esperada

Ao receber uma task:

leia o CLAUDE.md
execute apenas o escopo da task
não reabra estratégia
não crie arquivos extras
não explique demais
não pergunte confirmação
não use assets
não crie index
entregue arquivos HTML autônomos

Resposta esperada ao final de cada task:

arquivos criados
resumo objetivo
pendências se existirem