"use client";

import Image from "next/image";
import ContainerPage from "@/components/container-page";
import { MotionTransition } from "@/components/transition-component";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const developers = [
  {
    name: "Boris Waisten",
    image: "/BORIS 2.png",
    role: "Full Stack Developer",
    education: "Analista de Sistemas - Instituto Tecnológico ORT",
  },
  {
    name: "Lucas Waisten",
    image: "/lucas2.jpg",
    role: "Full Stack Developer",
    education: "Ingeniero Informático - Universidad de Buenos Aires",
  },
];

const AboutMePage = () => {
  return (
    <ContainerPage>
      <div className="container-custom section-padding">
        {/* Hero Section */}
        <MotionTransition position="bottom">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Somos{" "}
              <span className="gradient-text">hermanos gemelos</span>{" "}
              apasionados por crear
            </h1>
            
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Combinamos nuestras habilidades únicas para transformar visiones en realidad digital.
            </p>
          </div>
        </MotionTransition>

        {/* Equipo */}
        <MotionTransition position="bottom">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Conocé al{" "}
              <span className="gradient-text">equipo</span>{" "}
              detrás de cada proyecto
            </h2>
            
            <div className="grid gap-12 lg:grid-cols-2">
              {developers.map((dev, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="card group"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Imagen */}
                    <div className="relative w-full lg:w-48 h-64 lg:h-48 overflow-hidden rounded-2xl">
                      <Image
                        src={dev.image}
                        alt={dev.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Información */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <h3 className="text-2xl font-bold text-neutral-100">
                          {dev.name}
                        </h3>
                      </div>
                      
                      <p className="text-primary-400 font-semibold mb-2">
                        {dev.role}
                      </p>
                      
                      <p className="text-neutral-400 text-sm">
                        {dev.education}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </MotionTransition>
      </div>
    </ContainerPage>
  );
};

export default AboutMePage;
