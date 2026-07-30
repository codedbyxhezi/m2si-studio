import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { getProject, projects } from "@/data/projects";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./ProjectDetail.module.css";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Projekt nicht gefunden | M²SI Studio",
    };
  }

  return {
    title: `${project.name} | M²SI Studio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        <section
          className={styles.hero}
          aria-label={`Projektansicht von ${project.name}`}
        >
          <Image
            className={styles.heroBackground}
            src={project.images.desktop}
            alt={`Desktopansicht der Website ${project.name}`}
            fill
            priority
            sizes="100vw"
          />

          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.headerGlass} aria-hidden="true" />

          <h1 className={styles.visuallyHidden}>{project.name}</h1>
        </section>

        <section
          className={styles.story}
          aria-labelledby="project-story-title"
        >
          <div className={styles.storyHeading}>
            <div>
              <p className={styles.kicker}>
                {project.name} · Case Study
              </p>

              <h2 id="project-story-title">
                Von der Idee
                <br />
                <em>zum Ergebnis.</em>
              </h2>
            </div>

            <p className={styles.storyIntroduction}>
              Gestaltung und Entwicklung wurden als ein gemeinsamer Prozess
              gedacht – mit einer klaren Strategie, einer konsistenten
              Designsprache und einer responsiven technischen Umsetzung.
            </p>
          </div>

          <div className={styles.storyGrid}>
            <article className={styles.storyCard}>
              <span className={styles.storyNumber}>01</span>

              <p className={styles.storyLabel}>Ausgangssituation</p>

              <h3>Die Herausforderung</h3>

              <p>{project.challenge}</p>
            </article>

            <article className={styles.storyCard}>
              <span className={styles.storyNumber}>02</span>

              <p className={styles.storyLabel}>Projektumfang</p>

              <h3>Die Anforderungen</h3>

              <ul className={styles.requirements}>
                {project.requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </article>

            <article className={styles.storyCard}>
              <span className={styles.storyNumber}>03</span>

              <p className={styles.storyLabel}>Design & Technik</p>

              <h3>Die Umsetzung</h3>

              <p>{project.solution}</p>
            </article>

            <article className={styles.storyCard}>
              <span className={styles.storyNumber}>04</span>

              <p className={styles.storyLabel}>Finaler Auftritt</p>

              <h3>Das Ergebnis</h3>

              <p>{project.result}</p>
            </article>
          </div>
        </section>

        <section
          className={styles.showcase}
          aria-labelledby="responsive-showcase-title"
        >
          <div className={styles.showcaseHeading}>
            <div>
              <p className={styles.showcaseKicker}>
                Responsive by default
              </p>

              <h2 id="responsive-showcase-title">
                Ein Design.
                <br />
                <em>Jeder Screen.</em>
              </h2>
            </div>

            <p>
              Das Interface passt sich jeder Bildschirmgröße an, ohne
              Gestaltung, Lesbarkeit oder Nutzerführung zu verlieren.
            </p>
          </div>

          <figure
            className={styles.deviceStage}
            aria-label={`${project.name} auf Desktop, Tablet und Smartphone`}
          >
            <div className={styles.deviceGlow} aria-hidden="true" />

            <div className={styles.tablet}>
              <span className={styles.tabletCamera} />

              <div className={styles.tabletScreen}>
                <Image
                  src={project.images.tablet}
                  alt={`Tabletansicht von ${project.name}`}
                  fill
                  sizes="(max-width: 760px) 23vw, 19vw"
                  className={styles.projectImage}
                />
              </div>

              <span className={styles.deviceName}>Tablet</span>
            </div>

            <div className={styles.desktop}>
              <div className={styles.browserBar}>
                <span className={styles.browserDots} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>

                <span className={styles.browserAddress}>
                  {project.liveUrl
                    .replace("https://", "")
                    .replace(/\/$/, "")}
                </span>

                <span className={styles.liveStatus}>
                  <i />
                  Live
                </span>
              </div>

              <div className={styles.desktopScreen}>
                <Image
                  src={project.images.desktop}
                  alt={`Desktopansicht von ${project.name}`}
                  fill
                  sizes="(max-width: 760px) 60vw, 56vw"
                  className={styles.projectImage}
                />
              </div>

              <span className={styles.deviceName}>Desktop</span>
            </div>

            <div className={styles.phone}>
              <span className={styles.phoneSpeaker} />

              <div className={styles.phoneScreen}>
                <Image
                  src={project.images.mobile}
                  alt={`Mobile Ansicht von ${project.name}`}
                  fill
                  sizes="(max-width: 760px) 14vw, 12vw"
                  className={styles.projectImage}
                />
              </div>

              <span className={styles.deviceName}>Mobile</span>
            </div>
          </figure>
        </section>

        <section
          className={styles.technology}
          aria-labelledby="technology-title"
        >
          <div>
            <p className={styles.kicker}>Technische Umsetzung</p>

            <h2 id="technology-title">
              Modern gebaut.
              <br />
              <em>Sauber umgesetzt.</em>
            </h2>
          </div>

          <div className={styles.technologyContent}>
            <p>
              Die technische Basis wurde auf Performance, Wartbarkeit und
              eine konsistente Darstellung auf unterschiedlichen Geräten
              ausgelegt.
            </p>

            <ul className={styles.technologyList}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.liveProject}>
          <div>
            <p className={styles.liveLabel}>Projekt entdecken</p>

            <h2>
              Überzeuge dich
              <br />
              <em>selbst.</em>
            </h2>
          </div>

          <a
            className={styles.liveButton}
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live-Projekt ansehen
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}