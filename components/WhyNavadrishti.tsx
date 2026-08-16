'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const principles = [
  {
    title: 'Problem Before Technology',
    description:
      'We start by understanding the challenge, its stakeholders, and its practical constraints before deciding what technology is required.',
  },
  {
    title: 'Built for Real-World Use',
    description:
      'Our solutions are designed around actual operating conditions, including the people, processes, resources, and environments involved.',
  },
  {
    title: 'Technology with Purpose',
    description:
      'We use technology where it creates genuine value—improving coordination, accessibility, efficiency, transparency, and measurable outcomes.',
  },
  {
    title: 'Built to Evolve',
    description:
      'We develop adaptable foundations that can grow with changing requirements, new technologies, and new areas of application.',
  },
] as const;

export default function WhyNavadrishti() {
  const { ref: sectionRef, isIntersecting: sectionVisible } =
    useIntersectionObserver({
      threshold: 0.1,
    });

  return (
    <motion.section
      id="why-navadrishti"
      className="why-navadrishti"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={sectionVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      aria-labelledby="why-title"
    >
      <div className="container">
        <div className="why-layout">
          <motion.div
            className="why-header"
            initial={{ opacity: 0, y: 20 }}
            animate={
              sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.55 }}
          >
            <h2 id="why-title" className="section-title">
              Why Navadrishti
            </h2>
            <p className="why-lead">
              We build with a clear understanding of the problem, the people
              involved, and the environment in which a solution must work. By
              combining technology with domain knowledge and practical
              implementation, we create solutions that are designed not only to
              function digitally, but to deliver meaningful results in the real
              world.
            </p>
          </motion.div>

          <div className="why-list" role="list">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                className="why-item"
                role="listitem"
                initial={{ opacity: 0, y: 18 }}
                animate={
                  sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
                }
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <span className="why-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="why-item-copy">
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
