/**
 * LOADING STATE COMPONENT
 * 
 * A standardized loading indicator with optional text.
 * Follows the Lendeck design system for consistent loading states.
 * 
 * @example
 * ```tsx
 * <LoadingState size="lg" text="Loading data..." />
 * ```
 */

import { ReactNode } from 'react';
import { cn } from '../ui/utils';
import { Loader2 } from 'lucide-react';

export interface LoadingStateProps {
  /** Size of the loading spinner */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /** Optional loading text */
  text?: string;
  
  /** Full page centered loading */
  fullPage?: boolean;
  
  /** Optional className for custom styling */
  className?: string;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
};

export function LoadingState({
  size = 'md',
  text,
  fullPage = false,
  className = '',
}: LoadingStateProps) {
  const content = (
    <div className={cn(
      'flex flex-col items-center justify-center gap-3',
      fullPage && 'min-h-[400px]',
      className
    )}>
      <Loader2 className={cn(
        'animate-spin text-lendeck-primary',
        sizeClasses[size]
      )} />
      {text && (
        <p className="text-sm text-muted-foreground">{text}</p>
      )}
    </div>
  );
  
  return content;
}
