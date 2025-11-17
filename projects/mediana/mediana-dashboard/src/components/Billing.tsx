import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Check, CreditCard, Phone, Clock, TrendingUp } from 'lucide-react';
import { currentPlan, availablePlans, billBreakdown, usageData } from './billing/constants';
import { InvoiceTable } from './billing/InvoiceTable';

export function Billing() {
  const [selectedPlan, setSelectedPlan] = useState(currentPlan.name);

  const handleDownloadInvoice = (invoiceNumber: string) => {
    // Simulate invoice download
    alert(`Downloading invoice ${invoiceNumber}`);
  };

  const handlePlanChange = (planName: string) => {
    setSelectedPlan(planName);
    // In a real app, this would trigger a plan change API call
    alert(`Plan change requested to ${planName}. This would be processed by your billing system.`);
  };

  const totalUsageCosts = billBreakdown.usageCosts.phoneUsage + 
                         billBreakdown.usageCosts.numberUsage + 
                         billBreakdown.usageCosts.lineTime;

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Service Plans Section */}
      <section>
        <div className="mb-6">
          <h2>Service Plans</h2>
          <p className="text-muted-foreground">
            Choose the plan that best fits your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {availablePlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${
                currentPlan.name === plan.name 
                  ? 'border-teal ring-2 ring-teal/20' 
                  : plan.recommended 
                    ? 'border-teal/50' 
                    : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="recommended">Recommended</Badge>
                </div>
              )}
              {currentPlan.name === plan.name && (
                <div className="absolute -top-3 right-4">
                  <Badge variant="success">Current Plan</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="space-y-1">
                  <div className="text-3xl font-bold">${plan.price}</div>
                  <p className="text-muted-foreground">per month</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-teal mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  {currentPlan.name === plan.name ? (
                    <Button disabled className="w-full">
                      Current Plan
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => handlePlanChange(plan.name)}
                      variant={plan.recommended ? "default" : "outline"}
                      className="w-full"
                    >
                      {currentPlan.price < plan.price ? 'Upgrade' : 'Downgrade'} to {plan.name}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Your Bill Section */}
      <section>
        <div className="mb-6">
          <h2>Your Bill</h2>
          <p className="text-muted-foreground">
            Overview of your current billing period and usage costs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bill Breakdown */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Bill Breakdown</CardTitle>
                <CardDescription>
                  Billing period: January 1 - January 31, 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Service Costs */}
                <div className="flex justify-between items-center py-3 border-b">
                  <div>
                    <p className="font-medium">Service Plan ({currentPlan.name})</p>
                    <p className="text-sm text-muted-foreground">Monthly subscription</p>
                  </div>
                  <p className="text-lg font-semibold">${billBreakdown.serviceCosts.toFixed(2)}</p>
                </div>
                
                {/* Usage Costs */}
                <div className="space-y-2">
                  <p className="font-medium">Usage Costs</p>
                  
                  <div className="flex justify-between items-center py-2 pl-4">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Phone Usage</span>
                    </div>
                    <span className="text-sm">${billBreakdown.usageCosts.phoneUsage.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 pl-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Number Usage</span>
                    </div>
                    <span className="text-sm">${billBreakdown.usageCosts.numberUsage.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 pl-4 border-b">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Line Time Usage</span>
                    </div>
                    <span className="text-sm">${billBreakdown.usageCosts.lineTime.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 pl-4">
                    <span className="text-sm font-medium">Total Usage Costs</span>
                    <span className="text-sm font-semibold">${totalUsageCosts.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Total */}
                <div className="flex justify-between items-center py-4 border-t-2 border-teal/20">
                  <p className="text-lg font-semibold">Total Amount</p>
                  <p className="text-2xl font-bold text-teal">${billBreakdown.total.toFixed(2)}</p>
                </div>
              </CardContent>
            </Card>

            {/* Current Usage */}
            <Card>
              <CardHeader>
                <CardTitle>Current Usage</CardTitle>
                <CardDescription>
                  Usage against your plan limits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {usageData.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {metric.icon}
                          <span className="text-sm font-medium">{metric.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {metric.used} / {metric.limit === -1 ? '∞' : metric.limit} {metric.unit}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-teal h-2 rounded-full transition-all duration-300"
                          style={{ 
                            width: metric.limit === -1 
                              ? '0%' 
                              : `${Math.min((metric.used / metric.limit) * 100, 100)}%` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Info & Actions */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <CreditCard className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <p className="font-medium">**** **** **** 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/27</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Update Payment Method
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Next Billing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Next billing date:</span>
                    <span>February 1, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated amount:</span>
                    <span className="font-semibold">${billBreakdown.serviceCosts.toFixed(2)}+</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    + usage costs will be calculated based on actual usage
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Billing History */}
      <section>
        <Card>
          <InvoiceTable onDownloadInvoice={handleDownloadInvoice} />
        </Card>
      </section>
    </div>
  );
}