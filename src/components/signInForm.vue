<template>
<div class="wrapper">
    <form class="signInForm" v-if="!user">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit" 
      @click="signIn()">вход</button>
    </form>
    <div class="signedBlock" v-if="user">
        <p>вход осуществлен по пользователем {{user}}</p>
        <button type="submit" @click="out" 
            >выйти</button>
    </div>
    <Modal tag="h4" v-if="modal" :msg="modal"/>
</div>
</template>

<script>
import {signIn, auth, onAuthStateChanged, sign_Out} from '../assets/modulesJS/fireBaseAuth'
import modalMessage from './modalMessage.vue'

export default {
    data(){
        return {
            email: '',
            name: '',
            password: '',
            user: '',
            modal: false,
        }
    },
    created(){
        this.isSigned();
    },
    methods:{
        signIn(){
            signIn(this.email, this.password)
            .then(res => {
                if(res.status){
                    this.$router.push('/');
                }
                else{
                    this.modal = res.error.message
                }
            })
        },
        isSigned(){
                    onAuthStateChanged(auth, (user) => {
                    if (user) {
                        this.user = user.displayName;
                        } 
                        else {
                        this.user = null
                        }
                    })
        },
        out(){
            return sign_Out()
        },
        
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
    .signInForm, .signedBlock {
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