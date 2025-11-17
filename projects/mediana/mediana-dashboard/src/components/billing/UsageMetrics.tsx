import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { AlertTriangle } from 'lucide-react';
import { usageData } from './constants';
import { calculateUsagePercentage, getUsageColor } from './utils';

export function UsageMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Usage</CardTitle>
        <CardDescription>
          Track your usage against plan limits for the current billing period
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usageData.map((metric) => {
            const percentage = calculateUsagePercentage(metric.used, metric.limit);
            const isUnlimited = metric.limit === -1;
            
            return (
              <div key={metric.name} className="space-y-3">
                <div className="flex items-center space-x-2">
                  {metric.icon}
                  <h4 className="text-sm font-medium">{metric.name}</h4>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">
                      {metric.used} {metric.unit}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {isUnlimited ? 'Unlimited' : `${metric.limit} ${metric.unit}`}
                    </span>
                  </div>
                  
                  {!isUnlimited && (
                    <>
                      <Progress value={percentage} className="h-2" />
                      <p className={`text-xs mt-1 ${getUsageColor(percentage)}`}>
                        {percentage.toFixed(0)}% used
                        {percentage >= 90 && (
                          <AlertTriangle className="h-3 w-3 inline ml-1" />
                        )}
                      </p>
                    </>
                  )}
                  
                  {isUnlimited && (
                    <div className="text-xs text-green-600 font-medium">
                      ✓ Unlimited usage
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}