<template>
  <div class="profil">
      <h1 class="profil-text">Профиль пользователя:</h1>
      <img class="profil-img" :src="user?.photoURL">
      <h2 class="profil-name">{{user?.displayName}}</h2>
      <p class="profil-email">{{user?.email}}</p>
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

<style lang="scss" scoped>
@import '../assets/scss/general.scss';

  .profil {
    @include wrapper;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: flex-start;
    &-img{
      width: 100%;
      border: 1px solid black;
      min-width: 50vw;
      min-height: 50vw;
    }
    &-name, &-email {
      width: 50%;
    }
  }
</style>