<template>
<div class="wrapper" >
  <form class="signUpForm" v-if="!signed"> 
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
    <div class="signedBlock" v-if="signed">
        <p>вход осуществлен по пользователем {{signed}}</p>
        <button type="submit" @click="out">выйти</button>
    </div>
</div>
</template>

<script>
import {createUser, auth, getUser, sign_Out, onAuthStateChanged} from '../assets/modulesJS/fireBaseAuth';
import modalMessage from './modalMessage.vue';

export default {
    data(){
        return {
            email: '',
            name: '',
            password: '',
            modal: false,
            status: '',
            signed: '',
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
        },
         out(){
            return sign_Out()
        },
    },
    components: {
        Modal: modalMessage,
    },
    created(){
       onAuthStateChanged(auth,(user) => {
                if(user){
                    this.signed = user.displayName
                }
                else {
                    this.signed = false
                }
            })
    },
   
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
    .signUpForm, .signedBlock{
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

@media(min-width: $desktop){
    .wrapper{
    
    .signUpForm, .signedBlock{
          

            input {
                
            }
            button {
                padding: 1% 2% 1% 2%;
                width: auto;
                height: 2vw;
                min-height: 0;
            }
        }
}
}
</style>