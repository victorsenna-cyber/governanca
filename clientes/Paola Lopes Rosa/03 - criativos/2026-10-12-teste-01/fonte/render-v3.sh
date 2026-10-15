#!/usr/bin/env bash
# Gera os 8 PNGs da versao 3: 2 angulos (rel, area) x 2 linhas (rico, liso) x 2 formatos (feed 4:5, story 9:16).
# Uso: bash render-v3.sh   (Git Bash, Chrome instalado no caminho padrao)
set -u
AQUI="$(cd "$(dirname "$0")" && pwd)"
SAIDA="$AQUI/../artes"
PERFIL="${TMPDIR:-/tmp}/perfil-criativos-paola"
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
mkdir -p "$SAIDA" "$PERFIL"

for linha in rico liso; do
  URL="file:///$(cygpath -m "$AQUI/criativo-$linha.html")"
  for c in rel area; do
    if [ "$c" = rel ]; then nome="relacionamento"; else nome="area"; fi
    for f in feed story; do
      if [ "$f" = feed ]; then tam="1080,1350"; else tam="1080,1920"; fi
      alvo="$SAIDA/paola-$nome-estatico-$linha-v3-$f.png"
      "$CHROME" --headless=new --disable-gpu --hide-scrollbars --lang=pt-BR \
        --user-data-dir="$(cygpath -w "$PERFIL")" --window-size="$tam" \
        --virtual-time-budget=9000 --screenshot="$(cygpath -w "$alvo")" \
        "$URL?c=$c&f=$f" >/dev/null 2>&1
      echo "ok $alvo"
    done
  done
done
