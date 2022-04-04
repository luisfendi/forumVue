<template>
     <form action="#" class="form">
        <input type="text" v-model="comment" class="form-comment" placeholder="your comment">
        <button class="from-button"
        @click.prevent="send">оставить коммент</button>
    </form>
</template>

<script>
import sendComment from "../assets/modulesJS/sendComment"
export default {
    props: ['author'],
    data(){
        return {
            comment: '',
        }
    },
    methods: {
        send(){
            if(this.author){
                sendComment(this.$route.params.key, {
                author: this.author?.displayName,
                text: this.comment,
                uid: this.author?.uid ,
                })
            } 
            else {
                this.$emit('signIn')
            }
        }
    }
}
</script>

<style>

</style>