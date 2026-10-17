"use client";

import { motion } from "motion/react";
import WhatsAppIcon from "@/components/brand/WhatsAppIcon";
import { whatsappUrl } from "@/config/contact";

// Botón flotante de WhatsApp presente en todo el sitio
export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribime por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.4, delay: 0.8 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="whatsapp-float group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 md:bottom-8 md:right-8"
    >
      <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 [animation-duration:2.5s]" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-[#05090e]/90 px-3 py-1.5 text-sm text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 md:block">
        ¿Hablamos?
      </span>
    </motion.a>
  );
}
