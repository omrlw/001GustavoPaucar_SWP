import { useEffect, useState } from 'react';

export const useScroll = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const next = window.scrollY > threshold;
        setIsScrolled((prev) => (prev === next ? prev : next));
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId != null) window.cancelAnimationFrame(rafId);
    };
  }, [threshold]);

  return isScrolled;
};
