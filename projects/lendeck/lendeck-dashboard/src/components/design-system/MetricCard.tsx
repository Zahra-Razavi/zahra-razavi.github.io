/**
 * METRIC CARD COMPONENT
 * 
 * A card component specifically designed for displaying metrics with trends.
 * Follows the Lendeck design system and includes optional trend indicators.
 * 
 * @example
 * ```tsx
 * <MetricCard
 *   label="Total Revenue"
 *   value="$125,430"
 *   trend={{ value: 12.5, direction: 'up' }}
 *   period="vs last month"
 * />
 * ```
 */

import { Card, CardContent } from '../ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../ui/utils';

export interface MetricCardProps {
  /** Label for the metric */
  label: string;
  
  /** Main value to display */
  value: string | number;
  
  /** Optional trend data */
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };
  
  /** Time period for the metric */
  period?: string;
  
  /** Optional description */
  description?: string;
  
  /** Optional className for custom styling */
  className?: string;
}

export function MetricCard({
  label,
  value,
  trend,
  period,
  description,
  className = '',
}: MetricCardProps) {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{label}</p>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-3xl font-semibold tracking-tight">{value}</h3>
            {trend && (
              <div className={cn(
                'flex items-center gap-1 text-sm font-medium',
                trend.direction === 'up' ? 'text-lendeck-success' : 'text-lendeck-error'
              )}>
                {trend.direction === 'up' ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span>{Math.abs(trend.value)}%</span>
              </div>
            )}
          </div>
          {(period || description) && (
            <p className="text-xs text-muted-foreground">
              {period && <span>{period}</span>}
              {description && <span className="block mt-1">{description}</span>}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
