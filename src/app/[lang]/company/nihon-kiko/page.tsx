import { getDictionary } from "../../dictionaries";
import styles from "./nihon-kiko.module.css";
import NextImage from "next/image";

export default async function NihonKikoPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);
  const info = dict.company.nihonKiko;

  return (
    <main className={styles.container}>
      {/* Hero / Header Section */}
      <section className={styles.header}>
        <div className="container">
           <div className={styles.headerContent}>
              <div className={styles.logoWrapper}>
                 <NextImage 
                   src="/images/nihon_kikou.png" 
                   alt={info.name} 
                   width={120} 
                   height={120} 
                   className={styles.logo}
                   priority
                 />
              </div>
              <div className={styles.headerText}>
                <h1 className={styles.title}>{info.name}</h1>
                <p className={styles.subtitle}>Global Business & Tourism Solution</p>
              </div>
           </div>
        </div>
      </section>
      
      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            {/* Introduction Card */}
            <div className={styles.introCard}>
              <h3 className={styles.sectionTitle}>About Us</h3>
              <p className={styles.introText}>{info.introduction}</p>
            </div>

            {/* Company Details Table */}
            <div className={styles.detailsCard}>
              <h3 className={styles.sectionTitle}>{lang === 'ko' ? '회사 개요' : '会社概要'}</h3>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <tbody>
                    <tr>
                      <th>{lang === 'ko' ? '회사명' : '商号'}</th>
                      <td>{info.name}</td>
                    </tr>
                    <tr>
                      <th>{lang === 'ko' ? '주소' : '本店'}</th>
                      <td>{info.address}</td>
                    </tr>
                    <tr>
                      <th>{lang === 'ko' ? '설립일' : '会社成立の年月日'}</th>
                      <td>{info.establishment}</td>
                    </tr>
                    <tr>
                      <th>{lang === 'ko' ? '자본금' : '資本金の額'}</th>
                      <td>{info.capital}</td>
                    </tr>
                    <tr>
                      <th>{lang === 'ko' ? '대표자' : '代表取締役'}</th>
                      <td>{info.representative}</td>
                    </tr>
                    <tr>
                      <th>{lang === 'ko' ? '사업목적' : '目的'}</th>
                      <td>
                        <ul className={styles.businessList}>
                          {info.business.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
