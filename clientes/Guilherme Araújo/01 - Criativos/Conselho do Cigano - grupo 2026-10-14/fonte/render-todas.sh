#!/usr/bin/env bash
# Gera todas as artes do lote: 7 linhas x 2 formatos (a moldura com 3 aberturas).
# Uso: bash render-todas.sh   (Git Bash, Chrome instalado no caminho padrao)
set -u
AQUI="$(cd "$(dirname "$0")" && pwd)"
SAIDA="$AQUI/../artes"
PERFIL="${TMPDIR:-/tmp}/perfil-criativos-guilherme"
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
mkdir -p "$SAIDA" "$PERFIL"
foto() { # linha versao parametro-extra nome
  local linha="$1" v="$2" extra="$3" nome="$4" f tam alvo URL
  URL="file:///$(cygpath -m "$AQUI/criativo-$linha.html")"
  for f in feed story; do
    if [ "$f" = feed ]; then tam="1080,1350"; else tam="1080,1920"; fi
    alvo="$SAIDA/guilherme-grupo-conselho-estatico-$nome-$v-$f.png"
    "$CHROME" --headless=new --disable-gpu --hide-scrollbars --lang=pt-BR --allow-file-access-from-files \
      --user-data-dir="$(cygpath -w "$PERFIL")" --window-size="$tam" \
      --virtual-time-budget=9000 --screenshot="$(cygpath -w "$alvo")" \
      "$URL?f=$f$extra" >/dev/null 2>&1
    echo "ok $(basename "$alvo")"
  done
}
foto rico v2 "" rico
foto liso v2 "" liso
for c in terapeuta mentora cartomante; do foto moldura v2 "&c=$c" "moldura-$c"; done
foto spoiler v1 "" spoiler
foto retrato v1 "" retrato
foto whatsapp v1 "" whatsapp
foto roda v1 "" roda
