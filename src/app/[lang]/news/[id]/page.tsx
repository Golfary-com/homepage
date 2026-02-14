import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "../../dictionaries";
import styles from "./ArticlePage.module.css";

import ScrollToTop from "@/components/ScrollToTop";

export default async function NewsArticlePage({ 
  params: { lang, id } 
}: { 
  params: { lang: string; id: string } 
}) {
  const dict = await getDictionary(lang);
  const item = dict.news.items.find((item) => item.id === id);

  if (!item) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <ScrollToTop />
      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.date}>{item.date}</span>
            <span className={`${styles.category} ${styles[item.category.toLowerCase()]}`}>
              {item.category}
            </span>
          </div>
          <h1 className={styles.title}>{item.title}</h1>
        </header>

        {item.image && (
          <div className={styles.imageWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.title} className={styles.image} />
          </div>
        )}

        <div className={styles.content}>
          {item.content ? (
            item.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>No content available.</p>
          )}
        </div>

        {item.links && item.links.length > 0 && (
          <div className={styles.links}>
            <h3 className={styles.linksTitle}>
              {dict.common.relatedLinks}
            </h3>
            <ul className={styles.linksList}>
              {item.links.map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.linkCard}
                  >
                    {link.image && (
                      <div className={styles.linkImageWrapper}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={link.image} alt="" className={styles.linkImage} />
                      </div>
                    )}
                    <div className={styles.linkContent}>
                      <span className={styles.linkUrl}>{link.url}</span>
                      <h4 className={styles.linkTitle}>{link.title}</h4>
                      {link.description && (
                        <p className={styles.linkDescription}>{link.description}</p>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link href={`/${lang}/news`} className={styles.backButton}>
          ← {dict.common.backToNews}
        </Link>
      </article>
    </main>
  );
}
