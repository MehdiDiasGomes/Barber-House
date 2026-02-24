import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import { Navbar } from "@/components/sections/Navbar";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://barberhouse.com";

export const metadata: Metadata = {
  title: "Barber House - Salon de Barbier Premium à Paris",
  description: "Découvrez Barber House, votre salon de barbier premium. Services haut de gamme: coupe de cheveux, rasage, soins de la barbe. Prenez rendez-vous en ligne.",
  keywords: "barbier, salon de coiffure, rasage, coupe cheveux, barberie premium, Paris",
  authors: [{ name: "Barber House" }],
  creator: "Barber House",
  publisher: "Barber House",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Barber House",
    title: "Barber House - Salon de Barbier Premium",
    description: "Services de barberie haut de gamme: coupe, rasage et soins de la barbe",
    images: [
      {
        url: `${siteUrl}/images/hero/bg.webp`,
        width: 1200,
        height: 630,
        alt: "Barber House - Salon Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barber House - Salon de Barbier Premium",
    description: "Services de barberie haut de gamme à Paris",
    images: [`${siteUrl}/images/hero/bg.webp`],
    creator: "@barberhouse",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${cinzel.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
