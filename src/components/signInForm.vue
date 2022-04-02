<template>
  <form>
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit" 
      @click="signIn()">вход</button>
      <h5>sign in{{user}}</h5>
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
            user: '',
        }
    },
    methods:{
        signIn(){
            return new Promise((res, rej )=> {
                console.log('promise')
                signIn(this.email, this.password)
                res('a')
            })
            .then((a)=>{
                this.isSigned(a)
            })
        },
        isSigned(res){
                    onAuthStateChanged(auth, (user) => {
                    console.log('state change' + res)
                    if (user) {
                        this.user = user.displayName
                        console.log(user.displayName)
                        } 
                    })
        }
    },
}
</script>

<style>

</style>