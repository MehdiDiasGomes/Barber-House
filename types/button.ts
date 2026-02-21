import { ReactNode } from 'react';

export type ButtonVariant = 'default' | 'outline' | 'secondary' | 'navbar';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
