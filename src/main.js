import './styles/style.css'
console.log('test')
// main.js
// main.js

export function initTextReveal() {
  const revealContainers = document.querySelectorAll('.reveal-text-container')

  revealContainers.forEach((container) => {
    const originalText = container.textContent
    container.textContent = ''

    originalText.split('').forEach((char) => {
      const charSpan = document.createElement('span')
      charSpan.textContent = char
      charSpan.style.opacity = '0'
      charSpan.style.transition = 'opacity 0.05s'
      container.appendChild(charSpan)
    })
  })
  const rect = document.querySelector('.sticky-section').getBoundingClientRect()
  const initialDistance = window.innerHeight - rect.bottom

  function updateReveal() {
    const rect = document
      .querySelector('.sticky-section')
      .getBoundingClientRect()
    const currentDistance = window.innerHeight - rect.bottom
    revealContainers.forEach((container) => {
      const scrollProgress =
        (initialDistance - currentDistance) / initialDistance

      console.log(`Scroll Progress: ${scrollProgress.toFixed(2)}`)

      if (scrollProgress > 0 && scrollProgress < 1) {
        const chars = container.querySelectorAll('span')
        const revealIndex = Math.floor(scrollProgress * chars.length)

        chars.forEach((char, index) => {
          char.style.opacity = index < revealIndex ? '1' : '0'
        })
      }
    })
  }

  window.addEventListener('scroll', updateReveal)
  window.addEventListener('resize', updateReveal)
  updateReveal() // Initial call
}

// Call the function when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTextReveal)
} else {
  initTextReveal()
}
