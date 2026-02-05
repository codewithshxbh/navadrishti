'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();

    // If mobile, don't show loader at all
    if (window.innerWidth <= 768) {
      setIsVisible(false);
      return;
    }

    // Start fade out after 1 second (faster)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    // Remove component after fade completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  const letters = ['N', 'a', 'v', 'a', 'd', 'r', 'i', 's', 'h', 't', 'i'];

  return (
    <div
      className={`page-loader ${fadeOut ? 'fade-out' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 99999,
        backgroundColor: '#0a0a0f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="loader-content-horizontal">
        <div className="loader-logo">
          <img
            src="/small-logo.svg"
            alt="Navadrishti"
            className="loader-logo-img"
            loading="eager"
            onError={(e) => {
              console.error('Logo failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div
          className="loader-text"
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#ffffff',
            display: 'flex',
            opacity: 1,
          }}
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              className="loader-letter"
              style={{
                animationDelay: `${0.2 + index * 0.08}s`,
                display: 'inline-block',
                color: '#ffffff',
                fontSize: '3rem',
                fontWeight: 'bold',
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
