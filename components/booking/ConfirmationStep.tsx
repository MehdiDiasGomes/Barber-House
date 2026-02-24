'use client';

import { CheckCircle, Calendar, Clock, User, Phone, Mail, Scissors } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { Service } from '@/types';
import { servicesData } from '@/constants/services';

interface ConfirmationStepProps {
  serviceId: string;
  date: Date | null;
  time: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  onClose: () => void;
}

export function ConfirmationStep({
  serviceId,
  date,
  time,
  customerName,
  customerPhone,
  customerEmail,
  onClose,
}: ConfirmationStepProps) {
  const service: Service | undefined = servicesData.find((s) => s.id === serviceId);

  const formattedDate = date
    ? format(date, 'EEEE d MMMM yyyy', { locale: fr })
    : '';

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
      </div>

      <div>
        <h3 className="!text-2xl mb-2 text-text-primary">Réservation confirmée !</h3>
        <p className="text-gray-500">Votre rendez-vous a été enregistré avec succès</p>
      </div>

      <div className="bg-gray-50 p-6 space-y-4 text-left max-w-md mx-auto">
        <h4 className="!text-lg font-semibold border-b border-gray-200 pb-2 text-text-primary">
          Récapitulatif
        </h4>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Scissors className="w-5 h-5 text-secondary flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Service</p>
              <p className="font-medium text-text-primary">
                {service?.title} - {service?.price}€
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-secondary flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium capitalize text-text-primary">{formattedDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Heure</p>
              <p className="font-medium text-text-primary">{time}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-secondary flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Nom</p>
              <p className="font-medium text-text-primary">{customerName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Téléphone</p>
              <p className="font-medium text-text-primary">{customerPhone}</p>
            </div>
          </div>

          {customerEmail && (
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-text-primary">{customerEmail}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="px-8 py-3 bg-secondary text-text-light font-medium hover:bg-secondary/90 transition-colors"
      >
        Fermer
      </button>
    </div>
  );
}
