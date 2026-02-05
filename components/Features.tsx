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
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{ overflow: 'hidden' }}
          >
            <div className="feature-divider" />
            <p>{description}</p>
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
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{
            transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
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
          <h2 className="section-title">Complete Digital Infrastructure</h2>
          <p className="section-description">
            Everything needed to run social impact work efficiently,
            transparently, and at scale
          </p>
        </motion.div>
        <div className="features-grid">
          <FeatureCard
            index={0}
            title="Project Management"
            description="Complete project lifecycle management with task automation, milestone tracking, volunteer coordination, and campaign execution. Integrated workflows connect planning to impact measurement with real-time dashboards, resource allocation, and team collaboration tools that eliminate manual coordination overhead."
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
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            }
          />
          <FeatureCard
            index={1}
            title="AI-Powered Assistance"
            description="Advanced AI capabilities for campaign creation, automated proposal writing, intelligent documentation management, and structured impact report generation. Natural language processing helps draft compelling narratives, while machine learning suggests optimal strategies based on historical success patterns and stakeholder preferences."
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
            index={2}
            title="Verified Ecosystem"
            description="Multi-tier verification system ensuring trust across the network. AI-powered e-KYC validates NGO registrations, financials, and impact history. Companies get verified CSR partners, NGOs connect with authenticated funders, and professionals join a credible marketplace - all backed by blockchain audit trails and transparent reputation scoring."
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
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            }
          />
          <FeatureCard
            index={3}
            title="Financial Governance"
            description="End-to-end financial tracking from budget allocation to beneficiary impact. Real-time fund utilization monitoring, unspent fund management, and compliance reporting. GPS-enabled expense verification ensures every rupee is traceable with blockchain-backed audit logs preventing fraud and ensuring transparent fund governance."
            image="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=200&fit=crop&q=80"
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            }
          />
          <FeatureCard
            index={4}
            title="Products & Services"
            description="Integrated marketplace enabling NGOs to sell handcrafted products, offer professional consulting services, and create sustainable revenue streams beyond traditional donations. Built-in payment processing, inventory management, and delivery tracking. Companies can procure through CSR budgets while supporting social enterprises and building long-term partnerships."
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
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            }
          />
          <FeatureCard
            index={5}
            title="Audit & Compliance"
            description="Comprehensive audit infrastructure with immutable activity logs, multi-level approval workflows, and automated compliance reporting. Every transaction, document change, and stakeholder interaction is permanently recorded. Built-in regulatory templates for CSR committee reports. Real-time compliance dashboards highlight risks and ensure regulatory adherence."
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
                <polyline points="10 9 9 9 8 9" />
              </svg>
            }
          />
        </div>
      </div>
    </motion.section>
  );
}
