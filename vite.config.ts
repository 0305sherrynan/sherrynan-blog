
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  server:{
    hmr:true,
    port:8080,//配置打开的端口号
    open:true,//默认启动时打开brower
    proxy:{
      "/zwz":{
        target:'http://localhost:3100',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/zwz/, ""),
      }
    }
  },
  resolve:{
    alias:[
      {
        find:'@',
        replacement:resolve(__dirname,'src')
      }
    ]
  }
})