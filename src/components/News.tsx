"use client";

import Link from "next/link";
import styles from "./News.module.css";
import { Dictionary } from "../types";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function News({ dict, lang }: { dict: Dictionary; lang: string }) {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>();

  const initialItemsToShow = 3;
  const sortedItems = [...dict.news.items].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const pressItems = sortedItems.filter(item => item.category === 'Press');
  const otherItems = sortedItems.filter(item => item.category !== 'Press');
  
  const items = [...pressItems, ...otherItems];
  const visibleItems = items.slice(0, initialItemsToShow);


  return (
    <section 
      ref={sectionRef}
      className={`${styles.news} ${isVisible ? styles.visible : ''}`}
      id="news"
    >
      <div className="container">
        <h2 className={styles.title}>{dict.news.title}</h2>
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
                </div>
              </>
            );

            if (item.id) {
              return (
                <Link
                  key={index}
                  href={`/${lang}/news/${item.id}`}
                  className={`${styles.item} ${styles.link} ${isVisible ? styles.itemVisible : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
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
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Content />
              </a>
            ) : (
              <div 
                key={index} 
                className={`${styles.item} ${isVisible ? styles.itemVisible : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Content />
              </div>
            );
          })}
        </div>
        
        <div className={styles.buttonWrapper}>
          <Link 
            href={`/${lang}/news`}
            className={styles.showMoreButton}
          >
            {dict.news.showMore}
          </Link>
        </div>
      </div>
    </section>
  );
}
