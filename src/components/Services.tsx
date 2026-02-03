import styles from "./Services.module.css";
import { Dictionary } from "../types";

export default function Services({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <h2 className={styles.title}>{dict.services.title}</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>⛳️</div>
            <h3>{dict.services.course.title}</h3>
            <p>{dict.services.course.desc}</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>🏨</div>
            <h3>{dict.services.travel.title}</h3>
            <p>{dict.services.travel.desc}</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>📅</div>
            <h3>{dict.services.schedule.title}</h3>
            <p>{dict.services.schedule.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
