import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './main.less'

import { createPinia } from 'pinia'
createApp(App)
    .use(createPinia())
    .mount('#app')
