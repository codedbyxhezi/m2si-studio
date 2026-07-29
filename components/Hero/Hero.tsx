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