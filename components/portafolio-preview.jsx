"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ExternalLink, Calendar, Users, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";  
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const portfolioItems = [
  {
    title: "EcoStore - Tienda Online",
    image: "/webEco.png",
    description: "Plataforma de e-commerce moderna con gestión completa de productos, pagos seguros y panel administrativo.",
    category: "E-commerce",
    year: "2024",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    features: ["Carrito de compras", "Pasarela de pagos", "Panel admin", "SEO optimizado"],
    link: "#",
    client: "EcoStore"
  },
  {
    title: "Digital Wedding - Invitación Digital",
    image: "/webBoda.png",
    description: "Experiencia digital interactiva para compartir momentos especiales con diseño personalizado y animaciones.",
    category: "Landing Page",
    year: "2024",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    features: ["Diseño responsivo", "Animaciones", "Formulario RSVP", "Galería de fotos"],
    link: "#",
    client: "Boda Personal"
  },
  {
    title: "Business Manager - Sistema de Gestión",
    image: "/webGestion.png",
    description: "Aplicación web completa para automatizar procesos empresariales y optimizar la gestión interna.",
    category: "Aplicación Web",
    year: "2024",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    features: ["Dashboard analítico", "Gestión de usuarios", "Reportes automáticos", "API REST"],
    link: "#",
    client: "Empresa Privada"
  },
  {
    title: "StreamHub - Plataforma de Streaming",
    image: "/webTriduo.png",
    description: "Sitio web profesional para contenidos audiovisuales con sistema de suscripciones y reproducción HD.",
    category: "Plataforma Web",
    year: "2024",
    technologies: ["React", "Firebase", "Vimeo API", "Stripe"],
    features: ["Reproductor HD", "Sistema de suscripciones", "Contenido premium", "Analytics"],
    link: "#",
    client: "StreamHub"
  },
];

const PortfolioPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-800 to-neutral-900 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-40 h-40 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">Portfolio</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Proyectos que{" "}
            <span className="gradient-text">inspiran</span> y convierten
          </h2>
          
          <p className="text-xl text-neutral-300 text-balance max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es una historia de éxito. Diseños únicos y funcionales 
            que ayudaron a nuestros clientes a alcanzar sus objetivos digitales.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + ' bg-primary-500"></span>';
            }
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="portfolio-swiper max-w-6xl mx-auto"
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="card overflow-hidden h-full">
                  {/* Mockup del dispositivo */}
                  <div className="relative mb-6">
                    <div className="relative mx-auto w-full max-w-sm">
                      {/* Frame del dispositivo */}
                      <div className="relative bg-neutral-700 rounded-t-3xl p-2 shadow-2xl">
                        {/* Barra superior del dispositivo */}
                        <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 rounded-t-2xl">
                          <div className="flex space-x-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="text-xs text-neutral-400">9:41</div>
                        </div>
                        
                        {/* Imagen del proyecto */}
                        <div className="relative overflow-hidden rounded-b-2xl">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={500}
                            height={500}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          
                          {/* Overlay con información */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex items-center justify-between">
                                <span className="text-white text-sm font-medium">{item.category}</span>
                                <span className="text-white/80 text-xs">{item.year}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-neutral-100 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-neutral-400 hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    
                    <p className="text-neutral-400 mb-4 text-balance leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-primary-500/10 text-primary-400 text-xs rounded-full border border-primary-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Características */}
                    <div className="space-y-2 mb-6">
                      {item.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-500">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Cliente y año */}
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{item.client}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Indicador de hover */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <a 
            href="/works" 
            className="btn-primary inline-flex items-center gap-2 group"
          >
            <span>Ver todos los proyectos</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .portfolio-swiper .swiper-pagination-bullet {
          background: #64748b;
          opacity: 0.5;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background: #3b82f6;
          opacity: 1;
        }
        .swiper-button-prev-custom {
          left: 10px;
        }
        .swiper-button-next-custom {
          right: 10px;
        }
      `}</style>
    </section>
  );
};

export default PortfolioPreview;
