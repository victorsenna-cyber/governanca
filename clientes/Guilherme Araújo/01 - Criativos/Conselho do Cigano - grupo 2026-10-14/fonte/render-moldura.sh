#!/usr/bin/env bash
# Gera os 6 PNGs da linha moldura (R12): 3 aberturas (terapeuta, mentora, cartomante) x 2 formatos.
# Uso: bash render-moldura.sh   (Git Bash, Chrome instalado no caminho padrao)
set -u
AQUI="$(cd "$(dirname "$0")" && pwd)"
SAIDA="$AQUI/../artes"
PERFIL="${TMPDIR:-/tmp}/perfil-criativos-guilherme"
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
V="${V:-v1}"
URL="file:///$(cygpath -m "$AQUI/criativo-moldura.html")"
mkdir -p "$SAIDA" "$PERFIL"
for c in terapeuta mentora cartomante; do
  for f in feed story; do
    if [ "$f" = feed ]; then tam="1080,1350"; else tam="1080,1920"; fi
    alvo="$SAIDA/guilherme-grupo-conselho-estatico-moldura-$c-$V-$f.png"
    "$CHROME" --headless=new --disable-gpu --hide-scrollbars --lang=pt-BR \
      --user-data-dir="$(cygpath -w "$PERFIL")" --window-size="$tam" \
      --virtual-time-budget=9000 --screenshot="$(cygpath -w "$alvo")" \
      "$URL?c=$c&f=$f" >/dev/null 2>&1
    echo "ok $(basename "$alvo")"
  done
done
