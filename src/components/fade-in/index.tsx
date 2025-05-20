"use client"
// import * as motion from "motion/react-client"
import { HTMLMotionProps, motion } from "motion/react";
import useFadeIn from "./useFadeIn";

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string
  delay?: number
}

export default function FadeIn({
  children,
  className,
  ...props
}: FadeInProps) {
  const fadeinProps = useFadeIn({
    delay: props.delay ?? 0
  })
  return (
    <motion.div
      className={className}
      {...fadeinProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}