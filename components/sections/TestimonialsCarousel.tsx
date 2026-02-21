'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '@/constants/testimonials';
import { Container } from '@/components/ui/Container';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { fadeInUpVariants } from '@/hooks/useScrollAnimation';

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    onSelect();
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-20 bg-bg-primary">
      <Container>
        <motion.div
          className="text-center mb-16"
          variants={fadeInUpVariants}
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-sm uppercase tracking-widest text-text-secondary mb-4">
            Avis Clients
          </p>
          <h2 className="mb-6">Ils en parlent mieux que nous</h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours de nos clients satisfaits qui font confiance à notre expertise
            et notre professionnalisme pour leurs besoins en barbering.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33.333%-1.33rem)] h-full pr-8"
                >
                  <motion.div
                    className="h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="shadow-lg h-full">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-text-primary" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-text-primary" />
          </button>
        </div>
      </Container>
    </section>
  );
}
