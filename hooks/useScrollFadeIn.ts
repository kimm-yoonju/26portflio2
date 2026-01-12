
import { useRef, useEffect, useCallback } from 'react';

export const useScrollFadeIn = <T extends HTMLElement,>() => {
  const dom = useRef<T>(null);

  const handleScroll = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const { current } = dom;
    if (entry.isIntersecting && current) {
      current.style.transitionProperty = 'opacity, transform';
      current.style.transitionDuration = '0.7s';
      current.style.transitionTimingFunction = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      current.style.transitionDelay = '0.1s';
      current.style.opacity = '1';
      current.style.transform = 'translate3d(0, 0, 0)';
    }
  }, []);

  useEffect(() => {
    const { current } = dom;
    if (current) {
      current.style.opacity = '0';
      current.style.transform = 'translate3d(0, 50px, 0)';

      const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: 'translate3d(0, 50px, 0)',
    },
  };
};
