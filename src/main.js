import {createApp} from 'vue'
import App from './App.vue'
import {routing} from './router.js'
  
const app = createApp(App);
app.config.unwrapInjectedRef = true

import Link from './components/routerLink.vue';
import ModalSignIn from './components/ModalSignIn.vue';

app.component('Link', Link);
app.component('ModalSignIn', ModalSignIn);

if(routing()){
    routing().then(a => {
        app.use(a);
        app.mount('#app');
    })
}
else{
    console.log('смотри настройки роутера и мэйн js по случаю неиспраности соединения')
    app.mount('#app');
}



