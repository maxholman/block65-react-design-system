import { resolve } from 'node:path';
import hash from '@emotion/hash';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vitest/config';

const debugBuild = !!process.env.DEBUG_BUILD;

export default defineConfig((config) => {
  console.log(`mode is ${config.mode} and debugBuild is ${debugBuild}`);
  return {
    plugins: [
      react(),
      vanillaExtractPlugin(debugBuild ? { identifiers: 'debug' } : {}),
    ],

    build: {
      outDir: 'build',
      target: 'esnext',

      lib: {
        entry: {
          main: resolve(__dirname, 'lib/main.ts'),
          vars: resolve(__dirname, 'lib/vars.ts'),
          hooks: resolve(__dirname, 'lib/hooks/main.ts'),
        },
        formats: ['es'],
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          'react/jsx-dev-runtime', // when importing built assets in dev
          'react-intl',
        ],
        plugins: [
          config.mode === 'development' &&
            visualizer({
              open: true,
              filename: 'build/visualizer.html',
            }),
        ],
      },

      sourcemap: true,
      minify: !debugBuild,
      cssMinify: !debugBuild,
    },

    css: {
      modules: {
        ...(true && {
          generateScopedName(...args) {
            const [name, filename /* , css */] = args;
            const className = `_${hash(args.join('_'))}`;
            const [, file] = filename.match(/.*\/(.*?)\./) || ['unknown'];
            return config.mode === 'development'
              ? [file, name, className].join('_')
              : className;
          },
        }),
      },
    },

    // this is for better dx with the import paths and hmr
    optimizeDeps: {
      exclude: [
        new URL('./build/defaults.js', import.meta.url).pathname,
        new URL('./build/vars.js', import.meta.url).pathname,
        new URL('./build/style.css', import.meta.url).pathname,
      ],
    },

    define: {
      __DEBUG_BUILD__: debugBuild,
      // this is mostly to strip out some garbage in floating ui
      // see also https://github.com/floating-ui/floating-ui/issues/933
      'process.env.NODE_ENV': JSON.stringify(config.mode),
      // 'process.env.NODE_ENV': JSON.stringify(config.mode),
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
  };
});
