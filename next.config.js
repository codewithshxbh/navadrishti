/** @type {import('next').NextConfig} */

const nextConfig = {
  // Performance optimizations
  reactStrictMode: true,

  // Disable React DevTools in production
  compiler: {
    reactRemoveProperties:
      process.env.NODE_ENV === 'production'
        ? { properties: ['^data-testid$'] }
        : false,
  },

  experimental: {
    optimizePackageImports: ['framer-motion'],
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Bundle analyzer
  webpack: (config, { dev, isServer }) => {
    if (process.env.ANALYZE === 'true') {
      const withBundleAnalyzer = require('@next/bundle-analyzer')({
        enabled: true,
      });
      return withBundleAnalyzer.webpack(config, { dev, isServer });
    }

    return config;
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'Link',
            value:
              '<https://www.navadrishti.in/llms.txt>; rel="alternate"; type="text/plain"; title="LLM context", <https://www.navadrishti.in/llms-full.txt>; rel="alternate"; type="text/plain"; title="LLM full context", <https://www.navadrishti.in/ai.txt>; rel="alternate"; type="text/plain"; title="AI discovery"',
          },
          {
            key: 'X-AI-Discovery',
            value: 'https://www.navadrishti.in/llms.txt',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      // SEO preview image: metadata/crawler use only — not indexed as site content
      {
        source: '/seo/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/jpeg',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      // Certificate PDFs: download only, never inline preview in browser
      {
        source: '/docs/:path*.pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment',
          },
          {
            key: 'Cache-Control',
            value: 'private, no-store',
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Compression
  compress: true,
  poweredByHeader: false,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'navadrishti.in' }],
        destination: 'https://www.navadrishti.in/:path*',
        permanent: true,
      },
      {
        source: '/navadrishti',
        destination: '/GRAM',
        permanent: true,
      },
    ];
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    dirs: ['app', 'components', 'utils', 'hooks', 'types'],
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
