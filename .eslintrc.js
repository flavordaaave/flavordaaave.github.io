module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort', 'sort-destructure-keys'],
  root: true,
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, typedefs: false },
    ],
    'no-console': ['error', { allow: ['info', 'error'] }],
    'react/display-name': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: false,
      },
    ],
    'react/prop-types': 'off',
    'simple-import-sort/sort': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: true },
    ],
    'sort-vars': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
