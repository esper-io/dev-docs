module.exports = {
  '*.scss': ['stylelint --fix', 'prettier --write', 'git add'],
  '*.md': ['markdownlint */*.md docs/*/*.md docs/home/*/*.md docs/*/*/*/*.md docs/*/*/*/*/*.md docs/*/*/*/*/*/*.md  docs/*/*/*/*/*/*/*.md'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
}
