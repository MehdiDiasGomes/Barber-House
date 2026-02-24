'use client';

import type { TimeSlot } from '@/types';

interface TimeSlotGridProps {
  slots: TimeSlot[];
  selectedTime: string;
  onSelectTime: (time: string) => void;
}

export function TimeSlotGrid({ slots, selectedTime, onSelectTime }: TimeSlotGridProps) {
  if (slots.length === 0) {
    return (
      <p className="text-gray-500 text-center py-4">
        Aucun créneau disponible pour cette date
      </p>
    );
  }

  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
      {slots.map((slot) => {
        const isSelected = slot.time === selectedTime;
        const isDisabled = !slot.available;

        return (
          <button
            key={slot.time}
            type="button"
            disabled={isDisabled}
            onClick={() => onSelectTime(slot.time)}
            className={`py-2 px-3 text-sm font-medium border transition-colors text-center flex items-center justify-center ${
              isDisabled
                ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                : isSelected
                ? 'bg-secondary text-text-light border-secondary'
                : 'bg-bg-primary text-text-primary border-gray-300 hover:border-secondary hover:text-secondary'
            }`}
          >
            {slot.time}
          </button>
        );
      })}
    </div>
  );
}
