#!/bin/bash

echo "🔧 Fixing Git repository..."
echo ""

# Check if we're in the right directory
if [ ! -d "src" ]; then
  echo "❌ Error: Not in the correct directory. Please run this from the workspace root."
  exit 1
fi

# Check if git is available
if ! command -v git &> /dev/null; then
  echo "❌ Error: Git is not installed or not in PATH"
  exit 1
fi

echo "✓ Found workspace directory"
echo "✓ Git is available"
echo ""

# Remove Git lock files if they exist
rm -f .git/index.lock 2>/dev/null
echo "✓ Cleaned lock files"

# Show current Git status
echo ""
echo "📊 Current Git status:"
git status --short 2>&1 | head -10

echo ""
echo "🎯 Strategy: We'll create a fresh commit with your Astro site changes"
echo "   (The .gitignore will automatically exclude admin dashboard files)"
echo ""

# Ask for confirmation
read -p "Continue with Git fix? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Cancelled."
  exit 1
fi

echo ""
echo "📦 Creating backup of current .git folder..."
if [ -d ".git" ]; then
  mv .git .git-backup-$(date +%Y%m%d-%H%M%S)
  echo "✓ Backup created"
fi

echo ""
echo "🆕 Initializing fresh Git repository..."
git init
git remote add origin https://github.com/sjalowiec/knitbymachine.git

echo ""
echo "📝 Staging Astro site files (admin dashboard excluded by .gitignore)..."
git add .

echo ""
echo "💾 Creating commit..."
git commit -m "Sync Astro site with latest changes"

echo ""
echo "🔍 Fetching from GitHub..."
git fetch origin main

echo ""
echo "✅ Git repository is ready!"
echo ""
echo "📤 To push to GitHub, run:"
echo "   git push -f origin main"
echo ""
echo "   (Force push is needed because we created a fresh history)"
