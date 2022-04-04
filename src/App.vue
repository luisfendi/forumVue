<template>
  <Link class="link-home" :to="'/'">на главную</Link>
  <Link class="link-signIn"  :to="'signin'" v-if="!user && $route.path != '/signin'">войти</Link>
  <Link class="link-profile" v-if="user" :to="'profil'">профиль</Link>
  <Menu :list="list"/>
  <router-view :key="$route?.params.key" @showModal="modalSignIn = true"></router-view>
  <button @click="out" v-if="user">signOut</button>
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

.link-home, .link-signIn, .link-profile {
    position: sticky;
    left: 48vw;
    top: 1vh;
    &::after{
        content: '';
        display: block;
        width: 5vw;
        height: 5vw;
        background-image: url("./assets/icons/home.svg");
        background-size:cover;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(110%);
    }
}

.link-signIn {
  left: 90%;
  &::after{
        background: green; 
    }
}

.link-profile{
  left: 90%;
  &::after{
        background: blue; 
    }
}


</style>
