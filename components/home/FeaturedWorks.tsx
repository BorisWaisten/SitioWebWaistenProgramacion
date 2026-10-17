"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { Project } from "@/types";

interface FeaturedWorksProps {
  projects: Project[];
}

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function BrowserCard({ project, index }: { project: Project; index: number }) {
  return (
    <a
      href={project.urlDemo}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-[80vw] flex-shrink-0 sm:w-[60vw] lg:w-[46vw] xl:w-[40vw]"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1722] transition-colors duration-300 group-hover:border-[#48bfda]/50">
        {/* Barra del navegador */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="truncate rounded-full bg-white/[0.05] px-3 py-0.5 text-xs text-neutral-400">
            {hostname(project.urlDemo)}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 46vw, 80vw"
            className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          />
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <span className="font-display text-sm tracking-widest text-[#48bfda]">
            {String(index + 1).padStart(2, "0")} · {project.category}
          </span>
          <h3 className="mt-1 text-xl font-semibold text-white md:text-2xl">{project.title}</h3>
          {project.description && <p className="mt-1 text-sm text-neutral-400">{project.description}</p>}
        </div>
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-[#48bfda] group-hover:bg-[#48bfda] group-hover:text-[#05090e]">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </a>
  );
}

export default function FeaturedWorks({ projects }: FeaturedWorksProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section
      ref={sectionRef}
      className="relative z-10"
      // El alto extra es el "recorrido" del scroll horizontal
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="container mx-auto mb-10 flex max-w-6xl items-end justify-between gap-6 px-4">
          <div>
            <h2 className="display text-4xl md:text-6xl">
              Trabajos <span className="text-[#48bfda]">destacados</span>
            </h2>
            <p className="mt-3 max-w-md text-neutral-400">Proyectos reales para clientes reales. Deslizá para recorrerlos.</p>
          </div>
          <div className="hidden md:block">
            <Button href="/works" variant="secondary" showArrow>
              Ver todos
            </Button>
          </div>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 px-4 md:gap-10 md:px-[max(1rem,calc((100vw-72rem)/2+1rem))]">
          {projects.map((project, i) => (
            <BrowserCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* Barra de progreso dibujada en SVG */}
        <div className="container mx-auto mt-10 flex max-w-6xl items-center gap-4 px-4">
          <svg aria-hidden viewBox="0 0 100 2" preserveAspectRatio="none" className="h-[2px] flex-1">
            <line x1="0" y1="1" x2="100" y2="1" stroke="#ffffff1a" strokeWidth={2} />
            <motion.line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="#48bfda"
              strokeWidth={2}
              style={{ pathLength: progress }}
            />
          </svg>
          <div className="md:hidden">
            <Button href="/works" variant="secondary" size="sm">
              Ver todos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
