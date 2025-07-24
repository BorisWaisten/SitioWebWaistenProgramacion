"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            message: ""
          });
        }, 3000);
      } else {
        const errorData = await response.json();
        alert(`Error al enviar el mensaje: ${errorData.error || 'Error desconocido'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Por favor, intentá nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen relative bg-gradient-to-b from-[#0c1a1a] to-[#1c3d5a] py-12 md:py-20">
      <Image src="/fondo.jpg" alt="Background" fill className="fixed inset-0 top-0 h-full object-cover opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#48bfda]">
            Contacto
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#48bfda] max-w-3xl mx-auto px-4">
            Si tienes alguna pregunta o quieres trabajar en un proyecto juntos, no dudes en contactarme.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#0c1a1a]/90 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-[#1c3d5a] shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-8 md:py-12">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl md:text-2xl">✓</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-sm md:text-base text-neutral-400">
                  Te responderé en las próximas 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#1c3d5a]/80 border border-[#48bfda]/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-[#48bfda] transition-colors backdrop-blur-sm text-sm md:text-base"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#1c3d5a]/80 border border-[#48bfda]/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-[#48bfda] transition-colors backdrop-blur-sm text-sm md:text-base"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#1c3d5a]/80 border border-[#48bfda]/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-[#48bfda] transition-colors resize-none backdrop-blur-sm text-sm md:text-base"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#48bfda] to-[#6acfc7] text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:from-[#0c5972] hover:to-[#48bfda] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;
