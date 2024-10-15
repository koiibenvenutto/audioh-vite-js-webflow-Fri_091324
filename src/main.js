import './styles/style.css'
console.log('local host')
// main.js

import Intercom from '@intercom/messenger-js-sdk'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import mixpanel from 'mixpanel-browser'
import SplitType from 'split-type'

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

// Near entry of your product, init Mixpanel
mixpanel.init('54687e1d1e62b0e96f8552ba67bb8011', {
  debug: true,
  track_pageview: true,
  persistence: 'localStorage',
})

mixpanel.identify('$device_id')

mixpanel.people.set({ $email: '' })

// Custom JS to track button clicks using event listeners
document.body.addEventListener('click', function (event) {
  let target = event.target

  // Check if the clicked element or any of its parents have the data-mixpanel-event attribute
  while (target != null) {
    if (target.getAttribute('data-mixpanel-event')) {
      var eventName = target.getAttribute('data-mixpanel-event')

      // You can add additional properties here if needed
      // var properties = {
      //   'Signup Type': 'Referral', // Example property
      // }

      // Track the event
      mixpanel.track(eventName)

      break
    }
    target = target.parentElement
  }
})

Intercom({
  app_id: 'zyh9nu80',
})
