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
    <Modal 
        tag="div" 
        v-if="modal" 
        :msg="modal" 
        :class="user ? 'success' : 'error'"
        @modalClose="modal = false"/>
</div>
</template>

<script>
import {signIn, auth, onAuthStateChanged, sign_Out} from '../assets/modulesJS/fireBaseAuth';
import modalMessage from './modalMessage.vue';
import {showWindow} from '../assets/modulesJS/gsapModalWindow';

export default {
    data(){
        return {
            email: '',
            password: '',
            user: '',
            modal: false,
        }
    },
    created(){
        this.isSigned();
    },
    methods:{
       async signIn(){
            await signIn(this.email, this.password)
            .then(res => { 
                if(res.status){
                    this.modal = "Успешно!";
                    setTimeout(()=>{
                       this.$router.push('/')
                    }, 1500)
                }
                else{
                    this.modal = res.error.message;
                }
            })
            showWindow('.modalMessage')
            this.cleareInput()
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
        cleareInput(){
            this.email = '';
            this.password = '';
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
    @media(min-width: $desktop){
        .wrapper{
   
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
                padding: 1% 2% 1% 2%;
                width: auto;
                height: 2vw;
                min-height: 0;
            }
        }
}
    }
</style>