<script>
import { h } from 'vue';
import Burger from './Burger.vue';
import {closeWindow} from '../assets/modulesJS/gsapModalWindow';

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
        return h(this.tag, {class: 'modalMessage'}, [
            h('h3', {}, this.msg), 
            h(Burger, {
            onClick: ()=>{setTimeout(() => {this.closeModal()}, 300)},
            class: 'modal-closer',
            }),
        ])
    },
    methods: {
        closeModal(){
            closeWindow('.modalMessage', () => {
                this.$emit('modalClose');
            });
        },
        
    },
}
</script>

<style scoped lang="scss">
@import '../assets/scss/general.scss';

    .modal {
        border: 1px solid black;
    }

    .success {
        background: $green2;
    }
    .error {
        background: $red;
    }


</style>