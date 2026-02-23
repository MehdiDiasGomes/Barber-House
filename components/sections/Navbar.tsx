'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navbarConfig } from '@/constants/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      if (href !== '#') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-primary text-text-light fixed top-0 w-full z-50">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Barber House Logo"
                width={60}
                height={60}
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navbarConfig.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-sm font-montserrat hover:text-secondary transition-colors duration-300 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <Button variant="navbar">{navbarConfig.ctaButton.label}</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:text-secondary transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-600">
            <div className="flex flex-col gap-4 py-4">
              {navbarConfig.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-sm font-montserrat hover:text-secondary transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}

              <Button variant="navbar" className="w-full text-center mt-2" onClick={() => setIsOpen(false)}>
                {navbarConfig.ctaButton.label}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
