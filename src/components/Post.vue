<template>
<div class="content">
    <img :src="info.img" class="content-img" @click="show('working')">
    <h3 class="content-name">{{info.name}}</h3>
    <span class="conetent-type">{{info.type}}</span>
    <Form :author="user"/>
   <h3>{{user?.uid}}</h3>
    <ul class="content-comments">
        <li v-for="(comment,i) in comments" :key="i"
        @click="show(i)">
            <h4>{{comment.author}}:</h4>
            <p>{{comment.text}}</p>
        </li>
    </ul>
</div>
</template>

<script>
import Form from './Form.vue'
import {ref,  onValue, db} from "../assets/modulesJS/fireBase"
import key from "../assets/modulesJS/getKeyInObject"
import {onAuthStateChanged, auth} from '../assets/modulesJS/fireBaseAuth';

   export default {
        inject: ['list'],
        data(){
            return { 
                info: 'info',
                user: '',
            }
        },  
        created(){
            this.getInfo();
            this.isSigned()
        },
        components: {
            Form: Form
        },
        computed:{
            comments(){
                return this.info.comments
            }
        },
        methods: {
            show(i){console.log(i)},
            getInfo(){
                    const postRef = ref(db, 'posts/' + this.$route.params.key)
                    onValue(postRef, snap => {
                       this.info = snap.val()
                    })
            },
            getKey(item){
                console.log(key(item))
                return key(item)
            },
            isSigned(){
                        onAuthStateChanged(auth, (user) => {
                            this.user = user;
                       })
            },
        }
    }
</script>
<style lang="scss" scoped>
@import "../assets/scss/general.scss";
    .content {
        padding: 10%;
        display:flex;
        flex-direction:column;
        align-items: center;

        &-comments{
            width: 100%;
            padding-top: 10%;
            li {
                padding: 5% 10% 5% 0%;
                border: 1px solid rgba(122, 122, 122, 0.5);
                border-left:none;
                border-right:none;
                border-top: none;
                display:flex;
                &:first-child{
                    border-top: 1px solid rgba(122, 122, 122, 0.5);                }
                h4 {
                    width: 20%;
                    margin-right: 10%;
                }
                
            }
        }
    }
 img {
     width: 200px;
     height: 200px;
 }
</style>