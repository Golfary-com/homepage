import Link from "next/link";
import styles from "./Footer.module.css";
import { Dictionary } from "../types";

export default function Footer({ dict, lang }: { dict: Dictionary; lang: string }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.info}>
          <div className={styles.brand}>Golfary</div>
          <p className={styles.copyright}>© 2026 Golfary Inc. All rights reserved.</p>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href={`/${lang}`}>{dict.nav.home}</Link></li>
            <li><Link href={`/${lang}/#services`}>{dict.nav.services}</Link></li>
            <li><Link href={`/${lang}/#news`}>{dict.nav.news}</Link></li>
            <li><Link href={`/${lang}/#team`}>{dict.nav.team}</Link></li>
            <li><Link href={`/${lang}/company/nihon-kiko`}>{dict.nav.company}</Link></li>
            <li><Link href={`/${lang}/#contact`}>{dict.nav.contact}</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
