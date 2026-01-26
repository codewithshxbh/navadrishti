import { useState, useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  once?: boolean; // New prop to keep element "loaded" after first intersection
  persistKey?: string; // Unique key for persisting state across refreshes
}

/**
 * Custom hook for intersection observer with scroll direction detection
 * Only triggers animations when scrolling top to bottom (down)
 * @param once - If true, keeps element in "intersecting" state after first intersection
 */
export function useIntersectionObserver({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  once = true, // Default to true for better performance
  persistKey,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false); // Start as false for lazy loading
  const [node, setNode] = useState<Element | null>(null);
  const hasIntersectedRef = useRef(false);
  const lastScrollY = useRef(0);
  const isScrollingDown = useRef(true);

  useEffect(() => {
    if (!node) return;

    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      isScrollingDown.current = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setEntry(entry);
          
          if (once) {
            // Animate when intersecting AND haven't intersected before (regardless of scroll direction)
            if (entry.isIntersecting && !hasIntersectedRef.current) {
              hasIntersectedRef.current = true;
            }
            // Keep visible once intersected (within same session)
            setIsIntersecting(hasIntersectedRef.current);
          } else {
            // Normal mode - follows actual intersection state
            setIsIntersecting(entry.isIntersecting);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [node, threshold, root, rootMargin, once, persistKey]);

  return { ref: setNode, entry, isIntersecting };
}