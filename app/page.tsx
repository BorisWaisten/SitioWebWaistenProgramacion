"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-[#0c1a1a] to-[#1c3d5a]">
      <Image src="/fondo.jpg" alt="Background" width={1000} height={1000} className="absolute sm:fixed sm:w-full inset-0 top-0  h-[115vh] sm:h-full sm:object-cover opacity-50" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Título con efecto Glitch/Cyberpunk */}
            <div className="mb-6 md:mb-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl flex flex-col md:flex-row items-center justify-center font-bold relative leading-tight"
              >
                <span className="text-[#48bfda] relative pr-0 md:pr-1 pb-1 md:pb-2">
                  Waisten
                  {/* Efecto glitch base */}
                  <span className="absolute inset-0 text-[#48bfda] animate-glitch-1 opacity-0"></span>
                  <span className="absolute inset-0 text-[#6acfc7] animate-glitch-2 opacity-0"></span>
                  <span className="absolute inset-0 text-gray-800 animate-glitch-3 opacity-0"></span>
                </span>
                <span className="pb-1 md:pb-2 bg-gradient-to-r from-[#48bfda] to-[#6acfc7] bg-clip-text text-transparent relative">
                  Programación
                  {/* Efecto glitch para "Programación" */}
                  <span className="absolute inset-0 text-[#48bfda] animate-glitch-1-delayed opacity-0"></span>
                  <span className="absolute inset-0 text-[#6acfc7] animate-glitch-2-delayed opacity-0"></span>
                  <span className="absolute inset-0 text-[#48bfda] animate-glitch-3-delayed opacity-0"></span>
                </span>
              </motion.h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-[#48bfda] mb-8 md:mb-8 max-w-3xl mx-auto px-4"
            >
              Estudio de desarrolladores software
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-20 relative z-10 bg-[#0c1a1a]/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-white">
              Especializaciones
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16 mb-8 md:mb-12">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#48bfda] to-[#6acfc7] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">💻</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Desarrollo Web</h3>
                <p className="text-sm md:text-base text-neutral-400 text-balance px-2">Sitios modernos y responsivos</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#48bfda] to-[#6acfc7] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">🎨</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Diseño UX/UI</h3>
                <p className="text-sm md:text-base text-neutral-400 text-balance px-2">Experiencias de usuario intuitivas</p>
              </div>
              
              <div className="text-center sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#48bfda] to-[#6acfc7] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">⚡</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Optimización</h3>
                <p className="text-sm md:text-base text-neutral-400 text-balance px-2">Rendimiento y velocidad</p>
              </div>
            </div>

            <Link 
              href="/works" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#48bfda] to-[#6acfc7] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:from-[#0c5972] hover:to-[#48bfda] transition-all duration-300 group text-sm md:text-base"
            >
              Ver Proyectos
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes glitch-1 {
          0%, 100% { opacity: 0; transform: translate(0); }
          20% { opacity: 0.8; transform: translate(-2px, 2px); }
          40% { opacity: 0; transform: translate(-2px, -2px); }
          60% { opacity: 0.8; transform: translate(2px, 2px); }
          80% { opacity: 0; transform: translate(2px, -2px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { opacity: 0; transform: translate(0); }
          20% { opacity: 0.8; transform: translate(2px, -2px); }
          40% { opacity: 0; transform: translate(2px, 2px); }
          60% { opacity: 0.8; transform: translate(-2px, -2px); }
          80% { opacity: 0; transform: translate(-2px, 2px); }
        }
        
        @keyframes glitch-3 {
          0%, 100% { opacity: 0; transform: translate(0); }
          20% { opacity: 0.8; transform: translate(0, 2px); }
          40% { opacity: 0; transform: translate(0, -2px); }
          60% { opacity: 0.8; transform: translate(0, 2px); }
          80% { opacity: 0; transform: translate(0, -2px); }
        }
        
        .animate-glitch-1 {
          animation: glitch-1 3s infinite;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 3s infinite;
          animation-delay: 0.1s;
        }
        
        .animate-glitch-3 {
          animation: glitch-3 3s infinite;
          animation-delay: 0.2s;
        }
        
        .animate-glitch-1-delayed {
          animation: glitch-1 3s infinite;
          animation-delay: 1.5s;
        }
        
        .animate-glitch-2-delayed {
          animation: glitch-2 3s infinite;
          animation-delay: 1.6s;
        }
        
        .animate-glitch-3-delayed {
          animation: glitch-3 3s infinite;
          animation-delay: 1.7s;
        }
      `}</style>
    </main>
  );
}
