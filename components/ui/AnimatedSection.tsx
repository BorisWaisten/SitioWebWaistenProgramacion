import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { AnimationConfig } from '@/types';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: keyof typeof defaultAnimations;
  customAnimation?: AnimationConfig;
  delay?: number;
}

const defaultAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  stagger: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
};

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fadeInUp',
  customAnimation,
  delay = 0,
}: AnimatedSectionProps) {
  const animationConfig = customAnimation || defaultAnimations[animation];

  if (delay > 0) {
    animationConfig.transition = {
      ...animationConfig.transition,
      delay,
    };
  }

  return (
    <motion.div
      className={className}
      {...animationConfig}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

