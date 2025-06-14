import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import FontAwesomeIcon from "./plugins/fontawesome"
import './shared/styles/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import router from './router'

const pinia = createPinia();

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(pinia)
    .mount('#app')
