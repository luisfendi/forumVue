<template>
    <div class="text">
      <div class="cube"></div>
      <div class="cube2"></div>
      <h1 class="text-title">Forum</h1>
      <h3 class="text-title1">about <span class="sub-title">pictures</span></h3>
     <!-- <p class="text-title2">Авторизуйся и оставь комментарий под постом</p>
    --></div>
</template>

<script>
import textAnimate from '../assets/modulesJS/gsapText.js'

    export default {
        mounted() {
        textAnimate('.sub-title', 'phrases')
      },
    }
</script>

<style  lang="scss">
@import '../assets/scss/general.scss';

.text{
  position: absolute;
  top: 30vh;
  left: 25vw;
  &-title {
    font-size: 5rem;
    position: relative;
    z-index: 3;
  }
   &-title1 {
    font-size: 2rem;
    z-index: 3;
    position: relative;
  }
  &-title2{
    font-size: 1.5rem;
    margin-top: 10%;
    z-index: 3;
  }
  .cube, .cube2 {
    width: 40vw;
    height: 40vw;
    background: $green2;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row-reverse;
    &-item {
      width:30%;
      background: $green2;
      border: 2px solid black;
    }
  }
  .cube2 {
        background: $blue;
        z-index: 0;
  }
}


.orange {
    color: black;
    background: $orange;
  }
.green {
    color: white;
    background: $green;
}


</style>