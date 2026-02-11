import { getDictionary } from "../../dictionaries";
import styles from "./nihon-kiko.module.css";
import NextImage from "next/image";

export default async function NihonKikoPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);
  const info = dict.company.nihonKiko;

  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
           <div className={styles.heroContent}>
              <h1 className={styles.title}>{info.name}</h1>
              <p className={styles.subtitle}>Global Business & Tourism Solution</p>
           </div>
        </div>
      </section>
      
      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left Column: Logo & Intro */}
            <div className={styles.leftCol}>
              <div className={styles.logoCard}>
                 <NextImage 
                   src="/images/nihon_kikou.png" 
                   alt={info.name} 
                   width={300} 
                   height={218} 
                   className={styles.logo} 
                   style={{ width: 'auto', height: 'auto' }}
                 />
              </div>
              <div className={styles.introCard}>
                <h3>About Us</h3>
                <p>{info.introduction}</p>
              </div>
            </div>

            {/* Right Column: Details Table */}
            <div className={styles.rightCol}>
              <div className={styles.tableCard}>
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
                        <ol className={styles.businessList}>
                          {info.business.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ol>
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
