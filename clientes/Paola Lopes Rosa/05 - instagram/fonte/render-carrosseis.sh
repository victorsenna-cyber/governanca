#!/usr/bin/env bash
# Gera os slides dos carrosséis 3 (linha lisa, 7 telas) e 6 (linha rica, 8 telas), 1080x1350.
# Uso: bash render-carrosseis.sh   (Git Bash, Chrome instalado no caminho padrao)
set -u
AQUI="$(cd "$(dirname "$0")" && pwd)"
PERFIL="${TMPDIR:-/tmp}/perfil-criativos-paola"
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
mkdir -p "$PERFIL"

gera() {  # linha  pasta  quantidade
  local saida="$AQUI/../artes/$2"
  mkdir -p "$saida"
  local url="file:///$(cygpath -m "$AQUI/carrossel-$1.html")"
  for s in $(seq 1 "$3"); do
    local alvo="$saida/$(printf '%02d' "$s").png"
    "$CHROME" --headless=new --disable-gpu --hide-scrollbars --lang=pt-BR \
      --user-data-dir="$(cygpath -w "$PERFIL")" --window-size=1080,1350 \
      --virtual-time-budget=9000 --screenshot="$(cygpath -w "$alvo")" \
      "$url?s=$s" >/dev/null 2>&1
    echo "ok $2/$(printf '%02d' "$s").png"
  done
}
gera liso carrossel-03 7
gera rico carrossel-06 8
