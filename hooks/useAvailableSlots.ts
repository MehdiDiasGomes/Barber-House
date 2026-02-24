'use client';

import { useMemo } from 'react';
import type { TimeSlot } from '@/types';
import { TIME_SLOTS, CLOSED_DAYS } from '@/constants/booking';

interface UseAvailableSlotsParams {
  date: Date | null;
  isSlotBooked: (date: string, time: string) => boolean;
}

interface UseAvailableSlotsReturn {
  slots: TimeSlot[];
  isDateAvailable: boolean;
}

/**
 * Formats a Date object to ISO date string (YYYY-MM-DD).
 * @param date - Date to format
 * @returns Formatted date string
 */
function formatDateToISO(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Checks if a time slot is in the past for a given date.
 * @param date - The date to check
 * @param time - Time string in HH:MM format
 * @returns True if the slot is in the past
 */
function isSlotInPast(date: Date, time: string): boolean {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  if (selectedDate > today) {
    return false;
  }

  if (selectedDate < today) {
    return true;
  }

  const [hours, minutes] = time.split(':').map(Number);
  const slotTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
  return slotTime <= now;
}

/**
 * Hook for calculating available time slots for a given date.
 * @param params - Object containing date and isSlotBooked function
 * @returns Object with available slots and date availability status
 */
export function useAvailableSlots({
  date,
  isSlotBooked,
}: UseAvailableSlotsParams): UseAvailableSlotsReturn {
  const slots = useMemo((): TimeSlot[] => {
    if (!date) {
      return [];
    }

    const dayOfWeek = date.getDay();
    if (CLOSED_DAYS.includes(dayOfWeek as 0)) {
      return [];
    }

    const dateString = formatDateToISO(date);

    return TIME_SLOTS.map((time): TimeSlot => {
      const isPast = isSlotInPast(date, time);
      const isBooked = isSlotBooked(dateString, time);

      return {
        time,
        available: !isPast && !isBooked,
      };
    });
  }, [date, isSlotBooked]);

  const isDateAvailable = useMemo((): boolean => {
    if (!date) {
      return false;
    }

    const dayOfWeek = date.getDay();
    if (CLOSED_DAYS.includes(dayOfWeek as 0)) {
      return false;
    }

    return slots.some((slot) => slot.available);
  }, [date, slots]);

  return {
    slots,
    isDateAvailable,
  };
}
