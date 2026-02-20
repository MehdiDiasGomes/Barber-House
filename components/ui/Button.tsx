import type { ButtonProps, ButtonVariant } from '@/types/button';

const variantStyles: Record<ButtonVariant, string> = {
  default: 'bg-bg-primary hover:bg-gray-200 text-text-primary font-bold py-3 px-10 uppercase tracking-widest transition',
  outline: 'border-2 border-text-light hover:bg-bg-primary hover:text-text-primary text-text-light font-bold py-3 px-10 uppercase tracking-widest transition',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-text-light font-bold py-3 px-8 uppercase tracking-wider transition',
  navbar: 'bg-bg-primary text-text-primary px-6 py-2 font-bold text-sm uppercase tracking-wider hover:bg-secondary hover:text-text-light transition-all duration-300',
};

export function Button({ children, variant = 'default', className = '', onClick, type = 'button' }: ButtonProps) {
  const baseStyles = variantStyles[variant];
  const finalClassName = `${baseStyles} ${className}`;

  return (
    <button type={type} className={finalClassName} onClick={onClick}>
      {children}
    </button>
  );
}
