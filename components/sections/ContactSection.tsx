'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fadeInUpVariants } from '@/hooks/useScrollAnimation';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast('Message envoyé!', {
      description: 'Merci pour votre message. Nous vous recontacterons bientôt.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-bg-primary">
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
            Contact
          </p>
          <h2 className="mb-6">Nous Contacter</h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Envoyez-nous votre message et nous vous recontacterons dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Nom Complet
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Votre nom"
                required
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="votre@email.com"
                required
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Téléphone
              </label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+33 1 23 45 67 89"
                min="0"
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Votre message..."
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-secondary transition-colors resize-none"
              />
            </div>

            <Button type="submit" variant="secondary" className="w-full">
              Envoyer
            </Button>
          </motion.form>

          {/* Image Placeholder */}
          <motion.div
            className="relative w-full h-96 md:h-full min-h-96 overflow-hidden bg-gray-100 border border-gray-200"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/images/about/barber-main.jpg"
              alt="Coupe barbershop"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
