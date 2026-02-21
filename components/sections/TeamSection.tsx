'use client';

import { motion } from 'framer-motion';
import { teamData } from '@/constants/team';
import { Container } from '@/components/ui/Container';
import { TeamCard } from '@/components/ui/TeamCard';
import { fadeInUpVariants, staggerContainerVariants, staggerItemVariants } from '@/hooks/useScrollAnimation';

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-bg-primary">
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
            Notre Équipe
          </p>
          <h2 className="mb-6">Nos Barbiers Professionnels</h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre équipe d&apos;experts passionnés par leur métier, chacun apportant
            son expérience et son savoir-faire pour garantir une expérience de barbering
            de première qualité. Nos barbiers sont formés aux techniques les plus modernes
            et traditionnelles.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamData.map((member) => (
            <motion.div key={member.id} variants={staggerItemVariants}>
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
