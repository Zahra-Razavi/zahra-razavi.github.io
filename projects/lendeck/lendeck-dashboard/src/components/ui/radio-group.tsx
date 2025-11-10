"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import { useDemo } from "../demo/DemoContext"
import { cn } from "./utils"

interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  name?: string;
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, name, value, onValueChange, ...props }, ref) => {
  const { isDemoMode, getDemoValue } = useDemo();
  const [hasAutoFilled, setHasAutoFilled] = React.useState(false);

  const handleFocus = () => {
    // Auto-fill when focused if demo mode is on and hasn't been filled yet
    if (isDemoMode && !value && !hasAutoFilled && name) {
      const demoValue = getDemoValue(name);
      onValueChange?.(demoValue);
      setHasAutoFilled(true);
    }
  };

  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      name={name}
      value={value}
      onValueChange={onValueChange}
      onFocus={handleFocus}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }