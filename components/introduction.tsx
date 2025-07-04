"use client"

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import './introduction.css';
import { CoverParticles } from './cover-particles';
import { ArrowRight, Code, Smartphone, Globe, Zap } from 'lucide-react';

const Introduction = () => {
  return (
    <section
      aria-label="Introducción principal"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Fondo con partículas - solo en introduction */}
      <CoverParticles enabled={true} />
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-primary-400/20"
        >
          <Code size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 text-secondary-400/20"
        >
          <Smartphone size={35} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-20 text-accent-400/20"
        >
          <Globe size={45} />
        </motion.div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            <span className="text-neutral-100">Transformamos</span>
            <br />
            <span className="gradient-text">
              <TypeAnimation
                sequence={[
                  'ideas en realidad',
                  2000,
                  'negocios en digital',
                  2000,
                  'visiones en éxito',
                  2000,
                  'sueños en código',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-bold"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Creamos sitios web modernos, funcionales y que convierten visitantes en clientes. 
            <span className="text-primary-400 font-semibold"> Tu éxito digital comienza aquí.</span>
          </motion.p>


        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Introduction;
