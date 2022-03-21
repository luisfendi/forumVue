<template>
     <form action="#" class="form">
        <input type="text" v-model="author" class="form-author" placeholder="your name">
        <input type="text" v-model="comment" class="form-comment" placeholder="your comment">
        <button class="from-button"
        @click.prevent="send">оставить коммент</button>
    </form>
</template>

<script>
import sendComment from "../assets/modulesJS/sendComment"
export default {
    data(){
        return {
            comment: '',
            author: '',
        }
    },
    methods: {
        send(){
            sendComment(this.$route.params.key, {
                author: this.author,
                text: this.comment
            })
        }
    }
}
</script>

<style>

</style>