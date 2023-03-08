// console.log('hello world')
import { createApp } from 'vue'; //依赖关系的打理
import App from './App.vue'

const app = createApp(App)
app.mount('#root')
//当以main.js作为入口时 引入app.vue 但是 .vue 文件无法识别

const root = document.getElementById('root')
root.textContent = '你喵贵姓？'


