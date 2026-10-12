import type { ReactNode } from 'react';
import { APP_URL, SITE_EMAIL, SITE_URL } from '@/constants';

type LegalSection = {
  title: string;
  content: ReactNode;
};

export const gramPrivacySections: LegalSection[] = [
  {
    title: '1. Introduction',
    content: (
      <p>
        GRAM is a social-impact platform operated by Navadrishti LLP
        (&quot;Navadrishti&quot;, &quot;we&quot;, &quot;our&quot;, or
        &quot;us&quot;). This Privacy Policy explains how information is handled
        when you visit the GRAM website, use the platform, or contact us about
        GRAM.
      </p>
    ),
  },
  {
    title: '2. Information We Collect',
    content: (
      <>
        <p>Depending on how you use GRAM, we may collect:</p>
        <ul>
          <li>Account, contact, organization, and profile information.</li>
          <li>
            Messages, enquiries, project, donation, and collaboration data.
          </li>
          <li>
            Technical information such as browser, device, IP address, access
            timestamps, and diagnostic logs.
          </li>
          <li>
            Field evidence, project updates, media, locations, and other
            information voluntarily submitted through platform workflows.
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
      <ul>
        <li>Provide, operate, secure, and improve GRAM.</li>
        <li>Support NGO, company, volunteer, donor, and project workflows.</li>
        <li>Communicate with users and respond to enquiries or requests.</li>
        <li>
          Maintain records, audit trails, evidence, and platform integrity.
        </li>
        <li>
          Prevent fraud, misuse, unauthorized access, and security incidents.
        </li>
        <li>
          Comply with applicable legal obligations and protect legitimate
          interests.
        </li>
      </ul>
    ),
  },
  {
    title: '4. Sharing and Security',
    content: (
      <p>
        We do not sell personal information as a business practice. Information
        may be shared with service providers, project participants, authorized
        partners, or authorities where necessary for platform operations, lawful
        requests, safety, or delivery of a requested service. We use reasonable
        technical and organizational safeguards, but no digital service or
        transmission method can be guaranteed completely secure.
      </p>
    ),
  },
  {
    title: '5. Retention, Cookies, and Third-Party Services',
    content: (
      <p>
        Information is retained only as long as reasonably necessary for its
        intended purpose, legal obligations, and legitimate business needs. GRAM
        or its service providers may use cookies and similar technologies for
        functionality, security, analytics, or preferences. Third-party services
        and links operate under their own policies.
      </p>
    ),
  },
  {
    title: '6. Your Rights',
    content: (
      <p>
        Subject to applicable law, you may request access to, correction of, or
        deletion of personal information, withdraw consent where applicable, or
        raise concerns about its handling. We may need to verify your identity
        before responding.
      </p>
    ),
  },
  {
    title: '7. Contact',
    content: (
      <address>
        <strong>GRAM by Navadrishti LLP</strong>
        <br />
        Email: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
        <br />
        GRAM: <a href={APP_URL}>{APP_URL}</a>
        <br />
        Website: <a href={SITE_URL}>{SITE_URL}</a>
      </address>
    ),
  },
];

export const gramTermsSections: LegalSection[] = [
  {
    title: '1. Introduction',
    content: (
      <p>
        These Terms &amp; Conditions govern access to and use of GRAM, a
        social-impact platform operated by Navadrishti LLP. By accessing or
        using GRAM, you agree to these Terms. If you do not agree, discontinue
        use of the platform.
      </p>
    ),
  },
  {
    title: '2. Permitted Use',
    content: (
      <>
        <p>You must use GRAM lawfully and responsibly. You must not:</p>
        <ul>
          <li>
            Use GRAM for unlawful, fraudulent, misleading, or harmful purposes.
          </li>
          <li>
            Attempt unauthorized access to accounts, systems, or infrastructure.
          </li>
          <li>
            Interfere with platform functionality, security, or availability.
          </li>
          <li>Upload malicious code or content that harms users or systems.</li>
          <li>
            Submit information or materials that infringe another party&apos;s
            rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Accounts and Submitted Content',
    content: (
      <p>
        You are responsible for keeping account credentials confidential and for
        information submitted through your account. You should provide accurate
        information and must have the authority to submit content for an
        organization or project. You retain applicable rights in your content
        while granting GRAM the permissions reasonably necessary to operate the
        requested platform features.
      </p>
    ),
  },
  {
    title: '4. Products, Services, and Verification',
    content: (
      <p>
        GRAM features, workflows, availability, and verification processes may
        change. Platform information, badges, project records, and evidence are
        provided for their stated operational purposes and do not guarantee any
        particular social, commercial, funding, compliance, or project outcome.
        Specific engagements may be governed by separate agreements.
      </p>
    ),
  },
  {
    title: '5. Intellectual Property',
    content: (
      <p>
        GRAM branding, software, designs, text, graphics, and original platform
        materials are owned by or licensed to Navadrishti LLP. You may not
        reproduce, modify, redistribute, or commercially exploit protected
        materials without authorization, except as permitted by applicable law.
      </p>
    ),
  },
  {
    title: '6. Availability, Security, and Liability',
    content: (
      <p>
        We aim to maintain a reliable and secure platform but do not guarantee
        uninterrupted or error-free availability. We may update, suspend,
        restrict, or discontinue features for legitimate operational, security,
        or maintenance reasons. To the extent permitted by law, Navadrishti will
        not be liable for indirect, incidental, special, or consequential losses
        arising from platform use.
      </p>
    ),
  },
  {
    title: '7. Privacy and Changes',
    content: (
      <p>
        Use of GRAM is also subject to the{' '}
        <a href="/GRAM/privacy-policy">GRAM Privacy Policy</a>. We may revise
        these Terms when the platform, services, or legal requirements change.
        Updated Terms will be published with a revised date.
      </p>
    ),
  },
  {
    title: '8. Governing Law and Contact',
    content: (
      <>
        <p>
          These Terms are governed by the laws of India, subject to applicable
          legal requirements.
        </p>
        <address>
          <strong>GRAM by Navadrishti LLP</strong>
          <br />
          Email: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
          <br />
          GRAM: <a href={APP_URL}>{APP_URL}</a>
          <br />
          Website: <a href={SITE_URL}>{SITE_URL}</a>
        </address>
      </>
    ),
  },
];
