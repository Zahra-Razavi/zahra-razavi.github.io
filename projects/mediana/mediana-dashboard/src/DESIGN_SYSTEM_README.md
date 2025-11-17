# Mediana VoIP Design System

> A comprehensive, token-based design system for building consistent, accessible user interfaces.

## 📚 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Design Files](#design-files)
- [Color System](#color-system)
- [Typography](#typography)
- [Spacing](#spacing)
- [Components](#components)
- [Accessibility](#accessibility)
- [Usage Guidelines](#usage-guidelines)

---

## Overview

The Mediana VoIP Design System is a comprehensive set of design tokens, components, and guidelines that ensure visual consistency and accessibility across the entire application. The system is built on three core principles:

1. **Token-Based**: All design decisions are defined as reusable tokens
2. **Component-Driven**: UI is built from composable, well-documented components
3. **Accessible-First**: WCAG AA compliance is built into every decision

---

## Getting Started

### Viewing the Design System

Access the interactive design system showcase at `/design-system` in the application. This page displays:

- Complete color palette with accessibility notes
- Typography scale and examples
- Spacing system visualization
- All component variants and states
- Design token reference

### Design Files

| File | Purpose | Location |
|------|---------|----------|
| `tokens.json` | Design tokens in Figma Tokens Studio format | `/tokens.json` |
| `FIGMA_TOKENS_GUIDE.md` | ⭐ How to import tokens to Figma | `/FIGMA_TOKENS_GUIDE.md` |
| `globals.css` | CSS variable implementations of tokens | `/styles/globals.css` |
| `TOKEN_CSS_MAPPING.md` | Token-to-CSS variable mapping reference | `/TOKEN_CSS_MAPPING.md` |
| `TOKENS_FORMAT_COMPARISON.md` | Figma vs CSS format explained | `/TOKENS_FORMAT_COMPARISON.md` |
| `components.ts` | Component specifications with token mappings | `/components.ts` |
| `DESIGN_SYSTEM_ANALYSIS.md` | Implementation analysis and guidelines | `/DESIGN_SYSTEM_ANALYSIS.md` |

### How Tokens Flow Through the System

```
tokens.json (Figma Tokens Studio Format)
    ↓
    ├─→ Figma (via Tokens Studio plugin) → Design Files
    │
    └─→ globals.css (CSS Variables) → Web Implementation
            ↓
        Tailwind Utilities + Components
            ↓
        Application UI
```

**🎨 Figma Integration**: 
- Import `tokens.json` to Figma using **Tokens Studio for Figma** plugin
- See `/FIGMA_TOKENS_GUIDE.md` for complete instructions

**💻 Web Implementation**:
- Tokens are implemented as CSS variables in `globals.css`
- Used throughout the app via Tailwind classes
- See `/TOKEN_CSS_MAPPING.md` for mappings

**Important**: When updating design tokens:
1. Update the value in `tokens.json` (Figma format)
2. Update the corresponding CSS variable in `globals.css` (web implementation)
3. Re-import to Figma if using Tokens Studio
4. Components will automatically update

---

## Color System

### Brand Colors

The primary brand color is **Mediana Teal**, available in multiple accessible variants:

```
Teal 50:  #f0f9f7  - Very light backgrounds
Teal 100: #ccebe6  - Borders and decorative elements
Teal 200: #9AC6BD  - Main brand color (backgrounds only)
Teal 600: #4A8B82  - Accessible variant for text/interactive (4.5:1 contrast) ⭐
Teal 700: #3A7A71  - Hover states
Teal 800: #2A6A61  - High contrast needs
Teal 900: #1A5A51  - Strong emphasis
```

**⚠️ Important**: Use Teal 600 or darker for text on white backgrounds to maintain accessibility.

### Neutral Colors

```
White:     #ffffff  - Light backgrounds
Dark Gray: #262626  - Text and sidebar
Black:     #000000  - Dark mode backgrounds
```

### Semantic Colors

```
Primary:     #4A8B82  - Main actions
Destructive: #dc2626  - Errors and deletions
Success:     #4A8B82  - Success states
Secondary:   #f8f9fa  - Secondary actions
Muted:       #f5f5f5  - Subtle backgrounds
Border:      #e5e7eb  - Borders and dividers
```

### Token to CSS Mapping

| Token | CSS Variable | Tailwind Class |
|-------|--------------|----------------|
| `colors.brand.teal.600` | `--teal-600` | `text-teal`, `bg-teal` |
| `colors.brand.teal.200` | `--teal-200` | `bg-teal-light` |
| `colors.semantic.primary.light` | `--primary` | Used by `Button variant="default"` |
| `colors.semantic.destructive.light` | `--destructive` | Used by `Badge variant="destructive"` |

**See `/TOKEN_CSS_MAPPING.md` for complete reference.**

### Usage in Code

```tsx
// Using Tailwind utility classes (maps to CSS variables)
<div className="text-teal">Accessible teal text</div>
<div className="bg-teal-light">Light teal background</div>
<div className="border-teal">Teal border</div>

// Using semantic tokens (components use CSS variables internally)
<Button variant="default">Uses --primary from tokens</Button>
<Badge variant="destructive">Uses --destructive from tokens</Badge>

// Direct CSS variable usage (if needed)
<div style={{ color: 'hsl(var(--teal-600))' }}>Custom usage</div>
```

---

## Typography

### Font Scale

Base font size: **15px**

| Token | Size | Use Case |
|-------|------|----------|
| `xs`   | 12px | Captions, small labels |
| `sm`   | 14px | Sidebar items, secondary text |
| `base` | 15px | Body text (default) |
| `lg`   | 18px | H3 headings, page headers |
| `xl`   | 20px | H2 headings |
| `2xl`  | 24px | H1 headings |
| `3xl`  | 30px | Hero text |

### Font Weights

| Weight | Value | Use Case |
|--------|-------|----------|
| Normal | 400   | Body text |
| Medium | 500   | Labels, buttons |
| Semibold | 600 | Subheadings |
| Bold   | 700   | Headings |

### Line Heights

- **Tight (1.25)**: Headings and compact text
- **Normal (1.5)**: Body text (default) ⭐
- **Relaxed (1.75)**: Long-form content

### Important Note

The design system uses global CSS for typography. **Do not** add Tailwind font size, weight, or line-height classes unless specifically needed, as the system already handles this:

```tsx
// ❌ Don't do this
<h2 className="text-xl font-medium">Page Title</h2>

// ✅ Do this instead
<h2>Page Title</h2>
```

---

## Spacing

The spacing scale provides consistent values for margins, padding, and gaps.

| Token | Value | Common Use |
|-------|-------|------------|
| `0.5` | 2px   | Micro spacing |
| `1`   | 4px   | Tight spacing |
| `2`   | 8px   | Small gaps |
| `2.5` | 10px  | Sidebar menu gaps ⭐ |
| `3`   | 12px  | Medium-small gaps |
| `4`   | 16px  | Standard padding ⭐ |
| `6`   | 24px  | Page/card padding ⭐ |
| `8`   | 32px  | Large spacing |
| `12`  | 48px  | Section spacing |

### Usage Examples

```tsx
// Page padding
<div className="p-6">...</div>

// Card padding
<CardContent className="p-6">...</CardContent>

// Sidebar menu gaps
<SidebarMenu className="space-y-2.5">...</SidebarMenu>

// Standard gaps
<div className="space-y-4">...</div>
<div className="gap-4">...</div>
```

---

## Components

All UI components are built using [shadcn/ui](https://ui.shadcn.com/) and customized to match the Mediana design system.

### Button Variants

```tsx
<Button variant="default">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Tertiary</Button>
<Button variant="link">Link Style</Button>
```

### Button Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

### Badge Variants

```tsx
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="recommended">Recommended</Badge>
```

### Card Structure

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Card content */}
  </CardContent>
  <CardFooter>
    {/* Card footer */}
  </CardFooter>
</Card>
```

### Form Elements

```tsx
// Input
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter email" />
</div>

// Select
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>

// Textarea
<Textarea placeholder="Enter description" />

// Checkbox
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>

// Switch
<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>
```

### Table Structure

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data 1</TableCell>
      <TableCell>Data 2</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## Accessibility

The Mediana Design System is built with accessibility as a core principle.

### Color Contrast

All text colors maintain **WCAG AA** standards:

- **Minimum contrast ratio**: 4.5:1 for normal text
- **Large text**: 3:1 for text 18px+ or 14px+ bold
- **Interactive elements**: Clearly distinguishable focus states

### Color Usage Rules

✅ **Do:**
- Use Teal 600 (#4A8B82) or darker for text on white
- Use semantic color tokens (primary, destructive, etc.)
- Maintain proper contrast in custom implementations

❌ **Don't:**
- Use Teal 200 (#9AC6BD) for text on white backgrounds
- Use color alone to convey information
- Override focus states without providing alternatives

### Focus States

All interactive elements have visible focus indicators:

```tsx
// Built into components
<Button>Button</Button> // Has focus ring

// Custom elements
<div className="focus-visible:ring-2 focus-visible:ring-ring">
  Focusable element
</div>
```

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Tab order follows logical flow
- Escape key closes dialogs and popovers
- Arrow keys navigate menus and lists

### Screen Reader Support

- Semantic HTML elements used throughout
- ARIA labels and descriptions where needed
- Status updates announced to screen readers
- Form validation errors clearly communicated

---

## Usage Guidelines

### Layout Patterns

#### Page Structure

```tsx
<div className="p-6 space-y-6">
  <div className="space-y-2">
    <h1>Page Title</h1>
    <p className="text-muted-foreground">Page description</p>
  </div>
  
  {/* Page content */}
</div>
```

#### Card Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>
```

#### Form Layout

```tsx
<form className="space-y-4">
  <div className="space-y-2">
    <Label>Field 1</Label>
    <Input />
  </div>
  
  <div className="space-y-2">
    <Label>Field 2</Label>
    <Input />
  </div>
  
  <div className="flex gap-2">
    <Button type="submit">Submit</Button>
    <Button variant="outline" type="button">Cancel</Button>
  </div>
</form>
```

### Component Composition

Build complex UIs by composing simple components:

```tsx
// Feature card with metric
<Card>
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle>Active Lines</CardTitle>
    <Phone className="h-4 w-4 text-teal" />
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">24</div>
    <p className="text-sm text-muted-foreground">+2 from last month</p>
  </CardContent>
</Card>
```

### Best Practices

#### ✅ Do

- Use semantic HTML elements
- Leverage existing shadcn components
- Follow the spacing scale consistently
- Use design tokens instead of hardcoded values
- Test keyboard navigation
- Verify color contrast
- Use proper heading hierarchy (h1 → h2 → h3)

#### ❌ Don't

- Create custom components when shadcn alternatives exist
- Use arbitrary spacing values
- Override typography with Tailwind classes
- Skip accessibility testing
- Use color alone for information
- Nest cards more than 2 levels deep

### Code Organization

```tsx
// 1. Imports
import { Card, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

// 2. Types
interface MyComponentProps {
  title: string;
}

// 3. Component
export function MyComponent({ title }: MyComponentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
```

---

## Resources

### Design System Files

- **Interactive Showcase**: Navigate to `/design-system` in the app
- **Token Definitions**: `/tokens.json`
- **Component Specs**: `/components.ts`
- **Analysis Document**: `/DESIGN_SYSTEM_ANALYSIS.md`

### External Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Radix UI](https://www.radix-ui.com/) (Component primitives)

---

## Support

For questions or issues with the design system:

1. Review the interactive showcase at `/design-system`
2. Check the component specifications in `/components.ts`
3. Refer to the analysis document for implementation details
4. Review existing implementations in the codebase

---

**Version**: 1.0.0  
**Last Updated**: October 21, 2025  
**Maintained by**: Mediana Development Team
