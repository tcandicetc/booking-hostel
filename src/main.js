import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './assets/css/style.css'

createApp(App).use(router).mount('#app')
