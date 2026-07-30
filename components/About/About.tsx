import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "CSS Modules",
  "Figma",
  "Responsive Design",
  "Accessibility",
  "Performance",
];

const principles = [
  {
    number: "01",
    title: "Klarheit",
    text: "Komplexe Anforderungen werden in verständliche Strukturen und klare Nutzerwege übersetzt.",
  },
  {
    number: "02",
    title: "Charakter",
    text: "Jedes Projekt erhält eine eigene visuelle Identität, die zur Marke und Zielgruppe passt.",
  },
  {
    number: "03",
    title: "Präzision",
    text: "Design, Code und responsive Verhalten werden bis ins Detail aufeinander abgestimmt.",
  },
];

export default function About() {
  return (
    <>
      <section
        className={styles.hero}
        aria-labelledby="studio-hero-title"
      >
        <Image
          className={styles.heroBackground}
          src="/images/editorial/studio-hero.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>
            Fullstack Developer & Designer
          </p>

          <h1 id="studio-hero-title">
            Ein Studio für
            <br />
            Design & Code.
          </h1>

          <p className={styles.heroStack}>
            Klar gedacht · präzise gestaltet · sauber entwickelt
          </p>

          <a className={styles.heroButton} href="#ueber-mich">
            Studio kennenlernen
          </a>
        </div>

        <div className={styles.heroStatus}>
          <span />
          M²SI Studio · Deutschland
        </div>

        <p className={styles.heroHint}>Digital Design & Development</p>
      </section>

      <section
        className={styles.about}
        id="ueber-mich"
        aria-labelledby="about-title"
      >
        <div className={styles.label}>
          <span>Über das Studio</span>
          <i />
        </div>

        <div className={styles.content}>
          <h2 id="about-title">
            Ich denke in Systemen,
            <br />
            gestalte mit Gefühl und
            <br />
            entwickle mit <em>Präzision.</em>
          </h2>

          <div className={styles.copy}>
            <p>
              Als Fullstack Webdeveloper und Designer begleite ich digitale
              Projekte ganzheitlich. Dabei übersetze ich komplexe
              Anforderungen in klare, zugängliche und visuell starke
              Erlebnisse.
            </p>

            <p>
              Mein Anspruch sind Details, die sich bewusst anfühlen – und
              Technik, die im Hintergrund zuverlässig ihren Job macht.
            </p>
          </div>
        </div>

        <div
          className={styles.stack}
          aria-label="Technologien und Kompetenzen"
        >
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className={styles.facts}>
          <div>
            <strong>06</strong>
            <span>Live-Projekte</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Disziplinen · Design & Code</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Responsive gedacht</span>
          </div>
        </div>
      </section>

      <section
        className={styles.principles}
        aria-labelledby="principles-title"
      >
        <div className={styles.principlesHeading}>
          <div>
            <p className={styles.principlesKicker}>Arbeitsweise</p>

            <h2 id="principles-title">
              Was jedes Projekt
              <br />
              <em>antreibt.</em>
            </h2>
          </div>

          <p>
            Gute digitale Produkte entstehen dort, wo Gestaltung,
            Nutzerführung und technische Qualität gemeinsam gedacht werden.
          </p>
        </div>

        <div className={styles.principlesGrid}>
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <div>
          <p className={styles.contactLabel}>Zusammenarbeiten</p>

          <h2>
            Eine Idee im
            <br />
            <em>Kopf?</em>
          </h2>
        </div>

        <Link className={styles.contactButton} href="/kontakt">
          Projekt besprechen
        </Link>
      </section>
    </>
  );
}