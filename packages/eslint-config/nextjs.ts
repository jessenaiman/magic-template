import { FlatCompat } from '@eslint/eslintrc';
import type { Linter } from 'eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname || __dirname,
});

const config: Linter.Config[] = [
  ...compat.extends(
    'next/core-web-vitals',
    '@typescript-eslint/recommended'
  ),
  {
    plugins: {
      turbo: require('eslint-plugin-turbo'),
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },
];

export { config as nextJsConfig };
export default config;
