import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Check } from 'lucide-react';
import { availablePlans } from './constants';

interface PlanUpgradeDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PlanUpgradeDialog({ isOpen, onOpenChange }: PlanUpgradeDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Choose Your Plan</DialogTitle>
          <DialogDescription>
            Select the plan that best fits your business needs
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          {availablePlans.map((plan) => (
            <Card key={plan.name} className={plan.recommended ? 'border-primary' : ''}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  {plan.recommended && (
                    <Badge className="bg-primary text-primary-foreground">Current</Badge>
                  )}
                </div>
                <div className="text-2xl font-bold">
                  ${plan.price}
                  <span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-success mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-4" 
                  variant={plan.recommended ? 'default' : 'outline'}
                  disabled={plan.recommended}
                >
                  {plan.recommended ? 'Current Plan' : 'Select Plan'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}