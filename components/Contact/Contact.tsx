"use client";

import { useState, type FormEvent } from "react";
import styles from "./Contact.module.css";

const contactEmail = "hello@dein-portfolio.de";
const contactPhone = "+49 000 00000000";
const contactStreet = "Straße und Hausnummer";
const contactCity = "00000 Ort";

const projectTypes = [
  "Neue Website",
  "Web-App",
  "Redesign",
  "Noch nicht sicher",
];

const serviceOptions = [
  "Strategie & Konzeption",
  "UX/UI Design",
  "Frontend Development",
  "Backend & APIs",
  "Komplette Umsetzung",
];

const timelineOptions = [
  "So bald wie möglich",
  "In 1–2 Monaten",
  "In 3–6 Monaten",
  "Zeitlich flexibel",
];

const budgetOptions = [
  "Unter 2.500 €",
  "2.500–5.000 €",
  "5.000–10.000 €",
  "Über 10.000 €",
  "Noch offen",
];

type FormData = {
  projectType: string;
  goal: string;
  services: string[];
  timeline: string;
  budget: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  privacy: boolean;
  website: string;
};

const initialForm: FormData = {
  projectType: "",
  goal: "",
  services: [],
  timeline: "",
  budget: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  privacy: false,
  website: "",
};

const totalSteps = 7;
const finalStep = totalSteps - 1;

export default function Contact() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const phoneLink = contactPhone.replace(/[^\d+]/g, "");
  const progress = ((step + 1) / totalSteps) * 100;

  function updateField<Key extends keyof FormData>(
    field: Key,
    value: FormData[Key],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setError("");
  }

  function toggleService(service: string) {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));

    setError("");
  }

  function isStepValid() {
    switch (step) {
      case 0:
        return Boolean(form.projectType);

      case 1:
        return form.goal.trim().length >= 10;

      case 2:
        return form.services.length > 0;

      case 3:
        return Boolean(form.timeline);

      case 4:
        return Boolean(form.budget);

      case 5:
        return (
          form.name.trim().length >= 2 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
          form.privacy
        );

      default:
        return true;
    }
  }

  function nextStep() {
    if (!isStepValid()) {
      setError("Bitte beantworte diese Frage, bevor du fortfährst.");
      return;
    }

    setError("");
    setStep((current) => Math.min(current + 1, finalStep));
  }

  function previousStep() {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  if (step !== finalStep) {
    nextStep();
    return;
  }

  setStatus("sending");
  setError("");

  window.setTimeout(() => {
    setStatus("success");
  }, 600);
}

  function resetForm() {
    setForm(initialForm);
    setStep(0);
    setStatus("idle");
    setError("");
  }

  return (
    <section
      className={styles.section}
      id="kontakt"
      aria-labelledby="contact-title"
    >
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.topline}>
        <span>Kontakt · M²SI Studio</span>

        <span className={styles.availability}>
          <i />
          Verfügbar für ausgewählte Projekte
        </span>
      </div>

      <div className={styles.layout}>
        <div className={styles.introduction}>
          <p className={styles.eyebrow}>Projektanfrage</p>

          <h1 id="contact-title">
            Erzähl mir von
            <br />
            <em>deiner Idee.</em>
          </h1>

          <p className={styles.description}>
            Beantworte ein paar kurze Fragen. So kann ich dein Projekt bereits
            vor unserem ersten Gespräch besser einschätzen.
          </p>

          <div className={styles.directDetails}>
            <a href={`mailto:${contactEmail}`}>
              <span>E-Mail</span>
              <strong>{contactEmail}</strong>
            </a>

            <a href={`tel:${phoneLink}`}>
              <span>Telefon</span>
              <strong>{contactPhone}</strong>
            </a>

            <address>
              <span>Studio</span>
              <strong>{contactStreet}</strong>
              <small>{contactCity} · Deutschland</small>
            </address>
          </div>
        </div>

        <form id="projektanfrage" className={styles.wizard} onSubmit={handleSubmit}>
          {status === "success" ? (
            <div className={styles.success}>
              <span className={styles.successMark}>✓</span>

              <p>Projektanfrage vorbereitet</p>

              <h2>
                Danke,
                <br />
                <em>{form.name}.</em>
              </h2>

              <span>
                Der Konfigurator funktioniert. Der echte E-Mail-Versand wird vor
                dem Livegang aktiviert.
              </span>

              <button type="button" onClick={resetForm}>
                Neue Anfrage starten
              </button>
            </div>
          ) : (
            <>
              <div className={styles.wizardTop}>
                <span>
                  Schritt {String(step + 1).padStart(2, "0")} /{" "}
                  {String(totalSteps).padStart(2, "0")}
                </span>

                <span>Projekt-Konfigurator</span>
              </div>

              <div
                className={styles.progress}
                aria-label={`Fortschritt ${Math.round(progress)} Prozent`}
              >
                <span style={{ width: `${progress}%` }} />
              </div>

              <div className={styles.questionArea}>
                {step === 0 && (
                  <fieldset className={styles.question}>
                    <legend>Was möchtest du umsetzen?</legend>

                    <p>Wähle die Option, die am besten zu deiner Idee passt.</p>

                    <div className={styles.options}>
                      {projectTypes.map((option) => (
                        <button
                          className={`${styles.option} ${
                            form.projectType === option
                              ? styles.optionActive
                              : ""
                          }`}
                          type="button"
                          key={option}
                          aria-pressed={form.projectType === option}
                          onClick={() =>
                            updateField("projectType", option)
                          }
                        >
                          <span>{option}</span>
                          <i aria-hidden="true" />
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 1 && (
                  <fieldset className={styles.question}>
                    <legend>Was soll das Projekt erreichen?</legend>

                    <p>
                      Beschreibe kurz dein Ziel, deine Zielgruppe oder das
                      Problem, das gelöst werden soll.
                    </p>

                    <textarea
                      className={styles.textarea}
                      value={form.goal}
                      maxLength={1200}
                      placeholder="Zum Beispiel: Wir benötigen einen modernen Auftritt, der unsere Leistungen verständlich erklärt und mehr qualifizierte Anfragen erzeugt."
                      onChange={(event) =>
                        updateField("goal", event.target.value)
                      }
                    />

                    <span className={styles.characterCount}>
                      {form.goal.length} / 1200
                    </span>
                  </fieldset>
                )}

                {step === 2 && (
                  <fieldset className={styles.question}>
                    <legend>Wobei benötigst du Unterstützung?</legend>

                    <p>Mehrere Antworten sind möglich.</p>

                    <div className={styles.options}>
                      {serviceOptions.map((option) => {
                        const selected = form.services.includes(option);

                        return (
                          <button
                            className={`${styles.option} ${
                              selected ? styles.optionActive : ""
                            }`}
                            type="button"
                            key={option}
                            aria-pressed={selected}
                            onClick={() => toggleService(option)}
                          >
                            <span>{option}</span>
                            <i aria-hidden="true" />
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                )}

                {step === 3 && (
                  <fieldset className={styles.question}>
                    <legend>Wann möchtest du starten?</legend>

                    <p>
                      Eine grobe Einschätzung reicht für den ersten Kontakt.
                    </p>

                    <div className={styles.options}>
                      {timelineOptions.map((option) => (
                        <button
                          className={`${styles.option} ${
                            form.timeline === option
                              ? styles.optionActive
                              : ""
                          }`}
                          type="button"
                          key={option}
                          aria-pressed={form.timeline === option}
                          onClick={() => updateField("timeline", option)}
                        >
                          <span>{option}</span>
                          <i aria-hidden="true" />
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 4 && (
                  <fieldset className={styles.question}>
                    <legend>Welcher Budgetrahmen ist vorgesehen?</legend>

                    <p>
                      Der Rahmen hilft dabei, Umfang und Lösung realistisch
                      einzuordnen.
                    </p>

                    <div className={styles.options}>
                      {budgetOptions.map((option) => (
                        <button
                          className={`${styles.option} ${
                            form.budget === option
                              ? styles.optionActive
                              : ""
                          }`}
                          type="button"
                          key={option}
                          aria-pressed={form.budget === option}
                          onClick={() => updateField("budget", option)}
                        >
                          <span>{option}</span>
                          <i aria-hidden="true" />
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 5 && (
                  <fieldset className={styles.question}>
                    <legend>Wie kann ich dich erreichen?</legend>

                    <p>
                      Nur Name und E-Mail-Adresse sind verpflichtend.
                    </p>

                    <div className={styles.fields}>
                      <label className={styles.field}>
                        <span>Name *</span>

                        <input
                          type="text"
                          value={form.name}
                          maxLength={80}
                          autoComplete="name"
                          placeholder="Vor- und Nachname"
                          onChange={(event) =>
                            updateField("name", event.target.value)
                          }
                        />
                      </label>

                      <label className={styles.field}>
                        <span>Unternehmen</span>

                        <input
                          type="text"
                          value={form.company}
                          maxLength={120}
                          autoComplete="organization"
                          placeholder="Optional"
                          onChange={(event) =>
                            updateField("company", event.target.value)
                          }
                        />
                      </label>

                      <label className={styles.field}>
                        <span>E-Mail *</span>

                        <input
                          type="email"
                          value={form.email}
                          maxLength={160}
                          autoComplete="email"
                          placeholder="name@unternehmen.de"
                          onChange={(event) =>
                            updateField("email", event.target.value)
                          }
                        />
                      </label>

                      <label className={styles.field}>
                        <span>Telefon</span>

                        <input
                          type="tel"
                          value={form.phone}
                          maxLength={40}
                          autoComplete="tel"
                          placeholder="Optional"
                          onChange={(event) =>
                            updateField("phone", event.target.value)
                          }
                        />
                      </label>
                    </div>

                    <label className={styles.privacy}>
                      <input
                        type="checkbox"
                        checked={form.privacy}
                        onChange={(event) =>
                          updateField("privacy", event.target.checked)
                        }
                      />

                      <span>
                        Ich stimme zu, dass meine Angaben zur Bearbeitung der
                        Anfrage verwendet werden. *
                      </span>
                    </label>
                  </fieldset>
                )}

                {step === 6 && (
                  <div className={styles.question}>
                    <p className={styles.summaryLabel}>
                      Zusammenfassung
                    </p>

                    <h2>Bereit zum Absenden?</h2>

                    <div className={styles.summary}>
                      <div>
                        <span>Projekt</span>
                        <strong>{form.projectType}</strong>
                      </div>

                      <div>
                        <span>Leistungen</span>
                        <strong>{form.services.join(", ")}</strong>
                      </div>

                      <div>
                        <span>Zeitraum</span>
                        <strong>{form.timeline}</strong>
                      </div>

                      <div>
                        <span>Budget</span>
                        <strong>{form.budget}</strong>
                      </div>

                      <div>
                        <span>Kontakt</span>
                        <strong>
                          {form.name} · {form.email}
                        </strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.honeypot} aria-hidden="true">
                <label>
                  Website
                  <input
                    type="text"
                    value={form.website}
                    tabIndex={-1}
                    autoComplete="off"
                    onChange={(event) =>
                      updateField("website", event.target.value)
                    }
                  />
                </label>
              </div>

              {error && (
                <p className={styles.error} role="alert">
                  {error}
                </p>
              )}

              <div className={styles.actions}>
                {step > 0 ? (
                  <button
                    className={styles.backButton}
                    type="button"
                    onClick={previousStep}
                  >
                    Zurück
                  </button>
                ) : (
                  <span />
                )}

                {step < finalStep ? (
                  <button
                    className={styles.nextButton}
                    type="button"
                    onClick={nextStep}
                  >
                    Weiter
                  </button>
                ) : (
                  <button
                    className={styles.nextButton}
                    type="submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending"
                      ? "Wird gesendet …"
                      : "Anfrage absenden"}
                  </button>
                )}
              </div>
            </>
          )}
        </form>
      </div>

      <div className={styles.note}>
        <span>Antwort in der Regel innerhalb von 1–2 Werktagen</span>
        <span>Deine Angaben werden vertraulich behandelt</span>
      </div>
    </section>
  );
}