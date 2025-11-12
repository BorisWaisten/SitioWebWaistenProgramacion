import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#0c1a1a]/80 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-[#1c3d5a]"
    >
      {/* Project Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={project.urlDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#48bfda]/20 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-[#48bfda]/30 transition-colors"
          >
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
          {project.title}
        </h3>
        <a
          href={project.urlDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-[#48bfda] to-[#6acfc7] text-white py-2 px-3 md:px-4 rounded-lg text-center hover:from-[#0c5972] hover:to-[#48bfda] transition-all duration-300 text-sm md:text-base"
        >
          Link al proyecto
        </a>
      </div>
    </motion.div>
  );
}

