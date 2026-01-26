'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn, formatNumber, formatCurrency } from '@/utils/helpers';
import type { BaseComponentProps } from '@/types/common';

interface ProblemSolutionCardProps extends BaseComponentProps {
  icon: React.ReactNode;
  title: string;
  problemText: string;
  solutionText: string;
  index: number;
}

const ProblemSolutionCard = ({
  icon,
  title,
  problemText,
  solutionText,
  index,
  className,
}: ProblemSolutionCardProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className={cn('about-card', className)}
      initial={{ opacity: 0, y: 50 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      role="article"
      aria-labelledby={`card-title-${index}`}
    >
      <div className="about-icon" aria-hidden="true">
        {icon}
      </div>
      <h3 id={`card-title-${index}`}>{title}</h3>
      <div className="problem-solution-content">
        <p className="problem-text" role="region" aria-label="Problem description">
          {problemText}
        </p>
        <div className="solution-divider" aria-hidden="true"></div>
        <p className="solution-text" role="region" aria-label="Solution description">
          <strong>Solution:</strong> {solutionText}
        </p>
      </div>
    </motion.div>
  );
};

interface AboutProps extends BaseComponentProps {}

const aboutData = [
  {
    id: 'manual-reporting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: 'Manual Reporting Creates 60% Delays',
    problemText:
      'Companies and NGOs still rely on Excel sheets and PDF reports, causing massive delays in fund utilization tracking and compliance documentation.',
    solutionText:
      'GPS surveillance + blockchain audit logs via mobile SDK. Real-time tracking with 90% fraud reduction - every rupee traced from approval to beneficiary impact.',
  },
  {
    id: 'weak-verification',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Weak Verification Causes 15-20% Fraud',
    problemText: `${formatCurrency(50000)} Crore CSR budget underutilized because companies can't verify NGO authenticity - leading to 15-20% fraud and fund mismanagement.`,
    solutionText:
      'AI-powered e-KYC + Verification badges. 5x faster partner onboarding with complete transparency and audit trails.',
  },
  {
    id: 'sme-compliance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: '72% SMEs Fail CSR Compliance',
    problemText: `${formatNumber(40000)}+ eligible SMEs struggle with Section 135 compliance due to complex MCA filings, unspent fund rules, and cash flow unpredictability - trapping ${formatCurrency(5000)}+ Crore.`,
    solutionText:
      'Automated filings, unspent fund management, and CSR-as-a-Service subscriptions unlocking trapped budgets.',
  },
  {
    id: 'urban-only',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: '80% Urban-Only, Zero Rural Reach',
    problemText:
      'Existing platforms serve only 20% urban NGOs. 2M+ small/medium rural NGOs remain invisible due to tech barriers, internet dependency, and English-only interfaces.',
    solutionText:
      'Offline-first vernacular mobile app + GPS kits for grassroots tracking. Works without internet, supports 12+ Indian languages, empowering rural NGOs.',
  },
  {
    id: 'excel-operations',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: '70% Still Use Excel for Operations',
    problemText:
      'No unified system exists. NGOs juggle 5-10 different tools for projects, volunteers, campaigns, fundraising, and compliance - creating data silos, inefficiency, and operational chaos across teams.',
    solutionText:
      'Complete ERP + CRM + Marketplace + AI stack. Single platform replacing all tools with network effects that lock competitors out through ecosystem advantages.',
  },
  {
    id: 'q4-rush',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: '80% Funds Rushed in Q4 Year-End',
    problemText:
      'Companies dump 80% of CSR budgets in March quarter-end rush, leading to poor partner selection, zero impact measurement, and compliance-only mindset.',
    solutionText:
      'ML-powered CSR calendar with auto-matching and annual retainers. Smart planning throughout the year ensuring strategic impact vs last-minute checkboxes.',
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
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="about-title" className="section-title">
            Solving Critical Loopholes in India's CSR Ecosystem
          </h2>
          <p className="section-description">
            Addressing systemic gaps that waste ₹{formatNumber(30000)}+ Crore in annual CSR spending
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
