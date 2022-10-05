import { resolve } from 'node:path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  // @ts-expect-error - guessing vite react plugin doesnt like node16 mode reso
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'main',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
});
