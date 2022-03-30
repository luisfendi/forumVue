<template>
  <form>
      <input type="name" placeholder="name" v-model="name">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit" @click="signUp">регистрация</button>
  </form>
</template>

<script>
import {createUser} from '../assets/modulesJS/fireBaseAuth'
export default {
    data(){
        return {
            email: '',
            name: '',
            password: '',
        }
    },
    methods:{
        signUp(){
            return createUser(this.email, this.password, this.name)
        }
    }

}
</script>

<style>

</style>