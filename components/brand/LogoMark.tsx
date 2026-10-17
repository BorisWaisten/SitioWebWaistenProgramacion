"use client";

import { useAnimate } from "motion/react";
import { LOGO_BLOB_PATH, LOGO_SQUARE_PATH, LOGO_VIEWBOX } from "./logo-paths";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

// Isotipo que se vuelve a dibujar al pasar el mouse
export default function LogoMark({ size = 36, className = "" }: LogoMarkProps) {
  const [scope, animate] = useAnimate<SVGSVGElement>();

  const redraw = () => {
    animate(
      "[data-blob]",
      { pathLength: [0, 1], fillOpacity: [0, 0, 1] },
      { duration: 0.9, ease: [0.65, 0, 0.35, 1] }
    );
  };

  return (
    <svg
      ref={scope}
      viewBox={LOGO_VIEWBOX}
      width={size}
      height={size}
      className={className}
      onMouseEnter={redraw}
      aria-hidden
    >
      <path d={LOGO_SQUARE_PATH} fill="#4bbfda" />
      <path
        data-blob
        d={LOGO_BLOB_PATH}
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth={8}
        strokeLinejoin="round"
      />
    </svg>
  );
}
