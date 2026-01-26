'use client'

import { useState, useEffect } from 'react'

export default function Platform() {
  const [activeTab, setActiveTab] = useState('ngos')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    '/photos/pic 1.jpeg',
    '/photos/pic 2.jpeg',
    '/photos/pic 4.jpeg',
    '/photos/pic 5.jpeg',
    '/photos/pic 6.jpeg',
    '/photos/pic 7.jpeg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  const tabs = {
    ngos: {
      title: 'For NGOs',
      features: [
        'Manage projects and volunteers',
        'Run campaigns and fundraising',
        'AI-powered documentation',
        'Marketplace for services'
      ]
    },
    companies: {
      title: 'For Companies',
      features: [
        'Plan CSR campaigns',
        'Find verified NGOs',
        'Real-time impact tracking',
        'Compliance reports'
      ]
    },
    individuals: {
      title: 'For Individuals',
      features: [
        'Discover verified causes',
        'Volunteer your skills',
        'Track your impact',
        'Support NGOs directly'
      ]
    }
  }

  return (
    <section id="platform" className="platform">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Three Stakeholders, One Platform</h2>
        </div>
        <div className="platform-tabs">
          <button 
            className={`tab-button ${activeTab === 'ngos' ? 'active' : ''}`}
            onClick={() => setActiveTab('ngos')}
          >
            NGOs
          </button>
          <button 
            className={`tab-button ${activeTab === 'companies' ? 'active' : ''}`}
            onClick={() => setActiveTab('companies')}
          >
            Companies
          </button>
          <button 
            className={`tab-button ${activeTab === 'individuals' ? 'active' : ''}`}
            onClick={() => setActiveTab('individuals')}
          >
            Individuals
          </button>
        </div>
        <div className="diagonal-split-container">
          <div className="diagonal-content-left">
            <h3 className="platform-title">{tabs[activeTab as keyof typeof tabs].title}</h3>
            <ul className="feature-list">
              {tabs[activeTab as keyof typeof tabs].features.map((feature, index) => (
                <li key={index}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="diagonal-content-right">
            <div className="diagonal-image-wrapper">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="platform-video"
              >
                <source src="/videos/ngo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
