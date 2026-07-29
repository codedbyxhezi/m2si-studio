import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProjectReel from "@/components/ProjectReel/ProjectReel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekte | MSI Studio",
  description:
    "Ausgewählte responsive Websites und digitale Projekte von MSI Studio.",
};

export default function ProjektePage() {
  return (
    <>
      <Header solid />

      <main>
        <ProjectReel />
      </main>

      <Footer />
    </>
  );
}