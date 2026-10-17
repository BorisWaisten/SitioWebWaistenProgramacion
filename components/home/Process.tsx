"use client";

import { useEffect, useRef } from "react";
import { svgEffect } from "motion";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

const STEPS = [
  ["Entendemos tu negocio", "Escuchamos qué necesitás y definimos juntos el alcance, sin funcionalidades de más."],
  ["Diseñamos", "Bocetamos la experiencia y la identidad visual antes de escribir una línea de código."],
  ["Desarrollamos", "React, Next.js y Node como base. Avances visibles desde el primer día."],
  ["Lanzamos y acompañamos", "Publicamos, medimos y seguimos evolucionando el producto junto a vos."],
];

// Onda vertical que cruza el centro (x = 50) en el medio de cada paso
const ROW = 100 / STEPS.length;
const AMP = 30 * 1.33;
const WAVE_PATH = (() => {
  let d = "M 50 0";
  const halfSteps = STEPS.length * 2;
  const h = ROW / 2;
  for (let i = 0; i < halfSteps; i++) {
    const y0 = i * h;
    const dir = i % 2 === 0 ? 1 : -1;
    const cx = 50 + dir * AMP;
    d += ` C ${cx} ${y0 + h / 3} ${cx} ${y0 + (2 * h) / 3} 50 ${y0 + h}`;
  }
  return d;
})();

function StepDot({ progress, at }: { progress: MotionValue<number>; at: number }) {
  const scale = useTransform(progress, [at - 0.04, at], [0.6, 1]);
  const background = useTransform(progress, [at - 0.04, at], ["#0d1722", "#48bfda"]);
  const boxShadow = useTransform(progress, [at - 0.04, at], ["0 0 0px #48bfda00", "0 0 24px #48bfda"]);
  return (
    <motion.span
      style={{ scale, backgroundColor: background, boxShadow }}
      className="block h-4 w-4 rounded-full border border-[#48bfda]"
    />
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 65%"],
  });

  // svgEffect liga un MotionValue directo a los atributos del <path>,
  // sin re-renders de React: el trazo avanza exactamente con el scroll.
  useEffect(() => {
    if (!pathRef.current) return;
    return svgEffect(pathRef.current, { pathLength: scrollYProgress });
  }, [scrollYProgress]);

  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="display mb-4 text-4xl md:text-6xl">
          Cómo <span className="text-[#48bfda]">trabajamos</span>
        </h2>
        <p className="mb-16 max-w-xl text-neutral-400">De la idea al lanzamiento, en cuatro pasos claros.</p>

        <div ref={sectionRef} className="relative">
          {/* Línea guía: base tenue + trazo que se dibuja con el scroll */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute left-0 top-0 h-full w-12 md:left-1/2 md:w-20 md:-translate-x-1/2"
          >
            <path d={WAVE_PATH} fill="none" stroke="#ffffff1a" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
            <path
              ref={pathRef}
              d={WAVE_PATH}
              fill="none"
              stroke="#48bfda"
              strokeWidth={2.5}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              strokeDasharray="0 1"
            />
          </svg>

          <ol>
            {STEPS.map(([title, desc], i) => {
              const left = i % 2 === 0;
              return (
                <li key={title} className="relative grid h-44 grid-cols-[3rem_1fr] items-center md:h-56 md:grid-cols-[1fr_5rem_1fr]">
                  <div className="flex justify-center md:col-start-2 md:row-start-1">
                    <StepDot progress={scrollYProgress} at={(i + 0.5) / STEPS.length} />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: left ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`pl-4 md:row-start-1 md:pl-0 ${
                      left ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-3 md:pl-10"
                    }`}
                  >
                    <span className="font-display text-sm tracking-widest text-[#48bfda]">0{i + 1}</span>
                    <h3 className="mt-1 text-xl font-semibold text-white md:text-2xl">{title}</h3>
                    <p className="mt-2 text-sm text-neutral-400 md:text-base">{desc}</p>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
