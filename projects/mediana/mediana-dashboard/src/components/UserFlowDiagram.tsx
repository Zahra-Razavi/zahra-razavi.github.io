import React from 'react';
import { UserPlus, FileText, Building2, Phone, Mic, CheckCircle } from 'lucide-react';

export function UserFlowDiagram() {
  const steps = [
    {
      icon: UserPlus,
      label: 'Sign Up',
      description: 'Create account'
    },
    {
      icon: FileText,
      label: 'Personal Info',
      description: 'Your details'
    },
    {
      icon: Building2,
      label: 'Business Info',
      description: 'Company details'
    },
    {
      icon: Phone,
      label: 'Phone Lines',
      description: 'Configure numbers'
    },
    {
      icon: Mic,
      label: 'IVR Setup',
      description: 'Call routing'
    },
    {
      icon: CheckCircle,
      label: 'Complete',
      description: 'Start using'
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-12 left-0 right-0 h-0.5 bg-teal-light hidden md:block" 
             style={{ width: 'calc(100% - 80px)', marginLeft: '40px' }} />
        
        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-teal flex items-center justify-center mb-3 relative z-10 shadow-md">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Label */}
                <h4 className="mb-1">{step.label}</h4>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
