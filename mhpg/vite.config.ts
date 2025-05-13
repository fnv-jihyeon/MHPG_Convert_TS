import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
        // additionalData: `@use "@/styles/element/index.scss" as *;`,
      }
    }
  },
  plugins: [
    vue(),
    vueDevTools()
  ],
  server: {
    host: true,
    port: 33001
  },
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'mhpay',
      fileName: (format: string) => `mhpay.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        entryFileNames: '[name].[hash].js'
      }
    }
  }
})
