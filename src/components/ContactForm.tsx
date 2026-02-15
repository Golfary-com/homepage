"use client";

import { useState } from "react";

import styles from "./ContactForm.module.css";
import { Dictionary } from "../types";

export default function ContactForm({ dict, lang }: { dict: Dictionary; lang: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      lang: lang, // Send language to API
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className={`container ${styles.container}`}>
        <h2 className={`${styles.title} gradient-text`}>{dict.contact.title}</h2>
        <p className={styles.description}>{dict.contact.description}</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label htmlFor="contact-name">{dict.contact.name}</label>
            <input 
              id="contact-name" 
              name="name" 
              type="text" 
              required 
              disabled={status === 'loading'}
              placeholder={dict.contact.name}
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="contact-email">{dict.contact.email}</label>
            <input 
              id="contact-email" 
              name="email" 
              type="email" 
              required 
              disabled={status === 'loading'}
              placeholder={dict.contact.email}
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="contact-message">{dict.contact.message}</label>
            <textarea 
              id="contact-message" 
              name="message" 
              rows={5} 
              required 
              disabled={status === 'loading'}
              placeholder={dict.contact.message}
            ></textarea>
          </div>
          
          <button type="submit" className={styles.submit} disabled={status === 'loading'}>
            {status === 'loading' ? dict.contact.sending : dict.contact.submit}
          </button>

          {status === 'success' && <p className={styles.successMessage}>{dict.contact.success}</p>}
          {status === 'error' && <p className={styles.errorMessage}>{dict.contact.error}</p>}
        </form>
      </div>
    </section>
  );
}
