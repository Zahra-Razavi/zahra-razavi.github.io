/**
 * CONTAINER COMPONENT
 * 
 * A responsive container component that centers content and applies max-width.
 * Follows the Lendeck design system spacing and layout tokens.
 * 
 * @example
 * ```tsx
 * <Container size="lg">
 *   <h1>Page Content</h1>
 * </Container>
 * ```
 */

import { ReactNode } from 'react';
import { cn } from '../ui/utils';

export interface ContainerProps {
  /** Content to be contained */
  children: ReactNode;
  
  /** Container size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  /** Add padding to the container */
  padding?: boolean;
  
  /** Optional className for custom styling */
  className?: string;
}

const sizeClasses = {
  sm: 'max-w-3xl',      // 768px
  md: 'max-w-5xl',      // 1024px
  lg: 'max-w-7xl',      // 1280px - default
  xl: 'max-w-[1536px]', // 1536px
  full: 'max-w-full',
};

export function Container({
  children,
  size = 'lg',
  padding = true,
  className = '',
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full',
        sizeClasses[size],
        padding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
}
