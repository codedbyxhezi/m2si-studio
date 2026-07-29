import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Fullstack Development",
    text: "Performante Websites und Web-Apps mit Next.js, TypeScript und einer Architektur, die mit deinem Produkt wachsen kann.",
    items: ["Frontend Engineering", "API & Integration", "Performance", "Technical SEO"],
  },
  {
    number: "02",
    title: "UX/UI Design",
    text: "Digitale Oberflächen mit klarer Hierarchie, konsistenten Systemen und einem visuellen Charakter, der zur Marke passt.",
    items: ["Art Direction", "Interface Design", "Design Systems", "Prototyping"],
  },
  {
    number: "03",
    title: "Von Idee bis Launch",
    text: "Ein durchgängiger Prozess mit kurzen Wegen – von der ersten Struktur über das Design bis zum stabilen Release.",
    items: ["Konzeption", "Responsive Umsetzung", "Quality Assurance", "Deployment"],
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="leistungen" aria-labelledby="services-title">
      <div className={styles.intro}>
        <p>Leistungen</p>
        <h2 id="services-title">
          Ein Partner für
          <br />
          <em>Design und Code.</em>
        </h2>
        <p className={styles.introCopy}>
          Weniger Übergaben, mehr Klarheit: Strategie, Gestaltung und Entwicklung
          greifen von Anfang an ineinander.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.number}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
