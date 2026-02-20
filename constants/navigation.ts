import type { NavbarConfig } from '@/types/navigation';

export const navbarConfig: NavbarConfig = {
  logo: 'Barber House',
  links: [
    {
      label: 'Accueil',
      href: '#',
    },
    {
      label: 'À Propos',
      href: '#about',
    },
    {
      label: 'Services',
      href: '#services',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ],
  ctaButton: {
    label: 'Réserver',
    href: '#',
  },
};
