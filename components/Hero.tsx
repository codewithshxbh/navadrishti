'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: isMobile ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: isMobile ? 0 : 1 }}
    >
      <motion.div
        className="hero-photo-grid"
        initial={{ opacity: isMobile ? 0.4 : 0, scale: isMobile ? 1 : 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: isMobile ? 0 : 1.2, delay: isMobile ? 0 : 0.2 }}
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
          initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: isMobile ? 0 : 0.8,
            delay: isMobile ? 0 : 0.5,
          }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: isMobile ? 0 : 0.8,
              delay: isMobile ? 0 : 0.7,
            }}
          >
            <span className="text-gradient">The Operating System</span>
            <br />
            for Social Impact
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: isMobile ? 0 : 0.8,
              delay: isMobile ? 0 : 0.9,
            }}
          >
            Replace scattered Excel sheets and manual processes with one unified
            platform for NGOs, companies, and individuals to execute and measure
            social impact at scale.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: isMobile ? 0 : 0.8,
              delay: isMobile ? 0 : 1.1,
            }}
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
}
