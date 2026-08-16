'use client';

import HeroPhotoGrid from '@/components/HeroPhotoGrid';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <HeroPhotoGrid />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title" style={{ color: '#ffffff' }}>
            <span className="text-gradient">
              Technology for Better Operations.
            </span>
            <br />
            Solutions for Greater Impact.
          </h1>
          <p
            className="hero-subtitle"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            Building technology and practical solutions for a more connected,
            efficient and impactful world.
          </p>
          <div className="hero-cta">
            <a href="#products" className="btn-primary">
              Our Products
            </a>
            <a href="#services" className="btn-secondary">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
