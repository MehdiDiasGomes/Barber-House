'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function AboutSection() {
  return (
    <section id="about" className="py-20 pattern-barbershop">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4 auto-rows-[200px] lg:auto-rows-[240px]"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="col-span-1 row-span-2 relative overflow-hidden bg-bg-secondary">
              <Image
                src="/images/about/barber-main.jpg"
                alt="Barbier principal"
                fill
                className="object-cover"
              />
            </div>

            <div className="col-span-1 relative overflow-hidden bg-bg-secondary">
              <Image
                src="/images/about/haircut-detail.jpg"
                alt="Détail coupe"
                fill
                className="object-cover"
              />
            </div>

            <div className="col-span-1 relative overflow-hidden bg-bg-secondary">
              <Image
                src="/images/about/beard-care.jpg"
                alt="Soin barbe"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">À Propos</p>

            <h2 className="text-text-primary mb-6">
              Meilleur Salon de Coupe Pour Hommes
            </h2>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Laissez nos barbiers expérimentés réaliser votre coupe de cheveux idéale. Obtenez votre style préféré. Laissez nos barbiers réaliser leur incroyable travail. Coupez les cheveux. Prenez rendez-vous avec nous pour votre style de cheveux préféré!
            </p>

            <Button variant="secondary">Lire Plus</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
