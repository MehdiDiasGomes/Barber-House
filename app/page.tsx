import { Hero } from "@/components/sections/Hero";
import { HeroInfo } from "@/components/sections/HeroInfo";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Hero />
      <HeroInfo />
      <AboutSection />
      <ServicesSection />
      <TestimonialsCarousel />
      <TeamSection />
      <ContactSection />

      <footer className="bg-primary text-text-light py-8">
        <Container className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Développé par{" "}
            <a
              href="https://dg-zenith.com"
              className="text-secondary hover:opacity-80 transition-opacity duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zenith
            </a>
          </p>
        </Container>
      </footer>
    </div>
  );
}
