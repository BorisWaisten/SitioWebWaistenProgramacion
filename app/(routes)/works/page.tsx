"use client"

import AnimatedSection from '@/components/ui/AnimatedSection';
import ProjectCard from '@/components/ui/ProjectCard';
import Button from '@/components/ui/Button';
import { useRepositories } from '@/hooks/useRepositories';

const WorksPage = () => {
  const { projectRepository } = useRepositories();
  const projects = projectRepository.getAllProjects();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c1a1a] to-[#1c3d5a] py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection
          animation="fadeInUp"
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Proyectos <span className="bg-gradient-to-r from-[#48bfda] to-[#6acfc7] bg-clip-text text-transparent">Realizados</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto px-4">
            Una muestra de los trabajos que he desarrollado para diferentes clientes y proyectos personales.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection
          animation="fadeInUp"
          delay={0.5}
          className="text-center mt-12 md:mt-20"
        >
          <div className="bg-gradient-to-r from-[#48bfda]/10 to-[#6acfc7]/10 border border-[#48bfda]/20 rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-sm md:text-base text-neutral-300 mb-4 md:mb-6">
              Estoy disponible para nuevos proyectos. ¡Hablemos sobre tu idea!
            </p>
            <Button href="/contact">
              Contactar
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default WorksPage;