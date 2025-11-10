import { ReactNode } from 'react';
import { LendeckLogo } from '../ui/lendeck-logo';
import { Progress } from '../ui/progress';
import { useDemo } from '../demo/DemoContext';
import { Badge } from '../ui/badge';

interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  title: string;
}

export function OnboardingLayout({ children, currentStep, totalSteps, title }: OnboardingLayoutProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;
  const { isDemoMode } = useDemo();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <LendeckLogo className="h-8" />
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
            {isDemoMode && (
              <Badge variant="secondary" className="bg-blue-500 text-white hover:bg-blue-600">
                Demo Mode
              </Badge>
            )}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-center mb-8">{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
}