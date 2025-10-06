import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#48bfda] to-[#6acfc7] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
        <span className="text-xl md:text-2xl">{service.icon}</span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
        {service.title}
      </h3>
      <p className="text-sm md:text-base text-neutral-400 text-center px-2">
        {service.description}
      </p>
    </div>
  );
}

