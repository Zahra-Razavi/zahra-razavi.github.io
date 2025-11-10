/**
 * STACK COMPONENT
 * 
 * A flexbox-based layout component for vertical or horizontal stacking.
 * Follows the Lendeck design system spacing scale for gaps.
 * 
 * @example
 * ```tsx
 * <Stack direction="vertical" gap="md" align="center">
 *   <Button>First</Button>
 *   <Button>Second</Button>
 *   <Button>Third</Button>
 * </Stack>
 * ```
 */

import { ReactNode } from 'react';
import { cn } from '../ui/utils';

export interface StackProps {
  /** Stack children */
  children: ReactNode;
  
  /** Stack direction */
  direction?: 'horizontal' | 'vertical';
  
  /** Gap size between items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  /** Alignment of items */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  
  /** Justification of items */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  
  /** Allow wrapping */
  wrap?: boolean;
  
  /** Optional className for custom styling */
  className?: string;
}

const gapClasses = {
  none: 'gap-0',
  xs: 'gap-2',   // 8px
  sm: 'gap-3',   // 12px
  md: 'gap-4',   // 16px
  lg: 'gap-6',   // 24px
  xl: 'gap-8',   // 32px
};

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

export function Stack({
  children,
  direction = 'vertical',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className = '',
}: StackProps) {
  return (
    <div
      className={cn(
        'flex',
        direction === 'horizontal' ? 'flex-row' : 'flex-col',
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        wrap && 'flex-wrap',
        className
      )}
    >
      {children}
    </div>
  );
}
