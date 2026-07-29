import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Studio | MSI Studio",
  description:
    "Erfahre mehr über MSI Studio, die Arbeitsweise und den Anspruch hinter den Projekten.",
};

export default function StudioPage() {
  return (
    <>
      <Header solid />

      <main className={styles.main}>
        <About />
      </main>

      <Footer />
    </>
  );
}