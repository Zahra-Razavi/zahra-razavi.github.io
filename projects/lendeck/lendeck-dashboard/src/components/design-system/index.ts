/**
 * LENDECK DESIGN SYSTEM
 * 
 * Central export for all design system components, tokens, and utilities.
 * Import from this file to ensure you're using standardized components.
 * 
 * @example
 * ```tsx
 * import { StatusCard, PageHeader, Grid, designSystem } from '@/components/design-system';
 * ```
 */

/* ========================================
   DESIGN TOKENS
   ======================================== */
export * from './tokens';

/* ========================================
   LAYOUT COMPONENTS
   ======================================== */
export { Container, type ContainerProps } from './Container';
export { Section, type SectionProps } from './Section';
export { Grid, type GridProps } from './Grid';
export { Stack, type StackProps } from './Stack';

/* ========================================
   CARD COMPONENTS
   ======================================== */
export { StatusCard, type StatusCardProps } from './StatusCard';
export { MetricCard, type MetricCardProps } from './MetricCard';
export { InfoCard, type InfoCardProps } from './InfoCard';

/* ========================================
   TYPOGRAPHY COMPONENTS
   ======================================== */
export { Heading, type HeadingProps } from './Heading';
export { Text, type TextProps } from './Text';

/* ========================================
   DATA DISPLAY COMPONENTS
   ======================================== */
export { DataTable, type DataTableProps, type DataTableColumn } from './DataTable';
export { StatusBadge, type StatusBadgeProps } from './StatusBadge';

/* ========================================
   PAGE COMPONENTS
   ======================================== */
export { PageHeader, type PageHeaderProps } from './PageHeader';
export { EmptyState, type EmptyStateProps } from './EmptyState';
export { LoadingState, type LoadingStateProps } from './LoadingState';
