import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' //es6模块化，引入node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    port:8888
  },
  resolve:{
    alias:{//__dirname 当前工作目录文件夹
      '@':resolve(__dirname,'src')
    }
  }
})
