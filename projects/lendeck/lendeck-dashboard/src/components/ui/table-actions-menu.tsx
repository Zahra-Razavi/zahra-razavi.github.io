import * as React from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "./button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";

interface TableActionsMenuProps {
  children: React.ReactNode;
  label?: string;
}

export function TableActionsMenu({ children, label = "Actions" }: TableActionsMenuProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0"
          aria-label={label}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2" align="end">
        <div className="flex flex-col gap-1">
          {children}
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface TableActionItemProps {
  onClick?: () => void;
  icon: React.ReactNode;
  label: string;
  variant?: "default" | "destructive";
  asChild?: boolean;
  children?: React.ReactNode;
}

export function TableActionItem({ 
  onClick, 
  icon, 
  label, 
  variant = "default",
  asChild,
  children
}: TableActionItemProps) {
  const baseClasses = "flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors w-full justify-start";
  const variantClasses = variant === "destructive" 
    ? "text-destructive hover:bg-destructive/10" 
    : "hover:bg-accent";

  if (asChild && children) {
    return (
      <div className={`${baseClasses} ${variantClasses}`}>
        {children}
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {icon}
      {label}
    </button>
  );
}