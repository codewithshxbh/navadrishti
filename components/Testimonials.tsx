'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import { useIsMobile } from '@/hooks/useMediaQuery';
import type { Testimonial } from '@/types/testimonial';
import { cn } from '@/utils/helpers';

const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 1,
    name: 'Aditya Garg',
    role: 'Founder & CEO, Navadrishti',
    social: '@adityagarg2004 • LinkedIn',
    socialUrl: 'https://www.linkedin.com/in/adityagarg2004/',
    image: '/photos/pic 1.jpeg',
    text: "We're not building another donation platform. Navadrishti is the complete operating system that NGOs, companies, and individuals need to create transparent, measurable social impact at scale.\n\nRemember: You don't need a perfect background to build a great future. You just need direction, discipline, and the courage to start.\n\nLet's move forward, one step, one skill, one leap at a time.",
    reverse: false,
  },
  {
    id: 2,
    name: 'Shubhendu Chakrabarti',
    role: 'Co-Founder & CTO, Navadrishti',
    social: '@shubhenduchakrabarti • LinkedIn',
    socialUrl: 'https://www.linkedin.com/in/shubhenduchakrabarti/',
    image: '/photos/shubhendu.jpeg',
    text: "India has 3.1 million NGOs and ₹50,000+ Crore in CSR spending, yet 80% of funds rush in Q4 and 70% still use Excel. We're solving these systemic gaps with ERP, CRM, and marketplace technology.\n\nBuilding the infrastructure that scales social impact requires technical excellence and deep understanding of India's unique challenges.",
    reverse: true,
  },
  {
    id: 3,
    name: 'Vidhan Singh Rathore',
    role: 'Co-Founder & COO, Navadrishti',
    social: '@vidhan-ai • LinkedIn',
    socialUrl: 'https://www.linkedin.com/in/vidhan-ai/',
    image: '/photos/pic 3.jpeg',
    text: "Our offline-first approach with GPS tracking and vernacular support reaches 2 million rural NGOs that other platforms ignore. Every rupee is traced from approval to beneficiary impact with 90% fraud reduction.\n\nBuilding something meaningful requires persistence, and the desire to make impact truly accessible to every corner of India.",
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
  const { containerRef, handleArrowNavigation } = useKeyboardNavigation();

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
      ref={containerRef}
      onKeyDown={handleKeyDown}
      aria-label="Team testimonials"
      role="region"
    >
      <div className="section-header">
        <h2 className="section-title">Our Views</h2>
        <p className="section-description">
          Perspectives from the team building India's social impact infrastructure
        </p>
      </div>

      <div
        className="testimonial-carousel"
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

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            className="testimonial-item"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            role="tabpanel"
            aria-labelledby={`testimonial-${currentTestimonial.id}`}
          >
            <div className="testimonial-content-left">
              <blockquote className="testimonial-text">
                {currentTestimonial.text.split('\n\n').map((paragraph, i) => (
                  <span key={i}>
                    {paragraph}
                    {i < currentTestimonial.text.split('\n\n').length - 1 && (
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
                  <h3 id={`testimonial-${currentTestimonial.id}`}>
                    {currentTestimonial.name}
                  </h3>
                  <p>{currentTestimonial.role}</p>
                </div>
                <div className="social-links">
                  <a
                    href={currentTestimonial.socialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={`Visit ${currentTestimonial.name}'s LinkedIn profile`}
                  >
                    {currentTestimonial.social}
                  </a>
                </div>
              </footer>
            </div>
            <div className="testimonial-image-right">
              <img
                src={currentTestimonial.image}
                alt={`Portrait of ${currentTestimonial.name}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </AnimatePresence>

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
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Select testimonial">
        {TESTIMONIALS.map((testimonial, index) => (
          <button
            key={testimonial.id}
            className={cn('carousel-dot', {
              active: index === currentIndex,
            })}
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
        Testimonial {currentIndex + 1} of {TESTIMONIALS.length}: {currentTestimonial?.name ?? 'Loading...'}
      </div>
    </section>
  );
}
