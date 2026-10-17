import Image from 'next/image';
import { LOGO_BLOB_PATH } from '@/components/brand/logo-paths';
import { Project } from '@/types';

interface ProjectCoverProps {
  project: Project;
  sizes: string;
  className?: string;
}

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

// Captura del proyecto, o una portada de marca mientras no haya captura
export default function ProjectCover({ project, sizes, className = '' }: ProjectCoverProps) {
  if (project.image) {
    return <Image src={project.image} alt={project.title} fill sizes={sizes} className={className} />;
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#0d1722]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50 [background-image:radial-gradient(#48bfda33_1px,transparent_1px)] [background-size:18px_18px]"
      />
      <svg aria-hidden viewBox="60 70 260 245" className="absolute h-[140%] text-[#48bfda]/20 transition-transform duration-700 group-hover:rotate-6">
        <path d={LOGO_BLOB_PATH} fill="none" stroke="currentColor" strokeWidth={1} />
      </svg>
      <span className="display relative px-6 text-center text-2xl [overflow-wrap:anywhere] lg:text-[1.75rem]">{hostname(project.urlDemo)}</span>
    </div>
  );
}
