'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const consultingAreas = [
  {
    title: 'Behavioural Change',
    description:
      'Designing interventions that encourage meaningful and sustainable changes in behaviour.',
  },
  {
    title: 'Education',
    description:
      'Developing approaches and solutions that improve learning, awareness, and accessibility.',
  },
  {
    title: 'Technology',
    description:
      'Advising organizations on technology adoption, digital solutions, and systems designed around real-world needs.',
  },
] as const;

const SERVICE_PHOTOS = Array.from({ length: 15 }, (_, index) => {
  const n = index + 1;
  return {
    id: n,
    src: `/photos/pic ${n}.jpeg`,
  };
});

export default function Services() {
  const { ref: sectionRef, isIntersecting: sectionVisible } =
    useIntersectionObserver({
      threshold: 0.05,
    });

  const galleryPhotos = [...SERVICE_PHOTOS, ...SERVICE_PHOTOS];

  return (
    <motion.section
      id="services"
      className="services"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={sectionVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      aria-labelledby="services-title"
    >
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          animate={
            sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.55 }}
        >
          <h2 id="services-title" className="section-title">
            Services & Consulting
          </h2>
          <p>
            Our consulting practice focuses on three areas where technology and
            practical implementation can create measurable change.
          </p>
        </motion.div>

        <div className="services-grid" role="list">
          {consultingAreas.map((area, index) => (
            <motion.article
              key={area.title}
              className="services-item"
              role="listitem"
              initial={{ opacity: 0, y: 18 }}
              animate={
                sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="services-gallery" aria-label="Field and project photos">
        <div className="services-gallery-track-wrap">
          <motion.div
            className="services-gallery-track"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 55,
                ease: 'linear',
              },
            }}
          >
            {galleryPhotos.map((photo, index) => (
              <div
                key={`${photo.id}-${index}`}
                className="services-gallery-card"
              >
                <img
                  src={photo.src}
                  alt={`Project photo ${photo.id}`}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
