module.exports = {
  '*.{ts, html}': ['eslint --fix'],
  '*.{json,css,scss,less,md,ts,html}': ['prettier --write'],
  '*.{css,scss}': 'stylelint --fix',
};
