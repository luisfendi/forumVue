import * as VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Post from './components/Post.vue'




const routes = [
    { path: '/', component: Home },    
  ]
 let list =  [
    {
    name: 'monika',
    img: 'https://images.pexels.com/photos/10222837/pexels-photo-10222837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
    name: 'veronika',
    img: 'https://images.pexels.com/photos/10047607/pexels-photo-10047607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
    name: 'angelina',
    img: 'https://images.pexels.com/photos/10047610/pexels-photo-10047610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
]
  let generateListPath = list.map(v => {
    return {
      path: `/:name`,
      component: Post
    }
  })


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes.concat(generateListPath), 
  })

export {router}