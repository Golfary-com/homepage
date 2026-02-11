"use client";

import Link from "next/link";
import styles from "./ContactForm.module.css";
import { Dictionary } from "../types";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.contact} id="contact">
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
