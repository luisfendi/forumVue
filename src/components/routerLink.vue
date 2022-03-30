<template>
        <router-link @click="closeBurger" :key="key" :to="`/${to}`">{{title}}</router-link>
</template>

<script>
export default {
    props: ['title', 'to', 'key'],
    methods: {
        closeBurger(){
            this.$emit('closeMenu')
        }
    }
}
</script>

<style>
    
</style>