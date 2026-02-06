'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll to detect when past hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero') as HTMLElement;
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setScrolled(window.scrollY > heroHeight * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    // Prevent touch scrolling
    const preventScroll = (e: TouchEvent) => {
      e.preventDefault();
    };
    document.body.addEventListener('touchmove', preventScroll, {
      passive: false,
    });

    return () => {
      document.body.removeEventListener('touchmove', preventScroll);
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [mobileMenuOpen]);

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    // Close menu and restore scroll position first
    setMobileMenuOpen(false);

    // Wait for menu close animation and body position restore
    setTimeout(() => {
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

        requestAnimationFrame(animation);
      }
    }, 100);
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <a
            href="#hero"
            className="logo"
            onClick={(e) => scrollToSection(e, '#hero')}
          >
            <img
              src={scrolled ? '/photos/logo1.svg' : '/photos/logo.svg'}
              alt="Navadrishti"
              className="logo-img logo-desktop"
              loading="eager"
            />
            <img
              src={scrolled ? '/photos/logo1.svg' : '/photos/logo.svg'}
              alt="Navadrishti"
              className="logo-img logo-mobile"
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
                href="#video-testimonials"
                onClick={(e) => scrollToSection(e, '#video-testimonials')}
              >
                Why We Do This
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
