import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/self-repository/css/general.css'

import router from './router'
import store from './store'
import App from './app.vue'
import { createApp } from 'vue'

createApp(App)
.use(store)
.use(router)
.mount('#app')