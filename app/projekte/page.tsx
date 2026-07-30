import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProjectReel from "@/components/ProjectReel/ProjectReel";
import ProjectsHero from "@/components/ProjectsHero/ProjectsHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekte | M²SI Studio",
  description:
    "Ausgewählte responsive Websites und digitale Projekte von M²SI Studio.",
};

export default function ProjektePage() {
  return (
    <>
      <Header />

      <main>
        <ProjectsHero />
        <ProjectReel />
      </main>

      <Footer />
    </>
  );
}