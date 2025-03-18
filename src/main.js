import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import FontAwesomeIcon from "./plugins/fontawesome";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
