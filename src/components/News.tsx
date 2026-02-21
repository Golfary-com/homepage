"use client";

import Link from "next/link";
import styles from "./News.module.css";
import { Dictionary } from "../types";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function News({ dict, lang }: { dict: Dictionary; lang: string }) {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>();

  const initialItemsToShow = 3;
  // Sort by date descending
  const sortedItems = [...dict.news.items]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const visibleItems = sortedItems.slice(0, initialItemsToShow);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.news} ${isVisible ? styles.visible : ''}`}
      id="news"
    >
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <span className={styles.label}>News</span>
            <h2 className={styles.title}>{dict.news.title}</h2>
          </div>
          <Link 
            href={`/${lang}/news`}
            className={styles.showMoreButton}
          >
            {dict.news.showMore}
          </Link>
        </div>

        {/* News List */}
        <div className={styles.list}>
          {visibleItems.map((item, index) => {
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
                  {item.content && (
                    <p className={styles.description}>
                      {item.content.length > 80 ? `${item.content.substring(0, 80)}...` : item.content}
                    </p>
                  )}
                </div>
              </>
            );

            if (item.id) {
              return (
                <Link
                  key={index}
                  href={`/${lang}/news/${item.id}`}
                  className={`${styles.item} ${styles.link} ${isVisible ? styles.itemVisible : ''}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Content />
                </Link>
              );
            }

            return item.url ? (
              <a 
                key={index} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.item} ${styles.link} ${isVisible ? styles.itemVisible : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Content />
              </a>
            ) : (
              <div 
                key={index} 
                className={`${styles.item} ${isVisible ? styles.itemVisible : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Content />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
