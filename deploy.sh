#!/bin/bash

set -e

echo "🔨 Building wizards..."
npm run build

echo "📦 Staging changes..."
git add dist/

if git diff --cached --quiet; then
  echo "✅ No changes to deploy"
  exit 0
fi

echo "💾 Committing changes..."
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "🚀 Pushing to GitHub..."
git push origin main || git push origin master

echo "✅ Deploy complete! Check Netlify for deployment status."
