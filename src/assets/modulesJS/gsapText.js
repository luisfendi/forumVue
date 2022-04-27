import {gsap} from 'gsap';
import { TextPlugin } from 'gsap/all';
gsap.registerPlugin(TextPlugin)

export default (selector, text) => {
    let tl = gsap.timeline()
    let oldText = document.querySelector(selector).textContent
    tl
    .from('.text-title', {x: '-100vw'})
    .from('.text-title1', {x: '100vw'}, "<")
    .from('.text-title2', {x: '100vw', ease: "back.out(1)"}, '>')
    .from('.cube', {x: '-100vw', y: '-50vw', rotate: -90, duration: .8}, '0')
    .from('.cube2', {x: '100vw', y: '50vw', rotate: 90, duration: .8}, '<')
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
    .to('.cube2', {x: '50%', y: '50%', duration: .8})
    //.to('.text-title2', {opacity: 0, display: 'none'}, '+3')
    .to('.cube', {scale: 0.5, x: '25%', y: '25%'})
    .to('.cube2', {scale: 0.5, x: '25%', y: '25%'}, '<')
    .to(['.cube', '.cube2'], {opacity: 0}, '<+=.2')
}

function cubeItem(clb){
    let cubes = document.querySelectorAll('.cube-item');
        cubes.forEach( cube => {
        gsap.to(cube, {
            x: gsap.utils.random(-50,50)+'vw', 
            y: gsap.utils.random(-50,50) + 'vw',
        })
    })
    clb()
}

