<template>
<div class="wrapper">
  <form class="signInForm">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit" 
      @click="signIn()">вход</button>
      <h5>sign in{{user}}</h5>
      <h1>{{status}}</h1>
  </form>
</div>
</template>

<script>
import {signIn} from '../assets/modulesJS/fireBaseAuth'
import {auth, onAuthStateChanged} from '../assets/modulesJS/fireBaseAuth'

export default {
    data(){
        return {
            email: '',
            name: '',
            password: '',
            user: '',
        }
    },
    computed: {
        status(){
            return this.isSigned()
        }
    },
    methods:{
        signIn(){
            return new Promise((res, rej )=> {
                signIn(this.email, this.password)
            })
            .then((a)=>{
                this.isSigned()
            })
        },
        isSigned(){
                    onAuthStateChanged(auth, (user) => {
                    if (user) {
                        this.user = user.displayName
                        } 
                        else {
                        this.user = null
                        }
                    })
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';
@import '../assets/scss/general.scss';
.wrapper{
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    .signInForm {
            width: 50%; 
            display:flex;
            flex-direction:column;
            align-items:center;

            input {
                @include input;
                margin-bottom: 5%;
            }
            button {
                @include button;
            }
        }
}
    
</style>