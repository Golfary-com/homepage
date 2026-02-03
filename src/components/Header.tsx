"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { Dictionary } from "../types";

export default function Header({ dict, lang }: { dict: Dictionary; lang: string }) {
  const pathname = usePathname();

  // Simple function to switch locale in URL
  const switchLocale = (newLocale: string) => {
    // Current path: /ko/some/path -> /ja/some/path
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={`/${lang}`} className={styles.logo}>
          {dict.common.title}
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href={`/${lang}`}>{dict.nav.home}</Link>
            </li>
            <li>
              <Link href={`/${lang}/services`}>{dict.nav.services}</Link>
            </li>
            <li>
              <Link href={`/${lang}#news`}>{dict.nav.news}</Link>
            </li>
            <li>
              <Link href={`/${lang}/company`}>{dict.nav.company}</Link>
            </li>
            <li>
              <Link href={`/${lang}/contact`}>{dict.nav.contact}</Link>
            </li>
          </ul>
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
