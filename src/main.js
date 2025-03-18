import { createApp } from 'vue'
import App from './App.vue'
import FontAwesomeIcon from "./plugins/fontawesome"
import './assets/styles/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import router from './router'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
