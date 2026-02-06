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
        'Get CA-verified to unlock CSR opportunities. Submit registration docs, financials, compliance certificates—CA reviews and issues signed certification badge. Run milestone-governed projects with built-in evidence submission. Use offline field app to capture GPS-tagged beneficiary data, photos, reports. Access AI tools for proposal writing. Discover CSR projects, post service offers, recruit volunteers. Unified operating system replacing Excel, WhatsApp, and fragmented tools.',
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
        'Use AI co-pilot to generate CSR campaign concepts from budget, cause, and region. Auto-match with CA-verified NGOs. Define milestone execution contracts with evidence requirements. Review GPS-tagged field proof and approve milestones inside platform. Payments via existing bank channels; upload confirmations. Every action logged with cryptographic audit trail. Real-time compliance dashboards, automated reporting, unspent fund management. Turn months of planning into minutes.',
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
        'Discover CA-verified NGOs and causes. Apply for volunteer opportunities with verified organizations. Track your contributions with transparent, evidence-backed impact reports. Support social enterprises through the marketplace. Join campaigns and community events. Build your impact profile in a trust-based network. No more uncertainty about where your time or donations go—everything backed by field evidence and audit trails.',
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
