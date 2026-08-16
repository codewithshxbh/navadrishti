'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ABOUT_VIDEOS = [
  '/videos/1.mp4',
  '/videos/2.mp4',
  '/videos/3.mp4',
  '/videos/4.mp4',
  '/videos/5.mp4',
] as const;

export default function About() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const playCurrent = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay may be blocked until user interaction; muted should usually allow it.
      });
    }
  }, []);

  useEffect(() => {
    playCurrent();
  }, [activeIndex, playCurrent]);

  const handleEnded = () => {
    setActiveIndex((prev) => (prev + 1) % ABOUT_VIDEOS.length);
  };

  return (
    <section
      id="about"
      className="about"
      ref={sectionRef}
      role="region"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about-split">
          <motion.div
            className="about-split-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.55 }}
          >
            <h2 id="about-title" className="section-title about-split-title">
              About Navadrishti LLP
            </h2>
            <p>
              Established in 2025, Navadrishti LLP is a technology and
              consulting company focused on building practical solutions for
              complex real-world challenges. We combine technology, domain
              expertise and on-ground understanding to help organizations
              improve how they plan, coordinate, execute and measure their work.
              Through our products and consulting engagements, we work with
              organizations to turn operational challenges into structured,
              scalable and workable solutions.
            </p>
            <p>
              Our journey begins with the social-impact ecosystem, where our
              first product connects NGOs, companies, individuals and other
              stakeholders through a technology platform designed to improve
              coordination and access to trusted information. As Navadrishti
              grows, we aim to extend our technology foundation and consulting
              expertise into other domains where better coordination, reliable
              information and effective execution can create meaningful impact.
            </p>
            <div className="about-doc-row">
              <a
                className="about-doc-btn about-doc-btn--logo"
                href="/docs/dpiit-certificate.pdf"
                download="Navadrishti-LLP-DPIIT-Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download DPIIT Certificate"
              >
                <img
                  src="/photos/dpiit.png"
                  alt=""
                  className="about-doc-logo about-doc-logo--dpiit"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
                <span>DPIIT Certificate</span>
              </a>
              <a
                className="about-doc-btn about-doc-btn--logo"
                href="/docs/startinup-certificate.pdf"
                download="Navadrishti-LLP-StartinUP-Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download StartinUP Certificate"
              >
                <img
                  src="/photos/startinup.png"
                  alt=""
                  className="about-doc-logo about-doc-logo--startinup"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
                <span>StartinUP Certificate</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about-split-media"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="about-video-box">
              <video
                key={ABOUT_VIDEOS[activeIndex]}
                ref={videoRef}
                className="about-video"
                muted
                playsInline
                autoPlay
                onEnded={handleEnded}
                aria-label="Navadrishti field and impact footage"
              >
                <source src={ABOUT_VIDEOS[activeIndex]} type="video/mp4" />
              </video>
              <div className="about-video-dots" aria-hidden="true">
                {ABOUT_VIDEOS.map((src, index) => (
                  <span
                    key={src}
                    className={`about-video-dot${index === activeIndex ? ' active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
