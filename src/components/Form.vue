<template>
     <form action="#" class="form">
        <input type="text" v-model="comment" class="form-comment" placeholder="your comment">
        <button class="form-button"
        @click.prevent="send">
        <span class="form-button--text">оставить коммент</span>
        <span class="form-button--icon"></span>
        </button>
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
            //if(this.author){
                sendComment(this.$route.params.key, {
                author: this.author?.displayName,
                text: this.comment,
                uid: this.author?.uid,
                time: this.getTime()
                })
            //} 
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
            @include input;
        }
        &-button{
            @include button;
            min-width:35px;
            
            display: flex;
            &--text {
                display: none;
            }
            &--icon{
                position:relative;
                min-width: 4vw;
                height: 4vw;
                display: flex;
                justify-content: center;
                align-items:center;
                @include pseudoClassMenuItem;
                &::after{
                    background-image: url('../assets/icons/send.svg');
                    background-size: contain;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: 100%;
                    background-position: center;
                }
            }
        }
    }
</style>