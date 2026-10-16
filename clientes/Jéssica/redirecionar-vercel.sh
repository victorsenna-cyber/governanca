#!/usr/bin/env bash
# Redireciona os dois endereços antigos da Vercel (entregues em 06/08) para o domínio dela.
# Redirecionar, não apagar: os links podem estar circulando (DEC-032, DEPLOY-HOSTINGER.md).
#
# Uso, na raiz da conta, depois de `npx vercel login`:   bash redirecionar-vercel.sh
set -euo pipefail

VERCEL="npx --yes vercel"
SCOPE="victorsennacosta-4764s-projects"
DOMINIO="https://jessicaoliveira.space"

redirecionar () {
  local projeto="$1" destino="$2"
  local dir; dir="$(mktemp -d)"
  cat > "$dir/vercel.json" <<JSON
{ "redirects": [ { "source": "/(.*)", "destination": "$destino", "permanent": true } ] }
JSON
  ( cd "$dir"
    $VERCEL link --yes --project "$projeto" --scope "$SCOPE"
    $VERCEL deploy --prod --yes --scope "$SCOPE" )
  rm -rf "$dir"
}

redirecionar jessica-emotional-speaking   "$DOMINIO/ingles/"
redirecionar jessica-portugues-brasileiro "$DOMINIO/portuguese/"

echo; echo "Conferência (esperado: 308 e o endereço novo):"
for u in https://jessica-emotional-speaking.vercel.app https://jessica-portugues-brasileiro.vercel.app; do
  curl -sI "$u" | grep -iE '^(HTTP|location)' | tr -d '\r'
done
