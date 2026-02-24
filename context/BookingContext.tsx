'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { BookingModal } from '@/components/booking';

interface BookingContextValue {
  openBookingModal: (serviceId?: string) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

interface BookingProviderProps {
  children: ReactNode;
}

export function BookingProvider({ children }: BookingProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [initialServiceId, setInitialServiceId] = useState<string | undefined>(undefined);

  const openBookingModal = useCallback((serviceId?: string): void => {
    setInitialServiceId(serviceId);
    setIsOpen(true);
  }, []);

  const closeBookingModal = useCallback((): void => {
    setIsOpen(false);
    setTimeout(() => setInitialServiceId(undefined), 300);
  }, []);

  const handleOpenChange = useCallback((open: boolean): void => {
    if (!open) {
      closeBookingModal();
    }
  }, [closeBookingModal]);

  return (
    <BookingContext.Provider value={{ openBookingModal, closeBookingModal }}>
      {children}
      <BookingModal
        open={isOpen}
        onOpenChange={handleOpenChange}
        initialServiceId={initialServiceId}
      />
    </BookingContext.Provider>
  );
}

export function useBookingContext(): BookingContextValue {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
}
