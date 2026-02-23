'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop Hero
  const DesktopHero = () => {
    return (
      <section id="hero" className="hero hero-desktop">
        <div className="hero-photo-grid">
          <div
            className="photo-grid-item"
            style={{ gridArea: '1 / 1 / 2 / 2' }}
          >
            <img src="/photos/pic 1.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '1 / 2 / 2 / 3' }}
          >
            <img src="/photos/pic 2.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item photo-spotlight"
            style={{ gridArea: '1 / 3 / 3 / 6' }}
          >
            <img src="/photos/pic 3.jpeg" alt="Spotlight" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '2 / 1 / 3 / 2' }}
          >
            <img src="/photos/pic 4.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '2 / 2 / 3 / 3' }}
          >
            <img src="/photos/pic 5.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '3 / 1 / 4 / 2' }}
          >
            <img src="/photos/pic 6.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '3 / 2 / 4 / 3' }}
          >
            <img src="/photos/pic 7.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '3 / 3 / 4 / 4' }}
          >
            <img src="/photos/pic 8.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '3 / 4 / 4 / 5' }}
          >
            <img src="/photos/pic 9.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '3 / 5 / 4 / 6' }}
          >
            <img src="/photos/pic 10.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '4 / 1 / 5 / 2' }}
          >
            <img src="/photos/pic 11.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '4 / 2 / 5 / 3' }}
          >
            <img src="/photos/pic 12.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '4 / 3 / 5 / 4' }}
          >
            <img src="/photos/pic 13.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '4 / 4 / 5 / 5' }}
          >
            <img src="/photos/pic 14.jpeg" alt="Impact" loading="eager" />
          </div>
          <div
            className="photo-grid-item"
            style={{ gridArea: '4 / 5 / 5 / 6' }}
          >
            <img src="/photos/pic 15.jpeg" alt="Impact" loading="eager" />
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title" style={{ color: '#ffffff' }}>
              <span className="text-gradient">
                The Governance & Execution OS
              </span>
              <br />
              for Social Impact
            </h1>
            <p
              className="hero-subtitle"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              CA-backed trust verification. Milestone-governed execution. Field
              evidence with GPS. Cryptographic audit trails. Everything needed
              to control trust, governance, proof, and money in social impact.
            </p>
            <div className="hero-cta">
              <span
                className="btn-primary"
                aria-disabled="true"
                style={{
                  opacity: 0.5,
                  cursor: 'not-allowed',
                  pointerEvents: 'none',
                }}
              >
                Explore Platform
              </span>
              <a href="mailto:connect@navadrishti.in" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Mobile Hero - Completely Redesigned
  const MobileHero = () => {
    return (
      <section id="hero" className="hero hero-mobile">
        {/* Mobile Background Pattern */}
        <div className="hero-mobile-bg">
          <div className="mobile-gradient-orb mobile-orb-1"></div>
          <div className="mobile-gradient-orb mobile-orb-2"></div>
          <div className="mobile-pattern-dots"></div>
        </div>

        {/* Mobile Photo Carousel */}
        <div className="hero-mobile-carousel">
          {/* Top Row - Scrolling Right */}
          <div className="carousel-row carousel-row-right">
            <div className="carousel-track">
              {[...Array(3)].map((_, setIdx) =>
                [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div key={`top-${setIdx}-${num}`} className="carousel-item">
                    <img
                      src={`/photos/pic ${num}.jpeg`}
                      alt={`Impact ${num}`}
                      loading="eager"
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Bottom Row - Scrolling Left */}
          <div className="carousel-row carousel-row-left">
            <div className="carousel-track">
              {[...Array(3)].map((_, setIdx) =>
                [9, 10, 11, 12, 13, 14, 15].map((num) => (
                  <div
                    key={`bottom-${setIdx}-${num}`}
                    className="carousel-item"
                  >
                    <img
                      src={`/photos/pic ${num}.jpeg`}
                      alt={`Impact ${num}`}
                      loading="eager"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="hero-mobile-content">
            {/* Mobile Title */}
            <h1 className="hero-mobile-title">
              <span className="mobile-title-highlight">
                The Governance & Execution OS
              </span>
              <span className="mobile-title-main">for Social Impact</span>
            </h1>

            {/* Mobile Subtitle */}
            <p className="hero-mobile-subtitle">
              CA-backed verification. Milestone governance. Field evidence.
              Cryptographic audit trails. Everything to control trust and
              execution.
            </p>

            {/* Mobile CTA */}
            <div className="hero-mobile-cta">
              <span
                className="btn-primary"
                aria-disabled="true"
                style={{
                  opacity: 0.5,
                  cursor: 'not-allowed',
                  pointerEvents: 'none',
                }}
              >
                Explore Platform
              </span>
              <a href="mailto:connect@navadrishti.in" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return isMobile ? <MobileHero /> : <DesktopHero />;
}
