'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const audiences = [
  {
    title: 'Organizations',
    description: 'Explore consulting and technology solutions',
    href: '#services',
    cta: 'View services',
    external: false,
  },
  {
    title: 'NGOs, Individuals & Companies',
    description: 'Explore the Navadrishti platform',
    href: 'https://app.navadrishti.in',
    cta: 'Open platform',
    external: true,
  },
  {
    title: 'Partners & Investors',
    description: 'Discuss collaboration and opportunities',
    href: 'mailto:connect@navadrishti.in',
    cta: 'Get in touch',
    external: false,
  },
] as const;

export default function WorkWith() {
  const { ref: sectionRef, isIntersecting: sectionVisible } =
    useIntersectionObserver({
      threshold: 0.1,
    });

  return (
    <motion.section
      id="work-with"
      className="work-with"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={sectionVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      aria-labelledby="work-with-title"
    >
      <div className="container">
        <motion.div
          className="work-with-header"
          initial={{ opacity: 0, y: 20 }}
          animate={
            sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.55 }}
        >
          <h2 id="work-with-title" className="section-title">
            Work With Navadrishti
          </h2>
          <p>Choose the path that fits how you want to engage with us.</p>
        </motion.div>

        <div className="work-with-list" role="list">
          {audiences.map((audience, index) => (
            <motion.a
              key={audience.title}
              href={audience.href}
              className="work-with-row"
              role="listitem"
              {...(audience.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              initial={{ opacity: 0, y: 16 }}
              animate={
                sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
              }
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="work-with-copy">
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </div>
              <span className="work-with-cta">
                {audience.cta}
                <span aria-hidden="true">→</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
