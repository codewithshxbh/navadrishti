'use client'

import { useEffect } from 'react'

export default function PremiumEffects() {
  useEffect(() => {
    // Keyboard Shortcuts
    const shortcuts: { [key: string]: () => void } = {
      'ctrl+k': () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
      },
      'ctrl+h': () => {
        document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const handleKeydown = (e: KeyboardEvent) => {
      const key = (e.ctrlKey ? 'ctrl+' : '') + e.key.toLowerCase()
      if (shortcuts[key]) {
        e.preventDefault()
        shortcuts[key]()
      }
    }

    document.addEventListener('keydown', handleKeydown)

    // Viewport Height Fix for Mobile
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setVH()
    window.addEventListener('resize', setVH)

    // Add tilt effect to cards
    const addTiltEffect = (selector: string) => {
      const cards = document.querySelectorAll(selector)
      
      cards.forEach(card => {
        card.addEventListener('mousemove', (e: Event) => {
          const mouseEvent = e as MouseEvent
          const rect = (card as HTMLElement).getBoundingClientRect()
          const x = mouseEvent.clientX - rect.left
          const y = mouseEvent.clientY - rect.top
          
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          
          const rotateX = ((y - centerY) / centerY) * -10
          const rotateY = ((x - centerX) / centerX) * 10
          
          ;(card as HTMLElement).style.transform = 
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        })
        
        card.addEventListener('mouseleave', () => {
          ;(card as HTMLElement).style.transform = 
            'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
        })
      })
    }

    // Defer tilt effects
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        addTiltEffect('.feature-card')
        addTiltEffect('.about-card')
      }, { timeout: 1500 })
    } else {
      setTimeout(() => {
        addTiltEffect('.feature-card')
        addTiltEffect('.about-card')
      }, 200)
    }

    // Lazy Background Observer
    const bgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          const bgUrl = element.getAttribute('data-bg')
          if (bgUrl) {
            element.style.backgroundImage = `url(${bgUrl})`
          }
          bgObserver.unobserve(element)
        }
      })
    })

    document.querySelectorAll('[data-bg]').forEach(el => {
      bgObserver.observe(el)
    })

    console.log('Navadrishti Portfolio - Premium Features Loaded (Optimized)')
    console.log('Tip: Press Ctrl+K to jump to contact section')
    console.log('Performance: Features loaded with deferred initialization')

    return () => {
      document.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('resize', setVH)
    }
  }, [])

  return null
}
