export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

export type BookingStep = 'service' | 'datetime' | 'info' | 'confirmation';

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingFormData {
  serviceId: string;
  date: Date | null;
  time: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
}

export interface Booking {
  id: string;
  serviceId: string;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  status: BookingStatus;
  createdAt: string;
}
