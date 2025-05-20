import { MotionProps } from "motion/react";
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};


export default function useFadeIn({ delay }: { delay?: number }) {
  return { 
    initial: "hidden",
    whileInView: "show",
    variants: itemVariants,
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 1, delay: delay  ?? 0 },
  } as MotionProps;
}
