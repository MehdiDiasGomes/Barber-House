
export interface AnimationVariants {
  initial: {
    opacity: number;
    y: number;
  };
  whileInView: {
    opacity: number;
    y: number;
  };
}

/**
 * Generates animation variants for scroll-triggered fade-in animations
 * @param yOffset - Vertical offset for slide animation (default: 30px)
 * @returns Animation variants object for Framer Motion
 */
export function useScrollAnimation(yOffset: number = 30): AnimationVariants {
  return {
    initial: {
      opacity: 0,
      y: yOffset,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
  };
}

export const fadeInUpVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

export const fadeInVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};

export const staggerContainerVariants = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItemVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};
