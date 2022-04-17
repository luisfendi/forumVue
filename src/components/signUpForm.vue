<template>
<div class="wrapper">
  <form class="signUpForm"> 
      <input type="name" placeholder="name" v-model="name">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit" @click="signUp">регистрация</button>
  </form>
</div>
</template>

<script>
import {createUser} from '../assets/modulesJS/fireBaseAuth'
export default {
    data(){
        return {
            email: '',
            name: '',
            password: '',
        }
    },
    methods:{
        signUp(){
            return createUser(this.email, this.password, this.name)
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';
@import '../assets/scss/general.scss';

.wrapper{
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    .signUpForm{
            width: 50%; 
            display:flex;
            flex-direction:column;
            align-items:center;

            input {
                @include input;
                margin-bottom: 5%;
            }
            button {
                @include button;
            }
        }
}
</style>