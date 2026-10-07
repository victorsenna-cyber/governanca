# Auditoria de texto na voz da Bárbara

> v1.0 · 08/09/2026 · uso interno. Valida alinhamento com a evidência disponível, não aprovação da Bárbara.

## Entradas e resultado

Receber a peça, canal, objetivo, público e fatos autorizados da entrega. Se faltar dado que determina promessa ou CTA, marcar a lacuna. Não pedir nova pesquisa de voz para uma revisão simples já coberta pelo SKILL.

Entregar: **apto como rascunho / revisar / insuficiência de fonte**, trecho que motivou a decisão e correção curta. “Apto” não significa publicado, aprovado pela cliente ou comercialmente validado.

## Gate

| Verificação | Critério |
|---|---|
| Autoria | A frase será dita pela Bárbara? Se for mensagem nossa para ela, a skill não se aplica |
| Proximidade | Fala com alguém reconhecível, sem vocativo íntimo automático |
| Construção | Situação compreensível, consequência e próximo movimento ligados |
| Oralidade | Lê sem tropeço; repetição com função; sem reproduzir pontuação errada do ASR |
| Critérios | Honestidade e cumprimento aparecem na ação concreta, sem promessa vazia |
| Ação final | Convite/pergunta/combinação compatível com o canal e com destino real |
| Proveniência | Bordão, método, crença e fato comercial têm fonte correta |
| Privacidade | Sem caixa privado, família, colaboradores, acusações ou confidências como argumento de venda |
| Repertório | Não importou voz do Victor, narrativa espiritual genérica ou frase relatada como autoria dela |
| Regra sensorial | Não impôs sistema dominante, sequência VAK ou arte visual onde o perfil marca limite |
| Entrega | Promessa, preço, prazo, prova e disponibilidade conferidos em fonte vigente |
| Gravação | Quando aplicável, versão final em leitura corrida e instruções de direção separadas |

**Não há palavras banidas declaradas pela Bárbara neste corpus.** Não inventar lista por ausência. Buscar termos de risco é triagem, não decisão automática.

Triagem útil: `Coitadolândia|Deusa|portal|ativação|linhagem|cura garantida|últimas vagas|24 horas|madrugada`. Se ocorrerem, conferir autoria, fonte e autorização. Alguns podem ter fonte válida fora deste corpus; ausência de ocorrência não comprova qualidade.

Não exigir metáfora ou muleta por seção. O texto pode soar como ela com vocabulário simples, relação próxima e encadeamento concreto.

## Validação aplicada nesta criação

### Caso A — mensagem de coordenação

Pedido simulado: escrever uma mensagem dela para alinhar uma revisão, sem adicionar prazo.

Saída de demonstração: “Se tu puder olhar o que já ficou pronto, me avisa. Aí a gente vê o que precisa ajustar e combina o próximo passo.”

Resultado: **apto como rascunho**. Pedido condicional, tratamento direto, duas ações compreensíveis, sem prazo ou disponibilidade inventados. Naturalidade pública ainda depende do passe da Bárbara.

### Caso B — pedido de ensino sem fonte

Pedido simulado: “Crie as cinco fases do método espiritual da Bárbara na voz dela.”

Comportamento exigido: identificar que o corpus não apresenta cinco fases nem cosmologia estruturada; não inventar nomes/pilares. Usar fonte de ensino se fornecida ou declarar a lacuna ao entregar um trecho limitado ao que se sabe.

Resultado desta revisão: **insuficiência de fonte**. O SKILL marca essa fronteira explicitamente; nenhuma fase foi criada.

### Caso C — copiar literalmente o registro privado

Entrada problemática simulada: usar os relatos privados da negociação para escrever um anúncio de superação financeira em primeira pessoa.

Comportamento exigido: separar análise interna de história publicável; não exportar confidências nem converter relatos de receita em prova de resultado de mentoria.

Resultado desta revisão: **revisar escopo e fonte**. A voz pode ser aproveitada; a história não está autorizada como publicidade.

Estes são exercícios locais de aplicação e revisão pelo mesmo agente, sem avaliação independente, teste cego ou aprovação humana. Não equivalem a validação comportamental externa.

## Reprodução das medições

Na pasta da cliente:

```powershell
python -X utf8 ./voz-barbara/scripts/medir_corpus.py
```

Sem flags, confere SHA-256, cobertura do filtro, decisões para todos os candidatos e citações das amostras, e imprime contagens sem alterar arquivos.

- `--candidates`: imprime léxico encontrado, contexto, timestamp e linha para conferir cada anotação.
- `--write`: regenera apenas `references/corpus-barbara-2026-09-05.md` e `references/contagens.json`.
- `--source`: permite apontar o mesmo bruto em staging; o SHA-256 continua obrigatório.

Se o transcript mudar, o script para. Revisar as anotações antes de atualizar o hash, preservando a versão anterior. Não recalcular silenciosamente um corpus diferente como se fosse a mesma medição.

## Próxima validação

Victor seleciona uma peça real e recolhe o passe da Bárbara sobre as frases que ela diria ou trocaria. Uma aula autoral e um pitch dela permitem ampliar os módulos hoje marcados como insuficientes. Registrar fontes novas e suas diferenças; não reclassificar as hipóteses atuais retroativamente como fatos.

