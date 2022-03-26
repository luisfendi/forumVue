<template>
  <form>
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit" @click="signUp">confirm</button>
  </form>
</template>

<script>
import createUser from '../assets/modulesJS/fireBaseAuth'
export default {
    data(){
        return {
            email: '',
            password: '',
        }
    },
    methods:{
        signUp(){
            return createUser()
        }
    }

}
</script>

<style>

</style>