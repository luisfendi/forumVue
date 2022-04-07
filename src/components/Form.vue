<template>
     <form action="#" class="form">
        <input type="text" v-model="comment" class="form-comment" placeholder="your comment">
        <button class="form-button"
        @click.prevent="send">оставить коммент</button>
    </form>
</template>

<script>
import sendComment from "../assets/modulesJS/sendComment";

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

<style lang="scss" scoped>
@import '../assets/scss/general.scss';

    .form{
        display:flex;
        &-comment{
            border: 1px solid rgba(0,0,0, 0.2)
        }
        &-button{
            @include button;
            background: $blue;
        }
    }
</style>