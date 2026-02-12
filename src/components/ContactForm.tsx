"use client";

import Link from "next/link";
import styles from "./ContactForm.module.css";
import { Dictionary } from "../types";
import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [sectionRef, scrollProgress] = useScrollProgress<HTMLElement>();

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
