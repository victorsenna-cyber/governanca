#!/usr/bin/env bash
# Gera os 8 PNGs (4 pecas x feed 4:5 e story 9:16) a partir de criativo.html.
# Uso: bash render.sh   (Git Bash, Chrome instalado no caminho padrao)
set -u
AQUI="$(cd "$(dirname "$0")" && pwd)"
SAIDA="$AQUI/../artes"
PERFIL="${TMPDIR:-/tmp}/perfil-criativos-paola"
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
mkdir -p "$SAIDA" "$PERFIL"
URL="file:///$(cygpath -m "$AQUI/criativo.html")"

nomes=( "" "relacionamento" "area" "direcao" "cetica" )
for c in 1 2 3 4; do
  for f in feed story; do
    if [ "$f" = feed ]; then tam="1080,1350"; else tam="1080,1920"; fi
    alvo="$SAIDA/paola-${nomes[$c]}-estatico-h1-v1-$f.png"
    "$CHROME" --headless=new --disable-gpu --hide-scrollbars --lang=pt-BR \
      --user-data-dir="$(cygpath -w "$PERFIL")" --window-size="$tam" \
      --virtual-time-budget=8000 --screenshot="$(cygpath -w "$alvo")" \
      "$URL?c=$c&f=$f" >/dev/null 2>&1
    echo "ok $alvo"
  done
done
