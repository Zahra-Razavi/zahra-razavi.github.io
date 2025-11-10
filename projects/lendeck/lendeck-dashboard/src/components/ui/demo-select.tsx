import * as React from "react";
import { useDemo } from "../demo/DemoContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

interface DemoSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  id?: string;
  name?: string;
  placeholder?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export function DemoSelect({ 
  value, 
  onValueChange, 
  id, 
  name,
  children,
  ...props 
}: DemoSelectProps) {
  const { isDemoMode, getDemoValue } = useDemo();
  const [hasAutoFilled, setHasAutoFilled] = React.useState(false);

  const handleOpenChange = (open: boolean) => {
    // Auto-fill when opened if demo mode is on and hasn't been filled yet
    if (open && isDemoMode && !value && !hasAutoFilled) {
      const fieldName = name || id || '';
      const demoValue = getDemoValue(fieldName);
      onValueChange?.(demoValue);
      setHasAutoFilled(true);
    }
  };

  return (
    <Select 
      value={value} 
      onValueChange={onValueChange}
      onOpenChange={handleOpenChange}
      {...props}
    >
      {children}
    </Select>
  );
}

// Re-export the other components for convenience
export { SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
