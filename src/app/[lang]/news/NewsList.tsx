"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./NewsPage.module.css";
import { NewsItem } from "../../../types";

export default function NewsList({ items, lang }: { items: NewsItem[]; lang: string }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("2026");

  const categories = ["All", "Award", "Adoption", "Event", "Notice"];

  // Derive available years from items, sorted descending, and "All" at the end
  const years = [...Array.from(
    new Set(items.map(item => item.date.substring(0, 4)))
  ).sort((a, b) => Number(b) - Number(a)), "All"];

  const getCategoryLabel = (category: string) => {
    if (lang === "ko") {
      switch (category) {
        case "All": return "전체";
        case "Award": return "수상";
        case "Adoption": return "채택";
        case "Event": return "이벤트";
        case "Notice": return "공지";
        default: return category;
      }
    } else {
      switch (category) {
        case "All": return "すべて";
        case "Award": return "受賞";
        case "Adoption": return "採択";
        case "Event": return "イベント";
        case "Notice": return "お知らせ";
        default: return category;
      }
    }
  };

  const getYearLabel = (year: string) => {
    if (year === "All") {
      return lang === "ko" ? "전체" : "すべて";
    }
    return year;
  };

  const sortedItems = [...items].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredItems = sortedItems
    .filter(item => selectedCategory === "All" || item.category === selectedCategory)
    .filter(item => selectedYear === "All" || item.date.startsWith(selectedYear));

  return (
    <>
      {/* Category Filter */}
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

      {/* Year Filter */}
      <div className={styles.yearFilterContainer}>
        {years.map((year) => (
          <button
            key={year}
            className={`${styles.yearButton} ${selectedYear === year ? styles.yearActive : ""}`}
            onClick={() => setSelectedYear(year)}
          >
            {getYearLabel(year)}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {filteredItems.length === 0 ? (
          <div className={styles.emptyState}>
            {lang === "ko" ? "해당 연도의 뉴스가 없습니다." : "該当年のニュースはありません。"}
          </div>
        ) : (
          filteredItems.map((item, index) => {
            const Content = () => (
              <>
                {item.image ? (
                  <div className={styles.imageWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.title} className={styles.image} />
                  </div>
                ) : (
                  <div className={`${styles.imageWrapper} ${styles.textFallback}`}>
                    <span className={styles.fallbackCategory}>{item.category}</span>
                    <p className={styles.fallbackText}>{item.title}</p>
                  </div>
                )}
                <div className={styles.articleContent}>
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
                  style={{ animationDelay: `${index * 0.06}s` }}
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
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <Content />
              </a>
            ) : (
              <div
                key={index}
                className={styles.item}
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <Content />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
