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

export default function About() {
  return (
    <section className={styles.section} id="ueber-mich" aria-labelledby="about-title">
      <div className={styles.label}>
        <span>Über mich</span>
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
            Als Fullstack Webdeveloper und Designer begleite ich digitale Projekte
            ganzheitlich. Dabei übersetze ich komplexe Anforderungen in klare,
            zugängliche und visuell starke Erlebnisse.
          </p>
          <p>
            Mein Anspruch: Details, die sich bewusst anfühlen – und Technik, die
            im Hintergrund zuverlässig ihren Job macht.
          </p>
        </div>
      </div>

      <div className={styles.stack} aria-label="Technologien und Kompetenzen">
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
  );
}
