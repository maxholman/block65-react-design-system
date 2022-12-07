/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'node:path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // @ts-expect-error - guessing vite react plugin doesnt like node16 mode reso
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    outDir: 'build',
    target: 'es2021',
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      fileName: 'main',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    minify: true,
    sourcemap: true,
  },
  test: {
    setupFiles: './src/test/setup.ts',
    globals: true,
    environment: 'jsdom',
  },
});
