// app/components/PortfolioPreview.tsx
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
    description: "Ecommerce rápido, atractivo y adaptable a cualquier dispositivo.",
  },
  {
    title: "Invitación de boda",
    image: "/webBoda.png",
    description: "Invitaciones digitales interactivas, lista para enviar por WhatsApp.",
  },
  {
    title: "Sistema de gestión",
    image: "/webGestion.png",
    description: "Optimiza procesos con un sistema hecho a medida para tu negocio.",
  },
  {
    title: "Plataforma de Streaming",
    image: "/webTriduo.png",
    description: "Plataforma del documental HEMOSVISTOSUGLORIA.",
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-12"
      >
        Algunos de nuestros proyectos
      </motion.h2>

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
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PortfolioPreview;
