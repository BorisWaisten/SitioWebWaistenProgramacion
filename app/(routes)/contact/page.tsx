"use client";

import Image from "next/image";
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/ui/ContactForm';
import { ContactFormData } from '@/types';

const ContactPage = () => {
  const handleSubmit = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        return {
          success: true,
          message: data.message || 'Mensaje enviado correctamente',
        };
      } else {
        return {
          success: false,
          message: data.error || 'Error al enviar el mensaje',
        };
      }
    } catch (error) {
      console.error('Error:', error);
      return {
        success: false,
        message: 'Error al enviar el mensaje. Por favor, intentá nuevamente.',
      };
    }
  };

  return (
    <main className="min-h-screen relative bg-gradient-to-b from-[#0c1a1a] to-[#1c3d5a] py-12 md:py-20">
      <Image 
        src="/fondo.jpg" 
        alt="Background" 
        fill 
        className="fixed inset-0 top-0 h-full object-cover opacity-50" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection
          animation="fadeInUp"
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#48bfda]">
            Contacto
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#48bfda] max-w-3xl mx-auto px-4">
            Si tienes alguna pregunta o quieres trabajar en un proyecto juntos, no dudes en contactarme.
          </p>
        </AnimatedSection>

        <AnimatedSection
          animation="fadeInUp"
          delay={0.2}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#0c1a1a]/90 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-[#1c3d5a] shadow-2xl">
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default ContactPage;
