import Image from "next/image";
import styles from "./ProjectsTeaser.module.css";

export default function ProjectsTeaser() {
  return (
    <section
      className={styles.section}
      id="projekte"
      aria-labelledby="projects-teaser-title"
    >
      <div className={styles.content}>
        <p className={styles.kicker}>Responsive Webdesign</p>

        <h2 id="projects-teaser-title">
          Stark auf
          <br />
          <em>jedem Screen.</em>
        </h2>

        <p className={styles.description}>
          Responsive Websites für Desktop, Tablet und Smartphone – schnell,
          klar und einfach zu bedienen.
        </p>

        <div className={styles.devices}>
          <span>Desktop</span>
          <span>Tablet</span>
          <span>Mobile</span>
        </div>

        <a className={styles.button} href="/projekte">
          Alle Projekte ansehen
        </a>
      </div>

      <figure
        className={styles.stage}
        aria-label="Responsive Website auf Desktop, Tablet und Smartphone"
      >
        <div className={styles.glow} />

        <div className={styles.desktop}>
          <div className={styles.browserBar}>
            <span className={styles.browserDots}>
              <i />
              <i />
              <i />
            </span>

            <span className={styles.address}>real2own.vercel.app</span>
          </div>

          <div className={styles.desktopScreen}>
            <Image
              src="/images/projects/real2own.jpg"
              alt="Projektansicht auf einem Desktop-Bildschirm"
              fill
              sizes="(max-width: 900px) 90vw, 52vw"
            />
          </div>
        </div>

        <div className={styles.tablet} aria-hidden="true">
          <div className={styles.tabletCamera} />

          <div className={styles.tabletScreen}>
            <Image
              src="/images/projects/real2own.jpg"
              alt=""
              fill
              sizes="30vw"
            />
          </div>
        </div>

        <div className={styles.phone} aria-hidden="true">
          <div className={styles.phoneSpeaker} />

          <div className={styles.phoneScreen}>
            <Image
              src="/images/projects/real2own.jpg"
              alt=""
              fill
              sizes="18vw"
            />
          </div>

          <div className={styles.phoneHome} />
        </div>

        <figcaption>
          <span />
          Responsive by default
        </figcaption>
      </figure>
    </section>
  );
}