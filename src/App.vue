<template>
  
  <Menu :list="list"/>
  <router-view :key="$route.params.key"></router-view>
</template>


<script>
import Menu from './components/Menu.vue';
import getList from './assets/modulesJS/getList'
import {computed} from 'vue';
  export default{
      data(){
        return {
          list: '',
        }
      },
      beforeMount(){
                    getList().then(a => {
                      this.list = a;
                    });
                    
      },
      components: {
        Menu: Menu
      },
      provide(){
        return {
          list: computed(() => this.list)
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
