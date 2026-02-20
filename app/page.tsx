import { Hero } from '@/components/sections/Hero';
import { HeroInfo } from '@/components/sections/HeroInfo';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { Container } from '@/components/ui/Container';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Hero />
      <HeroInfo />
      <AboutSection />
      <ServicesSection />

      <section id="about" className="py-20 bg-bg-secondary">
        <Container>
          <h3 className="text-center mb-12">À Propos</h3>
          <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto leading-relaxed">
            Chez Barber House, nous croyons que la coupe de cheveux et le rasage sont bien plus qu&apos;un service.
            C&apos;est un moment de détente et de soin personnel. Nos barbiers expérimentés vous offrent une expérience
            unique avec des techniques traditionnelles et modernes.
          </p>
        </Container>
      </section>

      <section id="contact" className="py-20 bg-bg-primary">
        <Container className="text-center">
          <h3 className="mb-8">Nous Contacter</h3>
          <p className="text-lg mb-4">📍 123 Rue de la Coupe, Paris 75001</p>
          <p className="text-lg mb-4">📞 01 23 45 67 89</p>
          <p className="text-lg">📧 contact@barberhouse.fr</p>
        </Container>
      </section>

      <footer className="bg-bg-dark text-text-light py-8">
        <Container className="text-center">
          <p>&copy; 2024 Barber House. Tous droits réservés.</p>
        </Container>
      </footer>
    </div>
  );
}
