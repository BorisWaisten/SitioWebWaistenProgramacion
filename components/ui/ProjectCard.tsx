import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      layout
      href={project.urlDemo}
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease, delay: index * 0.05 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
      }}
      className="group relative block rounded-2xl border border-white/10 bg-white/[0.03]"
    >
      {/* Borde que se traza alrededor de la tarjeta al hacer hover */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <motion.rect
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          rx="16"
          fill="none"
          stroke="#48bfda"
          strokeWidth={1.5}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 0, opacity: 0 },
            hover: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
          }}
        />
      </svg>

      <motion.div
        className="relative aspect-[16/10] overflow-hidden rounded-t-2xl"
        variants={{
          hidden: { clipPath: 'inset(0% 0% 100% 0%)' },
          visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.9, ease, delay: index * 0.05 + 0.1 } },
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {project.category && (
          <span className="absolute left-3 top-3 rounded-full bg-[#05090e]/70 px-3 py-1 text-xs text-neutral-200 backdrop-blur">
            {project.category}
          </span>
        )}
      </motion.div>
      <div className="flex items-center justify-between gap-3 p-5">
        <div>
          <h3 className="text-base font-medium text-white">{project.title}</h3>
          {project.description && <p className="mt-1 text-sm text-neutral-500">{project.description}</p>}
        </div>
        <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-neutral-500 transition-all duration-300 group-hover:rotate-45 group-hover:text-[#48bfda]" />
      </div>
    </motion.a>
  );
}
