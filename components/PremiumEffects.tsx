'use client';

import { useEffect } from 'react';

export default function PremiumEffects() {
  useEffect(() => {
    // Keyboard Shortcuts
    const shortcuts: { [key: string]: () => void } = {
      'ctrl+k': () => {
        document
          .querySelector('#contact')
          ?.scrollIntoView({ behavior: 'smooth' });
      },
      'ctrl+h': () => {
        document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
      },
    };

    const handleKeydown = (e: KeyboardEvent) => {
      const key = (e.ctrlKey ? 'ctrl+' : '') + e.key.toLowerCase();
      if (shortcuts[key]) {
        e.preventDefault();
        shortcuts[key]();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    // Viewport Height Fix for Mobile
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);

    // Lazy Background Observer
    const bgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const bgUrl = element.getAttribute('data-bg');
          if (bgUrl) {
            element.style.backgroundImage = `url(${bgUrl})`;
          }
          bgObserver.unobserve(element);
        }
      });
    });

    document.querySelectorAll('[data-bg]').forEach((el) => {
      bgObserver.observe(el);
    });

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('resize', setVH);
    };
  }, []);

  return null;
}
