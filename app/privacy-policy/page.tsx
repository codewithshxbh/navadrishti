import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { SITE_EMAIL, SITE_NAME, SITE_URL } from '@/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE_NAME}.`,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
};

const privacySections = [
  {
    title: '1. Introduction',
    content: (
      <p>
        Navadrishti LLP (&quot;Navadrishti&quot;, &quot;we&quot;,
        &quot;our&quot;, or &quot;us&quot;) respects your privacy and is
        committed to handling personal information responsibly. This Privacy
        Policy explains how we collect, use, store, and protect information when
        you visit our website, contact us, or interact with our services.
      </p>
    ),
  },
  {
    title: '2. Information We Collect',
    content: (
      <>
        <p>
          Depending on how you interact with us, we may collect the following
          categories of information:
        </p>
        <ul>
          <li>
            <strong>Contact information:</strong> Name, email address, phone
            number, organization name, and other details you provide when
            contacting us.
          </li>
          <li>
            <strong>Communication data:</strong> Messages, enquiries, feedback,
            and correspondence sent to us.
          </li>
          <li>
            <strong>Technical information:</strong> Browser type, device
            information, IP address, access timestamps, and diagnostic logs,
            where collected by our hosting or security systems.
          </li>
          <li>
            <strong>Service-related information:</strong> Information you
            voluntarily provide when requesting consulting, technology
            development, collaboration, or other services.
          </li>
          <li>
            <strong>Platform information:</strong> If you use a Navadrishti
            product such as GRAM, additional information may be collected as
            described in that product&apos;s applicable privacy notice.
          </li>
        </ul>
        <p>
          We aim to collect only information reasonably necessary for the
          relevant purpose.
        </p>
      </>
    ),
  },
  {
    title: '3. How We Use Information',
    content: (
      <>
        <p>We may use personal information to:</p>
        <ul>
          <li>Respond to enquiries and communicate with you.</li>
          <li>Provide and manage our consulting and technology services.</li>
          <li>
            Develop, maintain, secure, and improve our website and products.
          </li>
          <li>
            Coordinate projects and business or organizational relationships.
          </li>
          <li>
            Prevent fraud, misuse, unauthorized access, and security incidents.
          </li>
          <li>
            Comply with applicable legal obligations and protect our legitimate
            interests.
          </li>
        </ul>
        <p>
          We will not use information for unrelated purposes where consent or
          another lawful basis is required.
        </p>
      </>
    ),
  },
  {
    title: '4. Cookies and Similar Technologies',
    content: (
      <p>
        Our website or service providers may use cookies or similar technologies
        for essential functionality, security, analytics, or user preferences,
        where applicable. You can manage cookies through your browser settings.
        Where required, we will seek consent before using non-essential cookies
        or similar technologies.
      </p>
    ),
  },
  {
    title: '5. Sharing of Information',
    content: (
      <>
        <p>We do not sell personal information as a business practice.</p>
        <p>We may share information when necessary with:</p>
        <ul>
          <li>
            <strong>Service providers:</strong> Hosting, infrastructure,
            communications, security, analytics, or other providers supporting
            our services.
          </li>
          <li>
            <strong>Project partners:</strong> Where necessary to deliver a
            service or collaboration and where there is an appropriate basis to
            do so.
          </li>
          <li>
            <strong>Authorities or legal parties:</strong> Where required by
            law, valid legal process, or to protect rights and safety.
          </li>
          <li>
            <strong>Business successors:</strong> In connection with a lawful
            merger, restructuring, or transfer of business, subject to
            applicable requirements.
          </li>
        </ul>
        <p>
          We seek to ensure that relevant third parties handle information
          appropriately.
        </p>
      </>
    ),
  },
  {
    title: '6. Data Storage and Security',
    content: (
      <p>
        We use reasonable technical and organizational measures designed to
        protect information against unauthorized access, alteration, disclosure,
        loss, or misuse. No website, digital service, or transmission method can
        be guaranteed completely secure. We therefore cannot guarantee absolute
        security. Information is retained only for as long as reasonably
        necessary for its intended purpose, applicable contractual requirements,
        legal obligations, and legitimate business needs.
      </p>
    ),
  },
  {
    title: '7. Third-Party Services and Links',
    content: (
      <p>
        Our website may link to third-party websites or services. Those services
        operate under their own privacy policies and terms. We are not
        responsible for their independent privacy practices. Where third-party
        tools process information on our behalf, their use is subject to the
        applicable arrangements and requirements.
      </p>
    ),
  },
  {
    title: '8. Your Privacy Rights',
    content: (
      <p>
        Subject to applicable law, you may have the right to request access to,
        correction of, or deletion of your personal information, withdraw
        consent where processing relies on consent, or raise concerns about how
        your information is handled. To submit a privacy-related request,
        contact us using the details below. We may need to verify your identity
        before responding.
      </p>
    ),
  },
  {
    title: "9. Children's Privacy",
    content: (
      <p>
        Our website is not specifically directed at children. Where a service is
        intended for children or involves children&apos;s personal information,
        additional safeguards and applicable consent requirements must be
        addressed for that service.
      </p>
    ),
  },
  {
    title: '10. Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy when our services, practices, or legal
        obligations change. The latest version will be published on this page
        with an updated revision date.
      </p>
    ),
  },
  {
    title: '11. Contact Us',
    content: (
      <>
        <p>For privacy questions or requests, contact:</p>
        <address>
          <strong>{SITE_NAME}</strong>
          <br />
          Email: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
          <br />
          Website: <a href={SITE_URL}>{SITE_URL}</a>
        </address>
        <p>
          This Privacy Policy should be read alongside any additional privacy
          notice applicable to a specific Navadrishti product or service.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="12 October 2026"
      sections={privacySections}
    />
  );
}
