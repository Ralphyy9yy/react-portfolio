import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle button */}
      <ThemeToggle />

      {/*Background Effects*/}
      <StarBackground />

      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
