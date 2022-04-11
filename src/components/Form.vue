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
                time: this.getTime()
                })
            } 
            else {
                this.$emit('signIn')
            }
        },
        getTime(){
            let date = new Date();
            let week = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]
            return {day: week[date.getDay()],
                    hours: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
                    min: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
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