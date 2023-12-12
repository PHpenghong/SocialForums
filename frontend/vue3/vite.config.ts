import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import viteCompression from 'vite-plugin-compression'

const pathResolve = (pathStr: string) => path.resolve(__dirname, pathStr)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.md$/, /\.vue$/]
    }),
    vueJsx(),
    viteCompression(),
    createSvgIconsPlugin({
      iconDirs: [pathResolve('./src/icons/svg')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  css: {
    preprocessorOptions: {
      sass: {
        // \n 处理文件中多个引入报换行错误的问题
        additionalData: "@import './src/styles/color.sass'\n"
      }
    }
  },
  resolve: {
    alias: {
      '@': pathResolve('src')
    },
    extensions: ['.js', '.json', '.ts', 'vue']
  },
  // 开发服务器配置
  server: {
    hmr: true,
    host: '0.0.0.0',
    port: 9425,
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
        // target: 'http://172.16.39.136:9423'
      }
    }
  },
  optimizeDeps: {
    include: ['vue', 'pinia', 'vue-router', 'axios']
  }
})
