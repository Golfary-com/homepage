import { getDictionary } from "../dictionaries";
import styles from "./NewsPage.module.css";
import NewsList from "./NewsList";

export default async function NewsPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);
  const items = dict.news.items;

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{dict.news.title}</h1>
      <NewsList items={items} lang={lang} />
    </main>
  );
}
