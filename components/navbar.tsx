"use client";

import Link from "next/link";
import { useState } from "react";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón flotante abajo a la derecha */}
      <MotionTransition
        position="right"
        className="fixed z-50 bottom-6 right-6"
      >
        <button
          onClick={toggleMenu}
          className="bg-secondary p-3 rounded-full shadow-md hover:bg-primary text-white transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </MotionTransition>

      {/* Menú acordeón en top-right */}
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

              {/* Tooltip */}
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
