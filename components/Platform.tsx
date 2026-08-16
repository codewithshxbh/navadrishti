'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import {
  PLATFORM_APP_URL,
  PLATFORM_FEATURES,
  PLATFORM_FUTURE_DOMAINS,
  PLATFORM_LEAD,
  PLATFORM_NAME,
  PLATFORM_PHASE_ONE,
  PLATFORM_PHASE_TWO,
  PLATFORM_STAKEHOLDERS,
  PLATFORM_STATUS,
  PLATFORM_TECH_DIRECTION,
} from '@/constants';

const upcomingSlots = [1, 2, 3] as const;

export default function Platform() {
  const { ref: sectionRef, isIntersecting: sectionVisible } =
    useIntersectionObserver({
      threshold: 0.1,
    });

  return (
    <motion.section
      id="products"
      className="platform products-tech"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={sectionVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div
          className="section-header products-tech-header"
          initial={{ opacity: 0, y: 20 }}
          animate={
            sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
        >
          <h2 id="products-title" className="section-title">
            Products & Technology
          </h2>
        </motion.div>

        <div className="product-cards">
          <motion.article
            className="product-card product-card--live"
            aria-labelledby="products-title"
            initial={{ opacity: 0, y: 24 }}
            animate={
              sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
            }
            transition={{ duration: 0.5 }}
          >
            <div className="product-card-top">
              <h3>{PLATFORM_NAME}</h3>
              <p className="product-status">{PLATFORM_STATUS}</p>
            </div>

            <ul className="product-stakeholders" aria-label="Stakeholders">
              {PLATFORM_STAKEHOLDERS.map((stakeholder) => (
                <li key={stakeholder}>{stakeholder}</li>
              ))}
            </ul>

            <p className="product-lead">{PLATFORM_LEAD}</p>

            <div className="product-block">
              <h4>Special Features</h4>
              <ul className="product-list product-list--usp">
                {PLATFORM_FEATURES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="product-phases">
              <div className="product-block">
                <h4>Phase 1</h4>
                <ul className="product-list">
                  {PLATFORM_PHASE_ONE.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="product-block">
                <h4>Phase 2</h4>
                <ul className="product-list">
                  {PLATFORM_PHASE_TWO.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="product-actions">
              <a
                className="product-action product-action--primary"
                href={PLATFORM_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Platform
              </a>
              <Link
                className="product-action product-action--secondary"
                href="/navadrishti"
              >
                Know More
              </Link>
            </div>
          </motion.article>

          {upcomingSlots.map((slot, index) => (
            <motion.article
              key={slot}
              className="product-card product-card--upcoming"
              aria-label={`Upcoming product slot ${slot}`}
              initial={{ opacity: 0, y: 24 }}
              animate={
                sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
              }
              transition={{ duration: 0.5, delay: 0.08 * (index + 1) }}
            >
              <span className="product-upcoming-label" aria-hidden="true">
                Upcoming
              </span>
              <span className="sr-only">Upcoming product</span>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="tech-direction"
          initial={{ opacity: 0, y: 20 }}
          animate={
            sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <h3>Our Technology Direction</h3>
          <p>{PLATFORM_TECH_DIRECTION}</p>
          <p className="tech-domains-label">Future Product Domains</p>
          <ul className="tech-domains">
            {PLATFORM_FUTURE_DOMAINS.map((domain) => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
