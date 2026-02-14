"use client";

import styles from "./ContactForm.module.css";
import { Dictionary } from "../types";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("Form submitted:", data);
    // TODO: Add actual submission logic (e.g., API call)
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className={`container ${styles.container}`}>
        <h2 className={`${styles.title} gradient-text`}>{dict.contact.title}</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label htmlFor="contact-name">{dict.contact.name}</label>
            <input id="contact-name" name="name" type="text" required />
          </div>
          <div className={styles.group}>
            <label htmlFor="contact-email">{dict.contact.email}</label>
            <input id="contact-email" name="email" type="email" required />
          </div>
          <div className={styles.group}>
            <label htmlFor="contact-message">{dict.contact.message}</label>
            <textarea id="contact-message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className={styles.submit}>
            {dict.contact.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
