"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { Dictionary } from "../types";

export default function Header({ dict, lang }: { dict: Dictionary; lang: string }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simple function to switch locale in URL
  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={`/${lang}`} className={styles.logo} onClick={closeMenu}>
          {dict.common.title}
        </Link>
        
        {/* Hamburger Button */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <ul className={styles.navList}>
            <li>
              <Link href={`/${lang}`} onClick={closeMenu}>{dict.nav.home}</Link>
            </li>
            <li>
              <Link href={`/${lang}/services`} onClick={closeMenu}>{dict.nav.services}</Link>
            </li>
            <li>
              <Link href={`/${lang}#news`} onClick={closeMenu}>{dict.nav.news}</Link>
            </li>
            <li>
              <Link href={`/${lang}/company`} onClick={closeMenu}>{dict.nav.company}</Link>
            </li>
            <li>
              <Link href={`/${lang}/contact`} onClick={closeMenu}>{dict.nav.contact}</Link>
            </li>
          </ul>
          
          {/* Mobile Language Switcher */}
          <div className={styles.mobileLangSwitch}>
            <Link href={switchLocale("ko")} className={lang === "ko" ? styles.active : ""} onClick={closeMenu}>
              KR
            </Link>
            <span className={styles.divider}>|</span>
            <Link href={switchLocale("ja")} className={lang === "ja" ? styles.active : ""} onClick={closeMenu}>
              JP
            </Link>
          </div>
        </nav>

        <div className={styles.langSwitch}>
          <Link href={switchLocale("ko")} className={lang === "ko" ? styles.active : ""}>
            KR
          </Link>
          <span className={styles.divider}>|</span>
          <Link href={switchLocale("ja")} className={lang === "ja" ? styles.active : ""}>
            JP
          </Link>
        </div>
      </div>
    </header>
  );
}
