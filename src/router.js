import * as VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Post from './components/Post.vue'




const routes = [
    { path: '/', component: Home },
    { path: '/:city', component: Post },
    
  ]



const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })

export {router}