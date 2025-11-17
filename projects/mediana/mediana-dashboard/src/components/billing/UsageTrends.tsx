import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Phone, Clock, TrendingUp } from 'lucide-react';

export function UsageTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Usage Trends</CardTitle>
        <CardDescription>
          Monitor your usage patterns over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Avg. Daily Calls</CardTitle>
              <Phone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Peak Usage Hour</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2 PM</div>
              <p className="text-xs text-muted-foreground">
                Most active time
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12%</div>
              <p className="text-xs text-muted-foreground">
                Monthly increase
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <h4>Usage Insights</h4>
          <ul className="text-sm text-muted-foreground mt-2 space-y-1">
            <li>• Peak calling hours are between 2-4 PM on weekdays</li>
            <li>• International usage is 23% of your monthly allowance</li>
            <li>• Conference calls average 8 participants per session</li>
            <li>• Call volume has increased 12% compared to last month</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}