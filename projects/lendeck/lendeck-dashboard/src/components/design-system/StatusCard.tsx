/**
 * STATUS CARD COMPONENT
 * 
 * A standardized card component for displaying key metrics and status information.
 * This component is used throughout the Lendeck platform for consistent visual presentation.
 * 
 * @example
 * ```tsx
 * <StatusCard
 *   icon={Users}
 *   iconColor="blue"
 *   value="156"
 *   label="Active ISOs"
 * />
 * ```
 */

import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export interface StatusCardProps {
  /** Lucide icon component to display */
  icon: LucideIcon;
  
  /** Color variant for the icon background */
  iconColor?: 'primary' | 'orange' | 'pink' | 'blue' | 'green' | 'success' | 'error' | 'teal' | 'yellow';
  
  /** Main value to display (can be string or number) */
  value: string | number;
  
  /** Label/description text below the value */
  label: string;
  
  /** Optional additional content to display */
  children?: React.ReactNode;
  
  /** Optional className for custom styling */
  className?: string;
}

const iconColorClasses = {
  primary: 'bg-lendeck-primary/10 text-lendeck-primary',
  orange: 'bg-lendeck-orange/10 text-lendeck-orange',
  pink: 'bg-lendeck-pink/10 text-lendeck-pink',
  blue: 'bg-lendeck-blue/10 text-lendeck-blue',
  green: 'bg-lendeck-green/10 text-lendeck-green',
  success: 'bg-lendeck-success/10 text-lendeck-success',
  error: 'bg-lendeck-error/10 text-lendeck-error',
  teal: 'bg-lendeck-teal/10 text-lendeck-teal',
  yellow: 'bg-lendeck-yellow/10 text-lendeck-yellow',
};

export function StatusCard({
  icon: Icon,
  iconColor = 'primary',
  value,
  label,
  children,
  className = '',
}: StatusCardProps) {
  const colorClasses = iconColorClasses[iconColor];
  
  return (
    <Card className={className}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${colorClasses.split(' ')[0]}`}>
            <Icon className={`h-5 w-5 ${colorClasses.split(' ')[1]}`} />
          </div>
          <div className="flex-1">
            <div className="text-xl">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
            {children}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
