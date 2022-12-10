module.exports = {
  root: true,
  extends: [
    '@block65/eslint-config',
    '@block65/eslint-config/react',
    '@block65/eslint-config/typescript',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // '@typescript-eslint/no-unsafe-return': 'off',
        // '@typescript-eslint/no-unsafe-member-access': 'off',
        // '@typescript-eslint/no-unsafe-call': 'off',
        // '@typescript-eslint/no-unsafe-assignment': 'off',

        'rules/no-unused-prop-types': 'off',

        'react/function-component-definition': [
          'error',
          {
            namedComponents: ['arrow-function'],
            unnamedComponents: 'function-expression',
          },
        ],
      },
    },
  ],
};
