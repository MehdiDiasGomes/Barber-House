export const BUSINESS_HOURS = {
  open: 9,
  close: 19,
} as const;

export const CLOSED_DAYS = [0] as const;

export const BOOKING_STORAGE_KEY = 'barber-house-bookings';

export const MAX_ADVANCE_BOOKING_DAYS = 30;

/**
 * Generates time slots from business hours with 30-minute intervals.
 * @returns Array of time strings in HH:MM format
 */
function generateTimeSlots(): string[] {
  const slots: string[] = [];
  for (let hour = BUSINESS_HOURS.open; hour < BUSINESS_HOURS.close; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    slots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  return slots;
}

export const TIME_SLOTS: string[] = generateTimeSlots();
