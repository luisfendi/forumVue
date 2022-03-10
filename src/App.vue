<template>
  <h1 class="title">Forum</h1>
  <Menu :list="list"/>
  <router-view></router-view>
</template>


<script>
import Menu from './components/Menu.vue';

  export default{
      data(){
        return {
          name: 'LUIANAV',
          list: ['brazil', 'lisabon', 'moscow']
        }
      },
      components: {
        Menu: Menu
      }
  }
</script>


<style lang="scss" scoped>
@import './assets/base.css';


#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.title {
 
}

</style>
