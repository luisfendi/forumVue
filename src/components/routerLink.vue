<template>
        <router-link class="link" 
        @click="closeBurger" 
        :key="key" 
        :to="`/${to}`">
                <slot></slot>
        </router-link>
</template>

<script>
import {emitter} from '../assets/modulesJS/tinyEmiter'
export default {
    props: ['title', 'to', 'key'],
    methods: {
        closeBurger(){
            emitter.emit('closeMenu')
        }
    },
}
</script>

<style lang="scss">
    .link-signUp{
        color:red;
    }
</style>