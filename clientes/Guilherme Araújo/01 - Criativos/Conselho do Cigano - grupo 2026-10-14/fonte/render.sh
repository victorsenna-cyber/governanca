#!/usr/bin/env bash
# Gera os 4 PNGs: 2 linhas (rico, liso) x 2 formatos (feed 4:5, story 9:16).
# Uso: bash render.sh   (Git Bash, Chrome instalado no caminho padrao)
set -u
AQUI="$(cd "$(dirname "$0")" && pwd)"
SAIDA="$AQUI/../artes"
PERFIL="${TMPDIR:-/tmp}/perfil-criativos-guilherme"
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
V="${V:-v1}"
mkdir -p "$SAIDA" "$PERFIL"
for linha in rico liso; do
  URL="file:///$(cygpath -m "$AQUI/criativo-$linha.html")"
  for f in feed story; do
    if [ "$f" = feed ]; then tam="1080,1350"; else tam="1080,1920"; fi
    alvo="$SAIDA/guilherme-grupo-conselho-estatico-$linha-$V-$f.png"
    "$CHROME" --headless=new --disable-gpu --hide-scrollbars --lang=pt-BR \
      --user-data-dir="$(cygpath -w "$PERFIL")" --window-size="$tam" \
      --virtual-time-budget=9000 --screenshot="$(cygpath -w "$alvo")" \
      "$URL?f=$f" >/dev/null 2>&1
    echo "ok $(basename "$alvo")"
  done
done
