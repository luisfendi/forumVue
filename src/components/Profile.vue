<template>
  <div class="profil wrapper">
      <img class="profil-img" :src="user?.photoURL">
      <div>
        <h1 class="profil-text">Профиль пользователя:</h1>
        <h2 class="profil-name">{{user?.displayName}}</h2>
        <p class="profil-email">{{user?.email}}</p>
      </div>
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
      width: 50%;
      border: 1px solid black;
      min-width: 30vw;
      min-height: 30vw;
    }
    &-name, &-email {
      width: 50%;
    }
  }

  @media(min-width: $desktop){
    .profil {
      align-items: start;
    &-img{
      width: 25%;
      min-width: 10vw;
      min-height: 10vw;
    }
    &-name, &-email {
      width: 50%;
    }
  }
  }
</style>