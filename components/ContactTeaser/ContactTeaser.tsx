import styles from "./ContactTeaser.module.css";

export default function ContactTeaser() {
  return (
    <section
      className={styles.section}
      aria-labelledby="contact-teaser-title"
    >
      <header className={styles.meta}>
        <span>Dein nächstes Projekt</span>
        <span>MSI Studio · 2026</span>
      </header>

      <div className={styles.content}>
        <p className={styles.kicker}>Lass uns starten</p>

        <h2 id="contact-teaser-title">
          Bereit, etwas
          <br />
          <em>Starkes zu bauen?</em>
        </h2>

        <p className={styles.description}>
          Erzähl mir von deiner Idee. Gemeinsam machen wir daraus ein digitales
          Erlebnis.
        </p>

        <a className={styles.button} href="/kontakt">
          Projekt starten
        </a>
      </div>

      <footer className={styles.footer}>
        <p>
          <span />
          Verfügbar für neue Projekte
        </p>

        <span>Webdesign · Development · Digital Products</span>
      </footer>
    </section>
  );
}