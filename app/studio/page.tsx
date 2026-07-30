import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio | M²SI Studio",
  description:
    "Erfahre mehr über M²SI Studio, die Arbeitsweise und den Anspruch hinter den digitalen Projekten.",
};

export default function StudioPage() {
  return (
    <>
      <Header />

      <main>
        <About />
      </main>

      <Footer />
    </>
  );
}