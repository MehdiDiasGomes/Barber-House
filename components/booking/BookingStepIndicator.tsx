'use client';

import { Check } from 'lucide-react';
import type { BookingStep } from '@/types';

interface Step {
  id: BookingStep;
  label: string;
  number: number;
}

const STEPS: Step[] = [
  { id: 'service', label: 'Service', number: 1 },
  { id: 'datetime', label: 'Date & Heure', number: 2 },
  { id: 'info', label: 'Informations', number: 3 },
  { id: 'confirmation', label: 'Confirmation', number: 4 },
];

interface BookingStepIndicatorProps {
  currentStep: BookingStep;
}

export function BookingStepIndicator({ currentStep }: BookingStepIndicatorProps) {
  const currentIndex = STEPS.findIndex((step) => step.id === currentStep);

  return (
    <div className="flex items-start justify-between w-full mb-8">
      {STEPS.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = step.id === currentStep;
        const isLast = index === STEPS.length - 1;

        return (
          <div key={step.id} className="flex items-start flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center border-2 transition-colors flex-shrink-0 ${
                  isCompleted
                    ? 'bg-secondary border-secondary text-text-light'
                    : isCurrent
                    ? 'border-secondary text-secondary'
                    : 'border-gray-300 text-gray-400'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-bold">{step.number}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium text-center hidden sm:block whitespace-nowrap ${
                  isCurrent ? 'text-secondary' : isCompleted ? 'text-text-primary' : 'text-gray-400'
                }`}
              >
                {step.label}
              </span>
            </div>
            {!isLast && (
              <div className="flex-1 flex items-center h-10">
                <div
                  className={`w-full h-0.5 mx-2 ${
                    index < currentIndex ? 'bg-secondary' : 'bg-gray-300'
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
