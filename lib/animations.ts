/**
 * Centralized Animation Variants for DevOps Portfolio
 * Following Apple/Vercel/Linear design principles
 * 
 * Rules:
 * - All durations ≤ 0.6s
 * - Smooth easing curves
 * - Subtle transforms only (opacity + translateY)
 * - Respects prefers-reduced-motion via CSS
 */

import { Variants, Transition } from "framer-motion";

// ============================================
// EASING CURVES (Premium feel)
// ============================================
export const easings = {
  // Apple-style smooth
  smooth: [0.25, 0.1, 0.25, 1],
  // Vercel-style snappy
  snappy: [0.4, 0, 0.2, 1],
  // Linear-style precise
  precise: [0.22, 1, 0.36, 1],
  // Bouncy but subtle
  softBounce: [0.34, 1.56, 0.64, 1],
  // Exit animations
  exit: [0.4, 0, 1, 1],
} as const;

// ============================================
// BASE TRANSITIONS
// ============================================
export const transitions = {
  fast: { duration: 0.2, ease: easings.snappy },
  normal: { duration: 0.4, ease: easings.smooth },
  slow: { duration: 0.6, ease: easings.smooth },
  spring: { type: "spring", stiffness: 300, damping: 30 },
  springBouncy: { type: "spring", stiffness: 400, damping: 25 },
  springGentle: { type: "spring", stiffness: 200, damping: 25 },
} satisfies Record<string, Transition>;

// ============================================
// PAGE / SECTION ENTRANCE
// ============================================
export const pageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
      staggerChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: easings.exit,
    }
  }
};

export const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    }
  }
};

// ============================================
// STAGGERED CONTAINERS
// ============================================
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

export const staggerFastVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    }
  }
};

// ============================================
// ITEM ENTRANCE ANIMATIONS
// ============================================
export const fadeUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: transitions.normal,
  }
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: transitions.normal,
  }
};

export const slideInLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: transitions.normal,
  }
};

export const slideInRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: transitions.normal,
  }
};

export const scaleInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: transitions.normal,
  }
};

// ============================================
// HOVER / INTERACTIVE STATES
// ============================================
export const hoverLiftVariants: Variants = {
  rest: { 
    y: 0, 
    scale: 1,
    transition: transitions.fast,
  },
  hover: { 
    y: -4, 
    scale: 1.02,
    transition: transitions.spring,
  }
};

export const hoverGlowVariants: Variants = {
  rest: { 
    boxShadow: "0 0 0 0 rgba(0, 255, 136, 0)",
    borderColor: "rgba(30, 41, 59, 0.8)",
  },
  hover: { 
    boxShadow: "0 0 20px 2px rgba(0, 255, 136, 0.15)",
    borderColor: "rgba(0, 255, 136, 0.3)",
    transition: transitions.fast,
  }
};

export const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: transitions.spring,
  },
  tap: { 
    scale: 0.98,
    transition: transitions.fast,
  }
};

export const iconHoverVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: { 
    rotate: 5, 
    scale: 1.1,
    transition: transitions.spring,
  }
};

// ============================================
// TEXT ANIMATIONS
// ============================================
export const textRevealVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: { 
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    }
  }
};

export const wordRevealContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

export const wordRevealVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 10,
    filter: "blur(4px)",
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    }
  }
};

// ============================================
// CARD ANIMATIONS
// ============================================
export const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.98,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: transitions.normal,
  },
  hover: {
    y: -6,
    scale: 1.01,
    transition: transitions.spring,
  }
};

export const cardGlowVariants: Variants = {
  rest: {
    boxShadow: "0 4px 20px -5px rgba(0, 0, 0, 0.3)",
  },
  hover: {
    boxShadow: "0 20px 40px -10px rgba(0, 212, 255, 0.15), 0 0 20px 0 rgba(0, 255, 136, 0.1)",
    transition: transitions.fast,
  }
};

// ============================================
// PROGRESS / LOADING ANIMATIONS
// ============================================
export const progressVariants: Variants = {
  hidden: { 
    scaleX: 0,
    originX: 0,
  },
  visible: (progress: number) => ({
    scaleX: progress / 100,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
      delay: 0.2,
    }
  })
};

// ============================================
// UNDERLINE ANIMATION (for links)
// ============================================
export const underlineVariants: Variants = {
  rest: { 
    scaleX: 0, 
    originX: 0,
  },
  hover: { 
    scaleX: 1,
    transition: transitions.fast,
  }
};

// ============================================
// COPY FEEDBACK ANIMATION
// ============================================
export const copyFeedbackVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    y: 10 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: transitions.spring,
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    y: -10,
    transition: transitions.fast,
  }
};

// ============================================
// BACKGROUND GLOW ANIMATION
// ============================================
export const glowOrbVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

// ============================================
// TOOLTIP ANIMATION
// ============================================
export const tooltipVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 5, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: transitions.fast,
  }
};

// ============================================
// VIEWPORT OPTIONS
// ============================================
export const viewportOnce = { 
  once: true, 
  margin: "-50px",
  amount: 0.2,
};

export const viewportRepeating = { 
  once: false, 
  margin: "-100px",
  amount: 0.3,
};

// ============================================
// UTILITY: Check for reduced motion preference
// ============================================
export const getReducedMotionVariants = (
  variants: Variants, 
  prefersReducedMotion: boolean
): Variants => {
  if (prefersReducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } },
    };
  }
  return variants;
};
