import { ReactNode } from 'react';
import { Table } from './table';

interface ResponsiveTableProps {
  children: ReactNode;
  className?: string;
}

export function ResponsiveTable({ children, className }: ResponsiveTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-md border">
      <div className="table-container">
        <Table className={className}>
          {children}
        </Table>
      </div>
    </div>
  );
}

// Mobile card view for complex table data
interface MobileCardProps {
  children: ReactNode;
  className?: string;
}

export function MobileCard({ children, className }: MobileCardProps) {
  return (
    <div className={`block md:hidden border rounded-lg p-4 space-y-3 ${className || ''}`}>
      {children}
    </div>
  );
}

// Desktop table row that hides on mobile
interface DesktopTableRowProps {
  children: ReactNode;
  className?: string;
}

export function DesktopTableRow({ children, className }: DesktopTableRowProps) {
  return (
    <tr className={`hidden md:table-row ${className || ''}`}>
      {children}
    </tr>
  );
}