'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn, formatNumber, formatCurrency } from '@/utils/helpers';
import type { BaseComponentProps } from '@/types/common';

interface ProblemRowProps extends BaseComponentProps {
  title: string;
  metric: string;
  problemText: string;
  solutionText: string;
  outcome: string;
  index: number;
}

const ProblemRow = ({
  title,
  metric,
  problemText,
  solutionText,
  outcome,
  index,
  className,
}: ProblemRowProps) => {
  return (
    <article
      className={cn('problem-row', className)}
      role="article"
      aria-labelledby={`card-title-${index}`}
    >
      <header className="problem-row-head">
        <div>
          <h3 id={`card-title-${index}`}>{title}</h3>
          <p className="problem-metric">{metric}</p>
        </div>
      </header>

      <div className="problem-row-body">
        <div>
          <p className="problem-label">Problem</p>
          <p className="problem-text">{problemText}</p>
        </div>
        <div>
          <p className="solution-label">What Navadrishti Changes</p>
          <p className="solution-text">{solutionText}</p>
        </div>
      </div>

      <div className="problem-outcome">
        <span>{outcome}</span>
      </div>
    </article>
  );
};

interface AboutProps extends BaseComponentProps {}

const aboutData = [
  {
    id: 'trust-verification',
    title: 'Trust Crisis in NGO Discovery',
    metric: '15-20% estimated CSR fraud risk',
    problemText: `Companies struggle to validate NGO credibility. With no consistent verification layer, 15-20% fraud risk persists and nearly ${formatCurrency(50000)} Crore stays underutilized.`,
    solutionText:
      'CA-led verification with UDIN-signed certificates and tamper-evident logs creates a dependable trust baseline.',
    outcome:
      'Organizations are matched based on verified trust signals, not assumptions.',
  },
  {
    id: 'milestone-governance',
    title: 'Execution Without Governance',
    metric: 'Projects run on unstructured coordination',
    problemText:
      'CSR execution often happens across WhatsApp, email, and spreadsheets with no milestone gates or evidence standards.',
    solutionText:
      'Milestone contracts enforce evidence-first approvals, GPS-backed proof submission, and cryptographic action tracking.',
    outcome:
      'Fund release and execution are tied to proof, approvals, and traceability.',
  },
  {
    id: 'field-evidence',
    title: 'Field Teams Locked Out by Connectivity',
    metric: '80% rural NGOs face digital exclusion',
    problemText:
      'Many rural NGOs cannot reliably participate due to weak internet, language barriers, and low digital infrastructure.',
    solutionText:
      'An offline-first field app with local-language support captures GPS evidence and syncs automatically when connectivity returns.',
    outcome:
      'Grassroots execution teams can operate first and sync later without losing accountability.',
  },
  {
    id: 'audit-compliance',
    title: 'Compliance Documentation Breakdown',
    metric: '72% SMEs struggle with audit readiness',
    problemText: `${formatNumber(40000)}+ SMEs face manual compliance workflows and weak audit logs, putting ${formatCurrency(5000)}+ Crore at reporting risk.`,
    solutionText:
      'An append-only, hash-linked audit ledger with blockchain anchoring provides a court-defensible compliance trail.',
    outcome:
      'Documentation becomes continuous and defensible instead of last-minute manual assembly.',
  },
  {
    id: 'ai-orchestration',
    title: 'Late-Stage CSR Planning Pressure',
    metric: '80% budgets concentrated in Q4',
    problemText:
      'When most budgets move in Q4, teams rush partner selection and program planning, reducing outcome quality.',
    solutionText:
      'AI co-pilot workflows generate campaigns, match verified NGOs, and draft compliance artifacts in minutes.',
    outcome:
      'Teams can launch quality campaigns faster without sacrificing controls.',
  },
  {
    id: 'unified-platform',
    title: 'Tool Fragmentation Across Operations',
    metric: '70% workflows spread across disconnected tools',
    problemText:
      'Teams juggle multiple disconnected tools, creating silos, duplicate work, and conflicting records.',
    solutionText:
      'A unified operating platform centralizes projects, volunteers, compliance, and analytics under one verified workflow.',
    outcome:
      'Teams work from one shared system instead of stitching together parallel records.',
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

        <div className="problem-studio" role="list">
          {aboutData.map((card, index) => (
            <ProblemRow
              key={card.id}
              title={card.title}
              metric={card.metric}
              problemText={card.problemText}
              solutionText={card.solutionText}
              outcome={card.outcome}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
