'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const stakeholders = [
  {
    title: 'NGOs',
    description:
      'Run verified, milestone-based projects with evidence capture and streamlined operations.',
    points: [
      'CA verification with trust badge issuance',
      'Offline field data capture with GPS-linked proof',
      'Access to CSR discovery, volunteer intake, and service listings',
    ],
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
  },
  {
    title: 'Companies',
    description:
      'Design campaigns faster, approve milestones confidently, and maintain compliance-ready audit visibility.',
    points: [
      'AI-assisted planning and verified NGO matching',
      'Milestone contracts with evidence-first approvals',
      'Cryptographic audit trail across critical actions',
    ],
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
  },
  {
    title: 'Individuals',
    description:
      'Find trusted opportunities quickly and track impact with transparent, field-backed outcomes.',
    points: [
      'Discovery of verified NGOs and campaigns',
      'Structured volunteer and contribution pathways',
      'Clear impact visibility instead of opaque reporting',
    ],
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
  },
];

export default function Platform() {
  const { ref: sectionRef, isIntersecting: sectionVisible } =
    useIntersectionObserver({
      threshold: 0.1,
    });
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

        <div className="stakeholder-strips">
          {stakeholders.map((stakeholder, index) => (
            <motion.article
              key={stakeholder.title}
              className="stakeholder-strip"
              initial={{ opacity: 0, y: 24 }}
              animate={
                sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
              }
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <header className="stakeholder-strip-head">
                <div className="stakeholder-icon">{stakeholder.icon}</div>
                <div>
                  <h3>{stakeholder.title}</h3>
                </div>
              </header>

              <p className="stakeholder-summary">{stakeholder.description}</p>

              <ul>
                {stakeholder.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
