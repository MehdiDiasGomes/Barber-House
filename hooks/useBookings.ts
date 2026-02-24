'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Booking, BookingFormData } from '@/types';
import { BOOKING_STORAGE_KEY } from '@/constants/booking';

interface UseBookingsReturn {
  bookings: Booking[];
  addBooking: (data: BookingFormData) => Booking;
  cancelBooking: (id: string) => void;
  isSlotBooked: (date: string, time: string) => boolean;
  getBookingsByDate: (date: string) => Booking[];
}

/**
 * Generates a unique ID for bookings.
 * @returns Unique string identifier
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
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
 * Hook for managing bookings with localStorage persistence.
 * @returns Object with bookings array and CRUD operations
 */
export function useBookings(): UseBookingsReturn {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(BOOKING_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Booking[];
        setBookings(parsed);
      } catch {
        setBookings([]);
      }
    }
  }, []);

  const saveToStorage = useCallback((newBookings: Booking[]): void => {
    localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(newBookings));
    setBookings(newBookings);
  }, []);

  const addBooking = useCallback(
    (data: BookingFormData): Booking => {
      const newBooking: Booking = {
        id: generateId(),
        serviceId: data.serviceId,
        date: data.date ? formatDateToISO(data.date) : '',
        time: data.time,
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        customerEmail: data.customerEmail || undefined,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
      };

      const updatedBookings = [...bookings, newBooking];
      saveToStorage(updatedBookings);
      return newBooking;
    },
    [bookings, saveToStorage]
  );

  const cancelBooking = useCallback(
    (id: string): void => {
      const updatedBookings = bookings.map((booking) =>
        booking.id === id ? { ...booking, status: 'cancelled' as const } : booking
      );
      saveToStorage(updatedBookings);
    },
    [bookings, saveToStorage]
  );

  const isSlotBooked = useCallback(
    (date: string, time: string): boolean => {
      return bookings.some(
        (booking) =>
          booking.date === date &&
          booking.time === time &&
          booking.status !== 'cancelled'
      );
    },
    [bookings]
  );

  const getBookingsByDate = useCallback(
    (date: string): Booking[] => {
      return bookings.filter(
        (booking) => booking.date === date && booking.status !== 'cancelled'
      );
    },
    [bookings]
  );

  return {
    bookings,
    addBooking,
    cancelBooking,
    isSlotBooked,
    getBookingsByDate,
  };
}
