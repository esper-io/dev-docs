module.exports = {
  '*.js': ['eslint --fix', 'prettier --write', 'git add'],
  '*.json': ['prettier --write', 'git add'],
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write', 'git add'],
  '*.scss': ['stylelint --fix', 'prettier --write', 'git add'],
  '*.md': ['markdownlint */*.md docs/*/*.md docs/home/*/*.md docs/*/*/*/*.md docs/*/*/*/*/*.md docs/*/*/*/*/*/*.md  docs/*/*/*/*/*/*/*.md', 'prettier --write', 'git add'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
}
