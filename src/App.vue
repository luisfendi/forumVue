<template>
  <header class="header">
      <div class="header-links">
        <Link  class="link-home" :to="'/'"><span>на главную</span></Link>
        <Link  class="link-signIn"  :to="'signin'" v-if="!user && $route.path != '/signin'"><span>войти</span></Link>
        <Link  class="link-profile" v-if="user" :to="'profil'"><span>профиль</span></Link>
        <a @click="out" class="link-logout" v-if="user"><span>signOut</span></a>
      </div>
      <Menu :list="list"/>
  </header>
  <router-view :key="$route?.params.key" @showModal="modalSignIn = true"></router-view>
  <Footer/>
  <modal-sign-in 
    v-if="modalSignIn" 
    @modalClose="modalSignIn = false"
  />
</template>


<script>

import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';
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
                 if(typeof a == 'string'){
                   return false
                 }else{
                   this.list = a
                 }
              });    
      },
      components: {
        Menu: Menu,
        Footer: Footer,
      },
      provide(){
        return {
          list: computed(() => this.list),
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

.header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5% 7% 5% 0%;
    align-items:center;
    background: $green2;
}

.header-links{
  order: 2;
  display: flex;
  justify-content: flex-end;
  width: 50%;
}

.link-home, .link-signIn, .link-profile, .link-logout {
    min-width: 10vw;
    z-index: 4;
    span {
      display: none;
    }
    @include pseudoClassMenuItem;
    &::after{
      transform: translateX(100%);
    }
}


</style>
