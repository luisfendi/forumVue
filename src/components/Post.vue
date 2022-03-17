<template>
<div>
    <div class="window"></div>
    <h3>{{name}}</h3>
    <img :src="item.img">
    <p>{{item.name}}</p>
</div>
</template>

<script>
    export default {
        inject: ['list'],
        data(){
            return { 
                fullList: this.list,
            }
        },
        computed: {
            name(){
                return this.$route.params.name
            },
            item(){
                return this.fullList.filter(i => i.name == this.name)[0]
            },
        },
    }
</script>
<style>
.window{
    width: 10vw;
    height: 10vw;
    border: 2px solid black;
}
</style>