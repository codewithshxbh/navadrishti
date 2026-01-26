export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-photo-grid">
        <div className="photo-grid-item" style={{gridArea: '1 / 1 / 2 / 2'}}>
          <img src="/photos/pic 1.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '1 / 2 / 2 / 3'}}>
          <img src="/photos/pic 2.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item photo-spotlight" style={{gridArea: '1 / 3 / 3 / 6'}}>
          <img src="/photos/pic 3.jpeg" alt="Spotlight" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '2 / 1 / 3 / 2'}}>
          <img src="/photos/pic 4.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '2 / 2 / 3 / 3'}}>
          <img src="/photos/pic 5.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '3 / 1 / 4 / 2'}}>
          <img src="/photos/pic 6.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '3 / 2 / 4 / 3'}}>
          <img src="/photos/pic 7.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '3 / 3 / 4 / 4'}}>
          <img src="/photos/pic 8.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '3 / 4 / 4 / 5'}}>
          <img src="/photos/pic 9.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '3 / 5 / 4 / 6'}}>
          <img src="/photos/pic 10.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '4 / 1 / 5 / 2'}}>
          <img src="/photos/pic 11.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '4 / 2 / 5 / 3'}}>
          <img src="/photos/pic 12.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '4 / 3 / 5 / 4'}}>
          <img src="/photos/pic 13.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '4 / 4 / 5 / 5'}}>
          <img src="/photos/pic 14.jpeg" alt="Impact" />
        </div>
        <div className="photo-grid-item" style={{gridArea: '4 / 5 / 5 / 6'}}>
          <img src="/photos/pic 15.jpeg" alt="Impact" />
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-gradient">The Operating System</span><br />
            for Social Impact
          </h1>
          <p className="hero-subtitle">
            Replace scattered Excel sheets and manual processes with one unified platform for NGOs, companies, and individuals to execute and measure social impact at scale.
          </p>
          <div className="hero-cta">
            <a href="#platform" className="btn-primary">Explore Platform</a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
