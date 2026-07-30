"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  solid?: boolean;
};

type SocialIconName = "instagram" | "github" | "linkedin";

const leftLinks = [
  { href: "/projekte", label: "Projekte" },
  { href: "/leistungen", label: "Leistungen" },
];

const rightLinks = [
  { href: "/studio", label: "Studio" },
  { href: "/kontakt", label: "Kontakt" },
];

const mobileLinks = [
  { href: "/projekte", label: "Projekte" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/studio", label: "Studio" },
];

const socialLinks: {
  label: string;
  href: string;
  icon: SocialIconName;
}[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/DEIN_PROFIL",
    icon: "instagram",
  },
  {
    label: "GitHub",
    href: "https://github.com/DEIN_PROFIL",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/DEIN_PROFIL",
    icon: "linkedin",
  },
];

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle className={styles.iconFill} cx="17.4" cy="6.7" r="1" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          className={styles.iconFill}
          d="M12 2.2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2.2Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.2" y="9" width="4" height="11.8" />
      <circle className={styles.iconFill} cx="5.2" cy="5.2" r="2.2" />
      <path d="M11 20.8V9h3.8v1.65c.78-1.25 2.04-2.05 3.83-2.05 3.26 0 4.17 2.13 4.17 5.45v6.75h-4v-6c0-1.45-.3-2.85-1.95-2.85-1.73 0-2.05 1.35-2.05 2.75v6.1H11Z" />
    </svg>
  );
}

export default function Header({ solid = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const closeOnDesktop = () => {
      if (window.innerWidth > 760) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`${styles.header} ${
        solid || scrolled ? styles.scrolled : ""
      } ${open ? styles.open : ""}`}
    >
      <nav className={styles.nav} aria-label="Hauptnavigation">
        <div className={styles.sideNav}>
          {leftLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          className={styles.brand}
          href="/#top"
          aria-label="MSI Studio – zur Startseite"
          onClick={closeMenu}
        >
          <span>M²SI</span>
          <small>Design & Developing</small>
        </a>

        <div className={`${styles.sideNav} ${styles.sideNavRight}`}>
          {rightLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
        >
          <span>{open ? "Schließen" : "Menü"}</span>

          <i aria-hidden="true">
            <b />
            <b />
          </i>
        </button>
      </nav>

      <div
        className={styles.mobileMenu}
        id="mobile-menu"
        aria-hidden={!open}
      >
        <div className={styles.menuGlow} />

        <div className={styles.mobileLinks}>
          {mobileLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{link.label}</strong>
            </a>
          ))}
        </div>

        <div className={styles.menuFooter}>
          <a
            className={styles.contactButton}
            href="/kontakt"
            onClick={closeMenu}
            tabIndex={open ? 0 : -1}
          >
            Projekt besprechen
          </a>

          <div className={styles.footerMeta}>
            <p>
              <span className={styles.statusDot} />
              Verfügbar für neue Projekte
            </p>

            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  className={styles.socialLink}
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  tabIndex={open ? 0 : -1}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}