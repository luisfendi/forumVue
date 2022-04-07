<template>
  <form>
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit" 
      @click="signIn()">вход</button>
      <h5>sign in{{user}}</h5>
      <h1>{{status}}</h1>
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
    computed: {
        status(){
            return this.isSigned()
        }
    },
    methods:{
        signIn(){
            return new Promise((res, rej )=> {
                console.log('promise')
                signIn(this.email, this.password)
            })
            .then((a)=>{
                this.isSigned()
            })
        },
        isSigned(){
                    onAuthStateChanged(auth, (user) => {
                    console.log('state change')
                    if (user) {
                        this.user = user.displayName
                        console.log(user.displayName)
                        } 
                        else {
                        this.user = null
                        }
                    })
        }
    },
}
</script>

<style>

</style>