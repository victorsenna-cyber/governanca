$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$siteRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path
$deliveryRoot = Join-Path $siteRoot '_entrega'
$sourceSite = (Resolve-Path -LiteralPath (Join-Path $deliveryRoot 'site')).Path
$zipPath = Join-Path $deliveryRoot 'THE-GOLDEN-TEMPLE-2026-09-26-L1-L2.zip'
if (Test-Path -LiteralPath $zipPath) { throw 'ZIP already exists. Preserve it and choose a new version.' }
if (-not $sourceSite.StartsWith($siteRoot + '\')) { throw 'Source outside isolated workspace' }
[System.IO.Compression.ZipFile]::CreateFromDirectory($sourceSite, $zipPath, [System.IO.Compression.CompressionLevel]::Optimal, $false)
$report = Get-Content -LiteralPath (Join-Path $siteRoot '_qa/iteration-2026-09-26/package.json') -Raw | ConvertFrom-Json
$expected = @{}
foreach ($entry in $report.manifest) { $expected[$entry.file] = $entry.sha256 }
$archive = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
$checked = 0
try {
  foreach ($entry in $archive.Entries) {
    if ($entry.FullName.EndsWith('/')) { continue }
    $name = $entry.FullName.Replace('\','/')
    if (-not $expected.ContainsKey($name)) { throw "Unexpected ZIP entry: $name" }
    $stream = $entry.Open()
    $hasher = [System.Security.Cryptography.SHA256]::Create()
    try { $actual = [Convert]::ToHexString($hasher.ComputeHash($stream)).ToLowerInvariant() }
    finally { $stream.Dispose(); $hasher.Dispose() }
    if ($actual -ne $expected[$name]) { throw "ZIP hash mismatch: $name" }
    $checked++
  }
  if ($checked -ne $expected.Count) { throw 'ZIP file count differs from manifest' }
  if (-not ($archive.Entries.FullName -contains '.htaccess.proposta')) { throw 'Apache proposal missing from ZIP' }
  if ($archive.Entries.FullName -contains '.htaccess') { throw 'Forbidden active .htaccess in ZIP' }
} finally { $archive.Dispose() }
$final = [ordered]@{ date = (Get-Date).ToString('o'); zip = $zipPath; bytes = (Get-Item -LiteralPath $zipPath).Length; sha256 = (Get-FileHash -LiteralPath $zipPath -Algorithm SHA256).Hash.ToLowerInvariant(); verifiedEntries = $checked; mismatches = 0 }
$final | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $siteRoot '_qa/iteration-2026-09-26/zip.json') -Encoding utf8
$final | ConvertTo-Json
