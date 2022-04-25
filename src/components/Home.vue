<template>
    <div class="text">
      <h1 class="text-title">Forum</h1>
      <h3 class="text-title1">about <span class="sub-title">pictures</span></h3>
      <p class="text-title2">Авторизуйся и оставь комментарий под постом</p>
    </div>
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
  border: 2px solid black;
  &:before {
    content: '';
    position: absolute;
    box-shadow: inset 0px 0px 0px 5px red;
    left: 0;
    top: 0;
    right:0;
    bottom: 0;
    margin: -5%;
    animation: border 5s linear infinite;
  }
  &-title {
    font-size: 5rem;
  }
   &-title1 {
    font-size: 2rem;
  }
  &-title2{
    font-size: 1.5rem;
    margin-top: 10%;
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

@keyframes border {
  0%, 100% {
    clip: rect(0px, 240px, 15px, 0);
  }
  25% {
    clip: rect(0px, 20px, 240px, 0);
  }
  50% {
    clip: rect(240px, 240px, 240px, 0);
  }
  75%{
      clip: rect(0px, 240px, 240px, 240px);
  }
}
</style>