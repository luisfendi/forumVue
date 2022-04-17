<script>
import { h } from 'vue';

export default {
    data(){
        return {
        }
    },
    props: {
        tag: String,
        msg: String,
    },
    render(){
        return h(this.tag, {class: 'modal'}, this.msg)
    }
    
}
</script>

<style scoped lang="scss">
    .modal {
        border: 1px solid black;

    }
</style>