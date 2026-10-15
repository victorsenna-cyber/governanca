#!/usr/bin/env bash
# SUBSTITUÍDO em 13/10/2026 (DEC-032): as páginas vão para a Hostinger, sem Vercel.
# Ver DEPLOY-HOSTINGER.md e montar-hostinger.py. Este script nunca foi executado.
# Publica as três páginas da Jéssica na Vercel, a partir de cópias temporárias.
# O diretório canônico não recebe .vercel/ nem metadado de hospedagem.
#
# Pré-requisito, uma vez:   npx vercel login
# Uso, na raiz da conta:    bash publicar-paginas.sh            (as três)
#                           bash publicar-paginas.sh p3         (só uma: p1 | p2 | p3)
#
# Escrito em 13/10/2026 e NÃO executado: o CLI estava deslogado nesta máquina.
set -euo pipefail

SCOPE="victorsennacosta-4764s-projects"
AQUI="$(cd "$(dirname "$0")" && pwd)"
TMP="$(mktemp -d)"
VERCEL="npx -y vercel@latest"

publicar() {  # $1 = projeto na Vercel · $2 = pasta site/
  local projeto="$1" origem="$2" destino="$TMP/$1"
  echo; echo "=== $projeto"
  mkdir -p "$destino"
  cp "$origem/index.html" "$origem/script.js" "$origem/styles.css" "$destino/"
  [ -d "$origem/assets" ] && cp -r "$origem/assets" "$destino/"
  ( cd "$destino"
    $VERCEL project add "$projeto" --scope "$SCOPE" >/dev/null 2>&1 || true   # já existe: segue
    $VERCEL link --yes --project "$projeto" --scope "$SCOPE"
    $VERCEL deploy --prod --yes --scope "$SCOPE" )
  local url="https://$projeto.vercel.app"
  local vivo local_
  vivo="$(curl -s -m 30 "$url/script.js" | sha256sum | cut -c1-16)"
  local_="$(sha256sum "$origem/script.js" | cut -c1-16)"
  if [ "$vivo" = "$local_" ]; then echo "OK   $url está igual ao repositório"
  else echo "ATENÇÃO  $url ainda difere do repositório (vivo $vivo · local $local_). Confira o alias de produção no painel."; fi
}

alvo="${1:-todas}"
[ "$alvo" = "todas" ] || [ "$alvo" = "p1" ] && publicar "jessica-emotional-speaking"  "$AQUI/pagina-1-ingles-para-brasileiros/site"
[ "$alvo" = "todas" ] || [ "$alvo" = "p2" ] && publicar "jessica-portugues-brasileiro" "$AQUI/pagina-2-portugues-para-estrangeiros/site"
[ "$alvo" = "todas" ] || [ "$alvo" = "p3" ] && publicar "ladies-fluency-experience"    "$AQUI/pagina-3-evento/site"

echo; echo "Feito. Registre as URLs e a data em STATUS.md §13 e em DADOS-OPERACIONAIS.md."
