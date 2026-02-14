"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./NewsPage.module.css";
import { NewsItem } from "../../../types";

export default function NewsList({ items, lang }: { items: NewsItem[]; lang: string }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Press", "Notice", "Tech"];

  const getCategoryLabel = (category: string) => {
    if (lang === "ko") {
      switch (category) {
        case "All": return "전체";
        default: return category;
      }
    } else {
      switch (category) {
        case "All": return "すべて";
        default: return category;
      }
    }
  };

  const sortedItems = [...items].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredItems = selectedCategory === "All"
    ? sortedItems
    : sortedItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <div className={styles.filterContainer}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {getCategoryLabel(category)}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {filteredItems.map((item, index) => {
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
                    {item.content.length > 120 ? `${item.content.substring(0, 120)}...` : item.content}
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
                className={`${styles.item} ${styles.link}`}
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
              className={`${styles.item} ${styles.link}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Content />
            </a>
          ) : (
            <div 
              key={index} 
              className={styles.item}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Content />
            </div>
          );
        })}
      </div>
    </>
  );
}
