'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn, formatNumber, formatCurrency } from '@/utils/helpers';
import type { BaseComponentProps } from '@/types/common';

interface ProblemSolutionCardProps extends BaseComponentProps {
  icon: React.ReactNode;
  title: string;
  problemText: string;
  solutionText: string;
  index: number;
  image: string;
}

const ProblemSolutionCard = ({
  icon,
  title,
  problemText,
  solutionText,
  index,
  className,
  image,
}: ProblemSolutionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={cn('about-card', isExpanded && 'expanded', className)}
      role="article"
      aria-labelledby={`card-title-${index}`}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ cursor: 'pointer' }}
    >
      <div className="feature-icon">{icon}</div>
      <h3 id={`card-title-${index}`}>{title}</h3>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            className="problem-solution-content"
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{
              opacity: 1,
              maxHeight: 600,
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
          >
            <div className="problem-solution-inner">
              <p
                className="problem-text"
                role="region"
                aria-label="Problem description"
              >
                {problemText}
              </p>
              <div className="solution-divider" aria-hidden="true" />
              <p
                className="solution-text"
                role="region"
                aria-label="Solution description"
              >
                <strong>Solution:</strong> {solutionText}
              </p>
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
          animate={{
            rotate: isExpanded ? 0 : -90,
          }}
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

interface AboutProps extends BaseComponentProps {}

const aboutData = [
  {
    id: 'trust-verification',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Trust Crisis: 15-20% CSR Fraud Rate',
    problemText:
      'Companies cannot verify NGO authenticity reliably. No standardized verification exists. Government portals are incomplete. This leads to 15-20% fraud rate and ${formatCurrency(50000)} Crore underutilization.',
    solutionText:
      'CA-backed private verification system. Chartered Accountants review registration, financials, compliance docs. Issue signed certificates with UDIN numbers. Every verification is audit-logged and tamper-evident.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop&q=80',
  },
  {
    id: 'milestone-governance',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: 'No Standard Project Execution Process',
    problemText:
      'CSR projects run on WhatsApp, email, and Excel chaos. No structured milestones. No evidence requirements. No approval workflows. Companies lose visibility after releasing funds.',
    solutionText:
      'Milestone-governed execution contracts. Define budget, phases, evidence requirements upfront. NGOs submit GPS-tagged proof. Companies approve inside platform. Every action logged with cryptographic hashes.',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=200&fit=crop&q=80',
  },
  {
    id: 'field-evidence',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: '80% Rural NGOs Digitally Excluded',
    problemText:
      '2M+ rural NGOs cannot access CSR opportunities. They lack internet reliability, English literacy, and tech infrastructure. Existing platforms serve only urban, well-connected organizations.',
    solutionText:
      'Offline-first mobile app with GPS evidence capture. Works without internet. Local language support. Field staff record beneficiary data, photos, geo-location. Auto-syncs when network available. Immutable audit trail.',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=200&fit=crop&q=80',
  },
  {
    id: 'audit-compliance',
    icon: (
      <svg
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
    ),
    title: '72% SMEs Unable to Maintain Audit Trails',
    problemText:
      '${formatNumber(40000)}+ SMEs struggle with CSR compliance documentation. No structured audit logs. Manual document management. Cannot prove fund utilization. Risk penalties and trapped ${formatCurrency(5000)}+ Crore.',
    solutionText:
      'Append-only audit ledger with blockchain anchoring. Every action hashed and logged. CA verifications, milestone approvals, payment confirmations cryptographically recorded. Court-defensible, tamper-proof compliance trail.',
    image:
      'https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&h=200&fit=crop&q=80',
  },
  {
    id: 'ai-orchestration',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: '80% CSR Budgets Rushed in Q4',
    problemText:
      'Companies dump 80% of CSR in March quarter-end. Poor partner selection. Zero impact measurement. No time for proper planning, vetting, or execution. Compliance-only mindset prevails.',
    solutionText:
      'AI CSR co-pilot generates campaign concepts from budget, cause, region inputs. Auto-matches verified NGOs. Creates proposals, contracts, compliance docs, impact reports. Turns planning from months to minutes.',
    image:
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=200&fit=crop&q=80',
  },
  {
    id: 'unified-platform',
    icon: (
      <svg
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
    ),
    title: '70% Rely on Fragmented Tools',
    problemText:
      'NGOs juggle 5-10 different tools for operations. Excel for projects, WhatsApp for coordination, Google Forms for volunteers, separate payment tracking. Data silos, duplication, no single source of truth.',
    solutionText:
      'Unified operating system for social impact. Projects, campaigns, volunteers, marketplace, compliance, analytics—all in one platform. Governed execution tied to verified identities and audit trails. Network effects lock in ecosystem.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&q=80',
  },
] as const;

export default function About({ className, ...props }: AboutProps) {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className={cn('about', className)}
      ref={sectionRef}
      role="region"
      aria-labelledby="about-title"
      {...props}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
        >
          <h2 id="about-title" className="section-title">
            The Core Problems We Solve
          </h2>
          <p className="section-description">
            Building trust infrastructure, governance systems, field evidence,
            and audit trails—the missing foundation of India's CSR ecosystem
          </p>
        </motion.div>

        <div className="about-grid" role="list">
          {aboutData.map((card, index) => (
            <ProblemSolutionCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              problemText={card.problemText}
              solutionText={card.solutionText}
              index={index}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
