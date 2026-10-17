"use client";

import { useEffect } from 'react';
import { stagger, useAnimate, useInView } from 'motion/react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const STROKES = 'path, circle, rect, line, polyline, polygon, ellipse';

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true, amount: 0.4 });

  // Dibuja cada trazo del ícono como si se escribiera a mano
  const draw = (delay = 0) =>
    animate(
      scope.current.querySelectorAll(`[data-icon] :is(${STROKES})`),
      { pathLength: [0, 1], opacity: [0, 1] },
      { duration: 1.1, ease: 'easeInOut', delay: stagger(0.12, { startDelay: delay }) }
    );

  useEffect(() => {
    if (inView) draw(index * 0.1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div
      ref={scope}
      onMouseEnter={() => draw()}
      className="card group relative h-full overflow-hidden text-left"
    >
      <div className="relative flex aspect-[16/7] items-center justify-center overflow-hidden bg-[#0d1722]">
        {/* Grilla de puntos sutil */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 [background-image:radial-gradient(#48bfda33_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        />
        <div
          data-icon
          className="relative text-[#48bfda] [&_svg>*]:opacity-0 [&>svg]:h-14 [&>svg]:w-14 [&>svg]:stroke-[1.25] [&>svg]:transition-transform [&>svg]:duration-500 group-hover:[&>svg]:scale-110"
        >
          {service.icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
        <p className="text-sm text-neutral-400">{service.description}</p>
      </div>
    </div>
  );
}
