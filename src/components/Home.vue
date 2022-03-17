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