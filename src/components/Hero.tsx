"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import { Dictionary } from "../types";

const HERO_IMAGES = [
  '/images/golf_hero_real.jpg',
  '/images/hero-nature.png',
  '/images/hero-dynamic.png'
];

export default function Hero({ dict }: { dict: Dictionary }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000); // Change every 5 seconds for smoother overlap

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Slider */}
      <div className={styles.sliderContainer}>
        {HERO_IMAGES.map((src, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${index === currentImageIndex ? styles.activeSlide : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className={styles.overlay}></div>
      <div className={`container ${styles.grid}`}>
        {/* Left Column: Text & CTA */}
        <div className={styles.content}>
          <h1 className={styles.title}>{dict.hero.slogan}</h1>
          <p className={styles.subtitle}>{dict.hero.subSlogan}</p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.ctaPrimary}>
              {dict.nav.contact}
            </Link>
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
