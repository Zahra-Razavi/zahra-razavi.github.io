/**
 * PAGE HEADER COMPONENT
 * 
 * A standardized header component for page titles and descriptions.
 * Ensures consistent typography and spacing across all pages.
 * 
 * @example
 * ```tsx
 * <PageHeader
 *   title="Deal Submissions"
 *   description="Review and manage incoming deal submissions"
 *   action={<Button>Create New Deal</Button>}
 * />
 * ```
 */

import React from 'react';

export interface PageHeaderProps {
  /** Main page title */
  title: string;
  
  /** Optional description text */
  description?: string;
  
  /** Optional action element (usually a button) */
  action?: React.ReactNode;
  
  /** Optional className for custom styling */
  className?: string;
}

export function PageHeader({
  title,
  description,
  action,
  className = '',
}: PageHeaderProps) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${className}`}>
      <div className="space-y-1">
        <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
        {description && (
          <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
        )}
      </div>
      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}
