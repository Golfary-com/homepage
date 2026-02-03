import styles from "./News.module.css";
import { Dictionary } from "../types";

export default function News({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.news} id="news">
      <div className="container">
        <h2 className={styles.title}>{dict.news.title}</h2>
        <div className={styles.list}>
          {dict.news.items.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.date}>{item.date}</span>
                <span className={`${styles.category} ${styles[item.category.toLowerCase()]}`}>
                  {item.category}
                </span>
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
