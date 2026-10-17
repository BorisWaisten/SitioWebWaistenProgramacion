"use client"

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';
import LogoIntro from '@/components/brand/LogoIntro';
import LogoMark from '@/components/brand/LogoMark';
import Hero from '@/components/home/Hero';
import FeaturedWorks from '@/components/home/FeaturedWorks';
import Process from '@/components/home/Process';
import { useRepositories } from '@/hooks/useRepositories';

export default function Home() {
  const { serviceRepository, projectRepository } = useRepositories();
  const services = serviceRepository.getAllServices();
  const featured = projectRepository.getFeaturedProjects();
  const [introDone, setIntroDone] = useState(false);

  return (
    // overflow-x-clip (y no overflow-hidden) para no romper el position: sticky de la galería
    <main className="relative overflow-x-clip">
      <LogoIntro onDone={() => setIntroDone(true)} />

      {/* Glow de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#48bfda]/10 blur-3xl"
      />

      <Hero ready={introDone} />

      {/* Servicios */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection animation="fadeInUp">
            <h2 className="display text-4xl md:text-6xl mb-4">
              Qué <span className="text-[#48bfda]">hacemos</span>
            </h2>
            <p className="text-neutral-400 max-w-xl mb-12">
              Seis especializaciones, un mismo estándar de calidad.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index % 3} />
            ))}
          </div>
        </div>
      </section>

      <FeaturedWorks projects={featured} />

      <Process />

      {/* CTA final */}
      <section className="relative z-10 py-24 md:py-32 text-center px-4">
        <AnimatedSection animation="fadeInUp">
          <div className="mb-8 flex justify-center">
            <LogoMark size={64} />
          </div>
          <h2 className="display text-4xl md:text-6xl mb-6 text-balance">
            ¿Tenés un proyecto <span className="text-[#48bfda]">en mente?</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-10">
            Contanos tu idea y la convertimos en realidad.
          </p>
          <Button href="/contact" showArrow>Hablemos</Button>
        </AnimatedSection>
      </section>
    </main>
  );
}
