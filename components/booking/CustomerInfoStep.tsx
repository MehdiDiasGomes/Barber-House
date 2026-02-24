'use client';

import { useState } from 'react';

interface CustomerInfoStepProps {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  onUpdateName: (name: string) => void;
  onUpdatePhone: (phone: string) => void;
  onUpdateEmail: (email: string) => void;
  onNext: () => void;
  onBack: () => void;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export function CustomerInfoStep({
  customerName,
  customerPhone,
  customerEmail,
  onUpdateName,
  onUpdatePhone,
  onUpdateEmail,
  onNext,
  onBack,
}: CustomerInfoStepProps) {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!customerName.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (customerName.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (!customerPhone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!phoneRegex.test(customerPhone.replace(/\s/g, ''))) {
      newErrors.phone = 'Numéro de téléphone invalide';
    }

    if (customerEmail.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(customerEmail)) {
        newErrors.email = 'Email invalide';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (): void => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="!text-xl text-center text-text-primary">Vos informations</h3>

      <div className="space-y-4 max-w-md mx-auto">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={customerName}
            onChange={(e) => onUpdateName(e.target.value)}
            placeholder="Jean Dupont"
            className={`w-full px-4 py-2 border bg-bg-primary text-text-primary placeholder:text-gray-400 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:border-secondary transition-colors`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={customerPhone}
            onChange={(e) => onUpdatePhone(e.target.value)}
            placeholder="06 12 34 56 78"
            className={`w-full px-4 py-2 border bg-bg-primary text-text-primary placeholder:text-gray-400 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:border-secondary transition-colors`}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
            Email <span className="text-gray-400">(optionnel)</span>
          </label>
          <input
            type="email"
            id="email"
            value={customerEmail}
            onChange={(e) => onUpdateEmail(e.target.value)}
            placeholder="jean.dupont@email.com"
            className={`w-full px-4 py-2 border bg-bg-primary text-text-primary placeholder:text-gray-400 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:border-secondary transition-colors`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
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
          onClick={handleSubmit}
          className="px-6 py-2 bg-secondary text-text-light font-medium hover:bg-secondary/90 transition-colors"
        >
          Confirmer
        </button>
      </div>
    </div>
  );
}
