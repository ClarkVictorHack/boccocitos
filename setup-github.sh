#!/usr/bin/env bash
set -euo pipefail

if [ ! -d ".git" ]; then
  git init
fi

git config user.name "Victor de la Cruz"
git config user.email "victordelacruz@users.noreply.github.com"

git add .

if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
  git commit -m "Crear landing page Boccocitos"
else
  git commit -m "Actualizar landing page Boccocitos" || true
fi

git branch -M main

echo ""
echo "Repositorio local listo."
echo "Ahora conecta GitHub con:"
echo "git remote add origin https://github.com/TU-USUARIO/boccocitos-web.git"
echo "git push -u origin main"
