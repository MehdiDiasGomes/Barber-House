import type { ButtonProps, ButtonVariant } from '@/types/button';

const variantStyles: Record<ButtonVariant, string> = {
  default: 'bg-white hover:bg-gray-200 text-black font-bold py-3 px-10 uppercase tracking-widest transition',
  outline: 'border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-10 uppercase tracking-widest transition',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 uppercase tracking-wider transition',
  navbar: 'bg-white text-zinc-950 px-6 py-2 font-bold text-sm uppercase tracking-wider hover:bg-amber-500 hover:text-white transition-all duration-300',
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
