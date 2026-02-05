'use client';

import { motion } from 'framer-motion';

const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    type: 'video',
    video: '/videos/1.mp4',
  },
  {
    id: 2,
    type: 'quote',
    quote:
      "Technology isn't just about innovation—it's about creating solutions that uplift communities and bridge the digital divide for social good.",
  },
  {
    id: 3,
    type: 'video',
    video: '/videos/2.mp4',
  },
  {
    id: 4,
    type: 'quote',
    quote:
      'Every line of code we write has the potential to transform lives. When we build with purpose, we create platforms that empower positive change.',
  },
  {
    id: 5,
    type: 'video',
    video: '/videos/3.mp4',
  },
  {
    id: 6,
    type: 'quote',
    quote:
      'The future of social impact lies in transparent, efficient, and accessible digital platforms that connect hearts with causes that matter.',
  },
  {
    id: 7,
    type: 'video',
    video: '/videos/4.mp4',
  },
  {
    id: 8,
    type: 'quote',
    quote:
      'Building for social good means understanding that behind every data point is a human story, and behind every feature is an opportunity to serve.',
  },
  {
    id: 9,
    type: 'video',
    video: '/videos/5.mp4',
  },
];

export default function VideoTestimonials() {
  // Duplicate items for seamless loop
  const duplicatedItems = [...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS];

  return (
    <section className="video-testimonials">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '1rem',
            }}
          >
            This is why we do this
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(0, 0, 0, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            The passion and purpose behind every work we do
          </p>
        </div>

        <div className="scrolling-cards-container">
          <motion.div
            className="scrolling-cards"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {duplicatedItems.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                {testimonial.type === 'video' ? (
                  <div className="video-wrapper">
                    <video autoPlay loop muted playsInline>
                      <source src={testimonial.video} type="video/mp4" />
                    </video>
                  </div>
                ) : (
                  <div className="quote-wrapper">
                    <div className="quote-icon">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>
                    <p className="quote-text">"{testimonial.quote}"</p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
