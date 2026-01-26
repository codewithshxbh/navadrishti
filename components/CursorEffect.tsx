'use client'

import { useEffect } from 'react'

export default function CursorEffect() {
  useEffect(() => {
    if (window.innerWidth <= 768) return // Only on desktop

    const cursor = document.createElement('div')
    const cursorDot = document.createElement('div')
    
    cursor.className = 'custom-cursor'
    cursorDot.className = 'cursor-dot'
    
    document.body.appendChild(cursor)
    document.body.appendChild(cursorDot)
    
    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0
    
    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursorDot.style.left = e.clientX + 'px'
      cursorDot.style.top = e.clientY + 'px'
    }
    
    const animateCursor = () => {
      const dx = mouseX - cursorX
      const dy = mouseY - cursorY
      
      cursorX += dx * 0.15
      cursorY += dy * 0.15
      
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
      
      requestAnimationFrame(animateCursor)
    }
    
    document.addEventListener('mousemove', updateCursor)
    animateCursor()
    
    // Hover effects
    const addHoverEffect = () => {
      const hoverElements = document.querySelectorAll('a, button, .feature-card, .about-card, input, textarea, select, .tab-button')
      
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'))
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'))
      })
    }
    
    // Delay to ensure DOM is ready
    setTimeout(addHoverEffect, 1000)
    
    return () => {
      document.removeEventListener('mousemove', updateCursor)
      cursor.remove()
      cursorDot.remove()
    }
  }, [])

  return null
}
