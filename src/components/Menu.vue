<template>
    <div class="menu">
        <div class="menu-burger">
            <input type="checkbox" 
            class="menu-burger--input" 
            id="checkbox"
            v-model="burger">
            <label for="checkbox"><span></span></label>
        </div>
        <Transition name="listEnter">
                <ul class="menu-burger--list links" v-if="burger">
                    <Link v-for="item in list"
                    class="link-post"  
                    :to="key(item)"
                    :key="key(item)"
                    @closeMenu="closeBurger"
                    >{{item[key(item)].name}}</Link>
                    <Link :to="'signup'" class="link-signUp">регистрация</Link>
                    <Link :to="'signin'" class="link-signIn">вход</Link>
                    <Link :to="'create'" class="link-create">создать</Link>
                </ul>
        </Transition>
   </div>
</template>

<script>
import key from "../assets/modulesJS/getKeyInObject";
import Link from './routerLink.vue';
import {emitter} from '../assets/modulesJS/tinyEmiter';

export default{
    props:['list'],
    data(){
        return {
            burger: false,
            fbList: '',
        }
    },
    methods: {
        closeBurger(){
            this.burger = false
        },
        key(item){
            return key(item)[0]
        }
    },
    mounted(){
        emitter.on('closeMenu', this.closeBurger)
    },
    components: {
        Link,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';
@import '../assets/scss/general.scss';


.menu {
    min-width: 10%;
    z-index: 5;
    order: 1;
    &-burger{
        transform: translateX(50%);
        input {
            display:none;
            &:checked~label{
              span {
                    transform: rotate(45deg);
                    transition: all .3s ease-in-out;
                    &:after, &:before {
                        top: 0;
                        transition: all .3s ease-in-out; 
                    }
                    &:after {
                        transform: rotate(90deg);
                        opacity: 0;
                    }
                    &:before {
                        transform: rotate(-90deg)
                    }
              }     
            }
        }

        label {
           
            width: 6vw;
            height: 6vw;
            display:flex;
            justify-content: center;
            align-items: center;
            span {
                width: 90%;
                height: 15%;
                background: black;
                position: relative;
                transition: all .3s ease-in-out;
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
                    top: 150%;
                }
                &:before {
                    top: -150%;
                }
            }
        }
    
    }
}

.links {
    background:white;
    width: 100%;
    z-index: 6;
    position: absolute;
    border: 2px solid black;
    border-radius: 10px;
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-top: 6vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    min-width: 135px;

    a {
       color: black;
       box-sizing: border-box;
       text-decoration: none;
       padding: 10% 5% 10% 5%;
       border-bottom: 1px solid black;
       position: relative;
       width: 100%;
       @include pseudoClassMenuItem;
       &:after{
           float:right;
       }
       &:last-child{
           border: none;
       }
    } 
}

.listEnter-enter-active{
    transition: all 0.5s ease;
}

.listEnter-leave-active {
    transition: all 0.3s ease;

}

.listEnter-enter-from,
.listEnter-leave-to {
    opacity: 0;
    transform: translateX(-50px);
}
.new span {
    background: blue;
}

.menu {
    .new{
        background: red;
        transform: translateX(300%);
        position:absolute;
        top: 5%;
        right: 5%;
        width: 6vw;
        height: 6vw;
        display:flex;
        justify-content: center;
        align-items: center;
        span {
            width: 90%;
            height: 15%;
            background: green;
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
                    top: 150%;
            }
                &:before {
                    top: -150%;
            }
        }
    }
}

a {
    display: block;
}
</style>

