/**
 * SECTION COMPONENT
 * 
 * A semantic section component with standardized spacing and optional header.
 * Follows the Lendeck design system spacing scale.
 * 
 * @example
 * ```tsx
 * <Section title="Section Title" description="Section description">
 *   <p>Section content...</p>
 * </Section>
 * ```
 */

import { ReactNode } from 'react';
import { cn } from '../ui/utils';

export interface SectionProps {
  /** Content of the section */
  children: ReactNode;
  
  /** Optional section title */
  title?: string;
  
  /** Optional section description */
  description?: string;
  
  /** Vertical spacing size */
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  
  /** Optional className for custom styling */
  className?: string;
  
  /** Semantic section id */
  id?: string;
}

export function Section({
  children,
  title,
  description,
  spacing = 'none',
  className = '',
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(className)}
    >
      {(title || description) && (
        <div className="mb-6">
          {title && <h2 className="mb-2">{title}</h2>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}