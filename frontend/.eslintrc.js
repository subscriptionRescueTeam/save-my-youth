module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  ignorePatterns: ['**/*.js'],
  globals: {
    React: true,
    JSX: true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'import'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'react/self-closing-comp': 'warn',
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-duplicate-imports': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'no-nested-ternary': 'error',
    'import/no-unresolved': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-duplicates': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['src/**'],
      },
    ],
    'import/order': [
      'warn',

      {
        groups: ['builtin', 'external', 'index', ['parent', 'sibling'], 'type'],
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@**/*',
            group: 'external',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
};
