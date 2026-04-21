"use client"

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';
import { useRepositories } from '@/hooks/useRepositories';

export default function Home() {
  const { serviceRepository } = useRepositories();
  const services = serviceRepository.getAllServices();

  return (
    <main className="min-h-screen relative bg-gradient-to-b from-[#0c1a1a] to-[#1c3d5a]">
      <Image 
        src="/fondo.jpg" 
        alt="Background" 
        width={1000} 
        height={1000} 
        className="absolute sm:fixed sm:w-full inset-0 top-0 h-[115vh] sm:h-full sm:object-cover opacity-50" 
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection animation="fadeInUp" delay={0.3}>
            <div className="mb-6 md:mb-4 flex justify-center">
              <AnimatedSection animation="fadeInUp" delay={0.5}>
                <Image 
                  src="/Logo.2.svg" 
                  alt="Logo" 
                  width={100} 
                  height={100} 
                  className="md:w-[400px] mx-auto" 
                />
              </AnimatedSection>
            </div>
            
            <AnimatedSection animation="fadeInRight" delay={0.4}>
              <p className="text-lg sm:text-xl md:text-2xl text-[#48bfda] mb-8 md:mb-8 max-w-3xl mx-auto px-4">
                Estudio de desarrollo de software
              </p>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 relative z-10 bg-[#0c1a1a]/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <AnimatedSection
            animation="fadeInUp"
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-white">
              Especializaciones
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16 mb-8 md:mb-12">
              {services.map((service, index) => (
                <AnimatedSection
                  key={service.title}
                  animation="stagger"
                  delay={index * 0.1}
                >
                  <ServiceCard service={service} />
                </AnimatedSection>
              ))}
            </div>

            <Button href="/works" showArrow>
              Ver Proyectos
            </Button>
          </AnimatedSection>
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
