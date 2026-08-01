import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <Image
        className={styles.background}
        src="/images/editorial/hero-cinematic.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
      />

      <div className={styles.overlay} />
      <div className={styles.journey} aria-hidden="true">
        <span className={`${styles.journeyLabel} ${styles.designLabel}`}>
          Design
        </span>

        <svg
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
        >
          <path
            className={styles.journeyPath}
            d="M 70 380 C 280 440, 580 150, 930 205"
          />

          <g className={styles.journeyDot}>
            <circle className={styles.dotGlow} r="11" />
            <circle className={styles.dotCore} r="3" />

            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M 70 380 C 280 440, 580 150, 930 205"
              keyPoints="0;1;0"
              keyTimes="0;0.5;1"
              calcMode="spline"
              keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
            />
          </g>
        </svg>

        <span className={`${styles.journeyLabel} ${styles.codeLabel}`}>
          Development
        </span>
      </div>
      <div className={styles.content}>
        <p className={styles.eyebrow}>
          Fullstack Developer & Designer
        </p>

        <h1 id="hero-title">
          Digitale Produkte
          <br />
          aus Design & Code.
        </h1>

        <p className={styles.stack}>
          Next.js · TypeScript · UX/UI
        </p>

        <a className={styles.cta} href="/projekte">
          Ausgewählte Projekte
        </a>
      </div>

      <div className={styles.status}>
        <span />
        Verfügbar für neue Projekte · 2026
      </div>

      <p className={styles.scrollHint}>
        Scrollen, um mehr zu entdecken
      </p>
    </section>
  );
}