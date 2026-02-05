'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Platform() {
  const { ref: sectionRef, isIntersecting: sectionVisible } =
    useIntersectionObserver({
      threshold: 0.1,
    });

  const stakeholders = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'NGOs',
      description:
        'Manage projects, volunteers, campaigns, and fundraising with AI-powered tools and marketplace access.',
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: 'Companies',
      description:
        'Plan CSR campaigns, find verified NGOs, track real-time impact, and automate compliance reporting.',
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: 'Individuals',
      description:
        'Discover verified causes, volunteer your skills, track your impact, and support NGOs directly.',
    },
  ];

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
          <h2 className="section-title">One Platform for All</h2>
          <p className="section-description">
            Connecting NGOs, Companies, and Individuals in India's social impact
            ecosystem
          </p>
        </motion.div>

        <div className="stakeholder-grid">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.title}
              className="stakeholder-card"
              initial={{ opacity: 0, y: 30 }}
              animate={
                sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stakeholder-icon">{stakeholder.icon}</div>
              <h3>{stakeholder.title}</h3>
              <p>{stakeholder.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
