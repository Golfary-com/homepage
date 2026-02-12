import { useEffect, useRef, useState, RefObject } from "react";

/**
 * Custom hook for tracking scroll progress of an element
 * Returns a value between 0 and 1 indicating scroll progress
 * 
 * @returns [ref, scrollProgress] - ref to attach to element and scroll progress (0-1)
 */
export function useScrollProgress<T extends HTMLElement = HTMLElement>(): [
  RefObject<T>,
  number
] {
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the element is visible
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Start showing when element enters viewport, fully shown when centered
      const scrollStart = windowHeight;
      const scrollEnd = windowHeight / 2;

      let progress = 0;
      if (elementTop < scrollStart && elementTop > scrollEnd - elementHeight) {
        progress = 1 - (elementTop - scrollEnd) / (scrollStart - scrollEnd);
        progress = Math.max(0, Math.min(1, progress));
      } else if (elementTop <= scrollEnd - elementHeight) {
        progress = 1;
      }

      // Always update progress based on current scroll position
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [ref, scrollProgress];
}
