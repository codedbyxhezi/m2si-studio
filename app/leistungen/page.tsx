import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen | M²SI Studio",
  description:
    "Webdesign, UX/UI Design und Fullstack-Entwicklung von M²SI Studio – von der Idee bis zum fertigen digitalen Produkt.",
};

export default function LeistungenPage() {
  return (
    <>
      <Header />

      <main>
        <Services />
      </main>

      <Footer />
    </>
  );
}