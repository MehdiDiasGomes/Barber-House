
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

/**
 * Fade-in animation with upward slide on scroll trigger.
 * Elements fade in while sliding up 30px from initial position.
 */
export const fadeInUpVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

/**
 * Simple fade-in animation on scroll trigger.
 * Elements fade in without vertical movement.
 */
export const fadeInVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};

/**
 * Container animation with staggered children animation.
 * Parent fades in while children animate with 0.1s stagger delay and 0.2s initial delay.
 */
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

/**
 * Individual item animation for staggered effect.
 * Each item fades in while sliding up 20px, typically used within stagger container.
 */
export const staggerItemVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};
