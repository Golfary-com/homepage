"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./News.module.css";
import { Dictionary } from "../types";

export default function News({ dict }: { dict: Dictionary }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);
  const initialItemsToShow = 3;
  const items = dict.news.items;
  const visibleItems = isExpanded ? items : items.slice(0, initialItemsToShow);
  const hasMoreItems = items.length > initialItemsToShow;

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
        
        {hasMoreItems && (
          <div className={styles.buttonWrapper}>
            <button 
              className={styles.showMoreButton}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? dict.news.showLess : dict.news.showMore}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
