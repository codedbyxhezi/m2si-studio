export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  description: string;
  introduction: string;
  challenge: string;
  requirements: string[];
  solution: string;
  result: string;
  technologies: string[];
  liveUrl: string;
  images: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
};

export const projects: Project[] = [
  {
    slug: "bashkim-tours",
    name: "Bashkim Tours",
    category: "Travel & Booking",
    year: "2026",
    description:
      "Eine mehrsprachige Reiseplattform mit klarer Buchungsführung und direktem Zugang zu Routen und Fahrplänen.",
    introduction:
      "Eine digitale Plattform, die Reiseinformationen übersichtlich präsentiert und Besucher schnell zur passenden Verbindung führt.",
    challenge:
      "Fahrpläne, Reiseziele und Buchungsmöglichkeiten mussten verständlich dargestellt werden, ohne die Nutzer mit Informationen zu überfordern.",
    requirements: [
      "Mehrsprachige Benutzerführung",
      "Übersichtliche Darstellung der Reiserouten",
      "Schneller Zugang zur Buchung",
      "Optimierung für mobile Endgeräte",
    ],
    solution:
      "Die Inhalte wurden in eine klare visuelle Hierarchie gebracht. Große Handlungsflächen, strukturierte Reisedaten und eine reduzierte Navigation führen Nutzer gezielt durch die Plattform.",
    result:
      "Entstanden ist eine moderne Reiseplattform, die umfangreiche Informationen leicht zugänglich macht und auf jeder Bildschirmgröße zuverlässig funktioniert.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Responsive UI"],
    liveUrl: "https://bashkim-tours.vercel.app/",
    images: {
      desktop: "/images/projects/bashkim-tours-desktop.png",
      tablet: "/images/projects/bashkim-tours-tablet.png",
      mobile: "/images/projects/bashkim-tours-mobile.png",
    },
  },
  {
    slug: "glow-nailstudio",
    name: "Glow Nailstudio",
    category: "Beauty & Local Business",
    year: "2026",
    description:
      "Eine elegante Markenwelt mit atmosphärischem Design und einem klaren Fokus auf die Terminbuchung.",
    introduction:
      "Ein hochwertiger digitaler Auftritt, der die ruhige Atmosphäre des Studios sichtbar und digital erlebbar macht.",
    challenge:
      "Die Website sollte Vertrauen schaffen, die Leistungen hochwertig präsentieren und gleichzeitig einen kurzen Weg zur Terminvereinbarung anbieten.",
    requirements: [
      "Hochwertige und feminine Gestaltung",
      "Klare Präsentation der Behandlungen",
      "Direkte Terminbuchung",
      "Konsistente mobile Nutzererfahrung",
    ],
    solution:
      "Warme Bildwelten, großzügige Typografie und transparente Navigationselemente bilden eine ruhige Markenwelt. Sämtliche Inhalte führen gezielt zur Terminbuchung.",
    result:
      "Die Website vermittelt bereits beim ersten Besuch die Atmosphäre des Studios und verbindet Markenwirkung mit einer einfachen Nutzerführung.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "UI/UX Design"],
    liveUrl: "https://glow-nailstudio.vercel.app/",
    images: {
      desktop: "/images/projects/glow-desktop.png",
      tablet: "/images/projects/glow-tablet.png",
      mobile: "/images/projects/glow-mobile.png",
    },
  },
  {
    slug: "real2own",
    name: "Real2Own",
    category: "Real Estate Platform",
    year: "2026",
    description:
      "Eine internationale Immobilienplattform mit kuratierter Suche, hochwertigen Exposés und einem klaren Premium-Auftritt.",
    introduction:
      "Eine digitale Immobilienplattform, die emotionale Präsentation mit einer strukturierten Objektsuche verbindet.",
    challenge:
      "Unterschiedliche Immobilienangebote mussten hochwertig dargestellt werden und gleichzeitig schnell filterbar und verständlich bleiben.",
    requirements: [
      "Premium-Präsentation der Immobilien",
      "Strukturierte Such- und Filterfunktionen",
      "Internationale Ausrichtung",
      "Responsive Immobilien-Exposés",
    ],
    solution:
      "Die Plattform kombiniert eine bildstarke Oberfläche mit einer reduzierten Navigation. Immobilien, Standorte und Kerndaten lassen sich schnell erfassen und vergleichen.",
    result:
      "Das Ergebnis ist ein moderner Immobilienauftritt, der Vertrauen aufbaut und Interessenten gezielt zu relevanten Objekten führt.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Platform UI"],
    liveUrl: "https://real2own.vercel.app/",
    images: {
      desktop: "/images/projects/real2own-desktop.png",
      tablet: "/images/projects/real2own-tablet.png",
      mobile: "/images/projects/real2own-mobile.png",
    },
  },
  {
    slug: "haartraum",
    name: "Haartraum",
    category: "Salon & Booking",
    year: "2026",
    description:
      "Ein hochwertiger Salon-Auftritt, der Handwerk, Leistungen und den direkten Weg zum Termin verbindet.",
    introduction:
      "Eine charakterstarke Website, die das handwerkliche Niveau und die besondere Atmosphäre des Salons transportiert.",
    challenge:
      "Das emotionale Markenerlebnis sollte digital sichtbar werden, ohne Leistungen und Kontaktmöglichkeiten in den Hintergrund zu stellen.",
    requirements: [
      "Emotionales und hochwertiges Erscheinungsbild",
      "Übersichtliche Leistungen",
      "Einfache Kontaktaufnahme",
      "Mobile Optimierung",
    ],
    solution:
      "Großformatige Bilder, elegante Typografie und gezielt gesetzte Kontraste schaffen eine starke visuelle Identität. Die Navigation bleibt dabei bewusst einfach.",
    result:
      "Die Website verbindet Atmosphäre mit Funktionalität und gibt potenziellen Kunden einen authentischen ersten Eindruck des Salons.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Responsive Design"],
    liveUrl: "https://haartraum-friseur.vercel.app/",
    images: {
      desktop: "/images/projects/haartraum-desktop.png",
      tablet: "/images/projects/haartraum-tablet.png",
      mobile: "/images/projects/haartraum-mobile.png",
    },
  },
  {
    slug: "alurol",
    name: "ALUROL",
    category: "Industry & Product",
    year: "2026",
    description:
      "Ein mehrsprachiger Unternehmensauftritt für moderne Beschattungssysteme mit klarem Produktfokus.",
    introduction:
      "Ein strukturierter Corporate-Auftritt, der technische Produkte verständlich und professionell präsentiert.",
    challenge:
      "Technische Informationen und verschiedene Produktgruppen mussten für unterschiedliche Zielgruppen schnell erfassbar werden.",
    requirements: [
      "Klare Produktstruktur",
      "Mehrsprachige Inhalte",
      "Professioneller Unternehmensauftritt",
      "Optimierung für alle Endgeräte",
    ],
    solution:
      "Produkte und Leistungen wurden in eine klare Informationsarchitektur überführt. Kontrastreiche Handlungsflächen erleichtern die Orientierung und Kontaktaufnahme.",
    result:
      "Der neue Auftritt präsentiert das Unternehmen modern und kompetent, ohne die technischen Inhalte unnötig kompliziert wirken zu lassen.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Multilingual UI"],
    liveUrl: "https://alurol.vercel.app/",
    images: {
      desktop: "/images/projects/alurol-desktop.png",
      tablet: "/images/projects/alurol-tablet.png",
      mobile: "/images/projects/alurol-mobile.png",
    },
  },
  {
    slug: "invento-furniture",
    name: "Invento Furniture",
    category: "Interior & Furniture",
    year: "2026",
    description:
      "Eine ruhige, bildstarke Präsentation für maßgefertigte Küchen und individuelle Einrichtungslösungen.",
    introduction:
      "Eine moderne Interior-Website, bei der Materialien, Räume und individuelle Lösungen im Mittelpunkt stehen.",
    challenge:
      "Die Qualität der Arbeiten sollte emotional vermittelt werden, während Kollektionen und Kontaktmöglichkeiten leicht erreichbar bleiben.",
    requirements: [
      "Bildstarke Präsentation",
      "Hochwertige Editorial-Gestaltung",
      "Übersichtliche Kollektionen",
      "Responsive Kontaktführung",
    ],
    solution:
      "Großzügige Bildflächen, ruhige Typografie und eine reduzierte Farbwelt lassen die Projekte für sich sprechen. Die Nutzerführung bleibt dabei klar und direkt.",
    result:
      "Entstanden ist eine elegante digitale Präsentation, die das Qualitätsversprechen der Marke glaubwürdig und konsistent vermittelt.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Editorial Design"],
    liveUrl: "https://invento-furniture.vercel.app/",
    images: {
      desktop: "/images/projects/invento-desktop.png",
      tablet: "/images/projects/invento-tablet.png",
      mobile: "/images/projects/invento-mobile.png",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}