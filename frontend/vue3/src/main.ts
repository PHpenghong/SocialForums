import { createApp } from 'vue'
import './style.css'
// import pinia from '@/store'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$testInstance = 'testInstance'

app
  .component('SvgIcon', SvgIcon)
  // .use(pinia)
  .use(router)
  .mount('#app')
