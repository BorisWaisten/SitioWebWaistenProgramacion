"use client";

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
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
    < >
      <TransitionPage />
      <ContainerPage>
        <h1 className="text-2xl md:text-5xl text-center font-bold mb-8">
          Somos un equipo de{" "}
          <span className="text-secondary">desarrolladores comprometidos</span>
        </h1>

        <div className="flex flex-col h-screen gap-12  md:gap-20 md:flex-row md:justify-around">
          {developers.map((dev, index) => (
           <MotionTransition
           key={dev.name}
           position={index % 2 === 0 ? "bottom" : "bottom"}
           className="flex flex-col items-center md:w-1/2 text-center"
         >
              <Image
                src={dev.image}
                alt={dev.name}
                width={300}
                height={300}
                className="rounded-full shadow-lg mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-primary">{dev.name}</h2>
              <p className="text-base text-balance text-white/80 max-w-md mt-2">{dev.description}</p>
            </MotionTransition> 
          ))}
        </div>
      </ContainerPage>
    </>
  );
};

export default AboutMePage;
