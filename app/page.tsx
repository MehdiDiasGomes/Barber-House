import { Hero } from '@/components/sections/Hero';
import { HeroInfo } from '@/components/sections/HeroInfo';
import { AboutSection } from '@/components/sections/AboutSection';
import { Container } from '@/components/ui/Container';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Hero />
      <HeroInfo />
      <AboutSection />

      <section id="services" className="py-20 bg-bg-primary">
        <Container>
          <h3 className="text-center mb-16">Nos Services</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-bg-secondary hover:shadow-lg transition">
              <h4 className="mb-4">Coupe de Cheveux</h4>
              <p className="text-gray-500 mb-4">
                Coupes modernes et classiques adaptées à votre style personnel.
              </p>
              <p className="font-bold text-secondary">À partir de 25€</p>
            </div>

            <div className="p-8 bg-bg-secondary hover:shadow-lg transition">
              <h4 className="mb-4">Rasage Premium</h4>
              <p className="text-gray-500 mb-4">
                Rasage à l&apos;ancienne avec soin et attention particulière à votre peau.
              </p>
              <p className="font-bold text-secondary">À partir de 20€</p>
            </div>

            <div className="p-8 bg-bg-secondary hover:shadow-lg transition">
              <h4 className="mb-4">Soins de la Barbe</h4>
              <p className="text-gray-500 mb-4">
                Modelage, taille et soins complets pour votre barbe.
              </p>
              <p className="font-bold text-secondary">À partir de 15€</p>
            </div>
          </div>
        </Container>
      </section>

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
