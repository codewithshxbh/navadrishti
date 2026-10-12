import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { gramTermsSections } from '@/components/GramLegalContent';

export const metadata: Metadata = {
  title: 'GRAM Terms & Conditions',
  description:
    'Terms and Conditions for using the GRAM social-impact platform.',
  alternates: {
    canonical: 'https://www.navadrishti.in/GRAM/terms-and-conditions',
  },
  robots: { index: true, follow: true },
};

export default function GramTermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      effectiveDate="12 October 2026"
      sections={gramTermsSections}
      brandLogo="/photos/Gram.svg"
      brandAlt="GRAM"
      brandName="GRAM"
      brandClassName="legal-brand--gram"
    />
  );
}
