import {gsap} from 'gsap';
import { TextPlugin } from 'gsap/all';
gsap.registerPlugin(TextPlugin)

export default (selector, text) => {
    let tl = gsap.timeline()
    let oldText = document.querySelector(selector).textContent
    tl
    .to(selector, {
        duration: 1,
        delay: 1,
        text: {
            value: text,
            delimiter: '',
            newClass: 'green,'
        },
        ease: 'none',
    }) 
    .to(selector, {
        duration: 1,
        delay: 1,
        text: {
            value: oldText,
            delimiter: '',
            newClass: 'orange',
        },
        ease: 'none',
    })   
}