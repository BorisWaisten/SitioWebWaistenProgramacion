"use client";

import { useEffect, useRef, useState } from "react";
import { stagger, useAnimate } from "motion/react";
import { BRAND_CYAN, LOGO_BLOB_PATH, LOGO_SQUARE_PATH, LOGO_VIEWBOX } from "./logo-paths";

export const INTRO_STORAGE_KEY = "wp-intro-seen";

const WORD_TOP = "WAISTEN".split("");
const WORD_BOTTOM = "PROGRAMACIÓN".split("");

const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const easeInOutQuart = [0.76, 0, 0.24, 1] as const;

interface LogoIntroProps {
  onDone: () => void;
}

/**
 * Intro de marca inspirada en el logo de Motion:
 * 1. el isotipo se dibuja trazo a trazo,
 * 2. se rellena y la "ficha" celeste se expande con un spring hasta cubrir la pantalla,
 * 3. entra el wordmark gigante letra por letra,
 * 4. el panel se retira hacia arriba y deja ver la página.
 *
 * Solo corre si el script inline del layout marcó <html data-intro="playing">
 * (primera visita a la home en la sesión y sin prefers-reduced-motion).
 */
export default function LogoIntro({ onDone }: LogoIntroProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const [visible, setVisible] = useState(true);
  const finished = useRef(false);

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {}
    document.documentElement.dataset.intro = "done";
    setVisible(false);
    onDone();
  };

  const skip = async () => {
    if (finished.current || !scope.current) return;
    await animate(scope.current, { opacity: 0 }, { duration: 0.35 });
    finish();
  };

  useEffect(() => {
    if (document.documentElement.dataset.intro !== "playing") {
      finish();
      return;
    }

    const run = async () => {
      const root = scope.current;
      const square = root.querySelector<SVGPathElement>("[data-square]")!;
      const panel = root.querySelector<HTMLElement>("[data-panel]")!;

      // 1. Dibujo del isotipo
      animate(square, { pathLength: [0, 1] }, { duration: 1, ease: "easeInOut" });
      await animate("[data-blob]", { pathLength: [0, 1] }, { duration: 1.1, delay: 0.3, ease: "easeInOut" });
      if (finished.current) return;

      // 2. Relleno con un pequeño "pop"
      animate("[data-blob]", { fillOpacity: 1 }, { duration: 0.3 });
      await animate(square, { fillOpacity: 1 }, { duration: 0.3 });
      await animate("[data-mark]", { scale: [1, 0.9, 1] }, { duration: 0.45, ease: "easeInOut" });
      if (finished.current) return;

      // 3. La ficha se expande hasta cubrir todo (como el logo de Motion)
      const r = square.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const radius = (r.width * 91) / 327;
      const from = `inset(${r.top}px ${vw - r.right}px ${vh - r.bottom}px ${r.left}px round ${radius}px)`;
      panel.style.clipPath = from;
      panel.style.opacity = "1";
      square.style.opacity = "0";

      animate(panel, { clipPath: [from, "inset(0px 0px 0px 0px round 0px)"] }, { type: "spring", bounce: 0.12, duration: 1 });
      animate("[data-mark]", { scale: 0.45 }, { type: "spring", bounce: 0.2, duration: 0.9 });
      await animate("[data-mark]", { opacity: 0 }, { duration: 0.35, delay: 0.55 });
      if (finished.current) return;

      // 4. Wordmark letra por letra
      animate("[data-letter-top]", { y: ["140%", "0%"] }, { duration: 0.8, ease: easeOutExpo, delay: stagger(0.045) });
      await animate("[data-letter-bottom]", { y: ["140%", "0%"] }, { duration: 0.8, ease: easeOutExpo, delay: stagger(0.03, { startDelay: 0.2 }) });
      await new Promise((resolve) => setTimeout(resolve, 450));
      if (finished.current) return;

      // 5. Cortina hacia arriba
      animate("[data-letter-top], [data-letter-bottom]", { y: "-30%" }, { duration: 0.9, ease: easeInOutQuart });
      await animate(root, { clipPath: ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"] }, { duration: 0.9, ease: easeInOutQuart });
      finish();
    };

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div ref={scope} className="logo-intro fixed inset-0 z-[100] cursor-pointer bg-[#05090e]" onClick={skip}>
      {/* Panel celeste que crece desde la ficha del logo */}
      <div data-panel aria-hidden className="absolute inset-0 opacity-0" style={{ backgroundColor: BRAND_CYAN }} />

      {/* Isotipo */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <svg data-mark viewBox={LOGO_VIEWBOX} className="h-24 w-24 md:h-32 md:w-32">
          <path
            data-square
            d={LOGO_SQUARE_PATH}
            fill={BRAND_CYAN}
            fillOpacity={0}
            stroke={BRAND_CYAN}
            strokeWidth={6}
            pathLength={1}
            strokeDasharray="0 1"
          />
          <path
            data-blob
            d={LOGO_BLOB_PATH}
            fill="#ffffff"
            fillOpacity={0}
            stroke="#ffffff"
            strokeWidth={6}
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray="0 1"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <div aria-hidden className="absolute inset-0 flex flex-col justify-center px-[4vw] font-display uppercase text-[#05090e]">
        <div className="flex overflow-hidden pt-[0.12em] text-[24vw] leading-[0.9] md:text-[19vw]">
          {WORD_TOP.map((letter, i) => (
            <span key={i} data-letter-top className="inline-block translate-y-[140%]">
              {letter}
            </span>
          ))}
        </div>
        <div className="flex justify-end overflow-hidden pt-[0.2em] text-[12.5vw] leading-[0.95] md:text-[10vw]">
          {WORD_BOTTOM.map((letter, i) => (
            <span key={i} data-letter-bottom className="inline-block translate-y-[140%]">
              {letter}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          skip();
        }}
        className="absolute bottom-6 right-6 rounded-full border border-white/20 bg-[#05090e]/40 px-4 py-1.5 text-xs uppercase tracking-widest text-white/80 backdrop-blur hover:text-white"
      >
        Saltar intro
      </button>
    </div>
  );
}
