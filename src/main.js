import './styles/style.css'
console.log('test')
// main.js

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!

  // SplitType: split text into words and characters
  const text = new SplitType('#target', { types: 'words, chars' })

  // Animate characters into view with a stagger effect
  gsap.from(text.chars, {
    opacity: 0.1,
    stagger: 1,
    duration: 3,
    scrollTrigger: {
      trigger: '.sticky-section',
      start: 'top top+=50%',
      end: 'bottom-=10% bottom',
      scrub: true,
    },
  })
})
