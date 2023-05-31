module.exports = {
  root: true,
  extends: [
    '@block65/eslint-config/react',
    '@block65/eslint-config/typescript',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },

  overrides: [
    {
      files: ['**/*.css.ts', 'src/**/*.tsx'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};
