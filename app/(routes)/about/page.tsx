"use client"

import Image from 'next/image';
import { motion } from 'motion/react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { LOGO_BLOB_PATH, LOGO_SQUARE_PATH, LOGO_VIEWBOX } from '@/components/brand/logo-paths';

const ease = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  'Sitios web y aplicaciones',
  'Tiendas online',
  'Sistemas de gestión',
  'Invitaciones digitales',
  'Chatbots',
  'Integraciones backend',
];

const PRINCIPLES = [
  ['Soluciones a medida', 'Cada proyecto parte de entender tu negocio: construimos lo que necesitás, sin funcionalidades de más.'],
  ['Tecnología moderna', 'React, Next.js y Node como base. Productos rápidos, seguros y preparados para crecer.'],
  ['Comunicación directa', 'Trato directo y sin intermediarios durante todo el proyecto, con avances visibles desde el primer día.'],
  ['Acompañamiento continuo', 'La entrega no es el final: damos soporte y evolucionamos el producto junto a tu negocio.'],
];

const STACK = [
  { label: 'React', className: 'left-0 top-[18%]', delay: 0 },
  { label: 'Next.js', className: 'right-0 top-[38%]', delay: 0.8 },
  { label: 'Node', className: 'left-[6%] bottom-[16%]', delay: 1.6 },
];

// Foto recortada que "sale" de la ficha del logo
function Portrait() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px]">
      <div className="absolute inset-x-0 bottom-0 aspect-square">
        {/* Ficha celeste del isotipo */}
        <motion.svg
          aria-hidden
          viewBox={LOGO_VIEWBOX}
          className="absolute inset-0 h-full w-full"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.3, duration: 1 }}
        >
          <path d={LOGO_SQUARE_PATH} fill="#48bfda" />
          <motion.path
            d={LOGO_BLOB_PATH}
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.35}
            strokeWidth={3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.4, ease: 'easeInOut' }}
          />
        </motion.svg>

        {/* Mismo contorno que la ficha, pero abierto hacia arriba: la cabeza sobresale */}
        <div className="absolute bottom-[5.5%] left-[7.6%] right-[5.3%] top-[7.4%] [clip-path:inset(-60%_0_0_0_round_0_0_28%_28%)]">
          <motion.div
            className="absolute -inset-x-[12%] bottom-0 h-[132%]"
            initial={{ y: '25%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 1, delay: 0.35, ease }}
          >
            <Image
              src="/boris-perfil.webp"
              alt="Boris Waisten, fundador de Waisten Programación"
              fill
              priority
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-contain object-bottom"
            />
          </motion.div>
        </div>
      </div>

      {/* Stack flotando alrededor */}
      {STACK.map((item) => (
        <motion.span
          key={item.label}
          className={`chip absolute bg-[#05090e]/80 backdrop-blur ${item.className}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: 1 + item.delay * 0.2 },
            scale: { delay: 1 + item.delay * 0.2, type: 'spring' },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: item.delay },
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#48bfda]" />
          {item.label}
        </motion.span>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <main className="overflow-x-clip pt-28 pb-20 md:pt-36">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="mb-24 grid items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div className="order-2 md:order-1">
            <motion.span
              className="chip mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#48bfda]" />
              Fundador · Desarrollador Fullstack
            </motion.span>

            <h1 className="display text-5xl sm:text-6xl md:text-7xl">
              {['Hola, soy', 'Boris'].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className={`block ${i === 1 ? 'text-[#48bfda]' : ''}`}
                    initial={{ y: '105%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="mt-6 space-y-4 text-base text-neutral-300 md:text-lg"
            >
              <p>
                Soy Analista de Sistemas y desarrollador fullstack. Fundé <span className="font-semibold text-white">Waisten Programación</span> para
                ayudar a empresas y emprendedores a digitalizar y automatizar su negocio.
              </p>
              <p className="text-neutral-400">
                Me gusta llevar cada proyecto de principio a fin: entender qué necesitás, diseñarlo, construirlo y
                acompañarte después del lanzamiento. Sin vueltas y hablando claro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button href="/contact" showArrow>Hablemos</Button>
              <Button href="/works" variant="secondary">Ver proyectos</Button>
            </motion.div>
          </div>

          <div className="order-1 md:order-2">
            <Portrait />
          </div>
        </section>

        {/* Qué hacemos */}
        <section className="mb-24">
          <AnimatedSection animation="fadeInUp">
            <h2 className="display mb-4 text-4xl md:text-6xl">
              Qué <span className="text-[#48bfda]">hago</span>
            </h2>
            <p className="mb-10 max-w-2xl text-neutral-400">
              Productos digitales a medida, con tecnologías modernas y priorizando soluciones simples, rápidas y
              fáciles de mantener.
            </p>
          </AnimatedSection>
          <motion.ul
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {SERVICES.map((service) => (
              <motion.li
                key={service}
                variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } }}
                transition={{ type: 'spring', bounce: 0.35 }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-base text-white transition-colors hover:border-[#48bfda]/60 hover:text-[#48bfda] md:text-lg"
              >
                {service}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* Cómo trabajo */}
        <section className="mb-24">
          <AnimatedSection animation="fadeInUp">
            <h2 className="display mb-10 text-4xl md:text-6xl">
              Cómo <span className="text-[#48bfda]">trabajo</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {PRINCIPLES.map(([title, desc], i) => (
              <motion.div
                key={title}
                className="card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease }}
              >
                <span className="font-display text-sm tracking-widest text-[#48bfda]">0{i + 1}</span>
                <h3 className="mt-1 mb-2 text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm text-neutral-400 md:text-base">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <AnimatedSection animation="fadeInUp" className="text-center">
          <h2 className="display mb-4 text-4xl md:text-6xl">
            ¿Trabajamos <span className="text-[#48bfda]">juntos?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-neutral-400">
            Contame qué necesita tu negocio y te propongo la mejor forma de resolverlo.
          </p>
          <Button href="/contact" showArrow>Contactar</Button>
        </AnimatedSection>
      </div>
    </main>
  );
}
