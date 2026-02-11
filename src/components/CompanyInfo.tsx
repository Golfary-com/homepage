import styles from "./CompanyInfo.module.css";
import { Dictionary } from "../types";
import Link from "next/link";

export default function CompanyInfo({ dict, lang }: { dict: Dictionary; lang: string }) {
  return (
    <section className={styles.company} id="company">
      <div className="container">
        <h2 className={styles.title}>{dict.company.info.title}</h2>
        <div className={styles.content}>
          {/* Partnership Section */}
          <div className={styles.partnership}>
            <h3 className={styles.partnershipTitle}>{dict.company.partnership.title}</h3>
            <div className={styles.intro}>
              <p>{dict.company.partnership.description}</p>
            </div>
            <div className={styles.logos}>
               <div className={styles.logoItem}>
                 <img src="/images/Golfary_logo.png" alt="Golfary" className={styles.logoImage} />
                 <span className={styles.logoName}>Golfary</span>
               </div>
               <div className={styles.xMark}>✕</div>
               <div className={styles.logoItem}>
                 <img src="/images/日本紀行ロゴ.png" alt="日本紀行" className={styles.logoImage} />
                 <span className={styles.logoName}>日本紀行</span>
               </div>
            </div>
            
            <div className={styles.action}>
               {/* Extract lang from dict prop if possible, but easier to pass it or infer. 
                   Actually, I can't easily get lang from here without prop drill. 
                   Wait, the dict object doesn't have lang. 
                   I will assume 'ja' or 'ko' based on the text detection or pass lang prop.
                   Let's check parent component. page.tsx passes dict.
                   
                   Better approach: Just use window.location or similar? No, separate server component.
                   I should update the component signature to include lang.
               */}
               <Link href={`/${lang}/company/nihon-kiko`} className={styles.learnMoreBtn}>
                  {dict.company.partnership.learnMore}
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
