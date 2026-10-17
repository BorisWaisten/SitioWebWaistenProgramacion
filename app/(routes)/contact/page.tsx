"use client";

import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/ui/ContactForm';
import ContactChannels from '@/components/ui/ContactChannels';
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
    <main className="pt-32 pb-20 md:pt-40">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12 md:mb-16">
          <h1 className="display text-5xl md:text-7xl mb-6">
            Con<span className="text-[#48bfda]">tacto</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-400 max-w-xl mx-auto">
            Escribime por WhatsApp, mandame un mail o dejame tu mensaje acá abajo. Como te quede más cómodo.
          </p>
        </AnimatedSection>

        <div className="mb-16">
          <ContactChannels />
        </div>

        <AnimatedSection animation="fadeInUp" delay={0.35}>
          <h2 className="mb-6 text-center text-xl font-semibold text-white md:text-2xl">
            O dejame tu mensaje
          </h2>
          <div className="card p-6 md:p-10">
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default ContactPage;
