import Image from "next/image";
import styles from "./ProjectsHero.module.css";

export default function ProjectsHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="projects-hero-title"
    >
      <Image
        className={styles.background}
        src="/images/editorial/projects-hero.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Selected Work · M²SI Studio</p>

        <h1 id="projects-hero-title">
          Digitale Auftritte
          <br />
          mit Charakter.
        </h1>

        <p className={styles.subtitle}>
          Design · Development · Responsive
        </p>

        <a className={styles.cta} href="#projektarchiv">
          Projekte entdecken
        </a>
      </div>

      <div className={styles.status}>
        <span />
        Sechs ausgewählte Projekte · 2026
      </div>

      <p className={styles.scrollHint}>Case Studies & Live-Projekte</p>
    </section>
  );
}