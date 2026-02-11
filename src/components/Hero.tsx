import Link from "next/link";
import styles from "./Hero.module.css";
import { Dictionary } from "../types";

export default function Hero({ dict, lang }: { dict: Dictionary; lang: string }) {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.grid}`}>
        {/* Left Column: Text & CTA */}
        <div className={styles.content}>
          <h1 className={styles.title}>{dict.hero.slogan}</h1>
          <p className={styles.subtitle}>{dict.hero.subSlogan}</p>
          <div className={styles.actions}>
            {/* Contact button removed, Service button moved to bottom */}
          </div>
        </div>

        {/* Right Column: Mission & Vision Cards */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <span className={styles.cardLabel}>{dict.company.mission}</span>
            <p className={styles.cardText}>{dict.company.missionDesc}</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardLabel}>{dict.company.vision}</span>
            <p className={styles.cardText}>{dict.company.visionDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
