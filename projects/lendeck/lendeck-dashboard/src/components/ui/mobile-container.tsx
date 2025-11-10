import { ReactNode } from 'react';

interface MobileContainerProps {
  children: ReactNode;
  className?: string;
}

export function MobileContainer({ children, className = '' }: MobileContainerProps) {
  return (
    <div className={`w-full max-w-full overflow-x-hidden ${className}`}>
      {children}
    </div>
  );
}

// Page wrapper that ensures no horizontal overflow
export function PageWrapper({ children, className = '' }: MobileContainerProps) {
  return (
    <div className={`w-full max-w-full min-w-0 overflow-x-hidden space-y-4 sm:space-y-6 ${className}`}>
      {children}
    </div>
  );
}