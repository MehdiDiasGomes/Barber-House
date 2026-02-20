'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navbarConfig } from '@/constants/navigation';
import { Container } from '@/components/ui/Container';

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-950 text-white sticky top-0 z-50">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold font-cinzel tracking-widest text-amber-500"
            >
              {navbarConfig.logo}
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navbarConfig.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-montserrat hover:text-amber-500 transition-colors duration-300 uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href={navbarConfig.ctaButton.href}
              className="bg-white text-zinc-950 px-6 py-2 font-bold text-sm uppercase tracking-wider hover:bg-amber-500 hover:text-white transition-all duration-300"
            >
              {navbarConfig.ctaButton.label}
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:text-amber-500 transition-colors"
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
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col gap-4 py-4">
              {navbarConfig.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-montserrat hover:text-amber-500 transition-colors uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href={navbarConfig.ctaButton.href}
                className="bg-white text-zinc-950 px-6 py-2 font-bold text-sm uppercase tracking-wider hover:bg-amber-500 hover:text-white transition-all duration-300 text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                {navbarConfig.ctaButton.label}
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
