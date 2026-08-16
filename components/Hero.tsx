'use client';

const GRID_ITEMS = [
  { src: '/photos/pic 1.jpeg', area: '1 / 1 / 2 / 2' },
  { src: '/photos/pic 2.jpeg', area: '1 / 2 / 2 / 3' },
  {
    src: '/photos/pic 3.jpeg',
    area: '1 / 3 / 3 / 6',
    spotlight: true,
    alt: 'Spotlight',
  },
  { src: '/photos/pic 4.jpeg', area: '2 / 1 / 3 / 2' },
  { src: '/photos/pic 5.jpeg', area: '2 / 2 / 3 / 3' },
  { src: '/photos/pic 6.jpeg', area: '3 / 1 / 4 / 2' },
  { src: '/photos/pic 7.jpeg', area: '3 / 2 / 4 / 3' },
  { src: '/photos/pic 8.jpeg', area: '3 / 3 / 4 / 4' },
  { src: '/photos/pic 9.jpeg', area: '3 / 4 / 4 / 5' },
  { src: '/photos/pic 10.jpeg', area: '3 / 5 / 4 / 6' },
  { src: '/photos/pic 11.jpeg', area: '4 / 1 / 5 / 2' },
  { src: '/photos/pic 12.jpeg', area: '4 / 2 / 5 / 3' },
  { src: '/photos/pic 13.jpeg', area: '4 / 3 / 5 / 4' },
  { src: '/photos/pic 14.jpeg', area: '4 / 4 / 5 / 5' },
  { src: '/photos/pic 15.jpeg', area: '4 / 5 / 5 / 6' },
] as const;

export function HeroPhotoGrid() {
  const preventDrag = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="hero-photo-grid" aria-hidden="true">
      {GRID_ITEMS.map((item) => (
        <div
          key={item.src}
          className={`photo-grid-item${'spotlight' in item && item.spotlight ? ' photo-spotlight' : ''}`}
          style={{ gridArea: item.area }}
        >
          <img
            src={item.src}
            alt={'alt' in item && item.alt ? item.alt : ''}
            loading="eager"
            draggable={false}
            onDragStart={preventDrag}
          />
        </div>
      ))}
    </div>
  );
}

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
            Where technology, expertise and purpose come together to solve what
            matters.
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
