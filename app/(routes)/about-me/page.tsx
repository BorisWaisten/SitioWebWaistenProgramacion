"use client";

import ContainerPage from "@/components/container-page";
import Image from "next/image";
import { MotionTransition } from "@/components/transition-component";

const developers = [
  {
    name: "Boris Waisten",
    image: "/BORIS 2.png",
    description:
      "Analista de Sistemas de Información, recibido en el Instituto Tecnológico ORT.",
  },
  {
    name: "Lucas",
    image: "/lucas2.jpg",
    description:
      "Ingeniero Informatico, recibido en la Universidad de Buenos Aires.",
  },
];

const AboutMePage = () => {
  return (
    <>
      <ContainerPage>
        <MotionTransition
          position="bottom"
        >
        <h1 className="text-2xl md:text-5xl text-center font-bold mb-8">
          Somos un equipo de{" "}
          <span className="text-secondary">desarrolladores comprometidos</span>
        </h1>
        </MotionTransition>

        <div className="flex flex-col h-screen gap-12 md:gap-20 md:flex-row md:justify-around">
          {developers.map((dev, index) => (
            <MotionTransition
              key={dev.name}
              position={index % 2 === 0 ? "bottom" : "bottom"}
              className="flex flex-col items-center md:w-1/2 text-center"
            >
              <div className="relative w-60 h-60 mb-4"> {/* Contenedor cuadrado */}
                <Image
                  src={dev.image}
                  alt={dev.name}
                  layout="fill"
                  className="rounded-full object-cover" // Imagen redonda
                />
              </div>
              <h2 className="text-xl font-semibold text-primary">{dev.name}</h2>
              <p className="text-base text-balance text-white/80 max-w-md mt-2">
                {dev.description}
              </p>
            </MotionTransition>
          ))}
        </div>
      </ContainerPage>
    </>
  );
};

export default AboutMePage;
