module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  setting: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'eslint-config-prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'styled-components-css'],
  rules: {
    'styled-components-css/rule-name': 2,
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'comma-dangle': ['error', 'ignore'],
  },
}
