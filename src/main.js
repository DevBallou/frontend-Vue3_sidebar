import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'
import axios from 'axios'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

axios.defaults.baseURL = "http://localhost:8000/api/v1";
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStore.getItem('token')}`;

const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
})

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
