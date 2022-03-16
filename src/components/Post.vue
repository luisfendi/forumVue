<template>
<div>
    <div class="window"></div>
    <h3>{{name}}</h3>
    <img :src="fullList[name] ? list[img] : '0'">
    <p>{{item}}</p>
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
                this.fullList.filter(i => {
                    console.log(i[name])
                    return i[this.name]
                })
            }
        }
    }
</script>
<style>
.window{
    width: 10vw;
    height: 10vw;
    border: 2px solid black;
}
</style>