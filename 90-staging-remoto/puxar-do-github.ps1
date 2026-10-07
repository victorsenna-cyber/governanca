# puxar-do-github.ps1 — traz a versão do GitHub para o staging, SEM tocar em nada do repo vivo
#
# COMO RODAR: clique com o botão direito neste arquivo -> "Executar com PowerShell"
#   ou, no terminal, dentro de "01 - Governança":
#   powershell -ExecutionPolicy Bypass -File "90-staging-remoto\puxar-do-github.ps1"
#
# O QUE ELE FAZ:
#   1. commita o trabalho local (rede de proteção — hoje há 133 arquivos fora do git)
#   2. faz fetch do remoto (não altera nenhum arquivo do working tree)
#   3. extrai a árvore remota para 90-staging-remoto\remoto\
#   4. escreve o relatório de diferenças em 90-staging-remoto\RELATORIO.txt
#
# O QUE ELE NÃO FAZ: merge, pull, rebase, checkout, delete. Nada do repo vivo é alterado.

$ErrorActionPreference = "Stop"
$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo
Write-Host "`n== Repo: $repo ==`n" -ForegroundColor Cyan

# --- 1. proteger o local ---------------------------------------------------
$sujo = git status --porcelain
if ($sujo) {
    $n = ($sujo | Measure-Object).Count
    Write-Host "[1/4] $n arquivos fora do git. Commitando como rede de protecao..." -ForegroundColor Yellow
    git add -A
    git commit -m "Estado local 27/07 a 14/08/2026: ancoragem de proposta, destilacao de calls, check diario, filas, casa nova, distrato, Prana/Jessica/Guilherme/Danilo/Carolina" | Out-Null
    Write-Host "      commit criado: $(git log --oneline -1)" -ForegroundColor Green
} else {
    Write-Host "[1/4] working tree ja limpo, nada a commitar." -ForegroundColor Green
}

# --- 2. fetch --------------------------------------------------------------
Write-Host "[2/4] git fetch origin ..." -ForegroundColor Yellow
git fetch origin
$local  = git rev-parse --short HEAD
$remoto = git rev-parse --short origin/main
Write-Host "      HEAD local = $local   |   origin/main = $remoto" -ForegroundColor Green
if ($local -eq $remoto) {
    Write-Host "`n!! origin/main esta igual ao HEAD local. O Claude Code pode ter commitado em OUTRA BRANCH." -ForegroundColor Red
    Write-Host "   Branches no remoto:" -ForegroundColor Red
    git branch -r
    Write-Host "   Se a iteracao estiver em outra branch, rode de novo trocando 'origin/main' pela branch certa.`n" -ForegroundColor Red
}

# --- 3. extrair para staging ----------------------------------------------
Write-Host "[3/4] extraindo a arvore remota para 90-staging-remoto\remoto ..." -ForegroundColor Yellow
$dest = Join-Path $PSScriptRoot "remoto"
if (Test-Path $dest) { Remove-Item $dest -Recurse -Force }   # apaga so o staging, nunca o repo
New-Item -ItemType Directory -Path $dest -Force | Out-Null
git archive origin/main | tar -x -C $dest
$qtd = (Get-ChildItem $dest -Recurse -File | Measure-Object).Count
Write-Host "      $qtd arquivos extraidos." -ForegroundColor Green

# --- 4. relatorio ----------------------------------------------------------
Write-Host "[4/4] gerando RELATORIO.txt ..." -ForegroundColor Yellow
$rel = Join-Path $PSScriptRoot "RELATORIO.txt"
"=== COMMITS NO REMOTO QUE NAO ESTAO AQUI ==="            | Out-File $rel -Encoding utf8
git log --oneline HEAD..origin/main                        | Out-File $rel -Append -Encoding utf8
""                                                         | Out-File $rel -Append -Encoding utf8
"=== ARQUIVOS QUE SO EXISTEM NO REMOTO (A) ==="            | Out-File $rel -Append -Encoding utf8
git diff --name-status HEAD origin/main | Select-String "^A" | Out-File $rel -Append -Encoding utf8
""                                                         | Out-File $rel -Append -Encoding utf8
"=== ARQUIVOS QUE DIFEREM ENTRE OS DOIS (M) ==="           | Out-File $rel -Append -Encoding utf8
git diff --name-status HEAD origin/main | Select-String "^M" | Out-File $rel -Append -Encoding utf8
""                                                         | Out-File $rel -Append -Encoding utf8
"=== TUDO QUE MENCIONA ONBOARDING NO REMOTO ==="           | Out-File $rel -Append -Encoding utf8
Get-ChildItem $dest -Recurse -File -Include *.md |
    Where-Object { $_.FullName -match "onboard" -or (Select-String -Path $_.FullName -Pattern "onboarding" -Quiet -ErrorAction SilentlyContinue) } |
    ForEach-Object { $_.FullName.Replace("$dest\","") } | Out-File $rel -Append -Encoding utf8

Write-Host "`n== PRONTO ==" -ForegroundColor Cyan
Write-Host "Staging : 90-staging-remoto\remoto\"
Write-Host "Relatorio: 90-staging-remoto\RELATORIO.txt"
Write-Host "`nAgora e so avisar no chat: 'esta no staging'.`n" -ForegroundColor Green
