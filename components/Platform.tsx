'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const StakeholderCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className={`stakeholder-card ${isExpanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ cursor: 'pointer' }}
    >
      <div className="stakeholder-icon">{icon}</div>
      <h3>{title}</h3>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{
              opacity: 1,
              maxHeight: 500,
              transition: {
                maxHeight: { duration: 0.18, ease: [0.32, 0.72, 0, 1] },
                opacity: { duration: 0.12, ease: 'easeOut' },
              },
            }}
            exit={{
              opacity: 0,
              maxHeight: 0,
              transition: {
                opacity: { duration: 0.08, ease: 'easeIn' },
                maxHeight: {
                  duration: 0.16,
                  ease: [0.32, 0.72, 0, 1],
                  delay: 0.02,
                },
              },
            }}
            style={{ overflow: 'hidden', willChange: 'max-height' }}
          >
            <div style={{ marginTop: 12 }}>
              <div className="feature-divider" />
              <p>{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="expand-indicator"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        <span className="expand-text">
          {isExpanded ? 'Click to contract' : 'Click to expand'}
        </span>
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{ rotate: isExpanded ? 0 : -90 }}
          transition={{
            duration: 0.18,
            ease: [0.32, 0.72, 0, 1],
          }}
        >
          <path d="M19 9l-7 7-7-7" />
        </motion.svg>
      </div>
    </motion.div>
  );
};

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
        'Complete operational suite for project lifecycle management, volunteer coordination, campaign execution, and fundraising. AI-powered proposal writing, automated impact reports, and marketplace integration for selling products/services. Real-time GPS tracking for field activities, compliance automation, and direct connection with verified CSR partners.',
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
        'End-to-end CSR management from budget planning to impact measurement. AI-powered NGO matching based on focus areas and geographic needs. Real-time fund utilization tracking with GPS-verified expenses and blockchain audit trails. Automated compliance reporting, CSR committee dashboard, and unspent fund management. Access marketplace to procure from social enterprises.',
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
        "Discover and connect with verified NGOs and causes aligned with your values. Volunteer your professional skills through the platform's talent marketplace. Track your contributions and see real-time impact of your donations. Participate in campaigns, join community events, and support social enterprises by purchasing their products. Build your social impact profile and join a network of changemakers.",
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
            <StakeholderCard
              key={stakeholder.title}
              icon={stakeholder.icon}
              title={stakeholder.title}
              description={stakeholder.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
