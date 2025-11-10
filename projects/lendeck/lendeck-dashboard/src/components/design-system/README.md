# Lendeck Design System

A comprehensive, token-based design system for the Lendeck lending platform. This design system ensures consistency, accessibility, and maintainability across all broker and lender dashboards.

## 🌐 Viewing the Design System

Access the design system documentation in preview mode:

- **Hub (Index)**: `/design-system-hub` - Overview and navigation to all design system pages
- **Design Tokens**: `/design-system` - Complete list of all design tokens (colors, spacing, typography, etc.)
- **Components Showcase**: `/design-system/components` - Live preview of all components with copyable code
- **Simple Demo**: `/design-system/demo` - Quick demonstration of key components

These pages are standalone and not accessible from the dashboard sidebars. You can view them directly by navigating to these URLs in your browser.

## 📋 Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Design Tokens](#design-tokens)
- [Layout Components](#layout-components)
- [Card Components](#card-components)
- [Typography Components](#typography-components)
- [Data Display Components](#data-display-components)
- [Page Components](#page-components)
- [Utility Classes](#utility-classes)
- [Usage Guidelines](#usage-guidelines)
- [Accessibility](#accessibility)

## 🎨 Overview

The Lendeck Design System is built on the following principles:

1. **Consistency**: All components follow the same visual language
2. **Accessibility**: WCAG 2.2 AA compliant
3. **Responsiveness**: Mobile-first approach
4. **Maintainability**: Token-based system for easy updates
5. **Flexibility**: Composable components for various use cases
6. **Type Safety**: Full TypeScript support with exported types
7. **Performance**: Optimized components with minimal re-renders

## 🚀 Quick Start

### Installation

The design system is already integrated into your project. Simply import components as needed:

```tsx
import { 
  StatusCard, 
  Grid, 
  Container,
  Heading,
  MetricCard 
} from '@/components/design-system';

function Dashboard() {
  return (
    <Container>
      <Heading level={1}>Dashboard</Heading>
      <Grid cols={{ base: 1, md: 2, lg: 4 }} gap="md">
        <StatusCard
          icon={Users}
          iconColor="blue"
          value="156"
          label="Active Users"
        />
        <MetricCard
          label="Total Revenue"
          value="$125,430"
          trend={{ value: 12.5, direction: 'up' }}
          period="vs last month"
        />
      </Grid>
    </Container>
  );
}
```

### Import Tokens

```tsx
import { designSystem, colors, spacing } from '@/components/design-system';

// Use in components
const myColor = colors.primary;
const mySpacing = spacing[4];
```

## 🎯 Design Tokens

Design tokens are the foundation of our design system. They define the visual properties used throughout the application.

### Color Tokens

```css
/* Primary Brand Colors */
--lendeck-primary: #4E0F60
--lendeck-orange: #FF5F0C
--lendeck-pink: #ED1E59

/* Secondary Colors */
--lendeck-blue: #159AEB
--lendeck-green: #25A900
--lendeck-teal: #0DA0BF
--lendeck-yellow: #EAD01E

/* Status Colors */
--lendeck-success: #01942B
--lendeck-error: #DD003F

/* Gray Scale */
--lendeck-gray-dark: #747474
--lendeck-gray: #C6C6C6
--lendeck-gray-light: #D7D7D9
--lendeck-gray-lighter: #E8E8E8
--lendeck-gray-lightest: #EEEEEE
```

### Spacing System

Based on an 8px grid for consistent spacing:

```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
```

### Typography Scale

```css
/* Font Sizes */
--font-size-xs: 12px
--font-size-sm: 14px
--font-size-base: 16px
--font-size-lg: 18px
--font-size-xl: 20px
--font-size-2xl: 24px
--font-size-3xl: 30px
--font-size-4xl: 36px

/* Font Weights */
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

### Shadow System (Elevation)

```css
--shadow-xs: subtle shadow for minimal elevation
--shadow-sm: small shadow for cards
--shadow-md: medium shadow for dropdowns
--shadow-lg: large shadow for modals
--shadow-xl: extra large shadow for popovers
--shadow-2xl: maximum elevation
```

### Border Radius

```css
--radius-sm: 6px
--radius-md: 8px
--radius-lg: 10px
--radius-xl: 12px
--radius-2xl: 16px
--radius-full: 9999px (circular)
```

## 📐 Layout Components

### Container

A responsive container component that centers content and applies max-width constraints.

```tsx
import { Container } from '@/components/design-system';

<Container size="lg" padding>
  {/* Your content */}
</Container>
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full' (default: 'lg')
- `padding`: boolean (default: true) - Adds responsive horizontal padding
- `className`: Optional custom classes

### Section

Semantic section component with standardized vertical spacing.

```tsx
import { Section } from '@/components/design-system';

<Section spacing="lg" id="features">
  <h2>Features</h2>
  {/* Section content */}
</Section>
```

**Props:**
- `spacing`: 'none' | 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `id`: Optional section identifier
- `className`: Optional custom classes

### Grid

Responsive grid layout with predefined column configurations.

```tsx
import { Grid } from '@/components/design-system';

<Grid cols={{ base: 1, md: 2, lg: 4 }} gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
  <Card>Item 4</Card>
</Grid>
```

**Props:**
- `cols`: number or responsive object `{ base?, sm?, md?, lg?, xl? }`
- `gap`: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `className`: Optional custom classes

### Stack

Flexbox-based layout for vertical or horizontal stacking with gap control.

```tsx
import { Stack } from '@/components/design-system';

<Stack direction="horizontal" gap="md" align="center" justify="between">
  <Button>Cancel</Button>
  <Button variant="primary">Save</Button>
</Stack>
```

**Props:**
- `direction`: 'horizontal' | 'vertical' (default: 'vertical')
- `gap`: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `align`: 'start' | 'center' | 'end' | 'stretch' | 'baseline' (default: 'stretch')
- `justify`: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' (default: 'start')
- `wrap`: boolean (default: false)
- `className`: Optional custom classes

---

## 🎴 Card Components

### StatusCard

A standardized card for displaying key metrics and statistics.

```tsx
import { StatusCard } from '@/components/design-system';
import { Users } from 'lucide-react';

<StatusCard
  icon={Users}
  iconColor="blue"
  value="156"
  label="Active ISOs"
/>
```

**Props:**
- `icon`: Lucide icon component
- `iconColor`: 'primary' | 'orange' | 'pink' | 'blue' | 'green' | 'success' | 'error' | 'teal' | 'yellow'
- `value`: String or number to display
- `label`: Description text
- `children`: Optional additional content
- `className`: Optional custom classes

### MetricCard

Card component for displaying metrics with optional trend indicators.

```tsx
import { MetricCard } from '@/components/design-system';

<MetricCard
  label="Total Revenue"
  value="$125,430"
  trend={{ value: 12.5, direction: 'up' }}
  period="vs last month"
/>
```

**Props:**
- `label`: Metric label (required)
- `value`: Main value to display (required)
- `trend`: Optional `{ value: number, direction: 'up' | 'down' }`
- `period`: Time period description
- `description`: Additional description text
- `className`: Optional custom classes

### InfoCard

Informational card with color-coded variants and optional icon.

```tsx
import { InfoCard } from '@/components/design-system';

<InfoCard
  variant="success"
  title="Success"
  description="Your changes have been saved successfully."
/>

<InfoCard
  variant="warning"
  title="Warning"
  description="Please review the highlighted fields."
/>
```

**Props:**
- `variant`: 'info' | 'success' | 'warning' | 'error' (default: 'info')
- `title`: Optional title
- `description`: Optional description
- `icon`: Optional custom Lucide icon (overrides default)
- `children`: Additional content
- `className`: Optional custom classes

---

## ✍️ Typography Components

### Heading

Semantic heading component with consistent sizing and optional color variants.

```tsx
import { Heading } from '@/components/design-system';

<Heading level={1}>Main Page Title</Heading>
<Heading level={2} variant="primary">Section Title</Heading>
<Heading level={3}>Subsection</Heading>
```

**Props:**
- `level`: 1 | 2 | 3 | 4 | 5 | 6 (required)
- `variant`: 'default' | 'primary' | 'muted' (default: 'default')
- `id`: Optional anchor id
- `className`: Optional custom classes

### Text

Typography component for body text with size and style variants.

```tsx
import { Text } from '@/components/design-system';

<Text size="lg">Large body text</Text>
<Text variant="muted" size="sm">Small muted text</Text>
<Text as="span" weight="bold">Bold inline text</Text>
```

**Props:**
- `as`: 'p' | 'span' | 'div' | 'label' (default: 'p')
- `size`: 'xs' | 'sm' | 'base' | 'lg' | 'xl' (default: 'base')
- `weight`: 'normal' | 'medium' | 'semibold' | 'bold' (default: 'normal')
- `variant`: 'default' | 'primary' | 'muted' | 'success' | 'error' | 'warning' (default: 'default')
- `align`: 'left' | 'center' | 'right' (default: 'left')
- `className`: Optional custom classes

---

## 📊 Data Display Components

### PageHeader

Standardized page header with title, description, and optional action.

```tsx
import { PageHeader } from '@/components/design-system';
import { Button } from '@/components/ui/button';

<PageHeader
  title="Deal Submissions"
  description="Review and manage incoming deal submissions"
  action={<Button>Create New Deal</Button>}
/>
```

**Props:**
- `title`: Page title (required)
- `description`: Optional description text
- `action`: Optional action element (usually a button)

### DataTable

Responsive table component with built-in search and filtering.

```tsx
import { DataTable } from '@/components/design-system';

const columns = [
  {
    header: 'Deal ID',
    accessor: (row) => row.id,
  },
  {
    header: 'Company',
    accessor: (row) => row.companyName,
  },
];

<DataTable
  title="Active Deals"
  description="Manage your active deals"
  columns={columns}
  data={deals}
  keyAccessor={(row) => row.id}
  searchPlaceholder="Search deals..."
  onSearch={handleSearch}
/>
```

**Props:**
- `title`: Table title (required)
- `description`: Optional description
- `columns`: Array of column definitions
- `data`: Array of data objects
- `keyAccessor`: Function to get unique key from row
- `searchPlaceholder`: Optional search placeholder
- `onSearch`: Optional search handler
- `filters`: Optional filter elements
- `renderMobileCard`: Optional custom mobile card renderer

### StatusBadge

Standardized badge for displaying status information.

```tsx
import { StatusBadge } from '@/components/design-system';

<StatusBadge variant="success">Active</StatusBadge>
<StatusBadge variant="warning">Pending</StatusBadge>
<StatusBadge variant="error">Rejected</StatusBadge>
```

**Variants:**
- `success`: Green badge for positive states
- `warning`: Orange badge for warning states
- `error`: Red badge for error states
- `info`: Blue badge for informational states
- `neutral`: Gray badge for neutral states
- `primary`: Purple badge for primary states

### EmptyState

Component for displaying empty states with optional actions.

```tsx
import { EmptyState } from '@/components/design-system';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

<EmptyState
  icon={FileText}
  title="No deals found"
  description="Get started by creating your first deal"
  action={<Button>Create Deal</Button>}
/>
```

### LoadingState

Standardized loading indicator with optional text.

```tsx
import { LoadingState } from '@/components/design-system';

<LoadingState size="lg" text="Loading data..." />

{/* Full page loader */}
<LoadingState size="xl" text="Please wait..." fullPage />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `text`: Optional loading message
- `fullPage`: boolean (default: false) - Centers with min-height
- `className`: Optional custom classes

---

## 🎨 Utility Classes

The design system provides utility classes for common patterns:

### Elevation (Shadows)

```css
.shadow-lendeck-xs    /* Subtle shadow */
.shadow-lendeck-sm    /* Small shadow for cards */
.shadow-lendeck-md    /* Medium shadow for dropdowns */
.shadow-lendeck-lg    /* Large shadow for modals */
.shadow-lendeck-xl    /* Extra large shadow */
.shadow-lendeck-2xl   /* Maximum elevation */
.shadow-lendeck-inner /* Inner shadow */
```

### Transitions

```css
.transition-lendeck-fast  /* 150ms transition */
.transition-lendeck-base  /* 200ms transition */
.transition-lendeck-slow  /* 300ms transition */
```

### Text Truncation

```css
.truncate-2-lines  /* Truncate after 2 lines */
.truncate-3-lines  /* Truncate after 3 lines */
```

### Scrollbars

```css
.scrollbar-thin  /* Thin scrollbar with Lendeck colors */
```

### Focus States

```css
.focus-lendeck  /* Standard focus ring with Lendeck primary color */
```

### Gradients

```css
.bg-gradient-lendeck-primary  /* Purple gradient */
.bg-gradient-lendeck-warm     /* Orange to pink gradient */
.bg-gradient-lendeck-cool     /* Blue to teal gradient */
```

### Component Base Classes

```css
.card-base       /* Base card styling */
.btn-base        /* Base button styling */
.input-base      /* Base input styling */
.badge-base      /* Base badge styling */
.link-primary    /* Primary link styling */
```

### Layout Utilities

```css
.container-lendeck   /* Max-width container with padding */
.section-spacing     /* Standard section vertical spacing */
.divider-lendeck     /* Horizontal divider line */
```

### Status Indicators

```css
.status-dot          /* Base status dot */
.status-dot-success  /* Green status dot */
.status-dot-error    /* Red status dot */
.status-dot-warning  /* Orange status dot */
.status-dot-info     /* Blue status dot */
```

---

## 📐 Usage Guidelines

### Using Design Tokens

Always use design tokens instead of hard-coded values:

**❌ Don't:**
```tsx
<div className="p-4 rounded-lg shadow-md bg-purple-600">
```

**✅ Do:**
```tsx
<div className="p-4 rounded-lg shadow-md bg-lendeck-primary">
```

Or use CSS variables:
```css
.my-component {
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  background-color: var(--lendeck-primary);
}
```

### Typography

Use semantic HTML elements and let the design system handle styling:

```tsx
<h1>Main Page Title</h1>       {/* Automatically styled */}
<h2>Section Title</h2>          {/* Automatically styled */}
<p>Body text content</p>        {/* Automatically styled */}
```

For custom text styling, use design tokens:

```css
.custom-text {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
}
```

### Spacing

Use the spacing scale for consistent spacing:

```tsx
{/* Padding */}
<div className="p-4">  {/* 16px padding */}
<div className="p-6">  {/* 24px padding */}

{/* Margin */}
<div className="mb-4"> {/* 16px bottom margin */}
<div className="mt-6"> {/* 24px top margin */}

{/* Gap (for flex/grid) */}
<div className="gap-3"> {/* 12px gap */}
<div className="gap-4"> {/* 16px gap */}
```

### Colors

Use Lendeck brand colors consistently:

**Primary Actions:**
- Use `--lendeck-primary` (#4E0F60) for primary buttons and links

**Status Indicators:**
- Success: `--lendeck-success` (#01942B)
- Error: `--lendeck-error` (#DD003F)
- Warning: `--lendeck-orange` (#FF5F0C)
- Info: `--lendeck-blue` (#159AEB)

**UI Elements:**
- Borders: `--lendeck-gray-lighter`
- Disabled states: `--lendeck-gray-light`
- Muted text: `--lendeck-gray-dark`

## ♿ Accessibility

All components follow WCAG 2.2 AA standards:

1. **Color Contrast**: All text meets minimum contrast ratios
2. **Keyboard Navigation**: All interactive elements are keyboard accessible
3. **Focus Indicators**: Visible focus states on all interactive elements
4. **Semantic HTML**: Proper use of headings, landmarks, and ARIA labels
5. **Responsive**: Mobile-friendly and touch-friendly targets

### Testing Checklist

- [ ] Can navigate entire interface with keyboard
- [ ] All interactive elements have visible focus states
- [ ] Color is not the only means of conveying information
- [ ] All images have alt text
- [ ] Headings are properly nested (h1 → h2 → h3)
- [ ] Forms have proper labels
- [ ] Error messages are clear and associated with inputs

## 🚀 Getting Started

1. Import design tokens in your component:
```tsx
import { designSystem } from '@/components/design-system';
```

2. Use design system components:
```tsx
import { StatusCard, PageHeader, DataTable } from '@/components/design-system';
```

3. Apply tokens in your styles:
```css
@import '@/styles/globals.css';

.my-component {
  padding: var(--space-4);
  color: var(--lendeck-primary);
}
```

## 📝 Best Practices

1. **Always use design tokens** for colors, spacing, typography
2. **Use design system components** when available
3. **Follow the spacing system** (8px grid)
4. **Maintain semantic HTML** structure
5. **Test on mobile devices** for responsiveness
6. **Verify accessibility** with keyboard navigation
7. **Use consistent patterns** across similar features
8. **Document custom components** that extend the design system

## 🔄 Updates

When updating the design system:

1. Update tokens in `/styles/globals.css`
2. Update TypeScript constants in `/components/design-system/tokens.ts`
3. Document changes in this README
4. Test all affected components
5. Update component library examples

## 📞 Support

For questions or suggestions about the design system, please refer to the main project documentation or contact the development team.
