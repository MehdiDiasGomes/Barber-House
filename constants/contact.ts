import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const contactInfo = {
  address: {
    label: 'Adresse',
    value: '123 Rue de la Coupe, 75001 Paris',
    icon: MapPin,
  },
  phone: {
    label: 'Téléphone',
    value: '+33 1 23 45 67 89',
    icon: Phone,
  },
  email: {
    label: 'Email',
    value: 'contact@barberhouse.fr',
    icon: Mail,
  },
  hours: {
    label: 'Horaires',
    value: 'Lun-Sam: 09:00 - 21:00\nDimanche: Fermé',
    icon: Clock,
  },
};

export const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'Twitter', url: 'https://twitter.com' },
];
