"use client"

import { useState } from 'react';
import { ContactFormData } from '@/types';
import Button from './Button';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<{ success: boolean; message: string }>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await onSubmit(formData);
      setSubmitResult(result);
      
      if (result.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: '',
          message: '',
        });
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'Error interno del servidor',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-[#0c1a1a]/50 border border-[#1c3d5a] rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-[#48bfda] transition-colors"
            placeholder="Tu nombre completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-[#0c1a1a]/50 border border-[#1c3d5a] rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-[#48bfda] transition-colors"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
          Teléfono (opcional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-[#0c1a1a]/50 border border-[#1c3d5a] rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-[#48bfda] transition-colors"
          placeholder="+54 9 11 1234-5678"
        />
      </div>

      <div>
        <label htmlFor="project" className="block text-sm font-medium text-white mb-2">
          Tipo de Proyecto *
        </label>
        <select
          id="project"
          name="project"
          value={formData.project}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-[#0c1a1a]/50 border border-[#1c3d5a] rounded-lg text-white focus:outline-none focus:border-[#48bfda] transition-colors"
        >
          <option value="">Selecciona un tipo de proyecto</option>
          <option value="Página Web">Página Web</option>
          <option value="Aplicación Móvil">Aplicación Móvil</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Sistema de Gestión">Sistema de Gestión</option>
          <option value="Invitación Digital">Invitación Digital</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-[#0c1a1a]/50 border border-[#1c3d5a] rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-[#48bfda] transition-colors resize-none"
          placeholder="Cuéntame sobre tu proyecto..."
        />
      </div>

      {submitResult && (
        <div className={`p-4 rounded-lg ${
          submitResult.success 
            ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
            : 'bg-red-500/20 border border-red-500/30 text-red-300'
        }`}>
          {submitResult.message}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </Button>
    </form>
  );
}

