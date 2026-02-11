"use client";

import { useState } from "react";
import styles from "./Team.module.css";
import { Dictionary } from "../types";

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  bio?: string;
  education?: string;
  experience?: string;
}

export default function Team({ dict }: { dict: Dictionary }) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className={styles.team} id="team">
      <div className="container">
        <h2 className={styles.title}>{dict.team.title}</h2>
        <p className={styles.subtitle}>{dict.team.subtitle}</p>
        
        {/* Team Members */}
        <div className={styles.grid}>
          {dict.team.members.map((member, index) => (
            <div key={index} className={styles.card} onClick={() => openModal(member)}>
              <div className={styles.avatarPlaceholder}>
                {member.name.charAt(0)}
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.expertise}>{member.expertise}</p>
              <div className={styles.cardHover}>자세히 보기</div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedMember && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            
            <div className={styles.modalHeader}>
              <div className={styles.modalAvatar}>
                {selectedMember.name.charAt(0)}
              </div>
              <h2 className={styles.modalName}>{selectedMember.name}</h2>
              <p className={styles.modalRole}>{selectedMember.role}</p>
            </div>

            <div className={styles.modalBody}>
              {selectedMember.bio && (
                <div className={styles.modalSection}>
                  <h3>소개</h3>
                  <p>{selectedMember.bio}</p>
                </div>
              )}

              {selectedMember.education && (
                <div className={styles.modalSection}>
                  <h3>학력</h3>
                  <p>{selectedMember.education}</p>
                </div>
              )}

              {selectedMember.experience && (
                <div className={styles.modalSection}>
                  <h3>경력</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{selectedMember.experience}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
