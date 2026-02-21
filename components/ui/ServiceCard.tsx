import Image from 'next/image';
import type { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { icon: iconPath, title, description, price } = service;

  return (
    <div className="p-8 bg-transparent border border-gray-200 flex flex-col items-center text-center h-full">
      <div className="mb-6 w-16 h-16 relative">
        <Image src={iconPath} alt={title} fill className="object-contain" />
      </div>
      <h4 className="mb-4">{title}</h4>
      <p className="text-gray-500 mb-6 text-sm leading-relaxed flex-1">{description}</p>
      <div className="border-2 border-secondary text-secondary font-bold px-6 py-2">
        {price}€
      </div>
    </div>
  );
}
