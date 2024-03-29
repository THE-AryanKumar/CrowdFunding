interface FadeInProps {
  direction: "up" | "down" | "left" | "right";
  delay: number;
}

interface ScrollRevealOptions {
  distance: string;
  interval: number;
}

export const fadeIn = ({ direction, delay }: FadeInProps) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const scrollReveal = ({ distance, interval }: ScrollRevealOptions) => ({
  hidden: {
    opacity: 0,
    y: distance, 
  },
  show: {
    opacity: 1,
    y: '0px', 
    transition: {
      duration: 1, 
      delay: interval,
    },
  },
});

