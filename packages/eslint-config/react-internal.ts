import { FlatCompat } from '@eslint/eslintrc';
import type { Linter } from 'eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname || __dirname,
});

const config: Linter.Config[] = [
  ...compat.extends(
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ),
  {
    plugins: {
      turbo: require('eslint-plugin-turbo'),
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'error',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

export { config as reactInternalConfig };
export default config;
