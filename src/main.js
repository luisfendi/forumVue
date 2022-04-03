import { createApp } from 'vue'
import App from './App.vue'
import {routing} from './router.js'
  
import {auth, onAuthStateChanged} from './assets/modulesJS/fireBaseAuth'

const app = createApp(App);
app.config.unwrapInjectedRef = true


import Link from './components/routerLink.vue';
import ModalSignIn from './components/ModalSignIn.vue';

app.component('Link', Link);
app.component('ModalSignIn', ModalSignIn);

routing().then(a => {
    app.use(a)
    app.mount('#app');
})

