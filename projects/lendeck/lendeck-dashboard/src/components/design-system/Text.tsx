/**
 * TEXT COMPONENT
 * 
 * Typography component for body text with size and style variants.
 * Follows the Lendeck design system typography scale.
 * 
 * @example
 * ```tsx
 * <Text size="lg">Large body text</Text>
 * <Text variant="muted" size="sm">Small muted text</Text>
 * <Text as="span" weight="bold">Bold inline text</Text>
 * ```
 */

import { ReactNode, ElementType } from 'react';
import { cn } from '../ui/utils';

export interface TextProps {
  /** HTML element to render */
  as?: 'p' | 'span' | 'div' | 'label';
  
  /** Content of the text */
  children: ReactNode;
  
  /** Text size */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  
  /** Text weight */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  
  /** Color variant */
  variant?: 'default' | 'primary' | 'muted' | 'success' | 'error' | 'warning';
  
  /** Alignment */
  align?: 'left' | 'center' | 'right';
  
  /** Optional className for custom styling */
  className?: string;
}

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const variantClasses = {
  default: 'text-foreground',
  primary: 'text-lendeck-primary',
  muted: 'text-muted-foreground',
  success: 'text-lendeck-success',
  error: 'text-lendeck-error',
  warning: 'text-lendeck-orange',
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export function Text({
  as: Component = 'p',
  children,
  size = 'base',
  weight = 'normal',
  variant = 'default',
  align = 'left',
  className = '',
}: TextProps) {
  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        variantClasses[variant],
        alignClasses[align],
        className
      )}
    >
      {children}
    </Component>
  );
}
