'use client';

import { motion } from 'framer-motion';
import { servicesData } from "@/constants/services";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { fadeInUpVariants, staggerContainerVariants, staggerItemVariants } from "@/hooks/useScrollAnimation";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-bg-primary">
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
            Services
          </p>
          <h2 className="mb-6">Nos Services de Barbier</h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Nos services de barbier offrent une gamme complète, incluant des
            coupes stylisées, des traitements capillaires rajeunissants, des
            massages thérapeutiques et un nettoyage complet des cheveux, tous
            conçus pour améliorer votre expérience de toilettage et vous laisser
            frais et renouvelé.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={staggerItemVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
