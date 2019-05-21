#!/usr/bin/env sh
set -e

npm run docs:build

cd docs/.vuepress/dist

# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git push -f git@github.com:Hopingocean/vue-press.git master:gh-pages

cd -