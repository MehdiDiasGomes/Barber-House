'use client';

import { useMemo } from 'react';
import Calendar from 'react-calendar';
import { TimeSlotGrid } from './TimeSlotGrid';
import { useAvailableSlots } from '@/hooks/useAvailableSlots';
import { CLOSED_DAYS, MAX_ADVANCE_BOOKING_DAYS } from '@/constants/booking';
import 'react-calendar/dist/Calendar.css';

interface DateTimeStepProps {
  selectedDate: Date | null;
  selectedTime: string;
  onSelectDate: (date: Date) => void;
  onSelectTime: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
  isSlotBooked: (date: string, time: string) => boolean;
}

export function DateTimeStep({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
  onNext,
  onBack,
  isSlotBooked,
}: DateTimeStepProps) {
  const { slots } = useAvailableSlots({ date: selectedDate, isSlotBooked });

  const minDate = useMemo(() => new Date(), []);
  const maxDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + MAX_ADVANCE_BOOKING_DAYS);
    return date;
  }, []);

  const tileDisabled = ({ date }: { date: Date }): boolean => {
    const dayOfWeek = date.getDay();
    return CLOSED_DAYS.includes(dayOfWeek as 0);
  };

  const handleDateChange = (value: Date | null): void => {
    if (value) {
      onSelectDate(value);
      onSelectTime('');
    }
  };

  const handleTimeSelect = (time: string): void => {
    onSelectTime(time);
  };

  const canContinue = selectedDate !== null && selectedTime !== '';

  return (
    <div className="space-y-6">
      <h3 className="!text-xl text-center text-text-primary">Choisissez la date et l&apos;heure</h3>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <label className="block text-sm font-medium text-text-primary mb-2">Date</label>
          <div className="booking-calendar">
            <Calendar
              onChange={(value) => handleDateChange(value as Date | null)}
              value={selectedDate}
              minDate={minDate}
              maxDate={maxDate}
              tileDisabled={tileDisabled}
              locale="fr-FR"
              className="w-full border border-gray-200 p-2"
            />
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-text-primary mb-2">Heure</label>
          {selectedDate ? (
            <TimeSlotGrid
              slots={slots}
              selectedTime={selectedTime}
              onSelectTime={handleTimeSelect}
            />
          ) : (
            <p className="text-gray-500 text-center py-4">
              Sélectionnez d&apos;abord une date
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Retour
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue}
          className={`px-6 py-2 font-medium transition-colors ${
            canContinue
              ? 'bg-secondary text-text-light hover:bg-secondary/90'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
