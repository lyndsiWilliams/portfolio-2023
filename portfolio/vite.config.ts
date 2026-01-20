import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      webp: {
        quality: 70,
      },
      avif: {
        quality: 60,
      },
    }),
  ],
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/images', import.meta.url)),
      '@downloadableContent': fileURLToPath(new URL('./src/downloadableContent', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
})
