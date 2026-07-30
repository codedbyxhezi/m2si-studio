import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | M²SI Studio",
  description:
    "Kontaktiere M²SI Studio für individuelle Websites, Webanwendungen und digitale Produkte.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />

      <main>
        <Contact />
      </main>

      <Footer />
    </>
  );
}