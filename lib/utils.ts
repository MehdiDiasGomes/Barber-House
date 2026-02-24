import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges Tailwind CSS classes while resolving conflicts intelligently.
 * Combines clsx for conditional classes with tailwind-merge to prevent style conflicts.
 * @param inputs - Variable number of class values (strings, objects, arrays)
 * @returns Merged class string with resolved Tailwind conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
