<template>
  <div class="profil">
      <h2 class="profil-name">{{user?.displayName}}</h2>
      <img class="profil-img" :src="user?.photoURL">
      <p class="profil-email">{{user?.email}}</p>
      <button @click="buildIMG">img</button>
  <p>{{user}}</p>
  </div>
</template>

<script>
import {onAuthStateChanged, auth} from '../assets/modulesJS/fireBaseAuth';

export default {
  data(){
    return {
      user: '',
    }
  },
  created(){
    onAuthStateChanged(auth, (user) => {
          this.user = user
      })
  },
  methods:{
    buildIMG(){
    }
  }
}
</script>

<style>

</style>