<template>
    <div class="menu">
    <div class="menu-burger">
        <input type="checkbox" class="menu-burger--input" id="checkbox">
        <label for="checkbox"><span></span></label>
        <ul class="menu-burger--list">
            <li v-for="k in 9">{{k}}</li>
        </ul>
    </div>
         <router-link v-for="link in list" 
         :to=" '/' + link" @click="show(link)">{{link}}</router-link> 
   </div>
    
</template>

<script>

export default{
    props:['list'],
    methods: {
        show(a){
            console.log(a)
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

