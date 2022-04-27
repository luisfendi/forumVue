<template>
    <div fluid="fluid" class="footer padding" >
        <div class="footer-wrap ">
        <div class='technologies '>
            <h5>Технологии:</h5>
            <ul class='technologies-list list'>
                <li v-for="(technolog, i) in technologies" :key="i" class="technologies-item item"> 
                  <img :src="`../src/assets/icons/${technolog}.png`">
                  <p class="technologies-item--title">{{technolog}}</p>
                </li>
            </ul>
        </div>
        <div class="contacts">
            <h5>Контакты:</h5>
            <ul class='contacts-list list'>
                <a href="#" v-for="(contact, i) in contacts" :key="i" class="contacts-item item">
                   <img :src="`../src/assets/icons/${contact.name}.png`">
                </a>
            </ul>
        </div>
        <p class="aboutIcons mt-3">PNG, SVG и прочие icons были взяты из сайта <a href="https://www.flaticon.com/ru/">flaticon.ru</a></p>
        </div>
    </div>
</template>


<script>

export default{
    data(){
        return{
            technologies: [
                'vue', 'js', 'css', 'gsap'
            ],
            contacts: [
                {
                    name: 'whats'
                },
                {
                    name: 'inst'
                },
                {
                    name: 'tg'
                },
            ]
        }
    },
    methods:{
        bgImage(){   
        }
    }
}
</script>
 


<style lang="scss" scoped>
@import "../assets/scss/general.scss";
.footer-wrap{
        display: flex;
        flex-wrap: wrap;
}
    .footer {
        position: absolute;
        bottom: 0;
        padding-top: 3%;
        padding-bottom: 3%;
        text-align: left;
        background-color: $green2;
        @include wrapper;
        .technologies, .contacts {
            width: 50%;
        }
        .list{
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;
            .item{
                width: 17%;
                display: flex;
                margin-right: 3%;
                flex-direction: column;

                a{
                    display: flex;
                    flex-direction: column;
                }
                p {
                display: none;
                margin: 0;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        } 
        .aboutIcons{
            width: 100%;
            font-size: 0.8rem;
            color: gray;
            a {
                color: white;
                font-style: italic; 
            } 
        }
    }


// @media(min-width: @laptop){
//     .footer {
        
//         .technologies, .contacts {
           
//         }
//         .list{
            
//             .item{
//                 width: 10%;
                

//                 p {
                
//                 }
//                 img{
                   
//                 }
//             }
//         } 
//     }
// }


// @media(min-width: @desktop){
//     .footer {
//         padding-top: 1%;
//         padding-bottom: 1%;
//         .technologies, .contacts {
//            width: 23%;
//         }
//         .list{
            
//             .item {
//                 width: 13%;
//                 text-align: center;  
//                 position: relative;
//                 justify-content: center;
//                 min-height: 34px;
//                 margin-right: 10%;
//                 img{ 
                    
//                     animation: displayBlock .7s;
//                 }
//                 p{
                    
//                     width: 100%;
//                 }
                
                
               
//             } 

//             .technologies-item{
//                 &:hover img{
//                     display: none;
//                 }
//                 &:hover p {
//                     display: block;
//                     animation: displayBlock .7s;
//                 }
//             }
//         } 
//     }
// }
    
</style>