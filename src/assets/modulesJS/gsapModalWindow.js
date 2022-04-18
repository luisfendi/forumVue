import {gsap} from 'gsap';


function showWindow(selector){
        let tl = gsap.timeline()
        tl.from(selector, {scale: 0.2, opacity: .3})  
}
function closeWindow(selector, myFn){
        let tl = gsap.timeline({onComplete: myFn})
        return tl.to(selector, { yPercent: -400, duration: .5, opacity: 0}) ; 
}
export {showWindow, closeWindow}