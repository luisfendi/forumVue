import { createApp } from 'vue'
import App from './App.vue'
import {routing} from './router.js'
  
import {auth, onAuthStateChanged} from './assets/modulesJS/fireBaseAuth'

const app = createApp(App);
app.config.unwrapInjectedRef = true


routing().then(a => {
    app.use(a)
    app.mount('#app');
})

