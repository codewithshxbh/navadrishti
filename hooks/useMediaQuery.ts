import { useState, useEffect } from 'react';

interface UseMediaQueryReturn {
  matches: boolean;
  isLoading: boolean;
}

/**
 * Custom hook for responsive design
 * @param query - Media query string
 * @returns Object with matches and isLoading
 */
export function useMediaQuery(query: string): UseMediaQueryReturn {
  const [matches, setMatches] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsLoading(false);
      return;
    }

    const mediaQuery = window.matchMedia(query);
    
    const handleChange = () => {
      setMatches(mediaQuery.matches);
      setIsLoading(false);
    };

    // Set initial value
    handleChange();

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return { matches, isLoading };
}

// Commonly used breakpoints
export const useIsMobile = () => {
  const { matches } = useMediaQuery('(max-width: 768px)');
  return matches;
};
export const useIsTablet = () => {
  const { matches } = useMediaQuery('(max-width: 1024px)');
  return matches;
};
export const useIsDesktop = () => {
  const { matches } = useMediaQuery('(min-width: 1025px)');
  return matches;
};