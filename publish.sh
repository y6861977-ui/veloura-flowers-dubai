#!/bin/zsh
set -e
cd "$(dirname "$0")"
cp -R public/* docs/
git add .
git commit -m "Update store catalog and settings" || true
git push origin main
echo "✅ Изменения опубликованы на https://y6861977-ui.github.io/veloura-flowers-dubai/"
