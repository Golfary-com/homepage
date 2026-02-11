"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";
import { Dictionary } from "../types";
import Image from "next/image";

export default function Services({ dict }: { dict: Dictionary }) {
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

  const services = [
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
        <h2 className={styles.title}>{dict.services.title}</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
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
