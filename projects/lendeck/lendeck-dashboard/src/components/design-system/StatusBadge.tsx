/**
 * STATUS BADGE COMPONENT
 * 
 * A standardized badge component for displaying status information with consistent colors.
 * 
 * @example
 * ```tsx
 * <StatusBadge variant="success">Active</StatusBadge>
 * <StatusBadge variant="warning">Pending</StatusBadge>
 * <StatusBadge variant="error">Rejected</StatusBadge>
 * ```
 */

import React from 'react';
import { Badge } from '../ui/badge';

export interface StatusBadgeProps {
  /** Status variant that determines the color */
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'primary';
  
  /** Badge content */
  children: React.ReactNode;
  
  /** Optional className */
  className?: string;
}

const variantClasses = {
  success: 'bg-lendeck-success/10 text-lendeck-success border-lendeck-success/20',
  warning: 'bg-lendeck-orange/10 text-lendeck-orange border-lendeck-orange/20',
  error: 'bg-lendeck-error/10 text-lendeck-error border-lendeck-error/20',
  info: 'bg-lendeck-blue/10 text-lendeck-blue border-lendeck-blue/20',
  neutral: 'bg-lendeck-gray-lighter text-lendeck-gray-dark border-lendeck-gray-light',
  primary: 'bg-lendeck-primary/10 text-lendeck-primary border-lendeck-primary/20',
};

export function StatusBadge({
  variant = 'neutral',
  children,
  className = '',
}: StatusBadgeProps) {
  return (
    <Badge 
      variant="outline" 
      className={`${variantClasses[variant]} ${className}`}
    >
      {children}
    </Badge>
  );
}
