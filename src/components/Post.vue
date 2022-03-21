<template>
<div class="content">
    <img :src="info.img" class="content-img" @click="show('working')">
    <h3 class="content-name">{{info.name}}</h3>
    <span class="conetent-type">{{info.type}}</span>
    <Form/>
   <ul class="content-comments">
       <li v-for="(comment,i) in comments" :key="i"
       @click="show(i)"
       >
            <h4>{{comment.author}}</h4>
            <p>{{comment.text}}</p>
        </li>
   </ul>
</div>
</template>

<script>
import Form from './Form.vue'
import {ref,  onValue, db} from "../assets/modulesJS/fireBase"
import key from "../assets/modulesJS/getKeyInObject"

   export default {
        inject: ['list'],
        data(){
            return { 
                info: 'info',
            }
        },  
        created(){
            this.getInfo();
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
            }
        }
    }
</script>
<style>
 img {
     width: 200px;
     height: 200px;
 }
</style>