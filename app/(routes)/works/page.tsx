"use client"

import { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProjectCard from '@/components/ui/ProjectCard';
import Button from '@/components/ui/Button';
import { useRepositories } from '@/hooks/useRepositories';

const WorksPage = () => {
  const { projectRepository } = useRepositories();
  const allProjects = projectRepository.getAllProjects();
  const filters = ['Todos', ...projectRepository.getCategories()];
  const [active, setActive] = useState('Todos');
  const projects = active === 'Todos' ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <main className="pt-32 pb-20 md:pt-40">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <AnimatedSection animation="fadeInUp" className="mb-12 md:mb-16">
          <h1 className="display text-5xl md:text-7xl mb-6">
            Proyectos <span className="text-[#48bfda]">realizados</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl">
            Una muestra de los trabajos que desarrollamos para diferentes clientes y proyectos propios.
          </p>
        </AnimatedSection>

        {/* Filtros: la pastilla activa se desliza entre opciones (layoutId) */}
        <LayoutGroup>
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`relative rounded-full border border-white/10 px-4 py-1.5 text-sm transition-colors ${
                  active === filter ? 'text-[#05090e]' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {active === filter && (
                  <motion.span
                    layoutId="works-filter"
                    className="absolute inset-0 rounded-full bg-[#48bfda]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{filter}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* CTA */}
        <AnimatedSection animation="fadeInUp" delay={0.3} className="text-center mt-20">
          <h2 className="display text-3xl md:text-5xl mb-4">
            ¿Tenés un proyecto <span className="text-[#48bfda]">en mente?</span>
          </h2>
          <p className="text-neutral-400 mb-8">
            Estamos disponibles para nuevos proyectos. ¡Hablemos sobre tu idea!
          </p>
          <Button href="/contact" showArrow>Contactar</Button>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default WorksPage;
