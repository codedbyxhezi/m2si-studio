import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="kontakt" aria-labelledby="contact-title">
      <div className={styles.topline}>
        <span>Kontakt</span>
        <span>Verfügbar für ausgewählte Projekte</span>
      </div>

      <div className={styles.content}>
        <p>Eine Idee im Kopf?</p>
        <h2 id="contact-title">
          Lass uns etwas
          <br />
          <em>Besonderes bauen.</em>
        </h2>
        <a href="mailto:hello@dein-portfolio.de">
          Projekt anfragen <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className={styles.note}>
        <span>Antwort in der Regel innerhalb von 1–2 Werktagen.</span>
        <a href="mailto:hello@dein-portfolio.de">hello@dein-portfolio.de</a>
      </div>
    </section>
  );
}
