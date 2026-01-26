'use client'

import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000)
    const removeTimer = setTimeout(() => setLoading(false), 3200)
    
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!loading) return null

  const letters = ['N', 'a', 'v', 'a', 'd', 'r', 'i', 's', 'h', 't', 'i']

  return (
    <div className={`page-loader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content-horizontal">
        <div className="loader-logo">
          <img src="/photos/small-logo.svg" alt="Navadrishti" className="loader-logo-img" />
        </div>
        <div className="loader-text">
          {letters.map((letter, index) => (
            <span 
              key={index} 
              className="loader-letter"
              style={{ animationDelay: `${0.3 + index * 0.06}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
