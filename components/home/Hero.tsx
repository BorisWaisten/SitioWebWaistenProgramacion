"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Button from "@/components/ui/Button";
import { LOGO_BLOB_PATH } from "@/components/brand/logo-paths";

const LINES = [
  { words: ["Ideas", "que", "se", "vuelven"], accent: false },
  { words: ["productos", "digitales"], accent: true },
];

const ease = [0.16, 1, 0.3, 1] as const;

interface HeroProps {
  ready: boolean;
}

// Blob del isotipo en grande: se dibuja al entrar y un "cometa" lo recorre en loop
function HeroBlob({ ready }: HeroProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(useTransform(mouseX, [-1, 1], [-30, 30]), { stiffness: 60, damping: 20 });
  const y = useSpring(useTransform(mouseY, [-1, 1], [-20, 20]), { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 w-[140vw] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 md:w-[90vw]"
    >
      <motion.svg viewBox="60 70 260 245" style={{ x, y }} className="h-auto w-full">
        <motion.path
          d={LOGO_BLOB_PATH}
          fill="none"
          stroke="#48bfda"
          strokeOpacity={0.18}
          strokeWidth={0.6}
          initial={{ pathLength: 0 }}
          animate={ready ? { pathLength: 1 } : undefined}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
        <motion.path
          d={LOGO_BLOB_PATH}
          fill="none"
          stroke="#48bfda"
          strokeWidth={1.2}
          strokeLinecap="round"
          initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
          animate={ready ? { pathOffset: [0, 1], opacity: 1 } : undefined}
          transition={{
            pathOffset: { duration: 7, ease: "linear", repeat: Infinity, delay: 2 },
            opacity: { duration: 0.6, delay: 2 },
          }}
          style={{ filter: "drop-shadow(0 0 6px #48bfda)" }}
        />
      </motion.svg>
    </div>
  );
}

export default function Hero({ ready }: HeroProps) {
  let wordIndex = 0;

  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center">
      <HeroBlob ready={ready} />

      <motion.span
        className="chip relative mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={ready ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, ease }}
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#48bfda]" />
        Estudio de desarrollo de software
      </motion.span>

      <h1 className="display relative text-5xl sm:text-7xl md:text-8xl">
        {LINES.map((line, li) => (
          <span key={li} className={`block ${line.accent ? "text-[#48bfda]" : ""}`}>
            {line.words.map((word) => {
              const i = wordIndex++;
              return (
                <span key={word} className="inline-block overflow-hidden pb-1 align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "105%" }}
                    animate={ready ? { y: "0%" } : undefined}
                    transition={{ duration: 0.9, ease, delay: 0.1 + i * 0.07 }}
                  >
                    {word}
                  </motion.span>
                  &nbsp;
                </span>
              );
            })}
          </span>
        ))}
      </h1>

      <motion.p
        className="relative mt-8 max-w-2xl text-base text-neutral-400 md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={ready ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, ease, delay: 0.6 }}
      >
        Diseñamos y desarrollamos sitios web, tiendas online, sistemas de gestión e invitaciones digitales con
        tecnologías modernas como React y Next.js.
      </motion.p>

      <motion.div
        className="relative mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={ready ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, ease, delay: 0.75 }}
      >
        <Button href="/works" showArrow>
          Ver proyectos
        </Button>
        <Button href="/contact" variant="secondary">
          Contactar
        </Button>
      </motion.div>
    </section>
  );
}
