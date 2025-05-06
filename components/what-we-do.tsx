"use client";

import { motion } from "framer-motion";

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

const WhatWeDo = () => (
  <section className="py-20 px-6 bg-secondary text-gray-800 text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
    <h2 className="text-3xl sm:text-4xl font-bold mb-8">Lo que hacemos</h2>
    </motion.div>

    <motion.div
      className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {[
        {
          title: "Páginas empresariales",
          text: "Mostrá tu empresa al mundo con una web sólida, rápida y moderna.",
        },
        {
          title: "Invitaciones digitales",
          text: "Personalizadas, interactivas y listas para compartir en segundos.",
        },
        {
          title: "Ecommerce y apps",
          text: "Tiendas online, apps móviles y sistemas de gestión a medida.",
        },
      ].map(({ title, text }, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="p-6 bg-white rounded-lg shadow-md  transition-all hover:bg-darkBg hover:text-white"
        >
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p>{text}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default WhatWeDo;
