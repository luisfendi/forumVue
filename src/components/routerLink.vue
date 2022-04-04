<template>
        <router-link class="link" @click="closeBurger" :key="key" :to="`/${to}`"><span><slot></slot></span></router-link>
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
    .profile-link {
        text-decoration: none;
        color: black;
        position: absolute;
        top: 10%;
        right: 10%;
}


</style>