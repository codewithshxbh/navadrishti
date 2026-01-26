'use client'

import { useEffect } from 'react'

export default function ScrollProgress() {
  useEffect(() => {
    const progressBar = document.createElement('div')
    progressBar.className = 'scroll-progress'
    document.body.appendChild(progressBar)
    
    let rafPending = false
    
    const updateProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.pageYOffset / windowHeight) * 100
      progressBar.style.width = scrolled + '%'
      rafPending = false
    }
    
    const handleScroll = () => {
      if (!rafPending) {
        rafPending = true
        requestAnimationFrame(updateProgress)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      progressBar.remove()
    }
  }, [])

  return null
}
