import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroPhotoGrid } from '@/components/Hero';
import { GramBrand } from '@/components/Platform';
import ScrollToTop from '@/components/ScrollToTop';
import {
  APP_URL,
  GRAM_BRAND_LINE,
  GRAM_PAGE_URL,
  PLATFORM_APP_URL,
  SEO_GRAM_DESCRIPTION,
  SEO_GRAM_TITLE,
  SITE_NAME,
  SITE_URL,
} from '@/constants';
import {
  PRODUCT_ARCHITECTURE,
  PRODUCT_CTA,
  PRODUCT_EVIDENCE,
  PRODUCT_HERO,
  PRODUCT_HOW_IT_WORKS,
  PRODUCT_OFFLINE,
  PRODUCT_PHASES,
  PRODUCT_PLATFORM,
  PRODUCT_PROBLEM,
  PRODUCT_STAKEHOLDERS,
} from '@/constants';

export const metadata: Metadata = {
  title: {
    absolute: SEO_GRAM_TITLE,
  },
  description: SEO_GRAM_DESCRIPTION,
  keywords: [
    'GRAM',
    'Navadrishti GRAM',
    'GRAM powered by Navadrishti LLP',
    'app.navadrishti.in',
    'CSR platform India',
    'NGO platform India',
    'CA verified NGO India',
    'NGO directory India',
    'social impact platform',
    'field evidence',
    'offline field capture',
    'NGO verification',
    'CSR collaboration',
    'volunteer platform India',
    'FCRA 12A 80G NGO',
  ],
  alternates: {
    canonical: GRAM_PAGE_URL,
  },
  openGraph: {
    title: SEO_GRAM_TITLE,
    description: SEO_GRAM_DESCRIPTION,
    url: GRAM_PAGE_URL,
    type: 'website',
    siteName: SITE_NAME,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'primary-entity': SITE_NAME,
    'primary-product': GRAM_BRAND_LINE,
    'primary-url': SITE_URL,
    'product-url': GRAM_PAGE_URL,
    'app-url': APP_URL,
    'llms-context': `${SITE_URL}/llms.txt`,
    'llms-context-full': `${SITE_URL}/llms-full.txt`,
  },
};

export default function NavadrishtiPlatformPage() {
  const gramStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: SITE_NAME,
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'GRAM',
            item: GRAM_PAGE_URL,
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${GRAM_PAGE_URL}/#webpage`,
        url: GRAM_PAGE_URL,
        name: SEO_GRAM_TITLE,
        description: SEO_GRAM_DESCRIPTION,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#gram` },
        significantLink: APP_URL,
      },
    ],
  };

  return (
    <div className="platform-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gramStructuredData) }}
      />
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
            <p className="platform-page-brand-mark">
              <GramBrand />
            </p>
            <h1>{PRODUCT_HERO.headline}</h1>
            <p className="platform-page-lead">{PRODUCT_HERO.lead}</p>
            <div className="product-actions platform-page-hero-actions">
              <a
                className="product-action product-action--secondary"
                href={PRODUCT_HERO.primaryCta.href}
              >
                {PRODUCT_HERO.primaryCta.label}
              </a>
              <a
                className="product-action product-action--primary"
                href={PRODUCT_HERO.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {PRODUCT_HERO.secondaryCta.label}
              </a>
            </div>
            <p className="platform-page-support">{PRODUCT_HERO.supportLine}</p>
          </div>
        </section>

        <section className="platform-page-section" id="problem">
          <div className="container">
            <h2>{PRODUCT_PROBLEM.title}</h2>
            {PRODUCT_PROBLEM.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="platform-page-copy">
                {paragraph}
              </p>
            ))}
            <ul
              className="platform-page-chain"
              aria-label="Impact lifecycle gaps"
            >
              {PRODUCT_PROBLEM.chain.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="platform-page-closing platform-page-closing--accent">
              {PRODUCT_PROBLEM.closing}
            </p>
          </div>
        </section>

        <section className="platform-page-section platform-page-section--muted">
          <div className="container">
            <h2>{PRODUCT_PLATFORM.title}</h2>
            <p className="platform-page-copy">{PRODUCT_PLATFORM.lead}</p>
            <div className="platform-page-pillars">
              {PRODUCT_PLATFORM.pillars.map((pillar) => (
                <article key={pillar.title} className="platform-page-pillar">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="platform-page-section">
          <div className="container">
            <h2>{PRODUCT_STAKEHOLDERS.title}</h2>
            <div className="platform-page-grid">
              {PRODUCT_STAKEHOLDERS.items.map((item) => (
                <article key={item.title} className="platform-page-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="platform-page-section platform-page-section--muted"
          id="how-it-works"
        >
          <div className="container">
            <h2>{PRODUCT_HOW_IT_WORKS.title}</h2>
            <ol className="platform-page-steps">
              {PRODUCT_HOW_IT_WORKS.steps.map((step) => (
                <li key={step.number} className="platform-page-step">
                  <span className="platform-page-step-number">
                    {step.number}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="platform-page-section" id="evidence">
          <div className="container">
            <p className="platform-page-section-eyebrow">
              {PRODUCT_EVIDENCE.eyebrow}
            </p>
            <h2>{PRODUCT_EVIDENCE.title}</h2>
            <p className="platform-page-closing platform-page-closing--accent">
              {PRODUCT_EVIDENCE.lead}
            </p>
            <h3 className="platform-page-subhead">
              {PRODUCT_EVIDENCE.heading}
            </h3>
            <p className="platform-page-copy">{PRODUCT_EVIDENCE.description}</p>
            <ul
              className="platform-page-context"
              aria-label="Evidence context fields"
            >
              {PRODUCT_EVIDENCE.contextFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
            <h3 className="platform-page-subhead">Evidence pipeline</h3>
            <ol className="platform-page-pipeline">
              {PRODUCT_EVIDENCE.pipeline.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="platform-page-note">
              {PRODUCT_EVIDENCE.integrityNote}
            </p>
          </div>
        </section>

        <section
          className="platform-page-section platform-page-section--muted"
          id="offline"
        >
          <div className="container">
            <p className="platform-page-section-eyebrow">
              {PRODUCT_OFFLINE.eyebrow}
            </p>
            <h2>{PRODUCT_OFFLINE.title}</h2>
            <p className="platform-page-copy">{PRODUCT_OFFLINE.lead}</p>
            <ol className="platform-page-pipeline">
              {PRODUCT_OFFLINE.steps.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="platform-page-note">{PRODUCT_OFFLINE.note}</p>
          </div>
        </section>

        <section className="platform-page-section" id="architecture">
          <div className="container">
            <h2>{PRODUCT_ARCHITECTURE.title}</h2>
            <p className="platform-page-subtitle">
              {PRODUCT_ARCHITECTURE.subtitle}
            </p>
            <p className="platform-page-copy">{PRODUCT_ARCHITECTURE.lead}</p>

            <div className="arch-layers">
              {PRODUCT_ARCHITECTURE.layers.map((layer) => (
                <article key={layer.number} className="arch-layer">
                  <span className="arch-layer-number">{layer.number}</span>
                  <div>
                    <h3>{layer.title}</h3>
                    <p>{layer.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <h3 className="platform-page-subhead">
              {PRODUCT_ARCHITECTURE.flowTitle}
            </h3>
            <ol className="arch-flow">
              {PRODUCT_ARCHITECTURE.flow.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.detail}</span>
                </li>
              ))}
            </ol>

            <p className="platform-page-closing">
              {PRODUCT_ARCHITECTURE.principle}
            </p>
          </div>
        </section>

        <section
          className="platform-page-section platform-page-section--muted"
          id="roadmap"
        >
          <div className="container">
            <h2>{PRODUCT_PHASES.title}</h2>
            <div className="platform-page-phases">
              <article className="platform-page-card">
                <h3>{PRODUCT_PHASES.phaseOne.title}</h3>
                <ul className="platform-page-list">
                  {PRODUCT_PHASES.phaseOne.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="platform-page-card">
                <h3>{PRODUCT_PHASES.phaseTwo.title}</h3>
                <ul className="platform-page-list">
                  {PRODUCT_PHASES.phaseTwo.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="platform-page-cta">
          <div className="container">
            <h2>{PRODUCT_CTA.title}</h2>
            <p>{PRODUCT_CTA.lead}</p>
            <div className="product-actions">
              <a
                className="product-action product-action--primary"
                href={PLATFORM_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {PRODUCT_CTA.primaryLabel}
              </a>
              <Link
                className="product-action product-action--secondary"
                href="/#products"
              >
                {PRODUCT_CTA.secondaryLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}
