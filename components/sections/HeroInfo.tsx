'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageSquare } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';
import { Container } from '@/components/ui/Container';
import { fadeInUpVariants } from '@/hooks/useScrollAnimation';

function StatCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const duration = 2750;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}

export function HeroInfo() {
  return (
    <section className="relative mt-16 lg:-mt-16 pb-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
          <motion.div
            className="flex flex-col max-sm:order-2 sm:flex-row gap-8 lg:gap-12 justify-center lg:justify-start flex-1"
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center lg:text-left flex-1">
              <h3 className="text-3xl lg:text-4xl text-text-primary mb-2">
                <StatCounter end={6} suffix="" />
              </h3>
              <p className="text-base lg:text-lg text-gray-500">Barbiers Expérimentés</p>
            </div>

            <div className="text-center lg:text-left flex-1">
              <h3 className="text-3xl lg:text-4xl text-text-primary mb-2">
                <StatCounter end={3} suffix="" />
              </h3>
              <p className="text-base lg:text-lg text-gray-500">Emplacements</p>
            </div>

            <div className="text-center lg:text-left flex-1">
              <h3 className="text-3xl lg:text-4xl text-text-primary mb-2">
                <StatCounter end={999} suffix="+" />
              </h3>
              <p className="text-base lg:text-lg text-gray-500">Clients Satisfaits</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row gap-8 flex-1"
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-bg-primary p-8 shadow-lg flex flex-col items-start text-left flex-1">
              <Icon icon={Clock} size={48} color="var(--color-secondary)" className="mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Horaires</h3>
              <p className="text-gray-500 mb-2">Ouvert tous les jours</p>
              <p className="text-gray-500">08:00 - 21:00</p>
            </div>

            <div className="bg-bg-primary p-8 shadow-lg flex flex-col items-start text-left flex-1">
              <Icon icon={MessageSquare} size={48} color="var(--color-secondary)" className="mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Discutons Ensemble</h3>
              <p className="text-gray-500 mb-2">contact@barberhouse.fr</p>
              <p className="text-gray-500">+33 1 23 45 67 89</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
