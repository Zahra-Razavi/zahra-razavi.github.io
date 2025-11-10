/**
 * EMPTY STATE COMPONENT
 * 
 * A standardized component for displaying empty states with optional actions.
 * 
 * @example
 * ```tsx
 * <EmptyState
 *   icon={FileText}
 *   title="No deals found"
 *   description="Get started by creating your first deal"
 *   action={<Button>Create Deal</Button>}
 * />
 * ```
 */

import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface EmptyStateProps {
  /** Icon to display */
  icon: LucideIcon;
  
  /** Main title */
  title: string;
  
  /** Optional description */
  description?: string;
  
  /** Optional action button or element */
  action?: React.ReactNode;
  
  /** Optional className */
  className?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className = '',
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}>
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground mb-6 max-w-md">
          {description}
        </p>
      )}
      {action && <div>{action}</div>}
    </div>
  );
}
