<template>
  <router-link class="links-home" 
  to='/'
  @click="signUp = false"><span>home</span></router-link>
  <Menu :list="list"/>
  <router-view :key="$route.params.key"></router-view>
  <h1>{{user}}</h1>
</template>


<script>
import Menu from './components/Menu.vue';
import getList from './assets/modulesJS/getList';
import {authState} from './assets/modulesJS/fireBaseAuth';

import {computed} from 'vue';
  export default{
      data(){
        return {
          list: '',
        }
      },
      created(){
        console.log('created')
        this.detectUser()
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
