<template>
<div class="content">
    <img :src="info.img" class="content-img">
    <h3 class="content-name">{{info.name}}</h3>
    <span class="conetent-type">{{info.type}}</span>
    <Form @signIn="$emit('showModal')" :author="user"/>
    <h3>{{user?.uid}}</h3>
    <!-- <ul class="content-comments"> -->
    <transition-group class="content-comments" tag="ul" name="list">
        <li v-for="(comment,i) in comments" :key="i"
        @click="show(i)">
            <h4>{{comment.author}}:</h4>
            <p>{{comment.text}}</p>
            <p>{{comment.time?.day}} {{comment.time?.hours}}:{{comment.time?.min}}</p>
        </li>
    </transition-group>
    <!-- </ul> -->
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
            this.isSigned();
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
                justify-content: space-between;
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
.list-move, 
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-300px);
}

.list-leave-active {
  position: absolute;
}
</style>