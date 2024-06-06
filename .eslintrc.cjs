module.exports = {
  root: true,
  extends: ['@block65/eslint-config', '@block65/eslint-config/react'],

  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },

  overrides: [
    {
      files: ['**/*.css.ts', 'src/**/*.tsx', 'src/**/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
        'no-restricted-syntax': 'off',
        '@typescript-eslint/no-import-type-side-effects': 'error',
      },
    },
  ],
};
