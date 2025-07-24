"use client"

import { motion } from 'framer-motion';
import { dataPortfolio } from "@/data";
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const WorksPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c1a1a] to-[#1c3d5a] py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Proyectos <span className="bg-gradient-to-r from-[#48bfda] to-[#6acfc7] bg-clip-text text-transparent">Realizados</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto px-4">
            Una muestra de los trabajos que he desarrollado para diferentes clientes y proyectos personales.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {dataPortfolio.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0c1a1a]/80 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-[#1c3d5a]"
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 md:gap-4">
                  <a
                    href={project.urlDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#48bfda]/20 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-[#48bfda]/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </a>
                  {project.urlGithub !== "#!" && (
                    <a
                      href={project.urlGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#6acfc7]/20 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-[#6acfc7]/30 transition-colors"
                    >
                      <Github className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                  <a
                    href={project.urlDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-[#48bfda] to-[#6acfc7] text-white py-2 px-3 md:px-4 rounded-lg text-center hover:from-[#0c5972] hover:to-[#48bfda] transition-all duration-300 text-sm md:text-base"
                  >
                    Ver Demo
                  </a>
                  {project.urlGithub !== "#!" && (
                    <a
                      href={project.urlGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#1c3d5a] text-white py-2 px-3 md:px-4 rounded-lg text-center hover:bg-[#0c5972] transition-all duration-300 border border-[#48bfda]/30 text-sm md:text-base"
                    >
                      Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 md:mt-20"
        >
          <div className="bg-gradient-to-r from-[#48bfda]/10 to-[#6acfc7]/10 border border-[#48bfda]/20 rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-sm md:text-base text-neutral-300 mb-4 md:mb-6">
              Estoy disponible para nuevos proyectos. ¡Hablemos sobre tu idea!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#48bfda] to-[#6acfc7] text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:from-[#0c5972] hover:to-[#48bfda] transition-all duration-300 text-sm md:text-base"
            >
              Contactar
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default WorksPage;