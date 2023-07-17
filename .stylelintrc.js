module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'prettier/prettier': true,
  },
  plugins: ['stylelint-prettier'],
  defaultSeverity: 'warning',
};
