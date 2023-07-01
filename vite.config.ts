/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'node:path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const debugBuild = !!process.env.DEBUG_BUILD;

export default defineConfig(() => ({
  plugins: [
    // @ts-expect-error - guessing vite react plugin doesnt like node16 mode reso
    react(),
    vanillaExtractPlugin(debugBuild ? { identifiers: 'debug' } : {}),
  ],
  build: {
    outDir: 'build',
    target: 'es2021',

    lib: {
      entry: {
        main: resolve(__dirname, 'lib/main.ts'),
        vars: resolve(__dirname, 'lib/vars.ts'),
        hooks: resolve(__dirname, 'lib/hooks/main.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },

    sourcemap: true,

    minify: !debugBuild,
    cssMinify: !debugBuild,
  },

  define: {
    __DEBUG_BUILD__: debugBuild,
    // this is mostly to strip out some garbage in floating ui
    // see also https://github.com/floating-ui/floating-ui/issues/933
    'process.env.NODE_ENV': JSON.stringify(
      debugBuild ? 'development' : 'production',
    ),
  },

  test: {
    setupFiles: './src/test/setup.ts',
    globals: true,
    environment: 'jsdom',

    // thanks to @uglow
    // https://github.com/vanilla-extract-css/vanilla-extract/issues/940#issuecomment-1363327843
    transformMode: {
      web: [/\.css.ts$/],
    },
  },
}));
