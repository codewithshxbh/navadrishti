'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Platform() {
  const [activeTab, setActiveTab] = useState('ngos');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref: sectionRef, isIntersecting: sectionVisible } =
    useIntersectionObserver({
      threshold: 0.1,
    });

  const images = [
    '/photos/pic 1.jpeg',
    '/photos/pic 2.jpeg',
    '/photos/pic 4.jpeg',
    '/photos/pic 5.jpeg',
    '/photos/pic 6.jpeg',
    '/photos/pic 7.jpeg',
  ];

  const tabOrder = ['ngos', 'companies', 'individuals'];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Auto-rotate tabs every 10 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabOrder.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabOrder.length;
        return tabOrder[nextIndex] || 'ngos';
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const tabs = {
    ngos: {
      title: 'For NGOs',
      features: [
        'Manage projects and volunteers',
        'Run campaigns and fundraising',
        'AI-powered documentation',
        'Marketplace for services',
      ],
    },
    companies: {
      title: 'For Companies',
      features: [
        'Plan CSR campaigns',
        'Find verified NGOs',
        'Real-time impact tracking',
        'Compliance reports',
      ],
    },
    individuals: {
      title: 'For Individuals',
      features: [
        'Discover verified causes',
        'Volunteer your skills',
        'Track your impact',
        'Support NGOs directly',
      ],
    },
  };

  return (
    <motion.section
      id="platform"
      className="platform"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={sectionVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={
            sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Three Stakeholders, One Platform</h2>
        </motion.div>
        <motion.div
          className="platform-tabs"
          initial={{ opacity: 0, y: 30 }}
          animate={
            sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.button
            className={`tab-button ${activeTab === 'ngos' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('ngos');
              setIsPaused(true);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            NGOs
          </motion.button>
          <motion.button
            className={`tab-button ${activeTab === 'companies' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('companies');
              setIsPaused(true);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Companies
          </motion.button>
          <motion.button
            className={`tab-button ${activeTab === 'individuals' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('individuals');
              setIsPaused(true);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Individuals
          </motion.button>
        </motion.div>
        <motion.div
          className="diagonal-split-container"
          initial={{ opacity: 0, y: 40 }}
          animate={
            sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="diagonal-content-left">
            <AnimatePresence>
              <motion.h3
                key={`title-${activeTab}`}
                className="platform-title"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {tabs[activeTab as keyof typeof tabs].title}
              </motion.h3>
            </AnimatePresence>
            <motion.ul
              className="feature-list"
              initial={{ opacity: 0 }}
              animate={sectionVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <AnimatePresence>
                {tabs[activeTab as keyof typeof tabs].features.map(
                  (feature, index) => (
                    <motion.li
                      key={`${activeTab}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  )
                )}
              </AnimatePresence>
            </motion.ul>
          </div>
          <motion.div
            className="diagonal-content-right"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              sectionVisible
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="diagonal-image-wrapper">
              <video autoPlay loop muted playsInline className="platform-video">
                <source src="/videos/ngo.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
