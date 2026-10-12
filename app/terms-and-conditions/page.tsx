import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { SITE_EMAIL, SITE_NAME, SITE_URL } from '@/constants';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `Terms and Conditions for using the ${SITE_NAME} website.`,
  alternates: { canonical: `${SITE_URL}/terms-and-conditions` },
  robots: { index: true, follow: true },
};

const termsSections = [
  {
    title: '1. Introduction',
    content: (
      <>
        <p>
          Welcome to the website of Navadrishti LLP (&quot;Navadrishti&quot;,
          &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
        </p>
        <p>
          These Terms &amp; Conditions govern your access to and use of{' '}
          <a href={SITE_URL}>{SITE_URL}</a>, including the information and
          content made available through the website.
        </p>
        <p>
          By accessing or using this website, you agree to these Terms. If you
          do not agree, please discontinue use of the website.
        </p>
      </>
    ),
  },
  {
    title: '2. About Navadrishti',
    content: (
      <p>
        Navadrishti LLP is a technology and consulting company working across
        education, behavioural change, and technology. We develop technology
        solutions and provide consulting and related services intended to
        address real-world challenges. Information published on this website is
        provided to explain our organization, capabilities, products, and
        services. Specific projects or engagements may be governed by separate
        agreements.
      </p>
    ),
  },
  {
    title: '3. Permitted Use',
    content: (
      <>
        <p>
          You agree to use this website lawfully and responsibly. You must not:
        </p>
        <ul>
          <li>
            Use the website for unlawful, fraudulent, or misleading purposes.
          </li>
          <li>
            Attempt to gain unauthorized access to the website, its systems, or
            associated infrastructure.
          </li>
          <li>
            Interfere with the website&apos;s functionality, security, or
            availability.
          </li>
          <li>
            Introduce malicious code or engage in activities that could harm our
            systems or other users.
          </li>
          <li>
            Copy, reproduce, distribute, or commercially exploit website content
            without authorization, except where permitted by applicable law.
          </li>
        </ul>
        <p>
          We may take reasonable measures to restrict access where we identify
          misuse or security risks.
        </p>
      </>
    ),
  },
  {
    title: '4. Intellectual Property',
    content: (
      <p>
        Unless otherwise stated, the website&apos;s original content, branding,
        logos, graphics, designs, text, and other materials are owned by or
        licensed to Navadrishti LLP. You may view and use this content for
        personal, informational, or legitimate business evaluation purposes. You
        may not reproduce, modify, redistribute, or commercially use protected
        materials without prior permission, except as permitted by applicable
        law. Third-party names, trademarks, and materials remain the property of
        their respective owners.
      </p>
    ),
  },
  {
    title: '5. Products and Services',
    content: (
      <p>
        Descriptions of our consulting services, technology solutions, and
        products are provided for general informational purposes. The
        availability, functionality, features, pricing, and scope of any service
        or product may change. Specific deliverables, timelines,
        responsibilities, fees, and other commitments will be governed by the
        applicable proposal, statement of work, contract, or product-specific
        terms. Access to a separate platform, including GRAM, may be subject to
        additional terms and policies.
      </p>
    ),
  },
  {
    title: '6. No Professional or Outcome Guarantee',
    content: (
      <p>
        Information on this website does not constitute a guarantee of any
        particular technical, educational, social, commercial, or project
        outcome. Although we aim to keep published information accurate and
        current, we do not warrant that all content will always be complete,
        error-free, or up to date. Any advice or consulting deliverables
        provided under a separate engagement will be governed by that
        engagement&apos;s agreed scope and terms.
      </p>
    ),
  },
  {
    title: '7. Third-Party Links and Services',
    content: (
      <p>
        Our website may contain links to third-party websites, platforms, or
        services for convenience or reference. We do not control those external
        services and are not responsible for their content, availability,
        security, or independent practices. Accessing them is at your own
        discretion and may be subject to their respective terms and policies.
      </p>
    ),
  },
  {
    title: '8. Website Availability and Security',
    content: (
      <p>
        We aim to maintain a reliable and secure website but do not guarantee
        uninterrupted, error-free, or continuous availability. We may update,
        suspend, restrict, or discontinue any part of the website for
        maintenance, security, operational, or other legitimate reasons.
      </p>
    ),
  },
  {
    title: '9. Limitation of Liability',
    content: (
      <p>
        To the extent permitted by applicable law, Navadrishti LLP will not be
        liable for indirect, incidental, special, or consequential losses
        arising from the use of, or inability to use, this website. Nothing in
        these Terms excludes or limits liability where such exclusion or
        limitation is prohibited by applicable law. These Terms do not override
        any rights or remedies that cannot legally be excluded.
      </p>
    ),
  },
  {
    title: '10. Indemnity',
    content: (
      <p>
        To the extent permitted by applicable law, you agree to be responsible
        for losses or claims arising from your unlawful use of the website or
        your material violation of these Terms, including infringement of
        another party&apos;s rights. This provision does not apply to the extent
        that a claim results from our own acts or omissions for which liability
        cannot lawfully be excluded.
      </p>
    ),
  },
  {
    title: '11. Privacy',
    content: (
      <p>
        Your use of the website is also subject to our{' '}
        <a href="/privacy-policy">Privacy Policy</a>, which explains how
        personal information is handled.
      </p>
    ),
  },
  {
    title: '12. Changes to These Terms',
    content: (
      <p>
        We may revise these Terms when our website, services, or legal
        requirements change. Updated Terms will be published on this page with a
        revised date. Your continued use of the website after revised Terms
        become effective constitutes acceptance where permitted by applicable
        law. If a change requires separate consent, we will obtain it as
        required.
      </p>
    ),
  },
  {
    title: '13. Governing Law and Jurisdiction',
    content: (
      <p>
        These Terms are governed by the laws of India, subject to applicable
        legal requirements. Any dispute relating to these Terms shall be subject
        to the jurisdiction of the competent courts at [Insert appropriate city
        and jurisdiction after legal review], unless applicable law requires
        otherwise.
      </p>
    ),
  },
  {
    title: '14. Contact Information',
    content: (
      <>
        <p>For questions concerning these Terms, contact:</p>
        <address>
          <strong>{SITE_NAME}</strong>
          <br />
          Email: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
          <br />
          Website: <a href={SITE_URL}>{SITE_URL}</a>
        </address>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      effectiveDate="12 October 2026"
      sections={termsSections}
    />
  );
}
