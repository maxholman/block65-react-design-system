module.exports = {
  root: true,
  extends: ['@block65/eslint-config', '@block65/eslint-config/react'],

  parserOptions: {
    ecmaVersion: 2022,

    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json',
      // './tsconfig.node.json',
      // './tsconfig.examples.json',
    ],
  },

  overrides: [
    {
      files: ['lib/**/*.css.ts'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
        'no-restricted-syntax': 'off',
        '@typescript-eslint/no-import-type-side-effects': 'error',
      },
    },
    {
      files: ['bin/*.js', '*.config.*'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
    {
      files: ['src/**/*.tsx', 'src/**/*.ts', 'lib/**/*.tsx', 'lib/**/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
        '@typescript-eslint/no-import-type-side-effects': 'error',
      },
    },
  ],
};
