<template>
    <div>
         <router-link v-for="link in list" 
         :to=" '/' + link" @click="show(link)">{{link}}</router-link> 
   </div>
    
</template>

<script>

export default{
    props:['list'],
    methods: {
        show(a){
            console.log(a)
            }
    }
}
</script>

<style>
a {
    display: block;
}
</style>

