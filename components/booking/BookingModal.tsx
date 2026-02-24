'use client';

import { useState, useCallback } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import type { BookingStep, BookingFormData } from '@/types';
import { useBookings } from '@/hooks/useBookings';
import { BookingStepIndicator } from './BookingStepIndicator';
import { ServiceStep } from './ServiceStep';
import { DateTimeStep } from './DateTimeStep';
import { CustomerInfoStep } from './CustomerInfoStep';
import { ConfirmationStep } from './ConfirmationStep';

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialServiceId?: string;
}

const INITIAL_FORM_DATA: BookingFormData = {
  serviceId: '',
  date: null,
  time: '',
  customerName: '',
  customerPhone: '',
  customerEmail: '',
};

export function BookingModal({ open, onOpenChange, initialServiceId }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState<BookingStep>('service');
  const [formData, setFormData] = useState<BookingFormData>(() => ({
    ...INITIAL_FORM_DATA,
    serviceId: initialServiceId || '',
  }));

  const { addBooking, isSlotBooked } = useBookings();

  const resetModal = useCallback((): void => {
    setCurrentStep('service');
    setFormData({ ...INITIAL_FORM_DATA, serviceId: initialServiceId || '' });
  }, [initialServiceId]);

  const handleClose = useCallback((): void => {
    onOpenChange(false);
    setTimeout(resetModal, 300);
  }, [onOpenChange, resetModal]);

  const goToStep = useCallback((step: BookingStep): void => {
    setCurrentStep(step);
  }, []);

  const handleServiceSelect = useCallback((serviceId: string): void => {
    setFormData((prev) => ({ ...prev, serviceId }));
  }, []);

  const handleDateSelect = useCallback((date: Date): void => {
    setFormData((prev) => ({ ...prev, date }));
  }, []);

  const handleTimeSelect = useCallback((time: string): void => {
    setFormData((prev) => ({ ...prev, time }));
  }, []);

  const handleNameUpdate = useCallback((customerName: string): void => {
    setFormData((prev) => ({ ...prev, customerName }));
  }, []);

  const handlePhoneUpdate = useCallback((customerPhone: string): void => {
    setFormData((prev) => ({ ...prev, customerPhone }));
  }, []);

  const handleEmailUpdate = useCallback((customerEmail: string): void => {
    setFormData((prev) => ({ ...prev, customerEmail }));
  }, []);

  const handleConfirm = useCallback((): void => {
    addBooking(formData);
    toast.success('Réservation confirmée !', {
      description: 'Vous recevrez une confirmation par SMS.',
    });
    goToStep('confirmation');
  }, [addBooking, formData, goToStep]);

  const renderStep = (): React.ReactNode => {
    switch (currentStep) {
      case 'service':
        return (
          <ServiceStep
            selectedServiceId={formData.serviceId}
            onSelectService={handleServiceSelect}
            onNext={() => goToStep('datetime')}
          />
        );

      case 'datetime':
        return (
          <DateTimeStep
            selectedDate={formData.date}
            selectedTime={formData.time}
            onSelectDate={handleDateSelect}
            onSelectTime={handleTimeSelect}
            onNext={() => goToStep('info')}
            onBack={() => goToStep('service')}
            isSlotBooked={isSlotBooked}
          />
        );

      case 'info':
        return (
          <CustomerInfoStep
            customerName={formData.customerName}
            customerPhone={formData.customerPhone}
            customerEmail={formData.customerEmail}
            onUpdateName={handleNameUpdate}
            onUpdatePhone={handlePhoneUpdate}
            onUpdateEmail={handleEmailUpdate}
            onNext={handleConfirm}
            onBack={() => goToStep('datetime')}
          />
        );

      case 'confirmation':
        return (
          <ConfirmationStep
            serviceId={formData.serviceId}
            date={formData.date}
            time={formData.time}
            customerName={formData.customerName}
            customerPhone={formData.customerPhone}
            customerEmail={formData.customerEmail}
            onClose={handleClose}
          />
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-black/50 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                className="fixed left-1/2 top-1/2 bg-bg-primary w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 z-50 shadow-xl"
                initial={{ opacity: 0, x: '-50%', y: '-45%' }}
                animate={{ opacity: 1, x: '-50%', y: '-50%' }}
                exit={{ opacity: 0, x: '-50%', y: '-45%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title className="text-xl font-bold text-text-primary">
                    Réserver un rendez-vous
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-100 transition-colors"
                      aria-label="Fermer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>

                <BookingStepIndicator currentStep={currentStep} />

                {renderStep()}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  );
}
