import Image from "next/image";
import styles from "./HomeNavigation.module.css";

const destinations = [
  {
    number: "01",
    eyebrow: "Was ich mache",
    title: "Design & Entwicklung.",
    tags: "Strategie · UX/UI · Fullstack",
    linkText: "Leistungen ansehen",
    href: "/leistungen",
    image: "/images/editorial/editorial-process-strip.webp",
  },
  {
    number: "02",
    eyebrow: "Wer dahintersteht",
    title: "Ideen mit Haltung.",
    tags: "Studio · Prozess · Persönlichkeit",
    linkText: "Studio kennenlernen",
    href: "/studio",
    image: "/images/editorial/hero-cinematic.webp",
  },
];

export default function HomeNavigation() {
  return (
    <section
      className={styles.section}
      aria-labelledby="home-navigation-title"
    >
      <header className={styles.header}>
        <p id="home-navigation-title">MSI Studio entdecken</p>
        <span>Zwei Bereiche · Eine klare Richtung</span>
      </header>

      <div className={styles.cards}>
        {destinations.map((destination) => (
          <a
            className={styles.card}
            href={destination.href}
            key={destination.href}
          >
            <Image
              className={styles.background}
              src={destination.image}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />

            <div className={styles.overlay} />
            <div className={styles.redGlow} />

            <div className={styles.cardHeader}>
              <span>{destination.number}</span>
              <p>{destination.eyebrow}</p>
            </div>

            <div className={styles.cardContent}>
              <p className={styles.tags}>{destination.tags}</p>

              <h2>{destination.title}</h2>

              <span className={styles.cardButton}>
                {destination.linkText}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}