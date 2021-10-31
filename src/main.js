import { createApp } from 'vue'
import App from './App.vue'
import router from '/src/router.js'
import store from '/src/store.js'

createApp(App).use(router).use(store).mount('#app')
