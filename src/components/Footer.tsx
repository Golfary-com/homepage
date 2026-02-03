import styles from "./Footer.module.css";
import { Dictionary } from "../types";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.info}>
          <div className={styles.brand}>Golfary</div>
          <p className={styles.copyright}>© 2026 Golfary Inc. All rights reserved.</p>
        </div>
        <div className={styles.links}>
          {/* Social links or additional nav could go here */}
        </div>
      </div>
    </footer>
  );
}
