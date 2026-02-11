import styles from "./Services.module.css";
import { Dictionary } from "../types";
import Image from "next/image";

export default function Services({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <h2 className={styles.title}>{dict.services.title}</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/golf-course.jpg"
                alt="Golf Course"
                width={800}
                height={600}
                className={styles.image}
              />
            </div>
            <h3>{dict.services.course.title}</h3>
            <p>{dict.services.course.desc}</p>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/travel-route.jpg"
                alt="Travel Route"
                width={800}
                height={600}
                className={styles.image}
              />
            </div>
            <h3>{dict.services.travel.title}</h3>
            <p>{dict.services.travel.desc}</p>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/schedule-planning.jpg"
                alt="Schedule Planning"
                width={800}
                height={600}
                className={styles.image}
              />
            </div>
            <h3>{dict.services.schedule.title}</h3>
            <p>{dict.services.schedule.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
