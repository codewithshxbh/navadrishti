'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    type: 'video',
    video: '/videos/1.mp4'
  },
  {
    id: 2,
    type: 'quote',
    quote: 'Technology isn\'t just about innovation—it\'s about creating solutions that uplift communities and bridge the digital divide for social good.'
  },
  {
    id: 3,
    type: 'video',
    video: '/videos/2.mp4'
  },
  {
    id: 4,
    type: 'quote',
    quote: 'Every line of code we write has the potential to transform lives. When we build with purpose, we create platforms that empower positive change.'
  },
  {
    id: 5,
    type: 'video',
    video: '/videos/3.mp4'
  },
  {
    id: 6,
    type: 'quote',
    quote: 'The future of social impact lies in transparent, efficient, and accessible digital platforms that connect hearts with causes that matter.'
  },
  {
    id: 7,
    type: 'video',
    video: '/videos/4.mp4'
  },
  {
    id: 8,
    type: 'quote',
    quote: 'Building for social good means understanding that behind every data point is a human story, and behind every feature is an opportunity to serve.'
  },
  {
    id: 9,
    type: 'video',
    video: '/videos/5.mp4'
  }
];

export default function VideoTestimonials() {
  return (
    <section 
      id="video-testimonials"
      style={{
        padding: '5rem 0',
        background: '#0a0a0a',
        color: '#ffffff',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div 
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '1rem'
          }}>This is why we do this</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#a1a1aa',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            The passion and purpose behind every work we do
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          maxWidth: '1400px',
          margin: '0 auto',
          alignItems: 'stretch',
          justifyContent: 'center'
        }}>
          <style jsx>{`
            @media (max-width: 768px) {
              div {
                grid-template-columns: 1fr !important;
                gap: 1.5rem !important;
                padding: 0;
              }
            }
            @media (min-width: 769px) and (max-width: 1024px) {
              div {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (min-width: 1025px) {
              div {
                grid-template-columns: repeat(3, 1fr) !important;
              }
            }
            @media (min-width: 1400px) {
              div {
                grid-template-columns: repeat(3, 1fr) !important;
              }
            }
          `}</style>
          {VIDEO_TESTIMONIALS.map((testimonial, index) => {
            const TestimonialCard = () => {
              const { ref: cardRef, isIntersecting: cardVisible } = useIntersectionObserver({
                threshold: 0.1,
                once: true,
                persistKey: `testimonial_${testimonial.id}`
              });
              
              return (
                <motion.div
                  ref={cardRef}
                  key={testimonial.id}
                  style={{
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                    borderRadius: '16px',
                    border: '1px solid #333',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    height: '420px',
                    minHeight: '420px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={cardVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: cardVisible ? index * 0.05 : 0 }}
              whileHover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 35px rgba(99, 102, 241, 0.15)',
                borderColor: '#6366f1'
              }}
            >
              {testimonial.type === 'video' ? (
                <div style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden'
                }}>
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  >
                    <source src={testimonial.video} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div style={{
                  padding: '2.5rem 2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    color: '#6366f1', 
                    marginBottom: '1.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'scale(1.2)'
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <p style={{
                    fontSize: '1.125rem',
                    lineHeight: 1.7,
                    color: '#f1f5f9',
                    margin: '0',
                    fontStyle: 'italic',
                    maxWidth: '280px',
                    wordWrap: 'break-word',
                    fontWeight: 500,
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                  }}>
                    "{testimonial.quote}"
                  </p>
                </div>
              )}
                </motion.div>
              );
            };
            
            return <TestimonialCard key={testimonial.id} />;
          })}
        </div>
      </div>
    </section>
  );
}