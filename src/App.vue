<template>
  <Link class="links-home" :to="'/'" @click="signUp = false"/>
  <Menu :list="list"/>
  <router-view :key="$route.params.key"></router-view>
  <h3>{{user}}</h3>
</template>


<script>
import Menu from './components/Menu.vue';
import Link from './components/routerLink.vue';
import getList from './assets/modulesJS/getList';
import {onAuthStateChanged, auth} from './assets/modulesJS/fireBaseAuth';

import {computed} from 'vue';
  export default{
      data(){
        return {
          list: '',
          user: '',
        }
      },
      methods: {
        isSigned(res){
                    onAuthStateChanged(auth, (user) => {
                    if (user) {
                        this.user = user.displayName
                        } 
                    })
        }
      },
      created(){
         this.isSigned()
      },
      beforeMount(){
                    getList().then(a => {
                      this.list = a;
                    });              
      },
      computed:{
        
      },
      components: {
        Menu: Menu,
        Link: Link,
      },
      provide(){
        return {
          list: computed(() => this.list)
        }
      }
      
  }
</script>


<style lang="scss" scoped>
@import './assets/base.css';
@import './assets/scss/general.scss';


#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;

}

</style>
