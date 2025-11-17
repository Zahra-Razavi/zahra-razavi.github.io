import React from 'react';
import { colors } from '../../design-system';

interface PasswordStrengthIndicatorProps {
  password: string;
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const calculateStrength = (pass: string): number => {
    let strength = 0;
    
    if (pass.length >= 8) strength += 1;
    if (pass.length >= 12) strength += 1;
    if (/[a-z]/.test(pass)) strength += 1;
    if (/[A-Z]/.test(pass)) strength += 1;
    if (/\d/.test(pass)) strength += 1;
    if (/[^a-zA-Z0-9]/.test(pass)) strength += 1;
    
    return Math.min(strength, 4);
  };

  const getStrengthLabel = (strength: number): string => {
    switch (strength) {
      case 0:
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return 'Weak';
    }
  };

  const getStrengthColor = (strength: number): string => {
    switch (strength) {
      case 0:
      case 1:
        return colors.destructive.DEFAULT;
      case 2:
        return colors.warning.DEFAULT;
      case 3:
        return colors.teal[600];
      case 4:
        return colors.success.DEFAULT;
      default:
        return colors.destructive.DEFAULT;
    }
  };

  if (!password) return null;

  const strength = calculateStrength(password);
  const label = getStrengthLabel(strength);
  const color = getStrengthColor(strength);

  return (
    <div className="space-y-1">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="h-1 flex-1 rounded-full transition-colors"
            style={{
              backgroundColor: level <= strength ? color : colors.neutral[200],
            }}
          />
        ))}
      </div>
      <p className="text-xs" style={{ color }}>
        Password strength: {label}
      </p>
    </div>
  );
}
