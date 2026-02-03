import Link from "next/link";
import styles from "./Hero.module.css";
import { Dictionary } from "../types";

export default function Hero({ dict, lang }: { dict: Dictionary; lang: string }) {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{dict.hero.slogan}</h1>
        <p className={styles.subtitle}>{dict.hero.subSlogan}</p>
        <div className={styles.actions}>
          <Link href={`/${lang}/contact`} className={styles.ctaPrimary}>
            {dict.nav.contact}
          </Link>
          <Link href={`/${lang}/services`} className={styles.ctaSecondary}>
            {dict.nav.services}
          </Link>
        </div>
      </div>
    </section>
  );
}
