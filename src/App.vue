
<template>
  <h2>App</h2>
  <Nav :list="list"/>
  <router-view></router-view>
</template>


<script>
import Nav from './components/Nav.vue';

  export default{
      data(){
        return {
          name: 'LUIANAV',
          list: ['brazil', 'lisabon', 'moscow']
        }
      },
      components: {
        Nav: Nav
      }
  }
</script>


<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}


</style>
