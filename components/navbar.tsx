"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";
import { Menu, X, Home, User, Briefcase, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);
  const router = usePathname();
  const observedRef = useRef<NodeListOf<HTMLElement> | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar fondo claro u oscuro de la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const bg = window.getComputedStyle(el).backgroundColor;

          if (entry.isIntersecting) {
            const isWhite = bg.includes("rgb(255, 255, 255)");
            setIsLightBg(isWhite);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    const sections = document.querySelectorAll("section, div");
    observedRef.current = sections as NodeListOf<HTMLElement>;

    sections.forEach((section) => observer.observe(section));

    return () => {
      observedRef.current?.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.navbar-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const iconColorClass = scrolled && isLightBg ? "text-neutral-900" : "text-white";
  const backgroundClass = scrolled ? "bg-neutral-900/80 backdrop-blur-md border border-neutral-800" : "";

  return (
    <>
      {/* Botón flotante principal */}
      <MotionTransition
        position="right"
        className={`fixed z-50 bottom-6 right-6 transition-all duration-300 ${backgroundClass} p-4 rounded-2xl shadow-2xl hover:shadow-primary-500/25 group navbar-menu`}
      >
        <button 
          onClick={toggleMenu} 
          className={`${iconColorClass} transition-all duration-300 group-hover:scale-110`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </MotionTransition>

      {/* Menú expandido */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed z-40 bottom-24 right-6 bg-neutral-900/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-neutral-800 navbar-menu"
          >
            <div className="flex flex-col gap-4">
              {/* Logo/Nombre */}
              <div className="text-center pb-4 border-b border-neutral-800">
                <h3 className="text-lg font-bold text-white mb-1">Waisten</h3>
                <p className="text-xs text-neutral-400">Programación</p>
              </div>

              {/* Enlaces de navegación */}
              <div className="space-y-2">
                {itemsNavbar.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`relative group`}
                  >
                    <Link 
                      href={item.link} 
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-primary-500/10 hover:border-primary-500/20 border border-transparent ${
                        router === item.link 
                          ? "bg-primary-500/20 border-primary-500/30 text-primary-400" 
                          : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        router === item.link 
                          ? "bg-primary-500/20 text-primary-400" 
                          : "bg-neutral-800 text-neutral-400 group-hover:bg-primary-500/20 group-hover:text-primary-400"
                      } transition-all duration-300`}>
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.title}</span>
                      
                      {/* Indicador activo */}
                      {router === item.link && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute right-3 w-2 h-2 bg-primary-400 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contacto rápido */}
              <div className="pt-4 border-t border-neutral-800">
                <div className="text-center mb-3">
                  <p className="text-xs text-neutral-400">Contacto rápido</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://wa.me/543446575620"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Phone size={16} />
                    <span className="text-xs font-medium">WhatsApp</span>
                  </a>
                  <a
                    href="mailto:boriswaisten@gmail.com"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Mail size={16} />
                    <span className="text-xs font-medium">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay para cerrar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
