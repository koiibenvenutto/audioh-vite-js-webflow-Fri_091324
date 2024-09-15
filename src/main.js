import './styles/style.css'
console.log('test')
// main.js

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
// eslint-disable-next-line no-use-before-define
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!

  // Split text into words and characters
  const text = new SplitType('#target', { types: 'words, chars' })

  // Animate characters into view with a stagger effect
  gsap.from(text.chars, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.sticky-section',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  })
})
