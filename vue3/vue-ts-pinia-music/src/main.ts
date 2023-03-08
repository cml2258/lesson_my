import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import '@/assets/css/index.styl'
import '@/theme/index.styl'

const app = createApp(App)

app  
  .use(router)
  .use(createPinia())
  .mount('#app')
