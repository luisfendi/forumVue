<template>
        <router-link class="link" 
        @click="closeBurger" 
        :key="key" 
        :to="`/${to}`">
                <slot></slot>
        </router-link>
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

<style lang="scss">
    .link-signUp{
        color:red;
    }
</style>