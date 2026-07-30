import Image from "next/image";
import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Fullstack Development",
    text: "Performante Websites und Web-Apps mit einer technischen Basis, die schnell, wartbar und langfristig erweiterbar bleibt.",
    items: [
      "Frontend Engineering",
      "API & Integration",
      "Performance",
      "Technical SEO",
    ],
  },
  {
    number: "02",
    title: "UX/UI Design",
    text: "Digitale Oberflächen mit klarer Hierarchie, konsistenten Systemen und einer Designsprache, die zur Marke passt.",
    items: [
      "Art Direction",
      "Interface Design",
      "Design Systems",
      "Prototyping",
    ],
  },
  {
    number: "03",
    title: "Von Idee bis Launch",
    text: "Ein durchgängiger Prozess mit kurzen Wegen – von der ersten Struktur über das Design bis zum stabilen Release.",
    items: [
      "Konzeption",
      "Responsive Umsetzung",
      "Quality Assurance",
      "Deployment",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Verstehen",
    text: "Ziele, Zielgruppe und Anforderungen klären.",
  },
  {
    number: "02",
    title: "Gestalten",
    text: "Struktur und visuelle Richtung entwickeln.",
  },
  {
    number: "03",
    title: "Entwickeln",
    text: "Design performant und responsiv umsetzen.",
  },
  {
    number: "04",
    title: "Veröffentlichen",
    text: "Testen, optimieren und zuverlässig launchen.",
  },
];

export default function Services() {
  return (
    <>
      <section
        className={styles.hero}
        aria-labelledby="services-hero-title"
      >
        <Image
          className={styles.heroBackground}
          src="/images/services-hero.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>
            Webdesign & Fullstack Development
          </p>

          <h1 id="services-hero-title">
            Strategie. Design.
            <br />
            Entwicklung.
          </h1>

          <p className={styles.heroStack}>
            Von der ersten Idee bis zum fertigen Produkt
          </p>

          <a className={styles.heroButton} href="#leistungen">
            Leistungen entdecken
          </a>
        </div>

        <div className={styles.heroStatus}>
          <span />
          Individuelle digitale Lösungen
        </div>

        <p className={styles.heroHint}>Design und Code aus einer Hand</p>
      </section>

      <section
        className={styles.section}
        id="leistungen"
        aria-labelledby="services-title"
      >
        <div className={styles.intro}>
          <div>
            <p className={styles.kicker}>Leistungen</p>

            <h2 id="services-title">
              Ein Partner für
              <br />
              <em>Design und Code.</em>
            </h2>
          </div>

          <p className={styles.introCopy}>
            Weniger Übergaben, mehr Klarheit: Strategie, Gestaltung und
            Entwicklung greifen von Anfang an ineinander.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.number}>
              <div className={styles.cardTopline}>
                <span>{service.number}</span>
                <span>M²SI Studio</span>
              </div>

              <div className={styles.cardContent}>
                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.process}
        aria-labelledby="process-title"
      >
        <div className={styles.processHeading}>
          <div>
            <p className={styles.processKicker}>Der Prozess</p>

            <h2 id="process-title">
              Klar geführt.
              <br />
              <em>Sauber umgesetzt.</em>
            </h2>
          </div>

          <p>
            Ein transparenter Ablauf schafft Sicherheit und hält das Projekt
            vom ersten Gespräch bis zum Launch auf Kurs.
          </p>
        </div>

        <div className={styles.processGrid}>
          {process.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <div>
          <p className={styles.contactLabel}>Projekt starten</p>

          <h2>
            Lass uns etwas
            <br />
            <em>Starkes bauen.</em>
          </h2>
        </div>

        <Link className={styles.contactButton} href="/kontakt">
          Projekt anfragen
        </Link>
      </section>
    </>
  );
}