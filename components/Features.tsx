'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const FeatureCard = ({
  title,
  description,
  index,
  icon,
  image,
}: {
  title: string;
  description: string;
  index: number;
  icon: React.ReactNode;
  image: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`feature-card ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ cursor: 'pointer' }}
    >
      <div className="feature-icon">{icon}</div>
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
    </div>
  );
};

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
        <div className="features-grid">
          <FeatureCard
            index={0}
            title="CA-Backed Trust System"
            description="Private verification infrastructure powered by empanelled Chartered Accountants. NGOs and companies submit registration docs, financials, compliance certificates. OCR pre-checks format and consistency. CAs review in dedicated console, issue signed certificates with UDIN numbers. Badges visible on profiles: 'Verified by CA | UDIN: XXXXX | Valid till: YYYY'. No government API dependency. Legally safe, audit-defensible, and tamper-evident."
            image="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop&q=80"
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            }
          />
          <FeatureCard
            index={1}
            title="Milestone Governance Engine"
            description="Every CSR project becomes a governed execution contract. Companies define budget, milestones, and evidence requirements upfront. NGOs submit GPS-tagged field proof—photos, reports, beneficiary data. Companies review and approve inside the platform. Payments happen via existing bank channels (Phase 1), with payment confirmations uploaded. Every approval hashed and logged. Cryptographic audit trail ensures dispute-proof history."
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop&q=80"
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            }
          />
          <FeatureCard
            index={2}
            title="Offline Field Operations App"
            description="Mobile app/PWA for rural NGO field staff. Works fully offline. Capture beneficiary data, photos, videos, GPS location, timestamps—all stored locally. When network available, auto-syncs to platform with deduplication and retry logic. Immutable field evidence linked to milestones. Companies see real-time impact proof. No more fake reports or delayed documentation. Built for low-bandwidth, vernacular, and grassroots operations."
            image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=200&fit=crop&q=80"
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12" y2="18" />
              </svg>
            }
          />
          <FeatureCard
            index={3}
            title="AI Orchestration Layer"
            description="CSR co-pilot for companies: collects budget, cause, region via conversational UI. Generates 3-4 campaign concepts with SDG alignment, beneficiary estimates, Schedule VII mapping. Auto-matches verified NGOs by cause, geography, track record. Creates proposals, contracts, compliance document templates, impact validation reports. Turns CSR planning from months to minutes. AI assists, humans approve—never bypasses governance."
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&q=80"
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            }
          />
          <FeatureCard
            index={4}
            title="Tamper-Evident Audit System"
            description="Append-only audit ledger for all critical actions: CA verifications, milestone approvals, payment confirmations, compliance events. Every action hashed, timestamped, and logged. Optional: daily root hash anchored to public blockchain (Polygon) for external tamper-proofing. Does NOT move money on-chain. Blockchain used only for cryptographic audit trail. Court-defensible, dispute-proof, enterprise-grade compliance infrastructure."
            image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop&q=80"
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            }
          />
          <FeatureCard
            index={5}
            title="Unified Discovery Platform"
            description="CSR projects, service requests, volunteer opportunities, marketplace items—all published as structured listings with role-based access. Feed engine distributes opportunities to eligible users. Companies discover verified NGOs. NGOs discover CSR projects. Individuals find volunteer roles. Every listing tied to verified identity, governed execution, and audit trail. Single source of truth replacing WhatsApp/email chaos with searchable, governed ecosystem."
            image="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=200&fit=crop&q=80"
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            }
          />
        </div>
      </div>
    </motion.section>
  );
}
