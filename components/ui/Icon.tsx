import type { IconProps } from '@/types/icon';

export function Icon({
  icon: IconComponent,
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  className,
  ariaLabel,
}: IconProps) {
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      className={className}
      aria-label={ariaLabel}
    />
  );
}
