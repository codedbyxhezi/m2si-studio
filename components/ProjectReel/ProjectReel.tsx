"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";
import styles from "./ProjectReel.module.css";

export default function ProjectReel() {
  const [flippedProject, setFlippedProject] = useState<string | null>(null);

  function toggleProject(slug: string) {
    setFlippedProject((current) => (current === slug ? null : slug));
  }

  return (
    <section
      className={styles.section}
      id="projektarchiv"
      aria-labelledby="project-grid-title"
    >
      <div className={styles.heading}>
        <div>
          <p className={styles.kicker}>Projektarchiv</p>

          <h2 id="project-grid-title">
            Design trifft
            <br />
            <em>Entwicklung.</em>
          </h2>
        </div>

        <p className={styles.introduction}>
          Entdecke ausgewählte Projekte. Fahre mit dem Cursor über eine Card
          oder tippe sie an, um mehr zu erfahren.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => {
          const isFlipped = flippedProject === project.slug;

          return (
            <article
              className={`${styles.card} ${
                isFlipped ? styles.isFlipped : ""
              }`}
              key={project.slug}
              onMouseEnter={() => setFlippedProject(project.slug)}
              onMouseLeave={() =>
                setFlippedProject((current) =>
                  current === project.slug ? null : current
                )
              }
            >
              <div className={styles.cardInner}>
                <button
                  className={styles.cardFront}
                  type="button"
                  onClick={() => toggleProject(project.slug)}
                  aria-label={`Informationen zu ${project.name} anzeigen`}
                  aria-pressed={isFlipped}
                >
                  <div className={styles.stage}>
                    <div className={styles.glow} aria-hidden="true" />

                    <div className={styles.desktop}>
                      <div className={styles.browserBar}>
                        <span
                          className={styles.browserDots}
                          aria-hidden="true"
                        >
                          <i />
                          <i />
                          <i />
                        </span>

                        <span className={styles.address}>
                          {project.liveUrl
                            .replace("https://", "")
                            .replace(/\/$/, "")}
                        </span>
                      </div>

                      <div className={styles.desktopScreen}>
                        <Image
                          src={project.images.desktop}
                          alt={`Desktopansicht von ${project.name}`}
                          fill
                          sizes="(max-width: 700px) 84vw, (max-width: 1100px) 42vw, 28vw"
                          className={styles.projectImage}
                        />
                      </div>
                    </div>

                    <div className={styles.tablet} aria-hidden="true">
                      <span className={styles.tabletCamera} />

                      <div className={styles.tabletScreen}>
                        <Image
                          src={project.images.tablet}
                          alt=""
                          fill
                          sizes="(max-width: 700px) 29vw, 9vw"
                          className={styles.projectImage}
                        />
                      </div>
                    </div>

                    <div className={styles.phone} aria-hidden="true">
                      <span className={styles.phoneSpeaker} />

                      <div className={styles.phoneScreen}>
                        <Image
                          src={project.images.mobile}
                          alt=""
                          fill
                          sizes="(max-width: 700px) 16vw, 5vw"
                          className={styles.projectImage}
                        />
                      </div>
                    </div>

                    <span className={styles.cardIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>

                <div className={styles.cardBack}>
                  <div className={styles.backTopline}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.year}</span>
                  </div>

                  <div className={styles.backContent}>
                    <p className={styles.category}>{project.category}</p>

                    <h3>{project.name}</h3>

                    <p className={styles.description}>
                      {project.description}
                    </p>

                    <ul
                      className={styles.services}
                      aria-label={`Leistungen für ${project.name}`}
                    >
                      {project.technologies.slice(0, 3).map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>

                    <Link
                      className={styles.projectButton}
                      href={`/projekte/${project.slug}`}
                    >
                      Projekt ansehen
                    </Link>
                  </div>

                  <button
                    className={styles.flipBack}
                    type="button"
                    onClick={() => toggleProject(project.slug)}
                  >
                    Zurück zur Vorschau
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}