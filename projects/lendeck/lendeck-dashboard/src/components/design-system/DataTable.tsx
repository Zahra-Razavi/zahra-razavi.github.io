/**
 * DATA TABLE COMPONENT
 * 
 * A standardized, responsive table component with built-in filtering,
 * search, and mobile card view support.
 * 
 * @example
 * ```tsx
 * <DataTable
 *   title="Active Deals"
 *   description="Manage your active deals"
 *   columns={columns}
 *   data={data}
 *   searchPlaceholder="Search deals..."
 *   onSearch={handleSearch}
 * />
 * ```
 */

import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export interface DataTableColumn<T> {
  /** Column header text */
  header: string;
  
  /** Accessor function to get cell value from row data */
  accessor: (row: T) => React.ReactNode;
  
  /** Optional className for the column */
  className?: string;
  
  /** Whether to hide this column on mobile */
  hideOnMobile?: boolean;
}

export interface DataTableProps<T> {
  /** Table title */
  title: string;
  
  /** Optional table description */
  description?: string;
  
  /** Column definitions */
  columns: DataTableColumn<T>[];
  
  /** Table data */
  data: T[];
  
  /** Unique key accessor for each row */
  keyAccessor: (row: T) => string | number;
  
  /** Optional search functionality */
  searchPlaceholder?: string;
  onSearch?: (term: string) => void;
  
  /** Optional filter elements */
  filters?: React.ReactNode;
  
  /** Optional action buttons */
  actions?: React.ReactNode;
  
  /** Optional mobile card renderer for custom mobile view */
  renderMobileCard?: (row: T) => React.ReactNode;
  
  /** Optional className */
  className?: string;
}

export function DataTable<T>({
  title,
  description,
  columns,
  data,
  keyAccessor,
  searchPlaceholder,
  onSearch,
  filters,
  actions,
  renderMobileCard,
  className = '',
}: DataTableProps<T>) {
  return (
    <Card className={`w-full max-w-full overflow-hidden ${className}`}>
      <div className="space-y-4 p-4">
        {/* Header */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
          {description && (
            <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
          )}
        </div>
        
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          {searchPlaceholder && onSearch && (
            <div className="flex-1 min-w-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={searchPlaceholder}
                  className="pl-10 w-full"
                  onChange={(e) => onSearch(e.target.value)}
                />
              </div>
            </div>
          )}
          
          {/* Filters */}
          {filters && (
            <div className="flex gap-3">
              {filters}
            </div>
          )}
          
          {/* Actions */}
          {actions && (
            <div className="flex gap-3">
              {actions}
            </div>
          )}
        </div>
      </div>
      
      <CardContent className="p-0">
        {/* Desktop Table View */}
        <div className="hidden xl:block overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column, index) => (
                  <TableHead key={index} className={column.className}>
                    {column.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} className="text-center py-8 text-muted-foreground">
                    No data available
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row) => (
                  <TableRow key={keyAccessor(row)}>
                    {columns.map((column, index) => (
                      <TableCell key={index} className={column.className}>
                        {column.accessor(row)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        
        {/* Mobile Card View */}
        <div className="xl:hidden p-4 space-y-4">
          {data.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No data available
            </div>
          ) : (
            data.map((row) => (
              <Card key={keyAccessor(row)} className="p-4">
                {renderMobileCard ? (
                  renderMobileCard(row)
                ) : (
                  <div className="space-y-3">
                    {columns.filter(col => !col.hideOnMobile).map((column, index) => (
                      <div key={index}>
                        <div className="font-medium text-sm text-muted-foreground mb-1">
                          {column.header}
                        </div>
                        <div>{column.accessor(row)}</div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
