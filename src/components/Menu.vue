<template>
    <div class="menu">
    <div class="menu-burger">
        <input type="checkbox" 
        class="menu-burger--input" 
        id="checkbox"
        v-model="burger">
        <label for="checkbox"><span></span></label>
        <ul class="menu-burger--list">
            <router-link 
            :to="person.name"
            v-for="(person, key) in list"
            :key="key"
            @click="closeBurger">{{person.name}}</router-link>
            <router-link to='/create'>to create</router-link>
        </ul>
    </div>
    <h3>fbList</h3>
    <ul>
        <li v-for="(item,i) in fbList" :key="i">{{item}}</li>
    </ul>
   </div>
    
</template>

<script>
import getList from '../assets/modulesJS/getList'
export default{
    data(){
        return {
            burger: false,
            list: [
                {
                name: 'monika',
                img: 'https://images.pexels.com/photos/10222837/pexels-photo-10222837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                },
                {
                name: 'veronika',
                img: 'https://images.pexels.com/photos/10047607/pexels-photo-10047607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                },
                {
                name: 'angelina',
                img: 'https://images.pexels.com/photos/10047610/pexels-photo-10047610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                },
            ],
            fbList: '',
        }
    },
    mounted(){
        let data=getList()
        data.then(a => this.fbList = a);
    },
    methods: {
        closeBurger(){
            this.burger = !this.burger
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';


.menu {
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
            border: 2px solid black;
            width: 4vw;
            height: 4vw;
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





a {
    display: block;
}
</style>

