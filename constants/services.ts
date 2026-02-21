import type { Service } from "@/types/service";

export const servicesData: Service[] = [
  {
    id: "adult-haircut",
    title: "Coupe Adulte",
    description:
      "Coupe de cheveux stylisée et professionnelle adaptée à votre style personnel et vos préférences",
    price: 39,
    icon: "/images/services/adult-haircut.svg",
  },
  {
    id: "kids-haircut",
    title: "Coupe Enfant",
    description:
      "Coupe de cheveux douce et amusante pour les enfants, réalisée avec soin et patience",
    price: 19,
    icon: "/images/services/kids-haircut.svg",
  },
  {
    id: "beard-trim",
    title: "Taille Barbe",
    description:
      "Taille et modelage précis de votre barbe pour un look parfaitement soigné",
    price: 29,
    icon: "/images/services/beard-trim.svg",
  },
  {
    id: "neck-shave",
    title: "Rasage Cou",
    description: "Rasage précis du cou pour un finish net et professionnel",
    price: 19,
    icon: "/images/services/neck-shave.svg",
  },
  {
    id: "scalp-moisturizing",
    title: "Hydratation Cuir Chevelu",
    description:
      "Soin hydratant pour le cuir chevelu, laissant vos cheveux frais et revitalisés",
    price: 10,
    icon: "/images/services/scalp-moisturizing.svg",
  },
  {
    id: "beard-grooming",
    title: "Soins Barbe Complets",
    description:
      "Soin complet de la barbe incluant taille, rasage des contours et hydratation",
    price: 49,
    icon: "/images/services/beard-grooming.svg",
  },
];
