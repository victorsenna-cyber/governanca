$ErrorActionPreference = 'Stop'
$sourcePath = Join-Path $PSScriptRoot '../../01 - contexto/_transcripts/Reunião Zoom de Continuum AI Systems & Débora 2026-09-16 09h00(GMT-3h00).txt'
$raw = [IO.File]::ReadAllText((Resolve-Path -LiteralPath $sourcePath)).Replace("`r`n", "`n")
$pattern = '(?ms)^(?<start>\d{2}:\d{2}:\d{2}) --> (?<end>\d{2}:\d{2}:\d{2})\r?\n(?<speaker>[^:\r\n]+): (?<body>.*?)(?=\r?\n\r?\n|\z)'
$segments = @([regex]::Matches($raw, $pattern) | ForEach-Object {
 [pscustomobject]@{Start=$_.Groups['start'].Value;End=$_.Groups['end'].Value;Speaker=$_.Groups['speaker'].Value;Body=$_.Groups['body'].Value.Trim()}
})
if ([regex]::Replace($raw,$pattern,'').Trim().Length -gt 0) { throw 'Texto não interpretado.' }
$groups = [Collections.Generic.List[object]]::new()
foreach ($s in $segments) {
 if ($groups.Count -gt 0 -and $groups[$groups.Count-1].Speaker -eq $s.Speaker) { $groups[$groups.Count-1].Segments.Add($s) }
 else { $list=[Collections.Generic.List[object]]::new(); $list.Add($s); $groups.Add([pscustomobject]@{Speaker=$s.Speaker;Segments=$list}) }
}
$lines=[Collections.Generic.List[string]]::new()
$lines.Add('# Transcrição legível — Débora — 16/09/2026')
$lines.Add('')
$lines.Add('STATUS: DERIVADO MECÂNICO INTERNO. Fonte preservada. Horários de relógio; sem revisão de áudio. Ruídos e grafias mantidos. Contém informação privada e credencial no original: não distribuir.')
foreach ($g in $groups) {
 $lines.Add(''); $lines.Add('## '+$g.Segments[0].Start+' — '+$g.Speaker); $lines.Add('')
 foreach ($s in $g.Segments) { $lines.Add('['+$s.Start+' → '+$s.End+'] '+$s.Body) }
}
$utf8=[Text.UTF8Encoding]::new($false)
[IO.File]::WriteAllText((Join-Path $PSScriptRoot 'TRANSCRIPT-LIMPO.md'),($lines -join [Environment]::NewLine),$utf8)
$ours=($segments | Where-Object Speaker -eq 'Continuum AI Systems' | ForEach-Object Body) -join ' '
$wordPattern='\p{L}+|\d+'
$words=[regex]::Matches($ours,$wordPattern).Count
$counts=@(@('entendeu','digamos assim','digamos','tipo assim','é claro','eu acredito','geralmente','basicamente','sensacional','espetacular','perfeito','ali','e aí','né','todo mundo','sempre') | ForEach-Object {
 $n=[regex]::Matches($ours,'(?i)(?<!\p{L})'+[regex]::Escape($_)+'(?!\p{L})').Count
 [pscustomobject]@{Marker=$_;Count=$n;Per1000=[math]::Round($n*1000/$words,2)}
})
$top=@($groups | Where-Object Speaker -eq 'Continuum AI Systems' | ForEach-Object {
 $body=($_.Segments | ForEach-Object Body) -join ' '
 [pscustomobject]@{Start=$_.Segments[0].Start;Words=[regex]::Matches($body,$wordPattern).Count;Body=$body}
} | Sort-Object Words -Descending | Select-Object -First 10)
$result=[pscustomobject]@{SourceHash=(Get-FileHash -LiteralPath $sourcePath).Hash;Segments=$segments.Count;GroupedTurns=$groups.Count;First=$segments[0].Start;Last=$segments[-1].End;OurWords=$words;Markers=$counts;Top10=$top;Note='Contagem da transcrição atribuída a Continuum, não fala verificada. Ruído preservado; marcadores sobrepostos não somáveis.'}
$json=$result | ConvertTo-Json -Depth 6
[IO.File]::WriteAllText((Join-Path $PSScriptRoot 'METRICAS-FALA.json'),$json,$utf8)
$json
