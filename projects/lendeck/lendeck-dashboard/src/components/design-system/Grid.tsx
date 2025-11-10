/**
 * GRID COMPONENT
 * 
 * A responsive grid layout component with predefined column configurations.
 * Follows the Lendeck design system spacing scale for gaps.
 * 
 * @example
 * ```tsx
 * <Grid cols={{ base: 1, md: 2, lg: 4 }} gap="md">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 *   <Card>Item 4</Card>
 * </Grid>
 * ```
 */

import { ReactNode } from 'react';
import { cn } from '../ui/utils';

export interface GridProps {
  /** Grid children */
  children: ReactNode;
  
  /** Number of columns (responsive object or number) */
  cols?: number | {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  
  /** Gap size between grid items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
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

function getColumnClasses(cols: GridProps['cols']): string {
  if (typeof cols === 'number') {
    return `grid-cols-${cols}`;
  }
  
  if (typeof cols === 'object') {
    const classes: string[] = [];
    
    if (cols.base) classes.push(`grid-cols-${cols.base}`);
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);
    
    return classes.join(' ');
  }
  
  return 'grid-cols-1';
}

export function Grid({
  children,
  cols = { base: 1, md: 2, lg: 3 },
  gap = 'md',
  className = '',
}: GridProps) {
  return (
    <div
      className={cn(
        'grid',
        getColumnClasses(cols),
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
