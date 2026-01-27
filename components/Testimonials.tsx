'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { Testimonial } from '@/types/testimonial';
import { cn } from '@/utils/helpers';

const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 1,
    name: 'Aditya Garg',
    role: 'Founder & CEO, Navadrishti',
    social: 'LinkedIn',
    socialUrl: 'https://www.linkedin.com/in/adityagarg2004/',
    image: '/photos/aditya.png',
    text: "We're executing on India's ₹30,000 crore CSR opportunity. With 3.3M NGOs and 72% compliance failures, we built the unified OS the sector needs—targeting 10K mid-sized NGOs and 500 CSR firms in Year 1.\n\nExecution means solving real gaps—Q4 fund rushes, 60% reporting delays—and capturing 20% market share through strategic penetration of Tier-1 and Tier-2 cities.",
    reverse: false,
  },
  {
    id: 2,
    name: 'Shubhendu Chakrabarti',
    role: 'Co-Founder & CTO, Navadrishti',
    social: 'LinkedIn',
    socialUrl: 'https://www.linkedin.com/in/shubhenduchakrabarti/',
    image: '/photos/shubhendu.jpeg',
    text: 'Our tech stack solves competitor loopholes—AI-powered matching for 5x faster verification, blockchain-backed transparency, automated compliance tracking. Full ERP+CRM+marketplace replacing 70% Excel usage.\n\nWe built microservices with 99.9% uptime, real-time analytics, and ML-powered fund allocation. Our platform delivers 90% fraud reduction through smart verification systems.',
    reverse: true,
  },
  {
    id: 3,
    name: 'Vidhan Singh Rathore',
    role: 'Co-Founder & COO, Navadrishti',
    social: 'LinkedIn',
    socialUrl: 'https://www.linkedin.com/in/vidhan-ai/',
    image: '/photos/vidhan.jpeg',
    text: 'We operationalized statutory verification through empanelled auditors, enabling 7-day turnarounds that crush self-reported competitors. Our offline-first vernacular app reaches 2M rural NGOs that platforms ignore.\n\nOperations means scalable processes—GPS tracking, milestone-based disbursals, and end-to-end transparency. Every system works seamlessly from metros to remote villages.',
    reverse: false,
  },
] as const;

interface TestimonialsProps {
  autoPlayDuration?: number;
  className?: string;
}

export default function Testimonials({
  autoPlayDuration = 12000,
  className,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();
  const { handleArrowNavigation } = useKeyboardNavigation();
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.01,
    once: true,
    persistKey: 'testimonials_section',
  });

  const currentTestimonial = TESTIMONIALS[currentIndex];

  if (!currentTestimonial) {
    return null; // or loading state
  }

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  }, []);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextTestimonial, autoPlayDuration);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial, autoPlayDuration]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevTestimonial();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextTestimonial();
          break;
        case ' ':
        case 'Space':
          event.preventDefault();
          setIsPaused((prev) => !prev);
          break;
        default:
          handleArrowNavigation(event);
      }
    },
    [prevTestimonial, nextTestimonial, handleArrowNavigation]
  );

  return (
    <section
      id="testimonials"
      className={cn('testimonials', className)}
      ref={sectionRef}
      onKeyDown={handleKeyDown}
      aria-label="Team testimonials"
      role="region"
    >
      <div className="section-header">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.3 }}
        >
          Our Views
        </motion.h2>
        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          Perspectives from the team building India's social impact
          infrastructure
        </motion.p>
      </div>

      <motion.div
        className="testimonial-carousel"
        initial={{ opacity: 0, y: 30 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-live="polite"
        aria-atomic="true"
      >
        <button
          className="carousel-nav carousel-prev"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
          tabIndex={0}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Testimonial Container with Crossfade */}
        <div className="testimonial-container">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={`testimonial-${testimonial.id}`}
              className="testimonial-item"
              initial={false}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                zIndex: index === currentIndex ? 2 : 1,
              }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                position: index === 0 ? 'relative' : 'absolute',
                top: index === 0 ? 'auto' : 0,
                left: index === 0 ? 'auto' : 0,
                width: '100%',
              }}
              role="tabpanel"
              aria-labelledby={`testimonial-${testimonial.id}`}
              aria-hidden={index !== currentIndex}
            >
              <div className="testimonial-content-left">
                <blockquote className="testimonial-text">
                  {testimonial.text.split('\n\n').map((paragraph, i) => (
                    <span key={i}>
                      {paragraph}
                      {i < testimonial.text.split('\n\n').length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </span>
                  ))}
                </blockquote>
                <div className="testimonial-divider" aria-hidden="true"></div>
                <footer className="testimonial-footer">
                  <div className="author-info">
                    <a
                      href={testimonial.socialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="author-name-link"
                      aria-label={`Visit ${testimonial.name}'s LinkedIn profile`}
                    >
                      <h3 id={`testimonial-${testimonial.id}`}>
                        {testimonial.name}
                      </h3>
                    </a>
                    <p>{testimonial.role}</p>
                  </div>
                </footer>
              </div>
              <div className="testimonial-image-right">
                <img
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <button
          className="carousel-nav carousel-next"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          tabIndex={0}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </motion.div>

      <div
        className="carousel-dots"
        role="tablist"
        aria-label="Select testimonial"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.button
            key={testimonial.id}
            className={cn('carousel-dot', {
              active: index === currentIndex,
            })}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isIntersecting
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    scale: 0.8,
                  }
            }
            transition={{
              duration: 0.3,
              delay: isIntersecting ? 0.4 + index * 0.1 : 0,
            }}
            onClick={() => goToTestimonial(index)}
            aria-label={`View ${testimonial.name}'s testimonial`}
            aria-selected={index === currentIndex}
            role="tab"
            tabIndex={index === currentIndex ? 0 : -1}
          />
        ))}
      </div>

      {/* Screen reader only status */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Testimonial {currentIndex + 1} of {TESTIMONIALS.length}:{' '}
        {currentTestimonial?.name ?? 'Loading...'}
      </div>
    </section>
  );
}
