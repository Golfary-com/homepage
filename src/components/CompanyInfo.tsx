import styles from "./CompanyInfo.module.css";
import { Dictionary } from "../types";

export default function CompanyInfo({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.company} id="company">
      <div className="container">
        <h2 className={styles.title}>{dict.company.info.title}</h2>
        <div className={styles.content}>
          <div className={styles.infoBlock}>
            <h3>Golfary Inc.</h3>
            <ul>
              <li>{dict.company.info.address}</li>
              <li>{dict.company.info.capital}</li>
              <li>Representive: Jichul Kim</li>
            </ul>
          </div>
          <div className={styles.teamBlock}>
             <h3>{dict.company.info.team}</h3>
             {/* Placeholder for team members */}
             <div className={styles.members}>
                <div className={styles.member}>CEO</div>
                <div className={styles.member}>CTO</div>
                <div className={styles.member}>COO</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
