/**
 * HEADING COMPONENT
 * 
 * Semantic heading component with consistent sizing and styling.
 * Follows the Lendeck design system typography scale.
 * 
 * @example
 * ```tsx
 * <Heading level={1}>Main Page Title</Heading>
 * <Heading level={2} variant="primary">Section Title</Heading>
 * <Heading level={3} className="mb-4">Subsection</Heading>
 * ```
 */

import { ReactNode } from 'react';
import { cn } from '../ui/utils';

export interface HeadingProps {
  /** Heading level (1-6) */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  
  /** Content of the heading */
  children: ReactNode;
  
  /** Optional color variant */
  variant?: 'default' | 'primary' | 'muted';
  
  /** Optional className for custom styling */
  className?: string;
  
  /** Optional id for anchor links */
  id?: string;
}

const variantClasses = {
  default: 'text-foreground',
  primary: 'text-lendeck-primary',
  muted: 'text-muted-foreground',
};

export function Heading({
  level,
  children,
  variant = 'default',
  className = '',
  id,
}: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Component
      id={id}
      className={cn(
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}
