import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from "vite-plugin-pages"
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import {HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    Pages(),
    Components({
      dirs: [
        'src/components',
        'src/sections'
      ],
      resolvers: [
        IconsResolver({
          prefix: false,
          enabledCollections: ['heroicons-outline']
        }),
        HeadlessUiResolver()
      ]
    }),
    Icons(),
    AutoImport({
      imports: 'vue'
    })
  ]
})
