'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const StatItem = ({
  number,
  text,
  index,
}: {
  number: string;
  text: string;
  index: number;
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="impact-stat"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isIntersecting
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <motion.div
        className="stat-number"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
      >
        {number}
      </motion.div>
      <motion.div
        className="stat-text"
        initial={{ opacity: 0 }}
        animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

export default function Impact() {
  const { ref: sectionRef, isIntersecting: sectionVisible } =
    useIntersectionObserver({
      threshold: 0.1,
    });

  return (
    <motion.section
      id="impact"
      className="impact"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={sectionVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={
            sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Building the Trust and Governance Infrastructure for CSR
          </h2>
          <p className="section-description">
            Beyond software tools—we're building the foundational systems that
            control who can be trusted, how projects are executed, how impact is
            proven, and how money flows in India's social sector.
          </p>
        </motion.div>
        <motion.div
          className="impact-stats"
          initial={{ opacity: 0, y: 40 }}
          animate={
            sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <StatItem index={0} number="3.1M+" text="Registered NGOs in India" />
          <StatItem index={1} number="₹50K+ Cr" text="Annual CSR Spending" />
          <StatItem index={2} number="1B+" text="People Impacted Annually" />
        </motion.div>
      </div>
    </motion.section>
  );
}
