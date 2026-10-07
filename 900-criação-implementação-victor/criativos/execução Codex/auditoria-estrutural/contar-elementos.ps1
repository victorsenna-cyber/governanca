$ErrorActionPreference = 'Stop'
$utf8 = [System.Text.UTF8Encoding]::new($false, $true)
$outDir = [System.IO.Path]::GetFullPath($PSScriptRoot)
if ($outDir -notmatch '[\\/]execução Codex[\\/]auditoria-estrutural$') { throw 'Destino fora do isolamento esperado.' }
$sourceDir = Split-Path (Split-Path $outDir -Parent) -Parent
$spec = @'
[
 {"id":"V1","file":"Video by felipenonino.txt","title":"Empilhamento e lateralização","segments":[
 ["Abertura","gancho","G1: tese contrária à expectativa","Oferta é boa"],
 ["Abertura","promessa","G2: promessa de lista e escala; micro-CTA de atenção","Então anota aí"],
 ["Abertura","credencial","G3a: experiência de quem ensina","Eu e o Lucas Miki"],
 ["Abertura","credencial","G3b: resultado financeiro alegado","A gente já fez"],
 ["Abertura","curiosidade","G3c: abre o laço da chave","e essa aqui é a chave"],
 ["Abertura","contrarian","Reforço da tese de abertura","Você sabe que só"],
 ["Abertura","demonstração","Antes/depois visual alegado","A prova disso"],
 ["Revelação","transição","Regancho de importância; micro-CTA de atenção","Então preste atenção"],
 ["Revelação","mecanismo","Nomeação da técnica","E o hack de hoje"],
 ["Revelação","demonstração","Virada autorreferente: a abertura era a demonstração","O que é empilhamento"],
 ["Revelação","reason-why","Explica a função dos três ganchos","Você viu que eu empilhei"],
 ["Aplicação","descrição","Transfere a técnica ao espectador e permite desconexão","Isso você pode fazer"],
 ["Aplicação","cena","Cenário hipotético com dois anúncios complementares","Então vamos supor"],
 ["Aplicação","descrição","Instrução de recombinação dos ganchos","Você pode pegar"],
 ["Aplicação","transição","Amplia da técnica para lateralização","Essa estrutura é"],
 ["Justificativa","curiosidade","Pergunta que abre a razão da lateralização","Então por que"],
 ["Justificativa","ponto-lógico","Dificuldade e relevância de acertar um anúncio","Porque você sabe"],
 ["Justificativa","benefício","Assertividade e prolongamento do que funcionou","A lateralização é como"],
 ["Justificativa","descrição","Regra de produção 70/30 relatada","Então quando a gente"],
 ["Justificativa","dor","Acusação de testar sem aproveitar aprendizagem","E você está subindo"],
 ["Justificativa","custo-inação","Consequência financeira atribuída à prática","Aí é pedir"],
 ["Justificativa","autoridade","Validação por prática de operadores estrangeiros","Essa estratégia de lateralização"],
 ["Justificativa","benefício","Ponte de aplicabilidade ao Brasil","E você pode literalmente"],
 ["Fechamento","segmentação","Contexto de mercado em expansão","Os funis de direct response"],
 ["Fechamento","contrarian","Lacuna entre falar de funis e ensinar criativos","Todo mundo falando"],
 ["Fechamento","cta","Convite condicional para seguir o perfil","Então se você quer aprender"],
 ["Fechamento","benefício","Cadência e valor da entrega futura","porque nesse perfil"]
 ]},
 {"id":"V2","file":"Video by felipenonino (1).txt","title":"Modelo de criativo com gancho de conteúdo","segments":[
 ["Abertura","gancho","G1: tese contrária à expectativa","Não tem funil bom"],
 ["Abertura","promessa","G2: promessa de instrução; micro-CTA de atenção","Então já anota"],
 ["Abertura","demonstração","G3: resultado antes/depois alegado","Esse modelo de criativo foi"],
 ["Abertura","demonstração","Amplia o resultado para métricas de interação","E esse modelo de criativo"],
 ["Abertura","demonstração","Especifica quiz e pede observação do comparativo","Então é um funil"],
 ["Abertura","credencial","Resultado financeiro e experiência alegados","Eu e o Lucas Miki"],
 ["Entrada didática","transição","Regancho da promessa; micro-CTAs de atenção","Então presta atenção"],
 ["Entrada didática","mecanismo","Nomeia o primeiro componente ensinado","Primeiro o hook"],
 ["Entrada didática","objeção","Rompe a equivalência entre gancho e três segundos","Não pensa no gancho"],
 ["Entrada didática","mecanismo","Virada: redefine gancho por função","Na realidade o gancho"],
 ["Entrada didática","descrição","Critérios de conexão, interesse e ligação ao corpo","Então tem que ser"],
 ["Entrada didática","objeção","Retira o limite de cinco ou dez segundos","Então não precisa"],
 ["Entrada didática","demonstração","Caso alegado de gancho acima de um minuto","Não, o modelo"],
 ["Corpo ensinado","transição","Muda da retenção para a conversão","Agora você precisa"],
 ["Corpo ensinado","descrição","Anuncia mecanismo do problema, solução e CTA","O que esse corpo"],
 ["Corpo ensinado","mecanismo","Exemplo hipotético: problema e causa atribuída","Então por exemplo, o frio"],
 ["Corpo ensinado","mecanismo","Exemplo hipotético: intervenção e resultado prometido","Qual que é o mecanismo da solução"],
 ["Corpo ensinado","benefício","Ensina o valor do próximo passo no quiz","Então se for um funil"],
 ["Corpo ensinado","descrição","Instrui inserir depoimento ligado ao CTA","Depois, você vai colocar"],
 ["Corpo ensinado","história","Exemplo de Juliana; sem depoimento verificável no material","Então por exemplo, você faz"],
 ["Corpo ensinado","reason-why","Amarra o exemplo à relação problema-solução","Isso porque ela descobriu"],
 ["Corpo ensinado","descrição","Instrui repetir o CTA do anúncio ensinado","E aí você reforça"],
 ["Fechamento","recapitulação","Reconstitui a sequência ensinada","Então ele é composto"],
 ["Fechamento","promessa","Reafirma superioridade do modelo em escala","Então esse é o modelo"],
 ["Fechamento","cta","Convite condicional para seguir o perfil","E se você quer aprender"]
 ]}
]
'@ | ConvertFrom-Json
$results = @()
$md = [System.Collections.Generic.List[string]]::new()
$md.Add('# Auditoria estrutural das duas transcrições')
$md.Add('')
$md.Add('> Contagem do texto transcrito, não de duração audiovisual. Os arquivos originais permanecem intactos. Segmentação funcional interpretativa; contagem reproduzível. Data: 18/09/2026.')
$md.Add('')
$md.Add('## Convenção de contagem e leitura')
$md.Add('')
$md.Add('- Excluídas exclusivamente as duas mensagens promocionais do TurboScribe de cada arquivo. Texto falado preservado, inclusive possíveis erros de transcrição.')
$md.Add('- Palavra = sequência não vazia delimitada por espaço, tabulação ou quebra de linha (regex `\S+`). Números, `100k`, `70%`, `XYZ` e cada `X` contam como uma palavra. Pontuação anexada não cria palavra adicional.')
$md.Add('- Cada palavra pertence a um único segmento contínuo. A soma dos elementos precisa ser igual ao total do texto limpo. Cada elemento recebe uma função primária do vocabulário do método de benchmarking; a descrição registra funções secundárias.')
$md.Add('- G1/G2/G3 são agrupamentos retóricos da abertura, não rótulos primários adicionais. Em V1, G3 abrange três elementos: credencial, credencial e curiosidade. Contar o grupo e seus elementos juntos duplicaria palavras.')
$md.Add('- V1 declara três ganchos, mas não demarca suas fronteiras. A delimitação é nossa leitura. V2 não declara a quantidade que usa; três entradas iniciais são a leitura adotada. Reforços e reganchos posteriores são mostrados separadamente.')
$md.Add('- Os CTAs ao espectador são separados das instruções e dos CTAs hipotéticos dos anúncios ensinados. Não há evidência audiovisual disponível para auditar cortes, texto de tela, entonação ou os números dos comparativos visuais.')
$md.Add('- Esta é uma auditoria das duas peças fornecidas, não benchmark validado nem revisão factual das alegações comerciais.')
foreach ($video in $spec) {
 $path = Join-Path $sourceDir $video.file
 $raw = [System.IO.File]::ReadAllText($path,$utf8)
 $clean = [regex]::Replace($raw,'(?m)^\(Transcrito por TurboScribe\. Atualize para Ilimitado para remover esta mensagem\.\)\s*','').Trim()
 $starts = @()
 $cursor = 0
 foreach ($s in $video.segments) {
  $pos = $clean.IndexOf([string]$s[3],$cursor,[System.StringComparison]::Ordinal)
  if ($pos -lt 0) { throw "Marcador não encontrado: $($video.id) / $($s[3])" }
  if ($starts.Count -eq 0 -and $pos -ne 0) { throw 'Primeiro segmento não começa no início.' }
  $starts += $pos
  $cursor = $pos + ([string]$s[3]).Length
 }
 $rows = @()
 for ($i=0; $i -lt $starts.Count; $i++) {
  $end = if ($i+1 -lt $starts.Count) { $starts[$i+1] } else { $clean.Length }
  $chunk = $clean.Substring($starts[$i],$end-$starts[$i]).Trim()
  $s = $video.segments[$i]
  $rows += [PSCustomObject]@{id=('{0}-{1:D2}' -f $video.id,($i+1)); bloco=$s[0]; elemento=$s[1]; funcao=$s[2]; ancora=$s[3]; palavras=[regex]::Matches($chunk,'\S+').Count; texto=$chunk}
 }
 $count = [regex]::Matches($clean,'\S+').Count
 $sum = ($rows | Measure-Object palavras -Sum).Sum
 $joined = ($rows.texto -join ' ') -replace '\s+',' '
 if ($sum -ne $count -or $joined -cne ($clean -replace '\s+',' ')) { throw 'Falha na conservação de palavras/texto.' }
 $blockNames = [System.Collections.Generic.List[string]]::new()
 foreach ($r in $rows) { if (-not $blockNames.Contains($r.bloco)) { $blockNames.Add($r.bloco) } }
 $blocks = @($blockNames | ForEach-Object { $name=$_; $n=($rows | Where-Object bloco -EQ $name | Measure-Object palavras -Sum).Sum; [PSCustomObject]@{bloco=$name; palavras=$n; percentual=[math]::Round(100*$n/$count,2)} })
 $result = [PSCustomObject]@{id=$video.id; arquivo=$video.file; titulo=$video.title; sha256=(Get-FileHash -LiteralPath $path -Algorithm SHA256).Hash; palavras=$count; elementos=$rows; blocos=$blocks; conservacaoVerificada=$true}
 $results += $result
 $md.Add('')
 $md.Add("## $($video.id) — $($video.title)")
 $md.Add('')
 $md.Add("Fonte: ``$($video.file)``. Total: **$count palavras**. SHA-256: ``$($result.sha256)``.")
 $md.Add('')
 $md.Add('| Bloco | Palavras | % |')
 $md.Add('|---|---:|---:|')
 foreach ($b in $blocks) { $md.Add("| $($b.bloco) | $($b.palavras) | $($b.percentual) |") }
 $md.Add('')
 $md.Add('| ID | Bloco | Elemento primário | Função | Início literal | Palavras |')
 $md.Add('|---|---|---|---|---|---:|')
 foreach ($r in $rows) { $md.Add("| $($r.id) | $($r.bloco) | $($r.elemento) | $($r.funcao) | $($r.ancora)… | $($r.palavras) |") }
 $md.Add('')
 $md.Add('### Trechos integrais por elemento — fronteiras auditáveis')
 foreach ($r in $rows) {
  $md.Add('')
  $md.Add("**$($r.id) · $($r.funcao) · $($r.palavras) palavras**")
  $md.Add('')
  $md.Add(($r.texto -replace '\r?\n\s*\r?\n',"`n`n"))
 }
}
$md.Add('')
$md.Add('## Leitura das estruturas, pivotagem e CTAs')
$md.Add('')
$md.Add('### V1 — atenção, demonstração autorreferente, aplicação e aquisição de seguidor')
$md.Add('')
$md.Add('Abertura (108) → revelação da técnica (58) → aplicação (107) → justificativa e contraste (159) → fechamento (58). Total 490.')
$md.Add('')
$md.Add('Três ganchos iniciais na leitura adotada: tese contrária (7), promessa de lista e escala (20), credencial com laço da chave (36 = 15 + 10 + 11). A tese é reforçada em 12 palavras e sustentada por comparativo visual alegado em 33. Há um regancho explícito antes da explicação (15 palavras); não é contado como quarto gancho inicial.')
$md.Add('')
$md.Add('Pivô principal: a pergunta e resposta “O que é empilhamento de gancho? É o que você acabou de ver nesse vídeo.” (15 palavras). O autor muda o estatuto da abertura: de promessa sobre uma técnica para exemplo da técnica que já teria acabado de executar. O mecanismo de persuasão da peça é essa demonstração autorreferente, apoiada por credenciais e comparativos alegados. O mecanismo ensinado é empilhar/recombinar ganchos e depois lateralizar vencedores. Não são a mesma unidade de análise.')
$md.Add('')
$md.Add('A transição para lateralização ocupa 10 palavras. A pergunta justificativa ocupa 8; as 21 seguintes contrapõem dificuldade e valor de acertar. A virada final posiciona o perfil na lacuna entre popularidade dos funis e falta de ensino de criativos (12 palavras), preparando o convite.')
$md.Add('')
$md.Add('CTA de conversão: uma ocorrência, seguir o perfil. Seu elemento condicional tem 14 palavras; o núcleo imperativo “já me segue nesse perfil” tem 5. A razão para seguir vem em elemento separado de 18 palavras. Há dois microcomandos explícitos de atenção: “anota” e “preste atenção”; são funções secundárias de elementos já contados, não palavras extras. “Você pode pegar/adicionar” é instrução didática, não CTA de conversão. A promessa de cinco maneiras não é resolvida como lista de cinco no texto disponível.')
$md.Add('')
$md.Add('### V2 — resultado alegado, correção de crença, aula por componentes e aquisição de seguidor')
$md.Add('')
$md.Add('Abertura (109) → entrada didática/redefinição do gancho (146) → corpo ensinado e exemplos (218) → fechamento (68). Total 541.')
$md.Add('')
$md.Add('Três ganchos iniciais na leitura adotada: tese contrária (8), promessa de instrução (15), caso de transformação (16). O terceiro é desenvolvido em mais 41 palavras de comparação (14 + 27), seguido de 29 de credenciais. Um regancho de 20 palavras reabre a promessa antes da aula. A repetição do resultado poderia receber outra segmentação retórica; aqui é desenvolvimento do mesmo caso, não caso novo.')
$md.Add('')
$md.Add('Pivô principal: rejeição do gancho limitado aos três segundos (16 palavras) → redefinição pela função de levar ao corpo (23). A virada completa ocupa 39 palavras. A transição seguinte, da retenção para a conversão, ocupa 9 palavras. O mecanismo de persuasão da peça é correção de crença seguida de decomposição didática e exemplo. Comparativos e credenciais sustentam autoridade; não há demonstração audiovisual conferível nos TXT.')
$md.Add('')
$md.Add('Mecanismo ensinado: sequência de funções do anúncio. Dentro do exemplo, há causa atribuída ao problema (41 palavras) e intervenção proposta (29). São explicações ilustrativas de outro anúncio; não representam diagnóstico do público do próprio vídeo. Juliana aparece como exemplo de como apresentar um caso, sem prova de depoimento real disponível. A menção não deve aumentar a contagem de depoimentos reais da peça.')
$md.Add('')
$md.Add('CTA de conversão: uma ocorrência, seguir o perfil. O elemento inteiro tem 23 palavras; o núcleo “já me segue nesse perfil” tem 5. Há quatro microcomandos explícitos em três passagens: “anota”, “dá uma olhada”, “presta atenção” e “anota”. O primeiro CTA com valor, o depoimento e o segundo CTA são conteúdo da aula: não são dois convites reais a clicar em um quiz nesta peça.')
$md.Add('')
$md.Add('## Verificação')
$md.Add('')
$md.Add('Os 27 elementos de V1 somam 490 palavras; os 25 de V2 somam 541. Total do corpus limpo: 1.031 palavras. O script verifica soma e reconstrução integral do texto normalizado antes de gravar. Ganchos, pivôs e micro-CTAs são leituras sobre os mesmos segmentos, sem duplicação dos totais. Foram criados somente o script, este relatório e o JSON na pasta de auditoria sob execução Codex; os métodos propostos e as fontes não foram alterados.')
[System.IO.File]::WriteAllText((Join-Path $outDir 'CONTAGEM-ELEMENTOS.json'),($results | ConvertTo-Json -Depth 10),$utf8)
[System.IO.File]::WriteAllText((Join-Path $outDir 'AUDITORIA-ESTRUTURAL.md'),($md -join "`r`n"),$utf8)
$results | ForEach-Object { [PSCustomObject]@{id=$_.id; total=$_.palavras; blocos=$_.blocos; elementos=@($_.elementos | Select-Object id,funcao,palavras); conservacao=$_.conservacaoVerificada} } | ConvertTo-Json -Depth 8
