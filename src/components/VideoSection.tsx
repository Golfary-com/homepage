import styles from "./VideoSection.module.css";
import { Dictionary } from "../types";

export default function VideoSection({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.videoSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={`${styles.title} gradient-text`}>{dict.video.title}</h2>
          <p className={styles.subtitle}>{dict.video.subtitle}</p>
        </div>
        
        <div className={styles.ctaWrapper}>
          <a 
            href="https://golfary.streamlit.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaServices}
          >
            {dict.video.cta}
          </a>
        </div>

        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/FlvhPX3IPdc?si=tGWZUY5pzTPwRrH1"
            title="Golfary Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
