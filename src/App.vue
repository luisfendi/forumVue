
<script>
  export default{
      
  }
</script>

<template>
  <h2>App</h2>
  <div>
   <router-link to="/">Go to Home</router-link>
   <router-link to="/about">Go to About</router-link>
  </div>

    <router-view></router-view>

</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}


</style>
