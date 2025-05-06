"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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

  const iconColorClass = scrolled && isLightBg ? "text-primaryText" : "text-white";
  const backgroundClass = scrolled ? "" : "";

  return (
    <>
      {/* Botón flotante abajo a la derecha */}
      <MotionTransition
        position="right"
        className={`fixed z-50 bottom-6 right-6 transition-all duration-300 ${backgroundClass} p-3 rounded-full`}
      >
        <button onClick={toggleMenu} className={`${iconColorClass}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </MotionTransition>

      {/* Menú acordeón */}
      {isOpen && (
        <MotionTransition
          position="right"
          className="fixed z-40 top-6 right-4 bg-white/20 backdrop-blur-md rounded-xl p-4 shadow-xl flex flex-col gap-3"
        >
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`relative group px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                router === item.link && "bg-secondary"
              }`}
            >
              <Link href={item.link} onClick={() => setIsOpen(false)}>
                {item.icon}
              </Link>
              <span className="absolute right-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/80 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50">
                {item.title}
              </span>
            </div>
          ))}
        </MotionTransition>
      )}
    </>
  );
};

export default Navbar;
