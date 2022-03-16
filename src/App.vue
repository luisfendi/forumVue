<template>
  <div class="text">
    <h1 class="text-title">Forum</h1>
    <h3 class="text-title1">about <span class="sub-title">pictures</span></h3>
  </div>
  <Menu :list="list"/>
  <router-view></router-view>
</template>


<script>
import Menu from './components/Menu.vue';
import textAnimate from './assets/modulesJS/gsapText.js'
  export default{
      data(){
        return {
          name: 'LUIANAV',
          list: ['brazil', 'lisabon', 'moscow']
        }
      },
      components: {
        Menu: Menu
      },
      mounted() {
        textAnimate('.sub-title', 'phrases')
      },
  }
</script>


<style lang="scss" scoped>
@import './assets/base.css';
@import './assets/scss/variables.scss';


#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

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
    color: red;
    background: $orange;
  }
.green {
    color: green;
    background: $green;
}
</style>
