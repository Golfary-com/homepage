import styles from "./News.module.css";
import { Dictionary } from "../types";

export default function News({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.news} id="news">
      <div className="container">
        <h2 className={styles.title}>{dict.news.title}</h2>
        <div className={styles.list}>
        <div className={styles.list}>
          {dict.news.items.map((item, index) => {
            const Content = () => (
              <>
                {item.image && (
                  <div className={styles.imageWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.title} className={styles.image} />
                  </div>
                )}
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.date}>{item.date}</span>
                    <span className={`${styles.category} ${styles[item.category.toLowerCase()]}`}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
              </>
            );

            return item.url ? (
              <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className={`${styles.item} ${styles.link}`}>
                <Content />
              </a>
            ) : (
              <div key={index} className={styles.item}>
                <Content />
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
