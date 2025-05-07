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

const services = [
  {
    title: "Páginas empresariales",
    text: "Transmití confianza y profesionalismo con una web rápida y adaptada a tu negocio.",
  },
  {
    title: "Invitaciones digitales",
    text: "Una forma única y moderna de compartir momentos importantes, en segundos.",
  },
  {
    title: "Ecommerce y apps",
    text: "Vendé online, gestioná tus pedidos o digitalizá procesos. Nosotros lo desarrollamos.",
  },
];

const WhatWeDo = () => (
  <section className="py-20 px-6 bg-secondary text-gray-800 text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Lo que podemos hacer por vos</h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-12">
        Desde tu primera web hasta soluciones digitales a medida, te ayudamos a crecer con tecnología.
      </p>
    </motion.div>

    <motion.div
      className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {services.map(({ title, text }, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="group p-6 bg-white rounded-lg shadow-md transition-all hover:bg-gray-900 hover:text-white"
        >
          <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p>{text}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default WhatWeDo;
