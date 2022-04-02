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
                <Link v-for="item in list"
                class="links-page"  
                :to="key(item)"
                :key="key(item)"
                :title="item[key(item)].name"
                @closeMenu="closeBurger"
                />
                <Link :to="'signup'" :title="'регистрация'" @closeMenu="closeBurger"/>
                <Link :to="'signin'" :title="'вход'" @closeMenu="closeBurger"/>
                <Link :to="'create'" :title="'создать пост'" @closeMenu="closeBurger"/>
            </ul>
        </Transition>
    </div>
   </div>
    
</template>

<script>
import key from "../assets/modulesJS/getKeyInObject"
import Link from './routerLink.vue'
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
    },
    components: {
        Link: Link,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';
@import '../assets/scss/general.scss';


.menu {
    position: sticky;
    top: 0;
    left: 0;
    width: 25%;
    z-index: 5;
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
    background: white;
    width: 100%;
    z-index: 3;
    position: absolute;
    border: 2px solid black;
    border-radius: 10px;
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-top: 6vw;
    a {
       color: black;
       text-decoration: none;
       padding: 10% 5% 10% 5%;
       border-bottom: 1px solid black;
       &:last-child{
           border: none;
       }
    }

     .links-page{
        position: relative;
        @include pseudoClassMenuItem;
          &::after{
              background: url("../assets/icons/person.svg") 
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



a {
    display: block;
}
</style>

