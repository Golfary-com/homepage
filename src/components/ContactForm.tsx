"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./ContactForm.module.css";
import { Dictionary } from "../types";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start showing when element enters viewport, fully shown when centered
      const scrollStart = windowHeight;
      const scrollEnd = windowHeight / 2;
      
      let progress = 0;
      if (elementTop < scrollStart && elementTop > scrollEnd - elementHeight) {
        progress = 1 - ((elementTop - scrollEnd) / (scrollStart - scrollEnd));
        progress = Math.max(0, Math.min(1, progress));
      } else if (elementTop <= scrollEnd - elementHeight) {
        progress = 1;
      }
      
      // Always update progress based on current scroll position
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={styles.contact}
      style={{
        opacity: scrollProgress,
        transform: `translateY(${(1 - scrollProgress) * 50}px)`
      }}
      id="contact"
    >
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{dict.contact.title}</h2>
        <p className={styles.subtitle}>{dict.contact.subtitle}</p>
        <Link href="/contact" className={styles.contactButton}>
          {dict.contact.title}
        </Link>
      </div>
    </section>
  );
}
