"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Code, 
  Search, 
  Shield,
  Zap,
  Users,
  Target,
  TrendingUp
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const services = [
  {
    icon: Globe,
    title: "Sitios Web Profesionales",
    description: "Diseños modernos y responsivos que transmiten confianza y profesionalismo.",
    features: ["Diseño personalizado", "Optimización SEO", "Velocidad garantizada"],
    color: "primary"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Tiendas Online",
    description: "Plataformas de venta completas con gestión de productos y pagos seguros.",
    features: ["Pasarelas de pago", "Gestión de inventario", "Panel administrativo"],
    color: "secondary"
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Web",
    description: "Soluciones a medida para digitalizar y optimizar tus procesos empresariales.",
    features: ["Desarrollo personalizado", "Integración de APIs", "Escalabilidad"],
    color: "accent"
  },
  {
    icon: Search,
    title: "SEO & Marketing Digital",
    description: "Optimización para motores de búsqueda y estrategias de marketing online.",
    features: ["Análisis de keywords", "Optimización técnica", "Reportes mensuales"],
    color: "primary"
  },
  {
    icon: Shield,
    title: "Mantenimiento & Soporte",
    description: "Mantenimiento continuo, actualizaciones de seguridad y soporte técnico 24/7.",
    features: ["Backups automáticos", "Monitoreo 24/7", "Soporte prioritario"],
    color: "secondary"
  },
  {
    icon: Code,
    title: "Desarrollo a Medida",
    description: "Soluciones personalizadas que se adaptan perfectamente a tus necesidades específicas.",
    features: ["Análisis de requerimientos", "Desarrollo ágil", "Testing exhaustivo"],
    color: "accent"
  }
];

const colorClasses = {
  primary: {
    bg: "bg-primary-500/10",
    border: "border-primary-500/20",
    icon: "text-primary-500",
    hover: "hover:bg-primary-500/20",
    gradient: "from-primary-500/20 to-primary-600/20"
  },
  secondary: {
    bg: "bg-secondary-500/10",
    border: "border-secondary-500/20",
    icon: "text-secondary-500",
    hover: "hover:bg-secondary-500/20",
    gradient: "from-secondary-500/20 to-secondary-600/20"
  },
  accent: {
    bg: "bg-accent-500/10",
    border: "border-accent-500/20",
    icon: "text-accent-500",
    hover: "hover:bg-accent-500/20",
    gradient: "from-accent-500/20 to-accent-600/20"
  }
};

const WhatWeDo = () => {
  const router = useRouter();
  return (
  <section className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-800 relative overflow-hidden">
    {/* Elementos decorativos de fondo */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent-500 rounded-full blur-3xl"></div>
    </div>

    <div className="container-custom relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
          <Zap className="w-4 h-4 text-primary-400" />
          <span className="text-sm font-medium text-primary-300">Nuestros Servicios</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Soluciones digitales que{" "}
          <span className="gradient-text">transforman</span> tu negocio
        </h2>
        
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          Desde sitios web profesionales hasta aplicaciones complejas, 
          creamos soluciones que impulsan el crecimiento de tu empresa.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, index) => {
          const IconComponent = service.icon;
          const colors = colorClasses[service.color as keyof typeof colorClasses];
          
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`card group cursor-pointer ${colors.hover} ${colors.border}`}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${colors.bg} ${colors.border}`}>
                  <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-neutral-100 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-500">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Indicador de hover */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-neutral-100">
            ¿No encontrás lo que buscás?
          </h3>
          <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
            Cada proyecto es único. Contame tu idea y te ayudo a encontrar la solución perfecta para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary" onClick={() => router.push('/contact')}>
              <span className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Solicitar presupuesto
              </span>
            </button>
            <button className="btn-secondary" onClick={() => router.push('/works')}>
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Ver casos de éxito
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default WhatWeDo;
