"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { itemsNavbar } from "@/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const router = useRouter();

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
      className={`fixed top-0  left-0 w-full h-[100px] z-50 transition duration-300 ${
        scrolled ? "shadow-md bg-primary-100 text-secondary-900 "  : ""
      }`}
    >
      <div className="container h-full mx-auto max-w-6xl flex items-center justify-between py-4 px-4 md:px-0">
        {/* Logo */}
        <Link href="/">
          <Image src="/logoWaisten.png" alt="Waisten Programación" width={100} height={100} className=" md:scale-[1.5]" />
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
              item.link.includes("https") ? (
              <Link
                key={item.id}
                href={item.link}
                onClick={() => router.push(item.link)}
                className={`relative px-4 py-2 rounded-full font-medium transition duration-300 ${
                  pathname === item.link
                    ? "bg-secondary text-white"
                    : "hover:bg-secondary/20 bg-white/20 hover:text-secondary"
                }`}
              >
                {item.title}
              </Link>
              ) : (
                <Link
                  key={item.id}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
