'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonialsData } from '@/constants/testimonials';
import { Container } from '@/components/ui/Container';
import { fadeInUpVariants } from '@/hooks/useScrollAnimation';

const slideVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 48 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit: (dir: number) => ({ opacity: 0, x: dir * -32, transition: { duration: 0.3 } }),
};

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % testimonialsData.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonialsData.length) % testimonialsData.length, -1);
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const testimonial = testimonialsData[current];

  return (
    <section
      id="testimonials"
      className="relative pt-0 pb-28 bg-primary overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-[0] mt-[-1px]">
        <svg
          viewBox="0 0 1440 110"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-20 md:h-28 block"
          aria-hidden="true"
        >
          {/* Primary wave — white fill that overlaps the services section above */}
          <path
            d="M0,0 L0,62
               C180,28 360,82 540,48
               C720,14 900,72 1080,38
               C1260,8 1370,52 1440,28
               L1440,0 Z"
            fill="var(--color-bg-primary)"
          />

        </svg>
      </div>

      <div className="pt-12 md:pt-16">

      {/* Decorative background quote mark */}
      <div
        className="absolute left-1/2 -translate-x-1/2 text-secondary/[0.12] font-serif select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(18rem, 38vw, 36rem)', lineHeight: 1, top: '6rem' }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Bottom gold border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <Container>
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeInUpVariants}
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-secondary text-[11px] uppercase tracking-[0.45em] mb-5 flex items-center justify-center gap-3 font-bold">
            <span className="w-8 h-px bg-secondary inline-block" />
            Avis Clients
            <span className="w-8 h-px bg-secondary inline-block" />
          </p>
          <h2 className="text-text-light mb-6">Ce qu&apos;ils disent de nous</h2>
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} className="fill-secondary text-secondary" />
            ))}
            <span className="text-text-light/35 text-sm ml-3 tracking-wide">5.0 &mdash; 200+ avis Google</span>
          </div>
        </motion.div>

        {/* Quote stage */}
        <div className="relative max-w-3xl mx-auto">
          <div className="min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={testimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full text-center px-4 md:px-0"
              >
                <blockquote className="text-text-light/80 text-lg md:text-xl lg:text-2xl leading-relaxed font-light mb-10">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-px bg-secondary" />
                  <p className="text-text-light font-semibold text-sm uppercase tracking-[0.2em]">
                    {testimonial.name}
                  </p>
                  {testimonial.role && (
                    <p className="text-text-light/35 text-xs uppercase tracking-[0.3em]">
                      {testimonial.role}
                    </p>
                  )}
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={11} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={prev}
              className="text-text-light/30 hover:text-secondary transition-colors duration-300 text-base font-light tracking-widest"
              aria-label="Précédent"
            >
              &#8592;
            </button>

            <div className="flex items-center gap-3">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className={`transition-all duration-500 h-[2px] ${
                    i === current
                      ? 'w-8 bg-secondary'
                      : 'w-4 bg-text-light/20 hover:bg-text-light/40'
                  }`}
                  aria-label={`Aller à l'avis ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="text-text-light/30 hover:text-secondary transition-colors duration-300 text-base font-light tracking-widest"
              aria-label="Suivant"
            >
              &#8594;
            </button>
          </div>

          {/* Progress counter */}
          <p className="text-center mt-6 text-text-light/20 text-[10px] uppercase tracking-[0.4em]">
            {String(current + 1).padStart(2, '0')} / {String(testimonialsData.length).padStart(2, '0')}
          </p>
        </div>
      </Container>
      </div>
    </section>
  );
}
