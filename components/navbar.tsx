"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { name: "inicio", href: "/" },
  { name: "sobre mi", href: "/about" },
  { name: "proyectos", href: "/works" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#05090e]/80 backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icono1.svg" alt="Waisten Programación" width={36} height={36} />
            <span className="hidden sm:block font-display uppercase tracking-wide text-lg text-white">
              Waisten
            </span>
            <span className="hidden sm:block font-display uppercase tracking-wide text-lg text-[#48bfda]">
              Programación
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-white/10 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:block rounded-full bg-[#48bfda] px-5 py-2 text-sm font-semibold text-[#05090e] hover:bg-[#6ed3ea] transition-colors"
          >
            Contactar
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#48bfda] transition-colors p-1"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#05090e]/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-2">
                {[...navItems, { name: "contacto", href: "/contact" }].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors py-2 px-3 rounded-full ${
                      pathname === item.href
                        ? "text-[#48bfda] bg-[#48bfda]/10"
                        : "text-neutral-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
