'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const handleScrollToServices = (): void => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="hidden md:flex relative h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/bg.webp"
          alt="Barber House Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-primary/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-text-light">
          <p className="text-sm uppercase tracking-widest text-text-muted mb-6">
            Bienvenue à Barber House
          </p>

          <h1 className="mb-4 leading-tight">
            Meilleure <span className="bg-secondary text-text-primary px-3 py-1 inline-block">Coupe</span>
          </h1>

          <h2 className="mb-8 text-text-muted">
            Pour une Allure Professionnelle
          </h2>

          <p className="text-base lg:text-lg text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Découvrez nos services de barberie haut de gamme. Expérience des techniques traditionnelles combinées avec les styles modernes,
            livrés par des professionnels expérimentés dédiés à votre satisfaction.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button>Prendre Rendez-vous</Button>
            <Button variant="outline" onClick={handleScrollToServices}>Tous les Services</Button>
          </div>
        </div>
      </section>

      <section id="home" className="md:hidden relative h-64 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/bg.webp"
          alt="Barber House Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-primary/50" />

        <div className="relative z-10 w-full px-4 text-center text-text-light">
          <div className="flex flex-col gap-4 justify-center">
            <Button>Prendre Rendez-vous</Button>
            <Button variant="outline" onClick={handleScrollToServices}>Tous les Services</Button>
          </div>
        </div>
      </section>
    </>
  );
}
