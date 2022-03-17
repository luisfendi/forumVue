<template>
    <form action="#" class="create">
        <input type="text" v-model="postName">
        <input type="text" v-model="postImg">
        <input type="text" v-model="postType">
        <button 
        class="createButton"
        @click="create"
        >create</button>
    </form>
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

.create {
    display: flex;
    flex-direction: column;

    input, button{
        width: 15%;
    }
}

</style>