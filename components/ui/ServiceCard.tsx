import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card group h-full overflow-hidden text-left">
      <div className="flex aspect-[16/7] items-center justify-center bg-[#0d1722] text-[#48bfda] [&>svg]:h-12 [&>svg]:w-12 [&>svg]:transition-transform [&>svg]:duration-500 group-hover:[&>svg]:scale-125">
        {service.icon}
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
        <p className="text-sm text-neutral-400">{service.description}</p>
      </div>
    </div>
  );
}
