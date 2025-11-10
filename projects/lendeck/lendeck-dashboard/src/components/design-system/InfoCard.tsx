/**
 * INFO CARD COMPONENT
 * 
 * A card component for displaying informational content with optional icon.
 * Follows the Lendeck design system color variants.
 * 
 * @example
 * ```tsx
 * <InfoCard
 *   variant="info"
 *   title="Important Notice"
 *   description="Please review the updated terms and conditions."
 * />
 * ```
 */

import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { cn } from '../ui/utils';
import { AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';

export interface InfoCardProps {
  /** Visual variant */
  variant?: 'info' | 'success' | 'warning' | 'error';
  
  /** Optional title */
  title?: string;
  
  /** Description or content */
  description?: string;
  
  /** Optional custom icon (overrides default variant icon) */
  icon?: LucideIcon;
  
  /** Additional children content */
  children?: ReactNode;
  
  /** Optional className for custom styling */
  className?: string;
}

const variantConfig = {
  info: {
    icon: Info,
    containerClass: 'bg-lendeck-blue/10 border-lendeck-blue/20',
    iconClass: 'text-lendeck-blue',
    titleClass: 'text-lendeck-blue',
  },
  success: {
    icon: CheckCircle,
    containerClass: 'bg-lendeck-success/10 border-lendeck-success/20',
    iconClass: 'text-lendeck-success',
    titleClass: 'text-lendeck-success',
  },
  warning: {
    icon: AlertTriangle,
    containerClass: 'bg-lendeck-orange/10 border-lendeck-orange/20',
    iconClass: 'text-lendeck-orange',
    titleClass: 'text-lendeck-orange',
  },
  error: {
    icon: AlertCircle,
    containerClass: 'bg-lendeck-error/10 border-lendeck-error/20',
    iconClass: 'text-lendeck-error',
    titleClass: 'text-lendeck-error',
  },
};

export function InfoCard({
  variant = 'info',
  title,
  description,
  icon: CustomIcon,
  children,
  className = '',
}: InfoCardProps) {
  const config = variantConfig[variant];
  const Icon = CustomIcon || config.icon;
  
  return (
    <Card className={cn(config.containerClass, 'border', className)}>
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Icon className={cn('h-5 w-5 flex-shrink-0 mt-0.5', config.iconClass)} />
          <div className="flex-1 space-y-1">
            {title && (
              <h4 className={cn('font-medium', config.titleClass)}>{title}</h4>
            )}
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
            {children}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
