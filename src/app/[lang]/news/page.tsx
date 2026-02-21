import { getDictionary } from "../dictionaries";
import styles from "./NewsPage.module.css";
import NewsList from "./NewsList";
import ScrollToTop from "@/components/ScrollToTop";

export default async function NewsPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);
  const items = dict.news.items;

  return (
    <main className={styles.container}>
      <ScrollToTop />

      {/* Dark Hero Header */}
      <div className={styles.pageHero}>
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>Golfary</p>
          <h1 className={styles.title}>{dict.news.title}</h1>
          <p className={styles.heroSubtitle}>
            {lang === "ko" ? "Golfary의 최신 소식을 확인하세요" : "Golfaryの最新情報をお届けします"}
          </p>
        </div>
      </div>

      {/* News Content */}
      <div className={styles.content}>
        <NewsList items={items} lang={lang} />

        <div className={styles.buttonWrapper}>
          <a href={`/${lang}`} className={styles.homeButton}>
            {dict.common.backToHome}
          </a>
        </div>
      </div>
    </main>
  );
}
