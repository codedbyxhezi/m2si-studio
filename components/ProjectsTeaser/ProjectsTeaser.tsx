import Image from "next/image";
import Link from "next/link";

import styles from "./ProjectsTeaser.module.css";

const projects = {
  desktop: {
    image: "/images/projects/glow-desktop.png",
    title: "Real2Own",
    url: "real2own.vercel.app",
  },
  tablet: {
    image: "/images/projects/glow-tablet.png",
    title: "Glow Nailstudio",
  },
  mobile: {
    image: "/images/projects/glow-mobile.png",
    title: "Bashkim Tours",
  },
};

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
          Digitale Erlebnisse, die auf Desktop, Tablet und Smartphone
          gleichermaßen überzeugen.
        </p>

        <div className={styles.devices} aria-label="Unterstützte Geräte">
          <span>Desktop</span>
          <span>Tablet</span>
          <span>Mobile</span>
        </div>

        <Link className={styles.button} href="/projekte">
          Alle Projekte ansehen
        </Link>
      </div>

      <figure
        className={styles.stage}
        aria-label="Ausgewählte Projekte auf verschiedenen Geräten"
      >
        <div className={styles.stageGlow} aria-hidden="true" />
        <div className={styles.grid} aria-hidden="true" />

        <div className={styles.desktop}>
          <div className={styles.browserBar}>
            <div className={styles.browserDots} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <span className={styles.address}>
              {projects.desktop.url}
            </span>

            <span className={styles.browserAction} aria-hidden="true" />
          </div>

          <div className={styles.desktopScreen}>
            <Image
              src={projects.desktop.image}
              alt={`${projects.desktop.title} auf einem Desktop-Bildschirm`}
              fill
              priority={false}
              sizes="(max-width: 700px) 88vw, (max-width: 1050px) 82vw, 48vw"
              className={styles.desktopImage}
            />

            <div className={styles.screenOverlay} />
          </div>

          <div className={styles.desktopBase} aria-hidden="true">
            <span />
          </div>
        </div>

        <div className={styles.tablet}>
          <div className={styles.tabletFrame}>
            <span className={styles.tabletCamera} aria-hidden="true" />

            <div className={styles.tabletScreen}>
              <Image
                src={projects.tablet.image}
                alt={`${projects.tablet.title} auf einem Tablet`}
                fill
                sizes="(max-width: 700px) 36vw, 24vw"
                className={styles.tabletImage}
              />

              <div className={styles.screenOverlay} />
            </div>
          </div>

          <span className={styles.deviceLabel}>
            {projects.tablet.title}
          </span>
        </div>

        <div className={styles.phone}>
          <div className={styles.phoneFrame}>
            <span className={styles.phoneSpeaker} aria-hidden="true" />

            <div className={styles.phoneScreen}>
              <Image
                src={projects.mobile.image}
                alt={`${projects.mobile.title} auf einem Smartphone`}
                fill
                sizes="(max-width: 700px) 24vw, 14vw"
                className={styles.phoneImage}
              />

              <div className={styles.screenOverlay} />
            </div>

            <span className={styles.phoneHome} aria-hidden="true" />
          </div>

          <span className={styles.deviceLabel}>
            {projects.mobile.title}
          </span>
        </div>

        <figcaption className={styles.caption}>
          <span aria-hidden="true" />
          Ausgewählte Projekte · Responsive
        </figcaption>
      </figure>
    </section>
  );
}