'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const architectureLayers = [
  {
    title: 'CA-Backed Trust System',
    summary:
      'Private verification by empanelled CAs with signed UDIN-backed certificates and visible trust badges.',
  },
  {
    title: 'Milestone Governance Engine',
    summary:
      'Execution contracts with predefined evidence gates so approvals and payouts are controlled and auditable.',
  },
  {
    title: 'Offline Field Operations App',
    summary:
      'Rural-first data capture with offline sync, GPS-tagged proof, retries, and immutable milestone linkage.',
  },
  {
    title: 'AI Orchestration Layer',
    summary:
      'AI-assisted campaign design, NGO matching, and compliance drafting where human governance remains final.',
  },
  {
    title: 'Tamper-Evident Audit System',
    summary:
      'Append-only hashed event ledger with periodic blockchain anchoring for external tamper detection.',
  },
  {
    title: 'Unified Discovery Platform',
    summary:
      'One searchable feed for projects, volunteers, and services, all tied to verified identities and proof.',
  },
];

export default function Features() {
  const { ref: sectionRef, isIntersecting: sectionVisible } =
    useIntersectionObserver({
      threshold: 0.1,
    });

  return (
    <motion.section
      id="features"
      className="features"
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
          <h2 className="section-title">Layered Technical Architecture</h2>
          <p className="section-description">
            Trust verification, milestone governance, field operations, and
            unified platform—all integrated into one enterprise-grade system
          </p>
        </motion.div>
        <div className="architecture-rail" role="list">
          {architectureLayers.map((layer, index) => (
            <motion.article
              key={layer.title}
              className="architecture-row"
              role="listitem"
              initial={{ opacity: 0, y: 18 }}
              animate={
                sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="architecture-row-head">
                <span className="architecture-step">{index + 1}.</span>
                <h3>{layer.title}</h3>
              </div>
              <p>{layer.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
