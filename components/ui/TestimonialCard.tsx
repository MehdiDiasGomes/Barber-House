import type { Testimonial } from '@/types';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, content, rating } = testimonial;

  return (
    <div className="p-8 bg-bg-primary border border-gray-200 flex flex-col h-full">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-secondary text-secondary"
          />
        ))}
      </div>

      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
        &ldquo;{content}&rdquo;
      </p>

      <div>
        <p className="font-semibold text-text-primary text-sm">{name}</p>
      </div>
    </div>
  );
}
