<template>
<div class="wrapper">
  <form class="signUpForm"> 
      <input type="name" placeholder="name" v-model="name">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit" @click="signUp">регистрация</button>
  </form>
  <Modal 
        tag="div" 
        v-if="modal" 
        :msg="modal" 
        :class="status ? 'success' : 'error'"
        @modalClose="modal = false"/>
</div>
</template>

<script>
import {createUser} from '../assets/modulesJS/fireBaseAuth';
import modalMessage from './modalMessage.vue';

export default {
    data(){
        return {
            email: '',
            name: '',
            password: '',
            modal: false,
            status: '',
        }
    },
    methods:{
        signUp(){
             createUser(this.email, this.password, this.name)
            .then(res => {
                if(typeof res == 'string'){
                    this.modal = res;
                    this.status = false
                }
                else{
                    this.modal = "Успешно!";
                    this.status = true;
                    setTimeout(()=>{
                       this.$router.push('/')
                    }, 1500)
                }
            })
        }
    },
    components: {
        Modal: modalMessage,
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