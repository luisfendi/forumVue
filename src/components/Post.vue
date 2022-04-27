<template>
    <div class="content">
        <img :src="info.img" class="content-img">
        <h3 class="content-name">{{info.name}}</h3>
        <span class="conetent-type">{{info.type}}</span>
        <Form @click="!user ? $emit('showModal') : ''" :author="user"/>
        <transition-group class="content-comments" tag="ul" name="list">
            <li v-for="(comment,i) in comments" :key="i">
                <h4>{{comment.author}} <span v-if="comment?.uid == user?.uid">you</span></h4>
                <p>{{comment.text}}</p>
                <p>{{comment.time?.day}} {{comment.time?.hours}}:{{comment.time?.min}}</p>
            </li>
        </transition-group>
    </div>
</template>

<script>
import Form from './Form.vue'
import {ref,  onValue, db} from "../assets/modulesJS/fireBase"
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
            max-height: 50vh;
            overflow: auto;
            li {
                padding: 5% 10% 5% 0%;
                border: 1px solid rgba(122, 122, 122, 0.5);
                border-left:none;
                border-right:none;
                border-top: none;
                display:flex;
                justify-content: space-between;
                &:first-child{
                    border-top: none;                
                    }
                h4 {
                    width: 20%;
                    margin-right: 10%;
                    span {
                        opacity: 0.3;
                        font-size: .7rem;
                    }
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