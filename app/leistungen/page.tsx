import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import type { Metadata } from "next";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Leistungen | MSI Studio",
  description:
    "Webdesign, UX/UI Design und Fullstack-Entwicklung von MSI Studio.",
};

export default function LeistungenPage() {
  return (
    <>
      <Header solid />

      <main className={styles.main}>
        <Services />
      </main>

      <Footer />
    </>
  );
}