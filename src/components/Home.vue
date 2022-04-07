<template>
    <div class="text">
      <h1 class="text-title">Forum</h1>
      <h3 class="text-title1">about <span class="sub-title">pictures</span></h3>
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
  &-title {
    font-size: 5rem;
  }
   &-title1 {
    font-size: 2rem;
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