"use client";
import { 
  Instagram, 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  Heart,
  Coffee,
  Calendar
} from "lucide-react";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container-page";
import { MotionTransition } from "@/components/transition-component";
import { motion } from "framer-motion";
import { useState } from "react";

const contactOptions = [
  {
    title: "WhatsApp",
    icon: MessageCircle,
    description: "+54 3446 575620",
    subtitle: "Respuesta inmediata",
    href: "https://wa.me/543446575620",
    color: "green"
  },
  {
    title: "Email",
    icon: Mail,
    description: "boriswaisten@gmail.com",
    subtitle: "Para proyectos detallados",
    href: "mailto:boriswaisten@gmail.com",
    color: "blue"
  },
  {
    title: "Instagram",
    icon: Instagram,
    description: "@waistenprogramacion",
    subtitle: "Seguí nuestro trabajo",
    href: "https://instagram.com/waistenprogramacion",
    color: "pink"
  },
  {
    title: "Teléfono",
    icon: Phone,
    description: "+54 3446 575620",
    subtitle: "Llamada directa",
    href: "tel:+543446575620",
    color: "purple"
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
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
            phone: "",
            project: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContainerPage>
      <div className="container-custom section-padding">
        <MotionTransition position="bottom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">Contacto</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contame tu{" "}
              <span className="gradient-text">proyecto</span>{" "}
              y hagámoslo realidad
            </h1>
            
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Cada proyecto comienza con una conversación. Estoy aquí para escuchar tu idea 
              y ayudarte a transformarla en una solución digital excepcional.
            </p>
          </div>
        </MotionTransition>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulario */}
          <MotionTransition position="bottom">
            <div className="card">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary-500/10 rounded-xl">
                  <Send className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-neutral-100">Enviá tu mensaje</h2>
                  <p className="text-neutral-400">Contame sobre tu proyecto</p>
                </div>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-100 mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-neutral-400">
                    Te responderé en las próximas 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Tipo de proyecto *
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:border-primary-500 transition-colors"
                      >
                        <option value="">Seleccioná una opción</option>
                        <option value="website">Sitio web</option>
                        <option value="ecommerce">Tienda online</option>
                        <option value="app">Aplicación web</option>
                        <option value="landing">Landing page</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Cuentame sobre tu proyecto *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      placeholder="Describí tu idea, objetivos, funcionalidades que necesitás..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar mensaje
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </MotionTransition>

          {/* Información de contacto */}
          <MotionTransition position="right">
            <div className="space-y-8">
              {/* Opciones de contacto */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-100 mb-6">
                  Otras formas de contactarme
                </h2>
                <div className="grid gap-4">
                  {contactOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <motion.a
                        key={index}
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="card group cursor-pointer"
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-${option.color}-500/10 border border-${option.color}-500/20`}>
                            <IconComponent className={`w-6 h-6 text-${option.color}-400`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-white transition-colors">
                              {option.title}
                            </h3>
                            <p className="text-neutral-400 text-sm">{option.subtitle}</p>
                            <p className="text-primary-400 font-medium">{option.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-primary-400 transition-colors" />
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>


            </div>
          </MotionTransition>
        </div>
      </div>
    </ContainerPage>
  );
};

export default ContactPage;
