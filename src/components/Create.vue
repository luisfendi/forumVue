<template>
    <div class="create">
        <h1>Создать пост</h1>
        <form action="#" class="create-form">
            <textarea type="text" class="create-form--description" v-model="postImg" placeholder="description"></textarea>
            <input type="text" class="create-form--author" v-model="postName" placeholder="author">
            <div class="create-form--type">
                <h4>Тип:</h4>
                <input type="radio" v-model="postType" value="1">
                <input type="radio" v-model="postType" value="2">
            </div>
            <button 
            class="createButton"
            @click="create"
            >create</button>
        </form>
    </div>
    
</template>

<script>
import createPost from '../assets/modulesJS/buildPost'
export default {
    data(){
        return{
            postName: '',
            postImg: '',
            postType: '',
        }
    },
    methods: {
        create(){
            return createPost(this.postName, this.postImg, this.postType)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/general.scss";
.create {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 13%;
    &-form {
        display: flex;
        flex-direction: column;
        align-items:center;
        padding-top: 10%;
        &--description, &--author, &--type {
            width: 100%;
            margin-bottom: 10%;
        }
        &--description{
            min-height: 100px;
        }
    }
}

</style>