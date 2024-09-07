// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/velocity/',
  esbuild: {
    drop: ['console', 'debugger']
  },
  build: {
    cssMinify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // shop: resolve(__dirname, 'shop.html'),
      },
    },
  },
})