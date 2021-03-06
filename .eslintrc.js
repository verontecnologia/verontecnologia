module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    describe: 'readonly',
    context: 'readonly',
    afterAll: 'readonly',
    before: 'readonly',
    beforeAll: 'readonly',
    beforeEach: 'readonly',
    after: 'readonly',
    afterEach: 'readonly',
    it: 'readonly',
    test: 'readonly',
    expect: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
    'import/no-named-as-default-member': 0,
    'react/jsx-filename-extension': [
      'error', { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    ],
    'no-unused-vars': 'off', // off the eslint core rule.
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
