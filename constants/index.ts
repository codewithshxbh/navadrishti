/**
 * Application-wide constants
 */

// Animation durations (in milliseconds)
export const ANIMATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  TESTIMONIAL_AUTO_PLAY: 12000,
} as const;

// Breakpoints (in pixels)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
} as const;

// Media queries
export const MEDIA_QUERIES = {
  MOBILE: `(max-width: ${BREAKPOINTS.MD - 1}px)`,
  TABLET: `(max-width: ${BREAKPOINTS.LG - 1}px)`,
  DESKTOP: `(min-width: ${BREAKPOINTS.LG}px)`,
  REDUCED_MOTION: '(prefers-reduced-motion: reduce)',
} as const;

// Company information
export const COMPANY = {
  NAME: 'Navadrishti',
  TAGLINE: 'Social Impact Operations Platform',
  DESCRIPTION: 'AI-powered social impact operations platform for NGOs, CSR teams, and individuals',
  FOUNDED: 2024,
  WEBSITE: 'https://navadrishti.com',
} as const;

// Social media links
export const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/company/navadrishti',
  TWITTER: 'https://twitter.com/navadrishti',
  GITHUB: 'https://github.com/navadrishti',
} as const;

// Performance thresholds
export const PERFORMANCE = {
  DEBOUNCE_DELAY: 300,
  INTERSECTION_THRESHOLD: 0.1,
  LAZY_LOAD_OFFSET: '200px',
} as const;

// CSR Statistics (for display)
export const CSR_STATS = {
  TOTAL_BUDGET: 50000, // in Crores
  ANNUAL_SPENDING: 30000, // in Crores
  ELIGIBLE_SMES: 40000,
  TRAPPED_FUNDS: 5000, // in Crores
  RURAL_NGOS: 2000000, // 2 million
  TOTAL_NGOS: 3100000, // 3.1 million
} as const;