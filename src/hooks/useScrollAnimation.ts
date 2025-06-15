"use client";
import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  delay?: string; // e.g., '100ms', '0.2s'
  rootMargin?: string;
}

export function useScrollAnimation<T extends HTMLElement>(options?: ScrollAnimationOptions) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { threshold = 0.1, delay = '0s', rootMargin = '0px' } = options || {};

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [threshold, rootMargin]);

  const style = isVisible && delay !== '0s' ? { transitionDelay: delay } : {};

  return { ref, className: `scroll-animate ${isVisible ? 'is-visible' : ''}`, style };
}
