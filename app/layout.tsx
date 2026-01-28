import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://navadrishti.in'),
  title: {
    template: '%s | Navadrishti',
    default: 'Navadrishti | Social Impact Operations Platform',
  },
  description:
    'AI-powered social impact operations platform connecting NGOs, CSR teams, and individuals. Transparent tracking, blockchain audits, and measurable impact for ₹50,000+ Crore CSR ecosystem.',
  keywords: [
    'CSR platform',
    'NGO management',
    'social impact',
    'blockchain audit',
    'CSR compliance',
    'India NGO',
    'corporate social responsibility',
    'impact measurement',
    'rural development',
    'transparency',
  ],
  authors: [
    { name: 'Aditya Garg', url: 'https://www.linkedin.com/in/adityagarg2004/' },
    {
      name: 'Shubhendu Chakrabarti',
      url: 'https://www.linkedin.com/in/shubhenduchakrabarti/',
    },
    {
      name: 'Vidhan Singh Rathore',
      url: 'https://www.linkedin.com/in/vidhan-ai/',
    },
  ],
  creator: 'Navadrishti Team',
  publisher: 'Navadrishti',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://navadrishti.in',
    title: 'Navadrishti | Operating System for Social Impact in India',
    description:
      "AI-powered platform solving critical gaps in India's ₹50,000+ Crore CSR ecosystem with transparent tracking and measurable impact.",
    siteName: 'Navadrishti',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Navadrishti - Operating System for Social Impact in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navadrishti | Operating System for Social Impact in India',
    description:
      "AI-powered platform solving critical gaps in India's ₹50,000+ Crore CSR ecosystem.",
    images: ['/og-image.jpg'],
    creator: '@navadrishti',
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
  verification: {
    google: 'gpXj_x31x2m48aHEkqZPfU5C4FYdOPT0p8DuazmFuxI',
    // Add other verification codes as needed
  },
  alternates: {
    canonical: 'https://navadrishti.in',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ff8c42' },
    { media: '(prefers-color-scheme: dark)', color: '#ff8c42' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/small-logo.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff8c42" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//linkedin.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Navadrishti',
              description: 'AI-powered social impact operations platform',
              url: 'https://navadrishti.com',
              logo: 'https://navadrishti.com/small-logo.svg',
              sameAs: [
                'https://www.linkedin.com/company/navadrishti',
                // Add other social media URLs
              ],
              founder: [
                {
                  '@type': 'Person',
                  name: 'Aditya Garg',
                  jobTitle: 'Founder & CEO',
                  sameAs: 'https://www.linkedin.com/in/adityagarg2004/',
                },
                {
                  '@type': 'Person',
                  name: 'Shubhendu Chakrabarti',
                  jobTitle: 'Co-Founder & CTO',
                  sameAs: 'https://www.linkedin.com/in/shubhenduchakrabarti/',
                },
                {
                  '@type': 'Person',
                  name: 'Vidhan Singh Rathore',
                  jobTitle: 'Co-Founder & COO',
                  sameAs: 'https://www.linkedin.com/in/vidhan-ai/',
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {process.env.NODE_ENV === 'production' && (
          <Script id="disable-devtools" strategy="afterInteractive">
            {`
              if (typeof window !== 'undefined' && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
                window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
                window.__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE = function () {};
                window.__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberRoot = function () {};
                window.__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberUnmount = function () {};
              }

              // Disable right-click context menu
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
              }, false);

              // Block common DevTools keyboard shortcuts
              document.addEventListener('keydown', function(e) {
                // F12
                if (e.keyCode === 123) {
                  e.preventDefault();
                  return false;
                }
                // Ctrl+Shift+I (Inspect)
                if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                  e.preventDefault();
                  return false;
                }
                // Ctrl+Shift+C (Inspect Element)
                if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
                  e.preventDefault();
                  return false;
                }
                // Ctrl+Shift+J (Console)
                if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                  e.preventDefault();
                  return false;
                }
                // Ctrl+U (View Source)
                if (e.ctrlKey && e.keyCode === 85) {
                  e.preventDefault();
                  return false;
                }
              }, false);
            `}
          </Script>
        )}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white focus:rounded-md focus:text-sm font-medium"
        >
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
