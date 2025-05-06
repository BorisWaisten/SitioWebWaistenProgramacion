"use client"

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import './introduction.css';
import { CoverParticles } from './cover-particles';

const Introduction = () => {
  return (
    <section
      aria-label="Introducción principal"
      className="z-20 w-full min-h-screen  flex items-center justify-center px-4 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-screen-lg text-center flex flex-col items-center"
      >
      <CoverParticles />
<h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl leading-tight font-semibold text-white">
  Creamos soluciones digitales <br />
  <TypeAnimation
    sequence={[
      'sitios web impactantes',
      1500,
      'plataformas funcionales',
      1500,
      'experiencias personalizadas',
      1500,
      'sistemas a medida',
      1500
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="font-bold text-secondary"
  />
</h1>


        <p className="text-base sm:text-lg md:text-xl max-w-2xl text-white/90">
        Tu negocio necesita presencia digital. Creamos soluciones que generan confianza, atraen clientes y mejoran tu rendimiento.        </p>
      </motion.div>
    </section>
  );
};

export default Introduction;
