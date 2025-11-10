import { ReactNode } from 'react';

interface LendeckLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export function LendeckLogo({ size = 'md', showText = true, className = '' }: LendeckLogoProps) {
  const sizeClasses = {
    sm: showText ? 'h-6 w-6' : 'h-6 w-6',
    md: showText ? 'h-8 w-8' : 'h-8 w-8', 
    lg: showText ? 'h-10 w-10' : 'h-10 w-10'
  };

  const textSizeClasses = {
    sm: 'text-base font-semibold',
    md: 'text-lg font-bold',
    lg: 'text-xl font-bold'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Lendeck Icon */}
      <div className={`bg-[#4E0F60] rounded flex items-center justify-center ${sizeClasses[size]}`}>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/5 h-3/5"
        >
          {/* Stylized "L" for Lendeck */}
          <path 
            d="M6 4V18H18V16H8V4H6Z" 
            fill="white"
            stroke="white"
            strokeWidth="0.5"
          />
          {/* Small accent dot */}
          <circle 
            cx="16" 
            cy="6" 
            r="2" 
            fill="#FF5F0C"
          />
        </svg>
      </div>
      
      {/* Lendeck Text */}
      {showText && (
        <span className={`text-[#4E0F60] ${textSizeClasses[size]}`}>
          Lendeck
        </span>
      )}
    </div>
  );
}

// Icon-only version for compact spaces
export function LendeckIcon({ size = 'md', className = '' }: Omit<LendeckLogoProps, 'showText'>) {
  return <LendeckLogo size={size} showText={false} className={className} />;
}