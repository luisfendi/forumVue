import * as VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Post from './components/Post.vue'
import Create from './components/Create.vue'
import getList from './assets/modulesJS/getList'



const routes = [
    { path: '/', component: Home },
    {path: '/create', component: Create}    
  ]


async function routing(){
  let list = await getList();
  list.forEach(el => {
    routes.push({path: `/:key`, component: Post})
  })
    return VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes, 
  })
}

 export {routing}