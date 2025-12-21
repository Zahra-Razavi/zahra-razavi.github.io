import React from 'react';
import logoImage from 'figma:asset/37f78f5301e404d8aa54f52c5161fd523205bb00.png';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-8" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage}
        alt="Border.ai Logo"
        className="h-8 w-auto object-contain"
      />
    </div>
  );
}