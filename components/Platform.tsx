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
                <h3>{stakeholder.title}</h3>
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
