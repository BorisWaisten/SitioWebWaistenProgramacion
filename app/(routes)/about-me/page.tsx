"use client";

import Image from "next/image";
import ContainerPage from "@/components/container-page";
import { MotionTransition } from "@/components/transition-component";
import { motion } from "framer-motion";

const developers = [
  {
    name: "Boris Waisten",
    image: "/BORIS 2.png",
    role: "Full Stack Developer",
    description:
      "Analista de Sistemas recibido en el Instituto Tecnológico ORT.",
  },
  {
    name: "Lucas",
    image: "/lucas2.jpg",
    role: "Full Stack Developer",
    description:
      "Ingeniero Informático recibido en la Universidad de Buenos Aires.",
  },
];

const AboutMePage = () => {
  return (
    <ContainerPage>
      <MotionTransition position="bottom">
        <h1 className="text-3xl md:text-5xl text-center font-bold mb-12">
          Somos{" "}
          <span className="text-secondary">desarrolladores comprometidos</span>
        </h1>
      </MotionTransition>

      <MotionTransition position="bottom">
        <section className="text-center max-w-3xl mx-auto mb-16 text-white/80 text-lg">
          <p>
            Somos hermanos gemelos, apasionados por la programación y la
            tecnología. Combinamos nuestras habilidades para crear soluciones
            digitales modernas, funcionales y con propósito.
          </p>
        </section>
      </MotionTransition>

      <div className="grid gap-10 mb-5 md:grid-cols-2">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="relative w-full max-w-sm h-[400px] mx-auto overflow-hidden rounded-xl shadow-xl group"
          >
            {/* Imagen */}
            <div className="relative h-full">
              <Image
                src={dev.image}
                alt={dev.name}
                fill
                className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
              {/* Capa oscura */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-500 rounded-xl" />
            </div>

            {/* Información de desarrollador */}
            <div className="absolute bottom-0 w-full bg-transparent backdrop-blur-sm p-4 rounded-t-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-xl font-bold text-white">{dev.name}</h2>
                <h3 className="text-secondary font-medium">{dev.role}</h3>
                <p className="text-white/70 text-sm mt-2">{dev.description}</p>

              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </ContainerPage>
  );
};

export default AboutMePage;
