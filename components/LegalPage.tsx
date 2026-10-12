import Link from 'next/link';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  title: string;
  effectiveDate: string;
  sections: LegalSection[];
  brandLogo?: string;
  brandAlt?: string;
  brandName?: string;
  brandClassName?: string;
};

export default function LegalPage({
  title,
  effectiveDate,
  sections,
  brandLogo = '/photos/logo1.svg',
  brandAlt = 'Navadrishti LLP',
  brandName,
  brandClassName = '',
}: LegalPageProps) {
  return (
    <div className="legal-site">
      <header className="legal-header">
        <div className="container legal-header-inner">
          <Link
            className={`legal-brand ${brandClassName}`.trim()}
            href="/"
            aria-label={`${brandAlt} home`}
          >
            <img src={brandLogo} alt={brandAlt} className="legal-brand-logo" />
            {brandName && <span>{brandName}</span>}
          </Link>
          <Link className="legal-home-link" href="/">
            Back to website
          </Link>
        </div>
      </header>

      <main className="legal-main">
        <article className="legal-document">
          <header className="legal-document-header">
            <h1>{title}</h1>
            <p className="legal-date">
              Effective Date: <time dateTime="2026-10-12">{effectiveDate}</time>
            </p>
            <p className="legal-date">
              Last Updated: <time dateTime="2026-10-12">{effectiveDate}</time>
            </p>
          </header>

          {sections.map((section) => (
            <section className="legal-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}
        </article>
      </main>

      <Footer />
    </div>
  );
}
