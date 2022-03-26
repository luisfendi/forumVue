<template>
    <div class="menu">
    <div class="menu-burger">
        <input type="checkbox" 
        class="menu-burger--input" 
        id="checkbox"
        v-model="burger">
        <label for="checkbox"><span></span></label>
        <Transition name="listEnter">
            <ul class="menu-burger--list links" v-if="burger">
                
                <router-link class="links-createPost" to='/create'
                @click="closeBurger">to create</router-link>
                <router-link class="links-page"  
                v-for="item in list" 
                :to="key(item)"
                :key="key(item)"
                @click="closeBurger"
                >{{item[key(item)].name}}</router-link>
        
            </ul>
        </Transition>
    </div>
   </div>
    
</template>

<script>
import key from "../assets/modulesJS/getKeyInObject"
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
            this.burger = !this.burger
        },
        key(item){
            return key(item)[0]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';
@import '../assets/scss/general.scss';


.menu {
    width: 25%;
    &-burger{
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
            &:checked~ul{
                display: flex;
                flex-direction: column;
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
        
        &--list {
            display: none;
        }
    }
}

.links {
    a {
       color: black;
       text-decoration: none;
       padding: 10% 5% 10% 5%;
       background: yellow;
    }

     .links-page{
        position: relative;
        @include pseudoClassMenuItem;
          &::after{
              background: url("../assets/icons/person.svg") 
        } 
    }  
}

.listEnter-enter-active,
.listEnter-leave-active {
    transition: opacity .5s ease;
}

.listEnter-enter-from,
.listEnter-leave-to {
    opacity: 0;
}



a {
    display: block;
}
</style>

