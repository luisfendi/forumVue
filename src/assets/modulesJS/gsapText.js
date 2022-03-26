import {gsap} from 'gsap';
import { TextPlugin } from 'gsap/all';
gsap.registerPlugin(TextPlugin)

export default (selector, text) => {
    let tl = gsap.timeline()
    let oldText = document.querySelector(selector).textContent
    tl
    .from('.text-title', {x: '-100%'})
    .from('.text-title1', {x: '100%'}, "<")
    .to(selector, {
        duration: 1,
        delay: 1,
        text: {
            value: text,
            delimiter: '',
            newClass: 'green'
        },
        ease: 'none',
    }, ">") 
    .to(selector, {
        duration: 1,
        delay: 1,
        text: {
            value: oldText,
            delimiter: '',
            newClass: 'orange',
        },
        ease: 'none',
    }, ">")   
}