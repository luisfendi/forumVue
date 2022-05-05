<template>
    <div class="burger" :class="!open ? 'open' : ''" @click="open = !open">
        <span></span>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                open: true
            }
        },
    }
</script>

<style scoped lang="scss">
@import '../assets/scss/general.scss';
    .burger {
        background: orange;
        position:absolute;
        top: 5%;
        right: 5%;
        width: 5vw;
        height: 5vw;
        display:flex;
        justify-content: center;
        align-items: center;
        span {
            width: 90%;
            height: 15%;
            background: black;
            position: relative;
            transition: all .3s ease-in-out;
            transform: rotate(45deg);
            &:after, &:before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: black;
                    left: 0;
                    transition: all .3s ease-in-out; 
                }
                &:after {
                    transform: rotate(90deg);
                }
                &:before {
                    transform: rotate(-90deg)
                }
        }
    }

    .open {
         span {
                transition: all .3s ease-in-out;
                opacity:0;

            &:after, &:before {
                transition: all .3s ease-in-out;
                }
                &:after {
                opacity:0;
                }
                &:before {
                opacity:0;
                }
        }
    }

    @media(min-width: $desktop){
        .burger {
        width: 2vw;
        height: 2vw;
        span {
            
            &:after, &:before {
                   
                }
                &:after {
                }
                &:before {
                }
        }
    }

    }
</style>