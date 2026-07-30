import styles from "./Footer.module.css";

const navigation = [
  { label: "Startseite", href: "/" },
  { label: "Projekte", href: "/projekte" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Studio", href: "/studio" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/DEIN_PROFIL",
  },
  {
    label: "GitHub",
    href: "https://github.com/codedbyxhezi?tab=repositories",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/DEIN_PROFIL",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.brand}>
          <a href="/" aria-label="MSI Studio – Startseite">
            <span>M²SI</span>
            <small>Studio</small>
          </a>

          <p>
            Fullstack Development und digitales Design für moderne Websites
            und Webanwendungen.
          </p>
        </div>

        <nav className={styles.column} aria-label="Footer-Navigation">
          <p className={styles.columnTitle}>Navigation</p>

          <div className={styles.links}>
            {navigation.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className={styles.column}>
          <p className={styles.columnTitle}>Kontakt</p>

          <div className={styles.contact}>
            <p>Du hast ein Projekt oder eine Idee?</p>

            <a href="/kontakt">Kontakt aufnehmen</a>

            <span>
              <i />
              Verfügbar für neue Projekte
            </span>
          </div>
        </div>

        <div className={styles.column}>
          <p className={styles.columnTitle}>Social Media</p>

          <div className={styles.links}>
            {socialLinks.map((social) => (
              <a
                href={social.href}
                key={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 MSI Studio. Alle Rechte vorbehalten.</p>

        <nav className={styles.legal} aria-label="Rechtliche Informationen">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </nav>

        <a className={styles.toTop} href="/#top">
          Nach oben
        </a>
      </div>
    </footer>
  );
}