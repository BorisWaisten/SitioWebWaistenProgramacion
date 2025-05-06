"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { itemsNavbar } from "@/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        scrolled ? "shadow-md bg-white text-primaryText" : ""
      }`}
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between py-4 px-4 md:px-0">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold italic font-robotoCondensed">
            Waisten
            <span className="text-secondary">Programación</span>
          </h1>
        </Link>

        {/* Navbar - Desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          {itemsNavbar.map((item) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={item.id}
                href={item.link}
                className={`relative px-4 py-2 font-medium transition duration-300 ${
                  isActive ? "text-secondary" : "hover:text-secondary"
                }`}
              >
                {item.title}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-secondary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  } group-hover:w-full`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Botón hamburguesa - Mobile */}
        <button
          className="md:hidden bg-secondary text-white p-2 rounded-full"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-md p-4 shadow-md">
          <nav className="flex flex-col items-center gap-3 py-4">
            {itemsNavbar.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className={`relative px-4 py-2 rounded-full font-medium transition duration-300 ${
                  pathname === item.link
                    ? "bg-secondary text-white"
                    : "hover:bg-secondary/20 bg-white/20 hover:text-secondary"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
