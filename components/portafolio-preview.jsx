"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const portfolioItems = [
  {
    title: "Tienda online",
    image: "/webEco.png",
    description: "Una tienda moderna que vende 24/7. Adaptada a cualquier pantalla.",
  },
  {
    title: "Invitación de boda",
    image: "/webBoda.png",
    description: "Una experiencia digital personalizada y lista para compartir.",
  },
  {
    title: "Sistema de gestión",
    image: "/webGestion.png",
    description: "Automatizá tareas, organizá tu negocio y ganá tiempo.",
  },
  {
    title: "Plataforma de Streaming",
    image: "/webTriduo.png",
    description: "Un sitio profesional para contenidos audiovisuales a demanda.",
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-20  px-6 bg-white text-primaryText text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Algunos de nuestros proyectos
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Diseños únicos y funcionales que ayudaron a otras personas a dar el siguiente paso. ¿Te animás a ser el próximo?
        </p>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-lg text-left"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl text-gray-800 font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>


        <a href="/works" className="mt-8 inline-block bg-primaryText btn-style4 px-6 py-3 text-lg rounded-xl">
          Proyectos
        </a>
      </motion.div>

    </section>
  );
};

export default PortfolioPreview;
