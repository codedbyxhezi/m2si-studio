import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Kontakt | MSI Studio",
  description:
    "Kontaktiere MSI Studio für Websites, Webanwendungen und digitale Produkte.",
};

export default function KontaktPage() {
  return (
    <>
      <Header solid />

      <main className={styles.main}>
        <Contact />
      </main>

      <Footer />
    </>
  );
}