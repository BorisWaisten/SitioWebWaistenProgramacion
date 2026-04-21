"use client"

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { Code, GraduationCap, MapPin, Heart, Lightbulb} from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-[#0c1a1a] to-[#1c3d5a]">
      <Image 
        src="/fondo.jpg" 
        alt="Background" 
        width={1000} 
        height={1000} 
        className="absolute sm:fixed sm:w-full inset-0 top-0 h-[115vh] sm:h-full sm:object-cover opacity-50" 
      />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Hero Section */}
        <AnimatedSection
          animation="fadeInUp"
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#48bfda]/30 shadow-2xl">
              <Image
                src="/BORIS 2.png"
                alt="Boris Waisten"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Boris <span className="bg-gradient-to-r from-[#48bfda] to-[#6acfc7] bg-clip-text text-transparent">Waisten</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-[#48bfda] mb-6">
            Analista de Sistemas | Desarrollador Fullstack
          </p>
        </AnimatedSection>

        {/* About Section */}
        <div className="max-w-4xl mx-auto">
          {/* Personal Info */}
          <AnimatedSection
            animation="fadeInUp"
            delay={0.2}
            className="bg-[#0c1a1a]/90 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-[#1c3d5a] mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-[#48bfda]" />
              Sobre Mí
            </h2>
            
            <div className="space-y-4 text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#48bfda] mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  <span className="text-white font-semibold">Entrerriano</span> viviendo en <span className="text-white font-semibold">Capital Federal</span>
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-[#48bfda] text-xl">🎂</span>
                <p className="text-base md:text-lg">
                  <span className="text-white font-semibold">28 años</span> de edad
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-[#48bfda] mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  <span className="text-white font-semibold">Desarrollador Fullstack</span> 
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#48bfda] mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  <span className="text-white font-semibold">Analista de Sistemas</span> recibido en el Instituto Tecnológico ORT
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#6acfc7] mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  Actualmente estudiando <span className="text-white font-semibold">Ingeniería Informática</span> en la UCEMA
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Passion Section */}
          <AnimatedSection
            animation="fadeInUp"
            delay={0.4}
            className="bg-[#0c1a1a]/90 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-[#1c3d5a] mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-[#48bfda]" />
              Mi Pasión
            </h2>
            
            <div className="space-y-4 text-neutral-300 text-base md:text-lg leading-relaxed">
              <p>
                Me dedico a la programación porque me <span className="text-[#48bfda] font-semibold">apasiona pensar</span>, 
                <span className="text-[#48bfda] font-semibold"> desarrollar</span> y 
                <span className="text-[#48bfda] font-semibold"> generar lógicas</span> a través de código.
              </p>
              
              <div className="flex items-start gap-3 mt-6">
                <Lightbulb className="w-6 h-6 text-[#6acfc7] mt-1 flex-shrink-0" />
                <p className="italic text-[#6acfc7]">
                  &ldquo;Ver el fruto de ese razonamiento plasmado en algo digital es lo que me motiva cada día&rdquo;
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Skills/Interests */}
          <AnimatedSection
            animation="fadeInUp"
            delay={0.6}
            className="bg-[#0c1a1a]/90 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-[#1c3d5a] mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Enfoque Profesional
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1c3d5a]/30 rounded-lg p-4 border border-[#48bfda]/20">
                <h3 className="text-lg font-semibold text-[#48bfda] mb-2">Desarrollo Fullstack</h3>
                <p className="text-neutral-300 text-sm">
                  Experiencia en desarrollo tanto del lado del cliente como del servidor
                </p>
              </div>
              
              <div className="bg-[#1c3d5a]/30 rounded-lg p-4 border border-[#48bfda]/20">
                <h3 className="text-lg font-semibold text-[#48bfda] mb-2">Análisis de Sistemas</h3>
                <p className="text-neutral-300 text-sm">
                  Capacidad para analizar, diseñar e implementar soluciones tecnológicas
                </p>
              </div>
              
              <div className="bg-[#1c3d5a]/30 rounded-lg p-4 border border-[#48bfda]/20">
                <h3 className="text-lg font-semibold text-[#48bfda] mb-2">Formación Continua</h3>
                <p className="text-neutral-300 text-sm">
                  En constante aprendizaje, actualmente cursando Ingeniería Informática
                </p>
              </div>
              
              <div className="bg-[#1c3d5a]/30 rounded-lg p-4 border border-[#48bfda]/20">
                <h3 className="text-lg font-semibold text-[#48bfda] mb-2">Pensamiento Lógico</h3>
                <p className="text-neutral-300 text-sm">
                  Pasión por resolver problemas complejos a través del código
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection
            animation="fadeInUp"
            delay={0.8}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#48bfda]/10 to-[#6acfc7]/10 border border-[#48bfda]/20 rounded-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                ¿Trabajamos juntos?
              </h2>
              <p className="text-neutral-300 mb-6 text-sm md:text-base">
                Si tienes un proyecto en mente o quieres conocer más sobre mi trabajo, no dudes en contactarme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/works" variant="primary">
                  Ver Proyectos
                </Button>
                <Button href="/contact" variant="secondary">
                  Contactar
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}