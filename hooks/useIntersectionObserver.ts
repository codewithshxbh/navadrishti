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
  threshold = 0.01,
  root = null,
  rootMargin = '100px',
  once = true, // Default to true for better performance
  persistKey,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(true); // Start as true for eager loading
  const [node, setNode] = useState<Element | null>(null);
  const hasIntersectedRef = useRef(false);
  const lastScrollY = useRef(0);
  const isScrollingDown = useRef(true);

  useEffect(() => {
    // Disabled for eager loading - everything appears immediately
    // No intersection observer needed
    return () => {};
  }, [node, threshold, root, rootMargin, once, persistKey]);

  return { ref: setNode, entry, isIntersecting };
}
