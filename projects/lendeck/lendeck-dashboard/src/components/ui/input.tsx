import * as React from "react";
import { useDemo } from "../demo/DemoContext";
import { cn } from "./utils";

function Input({ className, type, id, name, value, onChange, ...props }: React.ComponentProps<"input">) {
  const { isDemoMode, getDemoValue } = useDemo();
  const [isClicked, setIsClicked] = React.useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // Only auto-fill if demo mode is on, field is empty, and hasn't been clicked before
    if (isDemoMode && !value && !isClicked) {
      const fieldName = name || id || '';
      const demoValue = getDemoValue(fieldName, type);
      
      // Create a synthetic event to trigger onChange
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          value: demoValue,
          name: name || '',
          id: id || '',
        },
        currentTarget: {
          ...e.currentTarget,
          value: demoValue,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      
      onChange?.(syntheticEvent);
      setIsClicked(true);
    }
    
    // Call original onFocus if provided
    props.onFocus?.(e);
  };

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        isDemoMode && "cursor-pointer",
        className,
      )}
      onFocus={handleFocus}
      {...props}
    />
  );
}

export { Input };