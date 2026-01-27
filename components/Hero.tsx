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
  const DesktopHero = () => (
    <motion.section
      id="hero"
      className="hero hero-desktop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="hero-photo-grid"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <div className="photo-grid-item" style={{ gridArea: '1 / 1 / 2 / 2' }}>
          <img src="/photos/pic 1.jpeg" alt="Impact" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '1 / 2 / 2 / 3' }}>
          <img src="/photos/pic 2.jpeg" alt="Impact" loading="eager" />
        </div>
        <div
          className="photo-grid-item photo-spotlight"
          style={{ gridArea: '1 / 3 / 3 / 6' }}
        >
          <img src="/photos/pic 3.jpeg" alt="Spotlight" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '2 / 1 / 3 / 2' }}>
          <img src="/photos/pic 4.jpeg" alt="Impact" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '2 / 2 / 3 / 3' }}>
          <img src="/photos/pic 5.jpeg" alt="Impact" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '3 / 1 / 4 / 2' }}>
          <img src="/photos/pic 6.jpeg" alt="Impact" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '3 / 2 / 4 / 3' }}>
          <img src="/photos/pic 7.jpeg" alt="Impact" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '3 / 3 / 4 / 4' }}>
          <img src="/photos/pic 8.jpeg" alt="Impact" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '3 / 4 / 4 / 5' }}>
          <img src="/photos/pic 9.jpeg" alt="Impact" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '3 / 5 / 4 / 6' }}>
          <img src="/photos/pic 10.jpeg" alt="Impact" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '4 / 1 / 5 / 2' }}>
          <img src="/photos/pic 11.jpeg" alt="Impact" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '4 / 2 / 5 / 3' }}>
          <img src="/photos/pic 12.jpeg" alt="Impact" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '4 / 3 / 5 / 4' }}>
          <img src="/photos/pic 13.jpeg" alt="Impact" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '4 / 4 / 5 / 5' }}>
          <img src="/photos/pic 14.jpeg" alt="Impact" loading="eager" />
        </div>
        <div className="photo-grid-item" style={{ gridArea: '4 / 5 / 5 / 6' }}>
          <img src="/photos/pic 15.jpeg" alt="Impact" loading="eager" />
        </div>
      </motion.div>
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="text-gradient">The Operating System</span>
            <br />
            for Social Impact
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Replace scattered Excel sheets and manual processes with one unified
            platform for NGOs, companies, and individuals to execute and measure
            social impact at scale.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.a
              href="https://app.navadrishti.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Platform
            </motion.a>
            <motion.a
              href="#video-testimonials"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );

  // Mobile Hero - Completely Redesigned
  const MobileHero = () => (
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
                <div key={`bottom-${setIdx}-${num}`} className="carousel-item">
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
        <motion.div
          className="hero-mobile-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mobile Title */}
          <motion.h1
            className="hero-mobile-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="mobile-title-highlight">The Operating System</span>
            <span className="mobile-title-main">for Social Impact</span>
          </motion.h1>

          {/* Mobile Subtitle */}
          <motion.p
            className="hero-mobile-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            One unified platform for NGOs, companies, and individuals to execute
            and measure social impact at scale.
          </motion.p>

          {/* Mobile CTA */}
          <motion.div
            className="hero-mobile-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="https://app.navadrishti.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Platform
            </motion.a>
            <motion.a
              href="#video-testimonials"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  return isMobile ? <MobileHero /> : <DesktopHero />;
}
