import type { Metadata } from 'next';
import Link from 'next/link';
import HeroPhotoGrid from '@/components/HeroPhotoGrid';
import {
  PLATFORM_APP_URL,
  PLATFORM_FEATURES,
  PLATFORM_FUTURE_DOMAINS,
  PLATFORM_LEAD,
  PLATFORM_NAME,
  PLATFORM_PHASE_ONE,
  PLATFORM_PHASE_TWO,
  PLATFORM_STAKEHOLDERS,
  PLATFORM_STATUS,
  PLATFORM_TECH_DIRECTION,
  PLATFORM_WHO_FOR,
} from '@/constants';

export const metadata: Metadata = {
  title: {
    absolute: 'Navadrishti LLP | Consultation & Technology',
  },
  description: PLATFORM_LEAD,
  openGraph: {
    title: 'Navadrishti LLP | Consultation & Technology',
    description: PLATFORM_LEAD,
    url: 'https://navadrishti.in/navadrishti',
  },
};

export default function NavadrishtiPlatformPage() {
  return (
    <div className="platform-page">
      <header className="platform-page-nav">
        <div className="container platform-page-nav-inner">
          <Link href="/#products" className="platform-page-back">
            Back to Products
          </Link>
        </div>
      </header>

      <main>
        <section className="platform-page-hero">
          <HeroPhotoGrid />
          <div className="container platform-page-hero-content">
            <p className="platform-page-eyebrow">{PLATFORM_STATUS}</p>
            <h1>{PLATFORM_NAME}</h1>
            <p className="platform-page-lead">{PLATFORM_LEAD}</p>
            <ul className="product-stakeholders platform-page-tags">
              {PLATFORM_STAKEHOLDERS.map((stakeholder) => (
                <li key={stakeholder}>{stakeholder}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="platform-page-section">
          <div className="container">
            <h2>Who it is for</h2>
            <div className="platform-page-grid">
              {PLATFORM_WHO_FOR.map((item) => (
                <article key={item.title} className="platform-page-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="platform-page-section platform-page-section--muted">
          <div className="container">
            <h2>Special Features</h2>
            <ul className="platform-page-list">
              {PLATFORM_FEATURES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="platform-page-section">
          <div className="container">
            <h2>Product roadmap</h2>
            <div className="platform-page-phases">
              <article className="platform-page-card">
                <h3>Phase 1 — Currently Deployed</h3>
                <ul className="platform-page-list">
                  {PLATFORM_PHASE_ONE.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="platform-page-card">
                <h3>Phase 2 — Platform Expansion</h3>
                <ul className="platform-page-list">
                  {PLATFORM_PHASE_TWO.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="platform-page-section platform-page-section--muted">
          <div className="container">
            <h2>Technology direction</h2>
            <p className="platform-page-copy">{PLATFORM_TECH_DIRECTION}</p>
            <p className="tech-domains-label">Future Product Domains</p>
            <ul className="tech-domains platform-page-domains">
              {PLATFORM_FUTURE_DOMAINS.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="platform-page-cta">
          <div className="container">
            <h2>Ready to explore the platform?</h2>
            <p>
              Open the live application or reach out to discuss how Navadrishti
              can support your organisation.
            </p>
            <div className="product-actions">
              <a
                className="product-action product-action--primary"
                href={PLATFORM_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Platform
              </a>
              <Link
                className="product-action product-action--secondary"
                href="/#products"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
