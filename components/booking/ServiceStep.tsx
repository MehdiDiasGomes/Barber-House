'use client';

import Image from 'next/image';
import type { Service } from '@/types';
import { servicesData } from '@/constants/services';

interface ServiceStepProps {
  selectedServiceId: string;
  onSelectService: (serviceId: string) => void;
  onNext: () => void;
}

export function ServiceStep({ selectedServiceId, onSelectService, onNext }: ServiceStepProps) {
  const handleSelect = (service: Service): void => {
    onSelectService(service.id);
    onNext();
  };

  return (
    <div className="space-y-4">
      <h3 className="!text-xl text-center mb-6 text-text-primary">Choisissez votre service</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2">
        {servicesData.map((service) => {
          const isSelected = service.id === selectedServiceId;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => handleSelect(service)}
              className={`p-4 border text-left transition-colors flex items-start gap-4 ${
                isSelected
                  ? 'border-secondary bg-secondary/5'
                  : 'border-gray-200 hover:border-secondary'
              }`}
            >
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="!text-base font-semibold mb-1 text-text-primary">{service.title}</h4>
                <p className="text-gray-500 text-sm">{service.shortDescription}</p>
                <p className="text-secondary font-bold mt-2">{service.price}€</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
