'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useBookingContext } from '@/context/BookingContext';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9 } },
};

export function Hero() {
  const { openBookingModal } = useBookingContext();

  const handleScrollToServices = (): void => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero-grain relative min-h-screen flex items-center overflow-hidden"
    >
      <Image
        src="/images/hero/bg.webp"
        alt="Barber House Hero"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Desktop: asymmetric left gradient / Mobile: full dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60 md:bg-gradient-to-r md:from-primary/90 md:via-primary/65 md:to-primary/10" />

      {/* Gold vertical accent bar — desktop only */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-secondary hidden lg:block z-10" />

      {/* Vertical decorative label — desktop only */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 z-10">
        <div className="w-px h-16 bg-secondary/40" />
        <p
          className="text-secondary/50 text-[10px] uppercase tracking-[0.5em] font-bold"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Barber House
        </p>
        <div className="w-px h-16 bg-secondary/40" />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-xl md:max-w-2xl mx-auto md:mx-0">

          {/* Eyebrow label */}
          <motion.p
            className="text-secondary text-[11px] uppercase tracking-[0.45em] mb-6 flex items-center justify-center md:justify-start gap-3 font-bold"
            variants={fadeUpVariant}
          >
            <span className="w-8 h-px bg-secondary inline-block" />
            Paris · Depuis 2018
            <span className="w-8 h-px bg-secondary inline-block hidden md:inline-block" />
          </motion.p>

          {/* Title line 1 */}
          <motion.h1
            className="text-text-light leading-none mb-2"
            variants={fadeUpVariant}
          >
            L&apos;Art du
          </motion.h1>

          {/* Title line 2 — gold highlight */}
          <motion.div className="mb-8" variants={fadeUpVariant}>
            <h1 className="bg-secondary text-text-primary px-4 py-1 leading-tight inline-block">
              Barbier
            </h1>
          </motion.div>

          {/* Subtitle with gold separator */}
          <motion.div
            className="flex items-center justify-center md:justify-start gap-4 mb-8"
            variants={fadeUpVariant}
          >
            <div className="w-10 h-px bg-secondary flex-shrink-0 hidden md:block" />
            <h2 className="text-text-light/70 !text-lg !font-light tracking-widest uppercase">
              Précision. Style. Excellence.
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-text-light/55 text-sm lg:text-base mb-12 leading-relaxed max-w-md mx-auto md:mx-0"
            variants={fadeUpVariant}
          >
            Un espace pensé pour l&apos;homme moderne. Coupes sur-mesure, rasage traditionnel au blaireau, soins de la barbe — chaque passage est une expérience.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={fadeUpVariant}
          >
            <Button onClick={() => openBookingModal()}>Réserver ma séance</Button>
            <Button variant="outline" onClick={handleScrollToServices}>Voir les services</Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.8 }}
      >
        <span className="text-secondary/50 text-[9px] uppercase tracking-[0.4em]">Scroll</span>
        <motion.div
          className="w-px h-10 bg-secondary/40"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
