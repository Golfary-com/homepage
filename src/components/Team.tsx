import styles from "./Team.module.css";
import { Dictionary } from "../types";

export default function Team({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.team} id="team">
      <div className="container">
        <h2 className={styles.title}>{dict.team.title}</h2>
        <p className={styles.subtitle}>{dict.team.subtitle}</p>
        
        {/* Team Members */}
        <div className={styles.grid}>
          {dict.team.members.map((member, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.avatarPlaceholder}>
                {member.name.charAt(0)}
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.expertise}>{member.expertise}</p>
            </div>
          ))}
        </div>

        {/* Team Strengths */}
        <div className={styles.strengths}>
          <h3 className={styles.strengthsTitle}>{dict.team.strengthsTitle}</h3>
          <div className={styles.strengthsGrid}>
            {dict.team.strengths.map((strength, index) => (
              <div key={index} className={styles.strengthCard}>
                <div className={styles.strengthIcon}>{strength.icon}</div>
                <h4>{strength.title}</h4>
                <p>{strength.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
