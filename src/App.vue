<template>
  <Link class="link-home" :to="'/'"><span>на главную</span></Link>
  <Link class="link-signIn"  :to="'signin'" v-if="!user && $route.path != '/signin'"><span>войти</span></Link>
  <Link class="link-profile" v-if="user" :to="'profil'"><span>профиль</span></Link>
  <button @click="out" class="link-logout" v-if="user"><span>signOut</span></button>
  <Menu :list="list"/>

  <router-view :key="$route?.params.key" @showModal="modalSignIn = true"></router-view>
  <modal-sign-in 
    v-if="modalSignIn" 
    @modalClose="modalSignIn = false"
  />
</template>


<script>
import Menu from './components/Menu.vue';
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
.link-home, .link-signIn, .link-profile, .link-logout {
    position: sticky;
    z-index: 5;
    left: 48vw;
    top: 1vh;
    span {
      display: none;
    }
    @include pseudoClassMenuItem;
    &::after{
      transform: translateX(110%);
    }
}

.link-signIn, .link-profile, .link-logout {
  left: 90%; 
}
</style>
