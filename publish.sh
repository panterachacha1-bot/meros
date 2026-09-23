#!/bin/bash
# MEROS saytini GitHub Pages'ga joylash. Ishga tushirish:  bash publish.sh
set -e
cd "$(dirname "$0")"
REPO="${1:-meros}"
if ! command -v gh >/dev/null 2>&1; then
  if command -v brew >/dev/null 2>&1; then brew install gh
  else echo "GitHub CLI topilmadi. Uni https://cli.github.com saytidan oʻrnating va skriptni qayta ishga tushiring."; exit 1; fi
fi
gh auth status >/dev/null 2>&1 || gh auth login --hostname github.com --git-protocol https --web
gh repo create "$REPO" --public --source=. --remote=origin --push
OWNER=$(gh api user -q .login)
gh api -X POST "repos/$OWNER/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 || true
echo
echo "Tayyor. 1–2 daqiqadan soʻng sayt shu manzilda ochiladi:"
echo "https://$OWNER.github.io/$REPO/"
