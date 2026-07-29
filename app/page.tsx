import ContactTeaser from "@/components/ContactTeaser/ContactTeaser";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import HomeNavigation from "@/components/HomeNavigation/HomeNavigation";
import ProjectsTeaser from "@/components/ProjectsTeaser/ProjectsTeaser";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProjectsTeaser />
        <HomeNavigation />
        <ContactTeaser />
      </main>

      <Footer />
    </>
  );
}