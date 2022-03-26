<template>
  <router-link class="links-home" 
  to='/'
  @click="signUp = false"><span>home</span></router-link>
  <Menu :list="list"/>
  <router-view :key="$route.params.key"></router-view>
  <button @click="signUp = true">sign up</button>
  <sign-up-form v-if="signUp"/>
</template>


<script>
import Menu from './components/Menu.vue';
import getList from './assets/modulesJS/getList';
import signUpForm from './components/signUpForm.vue';

import {computed} from 'vue';
  export default{
      data(){
        return {
          list: '',
          signUp: false,
        }
      },
      beforeMount(){
                    getList().then(a => {
                      this.list = a;
                    });
                    
      },
      components: {
        Menu: Menu,
        'sign-up-form': signUpForm,
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
