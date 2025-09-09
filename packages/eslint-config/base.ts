import { FlatCompat } from '@eslint/eslintrc';
import type { Linter } from 'eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname || __dirname,
});

const config: Linter.Config[] = [
  ...compat.extends('@typescript-eslint/recommended'),
  {
    plugins: {
      turbo: require('eslint-plugin-turbo'),
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'error',
    },
  },
];

export default config;
