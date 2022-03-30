<template>
  <form>
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit" 
      @click="signIn()">вход</button>
      <div>{{user}}</div>
  </form>
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
        }
    },
    created(){
        this.detectUser()
    },
    methods:{
        signIn(){
            return signIn(this.email, this.password)
        },
        // detectUser(){
        //     onAuthStateChanged(auth, (user) => {
        //     console.log('state change')
        //     if (user) {
        //         console.log(user.displayName);
        //         this.user = user.displayName;
        //         return user.displayName
        //     } 
        //     })
        // }
    },
    computed: {
        // user(){
        //     return authState()
        // }
    }
}
</script>

<style>

</style>