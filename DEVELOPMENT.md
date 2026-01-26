# Development Guidelines

## Overview

This document outlines the development standards and best practices for the Navadrishti portfolio
project.

## Architecture

### Project Structure

```
├── app/                    # Next.js app directory
├── components/            # React components
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions
├── constants/             # Application constants
├── assets/                # Static assets
└── public/               # Public files

```

### Component Guidelines

#### 1. Component Structure

- Use functional components with hooks
- Implement proper TypeScript interfaces
- Include proper accessibility attributes
- Use semantic HTML elements

#### 2. Performance Optimization

- Implement `React.memo` for expensive components
- Use `useCallback` and `useMemo` appropriately
- Lazy load heavy components
- Optimize images with Next.js Image component

#### 3. Accessibility (a11y)

- Always include `alt` text for images
- Use proper ARIA labels
- Ensure keyboard navigation works
- Maintain proper heading hierarchy
- Test with screen readers

### State Management

- Use built-in React hooks for local state
- Implement custom hooks for complex state logic
- Consider context for global state when needed

### Styling

- Use CSS custom properties (CSS variables)
- Follow BEM methodology for class naming
- Implement responsive design mobile-first
- Use CSS Grid and Flexbox appropriately

### Performance Standards

- Core Web Vitals targets:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

## Development Workflow

### Code Quality

1. Run type checking: `npm run type-check`
2. Run linting: `npm run lint`
3. Format code: `npm run format`
4. Run pre-commit checks: `npm run pre-commit`

### Git Workflow

1. Use conventional commit messages
2. Create feature branches from main
3. Squash commits before merging
4. Include meaningful PR descriptions

### Code Review Guidelines

- Review for accessibility compliance
- Check performance implications
- Verify TypeScript type safety
- Ensure proper error handling

## Performance Monitoring

### Bundle Analysis

Run `npm run analyze` to generate bundle analysis reports.

### Core Web Vitals

Monitor using:

- Chrome DevTools
- Lighthouse CI
- Web Vitals extension

## Security

### Best Practices

- Sanitize user inputs
- Use CSP headers
- Implement proper error boundaries
- Avoid exposing sensitive data in client-side code

## Deployment

### Production Checklist

- [ ] Run type checking
- [ ] Run linting
- [ ] Build successfully
- [ ] Test on multiple devices
- [ ] Check accessibility
- [ ] Verify SEO meta tags
- [ ] Test Core Web Vitals

## Troubleshooting

### Common Issues

1. **Hydration Errors**: Check for client/server rendering differences
2. **Performance Issues**: Use React DevTools Profiler
3. **Accessibility Issues**: Use axe-core or similar tools
4. **Bundle Size Issues**: Analyze with webpack-bundle-analyzer
