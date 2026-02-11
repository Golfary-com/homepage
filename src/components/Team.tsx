"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Team.module.css";
import { Dictionary } from "../types";

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  image?: string;
  bio?: string;
  education?: string;
  experience?: string;
}

export default function Team({ dict }: { dict: Dictionary }) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.team} ${isVisible ? styles.visible : ''}`} 
      id="team"
    >
      <div className="container">
        <h2 className={styles.title}>{dict.team.title}</h2>
        <p className={styles.subtitle}>{dict.team.subtitle}</p>
        
        {/* Team Members */}
        <div className={styles.grid}>
          {dict.team.members.map((member, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => openModal(member)}
            >
              {member.image ? (
                <div className={styles.avatarImage}>
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={400}
                    height={280}
                    className={styles.profileImage}
                  />
                </div>
              ) : (
                <div className={styles.avatarPlaceholder}>
                  {member.name.charAt(0)}
                </div>
              )}
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.expertise}>{member.expertise}</p>
              <div className={styles.cardHover}>{dict.team.viewDetails}</div>
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
              {selectedMember.image ? (
                <div className={styles.modalAvatarImage}>
                  <Image 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    width={140}
                    height={140}
                    className={styles.modalProfileImage}
                  />
                </div>
              ) : (
                <div className={styles.modalAvatar}>
                  {selectedMember.name.charAt(0)}
                </div>
              )}
              <h2 className={styles.modalName}>{selectedMember.name}</h2>
              <p className={styles.modalRole}>{selectedMember.role}</p>
            </div>

            <div className={styles.modalBody}>
              {selectedMember.bio && (
                <div className={styles.modalSection}>
                  <h3>{dict.team.bioTitle}</h3>
                  <p>{selectedMember.bio}</p>
                </div>
              )}

              {selectedMember.education && (
                <div className={styles.modalSection}>
                  <h3>{dict.team.educationTitle}</h3>
                  <p>{selectedMember.education}</p>
                </div>
              )}

              {selectedMember.experience && (
                <div className={styles.modalSection}>
                  <h3>{dict.team.experienceTitle}</h3>
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
