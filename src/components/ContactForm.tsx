"use client";

import styles from "./ContactForm.module.css";
import { Dictionary } from "../types";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{dict.contact.title}</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label>{dict.contact.name}</label>
            <input type="text" required />
          </div>
          <div className={styles.group}>
            <label>{dict.contact.email}</label>
            <input type="email" required />
          </div>
          <div className={styles.group}>
            <label>{dict.contact.message}</label>
            <textarea rows={5} required></textarea>
          </div>
          <button type="submit" className={styles.submit}>
            {dict.contact.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
