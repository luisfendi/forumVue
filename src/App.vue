<template>
  
  <Menu/>
  <router-link to="/">Home</router-link>
  <router-view></router-view>
</template>


<script>
import Menu from './components/Menu.vue';
  export default{
      data(){
        return {
          name: 'LUIANAV',
          list: [
                {
                name: 'monika',
                img: 'https://images.pexels.com/photos/10222837/pexels-photo-10222837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                },
                {
                name: 'veronika',
                img: 'https://images.pexels.com/photos/10047607/pexels-photo-10047607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                },
                {
                name: 'angelina',
                img: 'https://images.pexels.com/photos/10047610/pexels-photo-10047610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }]
        }
      },
      components: {
        Menu: Menu
      },
      
      provide(){
        return {
          list: this.list
        }
      }
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
