import { ThemeConfig } from '@/types';

export const themeConfig: ThemeConfig = {
  colors: {
    primary: '#48bfda',
    secondary: '#6acfc7',
    background: '#0c1a1a',
    text: '#ffffff',
    accent: '#1c3d5a',
  },
  gradients: {
    primary: 'from-[#48bfda] to-[#6acfc7]',
    secondary: 'from-[#0c5972] to-[#48bfda]',
  },
};

export const animationConfigs = {
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

