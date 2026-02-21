'use client';

import { motion } from 'framer-motion';
import { testimonialsData } from '@/constants/testimonials';
import { Container } from '@/components/ui/Container';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { fadeInUpVariants, staggerContainerVariants, staggerItemVariants } from '@/hooks/useScrollAnimation';

export function TestimonialsSection() {
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

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonialsData.map((testimonial) => (
            <motion.div key={testimonial.id} variants={staggerItemVariants}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
