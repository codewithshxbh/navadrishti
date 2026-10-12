import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { gramPrivacySections } from '@/components/GramLegalContent';

export const metadata: Metadata = {
  title: 'GRAM Privacy Policy',
  description: 'Privacy Policy for the GRAM social-impact platform.',
  alternates: { canonical: 'https://www.navadrishti.in/GRAM/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function GramPrivacyPolicyPage() {
  return (
    <LegalPage
      title="GRAM Privacy Policy"
      effectiveDate="12 October 2026"
      sections={gramPrivacySections}
      brandLogo="/photos/Gram.svg"
      brandAlt="GRAM"
      brandName="GRAM"
      brandClassName="legal-brand--gram"
    />
  );
}
