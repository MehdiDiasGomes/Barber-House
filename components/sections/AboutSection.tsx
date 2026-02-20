'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 auto-rows-[200px] lg:auto-rows-[240px]">
            <div className="col-span-1 row-span-2 relative overflow-hidden bg-gray-100">
              <Image
                src="/images/about/barber-main.jpg"
                alt="Barbier principal"
                fill
                className="object-cover"
              />
            </div>

            <div className="col-span-1 relative overflow-hidden bg-gray-100">
              <Image
                src="/images/about/haircut-detail.jpg"
                alt="Détail coupe"
                fill
                className="object-cover"
              />
            </div>

            <div className="col-span-1 relative overflow-hidden bg-gray-100">
              <Image
                src="/images/about/beard-care.jpg"
                alt="Soin barbe"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">À Propos</p>

            <h2 className="text-black mb-6">
              Meilleur Salon de Coupe Pour Hommes
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Laissez nos barbiers expérimentés réaliser votre coupe de cheveux idéale. Obtenez votre style préféré. Laissez nos barbiers réaliser leur incroyable travail. Coupez les cheveux. Prenez rendez-vous avec nous pour votre style de cheveux préféré!
            </p>

            <Button variant="secondary">Lire Plus</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
