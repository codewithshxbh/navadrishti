'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    // Close menu immediately for better perceived performance
    setMobileMenuOpen(false);

    const element = document.querySelector(id);
    if (element) {
      const navHeight = 80;
      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;

      // Much shorter duration for mobile to feel instant
      const isMobile = window.innerWidth <= 768;
      const duration = isMobile ? 400 : 1200;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      // Start immediately on mobile
      if (isMobile) {
        requestAnimationFrame(animation);
      } else {
        // Delay scroll start slightly on desktop
        requestAnimationFrame(() => {
          requestAnimationFrame(animation);
        });
      }
    }
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <a
            href="#hero"
            className="logo"
            onClick={(e) => scrollToSection(e, '#hero')}
          >
            <img
              src="/photos/logo.svg"
              alt="Navadrishti"
              className="logo-img"
              loading="eager"
            />
          </a>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>
                About
              </a>
            </li>
            <li>
              <a
                href="#platform"
                onClick={(e) => scrollToSection(e, '#platform')}
              >
                Platform
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={(e) => scrollToSection(e, '#features')}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={(e) => scrollToSection(e, '#testimonials')}
              >
                Our Views
              </a>
            </li>
            <li>
              <a
                href="#video-testimonials"
                onClick={(e) => scrollToSection(e, '#video-testimonials')}
              >
                Inspiration
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')}>
                FAQ
              </a>
            </li>
          </ul>
          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
