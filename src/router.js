import * as VueRouter from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })

export {router}