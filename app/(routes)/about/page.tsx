"use client"

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { Code, Bot, Workflow, Rocket } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-32 pb-20 md:pt-40">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-12 md:mb-16">
          <h1 className="display text-5xl md:text-7xl mb-6">
            El <span className="text-[#48bfda]">estudio</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            Waisten Programación es un estudio de desarrollo de software.
            Ayudamos a empresas y emprendedores a digitalizar y automatizar su negocio.
          </p>
        </AnimatedSection>

        {/* Qué resolvemos */}
        <AnimatedSection animation="fadeInUp" delay={0.2} className="card p-6 md:p-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <Code className="w-6 h-6 md:w-8 md:h-8 text-[#48bfda]" />
            Qué hacemos
          </h2>
          <p className="text-neutral-300  text-base md:text-lg leading-relaxed">
            Diseñamos y desarrollamos productos digitales a medida: <span className="text-white font-semibold">sitios web y</span>
             <span className="text-white font-semibold">aplicaciones</span>, <span className="text-white font-semibold">tiendas online</span>,
            <span className="text-white font-semibold">sistemas de gestión</span> e <span className="text-white font-semibold">invitaciones digitales</span>. 
            También creamos <span className="text-white font-semibold">chatbots</span> que
            atienden a tus clientes 24/7 e <span className="text-white font-semibold">integraciones backend</span> que
            conectan tus sistemas entre sí — por ejemplo, tu software de gestión
            con tu CRM — para que la información fluya de forma automática, sin
            doble carga ni errores manuales. Trabajamos con tecnologías modernas
            como React, Next.js y Node, priorizando soluciones simples, rápidas y
            fáciles de mantener.
          </p>
        </AnimatedSection>

        {/* Cómo trabajamos */}
        <AnimatedSection animation="fadeInUp" delay={0.6} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Workflow className="w-7 h-7 text-[#48bfda]" />
            Cómo trabajamos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ['Soluciones a medida', 'Cada proyecto parte de entender tu negocio: construimos lo que necesitás, sin funcionalidades de más.'],
              ['Tecnología moderna', 'React, Next.js y Node como base. Productos rápidos, seguros y preparados para crecer.'],
              ['Comunicación directa', 'Trato directo y sin intermediarios durante todo el proyecto, con avances visibles desde el primer día.'],
              ['Acompañamiento continuo', 'La entrega no es el final: damos soporte y evolucionamos el producto junto a tu negocio.'],
            ].map(([title, desc]) => (
              <div key={title} className="card p-5">
                <h3 className="text-lg font-semibold text-[#48bfda] mb-2">{title}</h3>
                <p className="text-neutral-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Quién está detrás */}
        <AnimatedSection animation="fadeInUp" delay={0.7} className="card p-6 md:p-8 mb-12 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0 rounded-full overflow-hidden border border-white/10">
            <Image src="/BORIS 2.png" alt="Boris Waisten" fill className="object-cover" />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">Boris Waisten</h2>
            <p className="text-[#48bfda] text-sm md:text-base mb-3">Fundador · Desarrollador Fullstack</p>
            <p className="text-neutral-400 text-sm md:text-base">
              Analista de Sistemas y desarrollador fullstack, lidera cada proyecto
              del estudio de principio a fin.
            </p>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fadeInUp" delay={0.8} className="text-center">
          <h2 className="display text-3xl md:text-5xl mb-4">
            <Rocket className="inline w-8 h-8 md:w-10 md:h-10 text-[#48bfda] mr-2 -mt-2" />
            ¿Trabajamos <span className="text-[#48bfda]">juntos?</span>
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Contanos qué necesita tu negocio y te proponemos la mejor forma de resolverlo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/works" variant="primary">Ver Proyectos</Button>
            <Button href="/contact" variant="secondary">Contactar</Button>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
