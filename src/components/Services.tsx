"use client";

import Image from "next/image";
import styles from "./Services.module.css";
import { Dictionary, ServiceItem } from "../types";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Services({ dict }: { dict: Dictionary }) {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>();

  const services: ServiceItem[] = [
    {
      image: "/images/golf-course.jpg",
      alt: "Golf Course",
      title: dict.services.course.title,
      desc: dict.services.course.desc
    },
    {
      image: "/images/travel-route.jpg",
      alt: "Travel Route",
      title: dict.services.travel.title,
      desc: dict.services.travel.desc
    },
    {
      image: "/images/schedule-planning.jpg",
      alt: "Schedule Planning",
      title: dict.services.schedule.title,
      desc: dict.services.schedule.desc
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.services} ${isVisible ? styles.visible : ''}`} 
      id="services"
    >
      <div className="container">
        <h2 className={`${styles.title} gradient-text`}>{dict.services.title}</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              tabIndex={0} // Enable focus on mobile/keyboard
              role="button" // Semantics
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={800}
                  height={600}
                  className={styles.image}
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
