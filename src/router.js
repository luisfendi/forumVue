import * as VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Post from './components/Post.vue'
import Create from './components/Create.vue'
import signUpForm from './components/signUpForm.vue'
import signInForm from './components/signInForm.vue'
import Profile from './components/Profile.vue'
import getList from './assets/modulesJS/getList'



const routes = [
    {path: '/', component: Home },
    {path: '/create', component: Create},
    {path: '/signup', component: signUpForm},    
    {path: '/signin', component: signInForm},    
    {path: '/profil', component: Profile},    
]

async function routing(){
    let list = await getList();
    if(typeof list == 'string'){
      console.log('нет соединения с сервером:' + list )
      return VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes: routes, 
      })
    }
    else {
      console.log(list)
      list.forEach(el => {
        routes.push({path: `/:key`, component: Post})
      })
      return VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes: routes, 
      })
    }  
}

export {routing} 