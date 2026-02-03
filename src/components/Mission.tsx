import styles from "./Mission.module.css";
import { Dictionary } from "../types";

export default function Mission({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.mission}>
      <div className={`container ${styles.container}`}>
        <div className={styles.block}>
          <h2 className={styles.label}>{dict.company.mission}</h2>
          <p className={styles.desc}>{dict.company.missionDesc}</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.block}>
          <h2 className={styles.label}>{dict.company.vision}</h2>
          <p className={styles.desc}>{dict.company.visionDesc}</p>
        </div>
      </div>
    </section>
  );
}
