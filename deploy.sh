#!/bin/bash

set -e

echo "📦 Checking for changes..."
if git diff --quiet && git diff --cached --quiet; then
  echo "✅ No changes to deploy"
  exit 0
fi

echo "💾 Committing changes..."
git commit -am "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || {
  echo "⚠️  No tracked files to commit. Stage new files with 'git add' first."
  exit 1
}

echo "🚀 Pushing to GitHub..."
git push origin main || git push origin master

echo "✅ Deploy complete! Netlify will build automatically."
