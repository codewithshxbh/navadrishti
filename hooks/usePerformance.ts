import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  mountTime: number;
}

/**
 * Custom hook for monitoring component performance
 * Measures render time and mount time for optimization insights
 */
export function usePerformanceMonitoring(componentName: string) {
  const mountTimeRef = useRef<number>(performance.now());
  const renderStartRef = useRef<number>(performance.now());

  useEffect(() => {
    const mountTime = performance.now() - mountTimeRef.current;
    const renderTime = performance.now() - renderStartRef.current;

    const metrics: PerformanceMetrics = {
      componentName,
      renderTime,
      mountTime,
    };

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance [${componentName}]:`, {
        mount: `${mountTime.toFixed(2)}ms`,
        render: `${renderTime.toFixed(2)}ms`,
      });
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && (mountTime > 100 || renderTime > 50)) {
      // Example: analytics.track('slow_component', metrics);
      console.warn(`Slow component detected: ${componentName}`, metrics);
    }
  }, [componentName]);

  useEffect(() => {
    renderStartRef.current = performance.now();
  });

  return {
    markRenderStart: () => {
      renderStartRef.current = performance.now();
    },
  };
}

/**
 * Custom hook for measuring Core Web Vitals
 */
export function useWebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure FCP, LCP, FID, CLS
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`Web Vital [${entry.name}]:`, (entry as any).value);
        }

        // Send to analytics service
        if (process.env.NODE_ENV === 'production') {
          // Example: analytics.track('web_vital', {
          //   name: entry.name,
          //   value: (entry as any).value,
          //   rating: (entry as any).value > getThreshold(entry.name) ? 'poor' : 'good'
          // });
        }
      }
    });

    // Observe various performance entries
    try {
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      observer.observe({ type: 'first-input', buffered: true });
      observer.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      // Older browsers may not support all entry types
      console.warn('Performance Observer not fully supported:', e);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
}