"use client"

import AnimatedSection from '@/components/ui/AnimatedSection';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';
import { useRepositories } from '@/hooks/useRepositories';

export default function Home() {
  const { serviceRepository } = useRepositories();
  const services = serviceRepository.getAllServices();

  return (
    <main className="relative overflow-hidden">
      {/* Glow de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#48bfda]/10 blur-3xl"
      />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-40 pb-24 md:pt-52 md:pb-32">
        <AnimatedSection animation="fadeInUp">
          <span className="chip mb-8">
            <span className="h-2 w-2 rounded-full bg-[#48bfda]" />
            Estudio de desarrollo de software
          </span>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={0.15}>
          <h1 className="display text-5xl sm:text-7xl md:text-8xl text-balance">
            Ideas que se vuelven{" "}<br />
            <span className="text-[#48bfda]">productos digitales</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={0.3}>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-neutral-400">
            Diseñamos y desarrollamos sitios web, tiendas online, sistemas de
            gestión e invitaciones digitales con tecnologías modernas como
            React y Next.js.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={0.45}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/works" showArrow>Ver proyectos</Button>
            <Button href="/contact" variant="secondary">Contactar</Button>
          </div>
        </AnimatedSection>
      </section>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="stagger" delay={index * 0.1}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative z-10 py-24 md:py-32 text-center px-4">
        <AnimatedSection animation="fadeInUp">
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
