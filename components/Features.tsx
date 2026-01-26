'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const FeatureCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="feature-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <h3>{title}</h3>
      <div className="feature-divider"></div>
      <p>{description}</p>
    </motion.div>
  );
};

export default function Features() {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useIntersectionObserver({
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
          animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Complete Digital Infrastructure</h2>
          <p className="section-description">
            Everything needed to run social impact work efficiently, transparently, and at scale
          </p>
        </motion.div>
        <div className="features-grid">
          <FeatureCard
            index={0}
            title="Project Management"
            description="Manage projects, volunteers, services, and campaigns from planning through execution with full workflow automation"
          />
          <FeatureCard
            index={1}
            title="AI-Powered Assistance"
            description="Get help with campaign creation, proposal writing, documentation, and generate structured impact reports automatically"
          />
          <FeatureCard
            index={2}
            title="Verified Ecosystem"
            description="Connect with verified NGOs, CSR partners, and professionals in a trusted network built for collaboration"
          />
          <FeatureCard
            index={3}
            title="Financial Governance"
            description="Track CSR budgets, monitor fund utilization, and ensure compliance with transparent, auditable financial workflows"
          />
          <FeatureCard
            index={4}
            title="Products & Services"
            description="NGOs can sell products and professional services, creating sustainable revenue streams beyond donations"
          />
          <FeatureCard
            index={5}
            title="Audit & Compliance"
            description="Every action is logged and traceable. Built-in verification, approval workflows, and compliance reporting"
          />
        </div>
      </div>
    </motion.section>
  )
}
