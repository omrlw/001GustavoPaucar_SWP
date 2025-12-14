import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations
 * Uses IntersectionObserver for performance
 */
export const useScrollReveal = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        once = true,
    } = options;

    const observerRef = useRef(null);

    const observe = useCallback((element) => {
        if (!element || !observerRef.current) return;
        observerRef.current.observe(element);
    }, []);

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // If reduced motion, immediately show all elements
            document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale').forEach(el => {
                el.classList.add('is-visible');
            });
            return;
        }

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        if (once) {
                            observerRef.current?.unobserve(entry.target);
                        }
                    } else if (!once) {
                        entry.target.classList.remove('is-visible');
                    }
                });
            },
            { threshold, rootMargin }
        );

        // Auto-observe all elements with scroll-reveal classes
        const elements = document.querySelectorAll(
            '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
        );
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => {
            observerRef.current?.disconnect();
        };
    }, [threshold, rootMargin, once]);

    return { observe };
};

export default useScrollReveal;
