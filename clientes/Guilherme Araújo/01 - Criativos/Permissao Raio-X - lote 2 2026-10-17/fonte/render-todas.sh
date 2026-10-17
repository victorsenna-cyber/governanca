#!/usr/bin/env bash
# Gera as artes do lote 2: 8 criativos x 2 formatos (feed 4:5, story 9:16).
# Uso: bash render-todas.sh [c1 c2 ...]   (Git Bash, Chrome no caminho padrao; sem argumento = todos)
set -u
AQUI="$(cd "$(dirname "$0")" && pwd)"
SAIDA="$AQUI/../artes"
PERFIL="${TMPDIR:-/tmp}/perfil-criativos-guilherme-lote2"
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
V="${V:-v1}"
mkdir -p "$SAIDA" "$PERFIL"
declare -A NOME=( [c1]=identifica [c2]=pergunta [c3]=checklist [c4]=previsao [c5]=preco [c6]=frase [c7]=raiox [c8]=conta )
ALVOS="${*:-c1 c2 c3 c4 c5 c6 c7 c8}"
for c in $ALVOS; do
  n="${NOME[$c]}"
  URL="file:///$(cygpath -m "$AQUI/$c-$n.html")"
  for f in feed story; do
    if [ "$f" = feed ]; then tam="1080,1350"; else tam="1080,1920"; fi
    alvo="$SAIDA/guilherme-permissao-raiox-$c-$n-$V-$f.png"
    "$CHROME" --headless=new --disable-gpu --hide-scrollbars --lang=pt-BR --allow-file-access-from-files \
      --user-data-dir="$(cygpath -w "$PERFIL")" --window-size="$tam" \
      --virtual-time-budget=9000 --screenshot="$(cygpath -w "$alvo")" \
      "$URL?f=$f" >/dev/null 2>&1
    echo "ok $(basename "$alvo")"
  done
done
