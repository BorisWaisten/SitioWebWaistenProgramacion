"use client";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container-page";
import { MotionTransition } from "@/components/transition-component";

const contactOptions = [
  {
    title: "Correo Electrónico",
    icon: <Mail size={30} />,
    description: "boriswaisten@gmail.com",
    href: "mailto:boriswaisten@gmail.com",
  },
  {
    title: "Instagram",
    icon: <Instagram size={30} />,
    description: "@waistenprogramacion",
    href: "https://instagram.com/waistenprogramacion",
  },
  {
    title: "WhatsApp",
    icon: <MessageCircle size={30} />,
    description: "+54 3446 575620",
    href: "https://wa.me/543446575620",
  },
];

const ContactPage = () => {
  return (
    <ContainerPage>
      <MotionTransition position="bottom">
      <CircleImage />

      <div className="flex flex-col items-center text-center space-y-8 mt-10">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Ponte en <span className="text-secondary font-bold">contacto</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {contactOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-white/10 rounded-xl hover:bg-secondary/10 transition-all duration-300 border border-white/10 hover:border-secondary shadow-sm hover:shadow-lg backdrop-blur-lg"
            >
              <div className="text-secondary mb-4">{option.icon}</div>
              <h3 className="text-lg font-bold text-white">{option.title}</h3>
              <p className="text-sm text-white/70 mt-2">{option.description}</p>
            </a>
          ))}
        </div>
      </div>
      </MotionTransition>
    </ContainerPage>
  );
};

export default ContactPage;
