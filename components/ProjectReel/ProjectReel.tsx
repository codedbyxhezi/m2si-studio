import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./ProjectReel.module.css";

const projects = [
  {
    name: "Bashkim Tours",
    category: "Travel & Booking",
    description:
      "Eine mehrsprachige Reiseplattform mit klarer Buchungsführung und direktem Zugang zu Routen und Fahrplänen.",
    image: "/images/projects/bashkim-tours.jpg",
    url: "https://bashkim-tours.vercel.app/",
    tone: "#f0b319",
  },
  {
    name: "Glow Nailstudio",
    category: "Beauty & Local Business",
    description:
      "Eine elegante Markenwelt für ein Nailstudio – atmosphärisch, persönlich und konsequent auf Terminbuchungen ausgerichtet.",
    image: "/images/projects/glow-nailstudio.jpg",
    url: "https://glow-nailstudio.vercel.app/",
    tone: "#c79a55",
  },
  {
    name: "Real2Own",
    category: "Real Estate Platform",
    description:
      "Eine internationale Immobilienplattform mit kuratierter Suche, hochwertigen Exposés und einem klaren Premium-Auftritt.",
    image: "/images/projects/real2own.jpg",
    url: "https://real2own.vercel.app/",
    tone: "#c9a77b",
  },
  {
    name: "Haartraum",
    category: "Salon & Booking",
    description:
      "Ein hochwertiges Salon-Erlebnis, das Leistungen, Handwerk und den direkten Weg zum Termin miteinander verbindet.",
    image: "/images/projects/haartraum-friseur.jpg",
    url: "https://haartraum-friseur.vercel.app/",
    tone: "#d6a452",
  },
  {
    name: "ALUROL",
    category: "Industry & Product",
    description:
      "Ein responsiver, mehrsprachiger Unternehmensauftritt für moderne Beschattungssysteme mit klarem Produktfokus.",
    image: "/images/projects/alurol.jpg",
    url: "https://alurol.vercel.app/",
    tone: "#19bcd4",
  },
  {
    name: "Invento Furniture",
    category: "Interior & Furniture",
    description:
      "Eine ruhige, bildstarke Präsentation für maßgefertigte Küchen – von der Kollektion bis zur Kontaktanfrage.",
    image: "/images/projects/invento-furniture.jpg",
    url: "https://invento-furniture.vercel.app/",
    tone: "#9f7a3f",
  },
];

const responsiveFeatures = [
  {
    title: "Desktop",
    text: "Für große Screens",
    iconClass: "desktopIcon",
  },
  {
    title: "Tablet",
    text: "Flexibles Layout",
    iconClass: "tabletIcon",
  },
  {
    title: "Mobile",
    text: "Touch-optimiert",
    iconClass: "mobileIcon",
  },
];

export default function ProjectReel() {
  return (
    <section
      className={styles.section}
      id="projekte"
      aria-labelledby="projects-title"
    >
      <div className={styles.introduction}>
        <div>
          <p className={styles.kicker}>Selected Work · Responsive by default</p>

          <h2 id="projects-title">
            Ein Projekt.
            <br />
            <em>Jede Bildschirmgröße.</em>
          </h2>
        </div>

        <p className={styles.introText}>
          Jede Website wird von Anfang an für Desktop, Tablet und Smartphone
          entwickelt. Damit deine Marke überall professionell wirkt und
          Besucher auf jedem Gerät ihr Ziel erreichen.
        </p>
      </div>

      <div className={styles.responsiveOverview}>
        {responsiveFeatures.map((feature) => (
          <div className={styles.responsiveItem} key={feature.title}>
            <span
              className={`${styles.deviceIcon} ${
                styles[feature.iconClass as keyof typeof styles]
              }`}
              aria-hidden="true"
            />

            <div>
              <strong>{feature.title}</strong>
              <span>{feature.text}</span>
            </div>
          </div>
        ))}

        <p className={styles.responsivePromise}>
          Responsive Design gehört bei jedem Projekt zum Standard.
        </p>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <article
            className={styles.project}
            key={project.name}
            style={
              {
                "--project-accent": project.tone,
              } as CSSProperties
            }
          >
            <div className={styles.projectContent}>
              <div className={styles.projectNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className={styles.category}>{project.category}</p>

              <h3>{project.name}</h3>

              <p className={styles.description}>{project.description}</p>

              <ul className={styles.featureList}>
                <li>Responsive User Interface</li>
                <li>Optimiert für Touch-Geräte</li>
                <li>Klare Nutzerführung</li>
              </ul>

              <a
                className={styles.projectButton}
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                Projekt live ansehen
              </a>
            </div>

            <figure
              className={styles.deviceStage}
              aria-label={`${project.name} auf Desktop, Tablet und Smartphone`}
            >
              <div className={styles.stageGlow} />

              <div className={styles.desktopDevice}>
                <div className={styles.browserBar}>
                  <span className={styles.browserDots}>
                    <i />
                    <i />
                    <i />
                  </span>

                  <span className={styles.browserAddress}>
                    {project.url.replace("https://", "").replace("/", "")}
                  </span>
                </div>

                <div className={styles.desktopScreen}>
                  <Image
                    src={project.image}
                    alt={`Desktop-Ansicht von ${project.name}`}
                    fill
                    sizes="(max-width: 1050px) 90vw, 52vw"
                  />
                </div>
              </div>

              <div className={styles.tabletDevice} aria-hidden="true">
                <div className={styles.tabletCamera} />

                <div className={styles.tabletScreen}>
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="30vw"
                  />
                </div>
              </div>

              <div className={styles.phoneDevice} aria-hidden="true">
                <div className={styles.phoneSpeaker} />

                <div className={styles.phoneScreen}>
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="18vw"
                  />
                </div>

                <div className={styles.phoneHome} />
              </div>

              <figcaption>
                <span />
                Desktop · Tablet · Mobile
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}