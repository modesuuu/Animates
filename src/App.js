import lenis from '@studio-freight/lenis';
import splt from 'spltjs';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { split } from 'postcss/lib/list';

let tl = gsap.timeline({
  scrollTrigger:{
    trigger: '.',
    start :'c',
    end:'',
    scrub: true,
    markers: true, 
  }
  
})



//lenis
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.to('.pler',{
  
})
