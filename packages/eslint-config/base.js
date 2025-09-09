const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.Config} */
module.exports = [
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
