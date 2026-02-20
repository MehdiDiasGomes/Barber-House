import type { NavbarConfig } from '@/types/navigation';

export const navbarConfig: NavbarConfig = {
  logo: 'Barber House',
  links: [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'About Us',
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
    label: 'Book Now',
    href: '#',
  },
};
