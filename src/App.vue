<template>
  <Link class="links-home" :to="'/'"/>
  <Menu :list="list"/>
  <router-view :key="$route.params.key" @showModal="modalSignIn = true"></router-view>
  <Link class="profile-link" :to="'profil'" :title="'profile'"/>
  <button @click="out" v-if="user">signOut</button>
  <Link :title="'войти'" :to="'signin'" v-if="!user"/>
  <modal-sign-in 
  v-if="modalSignIn" 
  @modalClose="modalSignIn = false"
  />
</template>


<script>
import Menu from './components/Menu.vue';
import Link from './components/routerLink.vue';
import getList from './assets/modulesJS/getList';
import {onAuthStateChanged, sign_Out, auth} from './assets/modulesJS/fireBaseAuth';

import {computed} from 'vue';
  export default{
      data(){
        return {
          list: '',
          user: '',
          modalSignIn: false,
        }
      },
      methods: {
        isSigned(res){
                    onAuthStateChanged(auth, (user) => {
                    this.user = user
                    })
        },
        out(){
          return sign_Out()
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
